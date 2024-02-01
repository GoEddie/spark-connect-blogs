using SparkConnect;
using static SparkConnect.Sql.Functions;

var spark = new SparkSession();

var dataFrame =
    spark.Range(100, 95)
        .WithColumn("array_values_in_col", Lit(new List<string>() { "Hello", "There" }))
        .WithColumn("binary_col", Lit(0x12))
        .WithColumn("decimal_col", Lit(1235400.000000000062527760747M));

Console.WriteLine("**** Show ****");

dataFrame.Show(20, 100);
