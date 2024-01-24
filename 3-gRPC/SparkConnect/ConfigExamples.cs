using Grpc.Core;
using Spark.Connect;

namespace SparkConnect;

public class ConfigExamples
{
    public static void GetAll(SparkConnectService.SparkConnectServiceClient client, string sessionId)
    {
        var response = client.Config(new ConfigRequest()
        {
            Operation = new ConfigRequest.Types.Operation()
            {
                GetAll = new ConfigRequest.Types.GetAll()
                {

                }
            }, SessionId = sessionId
        }, new Metadata());

        foreach (var config in response.Pairs)
        {
            Console.WriteLine($"{config.Key} = {config.Value}");
        }

        foreach (var warning in response.Warnings)
        {
            Console.WriteLine($"Warning: {warning}");
        }
    }
    
    public static void Get(SparkConnectService.SparkConnectServiceClient client, string sessionId)
    {
        var response = client.Config(new ConfigRequest()
        {
            Operation = new ConfigRequest.Types.Operation()
            {
                Get = new ConfigRequest.Types.Get()
                {
                    Keys = { "goeddie.runtime.language" }
                }
            }, SessionId = sessionId
        }, new Metadata());

        foreach (var config in response.Pairs)
        {
            Console.WriteLine($"{config.Key} = {config.Value}");
        }

        foreach (var warning in response.Warnings)
        {
            Console.WriteLine($"Warning: {warning}");
        }
        
    }
    
    public static void Set(SparkConnectService.SparkConnectServiceClient client, string sessionId)
    {
        const string key = "goeddie.runtime.language";
        const string value = ".NET SPARK FUN";
        var response = client.Config(new ConfigRequest()
        {
            Operation = new ConfigRequest.Types.Operation()
            {
                Set = new ConfigRequest.Types.Set()
                { 
                    Pairs = { new KeyValue(){ Key = key, Value = value} }
                }
            }, SessionId = sessionId
        }, new Metadata());
        
        foreach (var warning in response.Warnings)
        {
            Console.WriteLine($"Warning: {warning}");
        }

        Console.WriteLine($"Set '{key}' to '{value}'");
    }
    
    public static void Unset(SparkConnectService.SparkConnectServiceClient client, string sessionId)
    {
        var response = client.Config(new ConfigRequest()
        {
            Operation = new ConfigRequest.Types.Operation()
            {
                Unset = new ConfigRequest.Types.Unset()
                { 
                    Keys = { "goeddie.runtime.language" }
                }
            }, SessionId = sessionId
        }, new Metadata());

        foreach (var config in response.Pairs)
        {
            Console.WriteLine($"{config.Key} = {config.Value}");
        }

        foreach (var warning in response.Warnings)
        {
            Console.WriteLine($"Warning: {warning}");
        }
    }
}