using Newtonsoft.Json;
using Spark.Connect;

namespace SparkConnect;

public static class PrettyPrintExtensions
{
    public static string PrettyPrint(this Relation src) => Format(src.ToString());

    public static string PrettyPrint(this DataType.Types.Struct src) => Format(src.ToString());

    public static string PrettyPrint(this ExecutePlanRequest src) => Format(src.ToString());
    
    

    public static string PrettyPrint(this ConfigRequest.Types.Operation src) => Format(src.ToString());
    public static string PrettyPrint(this Plan src) => $"{Format(src.ToString())}";
    
    private static string Format(string json) => JsonConvert.SerializeObject(JsonConvert.DeserializeObject(json), Formatting.Indented);
}