using Grpc.Core;
using Grpc.Net.Client;
using Spark.Connect;
using SparkConnect;

namespace SparkLoggingProxy.Services;

 public class LoggingProxy : SparkConnectService.SparkConnectServiceBase
 {
     private static readonly SparkConnectService.SparkConnectServiceClient _client = GetClient();

     private static SparkConnectService.SparkConnectServiceClient GetClient()
     {
         Console.WriteLine("Creating new Client");
         var channel = GrpcChannel.ForAddress("http://localhost:15002", new GrpcChannelOptions());
         Task.Run(() => channel.ConnectAsync()).Wait();
         return new SparkConnectService.SparkConnectServiceClient(channel);
     }
     
     public override async Task ExecutePlan(ExecutePlanRequest request, IServerStreamWriter<ExecutePlanResponse> responseStream, ServerCallContext context)
     {
         Console.WriteLine("**** ExecutePlan ****");
         Console.WriteLine(string.IsNullOrEmpty(request.OperationId)
             ? $"Session: {request.SessionId}:"
             : $"Session: {request.SessionId}, OperationId: {request.OperationId}:");

         Console.WriteLine(request.PrettyPrint());
         
         var response = _client.ExecutePlan(request, context.RequestHeaders);
         while (await response.ResponseStream.MoveNext())
         {
             await responseStream.WriteAsync(response.ResponseStream.Current);
         }
     }

     public override async Task<AnalyzePlanResponse> AnalyzePlan(AnalyzePlanRequest request, ServerCallContext context)
     {
         Console.WriteLine("**** AnalyzePlan ****");
         Console.Write($"Session: {request.SessionId}, Client Type: {request.ClientType}:");
         Console.WriteLine(request.Explain?.Plan?.PrettyPrint());
         Console.WriteLine(request.Schema?.Plan?.PrettyPrint());
         return _client.AnalyzePlan(request, context.RequestHeaders);
     }

     public override Task<ConfigResponse> Config(ConfigRequest request, ServerCallContext context)
     {
         Console.WriteLine("**** Config ****");
         Console.Write($"Session: {request.SessionId}, Client Type: {request.ClientType}:");
         Console.WriteLine(request.Operation.PrettyPrint());
         
         var response = _client.Config(request, context.RequestHeaders);
         
         foreach (var pair in response.Pairs)
         {
             Console.WriteLine($"config pair: {pair.Key} = '{pair.Value}'");
         }

         if (response.Pairs.Count == 0)
         {
             Console.WriteLine("No Pairs Returned");
         }

         foreach (var warning in response.Warnings)
         {
             Console.WriteLine($"Warning: {warning}");
         }

         if (response.Warnings.Count == 0)
         {
             Console.WriteLine("No Warnings");
         }

         return Task.FromResult(response);
     }

     public override async Task<FetchErrorDetailsResponse> FetchErrorDetails(FetchErrorDetailsRequest request, ServerCallContext context)
     {
         return _client.FetchErrorDetails(request, context.RequestHeaders);
     }
     
 }