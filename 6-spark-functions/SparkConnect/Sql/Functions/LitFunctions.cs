using System.Collections;
using System.Globalization;
using Google.Protobuf.Collections;
using Spark.Connect;
using static Spark.Connect.Expression.Types;

namespace SparkConnect.Sql;

public partial class Functions
{
    private static readonly DateTime UnixEpochStart = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
    private static Literal LitInternal(object value) => value switch
    {
        string str => new Literal { String = str },
        int i => new Literal { Integer = i },
        bool b => new Literal { Boolean = b },
        double d => new Literal { Double = d },
        byte b => new Literal(){ Byte = b},
        short s => new Literal(){ Short = s},
        long l =>  new Literal(){ Long = l},
        float f =>  new Literal(){ Float = f},
        decimal d =>  new Literal(){ Decimal = GetDecimal(d)},
        DateOnly d => new Literal() { Date = GetDateOnly(d) },
        DateTime d and {Kind: DateTimeKind.Unspecified} => new Literal(){ TimestampNtz = GetTimeStamp(d)},
        DateTime d and {Kind: DateTimeKind.Local} => new Literal(){ Timestamp = GetTimeStamp(d)},
        DateTime d and {Kind: DateTimeKind.Utc} => new Literal(){ Timestamp = GetTimeStamp(d)},
        
    };

    private static long GetTimeStamp(DateTime dateTime) => (long)(dateTime - UnixEpochStart).TotalMicroseconds;

    private static int GetDateOnly(DateOnly dateOnly)
    {
        var now = dateOnly.ToDateTime(new TimeOnly());
        var differenceSinceEpoch = now - UnixEpochStart;
        return differenceSinceEpoch.Days;
    }

    private static Literal.Types.Decimal GetDecimal(decimal d)
    {
        var value = d.ToString(CultureInfo.InvariantCulture);
        var precision = value.Replace(".", "").Length;
        var scale = value.Length - value.IndexOf(".");

        return new Literal.Types.Decimal()
        {
            Value = value,
            Precision = precision,
            Scale = scale
        };
    }

    private static Expression ExpressionFromList(IList list)
    {
        var items = new RepeatedField<Expression>();
        foreach (var item in list)
        {
            items.Add(new Expression()
            {
                Literal = LitInternal(item)
            });
        }
        
        return new Expression()
        {
            UnresolvedFunction = new UnresolvedFunction()
            {
                FunctionName = "array",
                Arguments = { items }
            }
        };
    }

    public static Expression Lit(object value) => value switch
    {
        IList list => ExpressionFromList(list),
        _ => new Expression() { Literal = LitInternal(value) }
    };
}