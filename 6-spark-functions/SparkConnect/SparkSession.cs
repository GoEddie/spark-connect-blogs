using Grpc.Core;
using Grpc.Net.Client;
using Spark.Connect;
using static RelationExtensions;

namespace SparkConnect;

public class SparkSession
{
    public SparkSession()
    {
        Headers = new Metadata();   //cluster id and auth header if using Databricks

        var channel = GrpcChannel.ForAddress(GetSparkRemote(defaultRemote: "http://127.0.0.1:15002"), new GrpcChannelOptions());

        channel
            .ConnectAsync()
            .Wait();

        Client = new SparkConnectService.SparkConnectServiceClient(channel);
        SessionId = Guid.NewGuid().ToString();   
    }

    public string SessionId { get; set; }

    public SparkConnectService.SparkConnectServiceClient Client { get; set; }

    public Metadata Headers { get; init; }

    public int PlanId = 0;

    private static string GetSparkRemote(string defaultRemote)
    {
        var sparkRemote = Environment.GetEnvironmentVariable("SPARK_REMOTE");
        if (string.IsNullOrEmpty(sparkRemote))
        {
            return defaultRemote;
        }

        return sparkRemote.Replace("sc://", "http://");
    }

    public DataFrame Range(long end, long start = 0, long step = 1, int numPartitions = 1)
    {
      var relation = new Relation()
      {
          Common = new RelationCommon()
          {
              PlanId = GetNextPlanId()
          },
          Range = new Spark.Connect.Range()
          {
              Start = start,
              Step = step,
              End = end,
              NumPartitions = numPartitions
          },
      };

      return new DataFrame(relation, this);
    }

    public long GetNextPlanId() => Interlocked.Increment(ref PlanId);
}