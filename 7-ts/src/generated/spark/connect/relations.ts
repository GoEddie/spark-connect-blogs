/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { Catalog } from "./catalog";
import {
  CommonInlineUserDefinedFunction,
  Expression,
  Expression_Alias,
  Expression_Literal,
  Expression_SortOrder,
} from "./expressions";
import { DataType } from "./types";
import Long = require("long");

export const protobufPackage = "spark.connect";

/**
 * The main [[Relation]] type. Fundamentally, a relation is a typed container
 * that has exactly one explicit relation type set.
 *
 * When adding new relation types, they have to be registered here.
 */
export interface Relation {
  common: RelationCommon | undefined;
  read?: Read | undefined;
  project?: Project | undefined;
  filter?: Filter | undefined;
  join?: Join | undefined;
  setOp?: SetOperation | undefined;
  sort?: Sort | undefined;
  limit?: Limit | undefined;
  aggregate?: Aggregate | undefined;
  sql?: SQL | undefined;
  localRelation?: LocalRelation | undefined;
  sample?: Sample | undefined;
  offset?: Offset | undefined;
  deduplicate?: Deduplicate | undefined;
  range?: Range | undefined;
  subqueryAlias?: SubqueryAlias | undefined;
  repartition?: Repartition | undefined;
  toDf?: ToDF | undefined;
  withColumnsRenamed?: WithColumnsRenamed | undefined;
  showString?: ShowString | undefined;
  drop?: Drop | undefined;
  tail?: Tail | undefined;
  withColumns?: WithColumns | undefined;
  hint?: Hint | undefined;
  unpivot?: Unpivot | undefined;
  toSchema?: ToSchema | undefined;
  repartitionByExpression?: RepartitionByExpression | undefined;
  mapPartitions?: MapPartitions | undefined;
  collectMetrics?: CollectMetrics | undefined;
  parse?: Parse | undefined;
  groupMap?: GroupMap | undefined;
  coGroupMap?: CoGroupMap | undefined;
  withWatermark?: WithWatermark | undefined;
  applyInPandasWithState?: ApplyInPandasWithState | undefined;
  htmlString?: HtmlString | undefined;
  cachedLocalRelation?: CachedLocalRelation | undefined;
  cachedRemoteRelation?: CachedRemoteRelation | undefined;
  commonInlineUserDefinedTableFunction?:
    | CommonInlineUserDefinedTableFunction
    | undefined;
  /** NA functions */
  fillNa?: NAFill | undefined;
  dropNa?: NADrop | undefined;
  replace?:
    | NAReplace
    | undefined;
  /** stat functions */
  summary?: StatSummary | undefined;
  crosstab?: StatCrosstab | undefined;
  describe?: StatDescribe | undefined;
  cov?: StatCov | undefined;
  corr?: StatCorr | undefined;
  approxQuantile?: StatApproxQuantile | undefined;
  freqItems?: StatFreqItems | undefined;
  sampleBy?:
    | StatSampleBy
    | undefined;
  /** Catalog API (experimental / unstable) */
  catalog?:
    | Catalog
    | undefined;
  /**
   * This field is used to mark extensions to the protocol. When plugins generate arbitrary
   * relations they can add them here. During the planning the correct resolution is done.
   */
  extension?: Any | undefined;
  unknown?: Unknown | undefined;
}

/** Used for testing purposes only. */
export interface Unknown {
}

/** Common metadata of all relations. */
export interface RelationCommon {
  /** (Required) Shared relation metadata. */
  sourceInfo: string;
  /** (Optional) A per-client globally unique id for a given connect plan. */
  planId?: number | undefined;
}

/** Relation that uses a SQL query to generate the output. */
export interface SQL {
  /** (Required) The SQL query. */
  query: string;
  /**
   * (Optional) A map of parameter names to literal expressions.
   *
   * @deprecated
   */
  args: { [key: string]: Expression_Literal };
  /**
   * (Optional) A sequence of literal expressions for positional parameters in the SQL query text.
   *
   * @deprecated
   */
  posArgs: Expression_Literal[];
  /**
   * (Optional) A map of parameter names to expressions.
   * It cannot coexist with `pos_arguments`.
   */
  namedArguments: { [key: string]: Expression };
  /**
   * (Optional) A sequence of expressions for positional parameters in the SQL query text.
   * It cannot coexist with `named_arguments`.
   */
  posArguments: Expression[];
}

export interface SQL_ArgsEntry {
  key: string;
  value: Expression_Literal | undefined;
}

export interface SQL_NamedArgumentsEntry {
  key: string;
  value: Expression | undefined;
}

/**
 * Relation that reads from a file / table or other data source. Does not have additional
 * inputs.
 */
export interface Read {
  namedTable?: Read_NamedTable | undefined;
  dataSource?:
    | Read_DataSource
    | undefined;
  /** (Optional) Indicates if this is a streaming read. */
  isStreaming: boolean;
}

export interface Read_NamedTable {
  /** (Required) Unparsed identifier for the table. */
  unparsedIdentifier: string;
  /** Options for the named table. The map key is case insensitive. */
  options: { [key: string]: string };
}

export interface Read_NamedTable_OptionsEntry {
  key: string;
  value: string;
}

export interface Read_DataSource {
  /**
   * (Optional) Supported formats include: parquet, orc, text, json, parquet, csv, avro.
   *
   * If not set, the value from SQL conf 'spark.sql.sources.default' will be used.
   */
  format?:
    | string
    | undefined;
  /**
   * (Optional) If not set, Spark will infer the schema.
   *
   * This schema string should be either DDL-formatted or JSON-formatted.
   */
  schema?:
    | string
    | undefined;
  /**
   * Options for the data source. The context of this map varies based on the
   * data source format. This options could be empty for valid data source format.
   * The map key is case insensitive.
   */
  options: { [key: string]: string };
  /** (Optional) A list of path for file-system backed data sources. */
  paths: string[];
  /**
   * (Optional) Condition in the where clause for each partition.
   *
   * This is only supported by the JDBC data source.
   */
  predicates: string[];
}

export interface Read_DataSource_OptionsEntry {
  key: string;
  value: string;
}

/**
 * Projection of a bag of expressions for a given input relation.
 *
 * The input relation must be specified.
 * The projected expression can be an arbitrary expression.
 */
export interface Project {
  /**
   * (Optional) Input relation is optional for Project.
   *
   * For example, `SELECT ABS(-1)` is valid plan without an input plan.
   */
  input:
    | Relation
    | undefined;
  /** (Required) A Project requires at least one expression. */
  expressions: Expression[];
}

/**
 * Relation that applies a boolean expression `condition` on each row of `input` to produce
 * the output result.
 */
export interface Filter {
  /** (Required) Input relation for a Filter. */
  input:
    | Relation
    | undefined;
  /** (Required) A Filter must have a condition expression. */
  condition: Expression | undefined;
}

/**
 * Relation of type [[Join]].
 *
 * `left` and `right` must be present.
 */
export interface Join {
  /** (Required) Left input relation for a Join. */
  left:
    | Relation
    | undefined;
  /** (Required) Right input relation for a Join. */
  right:
    | Relation
    | undefined;
  /**
   * (Optional) The join condition. Could be unset when `using_columns` is utilized.
   *
   * This field does not co-exist with using_columns.
   */
  joinCondition:
    | Expression
    | undefined;
  /** (Required) The join type. */
  joinType: Join_JoinType;
  /**
   * Optional. using_columns provides a list of columns that should present on both sides of
   * the join inputs that this Join will join on. For example A JOIN B USING col_name is
   * equivalent to A JOIN B on A.col_name = B.col_name.
   *
   * This field does not co-exist with join_condition.
   */
  usingColumns: string[];
  /** (Optional) Only used by joinWith. Set the left and right join data types. */
  joinDataType?: Join_JoinDataType | undefined;
}

export enum Join_JoinType {
  JOIN_TYPE_UNSPECIFIED = 0,
  JOIN_TYPE_INNER = 1,
  JOIN_TYPE_FULL_OUTER = 2,
  JOIN_TYPE_LEFT_OUTER = 3,
  JOIN_TYPE_RIGHT_OUTER = 4,
  JOIN_TYPE_LEFT_ANTI = 5,
  JOIN_TYPE_LEFT_SEMI = 6,
  JOIN_TYPE_CROSS = 7,
  UNRECOGNIZED = -1,
}

export function join_JoinTypeFromJSON(object: any): Join_JoinType {
  switch (object) {
    case 0:
    case "JOIN_TYPE_UNSPECIFIED":
      return Join_JoinType.JOIN_TYPE_UNSPECIFIED;
    case 1:
    case "JOIN_TYPE_INNER":
      return Join_JoinType.JOIN_TYPE_INNER;
    case 2:
    case "JOIN_TYPE_FULL_OUTER":
      return Join_JoinType.JOIN_TYPE_FULL_OUTER;
    case 3:
    case "JOIN_TYPE_LEFT_OUTER":
      return Join_JoinType.JOIN_TYPE_LEFT_OUTER;
    case 4:
    case "JOIN_TYPE_RIGHT_OUTER":
      return Join_JoinType.JOIN_TYPE_RIGHT_OUTER;
    case 5:
    case "JOIN_TYPE_LEFT_ANTI":
      return Join_JoinType.JOIN_TYPE_LEFT_ANTI;
    case 6:
    case "JOIN_TYPE_LEFT_SEMI":
      return Join_JoinType.JOIN_TYPE_LEFT_SEMI;
    case 7:
    case "JOIN_TYPE_CROSS":
      return Join_JoinType.JOIN_TYPE_CROSS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Join_JoinType.UNRECOGNIZED;
  }
}

export function join_JoinTypeToJSON(object: Join_JoinType): string {
  switch (object) {
    case Join_JoinType.JOIN_TYPE_UNSPECIFIED:
      return "JOIN_TYPE_UNSPECIFIED";
    case Join_JoinType.JOIN_TYPE_INNER:
      return "JOIN_TYPE_INNER";
    case Join_JoinType.JOIN_TYPE_FULL_OUTER:
      return "JOIN_TYPE_FULL_OUTER";
    case Join_JoinType.JOIN_TYPE_LEFT_OUTER:
      return "JOIN_TYPE_LEFT_OUTER";
    case Join_JoinType.JOIN_TYPE_RIGHT_OUTER:
      return "JOIN_TYPE_RIGHT_OUTER";
    case Join_JoinType.JOIN_TYPE_LEFT_ANTI:
      return "JOIN_TYPE_LEFT_ANTI";
    case Join_JoinType.JOIN_TYPE_LEFT_SEMI:
      return "JOIN_TYPE_LEFT_SEMI";
    case Join_JoinType.JOIN_TYPE_CROSS:
      return "JOIN_TYPE_CROSS";
    case Join_JoinType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Join_JoinDataType {
  /** If the left data type is a struct. */
  isLeftStruct: boolean;
  /** If the right data type is a struct. */
  isRightStruct: boolean;
}

/** Relation of type [[SetOperation]] */
export interface SetOperation {
  /** (Required) Left input relation for a Set operation. */
  leftInput:
    | Relation
    | undefined;
  /** (Required) Right input relation for a Set operation. */
  rightInput:
    | Relation
    | undefined;
  /** (Required) The Set operation type. */
  setOpType: SetOperation_SetOpType;
  /**
   * (Optional) If to remove duplicate rows.
   *
   * True to preserve all results.
   * False to remove duplicate rows.
   */
  isAll?:
    | boolean
    | undefined;
  /**
   * (Optional) If to perform the Set operation based on name resolution.
   *
   * Only UNION supports this option.
   */
  byName?:
    | boolean
    | undefined;
  /**
   * (Optional) If to perform the Set operation and allow missing columns.
   *
   * Only UNION supports this option.
   */
  allowMissingColumns?: boolean | undefined;
}

export enum SetOperation_SetOpType {
  SET_OP_TYPE_UNSPECIFIED = 0,
  SET_OP_TYPE_INTERSECT = 1,
  SET_OP_TYPE_UNION = 2,
  SET_OP_TYPE_EXCEPT = 3,
  UNRECOGNIZED = -1,
}

export function setOperation_SetOpTypeFromJSON(object: any): SetOperation_SetOpType {
  switch (object) {
    case 0:
    case "SET_OP_TYPE_UNSPECIFIED":
      return SetOperation_SetOpType.SET_OP_TYPE_UNSPECIFIED;
    case 1:
    case "SET_OP_TYPE_INTERSECT":
      return SetOperation_SetOpType.SET_OP_TYPE_INTERSECT;
    case 2:
    case "SET_OP_TYPE_UNION":
      return SetOperation_SetOpType.SET_OP_TYPE_UNION;
    case 3:
    case "SET_OP_TYPE_EXCEPT":
      return SetOperation_SetOpType.SET_OP_TYPE_EXCEPT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SetOperation_SetOpType.UNRECOGNIZED;
  }
}

export function setOperation_SetOpTypeToJSON(object: SetOperation_SetOpType): string {
  switch (object) {
    case SetOperation_SetOpType.SET_OP_TYPE_UNSPECIFIED:
      return "SET_OP_TYPE_UNSPECIFIED";
    case SetOperation_SetOpType.SET_OP_TYPE_INTERSECT:
      return "SET_OP_TYPE_INTERSECT";
    case SetOperation_SetOpType.SET_OP_TYPE_UNION:
      return "SET_OP_TYPE_UNION";
    case SetOperation_SetOpType.SET_OP_TYPE_EXCEPT:
      return "SET_OP_TYPE_EXCEPT";
    case SetOperation_SetOpType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Relation of type [[Limit]] that is used to `limit` rows from the input relation. */
export interface Limit {
  /** (Required) Input relation for a Limit. */
  input:
    | Relation
    | undefined;
  /** (Required) the limit. */
  limit: number;
}

/**
 * Relation of type [[Offset]] that is used to read rows staring from the `offset` on
 * the input relation.
 */
export interface Offset {
  /** (Required) Input relation for an Offset. */
  input:
    | Relation
    | undefined;
  /** (Required) the limit. */
  offset: number;
}

/** Relation of type [[Tail]] that is used to fetch `limit` rows from the last of the input relation. */
export interface Tail {
  /** (Required) Input relation for an Tail. */
  input:
    | Relation
    | undefined;
  /** (Required) the limit. */
  limit: number;
}

/** Relation of type [[Aggregate]]. */
export interface Aggregate {
  /** (Required) Input relation for a RelationalGroupedDataset. */
  input:
    | Relation
    | undefined;
  /** (Required) How the RelationalGroupedDataset was built. */
  groupType: Aggregate_GroupType;
  /** (Required) Expressions for grouping keys */
  groupingExpressions: Expression[];
  /** (Required) List of values that will be translated to columns in the output DataFrame. */
  aggregateExpressions: Expression[];
  /** (Optional) Pivots a column of the current `DataFrame` and performs the specified aggregation. */
  pivot: Aggregate_Pivot | undefined;
}

export enum Aggregate_GroupType {
  GROUP_TYPE_UNSPECIFIED = 0,
  GROUP_TYPE_GROUPBY = 1,
  GROUP_TYPE_ROLLUP = 2,
  GROUP_TYPE_CUBE = 3,
  GROUP_TYPE_PIVOT = 4,
  UNRECOGNIZED = -1,
}

export function aggregate_GroupTypeFromJSON(object: any): Aggregate_GroupType {
  switch (object) {
    case 0:
    case "GROUP_TYPE_UNSPECIFIED":
      return Aggregate_GroupType.GROUP_TYPE_UNSPECIFIED;
    case 1:
    case "GROUP_TYPE_GROUPBY":
      return Aggregate_GroupType.GROUP_TYPE_GROUPBY;
    case 2:
    case "GROUP_TYPE_ROLLUP":
      return Aggregate_GroupType.GROUP_TYPE_ROLLUP;
    case 3:
    case "GROUP_TYPE_CUBE":
      return Aggregate_GroupType.GROUP_TYPE_CUBE;
    case 4:
    case "GROUP_TYPE_PIVOT":
      return Aggregate_GroupType.GROUP_TYPE_PIVOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Aggregate_GroupType.UNRECOGNIZED;
  }
}

export function aggregate_GroupTypeToJSON(object: Aggregate_GroupType): string {
  switch (object) {
    case Aggregate_GroupType.GROUP_TYPE_UNSPECIFIED:
      return "GROUP_TYPE_UNSPECIFIED";
    case Aggregate_GroupType.GROUP_TYPE_GROUPBY:
      return "GROUP_TYPE_GROUPBY";
    case Aggregate_GroupType.GROUP_TYPE_ROLLUP:
      return "GROUP_TYPE_ROLLUP";
    case Aggregate_GroupType.GROUP_TYPE_CUBE:
      return "GROUP_TYPE_CUBE";
    case Aggregate_GroupType.GROUP_TYPE_PIVOT:
      return "GROUP_TYPE_PIVOT";
    case Aggregate_GroupType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Aggregate_Pivot {
  /** (Required) The column to pivot */
  col:
    | Expression
    | undefined;
  /**
   * (Optional) List of values that will be translated to columns in the output DataFrame.
   *
   * Note that if it is empty, the server side will immediately trigger a job to collect
   * the distinct values of the column.
   */
  values: Expression_Literal[];
}

/** Relation of type [[Sort]]. */
export interface Sort {
  /** (Required) Input relation for a Sort. */
  input:
    | Relation
    | undefined;
  /** (Required) The ordering expressions */
  order: Expression_SortOrder[];
  /** (Optional) if this is a global sort. */
  isGlobal?: boolean | undefined;
}

/** Drop specified columns. */
export interface Drop {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Optional) columns to drop. */
  columns: Expression[];
  /** (Optional) names of columns to drop. */
  columnNames: string[];
}

/**
 * Relation of type [[Deduplicate]] which have duplicate rows removed, could consider either only
 * the subset of columns or all the columns.
 */
export interface Deduplicate {
  /** (Required) Input relation for a Deduplicate. */
  input:
    | Relation
    | undefined;
  /**
   * (Optional) Deduplicate based on a list of column names.
   *
   * This field does not co-use with `all_columns_as_keys`.
   */
  columnNames: string[];
  /**
   * (Optional) Deduplicate based on all the columns of the input relation.
   *
   * This field does not co-use with `column_names`.
   */
  allColumnsAsKeys?:
    | boolean
    | undefined;
  /** (Optional) Deduplicate within the time range of watermark. */
  withinWatermark?: boolean | undefined;
}

/** A relation that does not need to be qualified by name. */
export interface LocalRelation {
  /**
   * (Optional) Local collection data serialized into Arrow IPC streaming format which contains
   * the schema of the data.
   */
  data?:
    | Uint8Array
    | undefined;
  /**
   * (Optional) The schema of local data.
   * It should be either a DDL-formatted type string or a JSON string.
   *
   * The server side will update the column names and data types according to this schema.
   * If the 'data' is not provided, then this schema will be required.
   */
  schema?: string | undefined;
}

/** A local relation that has been cached already. */
export interface CachedLocalRelation {
  /** (Required) A sha-256 hash of the serialized local relation in proto, see LocalRelation. */
  hash: string;
}

/** Represents a remote relation that has been cached on server. */
export interface CachedRemoteRelation {
  /** (Required) ID of the remote related (assigned by the service). */
  relationId: string;
}

/** Relation of type [[Sample]] that samples a fraction of the dataset. */
export interface Sample {
  /** (Required) Input relation for a Sample. */
  input:
    | Relation
    | undefined;
  /** (Required) lower bound. */
  lowerBound: number;
  /** (Required) upper bound. */
  upperBound: number;
  /** (Optional) Whether to sample with replacement. */
  withReplacement?:
    | boolean
    | undefined;
  /** (Optional) The random seed. */
  seed?:
    | number
    | undefined;
  /**
   * (Required) Explicitly sort the underlying plan to make the ordering deterministic or cache it.
   * This flag is true when invoking `dataframe.randomSplit` to randomly splits DataFrame with the
   * provided weights. Otherwise, it is false.
   */
  deterministicOrder: boolean;
}

/** Relation of type [[Range]] that generates a sequence of integers. */
export interface Range {
  /** (Optional) Default value = 0 */
  start?:
    | number
    | undefined;
  /** (Required) */
  end: number;
  /** (Required) */
  step: number;
  /**
   * Optional. Default value is assigned by 1) SQL conf "spark.sql.leafNodeDefaultParallelism" if
   * it is set, or 2) spark default parallelism.
   */
  numPartitions?: number | undefined;
}

/** Relation alias. */
export interface SubqueryAlias {
  /** (Required) The input relation of SubqueryAlias. */
  input:
    | Relation
    | undefined;
  /** (Required) The alias. */
  alias: string;
  /** (Optional) Qualifier of the alias. */
  qualifier: string[];
}

/** Relation repartition. */
export interface Repartition {
  /** (Required) The input relation of Repartition. */
  input:
    | Relation
    | undefined;
  /** (Required) Must be positive. */
  numPartitions: number;
  /** (Optional) Default value is false. */
  shuffle?: boolean | undefined;
}

/**
 * Compose the string representing rows for output.
 * It will invoke 'Dataset.showString' to compute the results.
 */
export interface ShowString {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) Number of rows to show. */
  numRows: number;
  /**
   * (Required) If set to more than 0, truncates strings to
   * `truncate` characters and all cells will be aligned right.
   */
  truncate: number;
  /** (Required) If set to true, prints output rows vertically (one line per column value). */
  vertical: boolean;
}

/**
 * Compose the string representing rows for output.
 * It will invoke 'Dataset.htmlString' to compute the results.
 */
export interface HtmlString {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) Number of rows to show. */
  numRows: number;
  /**
   * (Required) If set to more than 0, truncates strings to
   * `truncate` characters and all cells will be aligned right.
   */
  truncate: number;
}

/**
 * Computes specified statistics for numeric and string columns.
 * It will invoke 'Dataset.summary' (same as 'StatFunctions.summary')
 * to compute the results.
 */
export interface StatSummary {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /**
   * (Optional) Statistics from to be computed.
   *
   * Available statistics are:
   *  count
   *  mean
   *  stddev
   *  min
   *  max
   *  arbitrary approximate percentiles specified as a percentage (e.g. 75%)
   *  count_distinct
   *  approx_count_distinct
   *
   * If no statistics are given, this function computes 'count', 'mean', 'stddev', 'min',
   * 'approximate quartiles' (percentiles at 25%, 50%, and 75%), and 'max'.
   */
  statistics: string[];
}

/**
 * Computes basic statistics for numeric and string columns, including count, mean, stddev, min,
 * and max. If no columns are given, this function computes statistics for all numerical or
 * string columns.
 */
export interface StatDescribe {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Optional) Columns to compute statistics on. */
  cols: string[];
}

/**
 * Computes a pair-wise frequency table of the given columns. Also known as a contingency table.
 * It will invoke 'Dataset.stat.crosstab' (same as 'StatFunctions.crossTabulate')
 * to compute the results.
 */
export interface StatCrosstab {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /**
   * (Required) The name of the first column.
   *
   * Distinct items will make the first item of each row.
   */
  col1: string;
  /**
   * (Required) The name of the second column.
   *
   * Distinct items will make the column names of the DataFrame.
   */
  col2: string;
}

/**
 * Calculate the sample covariance of two numerical columns of a DataFrame.
 * It will invoke 'Dataset.stat.cov' (same as 'StatFunctions.calculateCov') to compute the results.
 */
export interface StatCov {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) The name of the first column. */
  col1: string;
  /** (Required) The name of the second column. */
  col2: string;
}

/**
 * Calculates the correlation of two columns of a DataFrame. Currently only supports the Pearson
 * Correlation Coefficient. It will invoke 'Dataset.stat.corr' (same as
 * 'StatFunctions.pearsonCorrelation') to compute the results.
 */
export interface StatCorr {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) The name of the first column. */
  col1: string;
  /** (Required) The name of the second column. */
  col2: string;
  /**
   * (Optional) Default value is 'pearson'.
   *
   * Currently only supports the Pearson Correlation Coefficient.
   */
  method?: string | undefined;
}

