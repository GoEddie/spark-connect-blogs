/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { ResourceInformation } from "./common";
import {
  CommonInlineUserDefinedFunction,
  Expression,
  Expression_Literal,
  PythonUDF,
  ScalarScalaUDF,
} from "./expressions";
import { CommonInlineUserDefinedTableFunction, Relation } from "./relations";
import Long = require("long");

export const protobufPackage = "spark.connect";

/**
 * A [[Command]] is an operation that is executed by the server that does not directly consume or
 * produce a relational result.
 */
export interface Command {
  registerFunction?: CommonInlineUserDefinedFunction | undefined;
  writeOperation?: WriteOperation | undefined;
  createDataframeView?: CreateDataFrameViewCommand | undefined;
  writeOperationV2?: WriteOperationV2 | undefined;
  sqlCommand?: SqlCommand | undefined;
  writeStreamOperationStart?: WriteStreamOperationStart | undefined;
  streamingQueryCommand?: StreamingQueryCommand | undefined;
  getResourcesCommand?: GetResourcesCommand | undefined;
  streamingQueryManagerCommand?: StreamingQueryManagerCommand | undefined;
  registerTableFunction?:
    | CommonInlineUserDefinedTableFunction
    | undefined;
  /**
   * This field is used to mark extensions to the protocol. When plugins generate arbitrary
   * Commands they can add them here. During the planning the correct resolution is done.
   */
  extension?: Any | undefined;
}

/**
 * A SQL Command is used to trigger the eager evaluation of SQL commands in Spark.
 *
 * When the SQL provide as part of the message is a command it will be immediately evaluated
 * and the result will be collected and returned as part of a LocalRelation. If the result is
 * not a command, the operation will simply return a SQL Relation. This allows the client to be
 * almost oblivious to the server-side behavior.
 */
