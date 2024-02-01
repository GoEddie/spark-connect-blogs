using System.Text;
using Apache.Arrow;
using Apache.Arrow.Ipc;
using Apache.Arrow.Types;
using Spark.Connect;

namespace SparkConnect;

public class ArrowBatchWrapper
{
    public List<Row> ToDataset(ExecutePlanResponse.Types.ArrowBatch batch)
    {
        var rows = new List<Row>();
        var reader = new ArrowStreamReader(batch.Data.Memory);

        var recordBatch = reader.ReadNextRecordBatch();
        //todo - do we need to handle multiple record batches??

        var columnData = new List<IList<object>>();

        foreach (var array in recordBatch.Arrays)
        {
            var items = FromArray(array);
            columnData.Add(items);
        }

        for (var i = 0; i < recordBatch.Length; i++)
        {
            var row = new Row
            {
                Values = new List<object>(columnData.Count)
            };

            foreach (var column in columnData)
            {
                if(i  < column.Count)
                    row.Values.Add(column[i]);
            }

            rows.Add(row);
        }

        return rows;
    }

    private static IList<object> FromArray(IArrowArray array)
    {
        var items = new List<object>(array.Length);

        switch (array.Data.DataType)
        {
            case Schema schema:
                break;
            case BinaryType binaryType:
                break;
            case BinaryViewType binaryViewType:
                break;
            case BooleanType booleanType:
                break;
            case Date32Type date32Type:
                break;
            case Date64Type date64Type:
                break;
            case DateType dateType:
                break;
            case Decimal128Type decimal128Type:
                break;
            case Decimal256Type decimal256Type:
                break;
            case DictionaryType dictionaryType:
                break;
            case DoubleType doubleType:
                break;
            case DurationType durationType:
                break;
            case FixedSizeBinaryType fixedSizeBinaryType:
                break;
            case FixedSizeListType fixedSizeListType:
                break;
            case FloatType floatType:
                break;
            case HalfFloatType halfFloatType:
                break;
            case FloatingPointType floatingPointType:
                break;
            case Int16Type int16Type:
                break;
            case Int32Type int32Type:
                break;
            case Int64Type int64Type:

                foreach (var item in (array as Int64Array).Values) items.Add(item);

                break;
            case Int8Type int8Type:
                break;
            case UInt16Type uInt16Type:
                break;
            case UInt32Type uInt32Type:
                break;
            case UInt64Type uInt64Type:
                break;
            case UInt8Type uInt8Type:
                break;
            case IntegerType integerType:
                break;
            case IntervalType intervalType:
                break;
            case NumberType numberType:
                break;
            case Time32Type time32Type:
                break;
            case Time64Type time64Type:
                break;
            case TimestampType timestampType:
                break;
            case TimeType timeType:
                break;
            case TimeBasedType timeBasedType:
                break;
            case FixedWidthType fixedWidthType:
                break;
            case ListType listType:
                break;
            case ListViewType listViewType:
                break;
            case MapType mapType:
                break;
            case StructType structType:
                break;
            case UnionType unionType:
                break;
            case NestedType nestedType:
                break;
            case NullType nullType:
                break;
            case StringType stringType:

                var stringArray = array as StringArray;

                var lastOffset = 0;

                foreach (var offset in stringArray.ValueOffsets)
                {
                    if (offset == 0) continue;

                    items.Add(Encoding.UTF8.GetString(stringArray.Values.Slice(lastOffset, offset - lastOffset)));
                    lastOffset = offset;
                }

                break;
            case StringViewType stringViewType:
                break;
            case ArrowType arrowType:
                break;
            case IRecordType recordType:
                break;
            default:

                throw new ArgumentOutOfRangeException();
        }

        return items;
    }
}

public class Dataset
{
    public readonly List<Row> Rows;
    public readonly DataType.Types.Struct Schema;

    public Dataset(DataType.Types.Struct schema, List<Row> rows)
    {
        Schema = schema;
        Rows = rows;
    }

    public string AsString()
    {
        var builder = new StringBuilder();
        foreach (var row in Rows)
        {
            foreach (var value in row.Values) builder.AppendFormat("{0},", value);

            if (builder.Length > 2) builder.Remove(builder.Length - 2, 2);

            builder.Append("\n");
        }

        return builder.ToString();
    }
}

public class Row
{
    public Row()
    {
        Values = new List<object>();
    }

    public List<object> Values { get; set; }
}