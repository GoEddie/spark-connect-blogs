/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Any } from "../../google/protobuf/any";
import {
  Command,
  GetResourcesCommandResult,
  StreamingQueryCommandResult,
  StreamingQueryManagerCommandResult,
  WriteStreamOperationStartResult,
} from "./commands";
import { StorageLevel } from "./common";
import { Expression_Literal } from "./expressions";
import { Relation } from "./relations";
import { DataType } from "./types";
import Long = require("long");

export const protobufPackage = "spark.connect";

/**
 * A [[Plan]] is the structure that carries the runtime information for the execution from the
 * client to the server. A [[Plan]] can either be of the type [[Relation]] which is a reference
 * to the underlying logical plan or it can be of the [[Command]] type that is used to execute
 * commands on the server.
 */
export interface Plan {
  root?: Relation | undefined;
  command?: Command | undefined;
}

/**
 * User Context is used to refer to one particular user session that is executing
 * queries in the backend.
 */
export interface UserContext {
  userId: string;
  userName: string;
  /**
   * To extend the existing user context message that is used to identify incoming requests,
   * Spark Connect leverages the Any protobuf type that can be used to inject arbitrary other
   * messages into this message. Extensions are stored as a `repeated` type to be able to
   * handle multiple active extensions.
   */
  extensions: Any[];
}

/** Request to perform plan analyze, optionally to explain the plan. */
export interface AnalyzePlanRequest {
  /**
   * (Required)
   *
   * The session_id specifies a spark session for a user id (which is specified
   * by user_context.user_id). The session_id is set by the client to be able to
   * collate streaming responses from different queries within the dedicated session.
   * The id should be an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  sessionId: string;
  /** (Required) User context */
  userContext:
    | UserContext
    | undefined;
  /**
   * Provides optional information about the client sending the request. This field
   * can be used for language or version specific information and is only intended for
   * logging purposes and will not be interpreted by the server.
   */
  clientType?: string | undefined;
  schema?: AnalyzePlanRequest_Schema | undefined;
  explain?: AnalyzePlanRequest_Explain | undefined;
  treeString?: AnalyzePlanRequest_TreeString | undefined;
  isLocal?: AnalyzePlanRequest_IsLocal | undefined;
  isStreaming?: AnalyzePlanRequest_IsStreaming | undefined;
  inputFiles?: AnalyzePlanRequest_InputFiles | undefined;
  sparkVersion?: AnalyzePlanRequest_SparkVersion | undefined;
  ddlParse?: AnalyzePlanRequest_DDLParse | undefined;
  sameSemantics?: AnalyzePlanRequest_SameSemantics | undefined;
  semanticHash?: AnalyzePlanRequest_SemanticHash | undefined;
  persist?: AnalyzePlanRequest_Persist | undefined;
  unpersist?: AnalyzePlanRequest_Unpersist | undefined;
  getStorageLevel?: AnalyzePlanRequest_GetStorageLevel | undefined;
}

export interface AnalyzePlanRequest_Schema {
  /** (Required) The logical plan to be analyzed. */
  plan: Plan | undefined;
}

/** Explains the input plan based on a configurable mode. */
export interface AnalyzePlanRequest_Explain {
  /** (Required) The logical plan to be analyzed. */
  plan:
    | Plan
    | undefined;
  /** (Required) For analyzePlan rpc calls, configure the mode to explain plan in strings. */
  explainMode: AnalyzePlanRequest_Explain_ExplainMode;
}

/** Plan explanation mode. */
export enum AnalyzePlanRequest_Explain_ExplainMode {
  EXPLAIN_MODE_UNSPECIFIED = 0,
  /** EXPLAIN_MODE_SIMPLE - Generates only physical plan. */
  EXPLAIN_MODE_SIMPLE = 1,
  /**
   * EXPLAIN_MODE_EXTENDED - Generates parsed logical plan, analyzed logical plan, optimized logical plan and physical plan.
   * Parsed Logical plan is a unresolved plan that extracted from the query. Analyzed logical plans
   * transforms which translates unresolvedAttribute and unresolvedRelation into fully typed objects.
   * The optimized logical plan transforms through a set of optimization rules, resulting in the
   * physical plan.
   */
  EXPLAIN_MODE_EXTENDED = 2,
  /** EXPLAIN_MODE_CODEGEN - Generates code for the statement, if any and a physical plan. */
  EXPLAIN_MODE_CODEGEN = 3,
  /** EXPLAIN_MODE_COST - If plan node statistics are available, generates a logical plan and also the statistics. */
  EXPLAIN_MODE_COST = 4,
  /** EXPLAIN_MODE_FORMATTED - Generates a physical plan outline and also node details. */
  EXPLAIN_MODE_FORMATTED = 5,
  UNRECOGNIZED = -1,
}

export function analyzePlanRequest_Explain_ExplainModeFromJSON(object: any): AnalyzePlanRequest_Explain_ExplainMode {
  switch (object) {
    case 0:
    case "EXPLAIN_MODE_UNSPECIFIED":
      return AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_UNSPECIFIED;
    case 1:
    case "EXPLAIN_MODE_SIMPLE":
      return AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_SIMPLE;
    case 2:
    case "EXPLAIN_MODE_EXTENDED":
      return AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_EXTENDED;
    case 3:
    case "EXPLAIN_MODE_CODEGEN":
      return AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_CODEGEN;
    case 4:
    case "EXPLAIN_MODE_COST":
      return AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_COST;
    case 5:
    case "EXPLAIN_MODE_FORMATTED":
      return AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_FORMATTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AnalyzePlanRequest_Explain_ExplainMode.UNRECOGNIZED;
  }
}

