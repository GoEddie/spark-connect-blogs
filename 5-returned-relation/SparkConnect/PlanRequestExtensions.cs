using Grpc.Core;
using Spark.Connect;

namespace SparkConnect;

public static class PlanRequestExtensions
{
    public static async Task<Relation> 
        Execute(
            this ExecutePlanRequest executePlanRequest, 
            SparkConnectService.SparkConnectServiceClient client, 
            Metadata headers)
        {
       
        executePlanRequest.Tags.Add("Example Tag");
        var response = client.ExecutePlan(executePlanRequest, headers);
        DataType.Types.Struct? schema = null;

        Relation? resultDataframe = null;

        while (await response.ResponseStream.MoveNext())
        {
            var current = response.ResponseStream.Current;
            if (current.ResponseId != null) Console.WriteLine($"Response ID: {current.ResponseId}");

            if (current.Schema != null)
            {
                Console.WriteLine(current.Schema.Struct.PrettyPrint());
                if (current.Schema.Struct != null) schema = current.Schema.Struct;
            }

            if (current.ArrowBatch != null)
            {
                var rows = new ArrowBatchWrapper().ToDataset(current.ArrowBatch);
                var dataset = new Dataset(schema, rows);
                Console.WriteLine($"We have an arrow batch: {dataset.Rows.Count}");
                Console.WriteLine(dataset.AsString());
            }

            if (current.Metrics != null)
                foreach (var metric in current.Metrics.Metrics_)
                foreach (var value in metric.ExecutionMetrics)
                    Console.WriteLine($"Metric: {metric.Name}, {value.Key}, {value.Value.Name} = {value.Value.Value}");

            if (current.ObservedMetrics != null)
                foreach (var metric in current.ObservedMetrics)
                foreach (var value in metric.Values)
                    Console.WriteLine($"ObservedMetric: {metric.Name} = {value}");

            if (current.SqlCommandResult != null)
            {
                resultDataframe = current.SqlCommandResult.Relation;
            }
        }

        if (resultDataframe != null)
        {
            Console.WriteLine("**** Result data frame ****");
            Console.WriteLine(resultDataframe.PrettyPrint());
        }

        return resultDataframe;
    }
}