export interface SqlCommand {
  /** (Required) SQL Query. */
  sql: string;
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

export interface SqlCommand_ArgsEntry {
  key: string;
  value: Expression_Literal | undefined;
}

export interface SqlCommand_NamedArgumentsEntry {
  key: string;
  value: Expression | undefined;
}

/** A command that can create DataFrame global temp view or local temp view. */
export interface CreateDataFrameViewCommand {
  /** (Required) The relation that this view will be built on. */
  input:
    | Relation
    | undefined;
  /** (Required) View name. */
  name: string;
  /** (Required) Whether this is global temp view or local temp view. */
  isGlobal: boolean;
  /**
   * (Required)
   *
   * If true, and if the view already exists, updates it; if false, and if the view
   * already exists, throws exception.
   */
  replace: boolean;
}

/** As writes are not directly handled during analysis and planning, they are modeled as commands. */
export interface WriteOperation {
  /** (Required) The output of the `input` relation will be persisted according to the options. */
  input:
    | Relation
    | undefined;
  /** (Optional) Format value according to the Spark documentation. Examples are: text, parquet, delta. */
  source?: string | undefined;
  path?: string | undefined;
  table?:
    | WriteOperation_SaveTable
    | undefined;
  /** (Required) the save mode. */
  mode: WriteOperation_SaveMode;
  /** (Optional) List of columns to sort the output by. */
  sortColumnNames: string[];
  /** (Optional) List of columns for partitioning. */
  partitioningColumns: string[];
  /**
   * (Optional) Bucketing specification. Bucketing must set the number of buckets and the columns
   * to bucket by.
   */
  bucketBy:
    | WriteOperation_BucketBy
    | undefined;
  /** (Optional) A list of configuration options. */
  options: { [key: string]: string };
}

export enum WriteOperation_SaveMode {
  SAVE_MODE_UNSPECIFIED = 0,
  SAVE_MODE_APPEND = 1,
  SAVE_MODE_OVERWRITE = 2,
  SAVE_MODE_ERROR_IF_EXISTS = 3,
  SAVE_MODE_IGNORE = 4,
  UNRECOGNIZED = -1,
}

export function writeOperation_SaveModeFromJSON(object: any): WriteOperation_SaveMode {
  switch (object) {
    case 0:
    case "SAVE_MODE_UNSPECIFIED":
      return WriteOperation_SaveMode.SAVE_MODE_UNSPECIFIED;
    case 1:
    case "SAVE_MODE_APPEND":
      return WriteOperation_SaveMode.SAVE_MODE_APPEND;
    case 2:
    case "SAVE_MODE_OVERWRITE":
      return WriteOperation_SaveMode.SAVE_MODE_OVERWRITE;
    case 3:
    case "SAVE_MODE_ERROR_IF_EXISTS":
      return WriteOperation_SaveMode.SAVE_MODE_ERROR_IF_EXISTS;
    case 4:
    case "SAVE_MODE_IGNORE":
      return WriteOperation_SaveMode.SAVE_MODE_IGNORE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WriteOperation_SaveMode.UNRECOGNIZED;
  }
}

export function writeOperation_SaveModeToJSON(object: WriteOperation_SaveMode): string {
  switch (object) {
    case WriteOperation_SaveMode.SAVE_MODE_UNSPECIFIED:
      return "SAVE_MODE_UNSPECIFIED";
    case WriteOperation_SaveMode.SAVE_MODE_APPEND:
      return "SAVE_MODE_APPEND";
    case WriteOperation_SaveMode.SAVE_MODE_OVERWRITE:
      return "SAVE_MODE_OVERWRITE";
    case WriteOperation_SaveMode.SAVE_MODE_ERROR_IF_EXISTS:
      return "SAVE_MODE_ERROR_IF_EXISTS";
    case WriteOperation_SaveMode.SAVE_MODE_IGNORE:
      return "SAVE_MODE_IGNORE";
    case WriteOperation_SaveMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface WriteOperation_OptionsEntry {
  key: string;
  value: string;
}

export interface WriteOperation_SaveTable {
  /** (Required) The table name. */
  tableName: string;
  /** (Required) The method to be called to write to the table. */
  saveMethod: WriteOperation_SaveTable_TableSaveMethod;
}

export enum WriteOperation_SaveTable_TableSaveMethod {
  TABLE_SAVE_METHOD_UNSPECIFIED = 0,
  TABLE_SAVE_METHOD_SAVE_AS_TABLE = 1,
  TABLE_SAVE_METHOD_INSERT_INTO = 2,
  UNRECOGNIZED = -1,
}

export function writeOperation_SaveTable_TableSaveMethodFromJSON(
  object: any,
): WriteOperation_SaveTable_TableSaveMethod {
  switch (object) {
    case 0:
    case "TABLE_SAVE_METHOD_UNSPECIFIED":
      return WriteOperation_SaveTable_TableSaveMethod.TABLE_SAVE_METHOD_UNSPECIFIED;
    case 1:
    case "TABLE_SAVE_METHOD_SAVE_AS_TABLE":
      return WriteOperation_SaveTable_TableSaveMethod.TABLE_SAVE_METHOD_SAVE_AS_TABLE;
    case 2:
    case "TABLE_SAVE_METHOD_INSERT_INTO":
      return WriteOperation_SaveTable_TableSaveMethod.TABLE_SAVE_METHOD_INSERT_INTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WriteOperation_SaveTable_TableSaveMethod.UNRECOGNIZED;
  }
}

export function writeOperation_SaveTable_TableSaveMethodToJSON(
  object: WriteOperation_SaveTable_TableSaveMethod,
): string {
  switch (object) {
    case WriteOperation_SaveTable_TableSaveMethod.TABLE_SAVE_METHOD_UNSPECIFIED:
      return "TABLE_SAVE_METHOD_UNSPECIFIED";
    case WriteOperation_SaveTable_TableSaveMethod.TABLE_SAVE_METHOD_SAVE_AS_TABLE:
      return "TABLE_SAVE_METHOD_SAVE_AS_TABLE";
    case WriteOperation_SaveTable_TableSaveMethod.TABLE_SAVE_METHOD_INSERT_INTO:
      return "TABLE_SAVE_METHOD_INSERT_INTO";
    case WriteOperation_SaveTable_TableSaveMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface WriteOperation_BucketBy {
  bucketColumnNames: string[];
  numBuckets: number;
}

/** As writes are not directly handled during analysis and planning, they are modeled as commands. */
export interface WriteOperationV2 {
  /** (Required) The output of the `input` relation will be persisted according to the options. */
  input:
    | Relation
    | undefined;
  /** (Required) The destination of the write operation must be either a path or a table. */
  tableName: string;
  /**
   * (Optional) A provider for the underlying output data source. Spark's default catalog supports
   * "parquet", "json", etc.
   */
  provider?:
    | string
    | undefined;
  /**
   * (Optional) List of columns for partitioning for output table created by `create`,
   * `createOrReplace`, or `replace`
   */
  partitioningColumns: Expression[];
  /** (Optional) A list of configuration options. */
  options: { [key: string]: string };
  /** (Optional) A list of table properties. */
  tableProperties: { [key: string]: string };
  /** (Required) Write mode. */
  mode: WriteOperationV2_Mode;
  /** (Optional) A condition for overwrite saving mode */
  overwriteCondition: Expression | undefined;
}

export enum WriteOperationV2_Mode {
  MODE_UNSPECIFIED = 0,
  MODE_CREATE = 1,
  MODE_OVERWRITE = 2,
  MODE_OVERWRITE_PARTITIONS = 3,
  MODE_APPEND = 4,
  MODE_REPLACE = 5,
  MODE_CREATE_OR_REPLACE = 6,
  UNRECOGNIZED = -1,
}

export function writeOperationV2_ModeFromJSON(object: any): WriteOperationV2_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return WriteOperationV2_Mode.MODE_UNSPECIFIED;
    case 1:
    case "MODE_CREATE":
      return WriteOperationV2_Mode.MODE_CREATE;
    case 2:
    case "MODE_OVERWRITE":
      return WriteOperationV2_Mode.MODE_OVERWRITE;
    case 3:
    case "MODE_OVERWRITE_PARTITIONS":
      return WriteOperationV2_Mode.MODE_OVERWRITE_PARTITIONS;
    case 4:
    case "MODE_APPEND":
      return WriteOperationV2_Mode.MODE_APPEND;
    case 5:
    case "MODE_REPLACE":
      return WriteOperationV2_Mode.MODE_REPLACE;
    case 6:
    case "MODE_CREATE_OR_REPLACE":
      return WriteOperationV2_Mode.MODE_CREATE_OR_REPLACE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WriteOperationV2_Mode.UNRECOGNIZED;
  }
}

export function writeOperationV2_ModeToJSON(object: WriteOperationV2_Mode): string {
  switch (object) {
    case WriteOperationV2_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case WriteOperationV2_Mode.MODE_CREATE:
      return "MODE_CREATE";
    case WriteOperationV2_Mode.MODE_OVERWRITE:
      return "MODE_OVERWRITE";
    case WriteOperationV2_Mode.MODE_OVERWRITE_PARTITIONS:
      return "MODE_OVERWRITE_PARTITIONS";
    case WriteOperationV2_Mode.MODE_APPEND:
      return "MODE_APPEND";
    case WriteOperationV2_Mode.MODE_REPLACE:
      return "MODE_REPLACE";
    case WriteOperationV2_Mode.MODE_CREATE_OR_REPLACE:
      return "MODE_CREATE_OR_REPLACE";
    case WriteOperationV2_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface WriteOperationV2_OptionsEntry {
  key: string;
  value: string;
}

export interface WriteOperationV2_TablePropertiesEntry {
  key: string;
  value: string;
}

/**
 * Starts write stream operation as streaming query. Query ID and Run ID of the streaming
 * query are returned.
 */
export interface WriteStreamOperationStart {
  /** (Required) The output of the `input` streaming relation will be written. */
  input: Relation | undefined;
  format: string;
  options: { [key: string]: string };
  partitioningColumnNames: string[];
  processingTimeInterval?: string | undefined;
  availableNow?: boolean | undefined;
  once?: boolean | undefined;
  continuousCheckpointInterval?: string | undefined;
  outputMode: string;
  queryName: string;
  path?: string | undefined;
  tableName?: string | undefined;
  foreachWriter: StreamingForeachFunction | undefined;
  foreachBatch: StreamingForeachFunction | undefined;
}

export interface WriteStreamOperationStart_OptionsEntry {
  key: string;
  value: string;
}

export interface StreamingForeachFunction {
  pythonFunction?: PythonUDF | undefined;
  scalaFunction?: ScalarScalaUDF | undefined;
}

export interface WriteStreamOperationStartResult {
  /** (Required) Query instance. See `StreamingQueryInstanceId`. */
  queryId:
    | StreamingQueryInstanceId
    | undefined;
  /** An optional query name. */
  name: string;
}

/**
 * A tuple that uniquely identifies an instance of streaming query run. It consists of `id` that
 * persists across the streaming runs and `run_id` that changes between each run of the
 * streaming query that resumes from the checkpoint.
 */
export interface StreamingQueryInstanceId {
  /**
   * (Required) The unique id of this query that persists across restarts from checkpoint data.
   * That is, this id is generated when a query is started for the first time, and
   * will be the same every time it is restarted from checkpoint data.
   */
  id: string;
  /**
   * (Required) The unique id of this run of the query. That is, every start/restart of a query
   * will generate a unique run_id. Therefore, every time a query is restarted from
   * checkpoint, it will have the same `id` but different `run_id`s.
   */
  runId: string;
}

/** Commands for a streaming query. */
export interface StreamingQueryCommand {
  /** (Required) Query instance. See `StreamingQueryInstanceId`. */
  queryId:
    | StreamingQueryInstanceId
    | undefined;
  /** status() API. */
  status?:
    | boolean
    | undefined;
  /** lastProgress() API. */
  lastProgress?:
    | boolean
    | undefined;
  /** recentProgress() API. */
  recentProgress?:
    | boolean
    | undefined;
  /** stop() API. Stops the query. */
  stop?:
    | boolean
    | undefined;
  /** processAllAvailable() API. Waits till all the available data is processed */
  processAllAvailable?:
    | boolean
    | undefined;
  /** explain() API. Returns logical and physical plans. */
  explain?:
    | StreamingQueryCommand_ExplainCommand
    | undefined;
  /** exception() API. Returns the exception in the query if any. */
  exception?:
    | boolean
    | undefined;
  /** awaitTermination() API. Waits for the termination of the query. */
  awaitTermination?: StreamingQueryCommand_AwaitTerminationCommand | undefined;
}

export interface StreamingQueryCommand_ExplainCommand {
  /**
   * TODO: Consider reusing Explain from AnalyzePlanRequest message.
   *       We can not do this right now since it base.proto imports this file.
   */
  extended: boolean;
}

export interface StreamingQueryCommand_AwaitTerminationCommand {
  timeoutMs?: number | undefined;
}

/** Response for commands on a streaming query. */
export interface StreamingQueryCommandResult {
  /** (Required) Query instance id. See `StreamingQueryInstanceId`. */
  queryId: StreamingQueryInstanceId | undefined;
  status?: StreamingQueryCommandResult_StatusResult | undefined;
  recentProgress?: StreamingQueryCommandResult_RecentProgressResult | undefined;
  explain?: StreamingQueryCommandResult_ExplainResult | undefined;
  exception?: StreamingQueryCommandResult_ExceptionResult | undefined;
  awaitTermination?: StreamingQueryCommandResult_AwaitTerminationResult | undefined;
}

export interface StreamingQueryCommandResult_StatusResult {
  /** See documentation for these Scala 'StreamingQueryStatus' struct */
  statusMessage: string;
  isDataAvailable: boolean;
  isTriggerActive: boolean;
  isActive: boolean;
}

export interface StreamingQueryCommandResult_RecentProgressResult {
  /** Progress reports as an array of json strings. */
  recentProgressJson: string[];
}

export interface StreamingQueryCommandResult_ExplainResult {
  /** Logical and physical plans as string */
  result: string;
}

export interface StreamingQueryCommandResult_ExceptionResult {
  /**
   * (Optional) Exception message as string, maps to the return value of original
   * StreamingQueryException's toString method
   */
  exceptionMessage?:
    | string
    | undefined;
  /** (Optional) Exception error class as string */
  errorClass?:
    | string
    | undefined;
  /** (Optional) Exception stack trace as string */
  stackTrace?: string | undefined;
}

export interface StreamingQueryCommandResult_AwaitTerminationResult {
  terminated: boolean;
}

/** Commands for the streaming query manager. */
export interface StreamingQueryManagerCommand {
  /** active() API, returns a list of active queries. */
  active?:
    | boolean
    | undefined;
  /** get() API, returns the StreamingQuery identified by id. */
  getQuery?:
    | string
    | undefined;
  /** awaitAnyTermination() API, wait until any query terminates or timeout. */
  awaitAnyTermination?:
    | StreamingQueryManagerCommand_AwaitAnyTerminationCommand
    | undefined;
  /** resetTerminated() API. */
  resetTerminated?:
    | boolean
    | undefined;
  /** addListener API. */
  addListener?:
    | StreamingQueryManagerCommand_StreamingQueryListenerCommand
    | undefined;
  /** removeListener API. */
  removeListener?:
    | StreamingQueryManagerCommand_StreamingQueryListenerCommand
    | undefined;
  /** listListeners() API, returns a list of streaming query listeners. */
  listListeners?: boolean | undefined;
}

export interface StreamingQueryManagerCommand_AwaitAnyTerminationCommand {
  /** (Optional) The waiting time in milliseconds to wait for any query to terminate. */
  timeoutMs?: number | undefined;
}

export interface StreamingQueryManagerCommand_StreamingQueryListenerCommand {
  listenerPayload: Uint8Array;
  pythonListenerPayload?: PythonUDF | undefined;
  id: string;
}

/** Response for commands on the streaming query manager. */
export interface StreamingQueryManagerCommandResult {
  active?: StreamingQueryManagerCommandResult_ActiveResult | undefined;
  query?: StreamingQueryManagerCommandResult_StreamingQueryInstance | undefined;
  awaitAnyTermination?: StreamingQueryManagerCommandResult_AwaitAnyTerminationResult | undefined;
  resetTerminated?: boolean | undefined;
  addListener?: boolean | undefined;
  removeListener?: boolean | undefined;
  listListeners?: StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult | undefined;
}

export interface StreamingQueryManagerCommandResult_ActiveResult {
  activeQueries: StreamingQueryManagerCommandResult_StreamingQueryInstance[];
}

export interface StreamingQueryManagerCommandResult_StreamingQueryInstance {
  /** (Required) The id and runId of this query. */
  id:
    | StreamingQueryInstanceId
    | undefined;
  /** (Optional) The name of this query. */
  name?: string | undefined;
}

export interface StreamingQueryManagerCommandResult_AwaitAnyTerminationResult {
  terminated: boolean;
}

export interface StreamingQueryManagerCommandResult_StreamingQueryListenerInstance {
  listenerPayload: Uint8Array;
}

export interface StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult {
  /** (Required) Reference IDs of listener instances. */
  listenerIds: string[];
}

/** Command to get the output of 'SparkContext.resources' */
export interface GetResourcesCommand {
}

/** Response for command 'GetResourcesCommand'. */
export interface GetResourcesCommandResult {
  resources: { [key: string]: ResourceInformation };
}

export interface GetResourcesCommandResult_ResourcesEntry {
  key: string;
  value: ResourceInformation | undefined;
}

function createBaseCommand(): Command {
  return {
    registerFunction: undefined,
    writeOperation: undefined,
    createDataframeView: undefined,
    writeOperationV2: undefined,
    sqlCommand: undefined,
    writeStreamOperationStart: undefined,
    streamingQueryCommand: undefined,
    getResourcesCommand: undefined,
    streamingQueryManagerCommand: undefined,
    registerTableFunction: undefined,
    extension: undefined,
  };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registerFunction !== undefined) {
      CommonInlineUserDefinedFunction.encode(message.registerFunction, writer.uint32(10).fork()).ldelim();
    }
    if (message.writeOperation !== undefined) {
      WriteOperation.encode(message.writeOperation, writer.uint32(18).fork()).ldelim();
    }
    if (message.createDataframeView !== undefined) {
      CreateDataFrameViewCommand.encode(message.createDataframeView, writer.uint32(26).fork()).ldelim();
    }
    if (message.writeOperationV2 !== undefined) {
      WriteOperationV2.encode(message.writeOperationV2, writer.uint32(34).fork()).ldelim();
    }
    if (message.sqlCommand !== undefined) {
      SqlCommand.encode(message.sqlCommand, writer.uint32(42).fork()).ldelim();
    }
    if (message.writeStreamOperationStart !== undefined) {
      WriteStreamOperationStart.encode(message.writeStreamOperationStart, writer.uint32(50).fork()).ldelim();
    }
    if (message.streamingQueryCommand !== undefined) {
      StreamingQueryCommand.encode(message.streamingQueryCommand, writer.uint32(58).fork()).ldelim();
    }
    if (message.getResourcesCommand !== undefined) {
      GetResourcesCommand.encode(message.getResourcesCommand, writer.uint32(66).fork()).ldelim();
    }
    if (message.streamingQueryManagerCommand !== undefined) {
      StreamingQueryManagerCommand.encode(message.streamingQueryManagerCommand, writer.uint32(74).fork()).ldelim();
    }
    if (message.registerTableFunction !== undefined) {
      CommonInlineUserDefinedTableFunction.encode(message.registerTableFunction, writer.uint32(82).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      Any.encode(message.extension, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registerFunction = CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.writeOperation = WriteOperation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createDataframeView = CreateDataFrameViewCommand.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.writeOperationV2 = WriteOperationV2.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sqlCommand = SqlCommand.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.writeStreamOperationStart = WriteStreamOperationStart.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.streamingQueryCommand = StreamingQueryCommand.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.getResourcesCommand = GetResourcesCommand.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.streamingQueryManagerCommand = StreamingQueryManagerCommand.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.registerTableFunction = CommonInlineUserDefinedTableFunction.decode(reader, reader.uint32());
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

  fromJSON(object: any): Command {
    return {
      registerFunction: isSet(object.registerFunction)
        ? CommonInlineUserDefinedFunction.fromJSON(object.registerFunction)
        : undefined,
      writeOperation: isSet(object.writeOperation) ? WriteOperation.fromJSON(object.writeOperation) : undefined,
      createDataframeView: isSet(object.createDataframeView)
        ? CreateDataFrameViewCommand.fromJSON(object.createDataframeView)
        : undefined,
      writeOperationV2: isSet(object.writeOperationV2) ? WriteOperationV2.fromJSON(object.writeOperationV2) : undefined,
      sqlCommand: isSet(object.sqlCommand) ? SqlCommand.fromJSON(object.sqlCommand) : undefined,
      writeStreamOperationStart: isSet(object.writeStreamOperationStart)
        ? WriteStreamOperationStart.fromJSON(object.writeStreamOperationStart)
        : undefined,
      streamingQueryCommand: isSet(object.streamingQueryCommand)
        ? StreamingQueryCommand.fromJSON(object.streamingQueryCommand)
        : undefined,
      getResourcesCommand: isSet(object.getResourcesCommand)
        ? GetResourcesCommand.fromJSON(object.getResourcesCommand)
        : undefined,
      streamingQueryManagerCommand: isSet(object.streamingQueryManagerCommand)
        ? StreamingQueryManagerCommand.fromJSON(object.streamingQueryManagerCommand)
        : undefined,
      registerTableFunction: isSet(object.registerTableFunction)
        ? CommonInlineUserDefinedTableFunction.fromJSON(object.registerTableFunction)
        : undefined,
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    if (message.registerFunction !== undefined) {
      obj.registerFunction = CommonInlineUserDefinedFunction.toJSON(message.registerFunction);
    }
    if (message.writeOperation !== undefined) {
      obj.writeOperation = WriteOperation.toJSON(message.writeOperation);
    }
    if (message.createDataframeView !== undefined) {
      obj.createDataframeView = CreateDataFrameViewCommand.toJSON(message.createDataframeView);
    }
    if (message.writeOperationV2 !== undefined) {
      obj.writeOperationV2 = WriteOperationV2.toJSON(message.writeOperationV2);
    }
    if (message.sqlCommand !== undefined) {
      obj.sqlCommand = SqlCommand.toJSON(message.sqlCommand);
    }
    if (message.writeStreamOperationStart !== undefined) {
      obj.writeStreamOperationStart = WriteStreamOperationStart.toJSON(message.writeStreamOperationStart);
    }
    if (message.streamingQueryCommand !== undefined) {
      obj.streamingQueryCommand = StreamingQueryCommand.toJSON(message.streamingQueryCommand);
    }
    if (message.getResourcesCommand !== undefined) {
      obj.getResourcesCommand = GetResourcesCommand.toJSON(message.getResourcesCommand);
    }
    if (message.streamingQueryManagerCommand !== undefined) {
      obj.streamingQueryManagerCommand = StreamingQueryManagerCommand.toJSON(message.streamingQueryManagerCommand);
    }
    if (message.registerTableFunction !== undefined) {
      obj.registerTableFunction = CommonInlineUserDefinedTableFunction.toJSON(message.registerTableFunction);
    }
    if (message.extension !== undefined) {
      obj.extension = Any.toJSON(message.extension);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.registerFunction = (object.registerFunction !== undefined && object.registerFunction !== null)
      ? CommonInlineUserDefinedFunction.fromPartial(object.registerFunction)
      : undefined;
    message.writeOperation = (object.writeOperation !== undefined && object.writeOperation !== null)
      ? WriteOperation.fromPartial(object.writeOperation)
      : undefined;
    message.createDataframeView = (object.createDataframeView !== undefined && object.createDataframeView !== null)
      ? CreateDataFrameViewCommand.fromPartial(object.createDataframeView)
      : undefined;
    message.writeOperationV2 = (object.writeOperationV2 !== undefined && object.writeOperationV2 !== null)
      ? WriteOperationV2.fromPartial(object.writeOperationV2)
      : undefined;
    message.sqlCommand = (object.sqlCommand !== undefined && object.sqlCommand !== null)
      ? SqlCommand.fromPartial(object.sqlCommand)
      : undefined;
    message.writeStreamOperationStart =
      (object.writeStreamOperationStart !== undefined && object.writeStreamOperationStart !== null)
        ? WriteStreamOperationStart.fromPartial(object.writeStreamOperationStart)
        : undefined;
    message.streamingQueryCommand =
      (object.streamingQueryCommand !== undefined && object.streamingQueryCommand !== null)
        ? StreamingQueryCommand.fromPartial(object.streamingQueryCommand)
        : undefined;
    message.getResourcesCommand = (object.getResourcesCommand !== undefined && object.getResourcesCommand !== null)
      ? GetResourcesCommand.fromPartial(object.getResourcesCommand)
      : undefined;
    message.streamingQueryManagerCommand =
      (object.streamingQueryManagerCommand !== undefined && object.streamingQueryManagerCommand !== null)
        ? StreamingQueryManagerCommand.fromPartial(object.streamingQueryManagerCommand)
        : undefined;
    message.registerTableFunction =
      (object.registerTableFunction !== undefined && object.registerTableFunction !== null)
        ? CommonInlineUserDefinedTableFunction.fromPartial(object.registerTableFunction)
        : undefined;
    message.extension = (object.extension !== undefined && object.extension !== null)
      ? Any.fromPartial(object.extension)
      : undefined;
    return message;
  },
};

function createBaseSqlCommand(): SqlCommand {
  return { sql: "", args: {}, posArgs: [], namedArguments: {}, posArguments: [] };
}

export const SqlCommand = {
  encode(message: SqlCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sql !== "") {
      writer.uint32(10).string(message.sql);
    }
    Object.entries(message.args).forEach(([key, value]) => {
      SqlCommand_ArgsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    for (const v of message.posArgs) {
      Expression_Literal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.namedArguments).forEach(([key, value]) => {
      SqlCommand_NamedArgumentsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.posArguments) {
      Expression.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SqlCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sql = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = SqlCommand_ArgsEntry.decode(reader, reader.uint32());
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

          const entry4 = SqlCommand_NamedArgumentsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): SqlCommand {
    return {
      sql: isSet(object.sql) ? globalThis.String(object.sql) : "",
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

  toJSON(message: SqlCommand): unknown {
    const obj: any = {};
    if (message.sql !== "") {
      obj.sql = message.sql;
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

  create<I extends Exact<DeepPartial<SqlCommand>, I>>(base?: I): SqlCommand {
    return SqlCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SqlCommand>, I>>(object: I): SqlCommand {
    const message = createBaseSqlCommand();
    message.sql = object.sql ?? "";
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

function createBaseSqlCommand_ArgsEntry(): SqlCommand_ArgsEntry {
  return { key: "", value: undefined };
}

export const SqlCommand_ArgsEntry = {
  encode(message: SqlCommand_ArgsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Expression_Literal.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SqlCommand_ArgsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlCommand_ArgsEntry();
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

  fromJSON(object: any): SqlCommand_ArgsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Expression_Literal.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SqlCommand_ArgsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Expression_Literal.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SqlCommand_ArgsEntry>, I>>(base?: I): SqlCommand_ArgsEntry {
    return SqlCommand_ArgsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SqlCommand_ArgsEntry>, I>>(object: I): SqlCommand_ArgsEntry {
    const message = createBaseSqlCommand_ArgsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Expression_Literal.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSqlCommand_NamedArgumentsEntry(): SqlCommand_NamedArgumentsEntry {
  return { key: "", value: undefined };
}

export const SqlCommand_NamedArgumentsEntry = {
  encode(message: SqlCommand_NamedArgumentsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Expression.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SqlCommand_NamedArgumentsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlCommand_NamedArgumentsEntry();
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

  fromJSON(object: any): SqlCommand_NamedArgumentsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Expression.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SqlCommand_NamedArgumentsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Expression.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SqlCommand_NamedArgumentsEntry>, I>>(base?: I): SqlCommand_NamedArgumentsEntry {
    return SqlCommand_NamedArgumentsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SqlCommand_NamedArgumentsEntry>, I>>(
    object: I,
  ): SqlCommand_NamedArgumentsEntry {
    const message = createBaseSqlCommand_NamedArgumentsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Expression.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseCreateDataFrameViewCommand(): CreateDataFrameViewCommand {
  return { input: undefined, name: "", isGlobal: false, replace: false };
}

export const CreateDataFrameViewCommand = {
  encode(message: CreateDataFrameViewCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.isGlobal === true) {
      writer.uint32(24).bool(message.isGlobal);
    }
    if (message.replace === true) {
      writer.uint32(32).bool(message.replace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDataFrameViewCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDataFrameViewCommand();
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
          if (tag !== 24) {
            break;
          }

          message.isGlobal = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.replace = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDataFrameViewCommand {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      isGlobal: isSet(object.isGlobal) ? globalThis.Boolean(object.isGlobal) : false,
      replace: isSet(object.replace) ? globalThis.Boolean(object.replace) : false,
    };
  },

  toJSON(message: CreateDataFrameViewCommand): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.isGlobal === true) {
      obj.isGlobal = message.isGlobal;
    }
    if (message.replace === true) {
      obj.replace = message.replace;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDataFrameViewCommand>, I>>(base?: I): CreateDataFrameViewCommand {
    return CreateDataFrameViewCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDataFrameViewCommand>, I>>(object: I): CreateDataFrameViewCommand {
    const message = createBaseCreateDataFrameViewCommand();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.name = object.name ?? "";
    message.isGlobal = object.isGlobal ?? false;
    message.replace = object.replace ?? false;
    return message;
  },
};

function createBaseWriteOperation(): WriteOperation {
  return {
    input: undefined,
    source: undefined,
    path: undefined,
    table: undefined,
    mode: 0,
    sortColumnNames: [],
    partitioningColumns: [],
    bucketBy: undefined,
    options: {},
  };
}

export const WriteOperation = {
  encode(message: WriteOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.source !== undefined) {
      writer.uint32(18).string(message.source);
    }
    if (message.path !== undefined) {
      writer.uint32(26).string(message.path);
    }
    if (message.table !== undefined) {
      WriteOperation_SaveTable.encode(message.table, writer.uint32(34).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(40).int32(message.mode);
    }
    for (const v of message.sortColumnNames) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.partitioningColumns) {
      writer.uint32(58).string(v!);
    }
    if (message.bucketBy !== undefined) {
      WriteOperation_BucketBy.encode(message.bucketBy, writer.uint32(66).fork()).ldelim();
    }
    Object.entries(message.options).forEach(([key, value]) => {
      WriteOperation_OptionsEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteOperation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteOperation();
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

          message.source = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.table = WriteOperation_SaveTable.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sortColumnNames.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.partitioningColumns.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.bucketBy = WriteOperation_BucketBy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = WriteOperation_OptionsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.options[entry9.key] = entry9.value;
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

  fromJSON(object: any): WriteOperation {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      source: isSet(object.source) ? globalThis.String(object.source) : undefined,
      path: isSet(object.path) ? globalThis.String(object.path) : undefined,
      table: isSet(object.table) ? WriteOperation_SaveTable.fromJSON(object.table) : undefined,
      mode: isSet(object.mode) ? writeOperation_SaveModeFromJSON(object.mode) : 0,
      sortColumnNames: globalThis.Array.isArray(object?.sortColumnNames)
        ? object.sortColumnNames.map((e: any) => globalThis.String(e))
        : [],
      partitioningColumns: globalThis.Array.isArray(object?.partitioningColumns)
        ? object.partitioningColumns.map((e: any) => globalThis.String(e))
        : [],
      bucketBy: isSet(object.bucketBy) ? WriteOperation_BucketBy.fromJSON(object.bucketBy) : undefined,
      options: isObject(object.options)
        ? Object.entries(object.options).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: WriteOperation): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.source !== undefined) {
      obj.source = message.source;
    }
    if (message.path !== undefined) {
      obj.path = message.path;
    }
    if (message.table !== undefined) {
      obj.table = WriteOperation_SaveTable.toJSON(message.table);
    }
    if (message.mode !== 0) {
      obj.mode = writeOperation_SaveModeToJSON(message.mode);
    }
    if (message.sortColumnNames?.length) {
      obj.sortColumnNames = message.sortColumnNames;
    }
    if (message.partitioningColumns?.length) {
      obj.partitioningColumns = message.partitioningColumns;
    }
    if (message.bucketBy !== undefined) {
      obj.bucketBy = WriteOperation_BucketBy.toJSON(message.bucketBy);
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

  create<I extends Exact<DeepPartial<WriteOperation>, I>>(base?: I): WriteOperation {
    return WriteOperation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteOperation>, I>>(object: I): WriteOperation {
    const message = createBaseWriteOperation();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.source = object.source ?? undefined;
    message.path = object.path ?? undefined;
    message.table = (object.table !== undefined && object.table !== null)
      ? WriteOperation_SaveTable.fromPartial(object.table)
      : undefined;
    message.mode = object.mode ?? 0;
    message.sortColumnNames = object.sortColumnNames?.map((e) => e) || [];
    message.partitioningColumns = object.partitioningColumns?.map((e) => e) || [];
    message.bucketBy = (object.bucketBy !== undefined && object.bucketBy !== null)
      ? WriteOperation_BucketBy.fromPartial(object.bucketBy)
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

function createBaseWriteOperation_OptionsEntry(): WriteOperation_OptionsEntry {
  return { key: "", value: "" };
}

export const WriteOperation_OptionsEntry = {
  encode(message: WriteOperation_OptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteOperation_OptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteOperation_OptionsEntry();
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

  fromJSON(object: any): WriteOperation_OptionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: WriteOperation_OptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteOperation_OptionsEntry>, I>>(base?: I): WriteOperation_OptionsEntry {
    return WriteOperation_OptionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteOperation_OptionsEntry>, I>>(object: I): WriteOperation_OptionsEntry {
    const message = createBaseWriteOperation_OptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseWriteOperation_SaveTable(): WriteOperation_SaveTable {
  return { tableName: "", saveMethod: 0 };
}

export const WriteOperation_SaveTable = {
  encode(message: WriteOperation_SaveTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.saveMethod !== 0) {
      writer.uint32(16).int32(message.saveMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteOperation_SaveTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteOperation_SaveTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tableName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.saveMethod = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteOperation_SaveTable {
    return {
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      saveMethod: isSet(object.saveMethod) ? writeOperation_SaveTable_TableSaveMethodFromJSON(object.saveMethod) : 0,
    };
  },

  toJSON(message: WriteOperation_SaveTable): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.saveMethod !== 0) {
      obj.saveMethod = writeOperation_SaveTable_TableSaveMethodToJSON(message.saveMethod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteOperation_SaveTable>, I>>(base?: I): WriteOperation_SaveTable {
    return WriteOperation_SaveTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteOperation_SaveTable>, I>>(object: I): WriteOperation_SaveTable {
    const message = createBaseWriteOperation_SaveTable();
    message.tableName = object.tableName ?? "";
    message.saveMethod = object.saveMethod ?? 0;
    return message;
  },
};

function createBaseWriteOperation_BucketBy(): WriteOperation_BucketBy {
  return { bucketColumnNames: [], numBuckets: 0 };
}

export const WriteOperation_BucketBy = {
  encode(message: WriteOperation_BucketBy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bucketColumnNames) {
      writer.uint32(10).string(v!);
    }
    if (message.numBuckets !== 0) {
      writer.uint32(16).int32(message.numBuckets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteOperation_BucketBy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteOperation_BucketBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucketColumnNames.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numBuckets = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteOperation_BucketBy {
    return {
      bucketColumnNames: globalThis.Array.isArray(object?.bucketColumnNames)
        ? object.bucketColumnNames.map((e: any) => globalThis.String(e))
        : [],
      numBuckets: isSet(object.numBuckets) ? globalThis.Number(object.numBuckets) : 0,
    };
  },

  toJSON(message: WriteOperation_BucketBy): unknown {
    const obj: any = {};
    if (message.bucketColumnNames?.length) {
      obj.bucketColumnNames = message.bucketColumnNames;
    }
    if (message.numBuckets !== 0) {
      obj.numBuckets = Math.round(message.numBuckets);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteOperation_BucketBy>, I>>(base?: I): WriteOperation_BucketBy {
    return WriteOperation_BucketBy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteOperation_BucketBy>, I>>(object: I): WriteOperation_BucketBy {
    const message = createBaseWriteOperation_BucketBy();
    message.bucketColumnNames = object.bucketColumnNames?.map((e) => e) || [];
    message.numBuckets = object.numBuckets ?? 0;
    return message;
  },
};

function createBaseWriteOperationV2(): WriteOperationV2 {
  return {
    input: undefined,
    tableName: "",
    provider: undefined,
    partitioningColumns: [],
    options: {},
    tableProperties: {},
    mode: 0,
    overwriteCondition: undefined,
  };
}

export const WriteOperationV2 = {
  encode(message: WriteOperationV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.tableName !== "") {
      writer.uint32(18).string(message.tableName);
    }
    if (message.provider !== undefined) {
      writer.uint32(26).string(message.provider);
    }
    for (const v of message.partitioningColumns) {
      Expression.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.options).forEach(([key, value]) => {
      WriteOperationV2_OptionsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    Object.entries(message.tableProperties).forEach(([key, value]) => {
      WriteOperationV2_TablePropertiesEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.mode !== 0) {
      writer.uint32(56).int32(message.mode);
    }
    if (message.overwriteCondition !== undefined) {
      Expression.encode(message.overwriteCondition, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteOperationV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteOperationV2();
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

          message.tableName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.partitioningColumns.push(Expression.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = WriteOperationV2_OptionsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.options[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = WriteOperationV2_TablePropertiesEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.tableProperties[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.overwriteCondition = Expression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteOperationV2 {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : undefined,
      partitioningColumns: globalThis.Array.isArray(object?.partitioningColumns)
        ? object.partitioningColumns.map((e: any) => Expression.fromJSON(e))
        : [],
      options: isObject(object.options)
        ? Object.entries(object.options).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      tableProperties: isObject(object.tableProperties)
        ? Object.entries(object.tableProperties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      mode: isSet(object.mode) ? writeOperationV2_ModeFromJSON(object.mode) : 0,
      overwriteCondition: isSet(object.overwriteCondition) ? Expression.fromJSON(object.overwriteCondition) : undefined,
    };
  },

  toJSON(message: WriteOperationV2): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.provider !== undefined) {
      obj.provider = message.provider;
    }
    if (message.partitioningColumns?.length) {
      obj.partitioningColumns = message.partitioningColumns.map((e) => Expression.toJSON(e));
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
    if (message.tableProperties) {
      const entries = Object.entries(message.tableProperties);
      if (entries.length > 0) {
        obj.tableProperties = {};
        entries.forEach(([k, v]) => {
          obj.tableProperties[k] = v;
        });
      }
    }
    if (message.mode !== 0) {
      obj.mode = writeOperationV2_ModeToJSON(message.mode);
    }
    if (message.overwriteCondition !== undefined) {
      obj.overwriteCondition = Expression.toJSON(message.overwriteCondition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteOperationV2>, I>>(base?: I): WriteOperationV2 {
    return WriteOperationV2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteOperationV2>, I>>(object: I): WriteOperationV2 {
    const message = createBaseWriteOperationV2();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.tableName = object.tableName ?? "";
    message.provider = object.provider ?? undefined;
    message.partitioningColumns = object.partitioningColumns?.map((e) => Expression.fromPartial(e)) || [];
    message.options = Object.entries(object.options ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.tableProperties = Object.entries(object.tableProperties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.mode = object.mode ?? 0;
    message.overwriteCondition = (object.overwriteCondition !== undefined && object.overwriteCondition !== null)
      ? Expression.fromPartial(object.overwriteCondition)
      : undefined;
    return message;
  },
};

function createBaseWriteOperationV2_OptionsEntry(): WriteOperationV2_OptionsEntry {
  return { key: "", value: "" };
}

export const WriteOperationV2_OptionsEntry = {
  encode(message: WriteOperationV2_OptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteOperationV2_OptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteOperationV2_OptionsEntry();
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

  fromJSON(object: any): WriteOperationV2_OptionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: WriteOperationV2_OptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteOperationV2_OptionsEntry>, I>>(base?: I): WriteOperationV2_OptionsEntry {
    return WriteOperationV2_OptionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteOperationV2_OptionsEntry>, I>>(
    object: I,
  ): WriteOperationV2_OptionsEntry {
    const message = createBaseWriteOperationV2_OptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseWriteOperationV2_TablePropertiesEntry(): WriteOperationV2_TablePropertiesEntry {
  return { key: "", value: "" };
}

export const WriteOperationV2_TablePropertiesEntry = {
  encode(message: WriteOperationV2_TablePropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteOperationV2_TablePropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteOperationV2_TablePropertiesEntry();
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

  fromJSON(object: any): WriteOperationV2_TablePropertiesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: WriteOperationV2_TablePropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteOperationV2_TablePropertiesEntry>, I>>(
    base?: I,
  ): WriteOperationV2_TablePropertiesEntry {
    return WriteOperationV2_TablePropertiesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteOperationV2_TablePropertiesEntry>, I>>(
    object: I,
  ): WriteOperationV2_TablePropertiesEntry {
    const message = createBaseWriteOperationV2_TablePropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseWriteStreamOperationStart(): WriteStreamOperationStart {
  return {
    input: undefined,
    format: "",
    options: {},
    partitioningColumnNames: [],
    processingTimeInterval: undefined,
    availableNow: undefined,
    once: undefined,
    continuousCheckpointInterval: undefined,
    outputMode: "",
    queryName: "",
    path: undefined,
    tableName: undefined,
    foreachWriter: undefined,
    foreachBatch: undefined,
  };
}

export const WriteStreamOperationStart = {
  encode(message: WriteStreamOperationStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.format !== "") {
      writer.uint32(18).string(message.format);
    }
    Object.entries(message.options).forEach(([key, value]) => {
      WriteStreamOperationStart_OptionsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    for (const v of message.partitioningColumnNames) {
      writer.uint32(34).string(v!);
    }
    if (message.processingTimeInterval !== undefined) {
      writer.uint32(42).string(message.processingTimeInterval);
    }
    if (message.availableNow !== undefined) {
      writer.uint32(48).bool(message.availableNow);
    }
    if (message.once !== undefined) {
      writer.uint32(56).bool(message.once);
    }
    if (message.continuousCheckpointInterval !== undefined) {
      writer.uint32(66).string(message.continuousCheckpointInterval);
    }
    if (message.outputMode !== "") {
      writer.uint32(74).string(message.outputMode);
    }
    if (message.queryName !== "") {
      writer.uint32(82).string(message.queryName);
    }
    if (message.path !== undefined) {
      writer.uint32(90).string(message.path);
    }
    if (message.tableName !== undefined) {
      writer.uint32(98).string(message.tableName);
    }
    if (message.foreachWriter !== undefined) {
      StreamingForeachFunction.encode(message.foreachWriter, writer.uint32(106).fork()).ldelim();
    }
    if (message.foreachBatch !== undefined) {
      StreamingForeachFunction.encode(message.foreachBatch, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteStreamOperationStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteStreamOperationStart();
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

          message.format = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = WriteStreamOperationStart_OptionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.options[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.partitioningColumnNames.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.processingTimeInterval = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.availableNow = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.once = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.continuousCheckpointInterval = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.outputMode = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.queryName = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.path = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.tableName = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.foreachWriter = StreamingForeachFunction.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.foreachBatch = StreamingForeachFunction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteStreamOperationStart {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      format: isSet(object.format) ? globalThis.String(object.format) : "",
      options: isObject(object.options)
        ? Object.entries(object.options).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      partitioningColumnNames: globalThis.Array.isArray(object?.partitioningColumnNames)
        ? object.partitioningColumnNames.map((e: any) => globalThis.String(e))
        : [],
      processingTimeInterval: isSet(object.processingTimeInterval)
        ? globalThis.String(object.processingTimeInterval)
        : undefined,
      availableNow: isSet(object.availableNow) ? globalThis.Boolean(object.availableNow) : undefined,
      once: isSet(object.once) ? globalThis.Boolean(object.once) : undefined,
      continuousCheckpointInterval: isSet(object.continuousCheckpointInterval)
        ? globalThis.String(object.continuousCheckpointInterval)
        : undefined,
      outputMode: isSet(object.outputMode) ? globalThis.String(object.outputMode) : "",
      queryName: isSet(object.queryName) ? globalThis.String(object.queryName) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : undefined,
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : undefined,
      foreachWriter: isSet(object.foreachWriter) ? StreamingForeachFunction.fromJSON(object.foreachWriter) : undefined,
      foreachBatch: isSet(object.foreachBatch) ? StreamingForeachFunction.fromJSON(object.foreachBatch) : undefined,
    };
  },

  toJSON(message: WriteStreamOperationStart): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.format !== "") {
      obj.format = message.format;
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
    if (message.partitioningColumnNames?.length) {
      obj.partitioningColumnNames = message.partitioningColumnNames;
    }
    if (message.processingTimeInterval !== undefined) {
      obj.processingTimeInterval = message.processingTimeInterval;
    }
    if (message.availableNow !== undefined) {
      obj.availableNow = message.availableNow;
    }
    if (message.once !== undefined) {
      obj.once = message.once;
    }
    if (message.continuousCheckpointInterval !== undefined) {
      obj.continuousCheckpointInterval = message.continuousCheckpointInterval;
    }
    if (message.outputMode !== "") {
      obj.outputMode = message.outputMode;
    }
    if (message.queryName !== "") {
      obj.queryName = message.queryName;
    }
    if (message.path !== undefined) {
      obj.path = message.path;
    }
    if (message.tableName !== undefined) {
      obj.tableName = message.tableName;
    }
    if (message.foreachWriter !== undefined) {
      obj.foreachWriter = StreamingForeachFunction.toJSON(message.foreachWriter);
    }
    if (message.foreachBatch !== undefined) {
      obj.foreachBatch = StreamingForeachFunction.toJSON(message.foreachBatch);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteStreamOperationStart>, I>>(base?: I): WriteStreamOperationStart {
    return WriteStreamOperationStart.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteStreamOperationStart>, I>>(object: I): WriteStreamOperationStart {
    const message = createBaseWriteStreamOperationStart();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.format = object.format ?? "";
    message.options = Object.entries(object.options ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.partitioningColumnNames = object.partitioningColumnNames?.map((e) => e) || [];
    message.processingTimeInterval = object.processingTimeInterval ?? undefined;
    message.availableNow = object.availableNow ?? undefined;
    message.once = object.once ?? undefined;
    message.continuousCheckpointInterval = object.continuousCheckpointInterval ?? undefined;
    message.outputMode = object.outputMode ?? "";
    message.queryName = object.queryName ?? "";
    message.path = object.path ?? undefined;
    message.tableName = object.tableName ?? undefined;
    message.foreachWriter = (object.foreachWriter !== undefined && object.foreachWriter !== null)
      ? StreamingForeachFunction.fromPartial(object.foreachWriter)
      : undefined;
    message.foreachBatch = (object.foreachBatch !== undefined && object.foreachBatch !== null)
      ? StreamingForeachFunction.fromPartial(object.foreachBatch)
      : undefined;
    return message;
  },
};

function createBaseWriteStreamOperationStart_OptionsEntry(): WriteStreamOperationStart_OptionsEntry {
  return { key: "", value: "" };
}

export const WriteStreamOperationStart_OptionsEntry = {
  encode(message: WriteStreamOperationStart_OptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteStreamOperationStart_OptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteStreamOperationStart_OptionsEntry();
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

  fromJSON(object: any): WriteStreamOperationStart_OptionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: WriteStreamOperationStart_OptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteStreamOperationStart_OptionsEntry>, I>>(
    base?: I,
  ): WriteStreamOperationStart_OptionsEntry {
    return WriteStreamOperationStart_OptionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteStreamOperationStart_OptionsEntry>, I>>(
    object: I,
  ): WriteStreamOperationStart_OptionsEntry {
    const message = createBaseWriteStreamOperationStart_OptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseStreamingForeachFunction(): StreamingForeachFunction {
  return { pythonFunction: undefined, scalaFunction: undefined };
}

export const StreamingForeachFunction = {
  encode(message: StreamingForeachFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pythonFunction !== undefined) {
      PythonUDF.encode(message.pythonFunction, writer.uint32(10).fork()).ldelim();
    }
    if (message.scalaFunction !== undefined) {
      ScalarScalaUDF.encode(message.scalaFunction, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingForeachFunction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingForeachFunction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pythonFunction = PythonUDF.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scalaFunction = ScalarScalaUDF.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingForeachFunction {
    return {
      pythonFunction: isSet(object.pythonFunction) ? PythonUDF.fromJSON(object.pythonFunction) : undefined,
      scalaFunction: isSet(object.scalaFunction) ? ScalarScalaUDF.fromJSON(object.scalaFunction) : undefined,
    };
  },

  toJSON(message: StreamingForeachFunction): unknown {
    const obj: any = {};
    if (message.pythonFunction !== undefined) {
      obj.pythonFunction = PythonUDF.toJSON(message.pythonFunction);
    }
    if (message.scalaFunction !== undefined) {
      obj.scalaFunction = ScalarScalaUDF.toJSON(message.scalaFunction);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingForeachFunction>, I>>(base?: I): StreamingForeachFunction {
    return StreamingForeachFunction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingForeachFunction>, I>>(object: I): StreamingForeachFunction {
    const message = createBaseStreamingForeachFunction();
    message.pythonFunction = (object.pythonFunction !== undefined && object.pythonFunction !== null)
      ? PythonUDF.fromPartial(object.pythonFunction)
      : undefined;
    message.scalaFunction = (object.scalaFunction !== undefined && object.scalaFunction !== null)
      ? ScalarScalaUDF.fromPartial(object.scalaFunction)
      : undefined;
    return message;
  },
};

function createBaseWriteStreamOperationStartResult(): WriteStreamOperationStartResult {
  return { queryId: undefined, name: "" };
}

export const WriteStreamOperationStartResult = {
  encode(message: WriteStreamOperationStartResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== undefined) {
      StreamingQueryInstanceId.encode(message.queryId, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteStreamOperationStartResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteStreamOperationStartResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queryId = StreamingQueryInstanceId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteStreamOperationStartResult {
    return {
      queryId: isSet(object.queryId) ? StreamingQueryInstanceId.fromJSON(object.queryId) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: WriteStreamOperationStartResult): unknown {
    const obj: any = {};
    if (message.queryId !== undefined) {
      obj.queryId = StreamingQueryInstanceId.toJSON(message.queryId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteStreamOperationStartResult>, I>>(base?: I): WriteStreamOperationStartResult {
    return WriteStreamOperationStartResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteStreamOperationStartResult>, I>>(
    object: I,
  ): WriteStreamOperationStartResult {
    const message = createBaseWriteStreamOperationStartResult();
    message.queryId = (object.queryId !== undefined && object.queryId !== null)
      ? StreamingQueryInstanceId.fromPartial(object.queryId)
      : undefined;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseStreamingQueryInstanceId(): StreamingQueryInstanceId {
  return { id: "", runId: "" };
}

export const StreamingQueryInstanceId = {
  encode(message: StreamingQueryInstanceId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.runId !== "") {
      writer.uint32(18).string(message.runId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryInstanceId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryInstanceId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryInstanceId {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      runId: isSet(object.runId) ? globalThis.String(object.runId) : "",
    };
  },

  toJSON(message: StreamingQueryInstanceId): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.runId !== "") {
      obj.runId = message.runId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryInstanceId>, I>>(base?: I): StreamingQueryInstanceId {
    return StreamingQueryInstanceId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryInstanceId>, I>>(object: I): StreamingQueryInstanceId {
    const message = createBaseStreamingQueryInstanceId();
    message.id = object.id ?? "";
    message.runId = object.runId ?? "";
    return message;
  },
};

function createBaseStreamingQueryCommand(): StreamingQueryCommand {
  return {
    queryId: undefined,
    status: undefined,
    lastProgress: undefined,
    recentProgress: undefined,
    stop: undefined,
    processAllAvailable: undefined,
    explain: undefined,
    exception: undefined,
    awaitTermination: undefined,
  };
}

export const StreamingQueryCommand = {
  encode(message: StreamingQueryCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== undefined) {
      StreamingQueryInstanceId.encode(message.queryId, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).bool(message.status);
    }
    if (message.lastProgress !== undefined) {
      writer.uint32(24).bool(message.lastProgress);
    }
    if (message.recentProgress !== undefined) {
      writer.uint32(32).bool(message.recentProgress);
    }
    if (message.stop !== undefined) {
      writer.uint32(40).bool(message.stop);
    }
    if (message.processAllAvailable !== undefined) {
      writer.uint32(48).bool(message.processAllAvailable);
    }
    if (message.explain !== undefined) {
      StreamingQueryCommand_ExplainCommand.encode(message.explain, writer.uint32(58).fork()).ldelim();
    }
    if (message.exception !== undefined) {
      writer.uint32(64).bool(message.exception);
    }
    if (message.awaitTermination !== undefined) {
      StreamingQueryCommand_AwaitTerminationCommand.encode(message.awaitTermination, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queryId = StreamingQueryInstanceId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lastProgress = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.recentProgress = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.stop = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.processAllAvailable = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.explain = StreamingQueryCommand_ExplainCommand.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.exception = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.awaitTermination = StreamingQueryCommand_AwaitTerminationCommand.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommand {
    return {
      queryId: isSet(object.queryId) ? StreamingQueryInstanceId.fromJSON(object.queryId) : undefined,
      status: isSet(object.status) ? globalThis.Boolean(object.status) : undefined,
      lastProgress: isSet(object.lastProgress) ? globalThis.Boolean(object.lastProgress) : undefined,
      recentProgress: isSet(object.recentProgress) ? globalThis.Boolean(object.recentProgress) : undefined,
      stop: isSet(object.stop) ? globalThis.Boolean(object.stop) : undefined,
      processAllAvailable: isSet(object.processAllAvailable)
        ? globalThis.Boolean(object.processAllAvailable)
        : undefined,
      explain: isSet(object.explain) ? StreamingQueryCommand_ExplainCommand.fromJSON(object.explain) : undefined,
      exception: isSet(object.exception) ? globalThis.Boolean(object.exception) : undefined,
      awaitTermination: isSet(object.awaitTermination)
        ? StreamingQueryCommand_AwaitTerminationCommand.fromJSON(object.awaitTermination)
        : undefined,
    };
  },

  toJSON(message: StreamingQueryCommand): unknown {
    const obj: any = {};
    if (message.queryId !== undefined) {
      obj.queryId = StreamingQueryInstanceId.toJSON(message.queryId);
    }
    if (message.status !== undefined) {
      obj.status = message.status;
    }
    if (message.lastProgress !== undefined) {
      obj.lastProgress = message.lastProgress;
    }
    if (message.recentProgress !== undefined) {
      obj.recentProgress = message.recentProgress;
    }
    if (message.stop !== undefined) {
      obj.stop = message.stop;
    }
    if (message.processAllAvailable !== undefined) {
      obj.processAllAvailable = message.processAllAvailable;
    }
    if (message.explain !== undefined) {
      obj.explain = StreamingQueryCommand_ExplainCommand.toJSON(message.explain);
    }
    if (message.exception !== undefined) {
      obj.exception = message.exception;
    }
    if (message.awaitTermination !== undefined) {
      obj.awaitTermination = StreamingQueryCommand_AwaitTerminationCommand.toJSON(message.awaitTermination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommand>, I>>(base?: I): StreamingQueryCommand {
    return StreamingQueryCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommand>, I>>(object: I): StreamingQueryCommand {
    const message = createBaseStreamingQueryCommand();
    message.queryId = (object.queryId !== undefined && object.queryId !== null)
      ? StreamingQueryInstanceId.fromPartial(object.queryId)
      : undefined;
    message.status = object.status ?? undefined;
    message.lastProgress = object.lastProgress ?? undefined;
    message.recentProgress = object.recentProgress ?? undefined;
    message.stop = object.stop ?? undefined;
    message.processAllAvailable = object.processAllAvailable ?? undefined;
    message.explain = (object.explain !== undefined && object.explain !== null)
      ? StreamingQueryCommand_ExplainCommand.fromPartial(object.explain)
      : undefined;
    message.exception = object.exception ?? undefined;
    message.awaitTermination = (object.awaitTermination !== undefined && object.awaitTermination !== null)
      ? StreamingQueryCommand_AwaitTerminationCommand.fromPartial(object.awaitTermination)
      : undefined;
    return message;
  },
};

function createBaseStreamingQueryCommand_ExplainCommand(): StreamingQueryCommand_ExplainCommand {
  return { extended: false };
}

export const StreamingQueryCommand_ExplainCommand = {
  encode(message: StreamingQueryCommand_ExplainCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extended === true) {
      writer.uint32(8).bool(message.extended);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommand_ExplainCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommand_ExplainCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.extended = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommand_ExplainCommand {
    return { extended: isSet(object.extended) ? globalThis.Boolean(object.extended) : false };
  },

  toJSON(message: StreamingQueryCommand_ExplainCommand): unknown {
    const obj: any = {};
    if (message.extended === true) {
      obj.extended = message.extended;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommand_ExplainCommand>, I>>(
    base?: I,
  ): StreamingQueryCommand_ExplainCommand {
    return StreamingQueryCommand_ExplainCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommand_ExplainCommand>, I>>(
    object: I,
  ): StreamingQueryCommand_ExplainCommand {
    const message = createBaseStreamingQueryCommand_ExplainCommand();
    message.extended = object.extended ?? false;
    return message;
  },
};

function createBaseStreamingQueryCommand_AwaitTerminationCommand(): StreamingQueryCommand_AwaitTerminationCommand {
  return { timeoutMs: undefined };
}

export const StreamingQueryCommand_AwaitTerminationCommand = {
  encode(message: StreamingQueryCommand_AwaitTerminationCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeoutMs !== undefined) {
      writer.uint32(16).int64(message.timeoutMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommand_AwaitTerminationCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommand_AwaitTerminationCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timeoutMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommand_AwaitTerminationCommand {
    return { timeoutMs: isSet(object.timeoutMs) ? globalThis.Number(object.timeoutMs) : undefined };
  },

  toJSON(message: StreamingQueryCommand_AwaitTerminationCommand): unknown {
    const obj: any = {};
    if (message.timeoutMs !== undefined) {
      obj.timeoutMs = Math.round(message.timeoutMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommand_AwaitTerminationCommand>, I>>(
    base?: I,
  ): StreamingQueryCommand_AwaitTerminationCommand {
    return StreamingQueryCommand_AwaitTerminationCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommand_AwaitTerminationCommand>, I>>(
    object: I,
  ): StreamingQueryCommand_AwaitTerminationCommand {
    const message = createBaseStreamingQueryCommand_AwaitTerminationCommand();
    message.timeoutMs = object.timeoutMs ?? undefined;
    return message;
  },
};

function createBaseStreamingQueryCommandResult(): StreamingQueryCommandResult {
  return {
    queryId: undefined,
    status: undefined,
    recentProgress: undefined,
    explain: undefined,
    exception: undefined,
    awaitTermination: undefined,
  };
}

export const StreamingQueryCommandResult = {
  encode(message: StreamingQueryCommandResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== undefined) {
      StreamingQueryInstanceId.encode(message.queryId, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      StreamingQueryCommandResult_StatusResult.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    if (message.recentProgress !== undefined) {
      StreamingQueryCommandResult_RecentProgressResult.encode(message.recentProgress, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.explain !== undefined) {
      StreamingQueryCommandResult_ExplainResult.encode(message.explain, writer.uint32(34).fork()).ldelim();
    }
    if (message.exception !== undefined) {
      StreamingQueryCommandResult_ExceptionResult.encode(message.exception, writer.uint32(42).fork()).ldelim();
    }
    if (message.awaitTermination !== undefined) {
      StreamingQueryCommandResult_AwaitTerminationResult.encode(message.awaitTermination, writer.uint32(50).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommandResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommandResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queryId = StreamingQueryInstanceId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = StreamingQueryCommandResult_StatusResult.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recentProgress = StreamingQueryCommandResult_RecentProgressResult.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.explain = StreamingQueryCommandResult_ExplainResult.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.exception = StreamingQueryCommandResult_ExceptionResult.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.awaitTermination = StreamingQueryCommandResult_AwaitTerminationResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommandResult {
    return {
      queryId: isSet(object.queryId) ? StreamingQueryInstanceId.fromJSON(object.queryId) : undefined,
      status: isSet(object.status) ? StreamingQueryCommandResult_StatusResult.fromJSON(object.status) : undefined,
      recentProgress: isSet(object.recentProgress)
        ? StreamingQueryCommandResult_RecentProgressResult.fromJSON(object.recentProgress)
        : undefined,
      explain: isSet(object.explain) ? StreamingQueryCommandResult_ExplainResult.fromJSON(object.explain) : undefined,
      exception: isSet(object.exception)
        ? StreamingQueryCommandResult_ExceptionResult.fromJSON(object.exception)
        : undefined,
      awaitTermination: isSet(object.awaitTermination)
        ? StreamingQueryCommandResult_AwaitTerminationResult.fromJSON(object.awaitTermination)
        : undefined,
    };
  },

  toJSON(message: StreamingQueryCommandResult): unknown {
    const obj: any = {};
    if (message.queryId !== undefined) {
      obj.queryId = StreamingQueryInstanceId.toJSON(message.queryId);
    }
    if (message.status !== undefined) {
      obj.status = StreamingQueryCommandResult_StatusResult.toJSON(message.status);
    }
    if (message.recentProgress !== undefined) {
      obj.recentProgress = StreamingQueryCommandResult_RecentProgressResult.toJSON(message.recentProgress);
    }
    if (message.explain !== undefined) {
      obj.explain = StreamingQueryCommandResult_ExplainResult.toJSON(message.explain);
    }
    if (message.exception !== undefined) {
      obj.exception = StreamingQueryCommandResult_ExceptionResult.toJSON(message.exception);
    }
    if (message.awaitTermination !== undefined) {
      obj.awaitTermination = StreamingQueryCommandResult_AwaitTerminationResult.toJSON(message.awaitTermination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommandResult>, I>>(base?: I): StreamingQueryCommandResult {
    return StreamingQueryCommandResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommandResult>, I>>(object: I): StreamingQueryCommandResult {
    const message = createBaseStreamingQueryCommandResult();
    message.queryId = (object.queryId !== undefined && object.queryId !== null)
      ? StreamingQueryInstanceId.fromPartial(object.queryId)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? StreamingQueryCommandResult_StatusResult.fromPartial(object.status)
      : undefined;
    message.recentProgress = (object.recentProgress !== undefined && object.recentProgress !== null)
      ? StreamingQueryCommandResult_RecentProgressResult.fromPartial(object.recentProgress)
      : undefined;
    message.explain = (object.explain !== undefined && object.explain !== null)
      ? StreamingQueryCommandResult_ExplainResult.fromPartial(object.explain)
      : undefined;
    message.exception = (object.exception !== undefined && object.exception !== null)
      ? StreamingQueryCommandResult_ExceptionResult.fromPartial(object.exception)
      : undefined;
    message.awaitTermination = (object.awaitTermination !== undefined && object.awaitTermination !== null)
      ? StreamingQueryCommandResult_AwaitTerminationResult.fromPartial(object.awaitTermination)
      : undefined;
    return message;
  },
};

function createBaseStreamingQueryCommandResult_StatusResult(): StreamingQueryCommandResult_StatusResult {
  return { statusMessage: "", isDataAvailable: false, isTriggerActive: false, isActive: false };
}

export const StreamingQueryCommandResult_StatusResult = {
  encode(message: StreamingQueryCommandResult_StatusResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusMessage !== "") {
      writer.uint32(10).string(message.statusMessage);
    }
    if (message.isDataAvailable === true) {
      writer.uint32(16).bool(message.isDataAvailable);
    }
    if (message.isTriggerActive === true) {
      writer.uint32(24).bool(message.isTriggerActive);
    }
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommandResult_StatusResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommandResult_StatusResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.statusMessage = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isDataAvailable = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isTriggerActive = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isActive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommandResult_StatusResult {
    return {
      statusMessage: isSet(object.statusMessage) ? globalThis.String(object.statusMessage) : "",
      isDataAvailable: isSet(object.isDataAvailable) ? globalThis.Boolean(object.isDataAvailable) : false,
      isTriggerActive: isSet(object.isTriggerActive) ? globalThis.Boolean(object.isTriggerActive) : false,
      isActive: isSet(object.isActive) ? globalThis.Boolean(object.isActive) : false,
    };
  },

  toJSON(message: StreamingQueryCommandResult_StatusResult): unknown {
    const obj: any = {};
    if (message.statusMessage !== "") {
      obj.statusMessage = message.statusMessage;
    }
    if (message.isDataAvailable === true) {
      obj.isDataAvailable = message.isDataAvailable;
    }
    if (message.isTriggerActive === true) {
      obj.isTriggerActive = message.isTriggerActive;
    }
    if (message.isActive === true) {
      obj.isActive = message.isActive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommandResult_StatusResult>, I>>(
    base?: I,
  ): StreamingQueryCommandResult_StatusResult {
    return StreamingQueryCommandResult_StatusResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommandResult_StatusResult>, I>>(
    object: I,
  ): StreamingQueryCommandResult_StatusResult {
    const message = createBaseStreamingQueryCommandResult_StatusResult();
    message.statusMessage = object.statusMessage ?? "";
    message.isDataAvailable = object.isDataAvailable ?? false;
    message.isTriggerActive = object.isTriggerActive ?? false;
    message.isActive = object.isActive ?? false;
    return message;
  },
};

function createBaseStreamingQueryCommandResult_RecentProgressResult(): StreamingQueryCommandResult_RecentProgressResult {
  return { recentProgressJson: [] };
}

export const StreamingQueryCommandResult_RecentProgressResult = {
  encode(
    message: StreamingQueryCommandResult_RecentProgressResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.recentProgressJson) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommandResult_RecentProgressResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommandResult_RecentProgressResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.recentProgressJson.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommandResult_RecentProgressResult {
    return {
      recentProgressJson: globalThis.Array.isArray(object?.recentProgressJson)
        ? object.recentProgressJson.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StreamingQueryCommandResult_RecentProgressResult): unknown {
    const obj: any = {};
    if (message.recentProgressJson?.length) {
      obj.recentProgressJson = message.recentProgressJson;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommandResult_RecentProgressResult>, I>>(
    base?: I,
  ): StreamingQueryCommandResult_RecentProgressResult {
    return StreamingQueryCommandResult_RecentProgressResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommandResult_RecentProgressResult>, I>>(
    object: I,
  ): StreamingQueryCommandResult_RecentProgressResult {
    const message = createBaseStreamingQueryCommandResult_RecentProgressResult();
    message.recentProgressJson = object.recentProgressJson?.map((e) => e) || [];
    return message;
  },
};

function createBaseStreamingQueryCommandResult_ExplainResult(): StreamingQueryCommandResult_ExplainResult {
  return { result: "" };
}

export const StreamingQueryCommandResult_ExplainResult = {
  encode(message: StreamingQueryCommandResult_ExplainResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommandResult_ExplainResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommandResult_ExplainResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommandResult_ExplainResult {
    return { result: isSet(object.result) ? globalThis.String(object.result) : "" };
  },

  toJSON(message: StreamingQueryCommandResult_ExplainResult): unknown {
    const obj: any = {};
    if (message.result !== "") {
      obj.result = message.result;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommandResult_ExplainResult>, I>>(
    base?: I,
  ): StreamingQueryCommandResult_ExplainResult {
    return StreamingQueryCommandResult_ExplainResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommandResult_ExplainResult>, I>>(
    object: I,
  ): StreamingQueryCommandResult_ExplainResult {
    const message = createBaseStreamingQueryCommandResult_ExplainResult();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseStreamingQueryCommandResult_ExceptionResult(): StreamingQueryCommandResult_ExceptionResult {
  return { exceptionMessage: undefined, errorClass: undefined, stackTrace: undefined };
}

export const StreamingQueryCommandResult_ExceptionResult = {
  encode(message: StreamingQueryCommandResult_ExceptionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exceptionMessage !== undefined) {
      writer.uint32(10).string(message.exceptionMessage);
    }
    if (message.errorClass !== undefined) {
      writer.uint32(18).string(message.errorClass);
    }
    if (message.stackTrace !== undefined) {
      writer.uint32(26).string(message.stackTrace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommandResult_ExceptionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommandResult_ExceptionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exceptionMessage = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorClass = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stackTrace = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommandResult_ExceptionResult {
    return {
      exceptionMessage: isSet(object.exceptionMessage) ? globalThis.String(object.exceptionMessage) : undefined,
      errorClass: isSet(object.errorClass) ? globalThis.String(object.errorClass) : undefined,
      stackTrace: isSet(object.stackTrace) ? globalThis.String(object.stackTrace) : undefined,
    };
  },

  toJSON(message: StreamingQueryCommandResult_ExceptionResult): unknown {
    const obj: any = {};
    if (message.exceptionMessage !== undefined) {
      obj.exceptionMessage = message.exceptionMessage;
    }
    if (message.errorClass !== undefined) {
      obj.errorClass = message.errorClass;
    }
    if (message.stackTrace !== undefined) {
      obj.stackTrace = message.stackTrace;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommandResult_ExceptionResult>, I>>(
    base?: I,
  ): StreamingQueryCommandResult_ExceptionResult {
    return StreamingQueryCommandResult_ExceptionResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommandResult_ExceptionResult>, I>>(
    object: I,
  ): StreamingQueryCommandResult_ExceptionResult {
    const message = createBaseStreamingQueryCommandResult_ExceptionResult();
    message.exceptionMessage = object.exceptionMessage ?? undefined;
    message.errorClass = object.errorClass ?? undefined;
    message.stackTrace = object.stackTrace ?? undefined;
    return message;
  },
};

function createBaseStreamingQueryCommandResult_AwaitTerminationResult(): StreamingQueryCommandResult_AwaitTerminationResult {
  return { terminated: false };
}

export const StreamingQueryCommandResult_AwaitTerminationResult = {
  encode(
    message: StreamingQueryCommandResult_AwaitTerminationResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.terminated === true) {
      writer.uint32(8).bool(message.terminated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryCommandResult_AwaitTerminationResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryCommandResult_AwaitTerminationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.terminated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryCommandResult_AwaitTerminationResult {
    return { terminated: isSet(object.terminated) ? globalThis.Boolean(object.terminated) : false };
  },

  toJSON(message: StreamingQueryCommandResult_AwaitTerminationResult): unknown {
    const obj: any = {};
    if (message.terminated === true) {
      obj.terminated = message.terminated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryCommandResult_AwaitTerminationResult>, I>>(
    base?: I,
  ): StreamingQueryCommandResult_AwaitTerminationResult {
    return StreamingQueryCommandResult_AwaitTerminationResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryCommandResult_AwaitTerminationResult>, I>>(
    object: I,
  ): StreamingQueryCommandResult_AwaitTerminationResult {
    const message = createBaseStreamingQueryCommandResult_AwaitTerminationResult();
    message.terminated = object.terminated ?? false;
    return message;
  },
};

function createBaseStreamingQueryManagerCommand(): StreamingQueryManagerCommand {
  return {
    active: undefined,
    getQuery: undefined,
    awaitAnyTermination: undefined,
    resetTerminated: undefined,
    addListener: undefined,
    removeListener: undefined,
    listListeners: undefined,
  };
}

export const StreamingQueryManagerCommand = {
  encode(message: StreamingQueryManagerCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active !== undefined) {
      writer.uint32(8).bool(message.active);
    }
    if (message.getQuery !== undefined) {
      writer.uint32(18).string(message.getQuery);
    }
    if (message.awaitAnyTermination !== undefined) {
      StreamingQueryManagerCommand_AwaitAnyTerminationCommand.encode(
        message.awaitAnyTermination,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.resetTerminated !== undefined) {
      writer.uint32(32).bool(message.resetTerminated);
    }
    if (message.addListener !== undefined) {
      StreamingQueryManagerCommand_StreamingQueryListenerCommand.encode(message.addListener, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.removeListener !== undefined) {
      StreamingQueryManagerCommand_StreamingQueryListenerCommand.encode(
        message.removeListener,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.listListeners !== undefined) {
      writer.uint32(56).bool(message.listListeners);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryManagerCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getQuery = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.awaitAnyTermination = StreamingQueryManagerCommand_AwaitAnyTerminationCommand.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.resetTerminated = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.addListener = StreamingQueryManagerCommand_StreamingQueryListenerCommand.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.removeListener = StreamingQueryManagerCommand_StreamingQueryListenerCommand.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.listListeners = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommand {
    return {
      active: isSet(object.active) ? globalThis.Boolean(object.active) : undefined,
      getQuery: isSet(object.getQuery) ? globalThis.String(object.getQuery) : undefined,
      awaitAnyTermination: isSet(object.awaitAnyTermination)
        ? StreamingQueryManagerCommand_AwaitAnyTerminationCommand.fromJSON(object.awaitAnyTermination)
        : undefined,
      resetTerminated: isSet(object.resetTerminated) ? globalThis.Boolean(object.resetTerminated) : undefined,
      addListener: isSet(object.addListener)
        ? StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromJSON(object.addListener)
        : undefined,
      removeListener: isSet(object.removeListener)
        ? StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromJSON(object.removeListener)
        : undefined,
      listListeners: isSet(object.listListeners) ? globalThis.Boolean(object.listListeners) : undefined,
    };
  },

  toJSON(message: StreamingQueryManagerCommand): unknown {
    const obj: any = {};
    if (message.active !== undefined) {
      obj.active = message.active;
    }
    if (message.getQuery !== undefined) {
      obj.getQuery = message.getQuery;
    }
    if (message.awaitAnyTermination !== undefined) {
      obj.awaitAnyTermination = StreamingQueryManagerCommand_AwaitAnyTerminationCommand.toJSON(
        message.awaitAnyTermination,
      );
    }
    if (message.resetTerminated !== undefined) {
      obj.resetTerminated = message.resetTerminated;
    }
    if (message.addListener !== undefined) {
      obj.addListener = StreamingQueryManagerCommand_StreamingQueryListenerCommand.toJSON(message.addListener);
    }
    if (message.removeListener !== undefined) {
      obj.removeListener = StreamingQueryManagerCommand_StreamingQueryListenerCommand.toJSON(message.removeListener);
    }
    if (message.listListeners !== undefined) {
      obj.listListeners = message.listListeners;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommand>, I>>(base?: I): StreamingQueryManagerCommand {
    return StreamingQueryManagerCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommand>, I>>(object: I): StreamingQueryManagerCommand {
    const message = createBaseStreamingQueryManagerCommand();
    message.active = object.active ?? undefined;
    message.getQuery = object.getQuery ?? undefined;
    message.awaitAnyTermination = (object.awaitAnyTermination !== undefined && object.awaitAnyTermination !== null)
      ? StreamingQueryManagerCommand_AwaitAnyTerminationCommand.fromPartial(object.awaitAnyTermination)
      : undefined;
    message.resetTerminated = object.resetTerminated ?? undefined;
    message.addListener = (object.addListener !== undefined && object.addListener !== null)
      ? StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromPartial(object.addListener)
      : undefined;
    message.removeListener = (object.removeListener !== undefined && object.removeListener !== null)
      ? StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromPartial(object.removeListener)
      : undefined;
    message.listListeners = object.listListeners ?? undefined;
    return message;
  },
};

function createBaseStreamingQueryManagerCommand_AwaitAnyTerminationCommand(): StreamingQueryManagerCommand_AwaitAnyTerminationCommand {
  return { timeoutMs: undefined };
}

export const StreamingQueryManagerCommand_AwaitAnyTerminationCommand = {
  encode(
    message: StreamingQueryManagerCommand_AwaitAnyTerminationCommand,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeoutMs !== undefined) {
      writer.uint32(8).int64(message.timeoutMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryManagerCommand_AwaitAnyTerminationCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommand_AwaitAnyTerminationCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timeoutMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommand_AwaitAnyTerminationCommand {
    return { timeoutMs: isSet(object.timeoutMs) ? globalThis.Number(object.timeoutMs) : undefined };
  },

  toJSON(message: StreamingQueryManagerCommand_AwaitAnyTerminationCommand): unknown {
    const obj: any = {};
    if (message.timeoutMs !== undefined) {
      obj.timeoutMs = Math.round(message.timeoutMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommand_AwaitAnyTerminationCommand>, I>>(
    base?: I,
  ): StreamingQueryManagerCommand_AwaitAnyTerminationCommand {
    return StreamingQueryManagerCommand_AwaitAnyTerminationCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommand_AwaitAnyTerminationCommand>, I>>(
    object: I,
  ): StreamingQueryManagerCommand_AwaitAnyTerminationCommand {
    const message = createBaseStreamingQueryManagerCommand_AwaitAnyTerminationCommand();
    message.timeoutMs = object.timeoutMs ?? undefined;
    return message;
  },
};

function createBaseStreamingQueryManagerCommand_StreamingQueryListenerCommand(): StreamingQueryManagerCommand_StreamingQueryListenerCommand {
  return { listenerPayload: new Uint8Array(0), pythonListenerPayload: undefined, id: "" };
}

export const StreamingQueryManagerCommand_StreamingQueryListenerCommand = {
  encode(
    message: StreamingQueryManagerCommand_StreamingQueryListenerCommand,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.listenerPayload.length !== 0) {
      writer.uint32(10).bytes(message.listenerPayload);
    }
    if (message.pythonListenerPayload !== undefined) {
      PythonUDF.encode(message.pythonListenerPayload, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryManagerCommand_StreamingQueryListenerCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommand_StreamingQueryListenerCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listenerPayload = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pythonListenerPayload = PythonUDF.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommand_StreamingQueryListenerCommand {
    return {
      listenerPayload: isSet(object.listenerPayload) ? bytesFromBase64(object.listenerPayload) : new Uint8Array(0),
      pythonListenerPayload: isSet(object.pythonListenerPayload)
        ? PythonUDF.fromJSON(object.pythonListenerPayload)
        : undefined,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: StreamingQueryManagerCommand_StreamingQueryListenerCommand): unknown {
    const obj: any = {};
    if (message.listenerPayload.length !== 0) {
      obj.listenerPayload = base64FromBytes(message.listenerPayload);
    }
    if (message.pythonListenerPayload !== undefined) {
      obj.pythonListenerPayload = PythonUDF.toJSON(message.pythonListenerPayload);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommand_StreamingQueryListenerCommand>, I>>(
    base?: I,
  ): StreamingQueryManagerCommand_StreamingQueryListenerCommand {
    return StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommand_StreamingQueryListenerCommand>, I>>(
    object: I,
  ): StreamingQueryManagerCommand_StreamingQueryListenerCommand {
    const message = createBaseStreamingQueryManagerCommand_StreamingQueryListenerCommand();
    message.listenerPayload = object.listenerPayload ?? new Uint8Array(0);
    message.pythonListenerPayload =
      (object.pythonListenerPayload !== undefined && object.pythonListenerPayload !== null)
        ? PythonUDF.fromPartial(object.pythonListenerPayload)
        : undefined;
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseStreamingQueryManagerCommandResult(): StreamingQueryManagerCommandResult {
  return {
    active: undefined,
    query: undefined,
    awaitAnyTermination: undefined,
    resetTerminated: undefined,
    addListener: undefined,
    removeListener: undefined,
    listListeners: undefined,
  };
}

export const StreamingQueryManagerCommandResult = {
  encode(message: StreamingQueryManagerCommandResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active !== undefined) {
      StreamingQueryManagerCommandResult_ActiveResult.encode(message.active, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      StreamingQueryManagerCommandResult_StreamingQueryInstance.encode(message.query, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.awaitAnyTermination !== undefined) {
      StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.encode(
        message.awaitAnyTermination,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.resetTerminated !== undefined) {
      writer.uint32(32).bool(message.resetTerminated);
    }
    if (message.addListener !== undefined) {
      writer.uint32(40).bool(message.addListener);
    }
    if (message.removeListener !== undefined) {
      writer.uint32(48).bool(message.removeListener);
    }
    if (message.listListeners !== undefined) {
      StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.encode(
        message.listListeners,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryManagerCommandResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommandResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.active = StreamingQueryManagerCommandResult_ActiveResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.query = StreamingQueryManagerCommandResult_StreamingQueryInstance.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.awaitAnyTermination = StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.resetTerminated = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.addListener = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.removeListener = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.listListeners = StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommandResult {
    return {
      active: isSet(object.active)
        ? StreamingQueryManagerCommandResult_ActiveResult.fromJSON(object.active)
        : undefined,
      query: isSet(object.query)
        ? StreamingQueryManagerCommandResult_StreamingQueryInstance.fromJSON(object.query)
        : undefined,
      awaitAnyTermination: isSet(object.awaitAnyTermination)
        ? StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.fromJSON(object.awaitAnyTermination)
        : undefined,
      resetTerminated: isSet(object.resetTerminated) ? globalThis.Boolean(object.resetTerminated) : undefined,
      addListener: isSet(object.addListener) ? globalThis.Boolean(object.addListener) : undefined,
      removeListener: isSet(object.removeListener) ? globalThis.Boolean(object.removeListener) : undefined,
      listListeners: isSet(object.listListeners)
        ? StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.fromJSON(object.listListeners)
        : undefined,
    };
  },

  toJSON(message: StreamingQueryManagerCommandResult): unknown {
    const obj: any = {};
    if (message.active !== undefined) {
      obj.active = StreamingQueryManagerCommandResult_ActiveResult.toJSON(message.active);
    }
    if (message.query !== undefined) {
      obj.query = StreamingQueryManagerCommandResult_StreamingQueryInstance.toJSON(message.query);
    }
    if (message.awaitAnyTermination !== undefined) {
      obj.awaitAnyTermination = StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.toJSON(
        message.awaitAnyTermination,
      );
    }
    if (message.resetTerminated !== undefined) {
      obj.resetTerminated = message.resetTerminated;
    }
    if (message.addListener !== undefined) {
      obj.addListener = message.addListener;
    }
    if (message.removeListener !== undefined) {
      obj.removeListener = message.removeListener;
    }
    if (message.listListeners !== undefined) {
      obj.listListeners = StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.toJSON(
        message.listListeners,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult>, I>>(
    base?: I,
  ): StreamingQueryManagerCommandResult {
    return StreamingQueryManagerCommandResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult>, I>>(
    object: I,
  ): StreamingQueryManagerCommandResult {
    const message = createBaseStreamingQueryManagerCommandResult();
    message.active = (object.active !== undefined && object.active !== null)
      ? StreamingQueryManagerCommandResult_ActiveResult.fromPartial(object.active)
      : undefined;
    message.query = (object.query !== undefined && object.query !== null)
      ? StreamingQueryManagerCommandResult_StreamingQueryInstance.fromPartial(object.query)
      : undefined;
    message.awaitAnyTermination = (object.awaitAnyTermination !== undefined && object.awaitAnyTermination !== null)
      ? StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.fromPartial(object.awaitAnyTermination)
      : undefined;
    message.resetTerminated = object.resetTerminated ?? undefined;
    message.addListener = object.addListener ?? undefined;
    message.removeListener = object.removeListener ?? undefined;
    message.listListeners = (object.listListeners !== undefined && object.listListeners !== null)
      ? StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.fromPartial(object.listListeners)
      : undefined;
    return message;
  },
};

function createBaseStreamingQueryManagerCommandResult_ActiveResult(): StreamingQueryManagerCommandResult_ActiveResult {
  return { activeQueries: [] };
}

export const StreamingQueryManagerCommandResult_ActiveResult = {
  encode(
    message: StreamingQueryManagerCommandResult_ActiveResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.activeQueries) {
      StreamingQueryManagerCommandResult_StreamingQueryInstance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryManagerCommandResult_ActiveResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommandResult_ActiveResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activeQueries.push(
            StreamingQueryManagerCommandResult_StreamingQueryInstance.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommandResult_ActiveResult {
    return {
      activeQueries: globalThis.Array.isArray(object?.activeQueries)
        ? object.activeQueries.map((e: any) => StreamingQueryManagerCommandResult_StreamingQueryInstance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StreamingQueryManagerCommandResult_ActiveResult): unknown {
    const obj: any = {};
    if (message.activeQueries?.length) {
      obj.activeQueries = message.activeQueries.map((e) =>
        StreamingQueryManagerCommandResult_StreamingQueryInstance.toJSON(e)
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_ActiveResult>, I>>(
    base?: I,
  ): StreamingQueryManagerCommandResult_ActiveResult {
    return StreamingQueryManagerCommandResult_ActiveResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_ActiveResult>, I>>(
    object: I,
  ): StreamingQueryManagerCommandResult_ActiveResult {
    const message = createBaseStreamingQueryManagerCommandResult_ActiveResult();
    message.activeQueries =
      object.activeQueries?.map((e) => StreamingQueryManagerCommandResult_StreamingQueryInstance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStreamingQueryManagerCommandResult_StreamingQueryInstance(): StreamingQueryManagerCommandResult_StreamingQueryInstance {
  return { id: undefined, name: undefined };
}

export const StreamingQueryManagerCommandResult_StreamingQueryInstance = {
  encode(
    message: StreamingQueryManagerCommandResult_StreamingQueryInstance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      StreamingQueryInstanceId.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingQueryManagerCommandResult_StreamingQueryInstance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommandResult_StreamingQueryInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = StreamingQueryInstanceId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommandResult_StreamingQueryInstance {
    return {
      id: isSet(object.id) ? StreamingQueryInstanceId.fromJSON(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
    };
  },

  toJSON(message: StreamingQueryManagerCommandResult_StreamingQueryInstance): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = StreamingQueryInstanceId.toJSON(message.id);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_StreamingQueryInstance>, I>>(
    base?: I,
  ): StreamingQueryManagerCommandResult_StreamingQueryInstance {
    return StreamingQueryManagerCommandResult_StreamingQueryInstance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_StreamingQueryInstance>, I>>(
    object: I,
  ): StreamingQueryManagerCommandResult_StreamingQueryInstance {
    const message = createBaseStreamingQueryManagerCommandResult_StreamingQueryInstance();
    message.id = (object.id !== undefined && object.id !== null)
      ? StreamingQueryInstanceId.fromPartial(object.id)
      : undefined;
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBaseStreamingQueryManagerCommandResult_AwaitAnyTerminationResult(): StreamingQueryManagerCommandResult_AwaitAnyTerminationResult {
  return { terminated: false };
}

export const StreamingQueryManagerCommandResult_AwaitAnyTerminationResult = {
  encode(
    message: StreamingQueryManagerCommandResult_AwaitAnyTerminationResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.terminated === true) {
      writer.uint32(8).bool(message.terminated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): StreamingQueryManagerCommandResult_AwaitAnyTerminationResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommandResult_AwaitAnyTerminationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.terminated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommandResult_AwaitAnyTerminationResult {
    return { terminated: isSet(object.terminated) ? globalThis.Boolean(object.terminated) : false };
  },

  toJSON(message: StreamingQueryManagerCommandResult_AwaitAnyTerminationResult): unknown {
    const obj: any = {};
    if (message.terminated === true) {
      obj.terminated = message.terminated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_AwaitAnyTerminationResult>, I>>(
    base?: I,
  ): StreamingQueryManagerCommandResult_AwaitAnyTerminationResult {
    return StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_AwaitAnyTerminationResult>, I>>(
    object: I,
  ): StreamingQueryManagerCommandResult_AwaitAnyTerminationResult {
    const message = createBaseStreamingQueryManagerCommandResult_AwaitAnyTerminationResult();
    message.terminated = object.terminated ?? false;
    return message;
  },
};

function createBaseStreamingQueryManagerCommandResult_StreamingQueryListenerInstance(): StreamingQueryManagerCommandResult_StreamingQueryListenerInstance {
  return { listenerPayload: new Uint8Array(0) };
}

export const StreamingQueryManagerCommandResult_StreamingQueryListenerInstance = {
  encode(
    message: StreamingQueryManagerCommandResult_StreamingQueryListenerInstance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.listenerPayload.length !== 0) {
      writer.uint32(10).bytes(message.listenerPayload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): StreamingQueryManagerCommandResult_StreamingQueryListenerInstance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommandResult_StreamingQueryListenerInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listenerPayload = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommandResult_StreamingQueryListenerInstance {
    return {
      listenerPayload: isSet(object.listenerPayload) ? bytesFromBase64(object.listenerPayload) : new Uint8Array(0),
    };
  },

  toJSON(message: StreamingQueryManagerCommandResult_StreamingQueryListenerInstance): unknown {
    const obj: any = {};
    if (message.listenerPayload.length !== 0) {
      obj.listenerPayload = base64FromBytes(message.listenerPayload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_StreamingQueryListenerInstance>, I>>(
    base?: I,
  ): StreamingQueryManagerCommandResult_StreamingQueryListenerInstance {
    return StreamingQueryManagerCommandResult_StreamingQueryListenerInstance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_StreamingQueryListenerInstance>, I>>(
    object: I,
  ): StreamingQueryManagerCommandResult_StreamingQueryListenerInstance {
    const message = createBaseStreamingQueryManagerCommandResult_StreamingQueryListenerInstance();
    message.listenerPayload = object.listenerPayload ?? new Uint8Array(0);
    return message;
  },
};

function createBaseStreamingQueryManagerCommandResult_ListStreamingQueryListenerResult(): StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult {
  return { listenerIds: [] };
}

export const StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult = {
  encode(
    message: StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.listenerIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingQueryManagerCommandResult_ListStreamingQueryListenerResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listenerIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult {
    return {
      listenerIds: globalThis.Array.isArray(object?.listenerIds)
        ? object.listenerIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult): unknown {
    const obj: any = {};
    if (message.listenerIds?.length) {
      obj.listenerIds = message.listenerIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult>, I>>(
    base?: I,
  ): StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult {
    return StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult>, I>>(
    object: I,
  ): StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult {
    const message = createBaseStreamingQueryManagerCommandResult_ListStreamingQueryListenerResult();
    message.listenerIds = object.listenerIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetResourcesCommand(): GetResourcesCommand {
  return {};
}

export const GetResourcesCommand = {
  encode(_: GetResourcesCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourcesCommand();
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

  fromJSON(_: any): GetResourcesCommand {
    return {};
  },

  toJSON(_: GetResourcesCommand): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourcesCommand>, I>>(base?: I): GetResourcesCommand {
    return GetResourcesCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourcesCommand>, I>>(_: I): GetResourcesCommand {
    const message = createBaseGetResourcesCommand();
    return message;
  },
};

function createBaseGetResourcesCommandResult(): GetResourcesCommandResult {
  return { resources: {} };
}

export const GetResourcesCommandResult = {
  encode(message: GetResourcesCommandResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.resources).forEach(([key, value]) => {
      GetResourcesCommandResult_ResourcesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesCommandResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourcesCommandResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = GetResourcesCommandResult_ResourcesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.resources[entry1.key] = entry1.value;
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

  fromJSON(object: any): GetResourcesCommandResult {
    return {
      resources: isObject(object.resources)
        ? Object.entries(object.resources).reduce<{ [key: string]: ResourceInformation }>((acc, [key, value]) => {
          acc[key] = ResourceInformation.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GetResourcesCommandResult): unknown {
    const obj: any = {};
    if (message.resources) {
      const entries = Object.entries(message.resources);
      if (entries.length > 0) {
        obj.resources = {};
        entries.forEach(([k, v]) => {
          obj.resources[k] = ResourceInformation.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourcesCommandResult>, I>>(base?: I): GetResourcesCommandResult {
    return GetResourcesCommandResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourcesCommandResult>, I>>(object: I): GetResourcesCommandResult {
    const message = createBaseGetResourcesCommandResult();
    message.resources = Object.entries(object.resources ?? {}).reduce<{ [key: string]: ResourceInformation }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ResourceInformation.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseGetResourcesCommandResult_ResourcesEntry(): GetResourcesCommandResult_ResourcesEntry {
  return { key: "", value: undefined };
}

export const GetResourcesCommandResult_ResourcesEntry = {
  encode(message: GetResourcesCommandResult_ResourcesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ResourceInformation.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesCommandResult_ResourcesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourcesCommandResult_ResourcesEntry();
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

          message.value = ResourceInformation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResourcesCommandResult_ResourcesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? ResourceInformation.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GetResourcesCommandResult_ResourcesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ResourceInformation.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourcesCommandResult_ResourcesEntry>, I>>(
    base?: I,
  ): GetResourcesCommandResult_ResourcesEntry {
    return GetResourcesCommandResult_ResourcesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourcesCommandResult_ResourcesEntry>, I>>(
    object: I,
  ): GetResourcesCommandResult_ResourcesEntry {
    const message = createBaseGetResourcesCommandResult_ResourcesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ResourceInformation.fromPartial(object.value)
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