export function analyzePlanRequest_Explain_ExplainModeToJSON(object: AnalyzePlanRequest_Explain_ExplainMode): string {
  switch (object) {
    case AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_UNSPECIFIED:
      return "EXPLAIN_MODE_UNSPECIFIED";
    case AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_SIMPLE:
      return "EXPLAIN_MODE_SIMPLE";
    case AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_EXTENDED:
      return "EXPLAIN_MODE_EXTENDED";
    case AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_CODEGEN:
      return "EXPLAIN_MODE_CODEGEN";
    case AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_COST:
      return "EXPLAIN_MODE_COST";
    case AnalyzePlanRequest_Explain_ExplainMode.EXPLAIN_MODE_FORMATTED:
      return "EXPLAIN_MODE_FORMATTED";
    case AnalyzePlanRequest_Explain_ExplainMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AnalyzePlanRequest_TreeString {
  /** (Required) The logical plan to be analyzed. */
  plan:
    | Plan
    | undefined;
  /** (Optional) Max level of the schema. */
  level?: number | undefined;
}

export interface AnalyzePlanRequest_IsLocal {
  /** (Required) The logical plan to be analyzed. */
  plan: Plan | undefined;
}

export interface AnalyzePlanRequest_IsStreaming {
  /** (Required) The logical plan to be analyzed. */
  plan: Plan | undefined;
}

export interface AnalyzePlanRequest_InputFiles {
  /** (Required) The logical plan to be analyzed. */
  plan: Plan | undefined;
}

export interface AnalyzePlanRequest_SparkVersion {
}

export interface AnalyzePlanRequest_DDLParse {
  /** (Required) The DDL formatted string to be parsed. */
  ddlString: string;
}

/** Returns `true` when the logical query plans  are equal and therefore return same results. */
export interface AnalyzePlanRequest_SameSemantics {
  /** (Required) The plan to be compared. */
  targetPlan:
    | Plan
    | undefined;
  /** (Required) The other plan to be compared. */
  otherPlan: Plan | undefined;
}

export interface AnalyzePlanRequest_SemanticHash {
  /** (Required) The logical plan to get a hashCode. */
  plan: Plan | undefined;
}

export interface AnalyzePlanRequest_Persist {
  /** (Required) The logical plan to persist. */
  relation:
    | Relation
    | undefined;
  /** (Optional) The storage level. */
  storageLevel?: StorageLevel | undefined;
}

export interface AnalyzePlanRequest_Unpersist {
  /** (Required) The logical plan to unpersist. */
  relation:
    | Relation
    | undefined;
  /** (Optional) Whether to block until all blocks are deleted. */
  blocking?: boolean | undefined;
}

export interface AnalyzePlanRequest_GetStorageLevel {
  /** (Required) The logical plan to get the storage level. */
  relation: Relation | undefined;
}

/**
 * Response to performing analysis of the query. Contains relevant metadata to be able to
 * reason about the performance.
 */
export interface AnalyzePlanResponse {
  sessionId: string;
  schema?: AnalyzePlanResponse_Schema | undefined;
  explain?: AnalyzePlanResponse_Explain | undefined;
  treeString?: AnalyzePlanResponse_TreeString | undefined;
  isLocal?: AnalyzePlanResponse_IsLocal | undefined;
  isStreaming?: AnalyzePlanResponse_IsStreaming | undefined;
  inputFiles?: AnalyzePlanResponse_InputFiles | undefined;
  sparkVersion?: AnalyzePlanResponse_SparkVersion | undefined;
  ddlParse?: AnalyzePlanResponse_DDLParse | undefined;
  sameSemantics?: AnalyzePlanResponse_SameSemantics | undefined;
  semanticHash?: AnalyzePlanResponse_SemanticHash | undefined;
  persist?: AnalyzePlanResponse_Persist | undefined;
  unpersist?: AnalyzePlanResponse_Unpersist | undefined;
  getStorageLevel?: AnalyzePlanResponse_GetStorageLevel | undefined;
}

export interface AnalyzePlanResponse_Schema {
  schema: DataType | undefined;
}

export interface AnalyzePlanResponse_Explain {
  explainString: string;
}

export interface AnalyzePlanResponse_TreeString {
  treeString: string;
}

export interface AnalyzePlanResponse_IsLocal {
  isLocal: boolean;
}

export interface AnalyzePlanResponse_IsStreaming {
  isStreaming: boolean;
}

export interface AnalyzePlanResponse_InputFiles {
  /** A best-effort snapshot of the files that compose this Dataset */
  files: string[];
}

export interface AnalyzePlanResponse_SparkVersion {
  version: string;
}

export interface AnalyzePlanResponse_DDLParse {
  parsed: DataType | undefined;
}

export interface AnalyzePlanResponse_SameSemantics {
  result: boolean;
}

export interface AnalyzePlanResponse_SemanticHash {
  result: number;
}

export interface AnalyzePlanResponse_Persist {
}

export interface AnalyzePlanResponse_Unpersist {
}

export interface AnalyzePlanResponse_GetStorageLevel {
  /** (Required) The StorageLevel as a result of get_storage_level request. */
  storageLevel: StorageLevel | undefined;
}

/** A request to be executed by the service. */
export interface ExecutePlanRequest {
  /**
   * (Required)
   *
   * The session_id specifies a spark session for a user id (which is specified
   * by user_context.user_id). The session_id is set by the client to be able to
   * collate streaming responses from different queries within the dedicated session.
   * The id should be an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  sessionId: string;
  /**
   * (Required) User context
   *
   * user_context.user_id and session+id both identify a unique remote spark session on the
   * server side.
   */
  userContext:
    | UserContext
    | undefined;
  /**
   * (Optional)
   * Provide an id for this request. If not provided, it will be generated by the server.
   * It is returned in every ExecutePlanResponse.operation_id of the ExecutePlan response stream.
   * The id must be an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  operationId?:
    | string
    | undefined;
  /** (Required) The logical plan to be executed / analyzed. */
  plan:
    | Plan
    | undefined;
  /**
   * Provides optional information about the client sending the request. This field
   * can be used for language or version specific information and is only intended for
   * logging purposes and will not be interpreted by the server.
   */
  clientType?:
    | string
    | undefined;
  /**
   * Repeated element for options that can be passed to the request. This element is currently
   * unused but allows to pass in an extension value used for arbitrary options.
   */
  requestOptions: ExecutePlanRequest_RequestOption[];
  /**
   * Tags to tag the given execution with.
   * Tags cannot contain ',' character and cannot be empty strings.
   * Used by Interrupt with interrupt.tag.
   */
  tags: string[];
}

export interface ExecutePlanRequest_RequestOption {
  reattachOptions?:
    | ReattachOptions
    | undefined;
  /** Extension type for request options */
  extension?: Any | undefined;
}

/**
 * The response of a query, can be one or more for each request. Responses belonging to the
 * same input query, carry the same `session_id`.
 */
export interface ExecutePlanResponse {
  sessionId: string;
  /**
   * Identifies the ExecutePlan execution.
   * If set by the client in ExecutePlanRequest.operationId, that value is returned.
   * Otherwise generated by the server.
   * It is an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  operationId: string;
  /**
   * Identified the response in the stream.
   * The id is an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  responseId: string;
  arrowBatch?:
    | ExecutePlanResponse_ArrowBatch
    | undefined;
  /** Special case for executing SQL commands. */
  sqlCommandResult?:
    | ExecutePlanResponse_SqlCommandResult
    | undefined;
  /** Response for a streaming query. */
  writeStreamOperationStartResult?:
    | WriteStreamOperationStartResult
    | undefined;
  /** Response for commands on a streaming query. */
  streamingQueryCommandResult?:
    | StreamingQueryCommandResult
    | undefined;
  /** Response for 'SparkContext.resources'. */
  getResourcesCommandResult?:
    | GetResourcesCommandResult
    | undefined;
  /** Response for commands on the streaming query manager. */
  streamingQueryManagerCommandResult?:
    | StreamingQueryManagerCommandResult
    | undefined;
  /** Response type informing if the stream is complete in reattachable execution. */
  resultComplete?:
    | ExecutePlanResponse_ResultComplete
    | undefined;
  /** Support arbitrary result objects. */
  extension?:
    | Any
    | undefined;
  /**
   * Metrics for the query execution. Typically, this field is only present in the last
   * batch of results and then represent the overall state of the query execution.
   */
  metrics:
    | ExecutePlanResponse_Metrics
    | undefined;
  /** The metrics observed during the execution of the query plan. */
  observedMetrics: ExecutePlanResponse_ObservedMetrics[];
  /** (Optional) The Spark schema. This field is available when `collect` is called. */
  schema: DataType | undefined;
}

/**
 * A SQL command returns an opaque Relation that can be directly used as input for the next
 * call.
 */
export interface ExecutePlanResponse_SqlCommandResult {
  relation: Relation | undefined;
}

/** Batch results of metrics. */
export interface ExecutePlanResponse_ArrowBatch {
  rowCount: number;
  data: Uint8Array;
}

export interface ExecutePlanResponse_Metrics {
  metrics: ExecutePlanResponse_Metrics_MetricObject[];
}

export interface ExecutePlanResponse_Metrics_MetricObject {
  name: string;
  planId: number;
  parent: number;
  executionMetrics: { [key: string]: ExecutePlanResponse_Metrics_MetricValue };
}

export interface ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry {
  key: string;
  value: ExecutePlanResponse_Metrics_MetricValue | undefined;
}

export interface ExecutePlanResponse_Metrics_MetricValue {
  name: string;
  value: number;
  metricType: string;
}

export interface ExecutePlanResponse_ObservedMetrics {
  name: string;
  values: Expression_Literal[];
}

/**
 * If present, in a reattachable execution this means that after server sends onComplete,
 * the execution is complete. If the server sends onComplete without sending a ResultComplete,
 * it means that there is more, and the client should use ReattachExecute RPC to continue.
 */
export interface ExecutePlanResponse_ResultComplete {
}

/** The key-value pair for the config request and response. */
export interface KeyValue {
  /** (Required) The key. */
  key: string;
  /** (Optional) The value. */
  value?: string | undefined;
}

/** Request to update or fetch the configurations. */
export interface ConfigRequest {
  /**
   * (Required)
   *
   * The session_id specifies a spark session for a user id (which is specified
   * by user_context.user_id). The session_id is set by the client to be able to
   * collate streaming responses from different queries within the dedicated session.
   * The id should be an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  sessionId: string;
  /** (Required) User context */
  userContext:
    | UserContext
    | undefined;
  /** (Required) The operation for the config. */
  operation:
    | ConfigRequest_Operation
    | undefined;
  /**
   * Provides optional information about the client sending the request. This field
   * can be used for language or version specific information and is only intended for
   * logging purposes and will not be interpreted by the server.
   */
  clientType?: string | undefined;
}

export interface ConfigRequest_Operation {
  set?: ConfigRequest_Set | undefined;
  get?: ConfigRequest_Get | undefined;
  getWithDefault?: ConfigRequest_GetWithDefault | undefined;
  getOption?: ConfigRequest_GetOption | undefined;
  getAll?: ConfigRequest_GetAll | undefined;
  unset?: ConfigRequest_Unset | undefined;
  isModifiable?: ConfigRequest_IsModifiable | undefined;
}

export interface ConfigRequest_Set {
  /** (Required) The config key-value pairs to set. */
  pairs: KeyValue[];
}

export interface ConfigRequest_Get {
  /** (Required) The config keys to get. */
  keys: string[];
}

export interface ConfigRequest_GetWithDefault {
  /** (Required) The config key-value paris to get. The value will be used as the default value. */
  pairs: KeyValue[];
}

export interface ConfigRequest_GetOption {
  /** (Required) The config keys to get optionally. */
  keys: string[];
}

export interface ConfigRequest_GetAll {
  /** (Optional) The prefix of the config key to get. */
  prefix?: string | undefined;
}

export interface ConfigRequest_Unset {
  /** (Required) The config keys to unset. */
  keys: string[];
}

export interface ConfigRequest_IsModifiable {
  /** (Required) The config keys to check the config is modifiable. */
  keys: string[];
}

/** Response to the config request. */
export interface ConfigResponse {
  sessionId: string;
  /**
   * (Optional) The result key-value pairs.
   *
   * Available when the operation is 'Get', 'GetWithDefault', 'GetOption', 'GetAll'.
   * Also available for the operation 'IsModifiable' with boolean string "true" and "false".
   */
  pairs: KeyValue[];
  /**
   * (Optional)
   *
   * Warning messages for deprecated or unsupported configurations.
   */
  warnings: string[];
}

/** Request to transfer client-local artifacts. */
export interface AddArtifactsRequest {
  /**
   * (Required)
   *
   * The session_id specifies a spark session for a user id (which is specified
   * by user_context.user_id). The session_id is set by the client to be able to
   * collate streaming responses from different queries within the dedicated session.
   * The id should be an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  sessionId: string;
  /** User context */
  userContext:
    | UserContext
    | undefined;
  /**
   * Provides optional information about the client sending the request. This field
   * can be used for language or version specific information and is only intended for
   * logging purposes and will not be interpreted by the server.
   */
  clientType?: string | undefined;
  batch?:
    | AddArtifactsRequest_Batch
    | undefined;
  /**
   * The metadata and the initial chunk of a large artifact chunked into multiple requests.
   * The server side is notified about the total size of the large artifact as well as the
   * number of chunks to expect.
   */
  beginChunk?:
    | AddArtifactsRequest_BeginChunkedArtifact
    | undefined;
  /**
   * A chunk of an artifact excluding metadata. This can be any chunk of a large artifact
   * excluding the first chunk (which is included in `BeginChunkedArtifact`).
   */
  chunk?: AddArtifactsRequest_ArtifactChunk | undefined;
}

/** A chunk of an Artifact. */
export interface AddArtifactsRequest_ArtifactChunk {
  /** Data chunk. */
  data: Uint8Array;
  /** CRC to allow server to verify integrity of the chunk. */
  crc: number;
}

/**
 * An artifact that is contained in a single `ArtifactChunk`.
 * Generally, this message represents tiny artifacts such as REPL-generated class files.
 */
export interface AddArtifactsRequest_SingleChunkArtifact {
  /**
   * The name of the artifact is expected in the form of a "Relative Path" that is made up of a
   * sequence of directories and the final file element.
   * Examples of "Relative Path"s: "jars/test.jar", "classes/xyz.class", "abc.xyz", "a/b/X.jar".
   * The server is expected to maintain the hierarchy of files as defined by their name. (i.e
   * The relative path of the file on the server's filesystem will be the same as the name of
   * the provided artifact)
   */
  name: string;
  /** A single data chunk. */
  data: AddArtifactsRequest_ArtifactChunk | undefined;
}

/** A number of `SingleChunkArtifact` batched into a single RPC. */
export interface AddArtifactsRequest_Batch {
  artifacts: AddArtifactsRequest_SingleChunkArtifact[];
}

/**
 * Signals the beginning/start of a chunked artifact.
 * A large artifact is transferred through a payload of `BeginChunkedArtifact` followed by a
 * sequence of `ArtifactChunk`s.
 */
export interface AddArtifactsRequest_BeginChunkedArtifact {
  /**
   * Name of the artifact undergoing chunking. Follows the same conventions as the `name` in
   * the `Artifact` message.
   */
  name: string;
  /** Total size of the artifact in bytes. */
  totalBytes: number;
  /**
   * Number of chunks the artifact is split into.
   * This includes the `initial_chunk`.
   */
  numChunks: number;
  /** The first/initial chunk. */
  initialChunk: AddArtifactsRequest_ArtifactChunk | undefined;
}

/**
 * Response to adding an artifact. Contains relevant metadata to verify successful transfer of
 * artifact(s).
 */
export interface AddArtifactsResponse {
  /** The list of artifact(s) seen by the server. */
  artifacts: AddArtifactsResponse_ArtifactSummary[];
}

/** Metadata of an artifact. */
export interface AddArtifactsResponse_ArtifactSummary {
  name: string;
  /**
   * Whether the CRC (Cyclic Redundancy Check) is successful on server verification.
   * The server discards any artifact that fails the CRC.
   * If false, the client may choose to resend the artifact specified by `name`.
   */
  isCrcSuccessful: boolean;
}

/** Request to get current statuses of artifacts at the server side. */
export interface ArtifactStatusesRequest {
  /**
   * (Required)
   *
   * The session_id specifies a spark session for a user id (which is specified
   * by user_context.user_id). The session_id is set by the client to be able to
   * collate streaming responses from different queries within the dedicated session.
   * The id should be an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  sessionId: string;
  /** User context */
  userContext:
    | UserContext
    | undefined;
  /**
   * Provides optional information about the client sending the request. This field
   * can be used for language or version specific information and is only intended for
   * logging purposes and will not be interpreted by the server.
   */
  clientType?:
    | string
    | undefined;
  /**
   * The name of the artifact is expected in the form of a "Relative Path" that is made up of a
   * sequence of directories and the final file element.
   * Examples of "Relative Path"s: "jars/test.jar", "classes/xyz.class", "abc.xyz", "a/b/X.jar".
   * The server is expected to maintain the hierarchy of files as defined by their name. (i.e
   * The relative path of the file on the server's filesystem will be the same as the name of
   * the provided artifact)
   */
  names: string[];
}

/** Response to checking artifact statuses. */
export interface ArtifactStatusesResponse {
  /** A map of artifact names to their statuses. */
  statuses: { [key: string]: ArtifactStatusesResponse_ArtifactStatus };
}

export interface ArtifactStatusesResponse_ArtifactStatus {
  /** Exists or not particular artifact at the server. */
  exists: boolean;
}

export interface ArtifactStatusesResponse_StatusesEntry {
  key: string;
  value: ArtifactStatusesResponse_ArtifactStatus | undefined;
}

export interface InterruptRequest {
  /**
   * (Required)
   *
   * The session_id specifies a spark session for a user id (which is specified
   * by user_context.user_id). The session_id is set by the client to be able to
   * collate streaming responses from different queries within the dedicated session.
   * The id should be an UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`
   */
  sessionId: string;
  /** (Required) User context */
  userContext:
    | UserContext
    | undefined;
  /**
   * Provides optional information about the client sending the request. This field
   * can be used for language or version specific information and is only intended for
   * logging purposes and will not be interpreted by the server.
   */
  clientType?:
    | string
    | undefined;
  /** (Required) The type of interrupt to execute. */
  interruptType: InterruptRequest_InterruptType;
  /** if interrupt_tag == INTERRUPT_TYPE_TAG, interrupt operation with this tag. */
  operationTag?:
    | string
    | undefined;
  /** if interrupt_tag == INTERRUPT_TYPE_OPERATION_ID, interrupt operation with this operation_id. */
  operationId?: string | undefined;
}

export enum InterruptRequest_InterruptType {
  INTERRUPT_TYPE_UNSPECIFIED = 0,
  /** INTERRUPT_TYPE_ALL - Interrupt all running executions within the session with the provided session_id. */
  INTERRUPT_TYPE_ALL = 1,
  /** INTERRUPT_TYPE_TAG - Interrupt all running executions within the session with the provided operation_tag. */
  INTERRUPT_TYPE_TAG = 2,
  /** INTERRUPT_TYPE_OPERATION_ID - Interrupt the running execution within the session with the provided operation_id. */
  INTERRUPT_TYPE_OPERATION_ID = 3,
  UNRECOGNIZED = -1,
}

export function interruptRequest_InterruptTypeFromJSON(object: any): InterruptRequest_InterruptType {
  switch (object) {
    case 0:
    case "INTERRUPT_TYPE_UNSPECIFIED":
      return InterruptRequest_InterruptType.INTERRUPT_TYPE_UNSPECIFIED;
    case 1:
    case "INTERRUPT_TYPE_ALL":
      return InterruptRequest_InterruptType.INTERRUPT_TYPE_ALL;
    case 2:
    case "INTERRUPT_TYPE_TAG":
      return InterruptRequest_InterruptType.INTERRUPT_TYPE_TAG;
    case 3:
    case "INTERRUPT_TYPE_OPERATION_ID":
      return InterruptRequest_InterruptType.INTERRUPT_TYPE_OPERATION_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InterruptRequest_InterruptType.UNRECOGNIZED;
  }
}

export function interruptRequest_InterruptTypeToJSON(object: InterruptRequest_InterruptType): string {
  switch (object) {
    case InterruptRequest_InterruptType.INTERRUPT_TYPE_UNSPECIFIED:
      return "INTERRUPT_TYPE_UNSPECIFIED";
    case InterruptRequest_InterruptType.INTERRUPT_TYPE_ALL:
      return "INTERRUPT_TYPE_ALL";
    case InterruptRequest_InterruptType.INTERRUPT_TYPE_TAG:
      return "INTERRUPT_TYPE_TAG";
    case InterruptRequest_InterruptType.INTERRUPT_TYPE_OPERATION_ID:
      return "INTERRUPT_TYPE_OPERATION_ID";
    case InterruptRequest_InterruptType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface InterruptResponse {
  /** Session id in which the interrupt was running. */
  sessionId: string;
  /** Operation ids of the executions which were interrupted. */
  interruptedIds: string[];
}

export interface ReattachOptions {
  /**
   * If true, the request can be reattached to using ReattachExecute.
   * ReattachExecute can be used either if the stream broke with a GRPC network error,
   * or if the server closed the stream without sending a response with StreamStatus.complete=true.
   * The server will keep a buffer of responses in case a response is lost, and
   * ReattachExecute needs to back-track.
   *
   * If false, the execution response stream will will not be reattachable, and all responses are
   * immediately released by the server after being sent.
   */
  reattachable: boolean;
}

export interface ReattachExecuteRequest {
  /**
   * (Required)
   *
   * The session_id of the request to reattach to.
   * This must be an id of existing session.
   */
  sessionId: string;
  /**
   * (Required) User context
   *
   * user_context.user_id and session+id both identify a unique remote spark session on the
   * server side.
   */
  userContext:
    | UserContext
    | undefined;
  /**
   * (Required)
   * Provide an id of the request to reattach to.
   * This must be an id of existing operation.
   */
  operationId: string;
  /**
   * Provides optional information about the client sending the request. This field
   * can be used for language or version specific information and is only intended for
   * logging purposes and will not be interpreted by the server.
   */
  clientType?:
    | string
    | undefined;
  /**
   * (Optional)
   * Last already processed response id from the response stream.
   * After reattach, server will resume the response stream after that response.
   * If not specified, server will restart the stream from the start.
   *
   * Note: server controls the amount of responses that it buffers and it may drop responses,
   * that are far behind the latest returned response, so this can't be used to arbitrarily
   * scroll back the cursor. If the response is no longer available, this will result in an error.
   */
  lastResponseId?: string | undefined;
}

export interface ReleaseExecuteRequest {
  /**
   * (Required)
   *
   * The session_id of the request to reattach to.
   * This must be an id of existing session.
   */
  sessionId: string;
  /**
   * (Required) User context
   *
   * user_context.user_id and session+id both identify a unique remote spark session on the
   * server side.
   */
  userContext:
    | UserContext
    | undefined;
  /**
   * (Required)
   * Provide an id of the request to reattach to.
   * This must be an id of existing operation.
   */
  operationId: string;
  /**
   * Provides optional information about the client sending the request. This field
   * can be used for language or version specific information and is only intended for
   * logging purposes and will not be interpreted by the server.
   */
  clientType?: string | undefined;
  releaseAll?: ReleaseExecuteRequest_ReleaseAll | undefined;
  releaseUntil?: ReleaseExecuteRequest_ReleaseUntil | undefined;
}

/**
 * Release and close operation completely.
 * This will also interrupt the query if it is running execution, and wait for it to be torn down.
 */
export interface ReleaseExecuteRequest_ReleaseAll {
}

/**
 * Release all responses from the operation response stream up to and including
 * the response with the given by response_id.
 * While server determines by itself how much of a buffer of responses to keep, client providing
 * explicit release calls will help reduce resource consumption.
 * Noop if response_id not found in cached responses.
 */
export interface ReleaseExecuteRequest_ReleaseUntil {
  responseId: string;
}

export interface ReleaseExecuteResponse {
  /** Session id in which the release was running. */
  sessionId: string;
  /**
   * Operation id of the operation on which the release executed.
   * If the operation couldn't be found (because e.g. it was concurrently released), will be unset.
   * Otherwise, it will be equal to the operation_id from request.
   */
  operationId?: string | undefined;
}

export interface FetchErrorDetailsRequest {
  /**
   * (Required)
   * The session_id specifies a Spark session for a user identified by user_context.user_id.
   * The id should be a UUID string of the format `00112233-4455-6677-8899-aabbccddeeff`.
   */
  sessionId: string;
  /** User context */
  userContext:
    | UserContext
    | undefined;
  /**
   * (Required)
   * The id of the error.
   */
  errorId: string;
}

export interface FetchErrorDetailsResponse {
  /** The index of the root error in errors. The field will not be set if the error is not found. */
  rootErrorIdx?:
    | number
    | undefined;
  /** A list of errors. */
  errors: FetchErrorDetailsResponse_Error[];
}

export interface FetchErrorDetailsResponse_StackTraceElement {
  /** The fully qualified name of the class containing the execution point. */
  declaringClass: string;
  /** The name of the method containing the execution point. */
  methodName: string;
  /** The name of the file containing the execution point. */
  fileName: string;
  /** The line number of the source line containing the execution point. */
  lineNumber: number;
}

/** Error defines the schema for the representing exception. */
export interface FetchErrorDetailsResponse_Error {
  /** The fully qualified names of the exception class and its parent classes. */
  errorTypeHierarchy: string[];
  /** The detailed message of the exception. */
  message: string;
  /**
   * The stackTrace of the exception. It will be set
   * if the SQLConf spark.sql.connect.serverStacktrace.enabled is true.
   */
  stackTrace: FetchErrorDetailsResponse_StackTraceElement[];
  /** The index of the cause error in errors. */
  causeIdx?: number | undefined;
}

function createBasePlan(): Plan {
  return { root: undefined, command: undefined };
}

export const Plan = {
  encode(message: Plan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.root !== undefined) {
      Relation.encode(message.root, writer.uint32(10).fork()).ldelim();
    }
    if (message.command !== undefined) {
      Command.encode(message.command, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.root = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.command = Command.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Plan {
    return {
      root: isSet(object.root) ? Relation.fromJSON(object.root) : undefined,
      command: isSet(object.command) ? Command.fromJSON(object.command) : undefined,
    };
  },

  toJSON(message: Plan): unknown {
    const obj: any = {};
    if (message.root !== undefined) {
      obj.root = Relation.toJSON(message.root);
    }
    if (message.command !== undefined) {
      obj.command = Command.toJSON(message.command);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Plan>, I>>(base?: I): Plan {
    return Plan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Plan>, I>>(object: I): Plan {
    const message = createBasePlan();
    message.root = (object.root !== undefined && object.root !== null) ? Relation.fromPartial(object.root) : undefined;
    message.command = (object.command !== undefined && object.command !== null)
      ? Command.fromPartial(object.command)
      : undefined;
    return message;
  },
};

function createBaseUserContext(): UserContext {
  return { userId: "", userName: "", extensions: [] };
}

export const UserContext = {
  encode(message: UserContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.extensions.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserContext {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      extensions: globalThis.Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserContext): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserContext>, I>>(base?: I): UserContext {
    return UserContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserContext>, I>>(object: I): UserContext {
    const message = createBaseUserContext();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.extensions = object.extensions?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAnalyzePlanRequest(): AnalyzePlanRequest {
  return {
    sessionId: "",
    userContext: undefined,
    clientType: undefined,
    schema: undefined,
    explain: undefined,
    treeString: undefined,
    isLocal: undefined,
    isStreaming: undefined,
    inputFiles: undefined,
    sparkVersion: undefined,
    ddlParse: undefined,
    sameSemantics: undefined,
    semanticHash: undefined,
    persist: undefined,
    unpersist: undefined,
    getStorageLevel: undefined,
  };
}

export const AnalyzePlanRequest = {
  encode(message: AnalyzePlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.clientType !== undefined) {
      writer.uint32(26).string(message.clientType);
    }
    if (message.schema !== undefined) {
      AnalyzePlanRequest_Schema.encode(message.schema, writer.uint32(34).fork()).ldelim();
    }
    if (message.explain !== undefined) {
      AnalyzePlanRequest_Explain.encode(message.explain, writer.uint32(42).fork()).ldelim();
    }
    if (message.treeString !== undefined) {
      AnalyzePlanRequest_TreeString.encode(message.treeString, writer.uint32(50).fork()).ldelim();
    }
    if (message.isLocal !== undefined) {
      AnalyzePlanRequest_IsLocal.encode(message.isLocal, writer.uint32(58).fork()).ldelim();
    }
    if (message.isStreaming !== undefined) {
      AnalyzePlanRequest_IsStreaming.encode(message.isStreaming, writer.uint32(66).fork()).ldelim();
    }
    if (message.inputFiles !== undefined) {
      AnalyzePlanRequest_InputFiles.encode(message.inputFiles, writer.uint32(74).fork()).ldelim();
    }
    if (message.sparkVersion !== undefined) {
      AnalyzePlanRequest_SparkVersion.encode(message.sparkVersion, writer.uint32(82).fork()).ldelim();
    }
    if (message.ddlParse !== undefined) {
      AnalyzePlanRequest_DDLParse.encode(message.ddlParse, writer.uint32(90).fork()).ldelim();
    }
    if (message.sameSemantics !== undefined) {
      AnalyzePlanRequest_SameSemantics.encode(message.sameSemantics, writer.uint32(98).fork()).ldelim();
    }
    if (message.semanticHash !== undefined) {
      AnalyzePlanRequest_SemanticHash.encode(message.semanticHash, writer.uint32(106).fork()).ldelim();
    }
    if (message.persist !== undefined) {
      AnalyzePlanRequest_Persist.encode(message.persist, writer.uint32(114).fork()).ldelim();
    }
    if (message.unpersist !== undefined) {
      AnalyzePlanRequest_Unpersist.encode(message.unpersist, writer.uint32(122).fork()).ldelim();
    }
    if (message.getStorageLevel !== undefined) {
      AnalyzePlanRequest_GetStorageLevel.encode(message.getStorageLevel, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clientType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.schema = AnalyzePlanRequest_Schema.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.explain = AnalyzePlanRequest_Explain.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.treeString = AnalyzePlanRequest_TreeString.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.isLocal = AnalyzePlanRequest_IsLocal.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.isStreaming = AnalyzePlanRequest_IsStreaming.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.inputFiles = AnalyzePlanRequest_InputFiles.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sparkVersion = AnalyzePlanRequest_SparkVersion.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.ddlParse = AnalyzePlanRequest_DDLParse.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.sameSemantics = AnalyzePlanRequest_SameSemantics.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.semanticHash = AnalyzePlanRequest_SemanticHash.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.persist = AnalyzePlanRequest_Persist.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.unpersist = AnalyzePlanRequest_Unpersist.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.getStorageLevel = AnalyzePlanRequest_GetStorageLevel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
      schema: isSet(object.schema) ? AnalyzePlanRequest_Schema.fromJSON(object.schema) : undefined,
      explain: isSet(object.explain) ? AnalyzePlanRequest_Explain.fromJSON(object.explain) : undefined,
      treeString: isSet(object.treeString) ? AnalyzePlanRequest_TreeString.fromJSON(object.treeString) : undefined,
      isLocal: isSet(object.isLocal) ? AnalyzePlanRequest_IsLocal.fromJSON(object.isLocal) : undefined,
      isStreaming: isSet(object.isStreaming) ? AnalyzePlanRequest_IsStreaming.fromJSON(object.isStreaming) : undefined,
      inputFiles: isSet(object.inputFiles) ? AnalyzePlanRequest_InputFiles.fromJSON(object.inputFiles) : undefined,
      sparkVersion: isSet(object.sparkVersion)
        ? AnalyzePlanRequest_SparkVersion.fromJSON(object.sparkVersion)
        : undefined,
      ddlParse: isSet(object.ddlParse) ? AnalyzePlanRequest_DDLParse.fromJSON(object.ddlParse) : undefined,
      sameSemantics: isSet(object.sameSemantics)
        ? AnalyzePlanRequest_SameSemantics.fromJSON(object.sameSemantics)
        : undefined,
      semanticHash: isSet(object.semanticHash)
        ? AnalyzePlanRequest_SemanticHash.fromJSON(object.semanticHash)
        : undefined,
      persist: isSet(object.persist) ? AnalyzePlanRequest_Persist.fromJSON(object.persist) : undefined,
      unpersist: isSet(object.unpersist) ? AnalyzePlanRequest_Unpersist.fromJSON(object.unpersist) : undefined,
      getStorageLevel: isSet(object.getStorageLevel)
        ? AnalyzePlanRequest_GetStorageLevel.fromJSON(object.getStorageLevel)
        : undefined,
    };
  },

  toJSON(message: AnalyzePlanRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.clientType !== undefined) {
      obj.clientType = message.clientType;
    }
    if (message.schema !== undefined) {
      obj.schema = AnalyzePlanRequest_Schema.toJSON(message.schema);
    }
    if (message.explain !== undefined) {
      obj.explain = AnalyzePlanRequest_Explain.toJSON(message.explain);
    }
    if (message.treeString !== undefined) {
      obj.treeString = AnalyzePlanRequest_TreeString.toJSON(message.treeString);
    }
    if (message.isLocal !== undefined) {
      obj.isLocal = AnalyzePlanRequest_IsLocal.toJSON(message.isLocal);
    }
    if (message.isStreaming !== undefined) {
      obj.isStreaming = AnalyzePlanRequest_IsStreaming.toJSON(message.isStreaming);
    }
    if (message.inputFiles !== undefined) {
      obj.inputFiles = AnalyzePlanRequest_InputFiles.toJSON(message.inputFiles);
    }
    if (message.sparkVersion !== undefined) {
      obj.sparkVersion = AnalyzePlanRequest_SparkVersion.toJSON(message.sparkVersion);
    }
    if (message.ddlParse !== undefined) {
      obj.ddlParse = AnalyzePlanRequest_DDLParse.toJSON(message.ddlParse);
    }
    if (message.sameSemantics !== undefined) {
      obj.sameSemantics = AnalyzePlanRequest_SameSemantics.toJSON(message.sameSemantics);
    }
    if (message.semanticHash !== undefined) {
      obj.semanticHash = AnalyzePlanRequest_SemanticHash.toJSON(message.semanticHash);
    }
    if (message.persist !== undefined) {
      obj.persist = AnalyzePlanRequest_Persist.toJSON(message.persist);
    }
    if (message.unpersist !== undefined) {
      obj.unpersist = AnalyzePlanRequest_Unpersist.toJSON(message.unpersist);
    }
    if (message.getStorageLevel !== undefined) {
      obj.getStorageLevel = AnalyzePlanRequest_GetStorageLevel.toJSON(message.getStorageLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest>, I>>(base?: I): AnalyzePlanRequest {
    return AnalyzePlanRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest>, I>>(object: I): AnalyzePlanRequest {
    const message = createBaseAnalyzePlanRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.clientType = object.clientType ?? undefined;
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? AnalyzePlanRequest_Schema.fromPartial(object.schema)
      : undefined;
    message.explain = (object.explain !== undefined && object.explain !== null)
      ? AnalyzePlanRequest_Explain.fromPartial(object.explain)
      : undefined;
    message.treeString = (object.treeString !== undefined && object.treeString !== null)
      ? AnalyzePlanRequest_TreeString.fromPartial(object.treeString)
      : undefined;
    message.isLocal = (object.isLocal !== undefined && object.isLocal !== null)
      ? AnalyzePlanRequest_IsLocal.fromPartial(object.isLocal)
      : undefined;
    message.isStreaming = (object.isStreaming !== undefined && object.isStreaming !== null)
      ? AnalyzePlanRequest_IsStreaming.fromPartial(object.isStreaming)
      : undefined;
    message.inputFiles = (object.inputFiles !== undefined && object.inputFiles !== null)
      ? AnalyzePlanRequest_InputFiles.fromPartial(object.inputFiles)
      : undefined;
    message.sparkVersion = (object.sparkVersion !== undefined && object.sparkVersion !== null)
      ? AnalyzePlanRequest_SparkVersion.fromPartial(object.sparkVersion)
      : undefined;
    message.ddlParse = (object.ddlParse !== undefined && object.ddlParse !== null)
      ? AnalyzePlanRequest_DDLParse.fromPartial(object.ddlParse)
      : undefined;
    message.sameSemantics = (object.sameSemantics !== undefined && object.sameSemantics !== null)
      ? AnalyzePlanRequest_SameSemantics.fromPartial(object.sameSemantics)
      : undefined;
    message.semanticHash = (object.semanticHash !== undefined && object.semanticHash !== null)
      ? AnalyzePlanRequest_SemanticHash.fromPartial(object.semanticHash)
      : undefined;
    message.persist = (object.persist !== undefined && object.persist !== null)
      ? AnalyzePlanRequest_Persist.fromPartial(object.persist)
      : undefined;
    message.unpersist = (object.unpersist !== undefined && object.unpersist !== null)
      ? AnalyzePlanRequest_Unpersist.fromPartial(object.unpersist)
      : undefined;
    message.getStorageLevel = (object.getStorageLevel !== undefined && object.getStorageLevel !== null)
      ? AnalyzePlanRequest_GetStorageLevel.fromPartial(object.getStorageLevel)
      : undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_Schema(): AnalyzePlanRequest_Schema {
  return { plan: undefined };
}

export const AnalyzePlanRequest_Schema = {
  encode(message: AnalyzePlanRequest_Schema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_Schema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_Schema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_Schema {
    return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
  },

  toJSON(message: AnalyzePlanRequest_Schema): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_Schema>, I>>(base?: I): AnalyzePlanRequest_Schema {
    return AnalyzePlanRequest_Schema.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_Schema>, I>>(object: I): AnalyzePlanRequest_Schema {
    const message = createBaseAnalyzePlanRequest_Schema();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_Explain(): AnalyzePlanRequest_Explain {
  return { plan: undefined, explainMode: 0 };
}

export const AnalyzePlanRequest_Explain = {
  encode(message: AnalyzePlanRequest_Explain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    if (message.explainMode !== 0) {
      writer.uint32(16).int32(message.explainMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_Explain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_Explain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.explainMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_Explain {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
      explainMode: isSet(object.explainMode) ? analyzePlanRequest_Explain_ExplainModeFromJSON(object.explainMode) : 0,
    };
  },

  toJSON(message: AnalyzePlanRequest_Explain): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    if (message.explainMode !== 0) {
      obj.explainMode = analyzePlanRequest_Explain_ExplainModeToJSON(message.explainMode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_Explain>, I>>(base?: I): AnalyzePlanRequest_Explain {
    return AnalyzePlanRequest_Explain.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_Explain>, I>>(object: I): AnalyzePlanRequest_Explain {
    const message = createBaseAnalyzePlanRequest_Explain();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    message.explainMode = object.explainMode ?? 0;
    return message;
  },
};

function createBaseAnalyzePlanRequest_TreeString(): AnalyzePlanRequest_TreeString {
  return { plan: undefined, level: undefined };
}

export const AnalyzePlanRequest_TreeString = {
  encode(message: AnalyzePlanRequest_TreeString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    if (message.level !== undefined) {
      writer.uint32(16).int32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_TreeString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_TreeString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.level = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_TreeString {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
      level: isSet(object.level) ? globalThis.Number(object.level) : undefined,
    };
  },

  toJSON(message: AnalyzePlanRequest_TreeString): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    if (message.level !== undefined) {
      obj.level = Math.round(message.level);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_TreeString>, I>>(base?: I): AnalyzePlanRequest_TreeString {
    return AnalyzePlanRequest_TreeString.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_TreeString>, I>>(
    object: I,
  ): AnalyzePlanRequest_TreeString {
    const message = createBaseAnalyzePlanRequest_TreeString();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    message.level = object.level ?? undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_IsLocal(): AnalyzePlanRequest_IsLocal {
  return { plan: undefined };
}

export const AnalyzePlanRequest_IsLocal = {
  encode(message: AnalyzePlanRequest_IsLocal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_IsLocal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_IsLocal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_IsLocal {
    return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
  },

  toJSON(message: AnalyzePlanRequest_IsLocal): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_IsLocal>, I>>(base?: I): AnalyzePlanRequest_IsLocal {
    return AnalyzePlanRequest_IsLocal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_IsLocal>, I>>(object: I): AnalyzePlanRequest_IsLocal {
    const message = createBaseAnalyzePlanRequest_IsLocal();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_IsStreaming(): AnalyzePlanRequest_IsStreaming {
  return { plan: undefined };
}

export const AnalyzePlanRequest_IsStreaming = {
  encode(message: AnalyzePlanRequest_IsStreaming, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_IsStreaming {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_IsStreaming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_IsStreaming {
    return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
  },

  toJSON(message: AnalyzePlanRequest_IsStreaming): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_IsStreaming>, I>>(base?: I): AnalyzePlanRequest_IsStreaming {
    return AnalyzePlanRequest_IsStreaming.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_IsStreaming>, I>>(
    object: I,
  ): AnalyzePlanRequest_IsStreaming {
    const message = createBaseAnalyzePlanRequest_IsStreaming();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_InputFiles(): AnalyzePlanRequest_InputFiles {
  return { plan: undefined };
}

export const AnalyzePlanRequest_InputFiles = {
  encode(message: AnalyzePlanRequest_InputFiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_InputFiles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_InputFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_InputFiles {
    return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
  },

  toJSON(message: AnalyzePlanRequest_InputFiles): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_InputFiles>, I>>(base?: I): AnalyzePlanRequest_InputFiles {
    return AnalyzePlanRequest_InputFiles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_InputFiles>, I>>(
    object: I,
  ): AnalyzePlanRequest_InputFiles {
    const message = createBaseAnalyzePlanRequest_InputFiles();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_SparkVersion(): AnalyzePlanRequest_SparkVersion {
  return {};
}

export const AnalyzePlanRequest_SparkVersion = {
  encode(_: AnalyzePlanRequest_SparkVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_SparkVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_SparkVersion();
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

  fromJSON(_: any): AnalyzePlanRequest_SparkVersion {
    return {};
  },

  toJSON(_: AnalyzePlanRequest_SparkVersion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_SparkVersion>, I>>(base?: I): AnalyzePlanRequest_SparkVersion {
    return AnalyzePlanRequest_SparkVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_SparkVersion>, I>>(_: I): AnalyzePlanRequest_SparkVersion {
    const message = createBaseAnalyzePlanRequest_SparkVersion();
    return message;
  },
};

function createBaseAnalyzePlanRequest_DDLParse(): AnalyzePlanRequest_DDLParse {
  return { ddlString: "" };
}

export const AnalyzePlanRequest_DDLParse = {
  encode(message: AnalyzePlanRequest_DDLParse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ddlString !== "") {
      writer.uint32(10).string(message.ddlString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_DDLParse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_DDLParse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ddlString = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_DDLParse {
    return { ddlString: isSet(object.ddlString) ? globalThis.String(object.ddlString) : "" };
  },

  toJSON(message: AnalyzePlanRequest_DDLParse): unknown {
    const obj: any = {};
    if (message.ddlString !== "") {
      obj.ddlString = message.ddlString;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_DDLParse>, I>>(base?: I): AnalyzePlanRequest_DDLParse {
    return AnalyzePlanRequest_DDLParse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_DDLParse>, I>>(object: I): AnalyzePlanRequest_DDLParse {
    const message = createBaseAnalyzePlanRequest_DDLParse();
    message.ddlString = object.ddlString ?? "";
    return message;
  },
};

function createBaseAnalyzePlanRequest_SameSemantics(): AnalyzePlanRequest_SameSemantics {
  return { targetPlan: undefined, otherPlan: undefined };
}

export const AnalyzePlanRequest_SameSemantics = {
  encode(message: AnalyzePlanRequest_SameSemantics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetPlan !== undefined) {
      Plan.encode(message.targetPlan, writer.uint32(10).fork()).ldelim();
    }
    if (message.otherPlan !== undefined) {
      Plan.encode(message.otherPlan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_SameSemantics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_SameSemantics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetPlan = Plan.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.otherPlan = Plan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_SameSemantics {
    return {
      targetPlan: isSet(object.targetPlan) ? Plan.fromJSON(object.targetPlan) : undefined,
      otherPlan: isSet(object.otherPlan) ? Plan.fromJSON(object.otherPlan) : undefined,
    };
  },

  toJSON(message: AnalyzePlanRequest_SameSemantics): unknown {
    const obj: any = {};
    if (message.targetPlan !== undefined) {
      obj.targetPlan = Plan.toJSON(message.targetPlan);
    }
    if (message.otherPlan !== undefined) {
      obj.otherPlan = Plan.toJSON(message.otherPlan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_SameSemantics>, I>>(
    base?: I,
  ): AnalyzePlanRequest_SameSemantics {
    return AnalyzePlanRequest_SameSemantics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_SameSemantics>, I>>(
    object: I,
  ): AnalyzePlanRequest_SameSemantics {
    const message = createBaseAnalyzePlanRequest_SameSemantics();
    message.targetPlan = (object.targetPlan !== undefined && object.targetPlan !== null)
      ? Plan.fromPartial(object.targetPlan)
      : undefined;
    message.otherPlan = (object.otherPlan !== undefined && object.otherPlan !== null)
      ? Plan.fromPartial(object.otherPlan)
      : undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_SemanticHash(): AnalyzePlanRequest_SemanticHash {
  return { plan: undefined };
}

export const AnalyzePlanRequest_SemanticHash = {
  encode(message: AnalyzePlanRequest_SemanticHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_SemanticHash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_SemanticHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_SemanticHash {
    return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
  },

  toJSON(message: AnalyzePlanRequest_SemanticHash): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_SemanticHash>, I>>(base?: I): AnalyzePlanRequest_SemanticHash {
    return AnalyzePlanRequest_SemanticHash.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_SemanticHash>, I>>(
    object: I,
  ): AnalyzePlanRequest_SemanticHash {
    const message = createBaseAnalyzePlanRequest_SemanticHash();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_Persist(): AnalyzePlanRequest_Persist {
  return { relation: undefined, storageLevel: undefined };
}

export const AnalyzePlanRequest_Persist = {
  encode(message: AnalyzePlanRequest_Persist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relation !== undefined) {
      Relation.encode(message.relation, writer.uint32(10).fork()).ldelim();
    }
    if (message.storageLevel !== undefined) {
      StorageLevel.encode(message.storageLevel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_Persist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_Persist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relation = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.storageLevel = StorageLevel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_Persist {
    return {
      relation: isSet(object.relation) ? Relation.fromJSON(object.relation) : undefined,
      storageLevel: isSet(object.storageLevel) ? StorageLevel.fromJSON(object.storageLevel) : undefined,
    };
  },

  toJSON(message: AnalyzePlanRequest_Persist): unknown {
    const obj: any = {};
    if (message.relation !== undefined) {
      obj.relation = Relation.toJSON(message.relation);
    }
    if (message.storageLevel !== undefined) {
      obj.storageLevel = StorageLevel.toJSON(message.storageLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_Persist>, I>>(base?: I): AnalyzePlanRequest_Persist {
    return AnalyzePlanRequest_Persist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_Persist>, I>>(object: I): AnalyzePlanRequest_Persist {
    const message = createBaseAnalyzePlanRequest_Persist();
    message.relation = (object.relation !== undefined && object.relation !== null)
      ? Relation.fromPartial(object.relation)
      : undefined;
    message.storageLevel = (object.storageLevel !== undefined && object.storageLevel !== null)
      ? StorageLevel.fromPartial(object.storageLevel)
      : undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_Unpersist(): AnalyzePlanRequest_Unpersist {
  return { relation: undefined, blocking: undefined };
}

export const AnalyzePlanRequest_Unpersist = {
  encode(message: AnalyzePlanRequest_Unpersist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relation !== undefined) {
      Relation.encode(message.relation, writer.uint32(10).fork()).ldelim();
    }
    if (message.blocking !== undefined) {
      writer.uint32(16).bool(message.blocking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_Unpersist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_Unpersist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relation = Relation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blocking = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_Unpersist {
    return {
      relation: isSet(object.relation) ? Relation.fromJSON(object.relation) : undefined,
      blocking: isSet(object.blocking) ? globalThis.Boolean(object.blocking) : undefined,
    };
  },

  toJSON(message: AnalyzePlanRequest_Unpersist): unknown {
    const obj: any = {};
    if (message.relation !== undefined) {
      obj.relation = Relation.toJSON(message.relation);
    }
    if (message.blocking !== undefined) {
      obj.blocking = message.blocking;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_Unpersist>, I>>(base?: I): AnalyzePlanRequest_Unpersist {
    return AnalyzePlanRequest_Unpersist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_Unpersist>, I>>(object: I): AnalyzePlanRequest_Unpersist {
    const message = createBaseAnalyzePlanRequest_Unpersist();
    message.relation = (object.relation !== undefined && object.relation !== null)
      ? Relation.fromPartial(object.relation)
      : undefined;
    message.blocking = object.blocking ?? undefined;
    return message;
  },
};

function createBaseAnalyzePlanRequest_GetStorageLevel(): AnalyzePlanRequest_GetStorageLevel {
  return { relation: undefined };
}

export const AnalyzePlanRequest_GetStorageLevel = {
  encode(message: AnalyzePlanRequest_GetStorageLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relation !== undefined) {
      Relation.encode(message.relation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanRequest_GetStorageLevel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanRequest_GetStorageLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relation = Relation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanRequest_GetStorageLevel {
    return { relation: isSet(object.relation) ? Relation.fromJSON(object.relation) : undefined };
  },

  toJSON(message: AnalyzePlanRequest_GetStorageLevel): unknown {
    const obj: any = {};
    if (message.relation !== undefined) {
      obj.relation = Relation.toJSON(message.relation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanRequest_GetStorageLevel>, I>>(
    base?: I,
  ): AnalyzePlanRequest_GetStorageLevel {
    return AnalyzePlanRequest_GetStorageLevel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanRequest_GetStorageLevel>, I>>(
    object: I,
  ): AnalyzePlanRequest_GetStorageLevel {
    const message = createBaseAnalyzePlanRequest_GetStorageLevel();
    message.relation = (object.relation !== undefined && object.relation !== null)
      ? Relation.fromPartial(object.relation)
      : undefined;
    return message;
  },
};

function createBaseAnalyzePlanResponse(): AnalyzePlanResponse {
  return {
    sessionId: "",
    schema: undefined,
    explain: undefined,
    treeString: undefined,
    isLocal: undefined,
    isStreaming: undefined,
    inputFiles: undefined,
    sparkVersion: undefined,
    ddlParse: undefined,
    sameSemantics: undefined,
    semanticHash: undefined,
    persist: undefined,
    unpersist: undefined,
    getStorageLevel: undefined,
  };
}

export const AnalyzePlanResponse = {
  encode(message: AnalyzePlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.schema !== undefined) {
      AnalyzePlanResponse_Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    if (message.explain !== undefined) {
      AnalyzePlanResponse_Explain.encode(message.explain, writer.uint32(26).fork()).ldelim();
    }
    if (message.treeString !== undefined) {
      AnalyzePlanResponse_TreeString.encode(message.treeString, writer.uint32(34).fork()).ldelim();
    }
    if (message.isLocal !== undefined) {
      AnalyzePlanResponse_IsLocal.encode(message.isLocal, writer.uint32(42).fork()).ldelim();
    }
    if (message.isStreaming !== undefined) {
      AnalyzePlanResponse_IsStreaming.encode(message.isStreaming, writer.uint32(50).fork()).ldelim();
    }
    if (message.inputFiles !== undefined) {
      AnalyzePlanResponse_InputFiles.encode(message.inputFiles, writer.uint32(58).fork()).ldelim();
    }
    if (message.sparkVersion !== undefined) {
      AnalyzePlanResponse_SparkVersion.encode(message.sparkVersion, writer.uint32(66).fork()).ldelim();
    }
    if (message.ddlParse !== undefined) {
      AnalyzePlanResponse_DDLParse.encode(message.ddlParse, writer.uint32(74).fork()).ldelim();
    }
    if (message.sameSemantics !== undefined) {
      AnalyzePlanResponse_SameSemantics.encode(message.sameSemantics, writer.uint32(82).fork()).ldelim();
    }
    if (message.semanticHash !== undefined) {
      AnalyzePlanResponse_SemanticHash.encode(message.semanticHash, writer.uint32(90).fork()).ldelim();
    }
    if (message.persist !== undefined) {
      AnalyzePlanResponse_Persist.encode(message.persist, writer.uint32(98).fork()).ldelim();
    }
    if (message.unpersist !== undefined) {
      AnalyzePlanResponse_Unpersist.encode(message.unpersist, writer.uint32(106).fork()).ldelim();
    }
    if (message.getStorageLevel !== undefined) {
      AnalyzePlanResponse_GetStorageLevel.encode(message.getStorageLevel, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = AnalyzePlanResponse_Schema.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.explain = AnalyzePlanResponse_Explain.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.treeString = AnalyzePlanResponse_TreeString.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.isLocal = AnalyzePlanResponse_IsLocal.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.isStreaming = AnalyzePlanResponse_IsStreaming.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.inputFiles = AnalyzePlanResponse_InputFiles.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sparkVersion = AnalyzePlanResponse_SparkVersion.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.ddlParse = AnalyzePlanResponse_DDLParse.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sameSemantics = AnalyzePlanResponse_SameSemantics.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.semanticHash = AnalyzePlanResponse_SemanticHash.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.persist = AnalyzePlanResponse_Persist.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.unpersist = AnalyzePlanResponse_Unpersist.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.getStorageLevel = AnalyzePlanResponse_GetStorageLevel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      schema: isSet(object.schema) ? AnalyzePlanResponse_Schema.fromJSON(object.schema) : undefined,
      explain: isSet(object.explain) ? AnalyzePlanResponse_Explain.fromJSON(object.explain) : undefined,
      treeString: isSet(object.treeString) ? AnalyzePlanResponse_TreeString.fromJSON(object.treeString) : undefined,
      isLocal: isSet(object.isLocal) ? AnalyzePlanResponse_IsLocal.fromJSON(object.isLocal) : undefined,
      isStreaming: isSet(object.isStreaming) ? AnalyzePlanResponse_IsStreaming.fromJSON(object.isStreaming) : undefined,
      inputFiles: isSet(object.inputFiles) ? AnalyzePlanResponse_InputFiles.fromJSON(object.inputFiles) : undefined,
      sparkVersion: isSet(object.sparkVersion)
        ? AnalyzePlanResponse_SparkVersion.fromJSON(object.sparkVersion)
        : undefined,
      ddlParse: isSet(object.ddlParse) ? AnalyzePlanResponse_DDLParse.fromJSON(object.ddlParse) : undefined,
      sameSemantics: isSet(object.sameSemantics)
        ? AnalyzePlanResponse_SameSemantics.fromJSON(object.sameSemantics)
        : undefined,
      semanticHash: isSet(object.semanticHash)
        ? AnalyzePlanResponse_SemanticHash.fromJSON(object.semanticHash)
        : undefined,
      persist: isSet(object.persist) ? AnalyzePlanResponse_Persist.fromJSON(object.persist) : undefined,
      unpersist: isSet(object.unpersist) ? AnalyzePlanResponse_Unpersist.fromJSON(object.unpersist) : undefined,
      getStorageLevel: isSet(object.getStorageLevel)
        ? AnalyzePlanResponse_GetStorageLevel.fromJSON(object.getStorageLevel)
        : undefined,
    };
  },

  toJSON(message: AnalyzePlanResponse): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.schema !== undefined) {
      obj.schema = AnalyzePlanResponse_Schema.toJSON(message.schema);
    }
    if (message.explain !== undefined) {
      obj.explain = AnalyzePlanResponse_Explain.toJSON(message.explain);
    }
    if (message.treeString !== undefined) {
      obj.treeString = AnalyzePlanResponse_TreeString.toJSON(message.treeString);
    }
    if (message.isLocal !== undefined) {
      obj.isLocal = AnalyzePlanResponse_IsLocal.toJSON(message.isLocal);
    }
    if (message.isStreaming !== undefined) {
      obj.isStreaming = AnalyzePlanResponse_IsStreaming.toJSON(message.isStreaming);
    }
    if (message.inputFiles !== undefined) {
      obj.inputFiles = AnalyzePlanResponse_InputFiles.toJSON(message.inputFiles);
    }
    if (message.sparkVersion !== undefined) {
      obj.sparkVersion = AnalyzePlanResponse_SparkVersion.toJSON(message.sparkVersion);
    }
    if (message.ddlParse !== undefined) {
      obj.ddlParse = AnalyzePlanResponse_DDLParse.toJSON(message.ddlParse);
    }
    if (message.sameSemantics !== undefined) {
      obj.sameSemantics = AnalyzePlanResponse_SameSemantics.toJSON(message.sameSemantics);
    }
    if (message.semanticHash !== undefined) {
      obj.semanticHash = AnalyzePlanResponse_SemanticHash.toJSON(message.semanticHash);
    }
    if (message.persist !== undefined) {
      obj.persist = AnalyzePlanResponse_Persist.toJSON(message.persist);
    }
    if (message.unpersist !== undefined) {
      obj.unpersist = AnalyzePlanResponse_Unpersist.toJSON(message.unpersist);
    }
    if (message.getStorageLevel !== undefined) {
      obj.getStorageLevel = AnalyzePlanResponse_GetStorageLevel.toJSON(message.getStorageLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse>, I>>(base?: I): AnalyzePlanResponse {
    return AnalyzePlanResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse>, I>>(object: I): AnalyzePlanResponse {
    const message = createBaseAnalyzePlanResponse();
    message.sessionId = object.sessionId ?? "";
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? AnalyzePlanResponse_Schema.fromPartial(object.schema)
      : undefined;
    message.explain = (object.explain !== undefined && object.explain !== null)
      ? AnalyzePlanResponse_Explain.fromPartial(object.explain)
      : undefined;
    message.treeString = (object.treeString !== undefined && object.treeString !== null)
      ? AnalyzePlanResponse_TreeString.fromPartial(object.treeString)
      : undefined;
    message.isLocal = (object.isLocal !== undefined && object.isLocal !== null)
      ? AnalyzePlanResponse_IsLocal.fromPartial(object.isLocal)
      : undefined;
    message.isStreaming = (object.isStreaming !== undefined && object.isStreaming !== null)
      ? AnalyzePlanResponse_IsStreaming.fromPartial(object.isStreaming)
      : undefined;
    message.inputFiles = (object.inputFiles !== undefined && object.inputFiles !== null)
      ? AnalyzePlanResponse_InputFiles.fromPartial(object.inputFiles)
      : undefined;
    message.sparkVersion = (object.sparkVersion !== undefined && object.sparkVersion !== null)
      ? AnalyzePlanResponse_SparkVersion.fromPartial(object.sparkVersion)
      : undefined;
    message.ddlParse = (object.ddlParse !== undefined && object.ddlParse !== null)
      ? AnalyzePlanResponse_DDLParse.fromPartial(object.ddlParse)
      : undefined;
    message.sameSemantics = (object.sameSemantics !== undefined && object.sameSemantics !== null)
      ? AnalyzePlanResponse_SameSemantics.fromPartial(object.sameSemantics)
      : undefined;
    message.semanticHash = (object.semanticHash !== undefined && object.semanticHash !== null)
      ? AnalyzePlanResponse_SemanticHash.fromPartial(object.semanticHash)
      : undefined;
    message.persist = (object.persist !== undefined && object.persist !== null)
      ? AnalyzePlanResponse_Persist.fromPartial(object.persist)
      : undefined;
    message.unpersist = (object.unpersist !== undefined && object.unpersist !== null)
      ? AnalyzePlanResponse_Unpersist.fromPartial(object.unpersist)
      : undefined;
    message.getStorageLevel = (object.getStorageLevel !== undefined && object.getStorageLevel !== null)
      ? AnalyzePlanResponse_GetStorageLevel.fromPartial(object.getStorageLevel)
      : undefined;
    return message;
  },
};

function createBaseAnalyzePlanResponse_Schema(): AnalyzePlanResponse_Schema {
  return { schema: undefined };
}

export const AnalyzePlanResponse_Schema = {
  encode(message: AnalyzePlanResponse_Schema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== undefined) {
      DataType.encode(message.schema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_Schema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_Schema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): AnalyzePlanResponse_Schema {
    return { schema: isSet(object.schema) ? DataType.fromJSON(object.schema) : undefined };
  },

  toJSON(message: AnalyzePlanResponse_Schema): unknown {
    const obj: any = {};
    if (message.schema !== undefined) {
      obj.schema = DataType.toJSON(message.schema);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_Schema>, I>>(base?: I): AnalyzePlanResponse_Schema {
    return AnalyzePlanResponse_Schema.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_Schema>, I>>(object: I): AnalyzePlanResponse_Schema {
    const message = createBaseAnalyzePlanResponse_Schema();
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? DataType.fromPartial(object.schema)
      : undefined;
    return message;
  },
};

function createBaseAnalyzePlanResponse_Explain(): AnalyzePlanResponse_Explain {
  return { explainString: "" };
}

export const AnalyzePlanResponse_Explain = {
  encode(message: AnalyzePlanResponse_Explain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.explainString !== "") {
      writer.uint32(10).string(message.explainString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_Explain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_Explain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.explainString = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_Explain {
    return { explainString: isSet(object.explainString) ? globalThis.String(object.explainString) : "" };
  },

  toJSON(message: AnalyzePlanResponse_Explain): unknown {
    const obj: any = {};
    if (message.explainString !== "") {
      obj.explainString = message.explainString;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_Explain>, I>>(base?: I): AnalyzePlanResponse_Explain {
    return AnalyzePlanResponse_Explain.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_Explain>, I>>(object: I): AnalyzePlanResponse_Explain {
    const message = createBaseAnalyzePlanResponse_Explain();
    message.explainString = object.explainString ?? "";
    return message;
  },
};

function createBaseAnalyzePlanResponse_TreeString(): AnalyzePlanResponse_TreeString {
  return { treeString: "" };
}

export const AnalyzePlanResponse_TreeString = {
  encode(message: AnalyzePlanResponse_TreeString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.treeString !== "") {
      writer.uint32(10).string(message.treeString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_TreeString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_TreeString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.treeString = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_TreeString {
    return { treeString: isSet(object.treeString) ? globalThis.String(object.treeString) : "" };
  },

  toJSON(message: AnalyzePlanResponse_TreeString): unknown {
    const obj: any = {};
    if (message.treeString !== "") {
      obj.treeString = message.treeString;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_TreeString>, I>>(base?: I): AnalyzePlanResponse_TreeString {
    return AnalyzePlanResponse_TreeString.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_TreeString>, I>>(
    object: I,
  ): AnalyzePlanResponse_TreeString {
    const message = createBaseAnalyzePlanResponse_TreeString();
    message.treeString = object.treeString ?? "";
    return message;
  },
};

function createBaseAnalyzePlanResponse_IsLocal(): AnalyzePlanResponse_IsLocal {
  return { isLocal: false };
}

export const AnalyzePlanResponse_IsLocal = {
  encode(message: AnalyzePlanResponse_IsLocal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLocal === true) {
      writer.uint32(8).bool(message.isLocal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_IsLocal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_IsLocal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isLocal = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_IsLocal {
    return { isLocal: isSet(object.isLocal) ? globalThis.Boolean(object.isLocal) : false };
  },

  toJSON(message: AnalyzePlanResponse_IsLocal): unknown {
    const obj: any = {};
    if (message.isLocal === true) {
      obj.isLocal = message.isLocal;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_IsLocal>, I>>(base?: I): AnalyzePlanResponse_IsLocal {
    return AnalyzePlanResponse_IsLocal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_IsLocal>, I>>(object: I): AnalyzePlanResponse_IsLocal {
    const message = createBaseAnalyzePlanResponse_IsLocal();
    message.isLocal = object.isLocal ?? false;
    return message;
  },
};

function createBaseAnalyzePlanResponse_IsStreaming(): AnalyzePlanResponse_IsStreaming {
  return { isStreaming: false };
}

export const AnalyzePlanResponse_IsStreaming = {
  encode(message: AnalyzePlanResponse_IsStreaming, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isStreaming === true) {
      writer.uint32(8).bool(message.isStreaming);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_IsStreaming {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_IsStreaming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): AnalyzePlanResponse_IsStreaming {
    return { isStreaming: isSet(object.isStreaming) ? globalThis.Boolean(object.isStreaming) : false };
  },

  toJSON(message: AnalyzePlanResponse_IsStreaming): unknown {
    const obj: any = {};
    if (message.isStreaming === true) {
      obj.isStreaming = message.isStreaming;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_IsStreaming>, I>>(base?: I): AnalyzePlanResponse_IsStreaming {
    return AnalyzePlanResponse_IsStreaming.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_IsStreaming>, I>>(
    object: I,
  ): AnalyzePlanResponse_IsStreaming {
    const message = createBaseAnalyzePlanResponse_IsStreaming();
    message.isStreaming = object.isStreaming ?? false;
    return message;
  },
};

function createBaseAnalyzePlanResponse_InputFiles(): AnalyzePlanResponse_InputFiles {
  return { files: [] };
}

export const AnalyzePlanResponse_InputFiles = {
  encode(message: AnalyzePlanResponse_InputFiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_InputFiles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_InputFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.files.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_InputFiles {
    return { files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: AnalyzePlanResponse_InputFiles): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_InputFiles>, I>>(base?: I): AnalyzePlanResponse_InputFiles {
    return AnalyzePlanResponse_InputFiles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_InputFiles>, I>>(
    object: I,
  ): AnalyzePlanResponse_InputFiles {
    const message = createBaseAnalyzePlanResponse_InputFiles();
    message.files = object.files?.map((e) => e) || [];
    return message;
  },
};

function createBaseAnalyzePlanResponse_SparkVersion(): AnalyzePlanResponse_SparkVersion {
  return { version: "" };
}

export const AnalyzePlanResponse_SparkVersion = {
  encode(message: AnalyzePlanResponse_SparkVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_SparkVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_SparkVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_SparkVersion {
    return { version: isSet(object.version) ? globalThis.String(object.version) : "" };
  },

  toJSON(message: AnalyzePlanResponse_SparkVersion): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_SparkVersion>, I>>(
    base?: I,
  ): AnalyzePlanResponse_SparkVersion {
    return AnalyzePlanResponse_SparkVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_SparkVersion>, I>>(
    object: I,
  ): AnalyzePlanResponse_SparkVersion {
    const message = createBaseAnalyzePlanResponse_SparkVersion();
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseAnalyzePlanResponse_DDLParse(): AnalyzePlanResponse_DDLParse {
  return { parsed: undefined };
}

export const AnalyzePlanResponse_DDLParse = {
  encode(message: AnalyzePlanResponse_DDLParse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parsed !== undefined) {
      DataType.encode(message.parsed, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_DDLParse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_DDLParse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parsed = DataType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_DDLParse {
    return { parsed: isSet(object.parsed) ? DataType.fromJSON(object.parsed) : undefined };
  },

  toJSON(message: AnalyzePlanResponse_DDLParse): unknown {
    const obj: any = {};
    if (message.parsed !== undefined) {
      obj.parsed = DataType.toJSON(message.parsed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_DDLParse>, I>>(base?: I): AnalyzePlanResponse_DDLParse {
    return AnalyzePlanResponse_DDLParse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_DDLParse>, I>>(object: I): AnalyzePlanResponse_DDLParse {
    const message = createBaseAnalyzePlanResponse_DDLParse();
    message.parsed = (object.parsed !== undefined && object.parsed !== null)
      ? DataType.fromPartial(object.parsed)
      : undefined;
    return message;
  },
};

function createBaseAnalyzePlanResponse_SameSemantics(): AnalyzePlanResponse_SameSemantics {
  return { result: false };
}

export const AnalyzePlanResponse_SameSemantics = {
  encode(message: AnalyzePlanResponse_SameSemantics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_SameSemantics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_SameSemantics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_SameSemantics {
    return { result: isSet(object.result) ? globalThis.Boolean(object.result) : false };
  },

  toJSON(message: AnalyzePlanResponse_SameSemantics): unknown {
    const obj: any = {};
    if (message.result === true) {
      obj.result = message.result;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_SameSemantics>, I>>(
    base?: I,
  ): AnalyzePlanResponse_SameSemantics {
    return AnalyzePlanResponse_SameSemantics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_SameSemantics>, I>>(
    object: I,
  ): AnalyzePlanResponse_SameSemantics {
    const message = createBaseAnalyzePlanResponse_SameSemantics();
    message.result = object.result ?? false;
    return message;
  },
};

function createBaseAnalyzePlanResponse_SemanticHash(): AnalyzePlanResponse_SemanticHash {
  return { result: 0 };
}

export const AnalyzePlanResponse_SemanticHash = {
  encode(message: AnalyzePlanResponse_SemanticHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_SemanticHash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_SemanticHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_SemanticHash {
    return { result: isSet(object.result) ? globalThis.Number(object.result) : 0 };
  },

  toJSON(message: AnalyzePlanResponse_SemanticHash): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_SemanticHash>, I>>(
    base?: I,
  ): AnalyzePlanResponse_SemanticHash {
    return AnalyzePlanResponse_SemanticHash.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_SemanticHash>, I>>(
    object: I,
  ): AnalyzePlanResponse_SemanticHash {
    const message = createBaseAnalyzePlanResponse_SemanticHash();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseAnalyzePlanResponse_Persist(): AnalyzePlanResponse_Persist {
  return {};
}

export const AnalyzePlanResponse_Persist = {
  encode(_: AnalyzePlanResponse_Persist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_Persist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_Persist();
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

  fromJSON(_: any): AnalyzePlanResponse_Persist {
    return {};
  },

  toJSON(_: AnalyzePlanResponse_Persist): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_Persist>, I>>(base?: I): AnalyzePlanResponse_Persist {
    return AnalyzePlanResponse_Persist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_Persist>, I>>(_: I): AnalyzePlanResponse_Persist {
    const message = createBaseAnalyzePlanResponse_Persist();
    return message;
  },
};

function createBaseAnalyzePlanResponse_Unpersist(): AnalyzePlanResponse_Unpersist {
  return {};
}

export const AnalyzePlanResponse_Unpersist = {
  encode(_: AnalyzePlanResponse_Unpersist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_Unpersist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_Unpersist();
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

  fromJSON(_: any): AnalyzePlanResponse_Unpersist {
    return {};
  },

  toJSON(_: AnalyzePlanResponse_Unpersist): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_Unpersist>, I>>(base?: I): AnalyzePlanResponse_Unpersist {
    return AnalyzePlanResponse_Unpersist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_Unpersist>, I>>(_: I): AnalyzePlanResponse_Unpersist {
    const message = createBaseAnalyzePlanResponse_Unpersist();
    return message;
  },
};

function createBaseAnalyzePlanResponse_GetStorageLevel(): AnalyzePlanResponse_GetStorageLevel {
  return { storageLevel: undefined };
}

export const AnalyzePlanResponse_GetStorageLevel = {
  encode(message: AnalyzePlanResponse_GetStorageLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageLevel !== undefined) {
      StorageLevel.encode(message.storageLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzePlanResponse_GetStorageLevel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzePlanResponse_GetStorageLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageLevel = StorageLevel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzePlanResponse_GetStorageLevel {
    return { storageLevel: isSet(object.storageLevel) ? StorageLevel.fromJSON(object.storageLevel) : undefined };
  },

  toJSON(message: AnalyzePlanResponse_GetStorageLevel): unknown {
    const obj: any = {};
    if (message.storageLevel !== undefined) {
      obj.storageLevel = StorageLevel.toJSON(message.storageLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzePlanResponse_GetStorageLevel>, I>>(
    base?: I,
  ): AnalyzePlanResponse_GetStorageLevel {
    return AnalyzePlanResponse_GetStorageLevel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzePlanResponse_GetStorageLevel>, I>>(
    object: I,
  ): AnalyzePlanResponse_GetStorageLevel {
    const message = createBaseAnalyzePlanResponse_GetStorageLevel();
    message.storageLevel = (object.storageLevel !== undefined && object.storageLevel !== null)
      ? StorageLevel.fromPartial(object.storageLevel)
      : undefined;
    return message;
  },
};

function createBaseExecutePlanRequest(): ExecutePlanRequest {
  return {
    sessionId: "",
    userContext: undefined,
    operationId: undefined,
    plan: undefined,
    clientType: undefined,
    requestOptions: [],
    tags: [],
  };
}

export const ExecutePlanRequest = {
  encode(message: ExecutePlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.operationId !== undefined) {
      writer.uint32(50).string(message.operationId);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientType !== undefined) {
      writer.uint32(34).string(message.clientType);
    }
    for (const v of message.requestOptions) {
      ExecutePlanRequest_RequestOption.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clientType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.requestOptions.push(ExecutePlanRequest_RequestOption.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tags.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutePlanRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : undefined,
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
      clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
      requestOptions: globalThis.Array.isArray(object?.requestOptions)
        ? object.requestOptions.map((e: any) => ExecutePlanRequest_RequestOption.fromJSON(e))
        : [],
      tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ExecutePlanRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.operationId !== undefined) {
      obj.operationId = message.operationId;
    }
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    if (message.clientType !== undefined) {
      obj.clientType = message.clientType;
    }
    if (message.requestOptions?.length) {
      obj.requestOptions = message.requestOptions.map((e) => ExecutePlanRequest_RequestOption.toJSON(e));
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanRequest>, I>>(base?: I): ExecutePlanRequest {
    return ExecutePlanRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanRequest>, I>>(object: I): ExecutePlanRequest {
    const message = createBaseExecutePlanRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.operationId = object.operationId ?? undefined;
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    message.clientType = object.clientType ?? undefined;
    message.requestOptions = object.requestOptions?.map((e) => ExecutePlanRequest_RequestOption.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseExecutePlanRequest_RequestOption(): ExecutePlanRequest_RequestOption {
  return { reattachOptions: undefined, extension: undefined };
}

export const ExecutePlanRequest_RequestOption = {
  encode(message: ExecutePlanRequest_RequestOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reattachOptions !== undefined) {
      ReattachOptions.encode(message.reattachOptions, writer.uint32(10).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      Any.encode(message.extension, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanRequest_RequestOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanRequest_RequestOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reattachOptions = ReattachOptions.decode(reader, reader.uint32());
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

  fromJSON(object: any): ExecutePlanRequest_RequestOption {
    return {
      reattachOptions: isSet(object.reattachOptions) ? ReattachOptions.fromJSON(object.reattachOptions) : undefined,
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined,
    };
  },

  toJSON(message: ExecutePlanRequest_RequestOption): unknown {
    const obj: any = {};
    if (message.reattachOptions !== undefined) {
      obj.reattachOptions = ReattachOptions.toJSON(message.reattachOptions);
    }
    if (message.extension !== undefined) {
      obj.extension = Any.toJSON(message.extension);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanRequest_RequestOption>, I>>(
    base?: I,
  ): ExecutePlanRequest_RequestOption {
    return ExecutePlanRequest_RequestOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanRequest_RequestOption>, I>>(
    object: I,
  ): ExecutePlanRequest_RequestOption {
    const message = createBaseExecutePlanRequest_RequestOption();
    message.reattachOptions = (object.reattachOptions !== undefined && object.reattachOptions !== null)
      ? ReattachOptions.fromPartial(object.reattachOptions)
      : undefined;
    message.extension = (object.extension !== undefined && object.extension !== null)
      ? Any.fromPartial(object.extension)
      : undefined;
    return message;
  },
};

function createBaseExecutePlanResponse(): ExecutePlanResponse {
  return {
    sessionId: "",
    operationId: "",
    responseId: "",
    arrowBatch: undefined,
    sqlCommandResult: undefined,
    writeStreamOperationStartResult: undefined,
    streamingQueryCommandResult: undefined,
    getResourcesCommandResult: undefined,
    streamingQueryManagerCommandResult: undefined,
    resultComplete: undefined,
    extension: undefined,
    metrics: undefined,
    observedMetrics: [],
    schema: undefined,
  };
}

export const ExecutePlanResponse = {
  encode(message: ExecutePlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.operationId !== "") {
      writer.uint32(98).string(message.operationId);
    }
    if (message.responseId !== "") {
      writer.uint32(106).string(message.responseId);
    }
    if (message.arrowBatch !== undefined) {
      ExecutePlanResponse_ArrowBatch.encode(message.arrowBatch, writer.uint32(18).fork()).ldelim();
    }
    if (message.sqlCommandResult !== undefined) {
      ExecutePlanResponse_SqlCommandResult.encode(message.sqlCommandResult, writer.uint32(42).fork()).ldelim();
    }
    if (message.writeStreamOperationStartResult !== undefined) {
      WriteStreamOperationStartResult.encode(message.writeStreamOperationStartResult, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.streamingQueryCommandResult !== undefined) {
      StreamingQueryCommandResult.encode(message.streamingQueryCommandResult, writer.uint32(74).fork()).ldelim();
    }
    if (message.getResourcesCommandResult !== undefined) {
      GetResourcesCommandResult.encode(message.getResourcesCommandResult, writer.uint32(82).fork()).ldelim();
    }
    if (message.streamingQueryManagerCommandResult !== undefined) {
      StreamingQueryManagerCommandResult.encode(message.streamingQueryManagerCommandResult, writer.uint32(90).fork())
        .ldelim();
    }
    if (message.resultComplete !== undefined) {
      ExecutePlanResponse_ResultComplete.encode(message.resultComplete, writer.uint32(114).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      Any.encode(message.extension, writer.uint32(7994).fork()).ldelim();
    }
    if (message.metrics !== undefined) {
      ExecutePlanResponse_Metrics.encode(message.metrics, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.observedMetrics) {
      ExecutePlanResponse_ObservedMetrics.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.schema !== undefined) {
      DataType.encode(message.schema, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.responseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.arrowBatch = ExecutePlanResponse_ArrowBatch.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sqlCommandResult = ExecutePlanResponse_SqlCommandResult.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.writeStreamOperationStartResult = WriteStreamOperationStartResult.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.streamingQueryCommandResult = StreamingQueryCommandResult.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.getResourcesCommandResult = GetResourcesCommandResult.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.streamingQueryManagerCommandResult = StreamingQueryManagerCommandResult.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.resultComplete = ExecutePlanResponse_ResultComplete.decode(reader, reader.uint32());
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.extension = Any.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.metrics = ExecutePlanResponse_Metrics.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.observedMetrics.push(ExecutePlanResponse_ObservedMetrics.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): ExecutePlanResponse {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
      responseId: isSet(object.responseId) ? globalThis.String(object.responseId) : "",
      arrowBatch: isSet(object.arrowBatch) ? ExecutePlanResponse_ArrowBatch.fromJSON(object.arrowBatch) : undefined,
      sqlCommandResult: isSet(object.sqlCommandResult)
        ? ExecutePlanResponse_SqlCommandResult.fromJSON(object.sqlCommandResult)
        : undefined,
      writeStreamOperationStartResult: isSet(object.writeStreamOperationStartResult)
        ? WriteStreamOperationStartResult.fromJSON(object.writeStreamOperationStartResult)
        : undefined,
      streamingQueryCommandResult: isSet(object.streamingQueryCommandResult)
        ? StreamingQueryCommandResult.fromJSON(object.streamingQueryCommandResult)
        : undefined,
      getResourcesCommandResult: isSet(object.getResourcesCommandResult)
        ? GetResourcesCommandResult.fromJSON(object.getResourcesCommandResult)
        : undefined,
      streamingQueryManagerCommandResult: isSet(object.streamingQueryManagerCommandResult)
        ? StreamingQueryManagerCommandResult.fromJSON(object.streamingQueryManagerCommandResult)
        : undefined,
      resultComplete: isSet(object.resultComplete)
        ? ExecutePlanResponse_ResultComplete.fromJSON(object.resultComplete)
        : undefined,
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined,
      metrics: isSet(object.metrics) ? ExecutePlanResponse_Metrics.fromJSON(object.metrics) : undefined,
      observedMetrics: globalThis.Array.isArray(object?.observedMetrics)
        ? object.observedMetrics.map((e: any) => ExecutePlanResponse_ObservedMetrics.fromJSON(e))
        : [],
      schema: isSet(object.schema) ? DataType.fromJSON(object.schema) : undefined,
    };
  },

  toJSON(message: ExecutePlanResponse): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    if (message.responseId !== "") {
      obj.responseId = message.responseId;
    }
    if (message.arrowBatch !== undefined) {
      obj.arrowBatch = ExecutePlanResponse_ArrowBatch.toJSON(message.arrowBatch);
    }
    if (message.sqlCommandResult !== undefined) {
      obj.sqlCommandResult = ExecutePlanResponse_SqlCommandResult.toJSON(message.sqlCommandResult);
    }
    if (message.writeStreamOperationStartResult !== undefined) {
      obj.writeStreamOperationStartResult = WriteStreamOperationStartResult.toJSON(
        message.writeStreamOperationStartResult,
      );
    }
    if (message.streamingQueryCommandResult !== undefined) {
      obj.streamingQueryCommandResult = StreamingQueryCommandResult.toJSON(message.streamingQueryCommandResult);
    }
    if (message.getResourcesCommandResult !== undefined) {
      obj.getResourcesCommandResult = GetResourcesCommandResult.toJSON(message.getResourcesCommandResult);
    }
    if (message.streamingQueryManagerCommandResult !== undefined) {
      obj.streamingQueryManagerCommandResult = StreamingQueryManagerCommandResult.toJSON(
        message.streamingQueryManagerCommandResult,
      );
    }
    if (message.resultComplete !== undefined) {
      obj.resultComplete = ExecutePlanResponse_ResultComplete.toJSON(message.resultComplete);
    }
    if (message.extension !== undefined) {
      obj.extension = Any.toJSON(message.extension);
    }
    if (message.metrics !== undefined) {
      obj.metrics = ExecutePlanResponse_Metrics.toJSON(message.metrics);
    }
    if (message.observedMetrics?.length) {
      obj.observedMetrics = message.observedMetrics.map((e) => ExecutePlanResponse_ObservedMetrics.toJSON(e));
    }
    if (message.schema !== undefined) {
      obj.schema = DataType.toJSON(message.schema);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse>, I>>(base?: I): ExecutePlanResponse {
    return ExecutePlanResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse>, I>>(object: I): ExecutePlanResponse {
    const message = createBaseExecutePlanResponse();
    message.sessionId = object.sessionId ?? "";
    message.operationId = object.operationId ?? "";
    message.responseId = object.responseId ?? "";
    message.arrowBatch = (object.arrowBatch !== undefined && object.arrowBatch !== null)
      ? ExecutePlanResponse_ArrowBatch.fromPartial(object.arrowBatch)
      : undefined;
    message.sqlCommandResult = (object.sqlCommandResult !== undefined && object.sqlCommandResult !== null)
      ? ExecutePlanResponse_SqlCommandResult.fromPartial(object.sqlCommandResult)
      : undefined;
    message.writeStreamOperationStartResult =
      (object.writeStreamOperationStartResult !== undefined && object.writeStreamOperationStartResult !== null)
        ? WriteStreamOperationStartResult.fromPartial(object.writeStreamOperationStartResult)
        : undefined;
    message.streamingQueryCommandResult =
      (object.streamingQueryCommandResult !== undefined && object.streamingQueryCommandResult !== null)
        ? StreamingQueryCommandResult.fromPartial(object.streamingQueryCommandResult)
        : undefined;
    message.getResourcesCommandResult =
      (object.getResourcesCommandResult !== undefined && object.getResourcesCommandResult !== null)
        ? GetResourcesCommandResult.fromPartial(object.getResourcesCommandResult)
        : undefined;
    message.streamingQueryManagerCommandResult =
      (object.streamingQueryManagerCommandResult !== undefined && object.streamingQueryManagerCommandResult !== null)
        ? StreamingQueryManagerCommandResult.fromPartial(object.streamingQueryManagerCommandResult)
        : undefined;
    message.resultComplete = (object.resultComplete !== undefined && object.resultComplete !== null)
      ? ExecutePlanResponse_ResultComplete.fromPartial(object.resultComplete)
      : undefined;
    message.extension = (object.extension !== undefined && object.extension !== null)
      ? Any.fromPartial(object.extension)
      : undefined;
    message.metrics = (object.metrics !== undefined && object.metrics !== null)
      ? ExecutePlanResponse_Metrics.fromPartial(object.metrics)
      : undefined;
    message.observedMetrics = object.observedMetrics?.map((e) => ExecutePlanResponse_ObservedMetrics.fromPartial(e)) ||
      [];
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? DataType.fromPartial(object.schema)
      : undefined;
    return message;
  },
};

function createBaseExecutePlanResponse_SqlCommandResult(): ExecutePlanResponse_SqlCommandResult {
  return { relation: undefined };
}

export const ExecutePlanResponse_SqlCommandResult = {
  encode(message: ExecutePlanResponse_SqlCommandResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relation !== undefined) {
      Relation.encode(message.relation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanResponse_SqlCommandResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse_SqlCommandResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relation = Relation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutePlanResponse_SqlCommandResult {
    return { relation: isSet(object.relation) ? Relation.fromJSON(object.relation) : undefined };
  },

  toJSON(message: ExecutePlanResponse_SqlCommandResult): unknown {
    const obj: any = {};
    if (message.relation !== undefined) {
      obj.relation = Relation.toJSON(message.relation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse_SqlCommandResult>, I>>(
    base?: I,
  ): ExecutePlanResponse_SqlCommandResult {
    return ExecutePlanResponse_SqlCommandResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse_SqlCommandResult>, I>>(
    object: I,
  ): ExecutePlanResponse_SqlCommandResult {
    const message = createBaseExecutePlanResponse_SqlCommandResult();
    message.relation = (object.relation !== undefined && object.relation !== null)
      ? Relation.fromPartial(object.relation)
      : undefined;
    return message;
  },
};

function createBaseExecutePlanResponse_ArrowBatch(): ExecutePlanResponse_ArrowBatch {
  return { rowCount: 0, data: new Uint8Array(0) };
}

export const ExecutePlanResponse_ArrowBatch = {
  encode(message: ExecutePlanResponse_ArrowBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rowCount !== 0) {
      writer.uint32(8).int64(message.rowCount);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanResponse_ArrowBatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse_ArrowBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rowCount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutePlanResponse_ArrowBatch {
    return {
      rowCount: isSet(object.rowCount) ? globalThis.Number(object.rowCount) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: ExecutePlanResponse_ArrowBatch): unknown {
    const obj: any = {};
    if (message.rowCount !== 0) {
      obj.rowCount = Math.round(message.rowCount);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse_ArrowBatch>, I>>(base?: I): ExecutePlanResponse_ArrowBatch {
    return ExecutePlanResponse_ArrowBatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse_ArrowBatch>, I>>(
    object: I,
  ): ExecutePlanResponse_ArrowBatch {
    const message = createBaseExecutePlanResponse_ArrowBatch();
    message.rowCount = object.rowCount ?? 0;
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseExecutePlanResponse_Metrics(): ExecutePlanResponse_Metrics {
  return { metrics: [] };
}

export const ExecutePlanResponse_Metrics = {
  encode(message: ExecutePlanResponse_Metrics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metrics) {
      ExecutePlanResponse_Metrics_MetricObject.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanResponse_Metrics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse_Metrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metrics.push(ExecutePlanResponse_Metrics_MetricObject.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutePlanResponse_Metrics {
    return {
      metrics: globalThis.Array.isArray(object?.metrics)
        ? object.metrics.map((e: any) => ExecutePlanResponse_Metrics_MetricObject.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExecutePlanResponse_Metrics): unknown {
    const obj: any = {};
    if (message.metrics?.length) {
      obj.metrics = message.metrics.map((e) => ExecutePlanResponse_Metrics_MetricObject.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse_Metrics>, I>>(base?: I): ExecutePlanResponse_Metrics {
    return ExecutePlanResponse_Metrics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse_Metrics>, I>>(object: I): ExecutePlanResponse_Metrics {
    const message = createBaseExecutePlanResponse_Metrics();
    message.metrics = object.metrics?.map((e) => ExecutePlanResponse_Metrics_MetricObject.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExecutePlanResponse_Metrics_MetricObject(): ExecutePlanResponse_Metrics_MetricObject {
  return { name: "", planId: 0, parent: 0, executionMetrics: {} };
}

export const ExecutePlanResponse_Metrics_MetricObject = {
  encode(message: ExecutePlanResponse_Metrics_MetricObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.planId !== 0) {
      writer.uint32(16).int64(message.planId);
    }
    if (message.parent !== 0) {
      writer.uint32(24).int64(message.parent);
    }
    Object.entries(message.executionMetrics).forEach(([key, value]) => {
      ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanResponse_Metrics_MetricObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse_Metrics_MetricObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

          message.parent = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.executionMetrics[entry4.key] = entry4.value;
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

  fromJSON(object: any): ExecutePlanResponse_Metrics_MetricObject {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      planId: isSet(object.planId) ? globalThis.Number(object.planId) : 0,
      parent: isSet(object.parent) ? globalThis.Number(object.parent) : 0,
      executionMetrics: isObject(object.executionMetrics)
        ? Object.entries(object.executionMetrics).reduce<{ [key: string]: ExecutePlanResponse_Metrics_MetricValue }>(
          (acc, [key, value]) => {
            acc[key] = ExecutePlanResponse_Metrics_MetricValue.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: ExecutePlanResponse_Metrics_MetricObject): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.planId !== 0) {
      obj.planId = Math.round(message.planId);
    }
    if (message.parent !== 0) {
      obj.parent = Math.round(message.parent);
    }
    if (message.executionMetrics) {
      const entries = Object.entries(message.executionMetrics);
      if (entries.length > 0) {
        obj.executionMetrics = {};
        entries.forEach(([k, v]) => {
          obj.executionMetrics[k] = ExecutePlanResponse_Metrics_MetricValue.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse_Metrics_MetricObject>, I>>(
    base?: I,
  ): ExecutePlanResponse_Metrics_MetricObject {
    return ExecutePlanResponse_Metrics_MetricObject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse_Metrics_MetricObject>, I>>(
    object: I,
  ): ExecutePlanResponse_Metrics_MetricObject {
    const message = createBaseExecutePlanResponse_Metrics_MetricObject();
    message.name = object.name ?? "";
    message.planId = object.planId ?? 0;
    message.parent = object.parent ?? 0;
    message.executionMetrics = Object.entries(object.executionMetrics ?? {}).reduce<
      { [key: string]: ExecutePlanResponse_Metrics_MetricValue }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ExecutePlanResponse_Metrics_MetricValue.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry(): ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry {
  return { key: "", value: undefined };
}

export const ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry = {
  encode(
    message: ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ExecutePlanResponse_Metrics_MetricValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry();
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

          message.value = ExecutePlanResponse_Metrics_MetricValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? ExecutePlanResponse_Metrics_MetricValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ExecutePlanResponse_Metrics_MetricValue.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry>, I>>(
    base?: I,
  ): ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry {
    return ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry>, I>>(
    object: I,
  ): ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry {
    const message = createBaseExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ExecutePlanResponse_Metrics_MetricValue.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseExecutePlanResponse_Metrics_MetricValue(): ExecutePlanResponse_Metrics_MetricValue {
  return { name: "", value: 0, metricType: "" };
}

export const ExecutePlanResponse_Metrics_MetricValue = {
  encode(message: ExecutePlanResponse_Metrics_MetricValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    if (message.metricType !== "") {
      writer.uint32(26).string(message.metricType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanResponse_Metrics_MetricValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse_Metrics_MetricValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metricType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutePlanResponse_Metrics_MetricValue {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      metricType: isSet(object.metricType) ? globalThis.String(object.metricType) : "",
    };
  },

  toJSON(message: ExecutePlanResponse_Metrics_MetricValue): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    if (message.metricType !== "") {
      obj.metricType = message.metricType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse_Metrics_MetricValue>, I>>(
    base?: I,
  ): ExecutePlanResponse_Metrics_MetricValue {
    return ExecutePlanResponse_Metrics_MetricValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse_Metrics_MetricValue>, I>>(
    object: I,
  ): ExecutePlanResponse_Metrics_MetricValue {
    const message = createBaseExecutePlanResponse_Metrics_MetricValue();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    message.metricType = object.metricType ?? "";
    return message;
  },
};

function createBaseExecutePlanResponse_ObservedMetrics(): ExecutePlanResponse_ObservedMetrics {
  return { name: "", values: [] };
}

export const ExecutePlanResponse_ObservedMetrics = {
  encode(message: ExecutePlanResponse_ObservedMetrics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.values) {
      Expression_Literal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanResponse_ObservedMetrics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse_ObservedMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): ExecutePlanResponse_ObservedMetrics {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      values: globalThis.Array.isArray(object?.values)
        ? object.values.map((e: any) => Expression_Literal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExecutePlanResponse_ObservedMetrics): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => Expression_Literal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse_ObservedMetrics>, I>>(
    base?: I,
  ): ExecutePlanResponse_ObservedMetrics {
    return ExecutePlanResponse_ObservedMetrics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse_ObservedMetrics>, I>>(
    object: I,
  ): ExecutePlanResponse_ObservedMetrics {
    const message = createBaseExecutePlanResponse_ObservedMetrics();
    message.name = object.name ?? "";
    message.values = object.values?.map((e) => Expression_Literal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExecutePlanResponse_ResultComplete(): ExecutePlanResponse_ResultComplete {
  return {};
}

export const ExecutePlanResponse_ResultComplete = {
  encode(_: ExecutePlanResponse_ResultComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePlanResponse_ResultComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePlanResponse_ResultComplete();
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

  fromJSON(_: any): ExecutePlanResponse_ResultComplete {
    return {};
  },

  toJSON(_: ExecutePlanResponse_ResultComplete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePlanResponse_ResultComplete>, I>>(
    base?: I,
  ): ExecutePlanResponse_ResultComplete {
    return ExecutePlanResponse_ResultComplete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutePlanResponse_ResultComplete>, I>>(
    _: I,
  ): ExecutePlanResponse_ResultComplete {
    const message = createBaseExecutePlanResponse_ResultComplete();
    return message;
  },
};

function createBaseKeyValue(): KeyValue {
  return { key: "", value: undefined };
}

export const KeyValue = {
  encode(message: KeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValue();
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

  fromJSON(object: any): KeyValue {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : undefined,
    };
  },

  toJSON(message: KeyValue): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyValue>, I>>(base?: I): KeyValue {
    return KeyValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyValue>, I>>(object: I): KeyValue {
    const message = createBaseKeyValue();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseConfigRequest(): ConfigRequest {
  return { sessionId: "", userContext: undefined, operation: undefined, clientType: undefined };
}

export const ConfigRequest = {
  encode(message: ConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.operation !== undefined) {
      ConfigRequest_Operation.encode(message.operation, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientType !== undefined) {
      writer.uint32(34).string(message.clientType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation = ConfigRequest_Operation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clientType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      operation: isSet(object.operation) ? ConfigRequest_Operation.fromJSON(object.operation) : undefined,
      clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
    };
  },

  toJSON(message: ConfigRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.operation !== undefined) {
      obj.operation = ConfigRequest_Operation.toJSON(message.operation);
    }
    if (message.clientType !== undefined) {
      obj.clientType = message.clientType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest>, I>>(base?: I): ConfigRequest {
    return ConfigRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest>, I>>(object: I): ConfigRequest {
    const message = createBaseConfigRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.operation = (object.operation !== undefined && object.operation !== null)
      ? ConfigRequest_Operation.fromPartial(object.operation)
      : undefined;
    message.clientType = object.clientType ?? undefined;
    return message;
  },
};

function createBaseConfigRequest_Operation(): ConfigRequest_Operation {
  return {
    set: undefined,
    get: undefined,
    getWithDefault: undefined,
    getOption: undefined,
    getAll: undefined,
    unset: undefined,
    isModifiable: undefined,
  };
}

export const ConfigRequest_Operation = {
  encode(message: ConfigRequest_Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.set !== undefined) {
      ConfigRequest_Set.encode(message.set, writer.uint32(10).fork()).ldelim();
    }
    if (message.get !== undefined) {
      ConfigRequest_Get.encode(message.get, writer.uint32(18).fork()).ldelim();
    }
    if (message.getWithDefault !== undefined) {
      ConfigRequest_GetWithDefault.encode(message.getWithDefault, writer.uint32(26).fork()).ldelim();
    }
    if (message.getOption !== undefined) {
      ConfigRequest_GetOption.encode(message.getOption, writer.uint32(34).fork()).ldelim();
    }
    if (message.getAll !== undefined) {
      ConfigRequest_GetAll.encode(message.getAll, writer.uint32(42).fork()).ldelim();
    }
    if (message.unset !== undefined) {
      ConfigRequest_Unset.encode(message.unset, writer.uint32(50).fork()).ldelim();
    }
    if (message.isModifiable !== undefined) {
      ConfigRequest_IsModifiable.encode(message.isModifiable, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest_Operation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest_Operation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.set = ConfigRequest_Set.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.get = ConfigRequest_Get.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getWithDefault = ConfigRequest_GetWithDefault.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getOption = ConfigRequest_GetOption.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getAll = ConfigRequest_GetAll.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.unset = ConfigRequest_Unset.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.isModifiable = ConfigRequest_IsModifiable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest_Operation {
    return {
      set: isSet(object.set) ? ConfigRequest_Set.fromJSON(object.set) : undefined,
      get: isSet(object.get) ? ConfigRequest_Get.fromJSON(object.get) : undefined,
      getWithDefault: isSet(object.getWithDefault)
        ? ConfigRequest_GetWithDefault.fromJSON(object.getWithDefault)
        : undefined,
      getOption: isSet(object.getOption) ? ConfigRequest_GetOption.fromJSON(object.getOption) : undefined,
      getAll: isSet(object.getAll) ? ConfigRequest_GetAll.fromJSON(object.getAll) : undefined,
      unset: isSet(object.unset) ? ConfigRequest_Unset.fromJSON(object.unset) : undefined,
      isModifiable: isSet(object.isModifiable) ? ConfigRequest_IsModifiable.fromJSON(object.isModifiable) : undefined,
    };
  },

  toJSON(message: ConfigRequest_Operation): unknown {
    const obj: any = {};
    if (message.set !== undefined) {
      obj.set = ConfigRequest_Set.toJSON(message.set);
    }
    if (message.get !== undefined) {
      obj.get = ConfigRequest_Get.toJSON(message.get);
    }
    if (message.getWithDefault !== undefined) {
      obj.getWithDefault = ConfigRequest_GetWithDefault.toJSON(message.getWithDefault);
    }
    if (message.getOption !== undefined) {
      obj.getOption = ConfigRequest_GetOption.toJSON(message.getOption);
    }
    if (message.getAll !== undefined) {
      obj.getAll = ConfigRequest_GetAll.toJSON(message.getAll);
    }
    if (message.unset !== undefined) {
      obj.unset = ConfigRequest_Unset.toJSON(message.unset);
    }
    if (message.isModifiable !== undefined) {
      obj.isModifiable = ConfigRequest_IsModifiable.toJSON(message.isModifiable);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest_Operation>, I>>(base?: I): ConfigRequest_Operation {
    return ConfigRequest_Operation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest_Operation>, I>>(object: I): ConfigRequest_Operation {
    const message = createBaseConfigRequest_Operation();
    message.set = (object.set !== undefined && object.set !== null)
      ? ConfigRequest_Set.fromPartial(object.set)
      : undefined;
    message.get = (object.get !== undefined && object.get !== null)
      ? ConfigRequest_Get.fromPartial(object.get)
      : undefined;
    message.getWithDefault = (object.getWithDefault !== undefined && object.getWithDefault !== null)
      ? ConfigRequest_GetWithDefault.fromPartial(object.getWithDefault)
      : undefined;
    message.getOption = (object.getOption !== undefined && object.getOption !== null)
      ? ConfigRequest_GetOption.fromPartial(object.getOption)
      : undefined;
    message.getAll = (object.getAll !== undefined && object.getAll !== null)
      ? ConfigRequest_GetAll.fromPartial(object.getAll)
      : undefined;
    message.unset = (object.unset !== undefined && object.unset !== null)
      ? ConfigRequest_Unset.fromPartial(object.unset)
      : undefined;
    message.isModifiable = (object.isModifiable !== undefined && object.isModifiable !== null)
      ? ConfigRequest_IsModifiable.fromPartial(object.isModifiable)
      : undefined;
    return message;
  },
};

function createBaseConfigRequest_Set(): ConfigRequest_Set {
  return { pairs: [] };
}

export const ConfigRequest_Set = {
  encode(message: ConfigRequest_Set, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      KeyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest_Set {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest_Set();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pairs.push(KeyValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest_Set {
    return { pairs: globalThis.Array.isArray(object?.pairs) ? object.pairs.map((e: any) => KeyValue.fromJSON(e)) : [] };
  },

  toJSON(message: ConfigRequest_Set): unknown {
    const obj: any = {};
    if (message.pairs?.length) {
      obj.pairs = message.pairs.map((e) => KeyValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest_Set>, I>>(base?: I): ConfigRequest_Set {
    return ConfigRequest_Set.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest_Set>, I>>(object: I): ConfigRequest_Set {
    const message = createBaseConfigRequest_Set();
    message.pairs = object.pairs?.map((e) => KeyValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConfigRequest_Get(): ConfigRequest_Get {
  return { keys: [] };
}

export const ConfigRequest_Get = {
  encode(message: ConfigRequest_Get, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest_Get {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest_Get();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest_Get {
    return { keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: ConfigRequest_Get): unknown {
    const obj: any = {};
    if (message.keys?.length) {
      obj.keys = message.keys;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest_Get>, I>>(base?: I): ConfigRequest_Get {
    return ConfigRequest_Get.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest_Get>, I>>(object: I): ConfigRequest_Get {
    const message = createBaseConfigRequest_Get();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseConfigRequest_GetWithDefault(): ConfigRequest_GetWithDefault {
  return { pairs: [] };
}

export const ConfigRequest_GetWithDefault = {
  encode(message: ConfigRequest_GetWithDefault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      KeyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest_GetWithDefault {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest_GetWithDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pairs.push(KeyValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest_GetWithDefault {
    return { pairs: globalThis.Array.isArray(object?.pairs) ? object.pairs.map((e: any) => KeyValue.fromJSON(e)) : [] };
  },

  toJSON(message: ConfigRequest_GetWithDefault): unknown {
    const obj: any = {};
    if (message.pairs?.length) {
      obj.pairs = message.pairs.map((e) => KeyValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest_GetWithDefault>, I>>(base?: I): ConfigRequest_GetWithDefault {
    return ConfigRequest_GetWithDefault.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest_GetWithDefault>, I>>(object: I): ConfigRequest_GetWithDefault {
    const message = createBaseConfigRequest_GetWithDefault();
    message.pairs = object.pairs?.map((e) => KeyValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConfigRequest_GetOption(): ConfigRequest_GetOption {
  return { keys: [] };
}

export const ConfigRequest_GetOption = {
  encode(message: ConfigRequest_GetOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest_GetOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest_GetOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest_GetOption {
    return { keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: ConfigRequest_GetOption): unknown {
    const obj: any = {};
    if (message.keys?.length) {
      obj.keys = message.keys;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest_GetOption>, I>>(base?: I): ConfigRequest_GetOption {
    return ConfigRequest_GetOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest_GetOption>, I>>(object: I): ConfigRequest_GetOption {
    const message = createBaseConfigRequest_GetOption();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseConfigRequest_GetAll(): ConfigRequest_GetAll {
  return { prefix: undefined };
}

export const ConfigRequest_GetAll = {
  encode(message: ConfigRequest_GetAll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== undefined) {
      writer.uint32(10).string(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest_GetAll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest_GetAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest_GetAll {
    return { prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : undefined };
  },

  toJSON(message: ConfigRequest_GetAll): unknown {
    const obj: any = {};
    if (message.prefix !== undefined) {
      obj.prefix = message.prefix;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest_GetAll>, I>>(base?: I): ConfigRequest_GetAll {
    return ConfigRequest_GetAll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest_GetAll>, I>>(object: I): ConfigRequest_GetAll {
    const message = createBaseConfigRequest_GetAll();
    message.prefix = object.prefix ?? undefined;
    return message;
  },
};

function createBaseConfigRequest_Unset(): ConfigRequest_Unset {
  return { keys: [] };
}

export const ConfigRequest_Unset = {
  encode(message: ConfigRequest_Unset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest_Unset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest_Unset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest_Unset {
    return { keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: ConfigRequest_Unset): unknown {
    const obj: any = {};
    if (message.keys?.length) {
      obj.keys = message.keys;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest_Unset>, I>>(base?: I): ConfigRequest_Unset {
    return ConfigRequest_Unset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest_Unset>, I>>(object: I): ConfigRequest_Unset {
    const message = createBaseConfigRequest_Unset();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseConfigRequest_IsModifiable(): ConfigRequest_IsModifiable {
  return { keys: [] };
}

export const ConfigRequest_IsModifiable = {
  encode(message: ConfigRequest_IsModifiable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest_IsModifiable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest_IsModifiable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest_IsModifiable {
    return { keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: ConfigRequest_IsModifiable): unknown {
    const obj: any = {};
    if (message.keys?.length) {
      obj.keys = message.keys;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest_IsModifiable>, I>>(base?: I): ConfigRequest_IsModifiable {
    return ConfigRequest_IsModifiable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest_IsModifiable>, I>>(object: I): ConfigRequest_IsModifiable {
    const message = createBaseConfigRequest_IsModifiable();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseConfigResponse(): ConfigResponse {
  return { sessionId: "", pairs: [], warnings: [] };
}

export const ConfigResponse = {
  encode(message: ConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    for (const v of message.pairs) {
      KeyValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.warnings) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pairs.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.warnings.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigResponse {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      pairs: globalThis.Array.isArray(object?.pairs) ? object.pairs.map((e: any) => KeyValue.fromJSON(e)) : [],
      warnings: globalThis.Array.isArray(object?.warnings) ? object.warnings.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.pairs?.length) {
      obj.pairs = message.pairs.map((e) => KeyValue.toJSON(e));
    }
    if (message.warnings?.length) {
      obj.warnings = message.warnings;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigResponse>, I>>(base?: I): ConfigResponse {
    return ConfigResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigResponse>, I>>(object: I): ConfigResponse {
    const message = createBaseConfigResponse();
    message.sessionId = object.sessionId ?? "";
    message.pairs = object.pairs?.map((e) => KeyValue.fromPartial(e)) || [];
    message.warnings = object.warnings?.map((e) => e) || [];
    return message;
  },
};

function createBaseAddArtifactsRequest(): AddArtifactsRequest {
  return {
    sessionId: "",
    userContext: undefined,
    clientType: undefined,
    batch: undefined,
    beginChunk: undefined,
    chunk: undefined,
  };
}

export const AddArtifactsRequest = {
  encode(message: AddArtifactsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.clientType !== undefined) {
      writer.uint32(50).string(message.clientType);
    }
    if (message.batch !== undefined) {
      AddArtifactsRequest_Batch.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }
    if (message.beginChunk !== undefined) {
      AddArtifactsRequest_BeginChunkedArtifact.encode(message.beginChunk, writer.uint32(34).fork()).ldelim();
    }
    if (message.chunk !== undefined) {
      AddArtifactsRequest_ArtifactChunk.encode(message.chunk, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddArtifactsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddArtifactsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.clientType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.batch = AddArtifactsRequest_Batch.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.beginChunk = AddArtifactsRequest_BeginChunkedArtifact.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chunk = AddArtifactsRequest_ArtifactChunk.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddArtifactsRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
      batch: isSet(object.batch) ? AddArtifactsRequest_Batch.fromJSON(object.batch) : undefined,
      beginChunk: isSet(object.beginChunk)
        ? AddArtifactsRequest_BeginChunkedArtifact.fromJSON(object.beginChunk)
        : undefined,
      chunk: isSet(object.chunk) ? AddArtifactsRequest_ArtifactChunk.fromJSON(object.chunk) : undefined,
    };
  },

  toJSON(message: AddArtifactsRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.clientType !== undefined) {
      obj.clientType = message.clientType;
    }
    if (message.batch !== undefined) {
      obj.batch = AddArtifactsRequest_Batch.toJSON(message.batch);
    }
    if (message.beginChunk !== undefined) {
      obj.beginChunk = AddArtifactsRequest_BeginChunkedArtifact.toJSON(message.beginChunk);
    }
    if (message.chunk !== undefined) {
      obj.chunk = AddArtifactsRequest_ArtifactChunk.toJSON(message.chunk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddArtifactsRequest>, I>>(base?: I): AddArtifactsRequest {
    return AddArtifactsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddArtifactsRequest>, I>>(object: I): AddArtifactsRequest {
    const message = createBaseAddArtifactsRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.clientType = object.clientType ?? undefined;
    message.batch = (object.batch !== undefined && object.batch !== null)
      ? AddArtifactsRequest_Batch.fromPartial(object.batch)
      : undefined;
    message.beginChunk = (object.beginChunk !== undefined && object.beginChunk !== null)
      ? AddArtifactsRequest_BeginChunkedArtifact.fromPartial(object.beginChunk)
      : undefined;
    message.chunk = (object.chunk !== undefined && object.chunk !== null)
      ? AddArtifactsRequest_ArtifactChunk.fromPartial(object.chunk)
      : undefined;
    return message;
  },
};

function createBaseAddArtifactsRequest_ArtifactChunk(): AddArtifactsRequest_ArtifactChunk {
  return { data: new Uint8Array(0), crc: 0 };
}

export const AddArtifactsRequest_ArtifactChunk = {
  encode(message: AddArtifactsRequest_ArtifactChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.crc !== 0) {
      writer.uint32(16).int64(message.crc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddArtifactsRequest_ArtifactChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddArtifactsRequest_ArtifactChunk();
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
          if (tag !== 16) {
            break;
          }

          message.crc = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddArtifactsRequest_ArtifactChunk {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      crc: isSet(object.crc) ? globalThis.Number(object.crc) : 0,
    };
  },

  toJSON(message: AddArtifactsRequest_ArtifactChunk): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.crc !== 0) {
      obj.crc = Math.round(message.crc);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddArtifactsRequest_ArtifactChunk>, I>>(
    base?: I,
  ): AddArtifactsRequest_ArtifactChunk {
    return AddArtifactsRequest_ArtifactChunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddArtifactsRequest_ArtifactChunk>, I>>(
    object: I,
  ): AddArtifactsRequest_ArtifactChunk {
    const message = createBaseAddArtifactsRequest_ArtifactChunk();
    message.data = object.data ?? new Uint8Array(0);
    message.crc = object.crc ?? 0;
    return message;
  },
};

function createBaseAddArtifactsRequest_SingleChunkArtifact(): AddArtifactsRequest_SingleChunkArtifact {
  return { name: "", data: undefined };
}

export const AddArtifactsRequest_SingleChunkArtifact = {
  encode(message: AddArtifactsRequest_SingleChunkArtifact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data !== undefined) {
      AddArtifactsRequest_ArtifactChunk.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddArtifactsRequest_SingleChunkArtifact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddArtifactsRequest_SingleChunkArtifact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = AddArtifactsRequest_ArtifactChunk.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddArtifactsRequest_SingleChunkArtifact {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      data: isSet(object.data) ? AddArtifactsRequest_ArtifactChunk.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: AddArtifactsRequest_SingleChunkArtifact): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.data !== undefined) {
      obj.data = AddArtifactsRequest_ArtifactChunk.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddArtifactsRequest_SingleChunkArtifact>, I>>(
    base?: I,
  ): AddArtifactsRequest_SingleChunkArtifact {
    return AddArtifactsRequest_SingleChunkArtifact.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddArtifactsRequest_SingleChunkArtifact>, I>>(
    object: I,
  ): AddArtifactsRequest_SingleChunkArtifact {
    const message = createBaseAddArtifactsRequest_SingleChunkArtifact();
    message.name = object.name ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? AddArtifactsRequest_ArtifactChunk.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseAddArtifactsRequest_Batch(): AddArtifactsRequest_Batch {
  return { artifacts: [] };
}

export const AddArtifactsRequest_Batch = {
  encode(message: AddArtifactsRequest_Batch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.artifacts) {
      AddArtifactsRequest_SingleChunkArtifact.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddArtifactsRequest_Batch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddArtifactsRequest_Batch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.artifacts.push(AddArtifactsRequest_SingleChunkArtifact.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddArtifactsRequest_Batch {
    return {
      artifacts: globalThis.Array.isArray(object?.artifacts)
        ? object.artifacts.map((e: any) => AddArtifactsRequest_SingleChunkArtifact.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddArtifactsRequest_Batch): unknown {
    const obj: any = {};
    if (message.artifacts?.length) {
      obj.artifacts = message.artifacts.map((e) => AddArtifactsRequest_SingleChunkArtifact.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddArtifactsRequest_Batch>, I>>(base?: I): AddArtifactsRequest_Batch {
    return AddArtifactsRequest_Batch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddArtifactsRequest_Batch>, I>>(object: I): AddArtifactsRequest_Batch {
    const message = createBaseAddArtifactsRequest_Batch();
    message.artifacts = object.artifacts?.map((e) => AddArtifactsRequest_SingleChunkArtifact.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddArtifactsRequest_BeginChunkedArtifact(): AddArtifactsRequest_BeginChunkedArtifact {
  return { name: "", totalBytes: 0, numChunks: 0, initialChunk: undefined };
}

export const AddArtifactsRequest_BeginChunkedArtifact = {
  encode(message: AddArtifactsRequest_BeginChunkedArtifact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.totalBytes !== 0) {
      writer.uint32(16).int64(message.totalBytes);
    }
    if (message.numChunks !== 0) {
      writer.uint32(24).int64(message.numChunks);
    }
    if (message.initialChunk !== undefined) {
      AddArtifactsRequest_ArtifactChunk.encode(message.initialChunk, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddArtifactsRequest_BeginChunkedArtifact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddArtifactsRequest_BeginChunkedArtifact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalBytes = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numChunks = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.initialChunk = AddArtifactsRequest_ArtifactChunk.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddArtifactsRequest_BeginChunkedArtifact {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      totalBytes: isSet(object.totalBytes) ? globalThis.Number(object.totalBytes) : 0,
      numChunks: isSet(object.numChunks) ? globalThis.Number(object.numChunks) : 0,
      initialChunk: isSet(object.initialChunk)
        ? AddArtifactsRequest_ArtifactChunk.fromJSON(object.initialChunk)
        : undefined,
    };
  },

  toJSON(message: AddArtifactsRequest_BeginChunkedArtifact): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.totalBytes !== 0) {
      obj.totalBytes = Math.round(message.totalBytes);
    }
    if (message.numChunks !== 0) {
      obj.numChunks = Math.round(message.numChunks);
    }
    if (message.initialChunk !== undefined) {
      obj.initialChunk = AddArtifactsRequest_ArtifactChunk.toJSON(message.initialChunk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddArtifactsRequest_BeginChunkedArtifact>, I>>(
    base?: I,
  ): AddArtifactsRequest_BeginChunkedArtifact {
    return AddArtifactsRequest_BeginChunkedArtifact.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddArtifactsRequest_BeginChunkedArtifact>, I>>(
    object: I,
  ): AddArtifactsRequest_BeginChunkedArtifact {
    const message = createBaseAddArtifactsRequest_BeginChunkedArtifact();
    message.name = object.name ?? "";
    message.totalBytes = object.totalBytes ?? 0;
    message.numChunks = object.numChunks ?? 0;
    message.initialChunk = (object.initialChunk !== undefined && object.initialChunk !== null)
      ? AddArtifactsRequest_ArtifactChunk.fromPartial(object.initialChunk)
      : undefined;
    return message;
  },
};

function createBaseAddArtifactsResponse(): AddArtifactsResponse {
  return { artifacts: [] };
}

export const AddArtifactsResponse = {
  encode(message: AddArtifactsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.artifacts) {
      AddArtifactsResponse_ArtifactSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddArtifactsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddArtifactsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.artifacts.push(AddArtifactsResponse_ArtifactSummary.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddArtifactsResponse {
    return {
      artifacts: globalThis.Array.isArray(object?.artifacts)
        ? object.artifacts.map((e: any) => AddArtifactsResponse_ArtifactSummary.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddArtifactsResponse): unknown {
    const obj: any = {};
    if (message.artifacts?.length) {
      obj.artifacts = message.artifacts.map((e) => AddArtifactsResponse_ArtifactSummary.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddArtifactsResponse>, I>>(base?: I): AddArtifactsResponse {
    return AddArtifactsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddArtifactsResponse>, I>>(object: I): AddArtifactsResponse {
    const message = createBaseAddArtifactsResponse();
    message.artifacts = object.artifacts?.map((e) => AddArtifactsResponse_ArtifactSummary.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddArtifactsResponse_ArtifactSummary(): AddArtifactsResponse_ArtifactSummary {
  return { name: "", isCrcSuccessful: false };
}

export const AddArtifactsResponse_ArtifactSummary = {
  encode(message: AddArtifactsResponse_ArtifactSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.isCrcSuccessful === true) {
      writer.uint32(16).bool(message.isCrcSuccessful);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddArtifactsResponse_ArtifactSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddArtifactsResponse_ArtifactSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isCrcSuccessful = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddArtifactsResponse_ArtifactSummary {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      isCrcSuccessful: isSet(object.isCrcSuccessful) ? globalThis.Boolean(object.isCrcSuccessful) : false,
    };
  },

  toJSON(message: AddArtifactsResponse_ArtifactSummary): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.isCrcSuccessful === true) {
      obj.isCrcSuccessful = message.isCrcSuccessful;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddArtifactsResponse_ArtifactSummary>, I>>(
    base?: I,
  ): AddArtifactsResponse_ArtifactSummary {
    return AddArtifactsResponse_ArtifactSummary.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddArtifactsResponse_ArtifactSummary>, I>>(
    object: I,
  ): AddArtifactsResponse_ArtifactSummary {
    const message = createBaseAddArtifactsResponse_ArtifactSummary();
    message.name = object.name ?? "";
    message.isCrcSuccessful = object.isCrcSuccessful ?? false;
    return message;
  },
};

function createBaseArtifactStatusesRequest(): ArtifactStatusesRequest {
  return { sessionId: "", userContext: undefined, clientType: undefined, names: [] };
}

export const ArtifactStatusesRequest = {
  encode(message: ArtifactStatusesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.clientType !== undefined) {
      writer.uint32(26).string(message.clientType);
    }
    for (const v of message.names) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArtifactStatusesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArtifactStatusesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clientType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.names.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArtifactStatusesRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
      names: globalThis.Array.isArray(object?.names) ? object.names.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ArtifactStatusesRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.clientType !== undefined) {
      obj.clientType = message.clientType;
    }
    if (message.names?.length) {
      obj.names = message.names;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArtifactStatusesRequest>, I>>(base?: I): ArtifactStatusesRequest {
    return ArtifactStatusesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArtifactStatusesRequest>, I>>(object: I): ArtifactStatusesRequest {
    const message = createBaseArtifactStatusesRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.clientType = object.clientType ?? undefined;
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

function createBaseArtifactStatusesResponse(): ArtifactStatusesResponse {
  return { statuses: {} };
}

export const ArtifactStatusesResponse = {
  encode(message: ArtifactStatusesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.statuses).forEach(([key, value]) => {
      ArtifactStatusesResponse_StatusesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArtifactStatusesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArtifactStatusesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ArtifactStatusesResponse_StatusesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.statuses[entry1.key] = entry1.value;
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

  fromJSON(object: any): ArtifactStatusesResponse {
    return {
      statuses: isObject(object.statuses)
        ? Object.entries(object.statuses).reduce<{ [key: string]: ArtifactStatusesResponse_ArtifactStatus }>(
          (acc, [key, value]) => {
            acc[key] = ArtifactStatusesResponse_ArtifactStatus.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: ArtifactStatusesResponse): unknown {
    const obj: any = {};
    if (message.statuses) {
      const entries = Object.entries(message.statuses);
      if (entries.length > 0) {
        obj.statuses = {};
        entries.forEach(([k, v]) => {
          obj.statuses[k] = ArtifactStatusesResponse_ArtifactStatus.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArtifactStatusesResponse>, I>>(base?: I): ArtifactStatusesResponse {
    return ArtifactStatusesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArtifactStatusesResponse>, I>>(object: I): ArtifactStatusesResponse {
    const message = createBaseArtifactStatusesResponse();
    message.statuses = Object.entries(object.statuses ?? {}).reduce<
      { [key: string]: ArtifactStatusesResponse_ArtifactStatus }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ArtifactStatusesResponse_ArtifactStatus.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseArtifactStatusesResponse_ArtifactStatus(): ArtifactStatusesResponse_ArtifactStatus {
  return { exists: false };
}

export const ArtifactStatusesResponse_ArtifactStatus = {
  encode(message: ArtifactStatusesResponse_ArtifactStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArtifactStatusesResponse_ArtifactStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArtifactStatusesResponse_ArtifactStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.exists = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArtifactStatusesResponse_ArtifactStatus {
    return { exists: isSet(object.exists) ? globalThis.Boolean(object.exists) : false };
  },

  toJSON(message: ArtifactStatusesResponse_ArtifactStatus): unknown {
    const obj: any = {};
    if (message.exists === true) {
      obj.exists = message.exists;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArtifactStatusesResponse_ArtifactStatus>, I>>(
    base?: I,
  ): ArtifactStatusesResponse_ArtifactStatus {
    return ArtifactStatusesResponse_ArtifactStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArtifactStatusesResponse_ArtifactStatus>, I>>(
    object: I,
  ): ArtifactStatusesResponse_ArtifactStatus {
    const message = createBaseArtifactStatusesResponse_ArtifactStatus();
    message.exists = object.exists ?? false;
    return message;
  },
};

function createBaseArtifactStatusesResponse_StatusesEntry(): ArtifactStatusesResponse_StatusesEntry {
  return { key: "", value: undefined };
}

export const ArtifactStatusesResponse_StatusesEntry = {
  encode(message: ArtifactStatusesResponse_StatusesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ArtifactStatusesResponse_ArtifactStatus.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArtifactStatusesResponse_StatusesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArtifactStatusesResponse_StatusesEntry();
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

          message.value = ArtifactStatusesResponse_ArtifactStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArtifactStatusesResponse_StatusesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? ArtifactStatusesResponse_ArtifactStatus.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ArtifactStatusesResponse_StatusesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ArtifactStatusesResponse_ArtifactStatus.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArtifactStatusesResponse_StatusesEntry>, I>>(
    base?: I,
  ): ArtifactStatusesResponse_StatusesEntry {
    return ArtifactStatusesResponse_StatusesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArtifactStatusesResponse_StatusesEntry>, I>>(
    object: I,
  ): ArtifactStatusesResponse_StatusesEntry {
    const message = createBaseArtifactStatusesResponse_StatusesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ArtifactStatusesResponse_ArtifactStatus.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseInterruptRequest(): InterruptRequest {
  return {
    sessionId: "",
    userContext: undefined,
    clientType: undefined,
    interruptType: 0,
    operationTag: undefined,
    operationId: undefined,
  };
}

export const InterruptRequest = {
  encode(message: InterruptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.clientType !== undefined) {
      writer.uint32(26).string(message.clientType);
    }
    if (message.interruptType !== 0) {
      writer.uint32(32).int32(message.interruptType);
    }
    if (message.operationTag !== undefined) {
      writer.uint32(42).string(message.operationTag);
    }
    if (message.operationId !== undefined) {
      writer.uint32(50).string(message.operationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterruptRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterruptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clientType = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.interruptType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.operationTag = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.operationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InterruptRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
      interruptType: isSet(object.interruptType) ? interruptRequest_InterruptTypeFromJSON(object.interruptType) : 0,
      operationTag: isSet(object.operationTag) ? globalThis.String(object.operationTag) : undefined,
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : undefined,
    };
  },

  toJSON(message: InterruptRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.clientType !== undefined) {
      obj.clientType = message.clientType;
    }
    if (message.interruptType !== 0) {
      obj.interruptType = interruptRequest_InterruptTypeToJSON(message.interruptType);
    }
    if (message.operationTag !== undefined) {
      obj.operationTag = message.operationTag;
    }
    if (message.operationId !== undefined) {
      obj.operationId = message.operationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InterruptRequest>, I>>(base?: I): InterruptRequest {
    return InterruptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InterruptRequest>, I>>(object: I): InterruptRequest {
    const message = createBaseInterruptRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.clientType = object.clientType ?? undefined;
    message.interruptType = object.interruptType ?? 0;
    message.operationTag = object.operationTag ?? undefined;
    message.operationId = object.operationId ?? undefined;
    return message;
  },
};

function createBaseInterruptResponse(): InterruptResponse {
  return { sessionId: "", interruptedIds: [] };
}

export const InterruptResponse = {
  encode(message: InterruptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    for (const v of message.interruptedIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterruptResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterruptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.interruptedIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InterruptResponse {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      interruptedIds: globalThis.Array.isArray(object?.interruptedIds)
        ? object.interruptedIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: InterruptResponse): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.interruptedIds?.length) {
      obj.interruptedIds = message.interruptedIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InterruptResponse>, I>>(base?: I): InterruptResponse {
    return InterruptResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InterruptResponse>, I>>(object: I): InterruptResponse {
    const message = createBaseInterruptResponse();
    message.sessionId = object.sessionId ?? "";
    message.interruptedIds = object.interruptedIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseReattachOptions(): ReattachOptions {
  return { reattachable: false };
}

export const ReattachOptions = {
  encode(message: ReattachOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reattachable === true) {
      writer.uint32(8).bool(message.reattachable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReattachOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReattachOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reattachable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReattachOptions {
    return { reattachable: isSet(object.reattachable) ? globalThis.Boolean(object.reattachable) : false };
  },

  toJSON(message: ReattachOptions): unknown {
    const obj: any = {};
    if (message.reattachable === true) {
      obj.reattachable = message.reattachable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReattachOptions>, I>>(base?: I): ReattachOptions {
    return ReattachOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReattachOptions>, I>>(object: I): ReattachOptions {
    const message = createBaseReattachOptions();
    message.reattachable = object.reattachable ?? false;
    return message;
  },
};

function createBaseReattachExecuteRequest(): ReattachExecuteRequest {
  return { sessionId: "", userContext: undefined, operationId: "", clientType: undefined, lastResponseId: undefined };
}

export const ReattachExecuteRequest = {
  encode(message: ReattachExecuteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.operationId !== "") {
      writer.uint32(26).string(message.operationId);
    }
    if (message.clientType !== undefined) {
      writer.uint32(34).string(message.clientType);
    }
    if (message.lastResponseId !== undefined) {
      writer.uint32(42).string(message.lastResponseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReattachExecuteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReattachExecuteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clientType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastResponseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReattachExecuteRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
      clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
      lastResponseId: isSet(object.lastResponseId) ? globalThis.String(object.lastResponseId) : undefined,
    };
  },

  toJSON(message: ReattachExecuteRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    if (message.clientType !== undefined) {
      obj.clientType = message.clientType;
    }
    if (message.lastResponseId !== undefined) {
      obj.lastResponseId = message.lastResponseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReattachExecuteRequest>, I>>(base?: I): ReattachExecuteRequest {
    return ReattachExecuteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReattachExecuteRequest>, I>>(object: I): ReattachExecuteRequest {
    const message = createBaseReattachExecuteRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.operationId = object.operationId ?? "";
    message.clientType = object.clientType ?? undefined;
    message.lastResponseId = object.lastResponseId ?? undefined;
    return message;
  },
};

function createBaseReleaseExecuteRequest(): ReleaseExecuteRequest {
  return {
    sessionId: "",
    userContext: undefined,
    operationId: "",
    clientType: undefined,
    releaseAll: undefined,
    releaseUntil: undefined,
  };
}

export const ReleaseExecuteRequest = {
  encode(message: ReleaseExecuteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.operationId !== "") {
      writer.uint32(26).string(message.operationId);
    }
    if (message.clientType !== undefined) {
      writer.uint32(34).string(message.clientType);
    }
    if (message.releaseAll !== undefined) {
      ReleaseExecuteRequest_ReleaseAll.encode(message.releaseAll, writer.uint32(42).fork()).ldelim();
    }
    if (message.releaseUntil !== undefined) {
      ReleaseExecuteRequest_ReleaseUntil.encode(message.releaseUntil, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReleaseExecuteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReleaseExecuteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clientType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.releaseAll = ReleaseExecuteRequest_ReleaseAll.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.releaseUntil = ReleaseExecuteRequest_ReleaseUntil.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReleaseExecuteRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
      clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
      releaseAll: isSet(object.releaseAll) ? ReleaseExecuteRequest_ReleaseAll.fromJSON(object.releaseAll) : undefined,
      releaseUntil: isSet(object.releaseUntil)
        ? ReleaseExecuteRequest_ReleaseUntil.fromJSON(object.releaseUntil)
        : undefined,
    };
  },

  toJSON(message: ReleaseExecuteRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    if (message.clientType !== undefined) {
      obj.clientType = message.clientType;
    }
    if (message.releaseAll !== undefined) {
      obj.releaseAll = ReleaseExecuteRequest_ReleaseAll.toJSON(message.releaseAll);
    }
    if (message.releaseUntil !== undefined) {
      obj.releaseUntil = ReleaseExecuteRequest_ReleaseUntil.toJSON(message.releaseUntil);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReleaseExecuteRequest>, I>>(base?: I): ReleaseExecuteRequest {
    return ReleaseExecuteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReleaseExecuteRequest>, I>>(object: I): ReleaseExecuteRequest {
    const message = createBaseReleaseExecuteRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.operationId = object.operationId ?? "";
    message.clientType = object.clientType ?? undefined;
    message.releaseAll = (object.releaseAll !== undefined && object.releaseAll !== null)
      ? ReleaseExecuteRequest_ReleaseAll.fromPartial(object.releaseAll)
      : undefined;
    message.releaseUntil = (object.releaseUntil !== undefined && object.releaseUntil !== null)
      ? ReleaseExecuteRequest_ReleaseUntil.fromPartial(object.releaseUntil)
      : undefined;
    return message;
  },
};

function createBaseReleaseExecuteRequest_ReleaseAll(): ReleaseExecuteRequest_ReleaseAll {
  return {};
}

export const ReleaseExecuteRequest_ReleaseAll = {
  encode(_: ReleaseExecuteRequest_ReleaseAll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReleaseExecuteRequest_ReleaseAll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReleaseExecuteRequest_ReleaseAll();
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

  fromJSON(_: any): ReleaseExecuteRequest_ReleaseAll {
    return {};
  },

  toJSON(_: ReleaseExecuteRequest_ReleaseAll): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ReleaseExecuteRequest_ReleaseAll>, I>>(
    base?: I,
  ): ReleaseExecuteRequest_ReleaseAll {
    return ReleaseExecuteRequest_ReleaseAll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReleaseExecuteRequest_ReleaseAll>, I>>(
    _: I,
  ): ReleaseExecuteRequest_ReleaseAll {
    const message = createBaseReleaseExecuteRequest_ReleaseAll();
    return message;
  },
};

function createBaseReleaseExecuteRequest_ReleaseUntil(): ReleaseExecuteRequest_ReleaseUntil {
  return { responseId: "" };
}

export const ReleaseExecuteRequest_ReleaseUntil = {
  encode(message: ReleaseExecuteRequest_ReleaseUntil, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.responseId !== "") {
      writer.uint32(10).string(message.responseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReleaseExecuteRequest_ReleaseUntil {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReleaseExecuteRequest_ReleaseUntil();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReleaseExecuteRequest_ReleaseUntil {
    return { responseId: isSet(object.responseId) ? globalThis.String(object.responseId) : "" };
  },

  toJSON(message: ReleaseExecuteRequest_ReleaseUntil): unknown {
    const obj: any = {};
    if (message.responseId !== "") {
      obj.responseId = message.responseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReleaseExecuteRequest_ReleaseUntil>, I>>(
    base?: I,
  ): ReleaseExecuteRequest_ReleaseUntil {
    return ReleaseExecuteRequest_ReleaseUntil.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReleaseExecuteRequest_ReleaseUntil>, I>>(
    object: I,
  ): ReleaseExecuteRequest_ReleaseUntil {
    const message = createBaseReleaseExecuteRequest_ReleaseUntil();
    message.responseId = object.responseId ?? "";
    return message;
  },
};

function createBaseReleaseExecuteResponse(): ReleaseExecuteResponse {
  return { sessionId: "", operationId: undefined };
}

export const ReleaseExecuteResponse = {
  encode(message: ReleaseExecuteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.operationId !== undefined) {
      writer.uint32(18).string(message.operationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReleaseExecuteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReleaseExecuteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReleaseExecuteResponse {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : undefined,
    };
  },

  toJSON(message: ReleaseExecuteResponse): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.operationId !== undefined) {
      obj.operationId = message.operationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReleaseExecuteResponse>, I>>(base?: I): ReleaseExecuteResponse {
    return ReleaseExecuteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReleaseExecuteResponse>, I>>(object: I): ReleaseExecuteResponse {
    const message = createBaseReleaseExecuteResponse();
    message.sessionId = object.sessionId ?? "";
    message.operationId = object.operationId ?? undefined;
    return message;
  },
};

function createBaseFetchErrorDetailsRequest(): FetchErrorDetailsRequest {
  return { sessionId: "", userContext: undefined, errorId: "" };
}

export const FetchErrorDetailsRequest = {
  encode(message: FetchErrorDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.userContext !== undefined) {
      UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
    }
    if (message.errorId !== "") {
      writer.uint32(26).string(message.errorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchErrorDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchErrorDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userContext = UserContext.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.errorId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchErrorDetailsRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      userContext: isSet(object.userContext) ? UserContext.fromJSON(object.userContext) : undefined,
      errorId: isSet(object.errorId) ? globalThis.String(object.errorId) : "",
    };
  },

  toJSON(message: FetchErrorDetailsRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.userContext !== undefined) {
      obj.userContext = UserContext.toJSON(message.userContext);
    }
    if (message.errorId !== "") {
      obj.errorId = message.errorId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchErrorDetailsRequest>, I>>(base?: I): FetchErrorDetailsRequest {
    return FetchErrorDetailsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchErrorDetailsRequest>, I>>(object: I): FetchErrorDetailsRequest {
    const message = createBaseFetchErrorDetailsRequest();
    message.sessionId = object.sessionId ?? "";
    message.userContext = (object.userContext !== undefined && object.userContext !== null)
      ? UserContext.fromPartial(object.userContext)
      : undefined;
    message.errorId = object.errorId ?? "";
    return message;
  },
};

function createBaseFetchErrorDetailsResponse(): FetchErrorDetailsResponse {
  return { rootErrorIdx: undefined, errors: [] };
}

export const FetchErrorDetailsResponse = {
  encode(message: FetchErrorDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootErrorIdx !== undefined) {
      writer.uint32(8).int32(message.rootErrorIdx);
    }
    for (const v of message.errors) {
      FetchErrorDetailsResponse_Error.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchErrorDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchErrorDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rootErrorIdx = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errors.push(FetchErrorDetailsResponse_Error.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchErrorDetailsResponse {
    return {
      rootErrorIdx: isSet(object.rootErrorIdx) ? globalThis.Number(object.rootErrorIdx) : undefined,
      errors: globalThis.Array.isArray(object?.errors)
        ? object.errors.map((e: any) => FetchErrorDetailsResponse_Error.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FetchErrorDetailsResponse): unknown {
    const obj: any = {};
    if (message.rootErrorIdx !== undefined) {
      obj.rootErrorIdx = Math.round(message.rootErrorIdx);
    }
    if (message.errors?.length) {
      obj.errors = message.errors.map((e) => FetchErrorDetailsResponse_Error.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchErrorDetailsResponse>, I>>(base?: I): FetchErrorDetailsResponse {
    return FetchErrorDetailsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchErrorDetailsResponse>, I>>(object: I): FetchErrorDetailsResponse {
    const message = createBaseFetchErrorDetailsResponse();
    message.rootErrorIdx = object.rootErrorIdx ?? undefined;
    message.errors = object.errors?.map((e) => FetchErrorDetailsResponse_Error.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFetchErrorDetailsResponse_StackTraceElement(): FetchErrorDetailsResponse_StackTraceElement {
  return { declaringClass: "", methodName: "", fileName: "", lineNumber: 0 };
}

export const FetchErrorDetailsResponse_StackTraceElement = {
  encode(message: FetchErrorDetailsResponse_StackTraceElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.declaringClass !== "") {
      writer.uint32(10).string(message.declaringClass);
    }
    if (message.methodName !== "") {
      writer.uint32(18).string(message.methodName);
    }
    if (message.fileName !== "") {
      writer.uint32(26).string(message.fileName);
    }
    if (message.lineNumber !== 0) {
      writer.uint32(32).int32(message.lineNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchErrorDetailsResponse_StackTraceElement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchErrorDetailsResponse_StackTraceElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.declaringClass = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.methodName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lineNumber = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchErrorDetailsResponse_StackTraceElement {
    return {
      declaringClass: isSet(object.declaringClass) ? globalThis.String(object.declaringClass) : "",
      methodName: isSet(object.methodName) ? globalThis.String(object.methodName) : "",
      fileName: isSet(object.fileName) ? globalThis.String(object.fileName) : "",
      lineNumber: isSet(object.lineNumber) ? globalThis.Number(object.lineNumber) : 0,
    };
  },

  toJSON(message: FetchErrorDetailsResponse_StackTraceElement): unknown {
    const obj: any = {};
    if (message.declaringClass !== "") {
      obj.declaringClass = message.declaringClass;
    }
    if (message.methodName !== "") {
      obj.methodName = message.methodName;
    }
    if (message.fileName !== "") {
      obj.fileName = message.fileName;
    }
    if (message.lineNumber !== 0) {
      obj.lineNumber = Math.round(message.lineNumber);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchErrorDetailsResponse_StackTraceElement>, I>>(
    base?: I,
  ): FetchErrorDetailsResponse_StackTraceElement {
    return FetchErrorDetailsResponse_StackTraceElement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchErrorDetailsResponse_StackTraceElement>, I>>(
    object: I,
  ): FetchErrorDetailsResponse_StackTraceElement {
    const message = createBaseFetchErrorDetailsResponse_StackTraceElement();
    message.declaringClass = object.declaringClass ?? "";
    message.methodName = object.methodName ?? "";
    message.fileName = object.fileName ?? "";
    message.lineNumber = object.lineNumber ?? 0;
    return message;
  },
};

function createBaseFetchErrorDetailsResponse_Error(): FetchErrorDetailsResponse_Error {
  return { errorTypeHierarchy: [], message: "", stackTrace: [], causeIdx: undefined };
}

export const FetchErrorDetailsResponse_Error = {
  encode(message: FetchErrorDetailsResponse_Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.errorTypeHierarchy) {
      writer.uint32(10).string(v!);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.stackTrace) {
      FetchErrorDetailsResponse_StackTraceElement.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.causeIdx !== undefined) {
      writer.uint32(32).int32(message.causeIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchErrorDetailsResponse_Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchErrorDetailsResponse_Error();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errorTypeHierarchy.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stackTrace.push(FetchErrorDetailsResponse_StackTraceElement.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.causeIdx = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchErrorDetailsResponse_Error {
    return {
      errorTypeHierarchy: globalThis.Array.isArray(object?.errorTypeHierarchy)
        ? object.errorTypeHierarchy.map((e: any) => globalThis.String(e))
        : [],
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      stackTrace: globalThis.Array.isArray(object?.stackTrace)
        ? object.stackTrace.map((e: any) => FetchErrorDetailsResponse_StackTraceElement.fromJSON(e))
        : [],
      causeIdx: isSet(object.causeIdx) ? globalThis.Number(object.causeIdx) : undefined,
    };
  },

  toJSON(message: FetchErrorDetailsResponse_Error): unknown {
    const obj: any = {};
    if (message.errorTypeHierarchy?.length) {
      obj.errorTypeHierarchy = message.errorTypeHierarchy;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.stackTrace?.length) {
      obj.stackTrace = message.stackTrace.map((e) => FetchErrorDetailsResponse_StackTraceElement.toJSON(e));
    }
    if (message.causeIdx !== undefined) {
      obj.causeIdx = Math.round(message.causeIdx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchErrorDetailsResponse_Error>, I>>(base?: I): FetchErrorDetailsResponse_Error {
    return FetchErrorDetailsResponse_Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchErrorDetailsResponse_Error>, I>>(
    object: I,
  ): FetchErrorDetailsResponse_Error {
    const message = createBaseFetchErrorDetailsResponse_Error();
    message.errorTypeHierarchy = object.errorTypeHierarchy?.map((e) => e) || [];
    message.message = object.message ?? "";
    message.stackTrace = object.stackTrace?.map((e) => FetchErrorDetailsResponse_StackTraceElement.fromPartial(e)) ||
      [];
    message.causeIdx = object.causeIdx ?? undefined;
    return message;
  },
};

/** Main interface for the SparkConnect service. */
export interface SparkConnectService {
  /**
   * Executes a request that contains the query and returns a stream of [[Response]].
   *
   * It is guaranteed that there is at least one ARROW batch returned even if the result set is empty.
   */
  ExecutePlan(request: ExecutePlanRequest): Observable<ExecutePlanResponse>;
  /** Analyzes a query and returns a [[AnalyzeResponse]] containing metadata about the query. */
  AnalyzePlan(request: AnalyzePlanRequest): Promise<AnalyzePlanResponse>;
  /** Update or fetch the configurations and returns a [[ConfigResponse]] containing the result. */
  Config(request: ConfigRequest): Promise<ConfigResponse>;
  /**
   * Add artifacts to the session and returns a [[AddArtifactsResponse]] containing metadata about
   * the added artifacts.
   */
  AddArtifacts(request: Observable<AddArtifactsRequest>): Promise<AddArtifactsResponse>;
  /** Check statuses of artifacts in the session and returns them in a [[ArtifactStatusesResponse]] */
  ArtifactStatus(request: ArtifactStatusesRequest): Promise<ArtifactStatusesResponse>;
  /** Interrupts running executions */
  Interrupt(request: InterruptRequest): Promise<InterruptResponse>;
  /**
   * Reattach to an existing reattachable execution.
   * The ExecutePlan must have been started with ReattachOptions.reattachable=true.
   * If the ExecutePlanResponse stream ends without a ResultComplete message, there is more to
   * continue. If there is a ResultComplete, the client should use ReleaseExecute with
   */
  ReattachExecute(request: ReattachExecuteRequest): Observable<ExecutePlanResponse>;
  /**
   * Release an reattachable execution, or parts thereof.
   * The ExecutePlan must have been started with ReattachOptions.reattachable=true.
   * Non reattachable executions are released automatically and immediately after the ExecutePlan
   * RPC and ReleaseExecute may not be used.
   */
  ReleaseExecute(request: ReleaseExecuteRequest): Promise<ReleaseExecuteResponse>;
  /** FetchErrorDetails retrieves the matched exception with details based on a provided error id. */
  FetchErrorDetails(request: FetchErrorDetailsRequest): Promise<FetchErrorDetailsResponse>;
}

export const SparkConnectServiceServiceName = "spark.connect.SparkConnectService";
export class SparkConnectServiceClientImpl implements SparkConnectService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SparkConnectServiceServiceName;
    this.rpc = rpc;
    this.ExecutePlan = this.ExecutePlan.bind(this);
    this.AnalyzePlan = this.AnalyzePlan.bind(this);
    this.Config = this.Config.bind(this);
    this.AddArtifacts = this.AddArtifacts.bind(this);
    this.ArtifactStatus = this.ArtifactStatus.bind(this);
    this.Interrupt = this.Interrupt.bind(this);
    this.ReattachExecute = this.ReattachExecute.bind(this);
    this.ReleaseExecute = this.ReleaseExecute.bind(this);
    this.FetchErrorDetails = this.FetchErrorDetails.bind(this);
  }
  ExecutePlan(request: ExecutePlanRequest): Observable<ExecutePlanResponse> {
    const data = ExecutePlanRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "ExecutePlan", data);
    return result.pipe(map((data) => ExecutePlanResponse.decode(_m0.Reader.create(data))));
  }

  AnalyzePlan(request: AnalyzePlanRequest): Promise<AnalyzePlanResponse> {
    const data = AnalyzePlanRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AnalyzePlan", data);
    return promise.then((data) => AnalyzePlanResponse.decode(_m0.Reader.create(data)));
  }

  Config(request: ConfigRequest): Promise<ConfigResponse> {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Config", data);
    return promise.then((data) => ConfigResponse.decode(_m0.Reader.create(data)));
  }

  AddArtifacts(request: Observable<AddArtifactsRequest>): Promise<AddArtifactsResponse> {
    const data = request.pipe(map((request) => AddArtifactsRequest.encode(request).finish()));
    const promise = this.rpc.clientStreamingRequest(this.service, "AddArtifacts", data);
    return promise.then((data) => AddArtifactsResponse.decode(_m0.Reader.create(data)));
  }

  ArtifactStatus(request: ArtifactStatusesRequest): Promise<ArtifactStatusesResponse> {
    const data = ArtifactStatusesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ArtifactStatus", data);
    return promise.then((data) => ArtifactStatusesResponse.decode(_m0.Reader.create(data)));
  }

  Interrupt(request: InterruptRequest): Promise<InterruptResponse> {
    const data = InterruptRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Interrupt", data);
    return promise.then((data) => InterruptResponse.decode(_m0.Reader.create(data)));
  }

  ReattachExecute(request: ReattachExecuteRequest): Observable<ExecutePlanResponse> {
    const data = ReattachExecuteRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "ReattachExecute", data);
    return result.pipe(map((data) => ExecutePlanResponse.decode(_m0.Reader.create(data))));
  }

  ReleaseExecute(request: ReleaseExecuteRequest): Promise<ReleaseExecuteResponse> {
    const data = ReleaseExecuteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReleaseExecute", data);
    return promise.then((data) => ReleaseExecuteResponse.decode(_m0.Reader.create(data)));
  }

  FetchErrorDetails(request: FetchErrorDetailsRequest): Promise<FetchErrorDetailsResponse> {
    const data = FetchErrorDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchErrorDetails", data);
    return promise.then((data) => FetchErrorDetailsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}

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
