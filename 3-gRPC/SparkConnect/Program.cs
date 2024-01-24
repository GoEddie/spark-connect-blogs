using Grpc.Core;
using Grpc.Net.Client;
using Spark.Connect;
using SparkConnect;

var channel = GrpcChannel.ForAddress("http://localhost:15002", new GrpcChannelOptions(){});
await channel.ConnectAsync();

var client = new SparkConnectService.SparkConnectServiceClient(channel);
var sessionId = Guid.NewGuid().ToString();

ConfigExamples();
await ArtifactExample();

void ConfigExamples()
{
    Console.WriteLine("******* Config.Set *******");
    SparkConnect.ConfigExamples.Set(client, sessionId);
    
    Console.WriteLine("******* Config.Get *******");
    SparkConnect.ConfigExamples.Get(client, sessionId);
    
    Console.WriteLine("******* Config.Unset *******");
    SparkConnect.ConfigExamples.Unset(client, sessionId);
    
    Console.WriteLine("******* Config.GetAll *******");
    SparkConnect.ConfigExamples.GetAll(client, sessionId);
}

async Task ArtifactExample()
{
    Console.WriteLine("******* Artifact.Add *******");
    await ArtifactExamples.AddArtifact(client, sessionId);
    
    Console.WriteLine("******* Artifact.Status *******");
    ArtifactExamples.ArtifactStatus(client, sessionId);
    
    Console.WriteLine("******* Artifact.Status File Not Uploaded *******");
    ArtifactExamples.ArtifactNotUploadedStatus(client, sessionId);
}

Console.WriteLine("Done.");