/**
 * Calculates the approximate quantiles of numerical columns of a DataFrame.
 * It will invoke 'Dataset.stat.approxQuantile' (same as 'StatFunctions.approxQuantile')
 * to compute the results.
 */
export interface StatApproxQuantile {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) The names of the numerical columns. */
  cols: string[];
  /**
   * (Required) A list of quantile probabilities.
   *
   * Each number must belong to [0, 1].
   * For example 0 is the minimum, 0.5 is the median, 1 is the maximum.
   */
  probabilities: number[];
  /**
   * (Required) The relative target precision to achieve (greater than or equal to 0).
   *
   * If set to zero, the exact quantiles are computed, which could be very expensive.
   * Note that values greater than 1 are accepted but give the same result as 1.
   */
  relativeError: number;
}

/**
 * Finding frequent items for columns, possibly with false positives.
 * It will invoke 'Dataset.stat.freqItems' (same as 'StatFunctions.freqItems')
 * to compute the results.
 */
export interface StatFreqItems {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) The names of the columns to search frequent items in. */
  cols: string[];
  /**
   * (Optional) The minimum frequency for an item to be considered `frequent`.
   * Should be greater than 1e-4.
   */
  support?: number | undefined;
}

/**
 * Returns a stratified sample without replacement based on the fraction
 * given on each stratum.
 * It will invoke 'Dataset.stat.freqItems' (same as 'StatFunctions.freqItems')
 * to compute the results.
 */
export interface StatSampleBy {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) The column that defines strata. */
  col:
    | Expression
    | undefined;
  /**
   * (Required) Sampling fraction for each stratum.
   *
   * If a stratum is not specified, we treat its fraction as zero.
   */
  fractions: StatSampleBy_Fraction[];
  /** (Optional) The random seed. */
  seed?: number | undefined;
}

export interface StatSampleBy_Fraction {
  /** (Required) The stratum. */
  stratum:
    | Expression_Literal
    | undefined;
  /** (Required) The fraction value. Must be in [0, 1]. */
  fraction: number;
}

/**
 * Replaces null values.
 * It will invoke 'Dataset.na.fill' (same as 'DataFrameNaFunctions.fill') to compute the results.
 * Following 3 parameter combinations are supported:
 *  1, 'values' only contains 1 item, 'cols' is empty:
 *    replaces null values in all type-compatible columns.
 *  2, 'values' only contains 1 item, 'cols' is not empty:
 *    replaces null values in specified columns.
 *  3, 'values' contains more than 1 items, then 'cols' is required to have the same length:
 *    replaces each specified column with corresponding value.
 */
export interface NAFill {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Optional) Optional list of column names to consider. */
  cols: string[];
  /**
   * (Required) Values to replace null values with.
   *
   * Should contain at least 1 item.
   * Only 4 data types are supported now: bool, long, double, string
   */
  values: Expression_Literal[];
}

/**
 * Drop rows containing null values.
 * It will invoke 'Dataset.na.drop' (same as 'DataFrameNaFunctions.drop') to compute the results.
 */
export interface NADrop {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /**
   * (Optional) Optional list of column names to consider.
   *
   * When it is empty, all the columns in the input relation will be considered.
   */
  cols: string[];
  /**
   * (Optional) The minimum number of non-null and non-NaN values required to keep.
   *
   * When not set, it is equivalent to the number of considered columns, which means
   * a row will be kept only if all columns are non-null.
   *
   * 'how' options ('all', 'any') can be easily converted to this field:
   *   - 'all' -> set 'min_non_nulls' 1;
   *   - 'any' -> keep 'min_non_nulls' unset;
   */
  minNonNulls?: number | undefined;
}

/**
 * Replaces old values with the corresponding values.
 * It will invoke 'Dataset.na.replace' (same as 'DataFrameNaFunctions.replace')
 * to compute the results.
 */
export interface NAReplace {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /**
   * (Optional) List of column names to consider.
   *
   * When it is empty, all the type-compatible columns in the input relation will be considered.
   */
  cols: string[];
  /** (Optional) The value replacement mapping. */
  replacements: NAReplace_Replacement[];
}

export interface NAReplace_Replacement {
  /**
   * (Required) The old value.
   *
   * Only 4 data types are supported now: null, bool, double, string.
   */
  oldValue:
    | Expression_Literal
    | undefined;
  /**
   * (Required) The new value.
   *
   * Should be of the same data type with the old value.
   */
  newValue: Expression_Literal | undefined;
}

/** Rename columns on the input relation by the same length of names. */
export interface ToDF {
  /** (Required) The input relation of RenameColumnsBySameLengthNames. */
  input:
    | Relation
    | undefined;
  /**
   * (Required)
   *
   * The number of columns of the input relation must be equal to the length
   * of this field. If this is not true, an exception will be returned.
   */
  columnNames: string[];
}

/** Rename columns on the input relation by a map with name to name mapping. */
export interface WithColumnsRenamed {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /**
   * (Required)
   *
   * Renaming column names of input relation from A to B where A is the map key
   * and B is the map value. This is a no-op if schema doesn't contain any A. It
   * does not require that all input relation column names to present as keys.
   * duplicated B are not allowed.
   */
  renameColumnsMap: { [key: string]: string };
}

export interface WithColumnsRenamed_RenameColumnsMapEntry {
  key: string;
  value: string;
}

/** Adding columns or replacing the existing columns that have the same names. */
export interface WithColumns {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /**
   * (Required)
   *
   * Given a column name, apply the corresponding expression on the column. If column
   * name exists in the input relation, then replace the column. If the column name
   * does not exist in the input relation, then adds it as a new column.
   *
   * Only one name part is expected from each Expression.Alias.
   *
   * An exception is thrown when duplicated names are present in the mapping.
   */
  aliases: Expression_Alias[];
}

export interface WithWatermark {
  /** (Required) The input relation */
  input:
    | Relation
    | undefined;
  /** (Required) Name of the column containing event time. */
  eventTime: string;
  /** (Required) */
  delayThreshold: string;
}

/** Specify a hint over a relation. Hint should have a name and optional parameters. */
export interface Hint {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /**
   * (Required) Hint name.
   *
   * Supported Join hints include BROADCAST, MERGE, SHUFFLE_HASH, SHUFFLE_REPLICATE_NL.
   *
   * Supported partitioning hints include COALESCE, REPARTITION, REPARTITION_BY_RANGE.
   */
  name: string;
  /** (Optional) Hint parameters. */
  parameters: Expression[];
}

/** Unpivot a DataFrame from wide format to long format, optionally leaving identifier columns set. */
export interface Unpivot {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) Id columns. */
  ids: Expression[];
  /** (Optional) Value columns to unpivot. */
  values?:
    | Unpivot_Values
    | undefined;
  /** (Required) Name of the variable column. */
  variableColumnName: string;
  /** (Required) Name of the value column. */
  valueColumnName: string;
}

export interface Unpivot_Values {
  values: Expression[];
}

export interface ToSchema {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /**
   * (Required) The user provided schema.
   *
   * The Sever side will update the dataframe with this schema.
   */
  schema: DataType | undefined;
}

export interface RepartitionByExpression {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) The partitioning expressions. */
  partitionExprs: Expression[];
  /** (Optional) number of partitions, must be positive. */
  numPartitions?: number | undefined;
}

export interface MapPartitions {
  /** (Required) Input relation for a mapPartitions-equivalent API: mapInPandas, mapInArrow. */
  input:
    | Relation
    | undefined;
  /** (Required) Input user-defined function. */
  func:
    | CommonInlineUserDefinedFunction
    | undefined;
  /** (Optional) Whether to use barrier mode execution or not. */
  isBarrier?: boolean | undefined;
}

export interface GroupMap {
  /** (Required) Input relation for Group Map API: apply, applyInPandas. */
  input:
    | Relation
    | undefined;
  /** (Required) Expressions for grouping keys. */
  groupingExpressions: Expression[];
  /** (Required) Input user-defined function. */
  func:
    | CommonInlineUserDefinedFunction
    | undefined;
  /** (Optional) Expressions for sorting. Only used by Scala Sorted Group Map API. */
  sortingExpressions: Expression[];
  /**
   * Below fields are only used by (Flat)MapGroupsWithState
   * (Optional) Input relation for initial State.
   */
  initialInput:
    | Relation
    | undefined;
  /** (Optional) Expressions for grouping keys of the initial state input relation. */
  initialGroupingExpressions: Expression[];
  /** (Optional) True if MapGroupsWithState, false if FlatMapGroupsWithState. */
  isMapGroupsWithState?:
    | boolean
    | undefined;
  /** (Optional) The output mode of the function. */
  outputMode?:
    | string
    | undefined;
  /** (Optional) Timeout configuration for groups that do not receive data for a while. */
  timeoutConf?: string | undefined;
}

export interface CoGroupMap {
  /** (Required) One input relation for CoGroup Map API - applyInPandas. */
  input:
    | Relation
    | undefined;
  /** Expressions for grouping keys of the first input relation. */
  inputGroupingExpressions: Expression[];
  /** (Required) The other input relation. */
  other:
    | Relation
    | undefined;
  /** Expressions for grouping keys of the other input relation. */
  otherGroupingExpressions: Expression[];
  /** (Required) Input user-defined function. */
  func:
    | CommonInlineUserDefinedFunction
    | undefined;
  /** (Optional) Expressions for sorting. Only used by Scala Sorted CoGroup Map API. */
  inputSortingExpressions: Expression[];
  /** (Optional) Expressions for sorting. Only used by Scala Sorted CoGroup Map API. */
  otherSortingExpressions: Expression[];
}

export interface ApplyInPandasWithState {
  /** (Required) Input relation for applyInPandasWithState. */
  input:
    | Relation
    | undefined;
  /** (Required) Expressions for grouping keys. */
  groupingExpressions: Expression[];
  /** (Required) Input user-defined function. */
  func:
    | CommonInlineUserDefinedFunction
    | undefined;
  /** (Required) Schema for the output DataFrame. */
  outputSchema: string;
  /** (Required) Schema for the state. */
  stateSchema: string;
  /** (Required) The output mode of the function. */
  outputMode: string;
  /** (Required) Timeout configuration for groups that do not receive data for a while. */
  timeoutConf: string;
}

export interface CommonInlineUserDefinedTableFunction {
  /** (Required) Name of the user-defined table function. */
  functionName: string;
  /** (Optional) Whether the user-defined table function is deterministic. */
  deterministic: boolean;
  /** (Optional) Function input arguments. Empty arguments are allowed. */
  arguments: Expression[];
  pythonUdtf?: PythonUDTF | undefined;
}

export interface PythonUDTF {
  /** (Optional) Return type of the Python UDTF. */
  returnType?:
    | DataType
    | undefined;
  /** (Required) EvalType of the Python UDTF. */
  evalType: number;
  /** (Required) The encoded commands of the Python UDTF. */
  command: Uint8Array;
  /** (Required) Python version being used in the client. */
  pythonVer: string;
}

/** Collect arbitrary (named) metrics from a dataset. */
export interface CollectMetrics {
  /** (Required) The input relation. */
  input:
    | Relation
    | undefined;
  /** (Required) Name of the metrics. */
  name: string;
  /** (Required) The metric sequence. */
  metrics: Expression[];
}

export interface Parse {
  /** (Required) Input relation to Parse. The input is expected to have single text column. */
  input:
    | Relation
    | undefined;
  /** (Required) The expected format of the text. */
  format: Parse_ParseFormat;
  /** (Optional) DataType representing the schema. If not set, Spark will infer the schema. */
  schema?:
    | DataType
    | undefined;
  /** Options for the csv/json parser. The map key is case insensitive. */
  options: { [key: string]: string };
}

export enum Parse_ParseFormat {
  PARSE_FORMAT_UNSPECIFIED = 0,
  PARSE_FORMAT_CSV = 1,
  PARSE_FORMAT_JSON = 2,
  UNRECOGNIZED = -1,
}

export function parse_ParseFormatFromJSON(object: any): Parse_ParseFormat {
  switch (object) {
    case 0:
    case "PARSE_FORMAT_UNSPECIFIED":
      return Parse_ParseFormat.PARSE_FORMAT_UNSPECIFIED;
    case 1:
    case "PARSE_FORMAT_CSV":
      return Parse_ParseFormat.PARSE_FORMAT_CSV;
    case 2:
    case "PARSE_FORMAT_JSON":
      return Parse_ParseFormat.PARSE_FORMAT_JSON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Parse_ParseFormat.UNRECOGNIZED;
  }
}

