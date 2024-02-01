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
    
    public static Relation WithColumn(this Relation input, string columnName, Expression value)
    {
        var newColumn = new Expression.Types.Alias
        {
            Expr = value,
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

    public static async Task Show(this Relation src, int truncate, int numRows, SparkSession session)
    {
        var request = new ExecutePlanRequest
        {
            SessionId = session.SessionId,
            UserContext = new UserContext(),
            ClientType = "_SPARK_CONNECT_DOTNET",

            Plan = new Plan
            {
                Root = new Relation
                {
                    Common = new RelationCommon()
                    {
                      PlanId  = session.GetNextPlanId()
                    },
                    ShowString = new ShowString
                    {
                        Truncate = truncate,
                        NumRows = numRows,
                        Input = src
                    }
                }
            }
        };
        Console.WriteLine(request.Plan.PrettyPrint());
        await request.Execute(session);
    }
}