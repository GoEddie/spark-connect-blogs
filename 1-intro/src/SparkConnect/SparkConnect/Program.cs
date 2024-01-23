using System.Text.Json;
using Grpc.Core;
using Grpc.Net.Client;
using Newtonsoft.Json;
using Spark.Connect;

//Create a gRPC channel
var channel = GrpcChannel.ForAddress("http://localhost:15002", new GrpcChannelOptions(){});
await channel.ConnectAsync();

var client = new SparkConnectService.SparkConnectServiceClient(channel);

//Create a range relation - think of a relation here as a `DataFrame` 
var rangeRelation = new Relation()
    {
        Range = new global::Spark.Connect.Range
        {
            Start = 10,
            End = 100,
            Step = 5,
            NumPartitions = 1
        }
    };

//Create a plan - our job is to create a plan and send that plan over to the spark server which executes it
var writeParquetFilePlan = new Plan()
{
    Command = new Command()
    {
        WriteOperation = new WriteOperation()
        {
            Mode = WriteOperation.Types.SaveMode.Overwrite,
            Source = "parquet",
            Path = "/tmp/wow.parquet",
            Input = rangeRelation
        }
    }
};


//What does the whole plan look like?
var parsedJson = JsonConvert.DeserializeObject(writeParquetFilePlan.ToString());
Console.WriteLine(JsonConvert.SerializeObject(parsedJson, Formatting.Indented));

// Execute it
var response = client.ExecutePlan(new ExecutePlanRequest() { Plan = writeParquetFilePlan }, new Metadata());
while (await response.ResponseStream.MoveNext())
{
        
}

Console.WriteLine("Done!");


