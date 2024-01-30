using Grpc.Core;
using Newtonsoft.Json;
using Spark.Connect;
using SparkConnect;
using Range = Spark.Connect.Range;

public static class RelationExtensions
{
    public static Relation WithColumn(this Relation input, string columnName, string value)
    {
        var newColumn = new Expression.Types.Alias
        {
            Expr = new Expression
            {
                Literal = new Expression.Types.Literal
                {
                    String = value
                }
            },
            Name = { columnName }
        };

        return new Relation
        {
            WithColumns = new WithColumns
            {
                Input = input,
                Aliases = { newColumn }
            }
        };
    }

    public static Relation RangeRelation(long end, long step = 1)
    {
        return new Relation
        {
            Range = new Range
            {
                Step = step,
                End = end
            }
        };
    }

    public static async Task Show(this Relation src, int truncate, int numRows, string sessionId, SparkConnectService.SparkConnectServiceClient client, Metadata headers)
    {
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
                        Truncate = truncate,
                        NumRows = numRows,
                        Input = src
                    }
                }
            }
        };

        await request.Execute(client, headers);
    }
}