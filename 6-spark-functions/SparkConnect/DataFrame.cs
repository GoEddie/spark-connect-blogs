using Spark.Connect;

namespace SparkConnect;

public class DataFrame
{
    public Relation Relation { get; init; }
    public SparkSession Session { get; init; }

    public DataFrame(Relation relation, SparkSession session)
    {
        Relation = relation;
        Session = session;
    }

    public DataFrame WithColumn( string columnName, Expression value)
    {
        return new DataFrame(this.Relation.WithColumn(columnName, value), this.Session);
    }
    
    public void Show(int numberOfRows = 10, int truncate = 20, bool vertical = false)
    {
        Relation
            .Show(truncate, numberOfRows, Session)
            .Wait();
    }
}