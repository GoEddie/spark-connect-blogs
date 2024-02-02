/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { DataType } from "./types";
import Long = require("long");

export const protobufPackage = "spark.connect";

/**
 * Expression used to refer to fields, functions and similar. This can be used everywhere
 * expressions in SQL appear.
 */
export interface Expression {
  literal?: Expression_Literal | undefined;
  unresolvedAttribute?: Expression_UnresolvedAttribute | undefined;
  unresolvedFunction?: Expression_UnresolvedFunction | undefined;
  expressionString?: Expression_ExpressionString | undefined;
  unresolvedStar?: Expression_UnresolvedStar | undefined;
  alias?: Expression_Alias | undefined;
  cast?: Expression_Cast | undefined;
  unresolvedRegex?: Expression_UnresolvedRegex | undefined;
  sortOrder?: Expression_SortOrder | undefined;
  lambdaFunction?: Expression_LambdaFunction | undefined;
  window?: Expression_Window | undefined;
  unresolvedExtractValue?: Expression_UnresolvedExtractValue | undefined;
  updateFields?: Expression_UpdateFields | undefined;
  unresolvedNamedLambdaVariable?: Expression_UnresolvedNamedLambdaVariable | undefined;
  commonInlineUserDefinedFunction?: CommonInlineUserDefinedFunction | undefined;
  callFunction?: CallFunction | undefined;
  namedArgumentExpression?: NamedArgumentExpression | undefined;
  getColumnByOrdinal?:
    | Expression_GetColumnByOrdinal
    | undefined;
  /**
   * This field is used to mark extensions to the protocol. When plugins generate arbitrary
   * relations they can add them here. During the planning the correct resolution is done.
   */
  extension?: Any | undefined;
}

/** Expression for the OVER clause or WINDOW clause. */
export interface Expression_Window {
  /** (Required) The window function. */
  windowFunction:
    | Expression
    | undefined;
  /** (Optional) The way that input rows are partitioned. */
  partitionSpec: Expression[];
  /** (Optional) Ordering of rows in a partition. */
  orderSpec: Expression_SortOrder[];
  /**
   * (Optional) Window frame in a partition.
   *
   * If not set, it will be treated as 'UnspecifiedFrame'.
   */
  frameSpec: Expression_Window_WindowFrame | undefined;
}

/** The window frame */
export interface Expression_Window_WindowFrame {
  /** (Required) The type of the frame. */
  frameType: Expression_Window_WindowFrame_FrameType;
  /** (Required) The lower bound of the frame. */
  lower:
    | Expression_Window_WindowFrame_FrameBoundary
    | undefined;
  /** (Required) The upper bound of the frame. */
  upper: Expression_Window_WindowFrame_FrameBoundary | undefined;
}

export enum Expression_Window_WindowFrame_FrameType {
  FRAME_TYPE_UNDEFINED = 0,
  /** FRAME_TYPE_ROW - RowFrame treats rows in a partition individually. */
  FRAME_TYPE_ROW = 1,
  /**
   * FRAME_TYPE_RANGE - RangeFrame treats rows in a partition as groups of peers.
   * All rows having the same 'ORDER BY' ordering are considered as peers.
   */
  FRAME_TYPE_RANGE = 2,
  UNRECOGNIZED = -1,
}

export function expression_Window_WindowFrame_FrameTypeFromJSON(object: any): Expression_Window_WindowFrame_FrameType {
  switch (object) {
    case 0:
    case "FRAME_TYPE_UNDEFINED":
      return Expression_Window_WindowFrame_FrameType.FRAME_TYPE_UNDEFINED;
    case 1:
    case "FRAME_TYPE_ROW":
      return Expression_Window_WindowFrame_FrameType.FRAME_TYPE_ROW;
    case 2:
    case "FRAME_TYPE_RANGE":
      return Expression_Window_WindowFrame_FrameType.FRAME_TYPE_RANGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Expression_Window_WindowFrame_FrameType.UNRECOGNIZED;
  }
}

