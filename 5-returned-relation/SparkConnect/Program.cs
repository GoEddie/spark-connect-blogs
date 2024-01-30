using Grpc.Core;
using Grpc.Net.Client;
using Spark.Connect;
using SparkConnect;
using static RelationExtensions;

var headers = new Metadata();   //cluster id and auth header if using Databricks

var channel = GrpcChannel.ForAddress("http://localhost:15002", new GrpcChannelOptions());
await channel.ConnectAsync();

var client = new SparkConnectService.SparkConnectServiceClient(channel);
var sessionId = Guid.NewGuid().ToString();

var dataFrameLeft = RangeRelation(100).WithColumn("hello", "lit_string_value");
var dataFrameRight = RangeRelation(500).WithColumn("bye", "oooh");
dataFrameRight = dataFrameRight.WithColumn("and", "another");

Console.WriteLine("***** Right *****");
Console.WriteLine(dataFrameRight.PrettyPrint());

Console.WriteLine("***** Plan 1 *****");

var request = new ExecutePlanRequest
{
    SessionId = sessionId,
    UserContext = new UserContext(),
    ClientType = ".NET Cool",

    Plan = new Plan
    {
        Root = new Relation
        {
            ShowString = new ShowString
            {
                Truncate = 100,
                NumRows = 30,
                Input = new Relation
                {
                    Join = new Join
                    {
                        JoinType = Join.Types.JoinType.Inner,
                        Left = dataFrameLeft,
                        Right = dataFrameRight
                    }
                }
            }
        }
    }
};

await request.Execute(client, headers);

Console.WriteLine("**** Plan 2 ****");
request = new ExecutePlanRequest
{
    SessionId = sessionId,
    UserContext = new UserContext(),
    ClientType = ".NET Cool",

    Plan = new Plan
    {
        Command = new Command()
        {
            SqlCommand = new SqlCommand()
            {
                Sql = "with a as (SELECT *, 'newcol' as a FROM range(5)), b as (select *, 'another' as b from range(15)) select * from a right outer join b on a.id = b.id "
            }
        }
    }
};

var returnedRelation = await request.Execute(client, headers);

Console.WriteLine("**** Plan 3 ****");

request = new ExecutePlanRequest
{
    SessionId = sessionId,
    UserContext = new UserContext(),
    ClientType = ".NET Cool",

    Plan = new Plan
    {
        Root = new Relation
        {
            ShowString = new ShowString
            {
                Truncate = 100,
                NumRows = 3000,
                Input = returnedRelation
            }
        }
    }
};

await request.Execute(client, headers);


var analyzePlanRequest = new AnalyzePlanRequest()
{
    SessionId = sessionId,
    UserContext = new UserContext(),
    ClientType = ".NET Cool",
    Explain = new AnalyzePlanRequest.Types.Explain()
    {
        ExplainMode = AnalyzePlanRequest.Types.Explain.Types.ExplainMode.Extended,
        Plan = new Plan()
        {
            Root = returnedRelation
        }
    }
};

var response = client.AnalyzePlan(analyzePlanRequest, headers);
Console.WriteLine("**** Explain String ****");
Console.WriteLine(response.Explain.ExplainString);


Console.WriteLine("**** Show ****");
await returnedRelation.Show(100, 3, sessionId, client, headers);

