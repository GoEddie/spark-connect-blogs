using Grpc.Core;
using Grpc.Net.Client;
using Newtonsoft.Json;
using Spark.Connect;


string GetArg(int i) => Environment.GetCommandLineArgs()[i];

var databricksWorkspaceUrl = GetArg(1);
var databricksClusterId = GetArg(2);
var bearerToken = GetArg(3);

var channel = GrpcChannel.ForAddress(databricksWorkspaceUrl, new GrpcChannelOptions(){});
await channel.ConnectAsync();
var client = new SparkConnectService.SparkConnectServiceClient(channel);

var headers = new Metadata
{
    { "Authorization", $"Bearer {bearerToken}" },
    { "x-databricks-cluster-id", $"{databricksClusterId}" }
};

var context = new UserContext()
{
    UserName = "Ed Elliott",
    UserId = "ed@agilesql.co.uk"
};

async Task<Relation?> Sql(string sql)
{
    var plan = new Plan()
    {
        Command = new Command()
        {
            SqlCommand = new SqlCommand()
            {
                Sql = sql
            }
        }
    };

//What does the whole plan look like?
    var parsedJson = JsonConvert.DeserializeObject(plan.ToString());
    Console.WriteLine(JsonConvert.SerializeObject(parsedJson, Formatting.Indented));

// Execute it
    var response = client!.ExecutePlan(new ExecutePlanRequest() { Plan = plan, UserContext = context, ClientType = ".NET FTW"}, headers);
    Relation? returnedRelation = null;
    
    while (await response.ResponseStream.MoveNext())
    {
        if (response.ResponseStream.Current.SqlCommandResult != null)
        {
            //If the response includes a Relation we will get it here
            returnedRelation = response.ResponseStream.Current.SqlCommandResult.Relation;
        }
    }

    return returnedRelation;
}

var dataFrame = await Sql($"SELECT '.NET {Environment.Version}' as Version, '{Environment.MachineName}' as Machine");

//Create a plan - our job is to create a plan and send that plan over to the spark server which executes it
var writeParquetFilePlan = new Plan()
{
    Command = new Command()
    {
        WriteOperation = new WriteOperation()
        {
            Mode = WriteOperation.Types.SaveMode.Overwrite,
            Source = "parquet",
            Path = "dbfs:/mnt/datalake/wow.parquet",
            Input = dataFrame
        }
    }
};


//What does the whole plan look like?
var parsedJson = JsonConvert.DeserializeObject(writeParquetFilePlan.ToString());
Console.WriteLine(JsonConvert.SerializeObject(parsedJson, Formatting.Indented));

// Execute it
var response = client.ExecutePlan(new ExecutePlanRequest() { Plan = writeParquetFilePlan, UserContext = context, ClientType = ".NET FTW"}, headers);
while (await response.ResponseStream.MoveNext())
{
        
}

Console.WriteLine("Done!");