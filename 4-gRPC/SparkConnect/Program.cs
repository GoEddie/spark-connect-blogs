using Grpc.Net.Client;
using Spark.Connect;
using Range = Spark.Connect.Range;

var channel = GrpcChannel.ForAddress("http://localhost:15002", new GrpcChannelOptions(){});
await channel.ConnectAsync();

var client = new SparkConnectService.SparkConnectServiceClient(channel);
var sessionId = Guid.NewGuid().ToString();

var response = client.AnalyzePlan(new AnalyzePlanRequest()
{
    ClientType = ".NET Awesome",
    SessionId = sessionId,
    Explain = new AnalyzePlanRequest.Types.Explain()
    {
        ExplainMode = AnalyzePlanRequest.Types.Explain.Types.ExplainMode.Extended,
        Plan = new Plan()
        {
            Root = new Relation()
            {
                ShowString = new ShowString()
                {
                    Input = new Relation()
                    {
                        Range = new Range()
                        {
                            Start = 0, End = 100, Step = 2, NumPartitions = 1
                        }
                    }
                }
            }
        }
    }
});

Console.WriteLine(response.Explain.ExplainString);