export function expression_Window_WindowFrame_FrameTypeToJSON(object: Expression_Window_WindowFrame_FrameType): string {
  switch (object) {
    case Expression_Window_WindowFrame_FrameType.FRAME_TYPE_UNDEFINED:
      return "FRAME_TYPE_UNDEFINED";
    case Expression_Window_WindowFrame_FrameType.FRAME_TYPE_ROW:
      return "FRAME_TYPE_ROW";
    case Expression_Window_WindowFrame_FrameType.FRAME_TYPE_RANGE:
      return "FRAME_TYPE_RANGE";
    case Expression_Window_WindowFrame_FrameType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Expression_Window_WindowFrame_FrameBoundary {
  /** CURRENT ROW boundary */
  currentRow?:
    | boolean
    | undefined;
  /**
   * UNBOUNDED boundary.
   * For lower bound, it will be converted to 'UnboundedPreceding'.
   * for upper bound, it will be converted to 'UnboundedFollowing'.
   */
  unbounded?:
    | boolean
    | undefined;
  /** This is an expression for future proofing. We are expecting literals on the server side. */
  value?: Expression | undefined;
}

/**
 * SortOrder is used to specify the  data ordering, it is normally used in Sort and Window.
 * It is an unevaluable expression and cannot be evaluated, so can not be used in Projection.
 */
export interface Expression_SortOrder {
  /** (Required) The expression to be sorted. */
  child:
    | Expression
    | undefined;
  /** (Required) The sort direction, should be ASCENDING or DESCENDING. */
  direction: Expression_SortOrder_SortDirection;
  /** (Required) How to deal with NULLs, should be NULLS_FIRST or NULLS_LAST. */
  nullOrdering: Expression_SortOrder_NullOrdering;
}

export enum Expression_SortOrder_SortDirection {
  SORT_DIRECTION_UNSPECIFIED = 0,
  SORT_DIRECTION_ASCENDING = 1,
  SORT_DIRECTION_DESCENDING = 2,
  UNRECOGNIZED = -1,
}

export function expression_SortOrder_SortDirectionFromJSON(object: any): Expression_SortOrder_SortDirection {
  switch (object) {
    case 0:
    case "SORT_DIRECTION_UNSPECIFIED":
      return Expression_SortOrder_SortDirection.SORT_DIRECTION_UNSPECIFIED;
    case 1:
    case "SORT_DIRECTION_ASCENDING":
      return Expression_SortOrder_SortDirection.SORT_DIRECTION_ASCENDING;
    case 2:
    case "SORT_DIRECTION_DESCENDING":
      return Expression_SortOrder_SortDirection.SORT_DIRECTION_DESCENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Expression_SortOrder_SortDirection.UNRECOGNIZED;
  }
}

export function expression_SortOrder_SortDirectionToJSON(object: Expression_SortOrder_SortDirection): string {
  switch (object) {
    case Expression_SortOrder_SortDirection.SORT_DIRECTION_UNSPECIFIED:
      return "SORT_DIRECTION_UNSPECIFIED";
    case Expression_SortOrder_SortDirection.SORT_DIRECTION_ASCENDING:
      return "SORT_DIRECTION_ASCENDING";
    case Expression_SortOrder_SortDirection.SORT_DIRECTION_DESCENDING:
      return "SORT_DIRECTION_DESCENDING";
    case Expression_SortOrder_SortDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Expression_SortOrder_NullOrdering {
  SORT_NULLS_UNSPECIFIED = 0,
  SORT_NULLS_FIRST = 1,
  SORT_NULLS_LAST = 2,
  UNRECOGNIZED = -1,
}

export function expression_SortOrder_NullOrderingFromJSON(object: any): Expression_SortOrder_NullOrdering {
  switch (object) {
    case 0:
    case "SORT_NULLS_UNSPECIFIED":
      return Expression_SortOrder_NullOrdering.SORT_NULLS_UNSPECIFIED;
    case 1:
    case "SORT_NULLS_FIRST":
      return Expression_SortOrder_NullOrdering.SORT_NULLS_FIRST;
    case 2:
    case "SORT_NULLS_LAST":
      return Expression_SortOrder_NullOrdering.SORT_NULLS_LAST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Expression_SortOrder_NullOrdering.UNRECOGNIZED;
  }
}

export function expression_SortOrder_NullOrderingToJSON(object: Expression_SortOrder_NullOrdering): string {
  switch (object) {
    case Expression_SortOrder_NullOrdering.SORT_NULLS_UNSPECIFIED:
      return "SORT_NULLS_UNSPECIFIED";
    case Expression_SortOrder_NullOrdering.SORT_NULLS_FIRST:
      return "SORT_NULLS_FIRST";
    case Expression_SortOrder_NullOrdering.SORT_NULLS_LAST:
      return "SORT_NULLS_LAST";
    case Expression_SortOrder_NullOrdering.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Expression_Cast {
  /** (Required) the expression to be casted. */
  expr: Expression | undefined;
  type?:
    | DataType
    | undefined;
  /** If this is set, Server will use Catalyst parser to parse this string to DataType. */
  typeStr?: string | undefined;
}

export interface Expression_Literal {
  null?: DataType | undefined;
  binary?: Uint8Array | undefined;
  boolean?: boolean | undefined;
  byte?: number | undefined;
  short?: number | undefined;
  integer?: number | undefined;
  long?: number | undefined;
  float?: number | undefined;
  double?: number | undefined;
  decimal?: Expression_Literal_Decimal | undefined;
  string?:
    | string
    | undefined;
  /** Date in units of days since the UNIX epoch. */
  date?:
    | number
    | undefined;
  /** Timestamp in units of microseconds since the UNIX epoch. */
  timestamp?:
    | number
    | undefined;
  /** Timestamp in units of microseconds since the UNIX epoch (without timezone information). */
  timestampNtz?: number | undefined;
  calendarInterval?: Expression_Literal_CalendarInterval | undefined;
  yearMonthInterval?: number | undefined;
  dayTimeInterval?: number | undefined;
  array?: Expression_Literal_Array | undefined;
  map?: Expression_Literal_Map | undefined;
  struct?: Expression_Literal_Struct | undefined;
}

export interface Expression_Literal_Decimal {
  /** the string representation. */
  value: string;
  /**
   * The maximum number of digits allowed in the value.
   * the maximum precision is 38.
   */
  precision?:
    | number
    | undefined;
  /** declared scale of decimal literal */
  scale?: number | undefined;
}

export interface Expression_Literal_CalendarInterval {
  months: number;
  days: number;
  microseconds: number;
}

export interface Expression_Literal_Array {
  elementType: DataType | undefined;
  elements: Expression_Literal[];
}

export interface Expression_Literal_Map {
  keyType: DataType | undefined;
  valueType: DataType | undefined;
  keys: Expression_Literal[];
  values: Expression_Literal[];
}

export interface Expression_Literal_Struct {
  structType: DataType | undefined;
  elements: Expression_Literal[];
}

/**
 * An unresolved attribute that is not explicitly bound to a specific column, but the column
 * is resolved during analysis by name.
 */
export interface Expression_UnresolvedAttribute {
  /**
   * (Required) An identifier that will be parsed by Catalyst parser. This should follow the
   * Spark SQL identifier syntax.
   */
  unparsedIdentifier: string;
  /** (Optional) The id of corresponding connect plan. */
  planId?:
    | number
    | undefined;
  /** (Optional) The requested column is a metadata column. */
  isMetadataColumn?: boolean | undefined;
}

/** An unresolved attribute that is represented by its column index. */
export interface Expression_GetColumnByOrdinal {
  /** (Required) 0-based column index. */
  ordinal: number;
  /** (Optional) The id of corresponding connect plan. */
  planId?: number | undefined;
}

/**
 * An unresolved function is not explicitly bound to one explicit function, but the function
 * is resolved during analysis following Sparks name resolution rules.
 */
export interface Expression_UnresolvedFunction {
  /** (Required) name (or unparsed name for user defined function) for the unresolved function. */
  functionName: string;
  /** (Optional) Function arguments. Empty arguments are allowed. */
  arguments: Expression[];
  /** (Required) Indicate if this function should be applied on distinct values. */
  isDistinct: boolean;
  /**
   * (Required) Indicate if this is a user defined function.
   *
   * When it is not a user defined function, Connect will use the function name directly.
   * When it is a user defined function, Connect will parse the function name first.
   */
  isUserDefinedFunction: boolean;
}

/** Expression as string. */
export interface Expression_ExpressionString {
  /** (Required) A SQL expression that will be parsed by Catalyst parser. */
  expression: string;
}

/** UnresolvedStar is used to expand all the fields of a relation or struct. */
export interface Expression_UnresolvedStar {
  /**
   * (Optional) The target of the expansion.
   *
   * If set, it should end with '.*' and will be parsed by 'parseAttributeName'
   * in the server side.
   */
  unparsedTarget?: string | undefined;
}

/**
 * Represents all of the input attributes to a given relational operator, for example in
 * "SELECT `(id)?+.+` FROM ...".
 */
export interface Expression_UnresolvedRegex {
  /** (Required) The column name used to extract column with regex. */
  colName: string;
  /** (Optional) The id of corresponding connect plan. */
  planId?: number | undefined;
}

/** Extracts a value or values from an Expression */
export interface Expression_UnresolvedExtractValue {
  /**
   * (Required) The expression to extract value from, can be
   * Map, Array, Struct or array of Structs.
   */
  child:
    | Expression
    | undefined;
  /**
   * (Required) The expression to describe the extraction, can be
   * key of Map, index of Array, field name of Struct.
   */
  extraction: Expression | undefined;
}

/** Add, replace or drop a field of `StructType` expression by name. */
export interface Expression_UpdateFields {
  /** (Required) The struct expression. */
  structExpression:
    | Expression
    | undefined;
  /** (Required) The field name. */
  fieldName: string;
  /**
   * (Optional) The expression to add or replace.
   *
   * When not set, it means this field will be dropped.
   */
  valueExpression: Expression | undefined;
}

export interface Expression_Alias {
  /** (Required) The expression that alias will be added on. */
  expr:
    | Expression
    | undefined;
  /**
   * (Required) a list of name parts for the alias.
   *
   * Scalar columns only has one name that presents.
   */
  name: string[];
  /** (Optional) Alias metadata expressed as a JSON map. */
  metadata?: string | undefined;
}

export interface Expression_LambdaFunction {
  /**
   * (Required) The lambda function.
   *
   * The function body should use 'UnresolvedAttribute' as arguments, the sever side will
   * replace 'UnresolvedAttribute' with 'UnresolvedNamedLambdaVariable'.
   */
  function:
    | Expression
    | undefined;
  /** (Required) Function variables. Must contains 1 ~ 3 variables. */
  arguments: Expression_UnresolvedNamedLambdaVariable[];
}

export interface Expression_UnresolvedNamedLambdaVariable {
  /** (Required) a list of name parts for the variable. Must not be empty. */
  nameParts: string[];
}

export interface CommonInlineUserDefinedFunction {
  /** (Required) Name of the user-defined function. */
  functionName: string;
  /** (Optional) Indicate if the user-defined function is deterministic. */
  deterministic: boolean;
  /** (Optional) Function arguments. Empty arguments are allowed. */
  arguments: Expression[];
  pythonUdf?: PythonUDF | undefined;
  scalarScalaUdf?: ScalarScalaUDF | undefined;
  javaUdf?: JavaUDF | undefined;
}

export interface PythonUDF {
  /** (Required) Output type of the Python UDF */
  outputType:
    | DataType
    | undefined;
  /** (Required) EvalType of the Python UDF */
  evalType: number;
  /** (Required) The encoded commands of the Python UDF */
  command: Uint8Array;
  /** (Required) Python version being used in the client. */
  pythonVer: string;
}

export interface ScalarScalaUDF {
  /** (Required) Serialized JVM object containing UDF definition, input encoders and output encoder */
  payload: Uint8Array;
  /** (Optional) Input type(s) of the UDF */
  inputTypes: DataType[];
  /** (Required) Output type of the UDF */
  outputType:
    | DataType
    | undefined;
  /** (Required) True if the UDF can return null value */
  nullable: boolean;
}

export interface JavaUDF {
  /** (Required) Fully qualified name of Java class */
  className: string;
  /** (Optional) Output type of the Java UDF */
  outputType?:
    | DataType
    | undefined;
  /** (Required) Indicate if the Java user-defined function is an aggregate function */
  aggregate: boolean;
}

export interface CallFunction {
  /** (Required) Unparsed name of the SQL function. */
  functionName: string;
  /** (Optional) Function arguments. Empty arguments are allowed. */
  arguments: Expression[];
}

export interface NamedArgumentExpression {
  /** (Required) The key of the named argument. */
  key: string;
  /** (Required) The value expression of the named argument. */
  value: Expression | undefined;
}

function createBaseExpression(): Expression {
  return {
    literal: undefined,
    unresolvedAttribute: undefined,
    unresolvedFunction: undefined,
    expressionString: undefined,
    unresolvedStar: undefined,
    alias: undefined,
    cast: undefined,
    unresolvedRegex: undefined,
    sortOrder: undefined,
    lambdaFunction: undefined,
    window: undefined,
    unresolvedExtractValue: undefined,
    updateFields: undefined,
    unresolvedNamedLambdaVariable: undefined,
    commonInlineUserDefinedFunction: undefined,
    callFunction: undefined,
    namedArgumentExpression: undefined,
    getColumnByOrdinal: undefined,
    extension: undefined,
  };
}

export const Expression = {
  encode(message: Expression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.literal !== undefined) {
      Expression_Literal.encode(message.literal, writer.uint32(10).fork()).ldelim();
    }
    if (message.unresolvedAttribute !== undefined) {
      Expression_UnresolvedAttribute.encode(message.unresolvedAttribute, writer.uint32(18).fork()).ldelim();
    }
    if (message.unresolvedFunction !== undefined) {
      Expression_UnresolvedFunction.encode(message.unresolvedFunction, writer.uint32(26).fork()).ldelim();
    }
    if (message.expressionString !== undefined) {
      Expression_ExpressionString.encode(message.expressionString, writer.uint32(34).fork()).ldelim();
    }
    if (message.unresolvedStar !== undefined) {
      Expression_UnresolvedStar.encode(message.unresolvedStar, writer.uint32(42).fork()).ldelim();
    }
    if (message.alias !== undefined) {
      Expression_Alias.encode(message.alias, writer.uint32(50).fork()).ldelim();
    }
    if (message.cast !== undefined) {
      Expression_Cast.encode(message.cast, writer.uint32(58).fork()).ldelim();
    }
    if (message.unresolvedRegex !== undefined) {
      Expression_UnresolvedRegex.encode(message.unresolvedRegex, writer.uint32(66).fork()).ldelim();
    }
    if (message.sortOrder !== undefined) {
      Expression_SortOrder.encode(message.sortOrder, writer.uint32(74).fork()).ldelim();
    }
    if (message.lambdaFunction !== undefined) {
      Expression_LambdaFunction.encode(message.lambdaFunction, writer.uint32(82).fork()).ldelim();
    }
    if (message.window !== undefined) {
      Expression_Window.encode(message.window, writer.uint32(90).fork()).ldelim();
    }
    if (message.unresolvedExtractValue !== undefined) {
      Expression_UnresolvedExtractValue.encode(message.unresolvedExtractValue, writer.uint32(98).fork()).ldelim();
    }
    if (message.updateFields !== undefined) {
      Expression_UpdateFields.encode(message.updateFields, writer.uint32(106).fork()).ldelim();
    }
    if (message.unresolvedNamedLambdaVariable !== undefined) {
      Expression_UnresolvedNamedLambdaVariable.encode(message.unresolvedNamedLambdaVariable, writer.uint32(114).fork())
        .ldelim();
    }
    if (message.commonInlineUserDefinedFunction !== undefined) {
      CommonInlineUserDefinedFunction.encode(message.commonInlineUserDefinedFunction, writer.uint32(122).fork())
        .ldelim();
    }
    if (message.callFunction !== undefined) {
      CallFunction.encode(message.callFunction, writer.uint32(130).fork()).ldelim();
    }
    if (message.namedArgumentExpression !== undefined) {
      NamedArgumentExpression.encode(message.namedArgumentExpression, writer.uint32(138).fork()).ldelim();
    }
    if (message.getColumnByOrdinal !== undefined) {
      Expression_GetColumnByOrdinal.encode(message.getColumnByOrdinal, writer.uint32(146).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      Any.encode(message.extension, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.literal = Expression_Literal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.unresolvedAttribute = Expression_UnresolvedAttribute.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unresolvedFunction = Expression_UnresolvedFunction.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.expressionString = Expression_ExpressionString.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.unresolvedStar = Expression_UnresolvedStar.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.alias = Expression_Alias.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cast = Expression_Cast.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.unresolvedRegex = Expression_UnresolvedRegex.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sortOrder = Expression_SortOrder.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.lambdaFunction = Expression_LambdaFunction.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.window = Expression_Window.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.unresolvedExtractValue = Expression_UnresolvedExtractValue.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.updateFields = Expression_UpdateFields.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.unresolvedNamedLambdaVariable = Expression_UnresolvedNamedLambdaVariable.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.commonInlineUserDefinedFunction = CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.callFunction = CallFunction.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.namedArgumentExpression = NamedArgumentExpression.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.getColumnByOrdinal = Expression_GetColumnByOrdinal.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.extension = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression {
    return {
      literal: isSet(object.literal) ? Expression_Literal.fromJSON(object.literal) : undefined,
      unresolvedAttribute: isSet(object.unresolvedAttribute)
        ? Expression_UnresolvedAttribute.fromJSON(object.unresolvedAttribute)
        : undefined,
      unresolvedFunction: isSet(object.unresolvedFunction)
        ? Expression_UnresolvedFunction.fromJSON(object.unresolvedFunction)
        : undefined,
      expressionString: isSet(object.expressionString)
        ? Expression_ExpressionString.fromJSON(object.expressionString)
        : undefined,
      unresolvedStar: isSet(object.unresolvedStar)
        ? Expression_UnresolvedStar.fromJSON(object.unresolvedStar)
        : undefined,
      alias: isSet(object.alias) ? Expression_Alias.fromJSON(object.alias) : undefined,
      cast: isSet(object.cast) ? Expression_Cast.fromJSON(object.cast) : undefined,
      unresolvedRegex: isSet(object.unresolvedRegex)
        ? Expression_UnresolvedRegex.fromJSON(object.unresolvedRegex)
        : undefined,
      sortOrder: isSet(object.sortOrder) ? Expression_SortOrder.fromJSON(object.sortOrder) : undefined,
      lambdaFunction: isSet(object.lambdaFunction)
        ? Expression_LambdaFunction.fromJSON(object.lambdaFunction)
        : undefined,
      window: isSet(object.window) ? Expression_Window.fromJSON(object.window) : undefined,
      unresolvedExtractValue: isSet(object.unresolvedExtractValue)
        ? Expression_UnresolvedExtractValue.fromJSON(object.unresolvedExtractValue)
        : undefined,
      updateFields: isSet(object.updateFields) ? Expression_UpdateFields.fromJSON(object.updateFields) : undefined,
      unresolvedNamedLambdaVariable: isSet(object.unresolvedNamedLambdaVariable)
        ? Expression_UnresolvedNamedLambdaVariable.fromJSON(object.unresolvedNamedLambdaVariable)
        : undefined,
      commonInlineUserDefinedFunction: isSet(object.commonInlineUserDefinedFunction)
        ? CommonInlineUserDefinedFunction.fromJSON(object.commonInlineUserDefinedFunction)
        : undefined,
      callFunction: isSet(object.callFunction) ? CallFunction.fromJSON(object.callFunction) : undefined,
      namedArgumentExpression: isSet(object.namedArgumentExpression)
        ? NamedArgumentExpression.fromJSON(object.namedArgumentExpression)
        : undefined,
      getColumnByOrdinal: isSet(object.getColumnByOrdinal)
        ? Expression_GetColumnByOrdinal.fromJSON(object.getColumnByOrdinal)
        : undefined,
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined,
    };
  },

  toJSON(message: Expression): unknown {
    const obj: any = {};
    if (message.literal !== undefined) {
      obj.literal = Expression_Literal.toJSON(message.literal);
    }
    if (message.unresolvedAttribute !== undefined) {
      obj.unresolvedAttribute = Expression_UnresolvedAttribute.toJSON(message.unresolvedAttribute);
    }
    if (message.unresolvedFunction !== undefined) {
      obj.unresolvedFunction = Expression_UnresolvedFunction.toJSON(message.unresolvedFunction);
    }
    if (message.expressionString !== undefined) {
      obj.expressionString = Expression_ExpressionString.toJSON(message.expressionString);
    }
    if (message.unresolvedStar !== undefined) {
      obj.unresolvedStar = Expression_UnresolvedStar.toJSON(message.unresolvedStar);
    }
    if (message.alias !== undefined) {
      obj.alias = Expression_Alias.toJSON(message.alias);
    }
    if (message.cast !== undefined) {
      obj.cast = Expression_Cast.toJSON(message.cast);
    }
    if (message.unresolvedRegex !== undefined) {
      obj.unresolvedRegex = Expression_UnresolvedRegex.toJSON(message.unresolvedRegex);
    }
    if (message.sortOrder !== undefined) {
      obj.sortOrder = Expression_SortOrder.toJSON(message.sortOrder);
    }
    if (message.lambdaFunction !== undefined) {
      obj.lambdaFunction = Expression_LambdaFunction.toJSON(message.lambdaFunction);
    }
    if (message.window !== undefined) {
      obj.window = Expression_Window.toJSON(message.window);
    }
    if (message.unresolvedExtractValue !== undefined) {
      obj.unresolvedExtractValue = Expression_UnresolvedExtractValue.toJSON(message.unresolvedExtractValue);
    }
    if (message.updateFields !== undefined) {
      obj.updateFields = Expression_UpdateFields.toJSON(message.updateFields);
    }
    if (message.unresolvedNamedLambdaVariable !== undefined) {
      obj.unresolvedNamedLambdaVariable = Expression_UnresolvedNamedLambdaVariable.toJSON(
        message.unresolvedNamedLambdaVariable,
      );
    }
    if (message.commonInlineUserDefinedFunction !== undefined) {
      obj.commonInlineUserDefinedFunction = CommonInlineUserDefinedFunction.toJSON(
        message.commonInlineUserDefinedFunction,
      );
    }
    if (message.callFunction !== undefined) {
      obj.callFunction = CallFunction.toJSON(message.callFunction);
    }
    if (message.namedArgumentExpression !== undefined) {
      obj.namedArgumentExpression = NamedArgumentExpression.toJSON(message.namedArgumentExpression);
    }
    if (message.getColumnByOrdinal !== undefined) {
      obj.getColumnByOrdinal = Expression_GetColumnByOrdinal.toJSON(message.getColumnByOrdinal);
    }
    if (message.extension !== undefined) {
      obj.extension = Any.toJSON(message.extension);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression>, I>>(base?: I): Expression {
    return Expression.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression>, I>>(object: I): Expression {
    const message = createBaseExpression();
    message.literal = (object.literal !== undefined && object.literal !== null)
      ? Expression_Literal.fromPartial(object.literal)
      : undefined;
    message.unresolvedAttribute = (object.unresolvedAttribute !== undefined && object.unresolvedAttribute !== null)
      ? Expression_UnresolvedAttribute.fromPartial(object.unresolvedAttribute)
      : undefined;
    message.unresolvedFunction = (object.unresolvedFunction !== undefined && object.unresolvedFunction !== null)
      ? Expression_UnresolvedFunction.fromPartial(object.unresolvedFunction)
      : undefined;
    message.expressionString = (object.expressionString !== undefined && object.expressionString !== null)
      ? Expression_ExpressionString.fromPartial(object.expressionString)
      : undefined;
    message.unresolvedStar = (object.unresolvedStar !== undefined && object.unresolvedStar !== null)
      ? Expression_UnresolvedStar.fromPartial(object.unresolvedStar)
      : undefined;
    message.alias = (object.alias !== undefined && object.alias !== null)
      ? Expression_Alias.fromPartial(object.alias)
      : undefined;
    message.cast = (object.cast !== undefined && object.cast !== null)
      ? Expression_Cast.fromPartial(object.cast)
      : undefined;
    message.unresolvedRegex = (object.unresolvedRegex !== undefined && object.unresolvedRegex !== null)
      ? Expression_UnresolvedRegex.fromPartial(object.unresolvedRegex)
      : undefined;
    message.sortOrder = (object.sortOrder !== undefined && object.sortOrder !== null)
      ? Expression_SortOrder.fromPartial(object.sortOrder)
      : undefined;
    message.lambdaFunction = (object.lambdaFunction !== undefined && object.lambdaFunction !== null)
      ? Expression_LambdaFunction.fromPartial(object.lambdaFunction)
      : undefined;
    message.window = (object.window !== undefined && object.window !== null)
      ? Expression_Window.fromPartial(object.window)
      : undefined;
    message.unresolvedExtractValue =
      (object.unresolvedExtractValue !== undefined && object.unresolvedExtractValue !== null)
        ? Expression_UnresolvedExtractValue.fromPartial(object.unresolvedExtractValue)
        : undefined;
    message.updateFields = (object.updateFields !== undefined && object.updateFields !== null)
      ? Expression_UpdateFields.fromPartial(object.updateFields)
      : undefined;
    message.unresolvedNamedLambdaVariable =
      (object.unresolvedNamedLambdaVariable !== undefined && object.unresolvedNamedLambdaVariable !== null)
        ? Expression_UnresolvedNamedLambdaVariable.fromPartial(object.unresolvedNamedLambdaVariable)
        : undefined;
    message.commonInlineUserDefinedFunction =
      (object.commonInlineUserDefinedFunction !== undefined && object.commonInlineUserDefinedFunction !== null)
        ? CommonInlineUserDefinedFunction.fromPartial(object.commonInlineUserDefinedFunction)
        : undefined;
    message.callFunction = (object.callFunction !== undefined && object.callFunction !== null)
      ? CallFunction.fromPartial(object.callFunction)
      : undefined;
    message.namedArgumentExpression =
      (object.namedArgumentExpression !== undefined && object.namedArgumentExpression !== null)
        ? NamedArgumentExpression.fromPartial(object.namedArgumentExpression)
        : undefined;
    message.getColumnByOrdinal = (object.getColumnByOrdinal !== undefined && object.getColumnByOrdinal !== null)
      ? Expression_GetColumnByOrdinal.fromPartial(object.getColumnByOrdinal)
      : undefined;
    message.extension = (object.extension !== undefined && object.extension !== null)
      ? Any.fromPartial(object.extension)
      : undefined;
    return message;
  },
};

function createBaseExpression_Window(): Expression_Window {
  return { windowFunction: undefined, partitionSpec: [], orderSpec: [], frameSpec: undefined };
}

export const Expression_Window = {
  encode(message: Expression_Window, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.windowFunction !== undefined) {
      Expression.encode(message.windowFunction, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.partitionSpec) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.orderSpec) {
      Expression_SortOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.frameSpec !== undefined) {
      Expression_Window_WindowFrame.encode(message.frameSpec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Window {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Window();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.windowFunction = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.partitionSpec.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.orderSpec.push(Expression_SortOrder.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.frameSpec = Expression_Window_WindowFrame.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Window {
    return {
      windowFunction: isSet(object.windowFunction) ? Expression.fromJSON(object.windowFunction) : undefined,
      partitionSpec: globalThis.Array.isArray(object?.partitionSpec)
        ? object.partitionSpec.map((e: any) => Expression.fromJSON(e))
        : [],
      orderSpec: globalThis.Array.isArray(object?.orderSpec)
        ? object.orderSpec.map((e: any) => Expression_SortOrder.fromJSON(e))
        : [],
      frameSpec: isSet(object.frameSpec) ? Expression_Window_WindowFrame.fromJSON(object.frameSpec) : undefined,
    };
  },

  toJSON(message: Expression_Window): unknown {
    const obj: any = {};
    if (message.windowFunction !== undefined) {
      obj.windowFunction = Expression.toJSON(message.windowFunction);
    }
    if (message.partitionSpec?.length) {
      obj.partitionSpec = message.partitionSpec.map((e) => Expression.toJSON(e));
    }
    if (message.orderSpec?.length) {
      obj.orderSpec = message.orderSpec.map((e) => Expression_SortOrder.toJSON(e));
    }
    if (message.frameSpec !== undefined) {
      obj.frameSpec = Expression_Window_WindowFrame.toJSON(message.frameSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Window>, I>>(base?: I): Expression_Window {
    return Expression_Window.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Window>, I>>(object: I): Expression_Window {
    const message = createBaseExpression_Window();
    message.windowFunction = (object.windowFunction !== undefined && object.windowFunction !== null)
      ? Expression.fromPartial(object.windowFunction)
      : undefined;
    message.partitionSpec = object.partitionSpec?.map((e) => Expression.fromPartial(e)) || [];
    message.orderSpec = object.orderSpec?.map((e) => Expression_SortOrder.fromPartial(e)) || [];
    message.frameSpec = (object.frameSpec !== undefined && object.frameSpec !== null)
      ? Expression_Window_WindowFrame.fromPartial(object.frameSpec)
      : undefined;
    return message;
  },
};

function createBaseExpression_Window_WindowFrame(): Expression_Window_WindowFrame {
  return { frameType: 0, lower: undefined, upper: undefined };
}

export const Expression_Window_WindowFrame = {
  encode(message: Expression_Window_WindowFrame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frameType !== 0) {
      writer.uint32(8).int32(message.frameType);
    }
    if (message.lower !== undefined) {
      Expression_Window_WindowFrame_FrameBoundary.encode(message.lower, writer.uint32(18).fork()).ldelim();
    }
    if (message.upper !== undefined) {
      Expression_Window_WindowFrame_FrameBoundary.encode(message.upper, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Window_WindowFrame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Window_WindowFrame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.frameType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lower = Expression_Window_WindowFrame_FrameBoundary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.upper = Expression_Window_WindowFrame_FrameBoundary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Window_WindowFrame {
    return {
      frameType: isSet(object.frameType) ? expression_Window_WindowFrame_FrameTypeFromJSON(object.frameType) : 0,
      lower: isSet(object.lower) ? Expression_Window_WindowFrame_FrameBoundary.fromJSON(object.lower) : undefined,
      upper: isSet(object.upper) ? Expression_Window_WindowFrame_FrameBoundary.fromJSON(object.upper) : undefined,
    };
  },

  toJSON(message: Expression_Window_WindowFrame): unknown {
    const obj: any = {};
    if (message.frameType !== 0) {
      obj.frameType = expression_Window_WindowFrame_FrameTypeToJSON(message.frameType);
    }
    if (message.lower !== undefined) {
      obj.lower = Expression_Window_WindowFrame_FrameBoundary.toJSON(message.lower);
    }
    if (message.upper !== undefined) {
      obj.upper = Expression_Window_WindowFrame_FrameBoundary.toJSON(message.upper);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Window_WindowFrame>, I>>(base?: I): Expression_Window_WindowFrame {
    return Expression_Window_WindowFrame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Window_WindowFrame>, I>>(
    object: I,
  ): Expression_Window_WindowFrame {
    const message = createBaseExpression_Window_WindowFrame();
    message.frameType = object.frameType ?? 0;
    message.lower = (object.lower !== undefined && object.lower !== null)
      ? Expression_Window_WindowFrame_FrameBoundary.fromPartial(object.lower)
      : undefined;
    message.upper = (object.upper !== undefined && object.upper !== null)
      ? Expression_Window_WindowFrame_FrameBoundary.fromPartial(object.upper)
      : undefined;
    return message;
  },
};

function createBaseExpression_Window_WindowFrame_FrameBoundary(): Expression_Window_WindowFrame_FrameBoundary {
  return { currentRow: undefined, unbounded: undefined, value: undefined };
}

export const Expression_Window_WindowFrame_FrameBoundary = {
  encode(message: Expression_Window_WindowFrame_FrameBoundary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentRow !== undefined) {
      writer.uint32(8).bool(message.currentRow);
    }
    if (message.unbounded !== undefined) {
      writer.uint32(16).bool(message.unbounded);
    }
    if (message.value !== undefined) {
      Expression.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Window_WindowFrame_FrameBoundary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Window_WindowFrame_FrameBoundary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.currentRow = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.unbounded = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = Expression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Window_WindowFrame_FrameBoundary {
    return {
      currentRow: isSet(object.currentRow) ? globalThis.Boolean(object.currentRow) : undefined,
      unbounded: isSet(object.unbounded) ? globalThis.Boolean(object.unbounded) : undefined,
      value: isSet(object.value) ? Expression.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Expression_Window_WindowFrame_FrameBoundary): unknown {
    const obj: any = {};
    if (message.currentRow !== undefined) {
      obj.currentRow = message.currentRow;
    }
    if (message.unbounded !== undefined) {
      obj.unbounded = message.unbounded;
    }
    if (message.value !== undefined) {
      obj.value = Expression.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Window_WindowFrame_FrameBoundary>, I>>(
    base?: I,
  ): Expression_Window_WindowFrame_FrameBoundary {
    return Expression_Window_WindowFrame_FrameBoundary.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Window_WindowFrame_FrameBoundary>, I>>(
    object: I,
  ): Expression_Window_WindowFrame_FrameBoundary {
    const message = createBaseExpression_Window_WindowFrame_FrameBoundary();
    message.currentRow = object.currentRow ?? undefined;
    message.unbounded = object.unbounded ?? undefined;
    message.value = (object.value !== undefined && object.value !== null)
      ? Expression.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseExpression_SortOrder(): Expression_SortOrder {
  return { child: undefined, direction: 0, nullOrdering: 0 };
}

export const Expression_SortOrder = {
  encode(message: Expression_SortOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.child !== undefined) {
      Expression.encode(message.child, writer.uint32(10).fork()).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction);
    }
    if (message.nullOrdering !== 0) {
      writer.uint32(24).int32(message.nullOrdering);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_SortOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_SortOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.child = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nullOrdering = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_SortOrder {
    return {
      child: isSet(object.child) ? Expression.fromJSON(object.child) : undefined,
      direction: isSet(object.direction) ? expression_SortOrder_SortDirectionFromJSON(object.direction) : 0,
      nullOrdering: isSet(object.nullOrdering) ? expression_SortOrder_NullOrderingFromJSON(object.nullOrdering) : 0,
    };
  },

  toJSON(message: Expression_SortOrder): unknown {
    const obj: any = {};
    if (message.child !== undefined) {
      obj.child = Expression.toJSON(message.child);
    }
    if (message.direction !== 0) {
      obj.direction = expression_SortOrder_SortDirectionToJSON(message.direction);
    }
    if (message.nullOrdering !== 0) {
      obj.nullOrdering = expression_SortOrder_NullOrderingToJSON(message.nullOrdering);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_SortOrder>, I>>(base?: I): Expression_SortOrder {
    return Expression_SortOrder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_SortOrder>, I>>(object: I): Expression_SortOrder {
    const message = createBaseExpression_SortOrder();
    message.child = (object.child !== undefined && object.child !== null)
      ? Expression.fromPartial(object.child)
      : undefined;
    message.direction = object.direction ?? 0;
    message.nullOrdering = object.nullOrdering ?? 0;
    return message;
  },
};

function createBaseExpression_Cast(): Expression_Cast {
  return { expr: undefined, type: undefined, typeStr: undefined };
}

export const Expression_Cast = {
  encode(message: Expression_Cast, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      Expression.encode(message.expr, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== undefined) {
      DataType.encode(message.type, writer.uint32(18).fork()).ldelim();
    }
    if (message.typeStr !== undefined) {
      writer.uint32(26).string(message.typeStr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Cast {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Cast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.expr = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = DataType.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.typeStr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Cast {
    return {
      expr: isSet(object.expr) ? Expression.fromJSON(object.expr) : undefined,
      type: isSet(object.type) ? DataType.fromJSON(object.type) : undefined,
      typeStr: isSet(object.typeStr) ? globalThis.String(object.typeStr) : undefined,
    };
  },

  toJSON(message: Expression_Cast): unknown {
    const obj: any = {};
    if (message.expr !== undefined) {
      obj.expr = Expression.toJSON(message.expr);
    }
    if (message.type !== undefined) {
      obj.type = DataType.toJSON(message.type);
    }
    if (message.typeStr !== undefined) {
      obj.typeStr = message.typeStr;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Cast>, I>>(base?: I): Expression_Cast {
    return Expression_Cast.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Cast>, I>>(object: I): Expression_Cast {
    const message = createBaseExpression_Cast();
    message.expr = (object.expr !== undefined && object.expr !== null)
      ? Expression.fromPartial(object.expr)
      : undefined;
    message.type = (object.type !== undefined && object.type !== null) ? DataType.fromPartial(object.type) : undefined;
    message.typeStr = object.typeStr ?? undefined;
    return message;
  },
};

function createBaseExpression_Literal(): Expression_Literal {
  return {
    null: undefined,
    binary: undefined,
    boolean: undefined,
    byte: undefined,
    short: undefined,
    integer: undefined,
    long: undefined,
    float: undefined,
    double: undefined,
    decimal: undefined,
    string: undefined,
    date: undefined,
    timestamp: undefined,
    timestampNtz: undefined,
    calendarInterval: undefined,
    yearMonthInterval: undefined,
    dayTimeInterval: undefined,
    array: undefined,
    map: undefined,
    struct: undefined,
  };
}

export const Expression_Literal = {
  encode(message: Expression_Literal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.null !== undefined) {
      DataType.encode(message.null, writer.uint32(10).fork()).ldelim();
    }
    if (message.binary !== undefined) {
      writer.uint32(18).bytes(message.binary);
    }
    if (message.boolean !== undefined) {
      writer.uint32(24).bool(message.boolean);
    }
    if (message.byte !== undefined) {
      writer.uint32(32).int32(message.byte);
    }
    if (message.short !== undefined) {
      writer.uint32(40).int32(message.short);
    }
    if (message.integer !== undefined) {
      writer.uint32(48).int32(message.integer);
    }
    if (message.long !== undefined) {
      writer.uint32(56).int64(message.long);
    }
    if (message.float !== undefined) {
      writer.uint32(85).float(message.float);
    }
    if (message.double !== undefined) {
      writer.uint32(89).double(message.double);
    }
    if (message.decimal !== undefined) {
      Expression_Literal_Decimal.encode(message.decimal, writer.uint32(98).fork()).ldelim();
    }
    if (message.string !== undefined) {
      writer.uint32(106).string(message.string);
    }
    if (message.date !== undefined) {
      writer.uint32(128).int32(message.date);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(136).int64(message.timestamp);
    }
    if (message.timestampNtz !== undefined) {
      writer.uint32(144).int64(message.timestampNtz);
    }
    if (message.calendarInterval !== undefined) {
      Expression_Literal_CalendarInterval.encode(message.calendarInterval, writer.uint32(154).fork()).ldelim();
    }
    if (message.yearMonthInterval !== undefined) {
      writer.uint32(160).int32(message.yearMonthInterval);
    }
    if (message.dayTimeInterval !== undefined) {
      writer.uint32(168).int64(message.dayTimeInterval);
    }
    if (message.array !== undefined) {
      Expression_Literal_Array.encode(message.array, writer.uint32(178).fork()).ldelim();
    }
    if (message.map !== undefined) {
      Expression_Literal_Map.encode(message.map, writer.uint32(186).fork()).ldelim();
    }
    if (message.struct !== undefined) {
      Expression_Literal_Struct.encode(message.struct, writer.uint32(194).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Literal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Literal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.null = DataType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.binary = reader.bytes();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.boolean = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.byte = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.short = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.integer = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.long = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 85) {
            break;
          }

          message.float = reader.float();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.double = reader.double();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.decimal = Expression_Literal_Decimal.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.string = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.date = reader.int32();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.timestampNtz = longToNumber(reader.int64() as Long);
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.calendarInterval = Expression_Literal_CalendarInterval.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.yearMonthInterval = reader.int32();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.dayTimeInterval = longToNumber(reader.int64() as Long);
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.array = Expression_Literal_Array.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.map = Expression_Literal_Map.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.struct = Expression_Literal_Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Literal {
    return {
      null: isSet(object.null) ? DataType.fromJSON(object.null) : undefined,
      binary: isSet(object.binary) ? bytesFromBase64(object.binary) : undefined,
      boolean: isSet(object.boolean) ? globalThis.Boolean(object.boolean) : undefined,
      byte: isSet(object.byte) ? globalThis.Number(object.byte) : undefined,
      short: isSet(object.short) ? globalThis.Number(object.short) : undefined,
      integer: isSet(object.integer) ? globalThis.Number(object.integer) : undefined,
      long: isSet(object.long) ? globalThis.Number(object.long) : undefined,
      float: isSet(object.float) ? globalThis.Number(object.float) : undefined,
      double: isSet(object.double) ? globalThis.Number(object.double) : undefined,
      decimal: isSet(object.decimal) ? Expression_Literal_Decimal.fromJSON(object.decimal) : undefined,
      string: isSet(object.string) ? globalThis.String(object.string) : undefined,
      date: isSet(object.date) ? globalThis.Number(object.date) : undefined,
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : undefined,
      timestampNtz: isSet(object.timestampNtz) ? globalThis.Number(object.timestampNtz) : undefined,
      calendarInterval: isSet(object.calendarInterval)
        ? Expression_Literal_CalendarInterval.fromJSON(object.calendarInterval)
        : undefined,
      yearMonthInterval: isSet(object.yearMonthInterval) ? globalThis.Number(object.yearMonthInterval) : undefined,
      dayTimeInterval: isSet(object.dayTimeInterval) ? globalThis.Number(object.dayTimeInterval) : undefined,
      array: isSet(object.array) ? Expression_Literal_Array.fromJSON(object.array) : undefined,
      map: isSet(object.map) ? Expression_Literal_Map.fromJSON(object.map) : undefined,
      struct: isSet(object.struct) ? Expression_Literal_Struct.fromJSON(object.struct) : undefined,
    };
  },

  toJSON(message: Expression_Literal): unknown {
    const obj: any = {};
    if (message.null !== undefined) {
      obj.null = DataType.toJSON(message.null);
    }
    if (message.binary !== undefined) {
      obj.binary = base64FromBytes(message.binary);
    }
    if (message.boolean !== undefined) {
      obj.boolean = message.boolean;
    }
    if (message.byte !== undefined) {
      obj.byte = Math.round(message.byte);
    }
    if (message.short !== undefined) {
      obj.short = Math.round(message.short);
    }
    if (message.integer !== undefined) {
      obj.integer = Math.round(message.integer);
    }
    if (message.long !== undefined) {
      obj.long = Math.round(message.long);
    }
    if (message.float !== undefined) {
      obj.float = message.float;
    }
    if (message.double !== undefined) {
      obj.double = message.double;
    }
    if (message.decimal !== undefined) {
      obj.decimal = Expression_Literal_Decimal.toJSON(message.decimal);
    }
    if (message.string !== undefined) {
      obj.string = message.string;
    }
    if (message.date !== undefined) {
      obj.date = Math.round(message.date);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.timestampNtz !== undefined) {
      obj.timestampNtz = Math.round(message.timestampNtz);
    }
    if (message.calendarInterval !== undefined) {
      obj.calendarInterval = Expression_Literal_CalendarInterval.toJSON(message.calendarInterval);
    }
    if (message.yearMonthInterval !== undefined) {
      obj.yearMonthInterval = Math.round(message.yearMonthInterval);
    }
    if (message.dayTimeInterval !== undefined) {
      obj.dayTimeInterval = Math.round(message.dayTimeInterval);
    }
    if (message.array !== undefined) {
      obj.array = Expression_Literal_Array.toJSON(message.array);
    }
    if (message.map !== undefined) {
      obj.map = Expression_Literal_Map.toJSON(message.map);
    }
    if (message.struct !== undefined) {
      obj.struct = Expression_Literal_Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Literal>, I>>(base?: I): Expression_Literal {
    return Expression_Literal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Literal>, I>>(object: I): Expression_Literal {
    const message = createBaseExpression_Literal();
    message.null = (object.null !== undefined && object.null !== null) ? DataType.fromPartial(object.null) : undefined;
    message.binary = object.binary ?? undefined;
    message.boolean = object.boolean ?? undefined;
    message.byte = object.byte ?? undefined;
    message.short = object.short ?? undefined;
    message.integer = object.integer ?? undefined;
    message.long = object.long ?? undefined;
    message.float = object.float ?? undefined;
    message.double = object.double ?? undefined;
    message.decimal = (object.decimal !== undefined && object.decimal !== null)
      ? Expression_Literal_Decimal.fromPartial(object.decimal)
      : undefined;
    message.string = object.string ?? undefined;
    message.date = object.date ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.timestampNtz = object.timestampNtz ?? undefined;
    message.calendarInterval = (object.calendarInterval !== undefined && object.calendarInterval !== null)
      ? Expression_Literal_CalendarInterval.fromPartial(object.calendarInterval)
      : undefined;
    message.yearMonthInterval = object.yearMonthInterval ?? undefined;
    message.dayTimeInterval = object.dayTimeInterval ?? undefined;
    message.array = (object.array !== undefined && object.array !== null)
      ? Expression_Literal_Array.fromPartial(object.array)
      : undefined;
    message.map = (object.map !== undefined && object.map !== null)
      ? Expression_Literal_Map.fromPartial(object.map)
      : undefined;
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Expression_Literal_Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseExpression_Literal_Decimal(): Expression_Literal_Decimal {
  return { value: "", precision: undefined, scale: undefined };
}

export const Expression_Literal_Decimal = {
  encode(message: Expression_Literal_Decimal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.precision !== undefined) {
      writer.uint32(16).int32(message.precision);
    }
    if (message.scale !== undefined) {
      writer.uint32(24).int32(message.scale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Literal_Decimal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Literal_Decimal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.precision = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.scale = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Literal_Decimal {
    return {
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      precision: isSet(object.precision) ? globalThis.Number(object.precision) : undefined,
      scale: isSet(object.scale) ? globalThis.Number(object.scale) : undefined,
    };
  },

  toJSON(message: Expression_Literal_Decimal): unknown {
    const obj: any = {};
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.precision !== undefined) {
      obj.precision = Math.round(message.precision);
    }
    if (message.scale !== undefined) {
      obj.scale = Math.round(message.scale);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Literal_Decimal>, I>>(base?: I): Expression_Literal_Decimal {
    return Expression_Literal_Decimal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Literal_Decimal>, I>>(object: I): Expression_Literal_Decimal {
    const message = createBaseExpression_Literal_Decimal();
    message.value = object.value ?? "";
    message.precision = object.precision ?? undefined;
    message.scale = object.scale ?? undefined;
    return message;
  },
};

function createBaseExpression_Literal_CalendarInterval(): Expression_Literal_CalendarInterval {
  return { months: 0, days: 0, microseconds: 0 };
}

export const Expression_Literal_CalendarInterval = {
  encode(message: Expression_Literal_CalendarInterval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.months !== 0) {
      writer.uint32(8).int32(message.months);
    }
    if (message.days !== 0) {
      writer.uint32(16).int32(message.days);
    }
    if (message.microseconds !== 0) {
      writer.uint32(24).int64(message.microseconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Literal_CalendarInterval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Literal_CalendarInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.months = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.days = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.microseconds = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Literal_CalendarInterval {
    return {
      months: isSet(object.months) ? globalThis.Number(object.months) : 0,
      days: isSet(object.days) ? globalThis.Number(object.days) : 0,
      microseconds: isSet(object.microseconds) ? globalThis.Number(object.microseconds) : 0,
    };
  },

  toJSON(message: Expression_Literal_CalendarInterval): unknown {
    const obj: any = {};
    if (message.months !== 0) {
      obj.months = Math.round(message.months);
    }
    if (message.days !== 0) {
      obj.days = Math.round(message.days);
    }
    if (message.microseconds !== 0) {
      obj.microseconds = Math.round(message.microseconds);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Literal_CalendarInterval>, I>>(
    base?: I,
  ): Expression_Literal_CalendarInterval {
    return Expression_Literal_CalendarInterval.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Literal_CalendarInterval>, I>>(
    object: I,
  ): Expression_Literal_CalendarInterval {
    const message = createBaseExpression_Literal_CalendarInterval();
    message.months = object.months ?? 0;
    message.days = object.days ?? 0;
    message.microseconds = object.microseconds ?? 0;
    return message;
  },
};

function createBaseExpression_Literal_Array(): Expression_Literal_Array {
  return { elementType: undefined, elements: [] };
}

export const Expression_Literal_Array = {
  encode(message: Expression_Literal_Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementType !== undefined) {
      DataType.encode(message.elementType, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.elements) {
      Expression_Literal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Literal_Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Literal_Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.elementType = DataType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.elements.push(Expression_Literal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Literal_Array {
    return {
      elementType: isSet(object.elementType) ? DataType.fromJSON(object.elementType) : undefined,
      elements: globalThis.Array.isArray(object?.elements)
        ? object.elements.map((e: any) => Expression_Literal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Expression_Literal_Array): unknown {
    const obj: any = {};
    if (message.elementType !== undefined) {
      obj.elementType = DataType.toJSON(message.elementType);
    }
    if (message.elements?.length) {
      obj.elements = message.elements.map((e) => Expression_Literal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Literal_Array>, I>>(base?: I): Expression_Literal_Array {
    return Expression_Literal_Array.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Literal_Array>, I>>(object: I): Expression_Literal_Array {
    const message = createBaseExpression_Literal_Array();
    message.elementType = (object.elementType !== undefined && object.elementType !== null)
      ? DataType.fromPartial(object.elementType)
      : undefined;
    message.elements = object.elements?.map((e) => Expression_Literal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExpression_Literal_Map(): Expression_Literal_Map {
  return { keyType: undefined, valueType: undefined, keys: [], values: [] };
}

export const Expression_Literal_Map = {
  encode(message: Expression_Literal_Map, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyType !== undefined) {
      DataType.encode(message.keyType, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueType !== undefined) {
      DataType.encode(message.valueType, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.keys) {
      Expression_Literal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.values) {
      Expression_Literal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Literal_Map {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Literal_Map();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyType = DataType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.valueType = DataType.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keys.push(Expression_Literal.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.values.push(Expression_Literal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Literal_Map {
    return {
      keyType: isSet(object.keyType) ? DataType.fromJSON(object.keyType) : undefined,
      valueType: isSet(object.valueType) ? DataType.fromJSON(object.valueType) : undefined,
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => Expression_Literal.fromJSON(e)) : [],
      values: globalThis.Array.isArray(object?.values)
        ? object.values.map((e: any) => Expression_Literal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Expression_Literal_Map): unknown {
    const obj: any = {};
    if (message.keyType !== undefined) {
      obj.keyType = DataType.toJSON(message.keyType);
    }
    if (message.valueType !== undefined) {
      obj.valueType = DataType.toJSON(message.valueType);
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => Expression_Literal.toJSON(e));
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => Expression_Literal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Literal_Map>, I>>(base?: I): Expression_Literal_Map {
    return Expression_Literal_Map.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Literal_Map>, I>>(object: I): Expression_Literal_Map {
    const message = createBaseExpression_Literal_Map();
    message.keyType = (object.keyType !== undefined && object.keyType !== null)
      ? DataType.fromPartial(object.keyType)
      : undefined;
    message.valueType = (object.valueType !== undefined && object.valueType !== null)
      ? DataType.fromPartial(object.valueType)
      : undefined;
    message.keys = object.keys?.map((e) => Expression_Literal.fromPartial(e)) || [];
    message.values = object.values?.map((e) => Expression_Literal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExpression_Literal_Struct(): Expression_Literal_Struct {
  return { structType: undefined, elements: [] };
}

export const Expression_Literal_Struct = {
  encode(message: Expression_Literal_Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.structType !== undefined) {
      DataType.encode(message.structType, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.elements) {
      Expression_Literal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Literal_Struct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Literal_Struct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.structType = DataType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.elements.push(Expression_Literal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Literal_Struct {
    return {
      structType: isSet(object.structType) ? DataType.fromJSON(object.structType) : undefined,
      elements: globalThis.Array.isArray(object?.elements)
        ? object.elements.map((e: any) => Expression_Literal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Expression_Literal_Struct): unknown {
    const obj: any = {};
    if (message.structType !== undefined) {
      obj.structType = DataType.toJSON(message.structType);
    }
    if (message.elements?.length) {
      obj.elements = message.elements.map((e) => Expression_Literal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Literal_Struct>, I>>(base?: I): Expression_Literal_Struct {
    return Expression_Literal_Struct.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Literal_Struct>, I>>(object: I): Expression_Literal_Struct {
    const message = createBaseExpression_Literal_Struct();
    message.structType = (object.structType !== undefined && object.structType !== null)
      ? DataType.fromPartial(object.structType)
      : undefined;
    message.elements = object.elements?.map((e) => Expression_Literal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExpression_UnresolvedAttribute(): Expression_UnresolvedAttribute {
  return { unparsedIdentifier: "", planId: undefined, isMetadataColumn: undefined };
}

export const Expression_UnresolvedAttribute = {
  encode(message: Expression_UnresolvedAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unparsedIdentifier !== "") {
      writer.uint32(10).string(message.unparsedIdentifier);
    }
    if (message.planId !== undefined) {
      writer.uint32(16).int64(message.planId);
    }
    if (message.isMetadataColumn !== undefined) {
      writer.uint32(24).bool(message.isMetadataColumn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_UnresolvedAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_UnresolvedAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unparsedIdentifier = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.planId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isMetadataColumn = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_UnresolvedAttribute {
    return {
      unparsedIdentifier: isSet(object.unparsedIdentifier) ? globalThis.String(object.unparsedIdentifier) : "",
      planId: isSet(object.planId) ? globalThis.Number(object.planId) : undefined,
      isMetadataColumn: isSet(object.isMetadataColumn) ? globalThis.Boolean(object.isMetadataColumn) : undefined,
    };
  },

  toJSON(message: Expression_UnresolvedAttribute): unknown {
    const obj: any = {};
    if (message.unparsedIdentifier !== "") {
      obj.unparsedIdentifier = message.unparsedIdentifier;
    }
    if (message.planId !== undefined) {
      obj.planId = Math.round(message.planId);
    }
    if (message.isMetadataColumn !== undefined) {
      obj.isMetadataColumn = message.isMetadataColumn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_UnresolvedAttribute>, I>>(base?: I): Expression_UnresolvedAttribute {
    return Expression_UnresolvedAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_UnresolvedAttribute>, I>>(
    object: I,
  ): Expression_UnresolvedAttribute {
    const message = createBaseExpression_UnresolvedAttribute();
    message.unparsedIdentifier = object.unparsedIdentifier ?? "";
    message.planId = object.planId ?? undefined;
    message.isMetadataColumn = object.isMetadataColumn ?? undefined;
    return message;
  },
};

function createBaseExpression_GetColumnByOrdinal(): Expression_GetColumnByOrdinal {
  return { ordinal: 0, planId: undefined };
}

export const Expression_GetColumnByOrdinal = {
  encode(message: Expression_GetColumnByOrdinal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ordinal !== 0) {
      writer.uint32(8).int32(message.ordinal);
    }
    if (message.planId !== undefined) {
      writer.uint32(16).int64(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_GetColumnByOrdinal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_GetColumnByOrdinal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ordinal = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.planId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_GetColumnByOrdinal {
    return {
      ordinal: isSet(object.ordinal) ? globalThis.Number(object.ordinal) : 0,
      planId: isSet(object.planId) ? globalThis.Number(object.planId) : undefined,
    };
  },

  toJSON(message: Expression_GetColumnByOrdinal): unknown {
    const obj: any = {};
    if (message.ordinal !== 0) {
      obj.ordinal = Math.round(message.ordinal);
    }
    if (message.planId !== undefined) {
      obj.planId = Math.round(message.planId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_GetColumnByOrdinal>, I>>(base?: I): Expression_GetColumnByOrdinal {
    return Expression_GetColumnByOrdinal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_GetColumnByOrdinal>, I>>(
    object: I,
  ): Expression_GetColumnByOrdinal {
    const message = createBaseExpression_GetColumnByOrdinal();
    message.ordinal = object.ordinal ?? 0;
    message.planId = object.planId ?? undefined;
    return message;
  },
};

function createBaseExpression_UnresolvedFunction(): Expression_UnresolvedFunction {
  return { functionName: "", arguments: [], isDistinct: false, isUserDefinedFunction: false };
}

export const Expression_UnresolvedFunction = {
  encode(message: Expression_UnresolvedFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionName !== "") {
      writer.uint32(10).string(message.functionName);
    }
    for (const v of message.arguments) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isDistinct === true) {
      writer.uint32(24).bool(message.isDistinct);
    }
    if (message.isUserDefinedFunction === true) {
      writer.uint32(32).bool(message.isUserDefinedFunction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_UnresolvedFunction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_UnresolvedFunction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.arguments.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isDistinct = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isUserDefinedFunction = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_UnresolvedFunction {
    return {
      functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
      arguments: globalThis.Array.isArray(object?.arguments)
        ? object.arguments.map((e: any) => Expression.fromJSON(e))
        : [],
      isDistinct: isSet(object.isDistinct) ? globalThis.Boolean(object.isDistinct) : false,
      isUserDefinedFunction: isSet(object.isUserDefinedFunction)
        ? globalThis.Boolean(object.isUserDefinedFunction)
        : false,
    };
  },

  toJSON(message: Expression_UnresolvedFunction): unknown {
    const obj: any = {};
    if (message.functionName !== "") {
      obj.functionName = message.functionName;
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Expression.toJSON(e));
    }
    if (message.isDistinct === true) {
      obj.isDistinct = message.isDistinct;
    }
    if (message.isUserDefinedFunction === true) {
      obj.isUserDefinedFunction = message.isUserDefinedFunction;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_UnresolvedFunction>, I>>(base?: I): Expression_UnresolvedFunction {
    return Expression_UnresolvedFunction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_UnresolvedFunction>, I>>(
    object: I,
  ): Expression_UnresolvedFunction {
    const message = createBaseExpression_UnresolvedFunction();
    message.functionName = object.functionName ?? "";
    message.arguments = object.arguments?.map((e) => Expression.fromPartial(e)) || [];
    message.isDistinct = object.isDistinct ?? false;
    message.isUserDefinedFunction = object.isUserDefinedFunction ?? false;
    return message;
  },
};

function createBaseExpression_ExpressionString(): Expression_ExpressionString {
  return { expression: "" };
}

export const Expression_ExpressionString = {
  encode(message: Expression_ExpressionString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expression !== "") {
      writer.uint32(10).string(message.expression);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_ExpressionString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_ExpressionString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.expression = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_ExpressionString {
    return { expression: isSet(object.expression) ? globalThis.String(object.expression) : "" };
  },

  toJSON(message: Expression_ExpressionString): unknown {
    const obj: any = {};
    if (message.expression !== "") {
      obj.expression = message.expression;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_ExpressionString>, I>>(base?: I): Expression_ExpressionString {
    return Expression_ExpressionString.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_ExpressionString>, I>>(object: I): Expression_ExpressionString {
    const message = createBaseExpression_ExpressionString();
    message.expression = object.expression ?? "";
    return message;
  },
};

function createBaseExpression_UnresolvedStar(): Expression_UnresolvedStar {
  return { unparsedTarget: undefined };
}

export const Expression_UnresolvedStar = {
  encode(message: Expression_UnresolvedStar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unparsedTarget !== undefined) {
      writer.uint32(10).string(message.unparsedTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_UnresolvedStar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_UnresolvedStar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unparsedTarget = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_UnresolvedStar {
    return { unparsedTarget: isSet(object.unparsedTarget) ? globalThis.String(object.unparsedTarget) : undefined };
  },

  toJSON(message: Expression_UnresolvedStar): unknown {
    const obj: any = {};
    if (message.unparsedTarget !== undefined) {
      obj.unparsedTarget = message.unparsedTarget;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_UnresolvedStar>, I>>(base?: I): Expression_UnresolvedStar {
    return Expression_UnresolvedStar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_UnresolvedStar>, I>>(object: I): Expression_UnresolvedStar {
    const message = createBaseExpression_UnresolvedStar();
    message.unparsedTarget = object.unparsedTarget ?? undefined;
    return message;
  },
};

function createBaseExpression_UnresolvedRegex(): Expression_UnresolvedRegex {
  return { colName: "", planId: undefined };
}

export const Expression_UnresolvedRegex = {
  encode(message: Expression_UnresolvedRegex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.colName !== "") {
      writer.uint32(10).string(message.colName);
    }
    if (message.planId !== undefined) {
      writer.uint32(16).int64(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_UnresolvedRegex {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_UnresolvedRegex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.colName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.planId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_UnresolvedRegex {
    return {
      colName: isSet(object.colName) ? globalThis.String(object.colName) : "",
      planId: isSet(object.planId) ? globalThis.Number(object.planId) : undefined,
    };
  },

  toJSON(message: Expression_UnresolvedRegex): unknown {
    const obj: any = {};
    if (message.colName !== "") {
      obj.colName = message.colName;
    }
    if (message.planId !== undefined) {
      obj.planId = Math.round(message.planId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_UnresolvedRegex>, I>>(base?: I): Expression_UnresolvedRegex {
    return Expression_UnresolvedRegex.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_UnresolvedRegex>, I>>(object: I): Expression_UnresolvedRegex {
    const message = createBaseExpression_UnresolvedRegex();
    message.colName = object.colName ?? "";
    message.planId = object.planId ?? undefined;
    return message;
  },
};

function createBaseExpression_UnresolvedExtractValue(): Expression_UnresolvedExtractValue {
  return { child: undefined, extraction: undefined };
}

export const Expression_UnresolvedExtractValue = {
  encode(message: Expression_UnresolvedExtractValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.child !== undefined) {
      Expression.encode(message.child, writer.uint32(10).fork()).ldelim();
    }
    if (message.extraction !== undefined) {
      Expression.encode(message.extraction, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_UnresolvedExtractValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_UnresolvedExtractValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.child = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extraction = Expression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_UnresolvedExtractValue {
    return {
      child: isSet(object.child) ? Expression.fromJSON(object.child) : undefined,
      extraction: isSet(object.extraction) ? Expression.fromJSON(object.extraction) : undefined,
    };
  },

  toJSON(message: Expression_UnresolvedExtractValue): unknown {
    const obj: any = {};
    if (message.child !== undefined) {
      obj.child = Expression.toJSON(message.child);
    }
    if (message.extraction !== undefined) {
      obj.extraction = Expression.toJSON(message.extraction);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_UnresolvedExtractValue>, I>>(
    base?: I,
  ): Expression_UnresolvedExtractValue {
    return Expression_UnresolvedExtractValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_UnresolvedExtractValue>, I>>(
    object: I,
  ): Expression_UnresolvedExtractValue {
    const message = createBaseExpression_UnresolvedExtractValue();
    message.child = (object.child !== undefined && object.child !== null)
      ? Expression.fromPartial(object.child)
      : undefined;
    message.extraction = (object.extraction !== undefined && object.extraction !== null)
      ? Expression.fromPartial(object.extraction)
      : undefined;
    return message;
  },
};

function createBaseExpression_UpdateFields(): Expression_UpdateFields {
  return { structExpression: undefined, fieldName: "", valueExpression: undefined };
}

export const Expression_UpdateFields = {
  encode(message: Expression_UpdateFields, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.structExpression !== undefined) {
      Expression.encode(message.structExpression, writer.uint32(10).fork()).ldelim();
    }
    if (message.fieldName !== "") {
      writer.uint32(18).string(message.fieldName);
    }
    if (message.valueExpression !== undefined) {
      Expression.encode(message.valueExpression, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_UpdateFields {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_UpdateFields();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.structExpression = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fieldName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.valueExpression = Expression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_UpdateFields {
    return {
      structExpression: isSet(object.structExpression) ? Expression.fromJSON(object.structExpression) : undefined,
      fieldName: isSet(object.fieldName) ? globalThis.String(object.fieldName) : "",
      valueExpression: isSet(object.valueExpression) ? Expression.fromJSON(object.valueExpression) : undefined,
    };
  },

  toJSON(message: Expression_UpdateFields): unknown {
    const obj: any = {};
    if (message.structExpression !== undefined) {
      obj.structExpression = Expression.toJSON(message.structExpression);
    }
    if (message.fieldName !== "") {
      obj.fieldName = message.fieldName;
    }
    if (message.valueExpression !== undefined) {
      obj.valueExpression = Expression.toJSON(message.valueExpression);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_UpdateFields>, I>>(base?: I): Expression_UpdateFields {
    return Expression_UpdateFields.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_UpdateFields>, I>>(object: I): Expression_UpdateFields {
    const message = createBaseExpression_UpdateFields();
    message.structExpression = (object.structExpression !== undefined && object.structExpression !== null)
      ? Expression.fromPartial(object.structExpression)
      : undefined;
    message.fieldName = object.fieldName ?? "";
    message.valueExpression = (object.valueExpression !== undefined && object.valueExpression !== null)
      ? Expression.fromPartial(object.valueExpression)
      : undefined;
    return message;
  },
};

function createBaseExpression_Alias(): Expression_Alias {
  return { expr: undefined, name: [], metadata: undefined };
}

export const Expression_Alias = {
  encode(message: Expression_Alias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      Expression.encode(message.expr, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.name) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_Alias {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_Alias();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.expr = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_Alias {
    return {
      expr: isSet(object.expr) ? Expression.fromJSON(object.expr) : undefined,
      name: globalThis.Array.isArray(object?.name) ? object.name.map((e: any) => globalThis.String(e)) : [],
      metadata: isSet(object.metadata) ? globalThis.String(object.metadata) : undefined,
    };
  },

  toJSON(message: Expression_Alias): unknown {
    const obj: any = {};
    if (message.expr !== undefined) {
      obj.expr = Expression.toJSON(message.expr);
    }
    if (message.name?.length) {
      obj.name = message.name;
    }
    if (message.metadata !== undefined) {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_Alias>, I>>(base?: I): Expression_Alias {
    return Expression_Alias.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_Alias>, I>>(object: I): Expression_Alias {
    const message = createBaseExpression_Alias();
    message.expr = (object.expr !== undefined && object.expr !== null)
      ? Expression.fromPartial(object.expr)
      : undefined;
    message.name = object.name?.map((e) => e) || [];
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseExpression_LambdaFunction(): Expression_LambdaFunction {
  return { function: undefined, arguments: [] };
}

export const Expression_LambdaFunction = {
  encode(message: Expression_LambdaFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.function !== undefined) {
      Expression.encode(message.function, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.arguments) {
      Expression_UnresolvedNamedLambdaVariable.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_LambdaFunction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_LambdaFunction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.function = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.arguments.push(Expression_UnresolvedNamedLambdaVariable.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_LambdaFunction {
    return {
      function: isSet(object.function) ? Expression.fromJSON(object.function) : undefined,
      arguments: globalThis.Array.isArray(object?.arguments)
        ? object.arguments.map((e: any) => Expression_UnresolvedNamedLambdaVariable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Expression_LambdaFunction): unknown {
    const obj: any = {};
    if (message.function !== undefined) {
      obj.function = Expression.toJSON(message.function);
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Expression_UnresolvedNamedLambdaVariable.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_LambdaFunction>, I>>(base?: I): Expression_LambdaFunction {
    return Expression_LambdaFunction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_LambdaFunction>, I>>(object: I): Expression_LambdaFunction {
    const message = createBaseExpression_LambdaFunction();
    message.function = (object.function !== undefined && object.function !== null)
      ? Expression.fromPartial(object.function)
      : undefined;
    message.arguments = object.arguments?.map((e) => Expression_UnresolvedNamedLambdaVariable.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExpression_UnresolvedNamedLambdaVariable(): Expression_UnresolvedNamedLambdaVariable {
  return { nameParts: [] };
}

export const Expression_UnresolvedNamedLambdaVariable = {
  encode(message: Expression_UnresolvedNamedLambdaVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nameParts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expression_UnresolvedNamedLambdaVariable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpression_UnresolvedNamedLambdaVariable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nameParts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expression_UnresolvedNamedLambdaVariable {
    return {
      nameParts: globalThis.Array.isArray(object?.nameParts)
        ? object.nameParts.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Expression_UnresolvedNamedLambdaVariable): unknown {
    const obj: any = {};
    if (message.nameParts?.length) {
      obj.nameParts = message.nameParts;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Expression_UnresolvedNamedLambdaVariable>, I>>(
    base?: I,
  ): Expression_UnresolvedNamedLambdaVariable {
    return Expression_UnresolvedNamedLambdaVariable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Expression_UnresolvedNamedLambdaVariable>, I>>(
    object: I,
  ): Expression_UnresolvedNamedLambdaVariable {
    const message = createBaseExpression_UnresolvedNamedLambdaVariable();
    message.nameParts = object.nameParts?.map((e) => e) || [];
    return message;
  },
};

function createBaseCommonInlineUserDefinedFunction(): CommonInlineUserDefinedFunction {
  return {
    functionName: "",
    deterministic: false,
    arguments: [],
    pythonUdf: undefined,
    scalarScalaUdf: undefined,
    javaUdf: undefined,
  };
}

export const CommonInlineUserDefinedFunction = {
  encode(message: CommonInlineUserDefinedFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionName !== "") {
      writer.uint32(10).string(message.functionName);
    }
    if (message.deterministic === true) {
      writer.uint32(16).bool(message.deterministic);
    }
    for (const v of message.arguments) {
      Expression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pythonUdf !== undefined) {
      PythonUDF.encode(message.pythonUdf, writer.uint32(34).fork()).ldelim();
    }
    if (message.scalarScalaUdf !== undefined) {
      ScalarScalaUDF.encode(message.scalarScalaUdf, writer.uint32(42).fork()).ldelim();
    }
    if (message.javaUdf !== undefined) {
      JavaUDF.encode(message.javaUdf, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommonInlineUserDefinedFunction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommonInlineUserDefinedFunction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.deterministic = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.arguments.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pythonUdf = PythonUDF.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scalarScalaUdf = ScalarScalaUDF.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.javaUdf = JavaUDF.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommonInlineUserDefinedFunction {
    return {
      functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
      deterministic: isSet(object.deterministic) ? globalThis.Boolean(object.deterministic) : false,
      arguments: globalThis.Array.isArray(object?.arguments)
        ? object.arguments.map((e: any) => Expression.fromJSON(e))
        : [],
      pythonUdf: isSet(object.pythonUdf) ? PythonUDF.fromJSON(object.pythonUdf) : undefined,
      scalarScalaUdf: isSet(object.scalarScalaUdf) ? ScalarScalaUDF.fromJSON(object.scalarScalaUdf) : undefined,
      javaUdf: isSet(object.javaUdf) ? JavaUDF.fromJSON(object.javaUdf) : undefined,
    };
  },

  toJSON(message: CommonInlineUserDefinedFunction): unknown {
    const obj: any = {};
    if (message.functionName !== "") {
      obj.functionName = message.functionName;
    }
    if (message.deterministic === true) {
      obj.deterministic = message.deterministic;
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Expression.toJSON(e));
    }
    if (message.pythonUdf !== undefined) {
      obj.pythonUdf = PythonUDF.toJSON(message.pythonUdf);
    }
    if (message.scalarScalaUdf !== undefined) {
      obj.scalarScalaUdf = ScalarScalaUDF.toJSON(message.scalarScalaUdf);
    }
    if (message.javaUdf !== undefined) {
      obj.javaUdf = JavaUDF.toJSON(message.javaUdf);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommonInlineUserDefinedFunction>, I>>(base?: I): CommonInlineUserDefinedFunction {
    return CommonInlineUserDefinedFunction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommonInlineUserDefinedFunction>, I>>(
    object: I,
  ): CommonInlineUserDefinedFunction {
    const message = createBaseCommonInlineUserDefinedFunction();
    message.functionName = object.functionName ?? "";
    message.deterministic = object.deterministic ?? false;
    message.arguments = object.arguments?.map((e) => Expression.fromPartial(e)) || [];
    message.pythonUdf = (object.pythonUdf !== undefined && object.pythonUdf !== null)
      ? PythonUDF.fromPartial(object.pythonUdf)
      : undefined;
    message.scalarScalaUdf = (object.scalarScalaUdf !== undefined && object.scalarScalaUdf !== null)
      ? ScalarScalaUDF.fromPartial(object.scalarScalaUdf)
      : undefined;
    message.javaUdf = (object.javaUdf !== undefined && object.javaUdf !== null)
      ? JavaUDF.fromPartial(object.javaUdf)
      : undefined;
    return message;
  },
};

function createBasePythonUDF(): PythonUDF {
  return { outputType: undefined, evalType: 0, command: new Uint8Array(0), pythonVer: "" };
}

export const PythonUDF = {
  encode(message: PythonUDF, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outputType !== undefined) {
      DataType.encode(message.outputType, writer.uint32(10).fork()).ldelim();
    }
    if (message.evalType !== 0) {
      writer.uint32(16).int32(message.evalType);
    }
    if (message.command.length !== 0) {
      writer.uint32(26).bytes(message.command);
    }
    if (message.pythonVer !== "") {
      writer.uint32(34).string(message.pythonVer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PythonUDF {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePythonUDF();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputType = DataType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.evalType = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.command = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pythonVer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PythonUDF {
    return {
      outputType: isSet(object.outputType) ? DataType.fromJSON(object.outputType) : undefined,
      evalType: isSet(object.evalType) ? globalThis.Number(object.evalType) : 0,
      command: isSet(object.command) ? bytesFromBase64(object.command) : new Uint8Array(0),
      pythonVer: isSet(object.pythonVer) ? globalThis.String(object.pythonVer) : "",
    };
  },

  toJSON(message: PythonUDF): unknown {
    const obj: any = {};
    if (message.outputType !== undefined) {
      obj.outputType = DataType.toJSON(message.outputType);
    }
    if (message.evalType !== 0) {
      obj.evalType = Math.round(message.evalType);
    }
    if (message.command.length !== 0) {
      obj.command = base64FromBytes(message.command);
    }
    if (message.pythonVer !== "") {
      obj.pythonVer = message.pythonVer;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PythonUDF>, I>>(base?: I): PythonUDF {
    return PythonUDF.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PythonUDF>, I>>(object: I): PythonUDF {
    const message = createBasePythonUDF();
    message.outputType = (object.outputType !== undefined && object.outputType !== null)
      ? DataType.fromPartial(object.outputType)
      : undefined;
    message.evalType = object.evalType ?? 0;
    message.command = object.command ?? new Uint8Array(0);
    message.pythonVer = object.pythonVer ?? "";
    return message;
  },
};

function createBaseScalarScalaUDF(): ScalarScalaUDF {
  return { payload: new Uint8Array(0), inputTypes: [], outputType: undefined, nullable: false };
}

export const ScalarScalaUDF = {
  encode(message: ScalarScalaUDF, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    for (const v of message.inputTypes) {
      DataType.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.outputType !== undefined) {
      DataType.encode(message.outputType, writer.uint32(26).fork()).ldelim();
    }
    if (message.nullable === true) {
      writer.uint32(32).bool(message.nullable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalarScalaUDF {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalarScalaUDF();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inputTypes.push(DataType.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.outputType = DataType.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nullable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScalarScalaUDF {
    return {
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(0),
      inputTypes: globalThis.Array.isArray(object?.inputTypes)
        ? object.inputTypes.map((e: any) => DataType.fromJSON(e))
        : [],
      outputType: isSet(object.outputType) ? DataType.fromJSON(object.outputType) : undefined,
      nullable: isSet(object.nullable) ? globalThis.Boolean(object.nullable) : false,
    };
  },

  toJSON(message: ScalarScalaUDF): unknown {
    const obj: any = {};
    if (message.payload.length !== 0) {
      obj.payload = base64FromBytes(message.payload);
    }
    if (message.inputTypes?.length) {
      obj.inputTypes = message.inputTypes.map((e) => DataType.toJSON(e));
    }
    if (message.outputType !== undefined) {
      obj.outputType = DataType.toJSON(message.outputType);
    }
    if (message.nullable === true) {
      obj.nullable = message.nullable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScalarScalaUDF>, I>>(base?: I): ScalarScalaUDF {
    return ScalarScalaUDF.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScalarScalaUDF>, I>>(object: I): ScalarScalaUDF {
    const message = createBaseScalarScalaUDF();
    message.payload = object.payload ?? new Uint8Array(0);
    message.inputTypes = object.inputTypes?.map((e) => DataType.fromPartial(e)) || [];
    message.outputType = (object.outputType !== undefined && object.outputType !== null)
      ? DataType.fromPartial(object.outputType)
      : undefined;
    message.nullable = object.nullable ?? false;
    return message;
  },
};

function createBaseJavaUDF(): JavaUDF {
  return { className: "", outputType: undefined, aggregate: false };
}

export const JavaUDF = {
  encode(message: JavaUDF, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.className !== "") {
      writer.uint32(10).string(message.className);
    }
    if (message.outputType !== undefined) {
      DataType.encode(message.outputType, writer.uint32(18).fork()).ldelim();
    }
    if (message.aggregate === true) {
      writer.uint32(24).bool(message.aggregate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JavaUDF {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJavaUDF();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.className = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outputType = DataType.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.aggregate = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JavaUDF {
    return {
      className: isSet(object.className) ? globalThis.String(object.className) : "",
      outputType: isSet(object.outputType) ? DataType.fromJSON(object.outputType) : undefined,
      aggregate: isSet(object.aggregate) ? globalThis.Boolean(object.aggregate) : false,
    };
  },

  toJSON(message: JavaUDF): unknown {
    const obj: any = {};
    if (message.className !== "") {
      obj.className = message.className;
    }
    if (message.outputType !== undefined) {
      obj.outputType = DataType.toJSON(message.outputType);
    }
    if (message.aggregate === true) {
      obj.aggregate = message.aggregate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JavaUDF>, I>>(base?: I): JavaUDF {
    return JavaUDF.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JavaUDF>, I>>(object: I): JavaUDF {
    const message = createBaseJavaUDF();
    message.className = object.className ?? "";
    message.outputType = (object.outputType !== undefined && object.outputType !== null)
      ? DataType.fromPartial(object.outputType)
      : undefined;
    message.aggregate = object.aggregate ?? false;
    return message;
  },
};

function createBaseCallFunction(): CallFunction {
  return { functionName: "", arguments: [] };
}

export const CallFunction = {
  encode(message: CallFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionName !== "") {
      writer.uint32(10).string(message.functionName);
    }
    for (const v of message.arguments) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallFunction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallFunction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.arguments.push(Expression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CallFunction {
    return {
      functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
      arguments: globalThis.Array.isArray(object?.arguments)
        ? object.arguments.map((e: any) => Expression.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CallFunction): unknown {
    const obj: any = {};
    if (message.functionName !== "") {
      obj.functionName = message.functionName;
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Expression.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CallFunction>, I>>(base?: I): CallFunction {
    return CallFunction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CallFunction>, I>>(object: I): CallFunction {
    const message = createBaseCallFunction();
    message.functionName = object.functionName ?? "";
    message.arguments = object.arguments?.map((e) => Expression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNamedArgumentExpression(): NamedArgumentExpression {
  return { key: "", value: undefined };
}

export const NamedArgumentExpression = {
  encode(message: NamedArgumentExpression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Expression.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NamedArgumentExpression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamedArgumentExpression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Expression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NamedArgumentExpression {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Expression.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: NamedArgumentExpression): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Expression.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NamedArgumentExpression>, I>>(base?: I): NamedArgumentExpression {
    return NamedArgumentExpression.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NamedArgumentExpression>, I>>(object: I): NamedArgumentExpression {
    const message = createBaseNamedArgumentExpression();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Expression.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