export function parse_ParseFormatToJSON(object: Parse_ParseFormat): string {
  switch (object) {
    case Parse_ParseFormat.PARSE_FORMAT_UNSPECIFIED:
      return "PARSE_FORMAT_UNSPECIFIED";
    case Parse_ParseFormat.PARSE_FORMAT_CSV:
      return "PARSE_FORMAT_CSV";
    case Parse_ParseFormat.PARSE_FORMAT_JSON:
      return "PARSE_FORMAT_JSON";
    case Parse_ParseFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Parse_OptionsEntry {
  key: string;
  value: string;
}

function createBaseRelation(): Relation {
  return {
    common: undefined,
    read: undefined,
    project: undefined,
    filter: undefined,
    join: undefined,
    setOp: undefined,
    sort: undefined,
    limit: undefined,
    aggregate: undefined,
    sql: undefined,
    localRelation: undefined,
    sample: undefined,
    offset: undefined,
    deduplicate: undefined,
    range: undefined,
    subqueryAlias: undefined,
    repartition: undefined,
    toDf: undefined,
    withColumnsRenamed: undefined,
    showString: undefined,
    drop: undefined,
    tail: undefined,
    withColumns: undefined,
    hint: undefined,
    unpivot: undefined,
    toSchema: undefined,
    repartitionByExpression: undefined,
    mapPartitions: undefined,
    collectMetrics: undefined,
    parse: undefined,
    groupMap: undefined,
    coGroupMap: undefined,
    withWatermark: undefined,
    applyInPandasWithState: undefined,
    htmlString: undefined,
    cachedLocalRelation: undefined,
    cachedRemoteRelation: undefined,
    commonInlineUserDefinedTableFunction: undefined,
    fillNa: undefined,
    dropNa: undefined,
    replace: undefined,
    summary: undefined,
    crosstab: undefined,
    describe: undefined,
    cov: undefined,
    corr: undefined,
    approxQuantile: undefined,
    freqItems: undefined,
    sampleBy: undefined,
    catalog: undefined,
    extension: undefined,
    unknown: undefined,
  };
}

export const Relation = {
  encode(message: Relation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      RelationCommon.encode(message.common, writer.uint32(10).fork()).ldelim();
    }
    if (message.read !== undefined) {
      Read.encode(message.read, writer.uint32(18).fork()).ldelim();
    }
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(26).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      Filter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    if (message.join !== undefined) {
      Join.encode(message.join, writer.uint32(42).fork()).ldelim();
    }
    if (message.setOp !== undefined) {
      SetOperation.encode(message.setOp, writer.uint32(50).fork()).ldelim();
    }
    if (message.sort !== undefined) {
      Sort.encode(message.sort, writer.uint32(58).fork()).ldelim();
    }
    if (message.limit !== undefined) {
      Limit.encode(message.limit, writer.uint32(66).fork()).ldelim();
    }
    if (message.aggregate !== undefined) {
      Aggregate.encode(message.aggregate, writer.uint32(74).fork()).ldelim();
    }
    if (message.sql !== undefined) {
      SQL.encode(message.sql, writer.uint32(82).fork()).ldelim();
    }
    if (message.localRelation !== undefined) {
      LocalRelation.encode(message.localRelation, writer.uint32(90).fork()).ldelim();
    }
    if (message.sample !== undefined) {
      Sample.encode(message.sample, writer.uint32(98).fork()).ldelim();
    }
    if (message.offset !== undefined) {
      Offset.encode(message.offset, writer.uint32(106).fork()).ldelim();
    }
    if (message.deduplicate !== undefined) {
      Deduplicate.encode(message.deduplicate, writer.uint32(114).fork()).ldelim();
    }
    if (message.range !== undefined) {
      Range.encode(message.range, writer.uint32(122).fork()).ldelim();
    }
    if (message.subqueryAlias !== undefined) {
      SubqueryAlias.encode(message.subqueryAlias, writer.uint32(130).fork()).ldelim();
    }
    if (message.repartition !== undefined) {
      Repartition.encode(message.repartition, writer.uint32(138).fork()).ldelim();
    }
    if (message.toDf !== undefined) {
      ToDF.encode(message.toDf, writer.uint32(146).fork()).ldelim();
    }
    if (message.withColumnsRenamed !== undefined) {
      WithColumnsRenamed.encode(message.withColumnsRenamed, writer.uint32(154).fork()).ldelim();
    }
    if (message.showString !== undefined) {
      ShowString.encode(message.showString, writer.uint32(162).fork()).ldelim();
    }
    if (message.drop !== undefined) {
      Drop.encode(message.drop, writer.uint32(170).fork()).ldelim();
    }
    if (message.tail !== undefined) {
      Tail.encode(message.tail, writer.uint32(178).fork()).ldelim();
    }
    if (message.withColumns !== undefined) {
      WithColumns.encode(message.withColumns, writer.uint32(186).fork()).ldelim();
    }
    if (message.hint !== undefined) {
      Hint.encode(message.hint, writer.uint32(194).fork()).ldelim();
    }
    if (message.unpivot !== undefined) {
      Unpivot.encode(message.unpivot, writer.uint32(202).fork()).ldelim();
    }
    if (message.toSchema !== undefined) {
      ToSchema.encode(message.toSchema, writer.uint32(210).fork()).ldelim();
    }
    if (message.repartitionByExpression !== undefined) {
      RepartitionByExpression.encode(message.repartitionByExpression, writer.uint32(218).fork()).ldelim();
    }
    if (message.mapPartitions !== undefined) {
      MapPartitions.encode(message.mapPartitions, writer.uint32(226).fork()).ldelim();
    }
    if (message.collectMetrics !== undefined) {
      CollectMetrics.encode(message.collectMetrics, writer.uint32(234).fork()).ldelim();
    }
    if (message.parse !== undefined) {
      Parse.encode(message.parse, writer.uint32(242).fork()).ldelim();
    }
    if (message.groupMap !== undefined) {
      GroupMap.encode(message.groupMap, writer.uint32(250).fork()).ldelim();
    }
    if (message.coGroupMap !== undefined) {
      CoGroupMap.encode(message.coGroupMap, writer.uint32(258).fork()).ldelim();
    }
    if (message.withWatermark !== undefined) {
      WithWatermark.encode(message.withWatermark, writer.uint32(266).fork()).ldelim();
    }
    if (message.applyInPandasWithState !== undefined) {
      ApplyInPandasWithState.encode(message.applyInPandasWithState, writer.uint32(274).fork()).ldelim();
    }
    if (message.htmlString !== undefined) {
      HtmlString.encode(message.htmlString, writer.uint32(282).fork()).ldelim();
    }
    if (message.cachedLocalRelation !== undefined) {
      CachedLocalRelation.encode(message.cachedLocalRelation, writer.uint32(290).fork()).ldelim();
    }
    if (message.cachedRemoteRelation !== undefined) {
      CachedRemoteRelation.encode(message.cachedRemoteRelation, writer.uint32(298).fork()).ldelim();
    }
    if (message.commonInlineUserDefinedTableFunction !== undefined) {
      CommonInlineUserDefinedTableFunction.encode(
        message.commonInlineUserDefinedTableFunction,
        writer.uint32(306).fork(),
      ).ldelim();
    }
    if (message.fillNa !== undefined) {
      NAFill.encode(message.fillNa, writer.uint32(722).fork()).ldelim();
    }
    if (message.dropNa !== undefined) {
      NADrop.encode(message.dropNa, writer.uint32(730).fork()).ldelim();
    }
    if (message.replace !== undefined) {
      NAReplace.encode(message.replace, writer.uint32(738).fork()).ldelim();
    }
    if (message.summary !== undefined) {
      StatSummary.encode(message.summary, writer.uint32(802).fork()).ldelim();
    }
    if (message.crosstab !== undefined) {
      StatCrosstab.encode(message.crosstab, writer.uint32(810).fork()).ldelim();
    }
    if (message.describe !== undefined) {
      StatDescribe.encode(message.describe, writer.uint32(818).fork()).ldelim();
    }
    if (message.cov !== undefined) {
      StatCov.encode(message.cov, writer.uint32(826).fork()).ldelim();
    }
    if (message.corr !== undefined) {
      StatCorr.encode(message.corr, writer.uint32(834).fork()).ldelim();
    }
    if (message.approxQuantile !== undefined) {
      StatApproxQuantile.encode(message.approxQuantile, writer.uint32(842).fork()).ldelim();
    }
    if (message.freqItems !== undefined) {
      StatFreqItems.encode(message.freqItems, writer.uint32(850).fork()).ldelim();
    }
    if (message.sampleBy !== undefined) {
      StatSampleBy.encode(message.sampleBy, writer.uint32(858).fork()).ldelim();
    }
    if (message.catalog !== undefined) {
      Catalog.encode(message.catalog, writer.uint32(1602).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      Any.encode(message.extension, writer.uint32(7986).fork()).ldelim();
    }
    if (message.unknown !== undefined) {
      Unknown.encode(message.unknown, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Relation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = RelationCommon.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.read = Read.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.project = Project.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = Filter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.join = Join.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setOp = SetOperation.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sort = Sort.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.limit = Limit.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.aggregate = Aggregate.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sql = SQL.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.localRelation = LocalRelation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.sample = Sample.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.offset = Offset.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.deduplicate = Deduplicate.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.range = Range.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.subqueryAlias = SubqueryAlias.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.repartition = Repartition.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.toDf = ToDF.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.withColumnsRenamed = WithColumnsRenamed.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.showString = ShowString.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.drop = Drop.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.tail = Tail.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.withColumns = WithColumns.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.hint = Hint.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.unpivot = Unpivot.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.toSchema = ToSchema.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.repartitionByExpression = RepartitionByExpression.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.mapPartitions = MapPartitions.decode(reader, reader.uint32());
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.collectMetrics = CollectMetrics.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.parse = Parse.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.groupMap = GroupMap.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.coGroupMap = CoGroupMap.decode(reader, reader.uint32());
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.withWatermark = WithWatermark.decode(reader, reader.uint32());
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.applyInPandasWithState = ApplyInPandasWithState.decode(reader, reader.uint32());
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.htmlString = HtmlString.decode(reader, reader.uint32());
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.cachedLocalRelation = CachedLocalRelation.decode(reader, reader.uint32());
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.cachedRemoteRelation = CachedRemoteRelation.decode(reader, reader.uint32());
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.commonInlineUserDefinedTableFunction = CommonInlineUserDefinedTableFunction.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 90:
          if (tag !== 722) {
            break;
          }

          message.fillNa = NAFill.decode(reader, reader.uint32());
          continue;
        case 91:
          if (tag !== 730) {
            break;
          }

          message.dropNa = NADrop.decode(reader, reader.uint32());
          continue;
        case 92:
          if (tag !== 738) {
            break;
          }

          message.replace = NAReplace.decode(reader, reader.uint32());
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.summary = StatSummary.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.crosstab = StatCrosstab.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.describe = StatDescribe.decode(reader, reader.uint32());
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.cov = StatCov.decode(reader, reader.uint32());
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.corr = StatCorr.decode(reader, reader.uint32());
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.approxQuantile = StatApproxQuantile.decode(reader, reader.uint32());
          continue;
        case 106:
          if (tag !== 850) {
            break;
          }

          message.freqItems = StatFreqItems.decode(reader, reader.uint32());
          continue;
        case 107:
          if (tag !== 858) {
            break;
          }

          message.sampleBy = StatSampleBy.decode(reader, reader.uint32());
          continue;
        case 200:
          if (tag !== 1602) {
            break;
          }

          message.catalog = Catalog.decode(reader, reader.uint32());
          continue;
        case 998:
          if (tag !== 7986) {
            break;
          }

          message.extension = Any.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.unknown = Unknown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Relation {
    return {
      common: isSet(object.common) ? RelationCommon.fromJSON(object.common) : undefined,
      read: isSet(object.read) ? Read.fromJSON(object.read) : undefined,
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined,
      filter: isSet(object.filter) ? Filter.fromJSON(object.filter) : undefined,
      join: isSet(object.join) ? Join.fromJSON(object.join) : undefined,
      setOp: isSet(object.setOp) ? SetOperation.fromJSON(object.setOp) : undefined,
      sort: isSet(object.sort) ? Sort.fromJSON(object.sort) : undefined,
      limit: isSet(object.limit) ? Limit.fromJSON(object.limit) : undefined,
      aggregate: isSet(object.aggregate) ? Aggregate.fromJSON(object.aggregate) : undefined,
      sql: isSet(object.sql) ? SQL.fromJSON(object.sql) : undefined,
      localRelation: isSet(object.localRelation) ? LocalRelation.fromJSON(object.localRelation) : undefined,
      sample: isSet(object.sample) ? Sample.fromJSON(object.sample) : undefined,
      offset: isSet(object.offset) ? Offset.fromJSON(object.offset) : undefined,
      deduplicate: isSet(object.deduplicate) ? Deduplicate.fromJSON(object.deduplicate) : undefined,
      range: isSet(object.range) ? Range.fromJSON(object.range) : undefined,
      subqueryAlias: isSet(object.subqueryAlias) ? SubqueryAlias.fromJSON(object.subqueryAlias) : undefined,
      repartition: isSet(object.repartition) ? Repartition.fromJSON(object.repartition) : undefined,
      toDf: isSet(object.toDf) ? ToDF.fromJSON(object.toDf) : undefined,
      withColumnsRenamed: isSet(object.withColumnsRenamed)
        ? WithColumnsRenamed.fromJSON(object.withColumnsRenamed)
        : undefined,
      showString: isSet(object.showString) ? ShowString.fromJSON(object.showString) : undefined,
      drop: isSet(object.drop) ? Drop.fromJSON(object.drop) : undefined,
      tail: isSet(object.tail) ? Tail.fromJSON(object.tail) : undefined,
      withColumns: isSet(object.withColumns) ? WithColumns.fromJSON(object.withColumns) : undefined,
      hint: isSet(object.hint) ? Hint.fromJSON(object.hint) : undefined,
      unpivot: isSet(object.unpivot) ? Unpivot.fromJSON(object.unpivot) : undefined,
      toSchema: isSet(object.toSchema) ? ToSchema.fromJSON(object.toSchema) : undefined,
      repartitionByExpression: isSet(object.repartitionByExpression)
        ? RepartitionByExpression.fromJSON(object.repartitionByExpression)
        : undefined,
      mapPartitions: isSet(object.mapPartitions) ? MapPartitions.fromJSON(object.mapPartitions) : undefined,
      collectMetrics: isSet(object.collectMetrics) ? CollectMetrics.fromJSON(object.collectMetrics) : undefined,
      parse: isSet(object.parse) ? Parse.fromJSON(object.parse) : undefined,
      groupMap: isSet(object.groupMap) ? GroupMap.fromJSON(object.groupMap) : undefined,
      coGroupMap: isSet(object.coGroupMap) ? CoGroupMap.fromJSON(object.coGroupMap) : undefined,
      withWatermark: isSet(object.withWatermark) ? WithWatermark.fromJSON(object.withWatermark) : undefined,
      applyInPandasWithState: isSet(object.applyInPandasWithState)
        ? ApplyInPandasWithState.fromJSON(object.applyInPandasWithState)
        : undefined,
      htmlString: isSet(object.htmlString) ? HtmlString.fromJSON(object.htmlString) : undefined,
      cachedLocalRelation: isSet(object.cachedLocalRelation)
        ? CachedLocalRelation.fromJSON(object.cachedLocalRelation)
        : undefined,
      cachedRemoteRelation: isSet(object.cachedRemoteRelation)
        ? CachedRemoteRelation.fromJSON(object.cachedRemoteRelation)
        : undefined,
      commonInlineUserDefinedTableFunction: isSet(object.commonInlineUserDefinedTableFunction)
        ? CommonInlineUserDefinedTableFunction.fromJSON(object.commonInlineUserDefinedTableFunction)
        : undefined,
      fillNa: isSet(object.fillNa) ? NAFill.fromJSON(object.fillNa) : undefined,
      dropNa: isSet(object.dropNa) ? NADrop.fromJSON(object.dropNa) : undefined,
      replace: isSet(object.replace) ? NAReplace.fromJSON(object.replace) : undefined,
      summary: isSet(object.summary) ? StatSummary.fromJSON(object.summary) : undefined,
      crosstab: isSet(object.crosstab) ? StatCrosstab.fromJSON(object.crosstab) : undefined,
      describe: isSet(object.describe) ? StatDescribe.fromJSON(object.describe) : undefined,
      cov: isSet(object.cov) ? StatCov.fromJSON(object.cov) : undefined,
      corr: isSet(object.corr) ? StatCorr.fromJSON(object.corr) : undefined,
      approxQuantile: isSet(object.approxQuantile) ? StatApproxQuantile.fromJSON(object.approxQuantile) : undefined,
      freqItems: isSet(object.freqItems) ? StatFreqItems.fromJSON(object.freqItems) : undefined,
      sampleBy: isSet(object.sampleBy) ? StatSampleBy.fromJSON(object.sampleBy) : undefined,
      catalog: isSet(object.catalog) ? Catalog.fromJSON(object.catalog) : undefined,
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined,
      unknown: isSet(object.unknown) ? Unknown.fromJSON(object.unknown) : undefined,
    };
  },

  toJSON(message: Relation): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = RelationCommon.toJSON(message.common);
    }
    if (message.read !== undefined) {
      obj.read = Read.toJSON(message.read);
    }
    if (message.project !== undefined) {
      obj.project = Project.toJSON(message.project);
    }
    if (message.filter !== undefined) {
      obj.filter = Filter.toJSON(message.filter);
    }
    if (message.join !== undefined) {
      obj.join = Join.toJSON(message.join);
    }
    if (message.setOp !== undefined) {
      obj.setOp = SetOperation.toJSON(message.setOp);
    }
    if (message.sort !== undefined) {
      obj.sort = Sort.toJSON(message.sort);
    }
    if (message.limit !== undefined) {
      obj.limit = Limit.toJSON(message.limit);
    }
    if (message.aggregate !== undefined) {
      obj.aggregate = Aggregate.toJSON(message.aggregate);
    }
    if (message.sql !== undefined) {
      obj.sql = SQL.toJSON(message.sql);
    }
    if (message.localRelation !== undefined) {
      obj.localRelation = LocalRelation.toJSON(message.localRelation);
    }
    if (message.sample !== undefined) {
      obj.sample = Sample.toJSON(message.sample);
    }
    if (message.offset !== undefined) {
      obj.offset = Offset.toJSON(message.offset);
    }
    if (message.deduplicate !== undefined) {
      obj.deduplicate = Deduplicate.toJSON(message.deduplicate);
    }
    if (message.range !== undefined) {
      obj.range = Range.toJSON(message.range);
    }
    if (message.subqueryAlias !== undefined) {
      obj.subqueryAlias = SubqueryAlias.toJSON(message.subqueryAlias);
    }
    if (message.repartition !== undefined) {
      obj.repartition = Repartition.toJSON(message.repartition);
    }
    if (message.toDf !== undefined) {
      obj.toDf = ToDF.toJSON(message.toDf);
    }
    if (message.withColumnsRenamed !== undefined) {
      obj.withColumnsRenamed = WithColumnsRenamed.toJSON(message.withColumnsRenamed);
    }
    if (message.showString !== undefined) {
      obj.showString = ShowString.toJSON(message.showString);
    }
    if (message.drop !== undefined) {
      obj.drop = Drop.toJSON(message.drop);
    }
    if (message.tail !== undefined) {
      obj.tail = Tail.toJSON(message.tail);
    }
    if (message.withColumns !== undefined) {
      obj.withColumns = WithColumns.toJSON(message.withColumns);
    }
    if (message.hint !== undefined) {
      obj.hint = Hint.toJSON(message.hint);
    }
    if (message.unpivot !== undefined) {
      obj.unpivot = Unpivot.toJSON(message.unpivot);
    }
    if (message.toSchema !== undefined) {
      obj.toSchema = ToSchema.toJSON(message.toSchema);
    }
    if (message.repartitionByExpression !== undefined) {
      obj.repartitionByExpression = RepartitionByExpression.toJSON(message.repartitionByExpression);
    }
    if (message.mapPartitions !== undefined) {
      obj.mapPartitions = MapPartitions.toJSON(message.mapPartitions);
    }
    if (message.collectMetrics !== undefined) {
      obj.collectMetrics = CollectMetrics.toJSON(message.collectMetrics);
    }
    if (message.parse !== undefined) {
      obj.parse = Parse.toJSON(message.parse);
    }
    if (message.groupMap !== undefined) {
      obj.groupMap = GroupMap.toJSON(message.groupMap);
    }
    if (message.coGroupMap !== undefined) {
      obj.coGroupMap = CoGroupMap.toJSON(message.coGroupMap);
    }
    if (message.withWatermark !== undefined) {
      obj.withWatermark = WithWatermark.toJSON(message.withWatermark);
    }
    if (message.applyInPandasWithState !== undefined) {
      obj.applyInPandasWithState = ApplyInPandasWithState.toJSON(message.applyInPandasWithState);
    }
    if (message.htmlString !== undefined) {
      obj.htmlString = HtmlString.toJSON(message.htmlString);
    }
    if (message.cachedLocalRelation !== undefined) {
      obj.cachedLocalRelation = CachedLocalRelation.toJSON(message.cachedLocalRelation);
    }
    if (message.cachedRemoteRelation !== undefined) {
      obj.cachedRemoteRelation = CachedRemoteRelation.toJSON(message.cachedRemoteRelation);
    }
    if (message.commonInlineUserDefinedTableFunction !== undefined) {
      obj.commonInlineUserDefinedTableFunction = CommonInlineUserDefinedTableFunction.toJSON(
        message.commonInlineUserDefinedTableFunction,
      );
    }
    if (message.fillNa !== undefined) {
      obj.fillNa = NAFill.toJSON(message.fillNa);
    }
    if (message.dropNa !== undefined) {
      obj.dropNa = NADrop.toJSON(message.dropNa);
    }
    if (message.replace !== undefined) {
      obj.replace = NAReplace.toJSON(message.replace);
    }
    if (message.summary !== undefined) {
      obj.summary = StatSummary.toJSON(message.summary);
    }
    if (message.crosstab !== undefined) {
      obj.crosstab = StatCrosstab.toJSON(message.crosstab);
    }
    if (message.describe !== undefined) {
      obj.describe = StatDescribe.toJSON(message.describe);
    }
    if (message.cov !== undefined) {
      obj.cov = StatCov.toJSON(message.cov);
    }
    if (message.corr !== undefined) {
      obj.corr = StatCorr.toJSON(message.corr);
    }
    if (message.approxQuantile !== undefined) {
      obj.approxQuantile = StatApproxQuantile.toJSON(message.approxQuantile);
    }
    if (message.freqItems !== undefined) {
      obj.freqItems = StatFreqItems.toJSON(message.freqItems);
    }
    if (message.sampleBy !== undefined) {
      obj.sampleBy = StatSampleBy.toJSON(message.sampleBy);
    }
    if (message.catalog !== undefined) {
      obj.catalog = Catalog.toJSON(message.catalog);
    }
    if (message.extension !== undefined) {
      obj.extension = Any.toJSON(message.extension);
    }
    if (message.unknown !== undefined) {
      obj.unknown = Unknown.toJSON(message.unknown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Relation>, I>>(base?: I): Relation {
    return Relation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Relation>, I>>(object: I): Relation {
    const message = createBaseRelation();
    message.common = (object.common !== undefined && object.common !== null)
      ? RelationCommon.fromPartial(object.common)
      : undefined;
    message.read = (object.read !== undefined && object.read !== null) ? Read.fromPartial(object.read) : undefined;
    message.project = (object.project !== undefined && object.project !== null)
      ? Project.fromPartial(object.project)
      : undefined;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? Filter.fromPartial(object.filter)
      : undefined;
    message.join = (object.join !== undefined && object.join !== null) ? Join.fromPartial(object.join) : undefined;
    message.setOp = (object.setOp !== undefined && object.setOp !== null)
      ? SetOperation.fromPartial(object.setOp)
      : undefined;
    message.sort = (object.sort !== undefined && object.sort !== null) ? Sort.fromPartial(object.sort) : undefined;
    message.limit = (object.limit !== undefined && object.limit !== null) ? Limit.fromPartial(object.limit) : undefined;
    message.aggregate = (object.aggregate !== undefined && object.aggregate !== null)
      ? Aggregate.fromPartial(object.aggregate)
      : undefined;
    message.sql = (object.sql !== undefined && object.sql !== null) ? SQL.fromPartial(object.sql) : undefined;
    message.localRelation = (object.localRelation !== undefined && object.localRelation !== null)
      ? LocalRelation.fromPartial(object.localRelation)
      : undefined;
    message.sample = (object.sample !== undefined && object.sample !== null)
      ? Sample.fromPartial(object.sample)
      : undefined;
    message.offset = (object.offset !== undefined && object.offset !== null)
      ? Offset.fromPartial(object.offset)
      : undefined;
    message.deduplicate = (object.deduplicate !== undefined && object.deduplicate !== null)
      ? Deduplicate.fromPartial(object.deduplicate)
      : undefined;
    message.range = (object.range !== undefined && object.range !== null) ? Range.fromPartial(object.range) : undefined;
    message.subqueryAlias = (object.subqueryAlias !== undefined && object.subqueryAlias !== null)
      ? SubqueryAlias.fromPartial(object.subqueryAlias)
      : undefined;
    message.repartition = (object.repartition !== undefined && object.repartition !== null)
      ? Repartition.fromPartial(object.repartition)
      : undefined;
    message.toDf = (object.toDf !== undefined && object.toDf !== null) ? ToDF.fromPartial(object.toDf) : undefined;
    message.withColumnsRenamed = (object.withColumnsRenamed !== undefined && object.withColumnsRenamed !== null)
      ? WithColumnsRenamed.fromPartial(object.withColumnsRenamed)
      : undefined;
    message.showString = (object.showString !== undefined && object.showString !== null)
      ? ShowString.fromPartial(object.showString)
      : undefined;
    message.drop = (object.drop !== undefined && object.drop !== null) ? Drop.fromPartial(object.drop) : undefined;
    message.tail = (object.tail !== undefined && object.tail !== null) ? Tail.fromPartial(object.tail) : undefined;
    message.withColumns = (object.withColumns !== undefined && object.withColumns !== null)
      ? WithColumns.fromPartial(object.withColumns)
      : undefined;
    message.hint = (object.hint !== undefined && object.hint !== null) ? Hint.fromPartial(object.hint) : undefined;
    message.unpivot = (object.unpivot !== undefined && object.unpivot !== null)
      ? Unpivot.fromPartial(object.unpivot)
      : undefined;
    message.toSchema = (object.toSchema !== undefined && object.toSchema !== null)
      ? ToSchema.fromPartial(object.toSchema)
      : undefined;
    message.repartitionByExpression =
      (object.repartitionByExpression !== undefined && object.repartitionByExpression !== null)
        ? RepartitionByExpression.fromPartial(object.repartitionByExpression)
        : undefined;
    message.mapPartitions = (object.mapPartitions !== undefined && object.mapPartitions !== null)
      ? MapPartitions.fromPartial(object.mapPartitions)
      : undefined;
    message.collectMetrics = (object.collectMetrics !== undefined && object.collectMetrics !== null)
      ? CollectMetrics.fromPartial(object.collectMetrics)
      : undefined;
    message.parse = (object.parse !== undefined && object.parse !== null) ? Parse.fromPartial(object.parse) : undefined;
    message.groupMap = (object.groupMap !== undefined && object.groupMap !== null)
      ? GroupMap.fromPartial(object.groupMap)
      : undefined;
    message.coGroupMap = (object.coGroupMap !== undefined && object.coGroupMap !== null)
      ? CoGroupMap.fromPartial(object.coGroupMap)
      : undefined;
    message.withWatermark = (object.withWatermark !== undefined && object.withWatermark !== null)
      ? WithWatermark.fromPartial(object.withWatermark)
      : undefined;
    message.applyInPandasWithState =
      (object.applyInPandasWithState !== undefined && object.applyInPandasWithState !== null)
        ? ApplyInPandasWithState.fromPartial(object.applyInPandasWithState)
        : undefined;
    message.htmlString = (object.htmlString !== undefined && object.htmlString !== null)
      ? HtmlString.fromPartial(object.htmlString)
      : undefined;
    message.cachedLocalRelation = (object.cachedLocalRelation !== undefined && object.cachedLocalRelation !== null)
      ? CachedLocalRelation.fromPartial(object.cachedLocalRelation)
      : undefined;
    message.cachedRemoteRelation = (object.cachedRemoteRelation !== undefined && object.cachedRemoteRelation !== null)
      ? CachedRemoteRelation.fromPartial(object.cachedRemoteRelation)
      : undefined;
    message.commonInlineUserDefinedTableFunction =
      (object.commonInlineUserDefinedTableFunction !== undefined &&
          object.commonInlineUserDefinedTableFunction !== null)
        ? CommonInlineUserDefinedTableFunction.fromPartial(object.commonInlineUserDefinedTableFunction)
        : undefined;
    message.fillNa = (object.fillNa !== undefined && object.fillNa !== null)
      ? NAFill.fromPartial(object.fillNa)
      : undefined;
    message.dropNa = (object.dropNa !== undefined && object.dropNa !== null)
      ? NADrop.fromPartial(object.dropNa)
      : undefined;
    message.replace = (object.replace !== undefined && object.replace !== null)
      ? NAReplace.fromPartial(object.replace)
      : undefined;
    message.summary = (object.summary !== undefined && object.summary !== null)
      ? StatSummary.fromPartial(object.summary)
      : undefined;
    message.crosstab = (object.crosstab !== undefined && object.crosstab !== null)
      ? StatCrosstab.fromPartial(object.crosstab)
      : undefined;
    message.describe = (object.describe !== undefined && object.describe !== null)
      ? StatDescribe.fromPartial(object.describe)
      : undefined;
    message.cov = (object.cov !== undefined && object.cov !== null) ? StatCov.fromPartial(object.cov) : undefined;
    message.corr = (object.corr !== undefined && object.corr !== null) ? StatCorr.fromPartial(object.corr) : undefined;
    message.approxQuantile = (object.approxQuantile !== undefined && object.approxQuantile !== null)
      ? StatApproxQuantile.fromPartial(object.approxQuantile)
      : undefined;
    message.freqItems = (object.freqItems !== undefined && object.freqItems !== null)
      ? StatFreqItems.fromPartial(object.freqItems)
      : undefined;
    message.sampleBy = (object.sampleBy !== undefined && object.sampleBy !== null)
      ? StatSampleBy.fromPartial(object.sampleBy)
      : undefined;
    message.catalog = (object.catalog !== undefined && object.catalog !== null)
      ? Catalog.fromPartial(object.catalog)
      : undefined;
    message.extension = (object.extension !== undefined && object.extension !== null)
      ? Any.fromPartial(object.extension)
      : undefined;
    message.unknown = (object.unknown !== undefined && object.unknown !== null)
      ? Unknown.fromPartial(object.unknown)
      : undefined;
    return message;
  },
};

function createBaseUnknown(): Unknown {
  return {};
}

export const Unknown = {
  encode(_: Unknown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unknown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Unknown {
    return {};
  },

  toJSON(_: Unknown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Unknown>, I>>(base?: I): Unknown {
    return Unknown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Unknown>, I>>(_: I): Unknown {
    const message = createBaseUnknown();
    return message;
  },
};

function createBaseRelationCommon(): RelationCommon {
  return { sourceInfo: "", planId: undefined };
}

export const RelationCommon = {
  encode(message: RelationCommon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceInfo !== "") {
      writer.uint32(10).string(message.sourceInfo);
    }
    if (message.planId !== undefined) {
      writer.uint32(16).int64(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationCommon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationCommon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceInfo = reader.string();
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

  fromJSON(object: any): RelationCommon {
    return {
      sourceInfo: isSet(object.sourceInfo) ? globalThis.String(object.sourceInfo) : "",
      planId: isSet(object.planId) ? globalThis.Number(object.planId) : undefined,
    };
  },

  toJSON(message: RelationCommon): unknown {
    const obj: any = {};
    if (message.sourceInfo !== "") {
      obj.sourceInfo = message.sourceInfo;
    }
    if (message.planId !== undefined) {
      obj.planId = Math.round(message.planId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RelationCommon>, I>>(base?: I): RelationCommon {
    return RelationCommon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RelationCommon>, I>>(object: I): RelationCommon {
    const message = createBaseRelationCommon();
    message.sourceInfo = object.sourceInfo ?? "";
    message.planId = object.planId ?? undefined;
    return message;
  },
};

function createBaseSQL(): SQL {
  return { query: "", args: {}, posArgs: [], namedArguments: {}, posArguments: [] };
}

export const SQL = {
  encode(message: SQL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    Object.entries(message.args).forEach(([key, value]) => {
      SQL_ArgsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    for (const v of message.posArgs) {
      Expression_Literal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.namedArguments).forEach(([key, value]) => {
      SQL_NamedArgumentsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.posArguments) {
      Expression.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = SQL_ArgsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.args[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.posArgs.push(Expression_Literal.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = SQL_NamedArgumentsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.namedArguments[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.posArguments.push(Expression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQL {
    return {
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      args: isObject(object.args)
        ? Object.entries(object.args).reduce<{ [key: string]: Expression_Literal }>((acc, [key, value]) => {
          acc[key] = Expression_Literal.fromJSON(value);
          return acc;
        }, {})
        : {},
      posArgs: globalThis.Array.isArray(object?.posArgs)
        ? object.posArgs.map((e: any) => Expression_Literal.fromJSON(e))
        : [],
      namedArguments: isObject(object.namedArguments)
        ? Object.entries(object.namedArguments).reduce<{ [key: string]: Expression }>((acc, [key, value]) => {
          acc[key] = Expression.fromJSON(value);
          return acc;
        }, {})
        : {},
      posArguments: globalThis.Array.isArray(object?.posArguments)
        ? object.posArguments.map((e: any) => Expression.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SQL): unknown {
    const obj: any = {};
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.args) {
      const entries = Object.entries(message.args);
      if (entries.length > 0) {
        obj.args = {};
        entries.forEach(([k, v]) => {
          obj.args[k] = Expression_Literal.toJSON(v);
        });
      }
    }
    if (message.posArgs?.length) {
      obj.posArgs = message.posArgs.map((e) => Expression_Literal.toJSON(e));
    }
    if (message.namedArguments) {
      const entries = Object.entries(message.namedArguments);
      if (entries.length > 0) {
        obj.namedArguments = {};
        entries.forEach(([k, v]) => {
          obj.namedArguments[k] = Expression.toJSON(v);
        });
      }
    }
    if (message.posArguments?.length) {
      obj.posArguments = message.posArguments.map((e) => Expression.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SQL>, I>>(base?: I): SQL {
    return SQL.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SQL>, I>>(object: I): SQL {
    const message = createBaseSQL();
    message.query = object.query ?? "";
    message.args = Object.entries(object.args ?? {}).reduce<{ [key: string]: Expression_Literal }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Expression_Literal.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.posArgs = object.posArgs?.map((e) => Expression_Literal.fromPartial(e)) || [];
    message.namedArguments = Object.entries(object.namedArguments ?? {}).reduce<{ [key: string]: Expression }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Expression.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.posArguments = object.posArguments?.map((e) => Expression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSQL_ArgsEntry(): SQL_ArgsEntry {
  return { key: "", value: undefined };
}

export const SQL_ArgsEntry = {
  encode(message: SQL_ArgsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Expression_Literal.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQL_ArgsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQL_ArgsEntry();
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

          message.value = Expression_Literal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQL_ArgsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Expression_Literal.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SQL_ArgsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Expression_Literal.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SQL_ArgsEntry>, I>>(base?: I): SQL_ArgsEntry {
    return SQL_ArgsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SQL_ArgsEntry>, I>>(object: I): SQL_ArgsEntry {
    const message = createBaseSQL_ArgsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Expression_Literal.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSQL_NamedArgumentsEntry(): SQL_NamedArgumentsEntry {
  return { key: "", value: undefined };
}

export const SQL_NamedArgumentsEntry = {
  encode(message: SQL_NamedArgumentsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Expression.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQL_NamedArgumentsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQL_NamedArgumentsEntry();
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

  fromJSON(object: any): SQL_NamedArgumentsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Expression.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SQL_NamedArgumentsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Expression.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SQL_NamedArgumentsEntry>, I>>(base?: I): SQL_NamedArgumentsEntry {
    return SQL_NamedArgumentsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SQL_NamedArgumentsEntry>, I>>(object: I): SQL_NamedArgumentsEntry {
    const message = createBaseSQL_NamedArgumentsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Expression.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseRead(): Read {
  return { namedTable: undefined, dataSource: undefined, isStreaming: false };
}

export const Read = {
  encode(message: Read, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namedTable !== undefined) {
      Read_NamedTable.encode(message.namedTable, writer.uint32(10).fork()).ldelim();
    }
    if (message.dataSource !== undefined) {
      Read_DataSource.encode(message.dataSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.isStreaming === true) {
      writer.uint32(24).bool(message.isStreaming);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Read {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRead();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.namedTable = Read_NamedTable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dataSource = Read_DataSource.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isStreaming = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Read {
    return {
      namedTable: isSet(object.namedTable) ? Read_NamedTable.fromJSON(object.namedTable) : undefined,
      dataSource: isSet(object.dataSource) ? Read_DataSource.fromJSON(object.dataSource) : undefined,
      isStreaming: isSet(object.isStreaming) ? globalThis.Boolean(object.isStreaming) : false,
    };
  },

  toJSON(message: Read): unknown {
    const obj: any = {};
    if (message.namedTable !== undefined) {
      obj.namedTable = Read_NamedTable.toJSON(message.namedTable);
    }
    if (message.dataSource !== undefined) {
      obj.dataSource = Read_DataSource.toJSON(message.dataSource);
    }
    if (message.isStreaming === true) {
      obj.isStreaming = message.isStreaming;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Read>, I>>(base?: I): Read {
    return Read.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Read>, I>>(object: I): Read {
    const message = createBaseRead();
    message.namedTable = (object.namedTable !== undefined && object.namedTable !== null)
      ? Read_NamedTable.fromPartial(object.namedTable)
      : undefined;
    message.dataSource = (object.dataSource !== undefined && object.dataSource !== null)
      ? Read_DataSource.fromPartial(object.dataSource)
      : undefined;
    message.isStreaming = object.isStreaming ?? false;
    return message;
  },
};

function createBaseRead_NamedTable(): Read_NamedTable {
  return { unparsedIdentifier: "", options: {} };
}

export const Read_NamedTable = {
  encode(message: Read_NamedTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unparsedIdentifier !== "") {
      writer.uint32(10).string(message.unparsedIdentifier);
    }
    Object.entries(message.options).forEach(([key, value]) => {
      Read_NamedTable_OptionsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Read_NamedTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRead_NamedTable();
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
          if (tag !== 18) {
            break;
          }

          const entry2 = Read_NamedTable_OptionsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.options[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Read_NamedTable {
    return {
      unparsedIdentifier: isSet(object.unparsedIdentifier) ? globalThis.String(object.unparsedIdentifier) : "",
      options: isObject(object.options)
        ? Object.entries(object.options).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Read_NamedTable): unknown {
    const obj: any = {};
    if (message.unparsedIdentifier !== "") {
      obj.unparsedIdentifier = message.unparsedIdentifier;
    }
    if (message.options) {
      const entries = Object.entries(message.options);
      if (entries.length > 0) {
        obj.options = {};
        entries.forEach(([k, v]) => {
          obj.options[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Read_NamedTable>, I>>(base?: I): Read_NamedTable {
    return Read_NamedTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Read_NamedTable>, I>>(object: I): Read_NamedTable {
    const message = createBaseRead_NamedTable();
    message.unparsedIdentifier = object.unparsedIdentifier ?? "";
    message.options = Object.entries(object.options ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseRead_NamedTable_OptionsEntry(): Read_NamedTable_OptionsEntry {
  return { key: "", value: "" };
}

export const Read_NamedTable_OptionsEntry = {
  encode(message: Read_NamedTable_OptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Read_NamedTable_OptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRead_NamedTable_OptionsEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Read_NamedTable_OptionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Read_NamedTable_OptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Read_NamedTable_OptionsEntry>, I>>(base?: I): Read_NamedTable_OptionsEntry {
    return Read_NamedTable_OptionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Read_NamedTable_OptionsEntry>, I>>(object: I): Read_NamedTable_OptionsEntry {
    const message = createBaseRead_NamedTable_OptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRead_DataSource(): Read_DataSource {
  return { format: undefined, schema: undefined, options: {}, paths: [], predicates: [] };
}

export const Read_DataSource = {
  encode(message: Read_DataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.format !== undefined) {
      writer.uint32(10).string(message.format);
    }
    if (message.schema !== undefined) {
      writer.uint32(18).string(message.schema);
    }
    Object.entries(message.options).forEach(([key, value]) => {
      Read_DataSource_OptionsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    for (const v of message.paths) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.predicates) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Read_DataSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRead_DataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.format = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = Read_DataSource_OptionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.options[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.paths.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.predicates.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Read_DataSource {
    return {
      format: isSet(object.format) ? globalThis.String(object.format) : undefined,
      schema: isSet(object.schema) ? globalThis.String(object.schema) : undefined,
      options: isObject(object.options)
        ? Object.entries(object.options).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      paths: globalThis.Array.isArray(object?.paths) ? object.paths.map((e: any) => globalThis.String(e)) : [],
      predicates: globalThis.Array.isArray(object?.predicates)
        ? object.predicates.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Read_DataSource): unknown {
    const obj: any = {};
    if (message.format !== undefined) {
      obj.format = message.format;
    }
    if (message.schema !== undefined) {
      obj.schema = message.schema;
    }
    if (message.options) {
      const entries = Object.entries(message.options);
      if (entries.length > 0) {
        obj.options = {};
        entries.forEach(([k, v]) => {
          obj.options[k] = v;
        });
      }
    }
    if (message.paths?.length) {
      obj.paths = message.paths;
    }
    if (message.predicates?.length) {
      obj.predicates = message.predicates;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Read_DataSource>, I>>(base?: I): Read_DataSource {
    return Read_DataSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Read_DataSource>, I>>(object: I): Read_DataSource {
    const message = createBaseRead_DataSource();
    message.format = object.format ?? undefined;
    message.schema = object.schema ?? undefined;
    message.options = Object.entries(object.options ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.paths = object.paths?.map((e) => e) || [];
    message.predicates = object.predicates?.map((e) => e) || [];
    return message;
  },
};

function createBaseRead_DataSource_OptionsEntry(): Read_DataSource_OptionsEntry {
  return { key: "", value: "" };
}

export const Read_DataSource_OptionsEntry = {
  encode(message: Read_DataSource_OptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Read_DataSource_OptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRead_DataSource_OptionsEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Read_DataSource_OptionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Read_DataSource_OptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Read_DataSource_OptionsEntry>, I>>(base?: I): Read_DataSource_OptionsEntry {
    return Read_DataSource_OptionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Read_DataSource_OptionsEntry>, I>>(object: I): Read_DataSource_OptionsEntry {
    const message = createBaseRead_DataSource_OptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProject(): Project {
  return { input: undefined, expressions: [] };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.expressions) {
      Expression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expressions.push(Expression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      expressions: globalThis.Array.isArray(object?.expressions)
        ? object.expressions.map((e: any) => Expression.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.expressions?.length) {
      obj.expressions = message.expressions.map((e) => Expression.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Project>, I>>(base?: I): Project {
    return Project.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = createBaseProject();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.expressions = object.expressions?.map((e) => Expression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFilter(): Filter {
  return { input: undefined, condition: undefined };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.condition !== undefined) {
      Expression.encode(message.condition, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.condition = Expression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      condition: isSet(object.condition) ? Expression.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.condition !== undefined) {
      obj.condition = Expression.toJSON(message.condition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Filter>, I>>(base?: I): Filter {
    return Filter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? Expression.fromPartial(object.condition)
      : undefined;
    return message;
  },
};

function createBaseJoin(): Join {
  return {
    left: undefined,
    right: undefined,
    joinCondition: undefined,
    joinType: 0,
    usingColumns: [],
    joinDataType: undefined,
  };
}

export const Join = {
  encode(message: Join, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.left !== undefined) {
      Relation.encode(message.left, writer.uint32(10).fork()).ldelim();
    }
    if (message.right !== undefined) {
      Relation.encode(message.right, writer.uint32(18).fork()).ldelim();
    }
    if (message.joinCondition !== undefined) {
      Expression.encode(message.joinCondition, writer.uint32(26).fork()).ldelim();
    }
    if (message.joinType !== 0) {
      writer.uint32(32).int32(message.joinType);
    }
    for (const v of message.usingColumns) {
      writer.uint32(42).string(v!);
    }
    if (message.joinDataType !== undefined) {
      Join_JoinDataType.encode(message.joinDataType, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Join {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.left = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.right = Relation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.joinCondition = Expression.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.joinType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.usingColumns.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.joinDataType = Join_JoinDataType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Join {
    return {
      left: isSet(object.left) ? Relation.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? Relation.fromJSON(object.right) : undefined,
      joinCondition: isSet(object.joinCondition) ? Expression.fromJSON(object.joinCondition) : undefined,
      joinType: isSet(object.joinType) ? join_JoinTypeFromJSON(object.joinType) : 0,
      usingColumns: globalThis.Array.isArray(object?.usingColumns)
        ? object.usingColumns.map((e: any) => globalThis.String(e))
        : [],
      joinDataType: isSet(object.joinDataType) ? Join_JoinDataType.fromJSON(object.joinDataType) : undefined,
    };
  },

  toJSON(message: Join): unknown {
    const obj: any = {};
    if (message.left !== undefined) {
      obj.left = Relation.toJSON(message.left);
    }
    if (message.right !== undefined) {
      obj.right = Relation.toJSON(message.right);
    }
    if (message.joinCondition !== undefined) {
      obj.joinCondition = Expression.toJSON(message.joinCondition);
    }
    if (message.joinType !== 0) {
      obj.joinType = join_JoinTypeToJSON(message.joinType);
    }
    if (message.usingColumns?.length) {
      obj.usingColumns = message.usingColumns;
    }
    if (message.joinDataType !== undefined) {
      obj.joinDataType = Join_JoinDataType.toJSON(message.joinDataType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Join>, I>>(base?: I): Join {
    return Join.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Join>, I>>(object: I): Join {
    const message = createBaseJoin();
    message.left = (object.left !== undefined && object.left !== null) ? Relation.fromPartial(object.left) : undefined;
    message.right = (object.right !== undefined && object.right !== null)
      ? Relation.fromPartial(object.right)
      : undefined;
    message.joinCondition = (object.joinCondition !== undefined && object.joinCondition !== null)
      ? Expression.fromPartial(object.joinCondition)
      : undefined;
    message.joinType = object.joinType ?? 0;
    message.usingColumns = object.usingColumns?.map((e) => e) || [];
    message.joinDataType = (object.joinDataType !== undefined && object.joinDataType !== null)
      ? Join_JoinDataType.fromPartial(object.joinDataType)
      : undefined;
    return message;
  },
};

function createBaseJoin_JoinDataType(): Join_JoinDataType {
  return { isLeftStruct: false, isRightStruct: false };
}

export const Join_JoinDataType = {
  encode(message: Join_JoinDataType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLeftStruct === true) {
      writer.uint32(8).bool(message.isLeftStruct);
    }
    if (message.isRightStruct === true) {
      writer.uint32(16).bool(message.isRightStruct);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Join_JoinDataType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoin_JoinDataType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isLeftStruct = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isRightStruct = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Join_JoinDataType {
    return {
      isLeftStruct: isSet(object.isLeftStruct) ? globalThis.Boolean(object.isLeftStruct) : false,
      isRightStruct: isSet(object.isRightStruct) ? globalThis.Boolean(object.isRightStruct) : false,
    };
  },

  toJSON(message: Join_JoinDataType): unknown {
    const obj: any = {};
    if (message.isLeftStruct === true) {
      obj.isLeftStruct = message.isLeftStruct;
    }
    if (message.isRightStruct === true) {
      obj.isRightStruct = message.isRightStruct;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Join_JoinDataType>, I>>(base?: I): Join_JoinDataType {
    return Join_JoinDataType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Join_JoinDataType>, I>>(object: I): Join_JoinDataType {
    const message = createBaseJoin_JoinDataType();
    message.isLeftStruct = object.isLeftStruct ?? false;
    message.isRightStruct = object.isRightStruct ?? false;
    return message;
  },
};

function createBaseSetOperation(): SetOperation {
  return {
    leftInput: undefined,
    rightInput: undefined,
    setOpType: 0,
    isAll: undefined,
    byName: undefined,
    allowMissingColumns: undefined,
  };
}

export const SetOperation = {
  encode(message: SetOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leftInput !== undefined) {
      Relation.encode(message.leftInput, writer.uint32(10).fork()).ldelim();
    }
    if (message.rightInput !== undefined) {
      Relation.encode(message.rightInput, writer.uint32(18).fork()).ldelim();
    }
    if (message.setOpType !== 0) {
      writer.uint32(24).int32(message.setOpType);
    }
    if (message.isAll !== undefined) {
      writer.uint32(32).bool(message.isAll);
    }
    if (message.byName !== undefined) {
      writer.uint32(40).bool(message.byName);
    }
    if (message.allowMissingColumns !== undefined) {
      writer.uint32(48).bool(message.allowMissingColumns);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetOperation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leftInput = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rightInput = Relation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.setOpType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isAll = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.byName = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.allowMissingColumns = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetOperation {
    return {
      leftInput: isSet(object.leftInput) ? Relation.fromJSON(object.leftInput) : undefined,
      rightInput: isSet(object.rightInput) ? Relation.fromJSON(object.rightInput) : undefined,
      setOpType: isSet(object.setOpType) ? setOperation_SetOpTypeFromJSON(object.setOpType) : 0,
      isAll: isSet(object.isAll) ? globalThis.Boolean(object.isAll) : undefined,
      byName: isSet(object.byName) ? globalThis.Boolean(object.byName) : undefined,
      allowMissingColumns: isSet(object.allowMissingColumns)
        ? globalThis.Boolean(object.allowMissingColumns)
        : undefined,
    };
  },

  toJSON(message: SetOperation): unknown {
    const obj: any = {};
    if (message.leftInput !== undefined) {
      obj.leftInput = Relation.toJSON(message.leftInput);
    }
    if (message.rightInput !== undefined) {
      obj.rightInput = Relation.toJSON(message.rightInput);
    }
    if (message.setOpType !== 0) {
      obj.setOpType = setOperation_SetOpTypeToJSON(message.setOpType);
    }
    if (message.isAll !== undefined) {
      obj.isAll = message.isAll;
    }
    if (message.byName !== undefined) {
      obj.byName = message.byName;
    }
    if (message.allowMissingColumns !== undefined) {
      obj.allowMissingColumns = message.allowMissingColumns;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetOperation>, I>>(base?: I): SetOperation {
    return SetOperation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetOperation>, I>>(object: I): SetOperation {
    const message = createBaseSetOperation();
    message.leftInput = (object.leftInput !== undefined && object.leftInput !== null)
      ? Relation.fromPartial(object.leftInput)
      : undefined;
    message.rightInput = (object.rightInput !== undefined && object.rightInput !== null)
      ? Relation.fromPartial(object.rightInput)
      : undefined;
    message.setOpType = object.setOpType ?? 0;
    message.isAll = object.isAll ?? undefined;
    message.byName = object.byName ?? undefined;
    message.allowMissingColumns = object.allowMissingColumns ?? undefined;
    return message;
  },
};

function createBaseLimit(): Limit {
  return { input: undefined, limit: 0 };
}

export const Limit = {
  encode(message: Limit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Limit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Limit {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: Limit): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Limit>, I>>(base?: I): Limit {
    return Limit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Limit>, I>>(object: I): Limit {
    const message = createBaseLimit();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseOffset(): Offset {
  return { input: undefined, offset: 0 };
}

export const Offset = {
  encode(message: Offset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Offset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOffset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Offset {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: Offset): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Offset>, I>>(base?: I): Offset {
    return Offset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Offset>, I>>(object: I): Offset {
    const message = createBaseOffset();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseTail(): Tail {
  return { input: undefined, limit: 0 };
}

export const Tail = {
  encode(message: Tail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tail {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: Tail): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tail>, I>>(base?: I): Tail {
    return Tail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Tail>, I>>(object: I): Tail {
    const message = createBaseTail();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseAggregate(): Aggregate {
  return { input: undefined, groupType: 0, groupingExpressions: [], aggregateExpressions: [], pivot: undefined };
}

export const Aggregate = {
  encode(message: Aggregate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.groupType !== 0) {
      writer.uint32(16).int32(message.groupType);
    }
    for (const v of message.groupingExpressions) {
      Expression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.aggregateExpressions) {
      Expression.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.pivot !== undefined) {
      Aggregate_Pivot.encode(message.pivot, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Aggregate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.groupType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.groupingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.aggregateExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pivot = Aggregate_Pivot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Aggregate {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      groupType: isSet(object.groupType) ? aggregate_GroupTypeFromJSON(object.groupType) : 0,
      groupingExpressions: globalThis.Array.isArray(object?.groupingExpressions)
        ? object.groupingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      aggregateExpressions: globalThis.Array.isArray(object?.aggregateExpressions)
        ? object.aggregateExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      pivot: isSet(object.pivot) ? Aggregate_Pivot.fromJSON(object.pivot) : undefined,
    };
  },

  toJSON(message: Aggregate): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.groupType !== 0) {
      obj.groupType = aggregate_GroupTypeToJSON(message.groupType);
    }
    if (message.groupingExpressions?.length) {
      obj.groupingExpressions = message.groupingExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.aggregateExpressions?.length) {
      obj.aggregateExpressions = message.aggregateExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.pivot !== undefined) {
      obj.pivot = Aggregate_Pivot.toJSON(message.pivot);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Aggregate>, I>>(base?: I): Aggregate {
    return Aggregate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Aggregate>, I>>(object: I): Aggregate {
    const message = createBaseAggregate();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.groupType = object.groupType ?? 0;
    message.groupingExpressions = object.groupingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.aggregateExpressions = object.aggregateExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.pivot = (object.pivot !== undefined && object.pivot !== null)
      ? Aggregate_Pivot.fromPartial(object.pivot)
      : undefined;
    return message;
  },
};

function createBaseAggregate_Pivot(): Aggregate_Pivot {
  return { col: undefined, values: [] };
}

export const Aggregate_Pivot = {
  encode(message: Aggregate_Pivot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.col !== undefined) {
      Expression.encode(message.col, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.values) {
      Expression_Literal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Aggregate_Pivot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregate_Pivot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.col = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Aggregate_Pivot {
    return {
      col: isSet(object.col) ? Expression.fromJSON(object.col) : undefined,
      values: globalThis.Array.isArray(object?.values)
        ? object.values.map((e: any) => Expression_Literal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Aggregate_Pivot): unknown {
    const obj: any = {};
    if (message.col !== undefined) {
      obj.col = Expression.toJSON(message.col);
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => Expression_Literal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Aggregate_Pivot>, I>>(base?: I): Aggregate_Pivot {
    return Aggregate_Pivot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Aggregate_Pivot>, I>>(object: I): Aggregate_Pivot {
    const message = createBaseAggregate_Pivot();
    message.col = (object.col !== undefined && object.col !== null) ? Expression.fromPartial(object.col) : undefined;
    message.values = object.values?.map((e) => Expression_Literal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSort(): Sort {
  return { input: undefined, order: [], isGlobal: undefined };
}

export const Sort = {
  encode(message: Sort, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.order) {
      Expression_SortOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isGlobal !== undefined) {
      writer.uint32(24).bool(message.isGlobal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sort {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSort();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.order.push(Expression_SortOrder.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isGlobal = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sort {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      order: globalThis.Array.isArray(object?.order)
        ? object.order.map((e: any) => Expression_SortOrder.fromJSON(e))
        : [],
      isGlobal: isSet(object.isGlobal) ? globalThis.Boolean(object.isGlobal) : undefined,
    };
  },

  toJSON(message: Sort): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.order?.length) {
      obj.order = message.order.map((e) => Expression_SortOrder.toJSON(e));
    }
    if (message.isGlobal !== undefined) {
      obj.isGlobal = message.isGlobal;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sort>, I>>(base?: I): Sort {
    return Sort.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sort>, I>>(object: I): Sort {
    const message = createBaseSort();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.order = object.order?.map((e) => Expression_SortOrder.fromPartial(e)) || [];
    message.isGlobal = object.isGlobal ?? undefined;
    return message;
  },
};

function createBaseDrop(): Drop {
  return { input: undefined, columns: [], columnNames: [] };
}

export const Drop = {
  encode(message: Drop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.columns) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.columnNames) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Drop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.columns.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.columnNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Drop {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      columns: globalThis.Array.isArray(object?.columns) ? object.columns.map((e: any) => Expression.fromJSON(e)) : [],
      columnNames: globalThis.Array.isArray(object?.columnNames)
        ? object.columnNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Drop): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.columns?.length) {
      obj.columns = message.columns.map((e) => Expression.toJSON(e));
    }
    if (message.columnNames?.length) {
      obj.columnNames = message.columnNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Drop>, I>>(base?: I): Drop {
    return Drop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Drop>, I>>(object: I): Drop {
    const message = createBaseDrop();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.columns = object.columns?.map((e) => Expression.fromPartial(e)) || [];
    message.columnNames = object.columnNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeduplicate(): Deduplicate {
  return { input: undefined, columnNames: [], allColumnsAsKeys: undefined, withinWatermark: undefined };
}

export const Deduplicate = {
  encode(message: Deduplicate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.columnNames) {
      writer.uint32(18).string(v!);
    }
    if (message.allColumnsAsKeys !== undefined) {
      writer.uint32(24).bool(message.allColumnsAsKeys);
    }
    if (message.withinWatermark !== undefined) {
      writer.uint32(32).bool(message.withinWatermark);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deduplicate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeduplicate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.columnNames.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.allColumnsAsKeys = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.withinWatermark = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Deduplicate {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      columnNames: globalThis.Array.isArray(object?.columnNames)
        ? object.columnNames.map((e: any) => globalThis.String(e))
        : [],
      allColumnsAsKeys: isSet(object.allColumnsAsKeys) ? globalThis.Boolean(object.allColumnsAsKeys) : undefined,
      withinWatermark: isSet(object.withinWatermark) ? globalThis.Boolean(object.withinWatermark) : undefined,
    };
  },

  toJSON(message: Deduplicate): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.columnNames?.length) {
      obj.columnNames = message.columnNames;
    }
    if (message.allColumnsAsKeys !== undefined) {
      obj.allColumnsAsKeys = message.allColumnsAsKeys;
    }
    if (message.withinWatermark !== undefined) {
      obj.withinWatermark = message.withinWatermark;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Deduplicate>, I>>(base?: I): Deduplicate {
    return Deduplicate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Deduplicate>, I>>(object: I): Deduplicate {
    const message = createBaseDeduplicate();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.columnNames = object.columnNames?.map((e) => e) || [];
    message.allColumnsAsKeys = object.allColumnsAsKeys ?? undefined;
    message.withinWatermark = object.withinWatermark ?? undefined;
    return message;
  },
};

function createBaseLocalRelation(): LocalRelation {
  return { data: undefined, schema: undefined };
}

export const LocalRelation = {
  encode(message: LocalRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.schema !== undefined) {
      writer.uint32(18).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalRelation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocalRelation {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : undefined,
      schema: isSet(object.schema) ? globalThis.String(object.schema) : undefined,
    };
  },

  toJSON(message: LocalRelation): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.schema !== undefined) {
      obj.schema = message.schema;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LocalRelation>, I>>(base?: I): LocalRelation {
    return LocalRelation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LocalRelation>, I>>(object: I): LocalRelation {
    const message = createBaseLocalRelation();
    message.data = object.data ?? undefined;
    message.schema = object.schema ?? undefined;
    return message;
  },
};

function createBaseCachedLocalRelation(): CachedLocalRelation {
  return { hash: "" };
}

export const CachedLocalRelation = {
  encode(message: CachedLocalRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CachedLocalRelation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCachedLocalRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CachedLocalRelation {
    return { hash: isSet(object.hash) ? globalThis.String(object.hash) : "" };
  },

  toJSON(message: CachedLocalRelation): unknown {
    const obj: any = {};
    if (message.hash !== "") {
      obj.hash = message.hash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CachedLocalRelation>, I>>(base?: I): CachedLocalRelation {
    return CachedLocalRelation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CachedLocalRelation>, I>>(object: I): CachedLocalRelation {
    const message = createBaseCachedLocalRelation();
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBaseCachedRemoteRelation(): CachedRemoteRelation {
  return { relationId: "" };
}

export const CachedRemoteRelation = {
  encode(message: CachedRemoteRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relationId !== "") {
      writer.uint32(10).string(message.relationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CachedRemoteRelation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCachedRemoteRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CachedRemoteRelation {
    return { relationId: isSet(object.relationId) ? globalThis.String(object.relationId) : "" };
  },

  toJSON(message: CachedRemoteRelation): unknown {
    const obj: any = {};
    if (message.relationId !== "") {
      obj.relationId = message.relationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CachedRemoteRelation>, I>>(base?: I): CachedRemoteRelation {
    return CachedRemoteRelation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CachedRemoteRelation>, I>>(object: I): CachedRemoteRelation {
    const message = createBaseCachedRemoteRelation();
    message.relationId = object.relationId ?? "";
    return message;
  },
};

function createBaseSample(): Sample {
  return {
    input: undefined,
    lowerBound: 0,
    upperBound: 0,
    withReplacement: undefined,
    seed: undefined,
    deterministicOrder: false,
  };
}

export const Sample = {
  encode(message: Sample, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.lowerBound !== 0) {
      writer.uint32(17).double(message.lowerBound);
    }
    if (message.upperBound !== 0) {
      writer.uint32(25).double(message.upperBound);
    }
    if (message.withReplacement !== undefined) {
      writer.uint32(32).bool(message.withReplacement);
    }
    if (message.seed !== undefined) {
      writer.uint32(40).int64(message.seed);
    }
    if (message.deterministicOrder === true) {
      writer.uint32(48).bool(message.deterministicOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sample {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSample();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.lowerBound = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.upperBound = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.withReplacement = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.seed = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.deterministicOrder = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sample {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      lowerBound: isSet(object.lowerBound) ? globalThis.Number(object.lowerBound) : 0,
      upperBound: isSet(object.upperBound) ? globalThis.Number(object.upperBound) : 0,
      withReplacement: isSet(object.withReplacement) ? globalThis.Boolean(object.withReplacement) : undefined,
      seed: isSet(object.seed) ? globalThis.Number(object.seed) : undefined,
      deterministicOrder: isSet(object.deterministicOrder) ? globalThis.Boolean(object.deterministicOrder) : false,
    };
  },

  toJSON(message: Sample): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.lowerBound !== 0) {
      obj.lowerBound = message.lowerBound;
    }
    if (message.upperBound !== 0) {
      obj.upperBound = message.upperBound;
    }
    if (message.withReplacement !== undefined) {
      obj.withReplacement = message.withReplacement;
    }
    if (message.seed !== undefined) {
      obj.seed = Math.round(message.seed);
    }
    if (message.deterministicOrder === true) {
      obj.deterministicOrder = message.deterministicOrder;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sample>, I>>(base?: I): Sample {
    return Sample.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sample>, I>>(object: I): Sample {
    const message = createBaseSample();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.lowerBound = object.lowerBound ?? 0;
    message.upperBound = object.upperBound ?? 0;
    message.withReplacement = object.withReplacement ?? undefined;
    message.seed = object.seed ?? undefined;
    message.deterministicOrder = object.deterministicOrder ?? false;
    return message;
  },
};

function createBaseRange(): Range {
  return { start: undefined, end: 0, step: 0, numPartitions: undefined };
}

export const Range = {
  encode(message: Range, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      writer.uint32(8).int64(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int64(message.end);
    }
    if (message.step !== 0) {
      writer.uint32(24).int64(message.step);
    }
    if (message.numPartitions !== undefined) {
      writer.uint32(32).int32(message.numPartitions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Range {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.step = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.numPartitions = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Range {
    return {
      start: isSet(object.start) ? globalThis.Number(object.start) : undefined,
      end: isSet(object.end) ? globalThis.Number(object.end) : 0,
      step: isSet(object.step) ? globalThis.Number(object.step) : 0,
      numPartitions: isSet(object.numPartitions) ? globalThis.Number(object.numPartitions) : undefined,
    };
  },

  toJSON(message: Range): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    if (message.step !== 0) {
      obj.step = Math.round(message.step);
    }
    if (message.numPartitions !== undefined) {
      obj.numPartitions = Math.round(message.numPartitions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Range>, I>>(base?: I): Range {
    return Range.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Range>, I>>(object: I): Range {
    const message = createBaseRange();
    message.start = object.start ?? undefined;
    message.end = object.end ?? 0;
    message.step = object.step ?? 0;
    message.numPartitions = object.numPartitions ?? undefined;
    return message;
  },
};

function createBaseSubqueryAlias(): SubqueryAlias {
  return { input: undefined, alias: "", qualifier: [] };
}

export const SubqueryAlias = {
  encode(message: SubqueryAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    for (const v of message.qualifier) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubqueryAlias {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubqueryAlias();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.qualifier.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubqueryAlias {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      qualifier: globalThis.Array.isArray(object?.qualifier)
        ? object.qualifier.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SubqueryAlias): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.qualifier?.length) {
      obj.qualifier = message.qualifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubqueryAlias>, I>>(base?: I): SubqueryAlias {
    return SubqueryAlias.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubqueryAlias>, I>>(object: I): SubqueryAlias {
    const message = createBaseSubqueryAlias();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.alias = object.alias ?? "";
    message.qualifier = object.qualifier?.map((e) => e) || [];
    return message;
  },
};

function createBaseRepartition(): Repartition {
  return { input: undefined, numPartitions: 0, shuffle: undefined };
}

export const Repartition = {
  encode(message: Repartition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.numPartitions !== 0) {
      writer.uint32(16).int32(message.numPartitions);
    }
    if (message.shuffle !== undefined) {
      writer.uint32(24).bool(message.shuffle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Repartition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepartition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numPartitions = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.shuffle = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Repartition {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      numPartitions: isSet(object.numPartitions) ? globalThis.Number(object.numPartitions) : 0,
      shuffle: isSet(object.shuffle) ? globalThis.Boolean(object.shuffle) : undefined,
    };
  },

  toJSON(message: Repartition): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.numPartitions !== 0) {
      obj.numPartitions = Math.round(message.numPartitions);
    }
    if (message.shuffle !== undefined) {
      obj.shuffle = message.shuffle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Repartition>, I>>(base?: I): Repartition {
    return Repartition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Repartition>, I>>(object: I): Repartition {
    const message = createBaseRepartition();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.numPartitions = object.numPartitions ?? 0;
    message.shuffle = object.shuffle ?? undefined;
    return message;
  },
};

function createBaseShowString(): ShowString {
  return { input: undefined, numRows: 0, truncate: 0, vertical: false };
}

export const ShowString = {
  encode(message: ShowString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.numRows !== 0) {
      writer.uint32(16).int32(message.numRows);
    }
    if (message.truncate !== 0) {
      writer.uint32(24).int32(message.truncate);
    }
    if (message.vertical === true) {
      writer.uint32(32).bool(message.vertical);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShowString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numRows = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.truncate = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.vertical = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShowString {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      numRows: isSet(object.numRows) ? globalThis.Number(object.numRows) : 0,
      truncate: isSet(object.truncate) ? globalThis.Number(object.truncate) : 0,
      vertical: isSet(object.vertical) ? globalThis.Boolean(object.vertical) : false,
    };
  },

  toJSON(message: ShowString): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.numRows !== 0) {
      obj.numRows = Math.round(message.numRows);
    }
    if (message.truncate !== 0) {
      obj.truncate = Math.round(message.truncate);
    }
    if (message.vertical === true) {
      obj.vertical = message.vertical;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShowString>, I>>(base?: I): ShowString {
    return ShowString.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShowString>, I>>(object: I): ShowString {
    const message = createBaseShowString();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.numRows = object.numRows ?? 0;
    message.truncate = object.truncate ?? 0;
    message.vertical = object.vertical ?? false;
    return message;
  },
};

function createBaseHtmlString(): HtmlString {
  return { input: undefined, numRows: 0, truncate: 0 };
}

export const HtmlString = {
  encode(message: HtmlString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.numRows !== 0) {
      writer.uint32(16).int32(message.numRows);
    }
    if (message.truncate !== 0) {
      writer.uint32(24).int32(message.truncate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HtmlString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHtmlString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numRows = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.truncate = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HtmlString {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      numRows: isSet(object.numRows) ? globalThis.Number(object.numRows) : 0,
      truncate: isSet(object.truncate) ? globalThis.Number(object.truncate) : 0,
    };
  },

  toJSON(message: HtmlString): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.numRows !== 0) {
      obj.numRows = Math.round(message.numRows);
    }
    if (message.truncate !== 0) {
      obj.truncate = Math.round(message.truncate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HtmlString>, I>>(base?: I): HtmlString {
    return HtmlString.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HtmlString>, I>>(object: I): HtmlString {
    const message = createBaseHtmlString();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.numRows = object.numRows ?? 0;
    message.truncate = object.truncate ?? 0;
    return message;
  },
};

function createBaseStatSummary(): StatSummary {
  return { input: undefined, statistics: [] };
}

export const StatSummary = {
  encode(message: StatSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.statistics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.statistics.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatSummary {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      statistics: globalThis.Array.isArray(object?.statistics)
        ? object.statistics.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StatSummary): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.statistics?.length) {
      obj.statistics = message.statistics;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatSummary>, I>>(base?: I): StatSummary {
    return StatSummary.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatSummary>, I>>(object: I): StatSummary {
    const message = createBaseStatSummary();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.statistics = object.statistics?.map((e) => e) || [];
    return message;
  },
};

function createBaseStatDescribe(): StatDescribe {
  return { input: undefined, cols: [] };
}

export const StatDescribe = {
  encode(message: StatDescribe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cols) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatDescribe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatDescribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cols.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatDescribe {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      cols: globalThis.Array.isArray(object?.cols) ? object.cols.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: StatDescribe): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.cols?.length) {
      obj.cols = message.cols;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatDescribe>, I>>(base?: I): StatDescribe {
    return StatDescribe.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatDescribe>, I>>(object: I): StatDescribe {
    const message = createBaseStatDescribe();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.cols = object.cols?.map((e) => e) || [];
    return message;
  },
};

function createBaseStatCrosstab(): StatCrosstab {
  return { input: undefined, col1: "", col2: "" };
}

export const StatCrosstab = {
  encode(message: StatCrosstab, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.col1 !== "") {
      writer.uint32(18).string(message.col1);
    }
    if (message.col2 !== "") {
      writer.uint32(26).string(message.col2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatCrosstab {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatCrosstab();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.col1 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.col2 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatCrosstab {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      col1: isSet(object.col1) ? globalThis.String(object.col1) : "",
      col2: isSet(object.col2) ? globalThis.String(object.col2) : "",
    };
  },

  toJSON(message: StatCrosstab): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.col1 !== "") {
      obj.col1 = message.col1;
    }
    if (message.col2 !== "") {
      obj.col2 = message.col2;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatCrosstab>, I>>(base?: I): StatCrosstab {
    return StatCrosstab.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatCrosstab>, I>>(object: I): StatCrosstab {
    const message = createBaseStatCrosstab();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.col1 = object.col1 ?? "";
    message.col2 = object.col2 ?? "";
    return message;
  },
};

function createBaseStatCov(): StatCov {
  return { input: undefined, col1: "", col2: "" };
}

export const StatCov = {
  encode(message: StatCov, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.col1 !== "") {
      writer.uint32(18).string(message.col1);
    }
    if (message.col2 !== "") {
      writer.uint32(26).string(message.col2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatCov {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatCov();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.col1 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.col2 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatCov {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      col1: isSet(object.col1) ? globalThis.String(object.col1) : "",
      col2: isSet(object.col2) ? globalThis.String(object.col2) : "",
    };
  },

  toJSON(message: StatCov): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.col1 !== "") {
      obj.col1 = message.col1;
    }
    if (message.col2 !== "") {
      obj.col2 = message.col2;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatCov>, I>>(base?: I): StatCov {
    return StatCov.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatCov>, I>>(object: I): StatCov {
    const message = createBaseStatCov();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.col1 = object.col1 ?? "";
    message.col2 = object.col2 ?? "";
    return message;
  },
};

function createBaseStatCorr(): StatCorr {
  return { input: undefined, col1: "", col2: "", method: undefined };
}

export const StatCorr = {
  encode(message: StatCorr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.col1 !== "") {
      writer.uint32(18).string(message.col1);
    }
    if (message.col2 !== "") {
      writer.uint32(26).string(message.col2);
    }
    if (message.method !== undefined) {
      writer.uint32(34).string(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatCorr {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatCorr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.col1 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.col2 = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.method = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatCorr {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      col1: isSet(object.col1) ? globalThis.String(object.col1) : "",
      col2: isSet(object.col2) ? globalThis.String(object.col2) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : undefined,
    };
  },

  toJSON(message: StatCorr): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.col1 !== "") {
      obj.col1 = message.col1;
    }
    if (message.col2 !== "") {
      obj.col2 = message.col2;
    }
    if (message.method !== undefined) {
      obj.method = message.method;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatCorr>, I>>(base?: I): StatCorr {
    return StatCorr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatCorr>, I>>(object: I): StatCorr {
    const message = createBaseStatCorr();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.col1 = object.col1 ?? "";
    message.col2 = object.col2 ?? "";
    message.method = object.method ?? undefined;
    return message;
  },
};

function createBaseStatApproxQuantile(): StatApproxQuantile {
  return { input: undefined, cols: [], probabilities: [], relativeError: 0 };
}

export const StatApproxQuantile = {
  encode(message: StatApproxQuantile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cols) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.probabilities) {
      writer.double(v);
    }
    writer.ldelim();
    if (message.relativeError !== 0) {
      writer.uint32(33).double(message.relativeError);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatApproxQuantile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatApproxQuantile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cols.push(reader.string());
          continue;
        case 3:
          if (tag === 25) {
            message.probabilities.push(reader.double());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.probabilities.push(reader.double());
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.relativeError = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatApproxQuantile {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      cols: globalThis.Array.isArray(object?.cols) ? object.cols.map((e: any) => globalThis.String(e)) : [],
      probabilities: globalThis.Array.isArray(object?.probabilities)
        ? object.probabilities.map((e: any) => globalThis.Number(e))
        : [],
      relativeError: isSet(object.relativeError) ? globalThis.Number(object.relativeError) : 0,
    };
  },

  toJSON(message: StatApproxQuantile): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.cols?.length) {
      obj.cols = message.cols;
    }
    if (message.probabilities?.length) {
      obj.probabilities = message.probabilities;
    }
    if (message.relativeError !== 0) {
      obj.relativeError = message.relativeError;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatApproxQuantile>, I>>(base?: I): StatApproxQuantile {
    return StatApproxQuantile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatApproxQuantile>, I>>(object: I): StatApproxQuantile {
    const message = createBaseStatApproxQuantile();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.cols = object.cols?.map((e) => e) || [];
    message.probabilities = object.probabilities?.map((e) => e) || [];
    message.relativeError = object.relativeError ?? 0;
    return message;
  },
};

function createBaseStatFreqItems(): StatFreqItems {
  return { input: undefined, cols: [], support: undefined };
}

export const StatFreqItems = {
  encode(message: StatFreqItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cols) {
      writer.uint32(18).string(v!);
    }
    if (message.support !== undefined) {
      writer.uint32(25).double(message.support);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatFreqItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatFreqItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cols.push(reader.string());
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.support = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatFreqItems {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      cols: globalThis.Array.isArray(object?.cols) ? object.cols.map((e: any) => globalThis.String(e)) : [],
      support: isSet(object.support) ? globalThis.Number(object.support) : undefined,
    };
  },

  toJSON(message: StatFreqItems): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.cols?.length) {
      obj.cols = message.cols;
    }
    if (message.support !== undefined) {
      obj.support = message.support;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatFreqItems>, I>>(base?: I): StatFreqItems {
    return StatFreqItems.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatFreqItems>, I>>(object: I): StatFreqItems {
    const message = createBaseStatFreqItems();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.cols = object.cols?.map((e) => e) || [];
    message.support = object.support ?? undefined;
    return message;
  },
};

function createBaseStatSampleBy(): StatSampleBy {
  return { input: undefined, col: undefined, fractions: [], seed: undefined };
}

export const StatSampleBy = {
  encode(message: StatSampleBy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.col !== undefined) {
      Expression.encode(message.col, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fractions) {
      StatSampleBy_Fraction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.seed !== undefined) {
      writer.uint32(40).int64(message.seed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatSampleBy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatSampleBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.col = Expression.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fractions.push(StatSampleBy_Fraction.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.seed = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatSampleBy {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      col: isSet(object.col) ? Expression.fromJSON(object.col) : undefined,
      fractions: globalThis.Array.isArray(object?.fractions)
        ? object.fractions.map((e: any) => StatSampleBy_Fraction.fromJSON(e))
        : [],
      seed: isSet(object.seed) ? globalThis.Number(object.seed) : undefined,
    };
  },

  toJSON(message: StatSampleBy): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.col !== undefined) {
      obj.col = Expression.toJSON(message.col);
    }
    if (message.fractions?.length) {
      obj.fractions = message.fractions.map((e) => StatSampleBy_Fraction.toJSON(e));
    }
    if (message.seed !== undefined) {
      obj.seed = Math.round(message.seed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatSampleBy>, I>>(base?: I): StatSampleBy {
    return StatSampleBy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatSampleBy>, I>>(object: I): StatSampleBy {
    const message = createBaseStatSampleBy();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.col = (object.col !== undefined && object.col !== null) ? Expression.fromPartial(object.col) : undefined;
    message.fractions = object.fractions?.map((e) => StatSampleBy_Fraction.fromPartial(e)) || [];
    message.seed = object.seed ?? undefined;
    return message;
  },
};

function createBaseStatSampleBy_Fraction(): StatSampleBy_Fraction {
  return { stratum: undefined, fraction: 0 };
}

export const StatSampleBy_Fraction = {
  encode(message: StatSampleBy_Fraction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stratum !== undefined) {
      Expression_Literal.encode(message.stratum, writer.uint32(10).fork()).ldelim();
    }
    if (message.fraction !== 0) {
      writer.uint32(17).double(message.fraction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatSampleBy_Fraction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatSampleBy_Fraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stratum = Expression_Literal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.fraction = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatSampleBy_Fraction {
    return {
      stratum: isSet(object.stratum) ? Expression_Literal.fromJSON(object.stratum) : undefined,
      fraction: isSet(object.fraction) ? globalThis.Number(object.fraction) : 0,
    };
  },

  toJSON(message: StatSampleBy_Fraction): unknown {
    const obj: any = {};
    if (message.stratum !== undefined) {
      obj.stratum = Expression_Literal.toJSON(message.stratum);
    }
    if (message.fraction !== 0) {
      obj.fraction = message.fraction;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatSampleBy_Fraction>, I>>(base?: I): StatSampleBy_Fraction {
    return StatSampleBy_Fraction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatSampleBy_Fraction>, I>>(object: I): StatSampleBy_Fraction {
    const message = createBaseStatSampleBy_Fraction();
    message.stratum = (object.stratum !== undefined && object.stratum !== null)
      ? Expression_Literal.fromPartial(object.stratum)
      : undefined;
    message.fraction = object.fraction ?? 0;
    return message;
  },
};

function createBaseNAFill(): NAFill {
  return { input: undefined, cols: [], values: [] };
}

export const NAFill = {
  encode(message: NAFill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cols) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.values) {
      Expression_Literal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NAFill {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNAFill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cols.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): NAFill {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      cols: globalThis.Array.isArray(object?.cols) ? object.cols.map((e: any) => globalThis.String(e)) : [],
      values: globalThis.Array.isArray(object?.values)
        ? object.values.map((e: any) => Expression_Literal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NAFill): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.cols?.length) {
      obj.cols = message.cols;
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => Expression_Literal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NAFill>, I>>(base?: I): NAFill {
    return NAFill.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NAFill>, I>>(object: I): NAFill {
    const message = createBaseNAFill();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.cols = object.cols?.map((e) => e) || [];
    message.values = object.values?.map((e) => Expression_Literal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNADrop(): NADrop {
  return { input: undefined, cols: [], minNonNulls: undefined };
}

export const NADrop = {
  encode(message: NADrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cols) {
      writer.uint32(18).string(v!);
    }
    if (message.minNonNulls !== undefined) {
      writer.uint32(24).int32(message.minNonNulls);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NADrop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNADrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cols.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.minNonNulls = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NADrop {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      cols: globalThis.Array.isArray(object?.cols) ? object.cols.map((e: any) => globalThis.String(e)) : [],
      minNonNulls: isSet(object.minNonNulls) ? globalThis.Number(object.minNonNulls) : undefined,
    };
  },

  toJSON(message: NADrop): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.cols?.length) {
      obj.cols = message.cols;
    }
    if (message.minNonNulls !== undefined) {
      obj.minNonNulls = Math.round(message.minNonNulls);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NADrop>, I>>(base?: I): NADrop {
    return NADrop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NADrop>, I>>(object: I): NADrop {
    const message = createBaseNADrop();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.cols = object.cols?.map((e) => e) || [];
    message.minNonNulls = object.minNonNulls ?? undefined;
    return message;
  },
};

function createBaseNAReplace(): NAReplace {
  return { input: undefined, cols: [], replacements: [] };
}

export const NAReplace = {
  encode(message: NAReplace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cols) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.replacements) {
      NAReplace_Replacement.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NAReplace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNAReplace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cols.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.replacements.push(NAReplace_Replacement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NAReplace {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      cols: globalThis.Array.isArray(object?.cols) ? object.cols.map((e: any) => globalThis.String(e)) : [],
      replacements: globalThis.Array.isArray(object?.replacements)
        ? object.replacements.map((e: any) => NAReplace_Replacement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NAReplace): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.cols?.length) {
      obj.cols = message.cols;
    }
    if (message.replacements?.length) {
      obj.replacements = message.replacements.map((e) => NAReplace_Replacement.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NAReplace>, I>>(base?: I): NAReplace {
    return NAReplace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NAReplace>, I>>(object: I): NAReplace {
    const message = createBaseNAReplace();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.cols = object.cols?.map((e) => e) || [];
    message.replacements = object.replacements?.map((e) => NAReplace_Replacement.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNAReplace_Replacement(): NAReplace_Replacement {
  return { oldValue: undefined, newValue: undefined };
}

export const NAReplace_Replacement = {
  encode(message: NAReplace_Replacement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oldValue !== undefined) {
      Expression_Literal.encode(message.oldValue, writer.uint32(10).fork()).ldelim();
    }
    if (message.newValue !== undefined) {
      Expression_Literal.encode(message.newValue, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NAReplace_Replacement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNAReplace_Replacement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oldValue = Expression_Literal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newValue = Expression_Literal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NAReplace_Replacement {
    return {
      oldValue: isSet(object.oldValue) ? Expression_Literal.fromJSON(object.oldValue) : undefined,
      newValue: isSet(object.newValue) ? Expression_Literal.fromJSON(object.newValue) : undefined,
    };
  },

  toJSON(message: NAReplace_Replacement): unknown {
    const obj: any = {};
    if (message.oldValue !== undefined) {
      obj.oldValue = Expression_Literal.toJSON(message.oldValue);
    }
    if (message.newValue !== undefined) {
      obj.newValue = Expression_Literal.toJSON(message.newValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NAReplace_Replacement>, I>>(base?: I): NAReplace_Replacement {
    return NAReplace_Replacement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NAReplace_Replacement>, I>>(object: I): NAReplace_Replacement {
    const message = createBaseNAReplace_Replacement();
    message.oldValue = (object.oldValue !== undefined && object.oldValue !== null)
      ? Expression_Literal.fromPartial(object.oldValue)
      : undefined;
    message.newValue = (object.newValue !== undefined && object.newValue !== null)
      ? Expression_Literal.fromPartial(object.newValue)
      : undefined;
    return message;
  },
};

function createBaseToDF(): ToDF {
  return { input: undefined, columnNames: [] };
}

export const ToDF = {
  encode(message: ToDF, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.columnNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToDF {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToDF();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.columnNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ToDF {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      columnNames: globalThis.Array.isArray(object?.columnNames)
        ? object.columnNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ToDF): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.columnNames?.length) {
      obj.columnNames = message.columnNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ToDF>, I>>(base?: I): ToDF {
    return ToDF.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ToDF>, I>>(object: I): ToDF {
    const message = createBaseToDF();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.columnNames = object.columnNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseWithColumnsRenamed(): WithColumnsRenamed {
  return { input: undefined, renameColumnsMap: {} };
}

export const WithColumnsRenamed = {
  encode(message: WithColumnsRenamed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.renameColumnsMap).forEach(([key, value]) => {
      WithColumnsRenamed_RenameColumnsMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithColumnsRenamed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithColumnsRenamed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = WithColumnsRenamed_RenameColumnsMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.renameColumnsMap[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithColumnsRenamed {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      renameColumnsMap: isObject(object.renameColumnsMap)
        ? Object.entries(object.renameColumnsMap).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: WithColumnsRenamed): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.renameColumnsMap) {
      const entries = Object.entries(message.renameColumnsMap);
      if (entries.length > 0) {
        obj.renameColumnsMap = {};
        entries.forEach(([k, v]) => {
          obj.renameColumnsMap[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WithColumnsRenamed>, I>>(base?: I): WithColumnsRenamed {
    return WithColumnsRenamed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WithColumnsRenamed>, I>>(object: I): WithColumnsRenamed {
    const message = createBaseWithColumnsRenamed();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.renameColumnsMap = Object.entries(object.renameColumnsMap ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseWithColumnsRenamed_RenameColumnsMapEntry(): WithColumnsRenamed_RenameColumnsMapEntry {
  return { key: "", value: "" };
}

export const WithColumnsRenamed_RenameColumnsMapEntry = {
  encode(message: WithColumnsRenamed_RenameColumnsMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithColumnsRenamed_RenameColumnsMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithColumnsRenamed_RenameColumnsMapEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithColumnsRenamed_RenameColumnsMapEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: WithColumnsRenamed_RenameColumnsMapEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WithColumnsRenamed_RenameColumnsMapEntry>, I>>(
    base?: I,
  ): WithColumnsRenamed_RenameColumnsMapEntry {
    return WithColumnsRenamed_RenameColumnsMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WithColumnsRenamed_RenameColumnsMapEntry>, I>>(
    object: I,
  ): WithColumnsRenamed_RenameColumnsMapEntry {
    const message = createBaseWithColumnsRenamed_RenameColumnsMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseWithColumns(): WithColumns {
  return { input: undefined, aliases: [] };
}

export const WithColumns = {
  encode(message: WithColumns, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.aliases) {
      Expression_Alias.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithColumns {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithColumns();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aliases.push(Expression_Alias.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithColumns {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      aliases: globalThis.Array.isArray(object?.aliases)
        ? object.aliases.map((e: any) => Expression_Alias.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WithColumns): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.aliases?.length) {
      obj.aliases = message.aliases.map((e) => Expression_Alias.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WithColumns>, I>>(base?: I): WithColumns {
    return WithColumns.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WithColumns>, I>>(object: I): WithColumns {
    const message = createBaseWithColumns();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.aliases = object.aliases?.map((e) => Expression_Alias.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWithWatermark(): WithWatermark {
  return { input: undefined, eventTime: "", delayThreshold: "" };
}

export const WithWatermark = {
  encode(message: WithWatermark, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventTime !== "") {
      writer.uint32(18).string(message.eventTime);
    }
    if (message.delayThreshold !== "") {
      writer.uint32(26).string(message.delayThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithWatermark {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithWatermark();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventTime = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.delayThreshold = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithWatermark {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      eventTime: isSet(object.eventTime) ? globalThis.String(object.eventTime) : "",
      delayThreshold: isSet(object.delayThreshold) ? globalThis.String(object.delayThreshold) : "",
    };
  },

  toJSON(message: WithWatermark): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.eventTime !== "") {
      obj.eventTime = message.eventTime;
    }
    if (message.delayThreshold !== "") {
      obj.delayThreshold = message.delayThreshold;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WithWatermark>, I>>(base?: I): WithWatermark {
    return WithWatermark.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WithWatermark>, I>>(object: I): WithWatermark {
    const message = createBaseWithWatermark();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.eventTime = object.eventTime ?? "";
    message.delayThreshold = object.delayThreshold ?? "";
    return message;
  },
};

function createBaseHint(): Hint {
  return { input: undefined, name: "", parameters: [] };
}

export const Hint = {
  encode(message: Hint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.parameters) {
      Expression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.parameters.push(Expression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Hint {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      parameters: globalThis.Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => Expression.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Hint): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.parameters?.length) {
      obj.parameters = message.parameters.map((e) => Expression.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Hint>, I>>(base?: I): Hint {
    return Hint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Hint>, I>>(object: I): Hint {
    const message = createBaseHint();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.name = object.name ?? "";
    message.parameters = object.parameters?.map((e) => Expression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUnpivot(): Unpivot {
  return { input: undefined, ids: [], values: undefined, variableColumnName: "", valueColumnName: "" };
}

export const Unpivot = {
  encode(message: Unpivot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ids) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.values !== undefined) {
      Unpivot_Values.encode(message.values, writer.uint32(26).fork()).ldelim();
    }
    if (message.variableColumnName !== "") {
      writer.uint32(34).string(message.variableColumnName);
    }
    if (message.valueColumnName !== "") {
      writer.uint32(42).string(message.valueColumnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unpivot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpivot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ids.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.values = Unpivot_Values.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.variableColumnName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.valueColumnName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Unpivot {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      ids: globalThis.Array.isArray(object?.ids) ? object.ids.map((e: any) => Expression.fromJSON(e)) : [],
      values: isSet(object.values) ? Unpivot_Values.fromJSON(object.values) : undefined,
      variableColumnName: isSet(object.variableColumnName) ? globalThis.String(object.variableColumnName) : "",
      valueColumnName: isSet(object.valueColumnName) ? globalThis.String(object.valueColumnName) : "",
    };
  },

  toJSON(message: Unpivot): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.ids?.length) {
      obj.ids = message.ids.map((e) => Expression.toJSON(e));
    }
    if (message.values !== undefined) {
      obj.values = Unpivot_Values.toJSON(message.values);
    }
    if (message.variableColumnName !== "") {
      obj.variableColumnName = message.variableColumnName;
    }
    if (message.valueColumnName !== "") {
      obj.valueColumnName = message.valueColumnName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Unpivot>, I>>(base?: I): Unpivot {
    return Unpivot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Unpivot>, I>>(object: I): Unpivot {
    const message = createBaseUnpivot();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.ids = object.ids?.map((e) => Expression.fromPartial(e)) || [];
    message.values = (object.values !== undefined && object.values !== null)
      ? Unpivot_Values.fromPartial(object.values)
      : undefined;
    message.variableColumnName = object.variableColumnName ?? "";
    message.valueColumnName = object.valueColumnName ?? "";
    return message;
  },
};

function createBaseUnpivot_Values(): Unpivot_Values {
  return { values: [] };
}

export const Unpivot_Values = {
  encode(message: Unpivot_Values, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Expression.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unpivot_Values {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpivot_Values();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(Expression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Unpivot_Values {
    return {
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => Expression.fromJSON(e)) : [],
    };
  },

  toJSON(message: Unpivot_Values): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values.map((e) => Expression.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Unpivot_Values>, I>>(base?: I): Unpivot_Values {
    return Unpivot_Values.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Unpivot_Values>, I>>(object: I): Unpivot_Values {
    const message = createBaseUnpivot_Values();
    message.values = object.values?.map((e) => Expression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseToSchema(): ToSchema {
  return { input: undefined, schema: undefined };
}

export const ToSchema = {
  encode(message: ToSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.schema !== undefined) {
      DataType.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToSchema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = DataType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ToSchema {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      schema: isSet(object.schema) ? DataType.fromJSON(object.schema) : undefined,
    };
  },

  toJSON(message: ToSchema): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.schema !== undefined) {
      obj.schema = DataType.toJSON(message.schema);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ToSchema>, I>>(base?: I): ToSchema {
    return ToSchema.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ToSchema>, I>>(object: I): ToSchema {
    const message = createBaseToSchema();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? DataType.fromPartial(object.schema)
      : undefined;
    return message;
  },
};

function createBaseRepartitionByExpression(): RepartitionByExpression {
  return { input: undefined, partitionExprs: [], numPartitions: undefined };
}

export const RepartitionByExpression = {
  encode(message: RepartitionByExpression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.partitionExprs) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.numPartitions !== undefined) {
      writer.uint32(24).int32(message.numPartitions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepartitionByExpression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepartitionByExpression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.partitionExprs.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numPartitions = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RepartitionByExpression {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      partitionExprs: globalThis.Array.isArray(object?.partitionExprs)
        ? object.partitionExprs.map((e: any) => Expression.fromJSON(e))
        : [],
      numPartitions: isSet(object.numPartitions) ? globalThis.Number(object.numPartitions) : undefined,
    };
  },

  toJSON(message: RepartitionByExpression): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.partitionExprs?.length) {
      obj.partitionExprs = message.partitionExprs.map((e) => Expression.toJSON(e));
    }
    if (message.numPartitions !== undefined) {
      obj.numPartitions = Math.round(message.numPartitions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RepartitionByExpression>, I>>(base?: I): RepartitionByExpression {
    return RepartitionByExpression.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RepartitionByExpression>, I>>(object: I): RepartitionByExpression {
    const message = createBaseRepartitionByExpression();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.partitionExprs = object.partitionExprs?.map((e) => Expression.fromPartial(e)) || [];
    message.numPartitions = object.numPartitions ?? undefined;
    return message;
  },
};

function createBaseMapPartitions(): MapPartitions {
  return { input: undefined, func: undefined, isBarrier: undefined };
}

export const MapPartitions = {
  encode(message: MapPartitions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.func !== undefined) {
      CommonInlineUserDefinedFunction.encode(message.func, writer.uint32(18).fork()).ldelim();
    }
    if (message.isBarrier !== undefined) {
      writer.uint32(24).bool(message.isBarrier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapPartitions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapPartitions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.func = CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isBarrier = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapPartitions {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      func: isSet(object.func) ? CommonInlineUserDefinedFunction.fromJSON(object.func) : undefined,
      isBarrier: isSet(object.isBarrier) ? globalThis.Boolean(object.isBarrier) : undefined,
    };
  },

  toJSON(message: MapPartitions): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.func !== undefined) {
      obj.func = CommonInlineUserDefinedFunction.toJSON(message.func);
    }
    if (message.isBarrier !== undefined) {
      obj.isBarrier = message.isBarrier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapPartitions>, I>>(base?: I): MapPartitions {
    return MapPartitions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapPartitions>, I>>(object: I): MapPartitions {
    const message = createBaseMapPartitions();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.func = (object.func !== undefined && object.func !== null)
      ? CommonInlineUserDefinedFunction.fromPartial(object.func)
      : undefined;
    message.isBarrier = object.isBarrier ?? undefined;
    return message;
  },
};

function createBaseGroupMap(): GroupMap {
  return {
    input: undefined,
    groupingExpressions: [],
    func: undefined,
    sortingExpressions: [],
    initialInput: undefined,
    initialGroupingExpressions: [],
    isMapGroupsWithState: undefined,
    outputMode: undefined,
    timeoutConf: undefined,
  };
}

export const GroupMap = {
  encode(message: GroupMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groupingExpressions) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.func !== undefined) {
      CommonInlineUserDefinedFunction.encode(message.func, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sortingExpressions) {
      Expression.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.initialInput !== undefined) {
      Relation.encode(message.initialInput, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.initialGroupingExpressions) {
      Expression.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.isMapGroupsWithState !== undefined) {
      writer.uint32(56).bool(message.isMapGroupsWithState);
    }
    if (message.outputMode !== undefined) {
      writer.uint32(66).string(message.outputMode);
    }
    if (message.timeoutConf !== undefined) {
      writer.uint32(74).string(message.timeoutConf);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groupingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.func = CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sortingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialInput = Relation.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.initialGroupingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isMapGroupsWithState = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.outputMode = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.timeoutConf = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupMap {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      groupingExpressions: globalThis.Array.isArray(object?.groupingExpressions)
        ? object.groupingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      func: isSet(object.func) ? CommonInlineUserDefinedFunction.fromJSON(object.func) : undefined,
      sortingExpressions: globalThis.Array.isArray(object?.sortingExpressions)
        ? object.sortingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      initialInput: isSet(object.initialInput) ? Relation.fromJSON(object.initialInput) : undefined,
      initialGroupingExpressions: globalThis.Array.isArray(object?.initialGroupingExpressions)
        ? object.initialGroupingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      isMapGroupsWithState: isSet(object.isMapGroupsWithState)
        ? globalThis.Boolean(object.isMapGroupsWithState)
        : undefined,
      outputMode: isSet(object.outputMode) ? globalThis.String(object.outputMode) : undefined,
      timeoutConf: isSet(object.timeoutConf) ? globalThis.String(object.timeoutConf) : undefined,
    };
  },

  toJSON(message: GroupMap): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.groupingExpressions?.length) {
      obj.groupingExpressions = message.groupingExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.func !== undefined) {
      obj.func = CommonInlineUserDefinedFunction.toJSON(message.func);
    }
    if (message.sortingExpressions?.length) {
      obj.sortingExpressions = message.sortingExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.initialInput !== undefined) {
      obj.initialInput = Relation.toJSON(message.initialInput);
    }
    if (message.initialGroupingExpressions?.length) {
      obj.initialGroupingExpressions = message.initialGroupingExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.isMapGroupsWithState !== undefined) {
      obj.isMapGroupsWithState = message.isMapGroupsWithState;
    }
    if (message.outputMode !== undefined) {
      obj.outputMode = message.outputMode;
    }
    if (message.timeoutConf !== undefined) {
      obj.timeoutConf = message.timeoutConf;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupMap>, I>>(base?: I): GroupMap {
    return GroupMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupMap>, I>>(object: I): GroupMap {
    const message = createBaseGroupMap();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.groupingExpressions = object.groupingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.func = (object.func !== undefined && object.func !== null)
      ? CommonInlineUserDefinedFunction.fromPartial(object.func)
      : undefined;
    message.sortingExpressions = object.sortingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.initialInput = (object.initialInput !== undefined && object.initialInput !== null)
      ? Relation.fromPartial(object.initialInput)
      : undefined;
    message.initialGroupingExpressions = object.initialGroupingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.isMapGroupsWithState = object.isMapGroupsWithState ?? undefined;
    message.outputMode = object.outputMode ?? undefined;
    message.timeoutConf = object.timeoutConf ?? undefined;
    return message;
  },
};

function createBaseCoGroupMap(): CoGroupMap {
  return {
    input: undefined,
    inputGroupingExpressions: [],
    other: undefined,
    otherGroupingExpressions: [],
    func: undefined,
    inputSortingExpressions: [],
    otherSortingExpressions: [],
  };
}

export const CoGroupMap = {
  encode(message: CoGroupMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.inputGroupingExpressions) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.other !== undefined) {
      Relation.encode(message.other, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.otherGroupingExpressions) {
      Expression.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.func !== undefined) {
      CommonInlineUserDefinedFunction.encode(message.func, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.inputSortingExpressions) {
      Expression.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.otherSortingExpressions) {
      Expression.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoGroupMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoGroupMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inputGroupingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.other = Relation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.otherGroupingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.func = CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.inputSortingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.otherSortingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoGroupMap {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      inputGroupingExpressions: globalThis.Array.isArray(object?.inputGroupingExpressions)
        ? object.inputGroupingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      other: isSet(object.other) ? Relation.fromJSON(object.other) : undefined,
      otherGroupingExpressions: globalThis.Array.isArray(object?.otherGroupingExpressions)
        ? object.otherGroupingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      func: isSet(object.func) ? CommonInlineUserDefinedFunction.fromJSON(object.func) : undefined,
      inputSortingExpressions: globalThis.Array.isArray(object?.inputSortingExpressions)
        ? object.inputSortingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      otherSortingExpressions: globalThis.Array.isArray(object?.otherSortingExpressions)
        ? object.otherSortingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CoGroupMap): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.inputGroupingExpressions?.length) {
      obj.inputGroupingExpressions = message.inputGroupingExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.other !== undefined) {
      obj.other = Relation.toJSON(message.other);
    }
    if (message.otherGroupingExpressions?.length) {
      obj.otherGroupingExpressions = message.otherGroupingExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.func !== undefined) {
      obj.func = CommonInlineUserDefinedFunction.toJSON(message.func);
    }
    if (message.inputSortingExpressions?.length) {
      obj.inputSortingExpressions = message.inputSortingExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.otherSortingExpressions?.length) {
      obj.otherSortingExpressions = message.otherSortingExpressions.map((e) => Expression.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CoGroupMap>, I>>(base?: I): CoGroupMap {
    return CoGroupMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CoGroupMap>, I>>(object: I): CoGroupMap {
    const message = createBaseCoGroupMap();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.inputGroupingExpressions = object.inputGroupingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.other = (object.other !== undefined && object.other !== null)
      ? Relation.fromPartial(object.other)
      : undefined;
    message.otherGroupingExpressions = object.otherGroupingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.func = (object.func !== undefined && object.func !== null)
      ? CommonInlineUserDefinedFunction.fromPartial(object.func)
      : undefined;
    message.inputSortingExpressions = object.inputSortingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.otherSortingExpressions = object.otherSortingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseApplyInPandasWithState(): ApplyInPandasWithState {
  return {
    input: undefined,
    groupingExpressions: [],
    func: undefined,
    outputSchema: "",
    stateSchema: "",
    outputMode: "",
    timeoutConf: "",
  };
}

export const ApplyInPandasWithState = {
  encode(message: ApplyInPandasWithState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groupingExpressions) {
      Expression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.func !== undefined) {
      CommonInlineUserDefinedFunction.encode(message.func, writer.uint32(26).fork()).ldelim();
    }
    if (message.outputSchema !== "") {
      writer.uint32(34).string(message.outputSchema);
    }
    if (message.stateSchema !== "") {
      writer.uint32(42).string(message.stateSchema);
    }
    if (message.outputMode !== "") {
      writer.uint32(50).string(message.outputMode);
    }
    if (message.timeoutConf !== "") {
      writer.uint32(58).string(message.timeoutConf);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplyInPandasWithState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplyInPandasWithState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groupingExpressions.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.func = CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.outputSchema = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stateSchema = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.outputMode = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.timeoutConf = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplyInPandasWithState {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      groupingExpressions: globalThis.Array.isArray(object?.groupingExpressions)
        ? object.groupingExpressions.map((e: any) => Expression.fromJSON(e))
        : [],
      func: isSet(object.func) ? CommonInlineUserDefinedFunction.fromJSON(object.func) : undefined,
      outputSchema: isSet(object.outputSchema) ? globalThis.String(object.outputSchema) : "",
      stateSchema: isSet(object.stateSchema) ? globalThis.String(object.stateSchema) : "",
      outputMode: isSet(object.outputMode) ? globalThis.String(object.outputMode) : "",
      timeoutConf: isSet(object.timeoutConf) ? globalThis.String(object.timeoutConf) : "",
    };
  },

  toJSON(message: ApplyInPandasWithState): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.groupingExpressions?.length) {
      obj.groupingExpressions = message.groupingExpressions.map((e) => Expression.toJSON(e));
    }
    if (message.func !== undefined) {
      obj.func = CommonInlineUserDefinedFunction.toJSON(message.func);
    }
    if (message.outputSchema !== "") {
      obj.outputSchema = message.outputSchema;
    }
    if (message.stateSchema !== "") {
      obj.stateSchema = message.stateSchema;
    }
    if (message.outputMode !== "") {
      obj.outputMode = message.outputMode;
    }
    if (message.timeoutConf !== "") {
      obj.timeoutConf = message.timeoutConf;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplyInPandasWithState>, I>>(base?: I): ApplyInPandasWithState {
    return ApplyInPandasWithState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApplyInPandasWithState>, I>>(object: I): ApplyInPandasWithState {
    const message = createBaseApplyInPandasWithState();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.groupingExpressions = object.groupingExpressions?.map((e) => Expression.fromPartial(e)) || [];
    message.func = (object.func !== undefined && object.func !== null)
      ? CommonInlineUserDefinedFunction.fromPartial(object.func)
      : undefined;
    message.outputSchema = object.outputSchema ?? "";
    message.stateSchema = object.stateSchema ?? "";
    message.outputMode = object.outputMode ?? "";
    message.timeoutConf = object.timeoutConf ?? "";
    return message;
  },
};

function createBaseCommonInlineUserDefinedTableFunction(): CommonInlineUserDefinedTableFunction {
  return { functionName: "", deterministic: false, arguments: [], pythonUdtf: undefined };
}

export const CommonInlineUserDefinedTableFunction = {
  encode(message: CommonInlineUserDefinedTableFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionName !== "") {
      writer.uint32(10).string(message.functionName);
    }
    if (message.deterministic === true) {
      writer.uint32(16).bool(message.deterministic);
    }
    for (const v of message.arguments) {
      Expression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pythonUdtf !== undefined) {
      PythonUDTF.encode(message.pythonUdtf, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommonInlineUserDefinedTableFunction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommonInlineUserDefinedTableFunction();
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

          message.pythonUdtf = PythonUDTF.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommonInlineUserDefinedTableFunction {
    return {
      functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
      deterministic: isSet(object.deterministic) ? globalThis.Boolean(object.deterministic) : false,
      arguments: globalThis.Array.isArray(object?.arguments)
        ? object.arguments.map((e: any) => Expression.fromJSON(e))
        : [],
      pythonUdtf: isSet(object.pythonUdtf) ? PythonUDTF.fromJSON(object.pythonUdtf) : undefined,
    };
  },

  toJSON(message: CommonInlineUserDefinedTableFunction): unknown {
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
    if (message.pythonUdtf !== undefined) {
      obj.pythonUdtf = PythonUDTF.toJSON(message.pythonUdtf);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommonInlineUserDefinedTableFunction>, I>>(
    base?: I,
  ): CommonInlineUserDefinedTableFunction {
    return CommonInlineUserDefinedTableFunction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommonInlineUserDefinedTableFunction>, I>>(
    object: I,
  ): CommonInlineUserDefinedTableFunction {
    const message = createBaseCommonInlineUserDefinedTableFunction();
    message.functionName = object.functionName ?? "";
    message.deterministic = object.deterministic ?? false;
    message.arguments = object.arguments?.map((e) => Expression.fromPartial(e)) || [];
    message.pythonUdtf = (object.pythonUdtf !== undefined && object.pythonUdtf !== null)
      ? PythonUDTF.fromPartial(object.pythonUdtf)
      : undefined;
    return message;
  },
};

function createBasePythonUDTF(): PythonUDTF {
  return { returnType: undefined, evalType: 0, command: new Uint8Array(0), pythonVer: "" };
}

export const PythonUDTF = {
  encode(message: PythonUDTF, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.returnType !== undefined) {
      DataType.encode(message.returnType, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PythonUDTF {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePythonUDTF();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.returnType = DataType.decode(reader, reader.uint32());
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

  fromJSON(object: any): PythonUDTF {
    return {
      returnType: isSet(object.returnType) ? DataType.fromJSON(object.returnType) : undefined,
      evalType: isSet(object.evalType) ? globalThis.Number(object.evalType) : 0,
      command: isSet(object.command) ? bytesFromBase64(object.command) : new Uint8Array(0),
      pythonVer: isSet(object.pythonVer) ? globalThis.String(object.pythonVer) : "",
    };
  },

  toJSON(message: PythonUDTF): unknown {
    const obj: any = {};
    if (message.returnType !== undefined) {
      obj.returnType = DataType.toJSON(message.returnType);
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

  create<I extends Exact<DeepPartial<PythonUDTF>, I>>(base?: I): PythonUDTF {
    return PythonUDTF.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PythonUDTF>, I>>(object: I): PythonUDTF {
    const message = createBasePythonUDTF();
    message.returnType = (object.returnType !== undefined && object.returnType !== null)
      ? DataType.fromPartial(object.returnType)
      : undefined;
    message.evalType = object.evalType ?? 0;
    message.command = object.command ?? new Uint8Array(0);
    message.pythonVer = object.pythonVer ?? "";
    return message;
  },
};

function createBaseCollectMetrics(): CollectMetrics {
  return { input: undefined, name: "", metrics: [] };
}

export const CollectMetrics = {
  encode(message: CollectMetrics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.metrics) {
      Expression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectMetrics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metrics.push(Expression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CollectMetrics {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      metrics: globalThis.Array.isArray(object?.metrics) ? object.metrics.map((e: any) => Expression.fromJSON(e)) : [],
    };
  },

  toJSON(message: CollectMetrics): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.metrics?.length) {
      obj.metrics = message.metrics.map((e) => Expression.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollectMetrics>, I>>(base?: I): CollectMetrics {
    return CollectMetrics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollectMetrics>, I>>(object: I): CollectMetrics {
    const message = createBaseCollectMetrics();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.name = object.name ?? "";
    message.metrics = object.metrics?.map((e) => Expression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParse(): Parse {
  return { input: undefined, format: 0, schema: undefined, options: {} };
}

export const Parse = {
  encode(message: Parse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.format !== 0) {
      writer.uint32(16).int32(message.format);
    }
    if (message.schema !== undefined) {
      DataType.encode(message.schema, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.options).forEach(([key, value]) => {
      Parse_OptionsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.schema = DataType.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Parse_OptionsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.options[entry4.key] = entry4.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Parse {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      format: isSet(object.format) ? parse_ParseFormatFromJSON(object.format) : 0,
      schema: isSet(object.schema) ? DataType.fromJSON(object.schema) : undefined,
      options: isObject(object.options)
        ? Object.entries(object.options).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Parse): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.format !== 0) {
      obj.format = parse_ParseFormatToJSON(message.format);
    }
    if (message.schema !== undefined) {
      obj.schema = DataType.toJSON(message.schema);
    }
    if (message.options) {
      const entries = Object.entries(message.options);
      if (entries.length > 0) {
        obj.options = {};
        entries.forEach(([k, v]) => {
          obj.options[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Parse>, I>>(base?: I): Parse {
    return Parse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Parse>, I>>(object: I): Parse {
    const message = createBaseParse();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.format = object.format ?? 0;
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? DataType.fromPartial(object.schema)
      : undefined;
    message.options = Object.entries(object.options ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseParse_OptionsEntry(): Parse_OptionsEntry {
  return { key: "", value: "" };
}

export const Parse_OptionsEntry = {
  encode(message: Parse_OptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parse_OptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParse_OptionsEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Parse_OptionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Parse_OptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Parse_OptionsEntry>, I>>(base?: I): Parse_OptionsEntry {
    return Parse_OptionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Parse_OptionsEntry>, I>>(object: I): Parse_OptionsEntry {
    const message = createBaseParse_OptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
