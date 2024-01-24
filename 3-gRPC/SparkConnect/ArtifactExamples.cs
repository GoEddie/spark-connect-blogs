using System.Text;
using System.Text.Unicode;
using Force.Crc32;
using Google.Protobuf;
using Grpc.Core;
using Spark.Connect;

namespace SparkConnect;
public class ArtifactExamples
{
    public static async Task AddArtifact(SparkConnectService.SparkConnectServiceClient client, string sessionId)
    {
        var requestCall = client.AddArtifacts(new Metadata());
        
        var fileContent = Encoding.Unicode.GetBytes("print('hello, world!)'");

        var request = new AddArtifactsRequest()
        {
            Batch = new AddArtifactsRequest.Types.Batch()
            {
                Artifacts =
                {
                    new AddArtifactsRequest.Types.SingleChunkArtifact()
                    {
                        Name = "cache/file.py",
                        Data = new AddArtifactsRequest.Types.ArtifactChunk()
                        {
                            Data = ByteString.CopyFrom(fileContent), Crc = Crc32Algorithm.Compute(fileContent)
                        }
                    }
                }
            }, SessionId = sessionId
        };

        await requestCall.RequestStream.WriteAsync(request);

        await requestCall.RequestStream.CompleteAsync();

        await requestCall.ResponseAsync.WaitAsync(TimeSpan.FromSeconds(30));
        
        Console.WriteLine($"Was Crc Successful? {requestCall.ResponseAsync.Result.Artifacts[0].IsCrcSuccessful}");
    }

    public static void ArtifactStatus(SparkConnectService.SparkConnectServiceClient client, string sessionId)
    {
        var request = new ArtifactStatusesRequest()
        {
            Names = { "cache/file.py" }, SessionId = sessionId
        };

        var response = client.ArtifactStatus(request);
        foreach (var status in response.Statuses)
        {                                                      
            Console.WriteLine($"Artifact: '{status.Key}' status: '{status.Value}' ");    
        }
    }
    
    public static void ArtifactNotUploadedStatus(SparkConnectService.SparkConnectServiceClient client, string sessionId)
    {
        var request = new ArtifactStatusesRequest()
        {
            Names = { "cache/AnotherFileNeverUploaded.jar" }, SessionId = sessionId
        };

        var response = client.ArtifactStatus(request);
        foreach (var status in response.Statuses)
        {                        
            Console.WriteLine($"Artifact: '{status.Key}' status: '{status.Value}' ");    
        }
    }
}