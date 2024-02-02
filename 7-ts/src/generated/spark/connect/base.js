"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigRequest = exports.KeyValue = exports.ExecutePlanResponse_ResultComplete = exports.ExecutePlanResponse_ObservedMetrics = exports.ExecutePlanResponse_Metrics_MetricValue = exports.ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry = exports.ExecutePlanResponse_Metrics_MetricObject = exports.ExecutePlanResponse_Metrics = exports.ExecutePlanResponse_ArrowBatch = exports.ExecutePlanResponse_SqlCommandResult = exports.ExecutePlanResponse = exports.ExecutePlanRequest_RequestOption = exports.ExecutePlanRequest = exports.AnalyzePlanResponse_GetStorageLevel = exports.AnalyzePlanResponse_Unpersist = exports.AnalyzePlanResponse_Persist = exports.AnalyzePlanResponse_SemanticHash = exports.AnalyzePlanResponse_SameSemantics = exports.AnalyzePlanResponse_DDLParse = exports.AnalyzePlanResponse_SparkVersion = exports.AnalyzePlanResponse_InputFiles = exports.AnalyzePlanResponse_IsStreaming = exports.AnalyzePlanResponse_IsLocal = exports.AnalyzePlanResponse_TreeString = exports.AnalyzePlanResponse_Explain = exports.AnalyzePlanResponse_Schema = exports.AnalyzePlanResponse = exports.AnalyzePlanRequest_GetStorageLevel = exports.AnalyzePlanRequest_Unpersist = exports.AnalyzePlanRequest_Persist = exports.AnalyzePlanRequest_SemanticHash = exports.AnalyzePlanRequest_SameSemantics = exports.AnalyzePlanRequest_DDLParse = exports.AnalyzePlanRequest_SparkVersion = exports.AnalyzePlanRequest_InputFiles = exports.AnalyzePlanRequest_IsStreaming = exports.AnalyzePlanRequest_IsLocal = exports.AnalyzePlanRequest_TreeString = exports.AnalyzePlanRequest_Explain = exports.AnalyzePlanRequest_Schema = exports.AnalyzePlanRequest = exports.UserContext = exports.Plan = exports.interruptRequest_InterruptTypeToJSON = exports.interruptRequest_InterruptTypeFromJSON = exports.InterruptRequest_InterruptType = exports.analyzePlanRequest_Explain_ExplainModeToJSON = exports.analyzePlanRequest_Explain_ExplainModeFromJSON = exports.AnalyzePlanRequest_Explain_ExplainMode = exports.protobufPackage = void 0;
exports.SparkConnectServiceClientImpl = exports.SparkConnectServiceServiceName = exports.FetchErrorDetailsResponse_Error = exports.FetchErrorDetailsResponse_StackTraceElement = exports.FetchErrorDetailsResponse = exports.FetchErrorDetailsRequest = exports.ReleaseExecuteResponse = exports.ReleaseExecuteRequest_ReleaseUntil = exports.ReleaseExecuteRequest_ReleaseAll = exports.ReleaseExecuteRequest = exports.ReattachExecuteRequest = exports.ReattachOptions = exports.InterruptResponse = exports.InterruptRequest = exports.ArtifactStatusesResponse_StatusesEntry = exports.ArtifactStatusesResponse_ArtifactStatus = exports.ArtifactStatusesResponse = exports.ArtifactStatusesRequest = exports.AddArtifactsResponse_ArtifactSummary = exports.AddArtifactsResponse = exports.AddArtifactsRequest_BeginChunkedArtifact = exports.AddArtifactsRequest_Batch = exports.AddArtifactsRequest_SingleChunkArtifact = exports.AddArtifactsRequest_ArtifactChunk = exports.AddArtifactsRequest = exports.ConfigResponse = exports.ConfigRequest_IsModifiable = exports.ConfigRequest_Unset = exports.ConfigRequest_GetAll = exports.ConfigRequest_GetOption = exports.ConfigRequest_GetWithDefault = exports.ConfigRequest_Get = exports.ConfigRequest_Set = exports.ConfigRequest_Operation = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
var operators_1 = require("rxjs/operators");
var any_1 = require("../../google/protobuf/any");
var commands_1 = require("./commands");
var common_1 = require("./common");
var expressions_1 = require("./expressions");
var relations_1 = require("./relations");
var types_1 = require("./types");
var Long = require("long");
exports.protobufPackage = "spark.connect";
/** Plan explanation mode. */
var AnalyzePlanRequest_Explain_ExplainMode;
(function (AnalyzePlanRequest_Explain_ExplainMode) {
    AnalyzePlanRequest_Explain_ExplainMode[AnalyzePlanRequest_Explain_ExplainMode["EXPLAIN_MODE_UNSPECIFIED"] = 0] = "EXPLAIN_MODE_UNSPECIFIED";
    /** EXPLAIN_MODE_SIMPLE - Generates only physical plan. */
    AnalyzePlanRequest_Explain_ExplainMode[AnalyzePlanRequest_Explain_ExplainMode["EXPLAIN_MODE_SIMPLE"] = 1] = "EXPLAIN_MODE_SIMPLE";
    /**
     * EXPLAIN_MODE_EXTENDED - Generates parsed logical plan, analyzed logical plan, optimized logical plan and physical plan.
     * Parsed Logical plan is a unresolved plan that extracted from the query. Analyzed logical plans
     * transforms which translates unresolvedAttribute and unresolvedRelation into fully typed objects.
     * The optimized logical plan transforms through a set of optimization rules, resulting in the
     * physical plan.
     */
    AnalyzePlanRequest_Explain_ExplainMode[AnalyzePlanRequest_Explain_ExplainMode["EXPLAIN_MODE_EXTENDED"] = 2] = "EXPLAIN_MODE_EXTENDED";
    /** EXPLAIN_MODE_CODEGEN - Generates code for the statement, if any and a physical plan. */
    AnalyzePlanRequest_Explain_ExplainMode[AnalyzePlanRequest_Explain_ExplainMode["EXPLAIN_MODE_CODEGEN"] = 3] = "EXPLAIN_MODE_CODEGEN";
    /** EXPLAIN_MODE_COST - If plan node statistics are available, generates a logical plan and also the statistics. */
    AnalyzePlanRequest_Explain_ExplainMode[AnalyzePlanRequest_Explain_ExplainMode["EXPLAIN_MODE_COST"] = 4] = "EXPLAIN_MODE_COST";
    /** EXPLAIN_MODE_FORMATTED - Generates a physical plan outline and also node details. */
    AnalyzePlanRequest_Explain_ExplainMode[AnalyzePlanRequest_Explain_ExplainMode["EXPLAIN_MODE_FORMATTED"] = 5] = "EXPLAIN_MODE_FORMATTED";
    AnalyzePlanRequest_Explain_ExplainMode[AnalyzePlanRequest_Explain_ExplainMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AnalyzePlanRequest_Explain_ExplainMode = exports.AnalyzePlanRequest_Explain_ExplainMode || (exports.AnalyzePlanRequest_Explain_ExplainMode = {}));
function analyzePlanRequest_Explain_ExplainModeFromJSON(object) {
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
exports.analyzePlanRequest_Explain_ExplainModeFromJSON = analyzePlanRequest_Explain_ExplainModeFromJSON;
function analyzePlanRequest_Explain_ExplainModeToJSON(object) {
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
exports.analyzePlanRequest_Explain_ExplainModeToJSON = analyzePlanRequest_Explain_ExplainModeToJSON;
var InterruptRequest_InterruptType;
(function (InterruptRequest_InterruptType) {
    InterruptRequest_InterruptType[InterruptRequest_InterruptType["INTERRUPT_TYPE_UNSPECIFIED"] = 0] = "INTERRUPT_TYPE_UNSPECIFIED";
    /** INTERRUPT_TYPE_ALL - Interrupt all running executions within the session with the provided session_id. */
    InterruptRequest_InterruptType[InterruptRequest_InterruptType["INTERRUPT_TYPE_ALL"] = 1] = "INTERRUPT_TYPE_ALL";
    /** INTERRUPT_TYPE_TAG - Interrupt all running executions within the session with the provided operation_tag. */
    InterruptRequest_InterruptType[InterruptRequest_InterruptType["INTERRUPT_TYPE_TAG"] = 2] = "INTERRUPT_TYPE_TAG";
    /** INTERRUPT_TYPE_OPERATION_ID - Interrupt the running execution within the session with the provided operation_id. */
    InterruptRequest_InterruptType[InterruptRequest_InterruptType["INTERRUPT_TYPE_OPERATION_ID"] = 3] = "INTERRUPT_TYPE_OPERATION_ID";
    InterruptRequest_InterruptType[InterruptRequest_InterruptType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InterruptRequest_InterruptType = exports.InterruptRequest_InterruptType || (exports.InterruptRequest_InterruptType = {}));
function interruptRequest_InterruptTypeFromJSON(object) {
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
exports.interruptRequest_InterruptTypeFromJSON = interruptRequest_InterruptTypeFromJSON;
function interruptRequest_InterruptTypeToJSON(object) {
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
exports.interruptRequest_InterruptTypeToJSON = interruptRequest_InterruptTypeToJSON;
function createBasePlan() {
    return { root: undefined, command: undefined };
}
exports.Plan = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.root !== undefined) {
            relations_1.Relation.encode(message.root, writer.uint32(10).fork()).ldelim();
        }
        if (message.command !== undefined) {
            commands_1.Command.encode(message.command, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePlan();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.root = relations_1.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.command = commands_1.Command.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            root: isSet(object.root) ? relations_1.Relation.fromJSON(object.root) : undefined,
            command: isSet(object.command) ? commands_1.Command.fromJSON(object.command) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.root !== undefined) {
            obj.root = relations_1.Relation.toJSON(message.root);
        }
        if (message.command !== undefined) {
            obj.command = commands_1.Command.toJSON(message.command);
        }
        return obj;
    },
    create: function (base) {
        return exports.Plan.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBasePlan();
        message.root = (object.root !== undefined && object.root !== null) ? relations_1.Relation.fromPartial(object.root) : undefined;
        message.command = (object.command !== undefined && object.command !== null)
            ? commands_1.Command.fromPartial(object.command)
            : undefined;
        return message;
    },
};
function createBaseUserContext() {
    return { userId: "", userName: "", extensions: [] };
}
exports.UserContext = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        for (var _i = 0, _a = message.extensions; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUserContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.extensions.push(any_1.Any.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            extensions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.extensions)
                ? object.extensions.map(function (e) { return any_1.Any.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if ((_a = message.extensions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.extensions = message.extensions.map(function (e) { return any_1.Any.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.UserContext.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUserContext();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        message.extensions = ((_c = object.extensions) === null || _c === void 0 ? void 0 : _c.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAnalyzePlanRequest() {
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
exports.AnalyzePlanRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
        }
        if (message.clientType !== undefined) {
            writer.uint32(26).string(message.clientType);
        }
        if (message.schema !== undefined) {
            exports.AnalyzePlanRequest_Schema.encode(message.schema, writer.uint32(34).fork()).ldelim();
        }
        if (message.explain !== undefined) {
            exports.AnalyzePlanRequest_Explain.encode(message.explain, writer.uint32(42).fork()).ldelim();
        }
        if (message.treeString !== undefined) {
            exports.AnalyzePlanRequest_TreeString.encode(message.treeString, writer.uint32(50).fork()).ldelim();
        }
        if (message.isLocal !== undefined) {
            exports.AnalyzePlanRequest_IsLocal.encode(message.isLocal, writer.uint32(58).fork()).ldelim();
        }
        if (message.isStreaming !== undefined) {
            exports.AnalyzePlanRequest_IsStreaming.encode(message.isStreaming, writer.uint32(66).fork()).ldelim();
        }
        if (message.inputFiles !== undefined) {
            exports.AnalyzePlanRequest_InputFiles.encode(message.inputFiles, writer.uint32(74).fork()).ldelim();
        }
        if (message.sparkVersion !== undefined) {
            exports.AnalyzePlanRequest_SparkVersion.encode(message.sparkVersion, writer.uint32(82).fork()).ldelim();
        }
        if (message.ddlParse !== undefined) {
            exports.AnalyzePlanRequest_DDLParse.encode(message.ddlParse, writer.uint32(90).fork()).ldelim();
        }
        if (message.sameSemantics !== undefined) {
            exports.AnalyzePlanRequest_SameSemantics.encode(message.sameSemantics, writer.uint32(98).fork()).ldelim();
        }
        if (message.semanticHash !== undefined) {
            exports.AnalyzePlanRequest_SemanticHash.encode(message.semanticHash, writer.uint32(106).fork()).ldelim();
        }
        if (message.persist !== undefined) {
            exports.AnalyzePlanRequest_Persist.encode(message.persist, writer.uint32(114).fork()).ldelim();
        }
        if (message.unpersist !== undefined) {
            exports.AnalyzePlanRequest_Unpersist.encode(message.unpersist, writer.uint32(122).fork()).ldelim();
        }
        if (message.getStorageLevel !== undefined) {
            exports.AnalyzePlanRequest_GetStorageLevel.encode(message.getStorageLevel, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
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
                    message.schema = exports.AnalyzePlanRequest_Schema.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.explain = exports.AnalyzePlanRequest_Explain.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.treeString = exports.AnalyzePlanRequest_TreeString.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.isLocal = exports.AnalyzePlanRequest_IsLocal.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.isStreaming = exports.AnalyzePlanRequest_IsStreaming.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.inputFiles = exports.AnalyzePlanRequest_InputFiles.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.sparkVersion = exports.AnalyzePlanRequest_SparkVersion.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.ddlParse = exports.AnalyzePlanRequest_DDLParse.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.sameSemantics = exports.AnalyzePlanRequest_SameSemantics.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.semanticHash = exports.AnalyzePlanRequest_SemanticHash.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.persist = exports.AnalyzePlanRequest_Persist.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.unpersist = exports.AnalyzePlanRequest_Unpersist.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.getStorageLevel = exports.AnalyzePlanRequest_GetStorageLevel.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
            schema: isSet(object.schema) ? exports.AnalyzePlanRequest_Schema.fromJSON(object.schema) : undefined,
            explain: isSet(object.explain) ? exports.AnalyzePlanRequest_Explain.fromJSON(object.explain) : undefined,
            treeString: isSet(object.treeString) ? exports.AnalyzePlanRequest_TreeString.fromJSON(object.treeString) : undefined,
            isLocal: isSet(object.isLocal) ? exports.AnalyzePlanRequest_IsLocal.fromJSON(object.isLocal) : undefined,
            isStreaming: isSet(object.isStreaming) ? exports.AnalyzePlanRequest_IsStreaming.fromJSON(object.isStreaming) : undefined,
            inputFiles: isSet(object.inputFiles) ? exports.AnalyzePlanRequest_InputFiles.fromJSON(object.inputFiles) : undefined,
            sparkVersion: isSet(object.sparkVersion)
                ? exports.AnalyzePlanRequest_SparkVersion.fromJSON(object.sparkVersion)
                : undefined,
            ddlParse: isSet(object.ddlParse) ? exports.AnalyzePlanRequest_DDLParse.fromJSON(object.ddlParse) : undefined,
            sameSemantics: isSet(object.sameSemantics)
                ? exports.AnalyzePlanRequest_SameSemantics.fromJSON(object.sameSemantics)
                : undefined,
            semanticHash: isSet(object.semanticHash)
                ? exports.AnalyzePlanRequest_SemanticHash.fromJSON(object.semanticHash)
                : undefined,
            persist: isSet(object.persist) ? exports.AnalyzePlanRequest_Persist.fromJSON(object.persist) : undefined,
            unpersist: isSet(object.unpersist) ? exports.AnalyzePlanRequest_Unpersist.fromJSON(object.unpersist) : undefined,
            getStorageLevel: isSet(object.getStorageLevel)
                ? exports.AnalyzePlanRequest_GetStorageLevel.fromJSON(object.getStorageLevel)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
        }
        if (message.clientType !== undefined) {
            obj.clientType = message.clientType;
        }
        if (message.schema !== undefined) {
            obj.schema = exports.AnalyzePlanRequest_Schema.toJSON(message.schema);
        }
        if (message.explain !== undefined) {
            obj.explain = exports.AnalyzePlanRequest_Explain.toJSON(message.explain);
        }
        if (message.treeString !== undefined) {
            obj.treeString = exports.AnalyzePlanRequest_TreeString.toJSON(message.treeString);
        }
        if (message.isLocal !== undefined) {
            obj.isLocal = exports.AnalyzePlanRequest_IsLocal.toJSON(message.isLocal);
        }
        if (message.isStreaming !== undefined) {
            obj.isStreaming = exports.AnalyzePlanRequest_IsStreaming.toJSON(message.isStreaming);
        }
        if (message.inputFiles !== undefined) {
            obj.inputFiles = exports.AnalyzePlanRequest_InputFiles.toJSON(message.inputFiles);
        }
        if (message.sparkVersion !== undefined) {
            obj.sparkVersion = exports.AnalyzePlanRequest_SparkVersion.toJSON(message.sparkVersion);
        }
        if (message.ddlParse !== undefined) {
            obj.ddlParse = exports.AnalyzePlanRequest_DDLParse.toJSON(message.ddlParse);
        }
        if (message.sameSemantics !== undefined) {
            obj.sameSemantics = exports.AnalyzePlanRequest_SameSemantics.toJSON(message.sameSemantics);
        }
        if (message.semanticHash !== undefined) {
            obj.semanticHash = exports.AnalyzePlanRequest_SemanticHash.toJSON(message.semanticHash);
        }
        if (message.persist !== undefined) {
            obj.persist = exports.AnalyzePlanRequest_Persist.toJSON(message.persist);
        }
        if (message.unpersist !== undefined) {
            obj.unpersist = exports.AnalyzePlanRequest_Unpersist.toJSON(message.unpersist);
        }
        if (message.getStorageLevel !== undefined) {
            obj.getStorageLevel = exports.AnalyzePlanRequest_GetStorageLevel.toJSON(message.getStorageLevel);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAnalyzePlanRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.clientType = (_b = object.clientType) !== null && _b !== void 0 ? _b : undefined;
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? exports.AnalyzePlanRequest_Schema.fromPartial(object.schema)
            : undefined;
        message.explain = (object.explain !== undefined && object.explain !== null)
            ? exports.AnalyzePlanRequest_Explain.fromPartial(object.explain)
            : undefined;
        message.treeString = (object.treeString !== undefined && object.treeString !== null)
            ? exports.AnalyzePlanRequest_TreeString.fromPartial(object.treeString)
            : undefined;
        message.isLocal = (object.isLocal !== undefined && object.isLocal !== null)
            ? exports.AnalyzePlanRequest_IsLocal.fromPartial(object.isLocal)
            : undefined;
        message.isStreaming = (object.isStreaming !== undefined && object.isStreaming !== null)
            ? exports.AnalyzePlanRequest_IsStreaming.fromPartial(object.isStreaming)
            : undefined;
        message.inputFiles = (object.inputFiles !== undefined && object.inputFiles !== null)
            ? exports.AnalyzePlanRequest_InputFiles.fromPartial(object.inputFiles)
            : undefined;
        message.sparkVersion = (object.sparkVersion !== undefined && object.sparkVersion !== null)
            ? exports.AnalyzePlanRequest_SparkVersion.fromPartial(object.sparkVersion)
            : undefined;
        message.ddlParse = (object.ddlParse !== undefined && object.ddlParse !== null)
            ? exports.AnalyzePlanRequest_DDLParse.fromPartial(object.ddlParse)
            : undefined;
        message.sameSemantics = (object.sameSemantics !== undefined && object.sameSemantics !== null)
            ? exports.AnalyzePlanRequest_SameSemantics.fromPartial(object.sameSemantics)
            : undefined;
        message.semanticHash = (object.semanticHash !== undefined && object.semanticHash !== null)
            ? exports.AnalyzePlanRequest_SemanticHash.fromPartial(object.semanticHash)
            : undefined;
        message.persist = (object.persist !== undefined && object.persist !== null)
            ? exports.AnalyzePlanRequest_Persist.fromPartial(object.persist)
            : undefined;
        message.unpersist = (object.unpersist !== undefined && object.unpersist !== null)
            ? exports.AnalyzePlanRequest_Unpersist.fromPartial(object.unpersist)
            : undefined;
        message.getStorageLevel = (object.getStorageLevel !== undefined && object.getStorageLevel !== null)
            ? exports.AnalyzePlanRequest_GetStorageLevel.fromPartial(object.getStorageLevel)
            : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_Schema() {
    return { plan: undefined };
}
exports.AnalyzePlanRequest_Schema = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_Schema();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.plan = exports.Plan.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { plan: isSet(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.plan !== undefined) {
            obj.plan = exports.Plan.toJSON(message.plan);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_Schema.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanRequest_Schema();
        message.plan = (object.plan !== undefined && object.plan !== null) ? exports.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_Explain() {
    return { plan: undefined, explainMode: 0 };
}
exports.AnalyzePlanRequest_Explain = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        if (message.explainMode !== 0) {
            writer.uint32(16).int32(message.explainMode);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_Explain();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.plan = exports.Plan.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.explainMode = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            plan: isSet(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined,
            explainMode: isSet(object.explainMode) ? analyzePlanRequest_Explain_ExplainModeFromJSON(object.explainMode) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.plan !== undefined) {
            obj.plan = exports.Plan.toJSON(message.plan);
        }
        if (message.explainMode !== 0) {
            obj.explainMode = analyzePlanRequest_Explain_ExplainModeToJSON(message.explainMode);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_Explain.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanRequest_Explain();
        message.plan = (object.plan !== undefined && object.plan !== null) ? exports.Plan.fromPartial(object.plan) : undefined;
        message.explainMode = (_a = object.explainMode) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseAnalyzePlanRequest_TreeString() {
    return { plan: undefined, level: undefined };
}
exports.AnalyzePlanRequest_TreeString = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        if (message.level !== undefined) {
            writer.uint32(16).int32(message.level);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_TreeString();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.plan = exports.Plan.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            plan: isSet(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined,
            level: isSet(object.level) ? globalThis.Number(object.level) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.plan !== undefined) {
            obj.plan = exports.Plan.toJSON(message.plan);
        }
        if (message.level !== undefined) {
            obj.level = Math.round(message.level);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_TreeString.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanRequest_TreeString();
        message.plan = (object.plan !== undefined && object.plan !== null) ? exports.Plan.fromPartial(object.plan) : undefined;
        message.level = (_a = object.level) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_IsLocal() {
    return { plan: undefined };
}
exports.AnalyzePlanRequest_IsLocal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_IsLocal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.plan = exports.Plan.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { plan: isSet(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.plan !== undefined) {
            obj.plan = exports.Plan.toJSON(message.plan);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_IsLocal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanRequest_IsLocal();
        message.plan = (object.plan !== undefined && object.plan !== null) ? exports.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_IsStreaming() {
    return { plan: undefined };
}
exports.AnalyzePlanRequest_IsStreaming = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_IsStreaming();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.plan = exports.Plan.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { plan: isSet(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.plan !== undefined) {
            obj.plan = exports.Plan.toJSON(message.plan);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_IsStreaming.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanRequest_IsStreaming();
        message.plan = (object.plan !== undefined && object.plan !== null) ? exports.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_InputFiles() {
    return { plan: undefined };
}
exports.AnalyzePlanRequest_InputFiles = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_InputFiles();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.plan = exports.Plan.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { plan: isSet(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.plan !== undefined) {
            obj.plan = exports.Plan.toJSON(message.plan);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_InputFiles.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanRequest_InputFiles();
        message.plan = (object.plan !== undefined && object.plan !== null) ? exports.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_SparkVersion() {
    return {};
}
exports.AnalyzePlanRequest_SparkVersion = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_SparkVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_SparkVersion.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseAnalyzePlanRequest_SparkVersion();
        return message;
    },
};
function createBaseAnalyzePlanRequest_DDLParse() {
    return { ddlString: "" };
}
exports.AnalyzePlanRequest_DDLParse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ddlString !== "") {
            writer.uint32(10).string(message.ddlString);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_DDLParse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { ddlString: isSet(object.ddlString) ? globalThis.String(object.ddlString) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.ddlString !== "") {
            obj.ddlString = message.ddlString;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_DDLParse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanRequest_DDLParse();
        message.ddlString = (_a = object.ddlString) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAnalyzePlanRequest_SameSemantics() {
    return { targetPlan: undefined, otherPlan: undefined };
}
exports.AnalyzePlanRequest_SameSemantics = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.targetPlan !== undefined) {
            exports.Plan.encode(message.targetPlan, writer.uint32(10).fork()).ldelim();
        }
        if (message.otherPlan !== undefined) {
            exports.Plan.encode(message.otherPlan, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_SameSemantics();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.targetPlan = exports.Plan.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otherPlan = exports.Plan.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            targetPlan: isSet(object.targetPlan) ? exports.Plan.fromJSON(object.targetPlan) : undefined,
            otherPlan: isSet(object.otherPlan) ? exports.Plan.fromJSON(object.otherPlan) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.targetPlan !== undefined) {
            obj.targetPlan = exports.Plan.toJSON(message.targetPlan);
        }
        if (message.otherPlan !== undefined) {
            obj.otherPlan = exports.Plan.toJSON(message.otherPlan);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_SameSemantics.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanRequest_SameSemantics();
        message.targetPlan = (object.targetPlan !== undefined && object.targetPlan !== null)
            ? exports.Plan.fromPartial(object.targetPlan)
            : undefined;
        message.otherPlan = (object.otherPlan !== undefined && object.otherPlan !== null)
            ? exports.Plan.fromPartial(object.otherPlan)
            : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_SemanticHash() {
    return { plan: undefined };
}
exports.AnalyzePlanRequest_SemanticHash = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_SemanticHash();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.plan = exports.Plan.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { plan: isSet(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.plan !== undefined) {
            obj.plan = exports.Plan.toJSON(message.plan);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_SemanticHash.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanRequest_SemanticHash();
        message.plan = (object.plan !== undefined && object.plan !== null) ? exports.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_Persist() {
    return { relation: undefined, storageLevel: undefined };
}
exports.AnalyzePlanRequest_Persist = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.relation !== undefined) {
            relations_1.Relation.encode(message.relation, writer.uint32(10).fork()).ldelim();
        }
        if (message.storageLevel !== undefined) {
            common_1.StorageLevel.encode(message.storageLevel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_Persist();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.relation = relations_1.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.storageLevel = common_1.StorageLevel.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            relation: isSet(object.relation) ? relations_1.Relation.fromJSON(object.relation) : undefined,
            storageLevel: isSet(object.storageLevel) ? common_1.StorageLevel.fromJSON(object.storageLevel) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.relation !== undefined) {
            obj.relation = relations_1.Relation.toJSON(message.relation);
        }
        if (message.storageLevel !== undefined) {
            obj.storageLevel = common_1.StorageLevel.toJSON(message.storageLevel);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_Persist.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanRequest_Persist();
        message.relation = (object.relation !== undefined && object.relation !== null)
            ? relations_1.Relation.fromPartial(object.relation)
            : undefined;
        message.storageLevel = (object.storageLevel !== undefined && object.storageLevel !== null)
            ? common_1.StorageLevel.fromPartial(object.storageLevel)
            : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_Unpersist() {
    return { relation: undefined, blocking: undefined };
}
exports.AnalyzePlanRequest_Unpersist = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.relation !== undefined) {
            relations_1.Relation.encode(message.relation, writer.uint32(10).fork()).ldelim();
        }
        if (message.blocking !== undefined) {
            writer.uint32(16).bool(message.blocking);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_Unpersist();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.relation = relations_1.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            relation: isSet(object.relation) ? relations_1.Relation.fromJSON(object.relation) : undefined,
            blocking: isSet(object.blocking) ? globalThis.Boolean(object.blocking) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.relation !== undefined) {
            obj.relation = relations_1.Relation.toJSON(message.relation);
        }
        if (message.blocking !== undefined) {
            obj.blocking = message.blocking;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_Unpersist.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanRequest_Unpersist();
        message.relation = (object.relation !== undefined && object.relation !== null)
            ? relations_1.Relation.fromPartial(object.relation)
            : undefined;
        message.blocking = (_a = object.blocking) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseAnalyzePlanRequest_GetStorageLevel() {
    return { relation: undefined };
}
exports.AnalyzePlanRequest_GetStorageLevel = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.relation !== undefined) {
            relations_1.Relation.encode(message.relation, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanRequest_GetStorageLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.relation = relations_1.Relation.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { relation: isSet(object.relation) ? relations_1.Relation.fromJSON(object.relation) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.relation !== undefined) {
            obj.relation = relations_1.Relation.toJSON(message.relation);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanRequest_GetStorageLevel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanRequest_GetStorageLevel();
        message.relation = (object.relation !== undefined && object.relation !== null)
            ? relations_1.Relation.fromPartial(object.relation)
            : undefined;
        return message;
    },
};
function createBaseAnalyzePlanResponse() {
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
exports.AnalyzePlanResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.schema !== undefined) {
            exports.AnalyzePlanResponse_Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
        }
        if (message.explain !== undefined) {
            exports.AnalyzePlanResponse_Explain.encode(message.explain, writer.uint32(26).fork()).ldelim();
        }
        if (message.treeString !== undefined) {
            exports.AnalyzePlanResponse_TreeString.encode(message.treeString, writer.uint32(34).fork()).ldelim();
        }
        if (message.isLocal !== undefined) {
            exports.AnalyzePlanResponse_IsLocal.encode(message.isLocal, writer.uint32(42).fork()).ldelim();
        }
        if (message.isStreaming !== undefined) {
            exports.AnalyzePlanResponse_IsStreaming.encode(message.isStreaming, writer.uint32(50).fork()).ldelim();
        }
        if (message.inputFiles !== undefined) {
            exports.AnalyzePlanResponse_InputFiles.encode(message.inputFiles, writer.uint32(58).fork()).ldelim();
        }
        if (message.sparkVersion !== undefined) {
            exports.AnalyzePlanResponse_SparkVersion.encode(message.sparkVersion, writer.uint32(66).fork()).ldelim();
        }
        if (message.ddlParse !== undefined) {
            exports.AnalyzePlanResponse_DDLParse.encode(message.ddlParse, writer.uint32(74).fork()).ldelim();
        }
        if (message.sameSemantics !== undefined) {
            exports.AnalyzePlanResponse_SameSemantics.encode(message.sameSemantics, writer.uint32(82).fork()).ldelim();
        }
        if (message.semanticHash !== undefined) {
            exports.AnalyzePlanResponse_SemanticHash.encode(message.semanticHash, writer.uint32(90).fork()).ldelim();
        }
        if (message.persist !== undefined) {
            exports.AnalyzePlanResponse_Persist.encode(message.persist, writer.uint32(98).fork()).ldelim();
        }
        if (message.unpersist !== undefined) {
            exports.AnalyzePlanResponse_Unpersist.encode(message.unpersist, writer.uint32(106).fork()).ldelim();
        }
        if (message.getStorageLevel !== undefined) {
            exports.AnalyzePlanResponse_GetStorageLevel.encode(message.getStorageLevel, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.schema = exports.AnalyzePlanResponse_Schema.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.explain = exports.AnalyzePlanResponse_Explain.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.treeString = exports.AnalyzePlanResponse_TreeString.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.isLocal = exports.AnalyzePlanResponse_IsLocal.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.isStreaming = exports.AnalyzePlanResponse_IsStreaming.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.inputFiles = exports.AnalyzePlanResponse_InputFiles.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.sparkVersion = exports.AnalyzePlanResponse_SparkVersion.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.ddlParse = exports.AnalyzePlanResponse_DDLParse.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.sameSemantics = exports.AnalyzePlanResponse_SameSemantics.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.semanticHash = exports.AnalyzePlanResponse_SemanticHash.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.persist = exports.AnalyzePlanResponse_Persist.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.unpersist = exports.AnalyzePlanResponse_Unpersist.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.getStorageLevel = exports.AnalyzePlanResponse_GetStorageLevel.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            schema: isSet(object.schema) ? exports.AnalyzePlanResponse_Schema.fromJSON(object.schema) : undefined,
            explain: isSet(object.explain) ? exports.AnalyzePlanResponse_Explain.fromJSON(object.explain) : undefined,
            treeString: isSet(object.treeString) ? exports.AnalyzePlanResponse_TreeString.fromJSON(object.treeString) : undefined,
            isLocal: isSet(object.isLocal) ? exports.AnalyzePlanResponse_IsLocal.fromJSON(object.isLocal) : undefined,
            isStreaming: isSet(object.isStreaming) ? exports.AnalyzePlanResponse_IsStreaming.fromJSON(object.isStreaming) : undefined,
            inputFiles: isSet(object.inputFiles) ? exports.AnalyzePlanResponse_InputFiles.fromJSON(object.inputFiles) : undefined,
            sparkVersion: isSet(object.sparkVersion)
                ? exports.AnalyzePlanResponse_SparkVersion.fromJSON(object.sparkVersion)
                : undefined,
            ddlParse: isSet(object.ddlParse) ? exports.AnalyzePlanResponse_DDLParse.fromJSON(object.ddlParse) : undefined,
            sameSemantics: isSet(object.sameSemantics)
                ? exports.AnalyzePlanResponse_SameSemantics.fromJSON(object.sameSemantics)
                : undefined,
            semanticHash: isSet(object.semanticHash)
                ? exports.AnalyzePlanResponse_SemanticHash.fromJSON(object.semanticHash)
                : undefined,
            persist: isSet(object.persist) ? exports.AnalyzePlanResponse_Persist.fromJSON(object.persist) : undefined,
            unpersist: isSet(object.unpersist) ? exports.AnalyzePlanResponse_Unpersist.fromJSON(object.unpersist) : undefined,
            getStorageLevel: isSet(object.getStorageLevel)
                ? exports.AnalyzePlanResponse_GetStorageLevel.fromJSON(object.getStorageLevel)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.schema !== undefined) {
            obj.schema = exports.AnalyzePlanResponse_Schema.toJSON(message.schema);
        }
        if (message.explain !== undefined) {
            obj.explain = exports.AnalyzePlanResponse_Explain.toJSON(message.explain);
        }
        if (message.treeString !== undefined) {
            obj.treeString = exports.AnalyzePlanResponse_TreeString.toJSON(message.treeString);
        }
        if (message.isLocal !== undefined) {
            obj.isLocal = exports.AnalyzePlanResponse_IsLocal.toJSON(message.isLocal);
        }
        if (message.isStreaming !== undefined) {
            obj.isStreaming = exports.AnalyzePlanResponse_IsStreaming.toJSON(message.isStreaming);
        }
        if (message.inputFiles !== undefined) {
            obj.inputFiles = exports.AnalyzePlanResponse_InputFiles.toJSON(message.inputFiles);
        }
        if (message.sparkVersion !== undefined) {
            obj.sparkVersion = exports.AnalyzePlanResponse_SparkVersion.toJSON(message.sparkVersion);
        }
        if (message.ddlParse !== undefined) {
            obj.ddlParse = exports.AnalyzePlanResponse_DDLParse.toJSON(message.ddlParse);
        }
        if (message.sameSemantics !== undefined) {
            obj.sameSemantics = exports.AnalyzePlanResponse_SameSemantics.toJSON(message.sameSemantics);
        }
        if (message.semanticHash !== undefined) {
            obj.semanticHash = exports.AnalyzePlanResponse_SemanticHash.toJSON(message.semanticHash);
        }
        if (message.persist !== undefined) {
            obj.persist = exports.AnalyzePlanResponse_Persist.toJSON(message.persist);
        }
        if (message.unpersist !== undefined) {
            obj.unpersist = exports.AnalyzePlanResponse_Unpersist.toJSON(message.unpersist);
        }
        if (message.getStorageLevel !== undefined) {
            obj.getStorageLevel = exports.AnalyzePlanResponse_GetStorageLevel.toJSON(message.getStorageLevel);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? exports.AnalyzePlanResponse_Schema.fromPartial(object.schema)
            : undefined;
        message.explain = (object.explain !== undefined && object.explain !== null)
            ? exports.AnalyzePlanResponse_Explain.fromPartial(object.explain)
            : undefined;
        message.treeString = (object.treeString !== undefined && object.treeString !== null)
            ? exports.AnalyzePlanResponse_TreeString.fromPartial(object.treeString)
            : undefined;
        message.isLocal = (object.isLocal !== undefined && object.isLocal !== null)
            ? exports.AnalyzePlanResponse_IsLocal.fromPartial(object.isLocal)
            : undefined;
        message.isStreaming = (object.isStreaming !== undefined && object.isStreaming !== null)
            ? exports.AnalyzePlanResponse_IsStreaming.fromPartial(object.isStreaming)
            : undefined;
        message.inputFiles = (object.inputFiles !== undefined && object.inputFiles !== null)
            ? exports.AnalyzePlanResponse_InputFiles.fromPartial(object.inputFiles)
            : undefined;
        message.sparkVersion = (object.sparkVersion !== undefined && object.sparkVersion !== null)
            ? exports.AnalyzePlanResponse_SparkVersion.fromPartial(object.sparkVersion)
            : undefined;
        message.ddlParse = (object.ddlParse !== undefined && object.ddlParse !== null)
            ? exports.AnalyzePlanResponse_DDLParse.fromPartial(object.ddlParse)
            : undefined;
        message.sameSemantics = (object.sameSemantics !== undefined && object.sameSemantics !== null)
            ? exports.AnalyzePlanResponse_SameSemantics.fromPartial(object.sameSemantics)
            : undefined;
        message.semanticHash = (object.semanticHash !== undefined && object.semanticHash !== null)
            ? exports.AnalyzePlanResponse_SemanticHash.fromPartial(object.semanticHash)
            : undefined;
        message.persist = (object.persist !== undefined && object.persist !== null)
            ? exports.AnalyzePlanResponse_Persist.fromPartial(object.persist)
            : undefined;
        message.unpersist = (object.unpersist !== undefined && object.unpersist !== null)
            ? exports.AnalyzePlanResponse_Unpersist.fromPartial(object.unpersist)
            : undefined;
        message.getStorageLevel = (object.getStorageLevel !== undefined && object.getStorageLevel !== null)
            ? exports.AnalyzePlanResponse_GetStorageLevel.fromPartial(object.getStorageLevel)
            : undefined;
        return message;
    },
};
function createBaseAnalyzePlanResponse_Schema() {
    return { schema: undefined };
}
exports.AnalyzePlanResponse_Schema = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.schema !== undefined) {
            types_1.DataType.encode(message.schema, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_Schema();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.schema = types_1.DataType.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { schema: isSet(object.schema) ? types_1.DataType.fromJSON(object.schema) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.schema !== undefined) {
            obj.schema = types_1.DataType.toJSON(message.schema);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_Schema.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanResponse_Schema();
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? types_1.DataType.fromPartial(object.schema)
            : undefined;
        return message;
    },
};
function createBaseAnalyzePlanResponse_Explain() {
    return { explainString: "" };
}
exports.AnalyzePlanResponse_Explain = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.explainString !== "") {
            writer.uint32(10).string(message.explainString);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_Explain();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { explainString: isSet(object.explainString) ? globalThis.String(object.explainString) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.explainString !== "") {
            obj.explainString = message.explainString;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_Explain.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse_Explain();
        message.explainString = (_a = object.explainString) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAnalyzePlanResponse_TreeString() {
    return { treeString: "" };
}
exports.AnalyzePlanResponse_TreeString = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.treeString !== "") {
            writer.uint32(10).string(message.treeString);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_TreeString();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { treeString: isSet(object.treeString) ? globalThis.String(object.treeString) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.treeString !== "") {
            obj.treeString = message.treeString;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_TreeString.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse_TreeString();
        message.treeString = (_a = object.treeString) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAnalyzePlanResponse_IsLocal() {
    return { isLocal: false };
}
exports.AnalyzePlanResponse_IsLocal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.isLocal === true) {
            writer.uint32(8).bool(message.isLocal);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_IsLocal();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { isLocal: isSet(object.isLocal) ? globalThis.Boolean(object.isLocal) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.isLocal === true) {
            obj.isLocal = message.isLocal;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_IsLocal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse_IsLocal();
        message.isLocal = (_a = object.isLocal) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseAnalyzePlanResponse_IsStreaming() {
    return { isStreaming: false };
}
exports.AnalyzePlanResponse_IsStreaming = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.isStreaming === true) {
            writer.uint32(8).bool(message.isStreaming);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_IsStreaming();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { isStreaming: isSet(object.isStreaming) ? globalThis.Boolean(object.isStreaming) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.isStreaming === true) {
            obj.isStreaming = message.isStreaming;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_IsStreaming.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse_IsStreaming();
        message.isStreaming = (_a = object.isStreaming) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseAnalyzePlanResponse_InputFiles() {
    return { files: [] };
}
exports.AnalyzePlanResponse_InputFiles = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.files; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_InputFiles();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { files: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.files) ? object.files.map(function (e) { return globalThis.String(e); }) : [] };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.files) === null || _a === void 0 ? void 0 : _a.length) {
            obj.files = message.files;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_InputFiles.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse_InputFiles();
        message.files = ((_a = object.files) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseAnalyzePlanResponse_SparkVersion() {
    return { version: "" };
}
exports.AnalyzePlanResponse_SparkVersion = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_SparkVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { version: isSet(object.version) ? globalThis.String(object.version) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.version !== "") {
            obj.version = message.version;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_SparkVersion.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse_SparkVersion();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAnalyzePlanResponse_DDLParse() {
    return { parsed: undefined };
}
exports.AnalyzePlanResponse_DDLParse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.parsed !== undefined) {
            types_1.DataType.encode(message.parsed, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_DDLParse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.parsed = types_1.DataType.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { parsed: isSet(object.parsed) ? types_1.DataType.fromJSON(object.parsed) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.parsed !== undefined) {
            obj.parsed = types_1.DataType.toJSON(message.parsed);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_DDLParse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanResponse_DDLParse();
        message.parsed = (object.parsed !== undefined && object.parsed !== null)
            ? types_1.DataType.fromPartial(object.parsed)
            : undefined;
        return message;
    },
};
function createBaseAnalyzePlanResponse_SameSemantics() {
    return { result: false };
}
exports.AnalyzePlanResponse_SameSemantics = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result === true) {
            writer.uint32(8).bool(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_SameSemantics();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { result: isSet(object.result) ? globalThis.Boolean(object.result) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.result === true) {
            obj.result = message.result;
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_SameSemantics.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse_SameSemantics();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseAnalyzePlanResponse_SemanticHash() {
    return { result: 0 };
}
exports.AnalyzePlanResponse_SemanticHash = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_SemanticHash();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { result: isSet(object.result) ? globalThis.Number(object.result) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.result !== 0) {
            obj.result = Math.round(message.result);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_SemanticHash.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAnalyzePlanResponse_SemanticHash();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseAnalyzePlanResponse_Persist() {
    return {};
}
exports.AnalyzePlanResponse_Persist = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_Persist();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_Persist.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseAnalyzePlanResponse_Persist();
        return message;
    },
};
function createBaseAnalyzePlanResponse_Unpersist() {
    return {};
}
exports.AnalyzePlanResponse_Unpersist = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_Unpersist();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_Unpersist.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseAnalyzePlanResponse_Unpersist();
        return message;
    },
};
function createBaseAnalyzePlanResponse_GetStorageLevel() {
    return { storageLevel: undefined };
}
exports.AnalyzePlanResponse_GetStorageLevel = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.storageLevel !== undefined) {
            common_1.StorageLevel.encode(message.storageLevel, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnalyzePlanResponse_GetStorageLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.storageLevel = common_1.StorageLevel.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { storageLevel: isSet(object.storageLevel) ? common_1.StorageLevel.fromJSON(object.storageLevel) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.storageLevel !== undefined) {
            obj.storageLevel = common_1.StorageLevel.toJSON(message.storageLevel);
        }
        return obj;
    },
    create: function (base) {
        return exports.AnalyzePlanResponse_GetStorageLevel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAnalyzePlanResponse_GetStorageLevel();
        message.storageLevel = (object.storageLevel !== undefined && object.storageLevel !== null)
            ? common_1.StorageLevel.fromPartial(object.storageLevel)
            : undefined;
        return message;
    },
};
function createBaseExecutePlanRequest() {
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
exports.ExecutePlanRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
        }
        if (message.operationId !== undefined) {
            writer.uint32(50).string(message.operationId);
        }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        if (message.clientType !== undefined) {
            writer.uint32(34).string(message.clientType);
        }
        for (var _i = 0, _a = message.requestOptions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ExecutePlanRequest_RequestOption.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _b = 0, _c = message.tags; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
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
                    message.plan = exports.Plan.decode(reader, reader.uint32());
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
                    message.requestOptions.push(exports.ExecutePlanRequest_RequestOption.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : undefined,
            plan: isSet(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined,
            clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
            requestOptions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.requestOptions)
                ? object.requestOptions.map(function (e) { return exports.ExecutePlanRequest_RequestOption.fromJSON(e); })
                : [],
            tags: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map(function (e) { return globalThis.String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
        }
        if (message.operationId !== undefined) {
            obj.operationId = message.operationId;
        }
        if (message.plan !== undefined) {
            obj.plan = exports.Plan.toJSON(message.plan);
        }
        if (message.clientType !== undefined) {
            obj.clientType = message.clientType;
        }
        if ((_a = message.requestOptions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.requestOptions = message.requestOptions.map(function (e) { return exports.ExecutePlanRequest_RequestOption.toJSON(e); });
        }
        if ((_b = message.tags) === null || _b === void 0 ? void 0 : _b.length) {
            obj.tags = message.tags;
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseExecutePlanRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.operationId = (_b = object.operationId) !== null && _b !== void 0 ? _b : undefined;
        message.plan = (object.plan !== undefined && object.plan !== null) ? exports.Plan.fromPartial(object.plan) : undefined;
        message.clientType = (_c = object.clientType) !== null && _c !== void 0 ? _c : undefined;
        message.requestOptions = ((_d = object.requestOptions) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.ExecutePlanRequest_RequestOption.fromPartial(e); })) || [];
        message.tags = ((_e = object.tags) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseExecutePlanRequest_RequestOption() {
    return { reattachOptions: undefined, extension: undefined };
}
exports.ExecutePlanRequest_RequestOption = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.reattachOptions !== undefined) {
            exports.ReattachOptions.encode(message.reattachOptions, writer.uint32(10).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(message.extension, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanRequest_RequestOption();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.reattachOptions = exports.ReattachOptions.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.extension = any_1.Any.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            reattachOptions: isSet(object.reattachOptions) ? exports.ReattachOptions.fromJSON(object.reattachOptions) : undefined,
            extension: isSet(object.extension) ? any_1.Any.fromJSON(object.extension) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.reattachOptions !== undefined) {
            obj.reattachOptions = exports.ReattachOptions.toJSON(message.reattachOptions);
        }
        if (message.extension !== undefined) {
            obj.extension = any_1.Any.toJSON(message.extension);
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanRequest_RequestOption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseExecutePlanRequest_RequestOption();
        message.reattachOptions = (object.reattachOptions !== undefined && object.reattachOptions !== null)
            ? exports.ReattachOptions.fromPartial(object.reattachOptions)
            : undefined;
        message.extension = (object.extension !== undefined && object.extension !== null)
            ? any_1.Any.fromPartial(object.extension)
            : undefined;
        return message;
    },
};
function createBaseExecutePlanResponse() {
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
exports.ExecutePlanResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.ExecutePlanResponse_ArrowBatch.encode(message.arrowBatch, writer.uint32(18).fork()).ldelim();
        }
        if (message.sqlCommandResult !== undefined) {
            exports.ExecutePlanResponse_SqlCommandResult.encode(message.sqlCommandResult, writer.uint32(42).fork()).ldelim();
        }
        if (message.writeStreamOperationStartResult !== undefined) {
            commands_1.WriteStreamOperationStartResult.encode(message.writeStreamOperationStartResult, writer.uint32(66).fork())
                .ldelim();
        }
        if (message.streamingQueryCommandResult !== undefined) {
            commands_1.StreamingQueryCommandResult.encode(message.streamingQueryCommandResult, writer.uint32(74).fork()).ldelim();
        }
        if (message.getResourcesCommandResult !== undefined) {
            commands_1.GetResourcesCommandResult.encode(message.getResourcesCommandResult, writer.uint32(82).fork()).ldelim();
        }
        if (message.streamingQueryManagerCommandResult !== undefined) {
            commands_1.StreamingQueryManagerCommandResult.encode(message.streamingQueryManagerCommandResult, writer.uint32(90).fork())
                .ldelim();
        }
        if (message.resultComplete !== undefined) {
            exports.ExecutePlanResponse_ResultComplete.encode(message.resultComplete, writer.uint32(114).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(message.extension, writer.uint32(7994).fork()).ldelim();
        }
        if (message.metrics !== undefined) {
            exports.ExecutePlanResponse_Metrics.encode(message.metrics, writer.uint32(34).fork()).ldelim();
        }
        for (var _i = 0, _a = message.observedMetrics; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ExecutePlanResponse_ObservedMetrics.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            types_1.DataType.encode(message.schema, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.arrowBatch = exports.ExecutePlanResponse_ArrowBatch.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sqlCommandResult = exports.ExecutePlanResponse_SqlCommandResult.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.writeStreamOperationStartResult = commands_1.WriteStreamOperationStartResult.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.streamingQueryCommandResult = commands_1.StreamingQueryCommandResult.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.getResourcesCommandResult = commands_1.GetResourcesCommandResult.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.streamingQueryManagerCommandResult = commands_1.StreamingQueryManagerCommandResult.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.resultComplete = exports.ExecutePlanResponse_ResultComplete.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.extension = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.metrics = exports.ExecutePlanResponse_Metrics.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.observedMetrics.push(exports.ExecutePlanResponse_ObservedMetrics.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.schema = types_1.DataType.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
            responseId: isSet(object.responseId) ? globalThis.String(object.responseId) : "",
            arrowBatch: isSet(object.arrowBatch) ? exports.ExecutePlanResponse_ArrowBatch.fromJSON(object.arrowBatch) : undefined,
            sqlCommandResult: isSet(object.sqlCommandResult)
                ? exports.ExecutePlanResponse_SqlCommandResult.fromJSON(object.sqlCommandResult)
                : undefined,
            writeStreamOperationStartResult: isSet(object.writeStreamOperationStartResult)
                ? commands_1.WriteStreamOperationStartResult.fromJSON(object.writeStreamOperationStartResult)
                : undefined,
            streamingQueryCommandResult: isSet(object.streamingQueryCommandResult)
                ? commands_1.StreamingQueryCommandResult.fromJSON(object.streamingQueryCommandResult)
                : undefined,
            getResourcesCommandResult: isSet(object.getResourcesCommandResult)
                ? commands_1.GetResourcesCommandResult.fromJSON(object.getResourcesCommandResult)
                : undefined,
            streamingQueryManagerCommandResult: isSet(object.streamingQueryManagerCommandResult)
                ? commands_1.StreamingQueryManagerCommandResult.fromJSON(object.streamingQueryManagerCommandResult)
                : undefined,
            resultComplete: isSet(object.resultComplete)
                ? exports.ExecutePlanResponse_ResultComplete.fromJSON(object.resultComplete)
                : undefined,
            extension: isSet(object.extension) ? any_1.Any.fromJSON(object.extension) : undefined,
            metrics: isSet(object.metrics) ? exports.ExecutePlanResponse_Metrics.fromJSON(object.metrics) : undefined,
            observedMetrics: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.observedMetrics)
                ? object.observedMetrics.map(function (e) { return exports.ExecutePlanResponse_ObservedMetrics.fromJSON(e); })
                : [],
            schema: isSet(object.schema) ? types_1.DataType.fromJSON(object.schema) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
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
            obj.arrowBatch = exports.ExecutePlanResponse_ArrowBatch.toJSON(message.arrowBatch);
        }
        if (message.sqlCommandResult !== undefined) {
            obj.sqlCommandResult = exports.ExecutePlanResponse_SqlCommandResult.toJSON(message.sqlCommandResult);
        }
        if (message.writeStreamOperationStartResult !== undefined) {
            obj.writeStreamOperationStartResult = commands_1.WriteStreamOperationStartResult.toJSON(message.writeStreamOperationStartResult);
        }
        if (message.streamingQueryCommandResult !== undefined) {
            obj.streamingQueryCommandResult = commands_1.StreamingQueryCommandResult.toJSON(message.streamingQueryCommandResult);
        }
        if (message.getResourcesCommandResult !== undefined) {
            obj.getResourcesCommandResult = commands_1.GetResourcesCommandResult.toJSON(message.getResourcesCommandResult);
        }
        if (message.streamingQueryManagerCommandResult !== undefined) {
            obj.streamingQueryManagerCommandResult = commands_1.StreamingQueryManagerCommandResult.toJSON(message.streamingQueryManagerCommandResult);
        }
        if (message.resultComplete !== undefined) {
            obj.resultComplete = exports.ExecutePlanResponse_ResultComplete.toJSON(message.resultComplete);
        }
        if (message.extension !== undefined) {
            obj.extension = any_1.Any.toJSON(message.extension);
        }
        if (message.metrics !== undefined) {
            obj.metrics = exports.ExecutePlanResponse_Metrics.toJSON(message.metrics);
        }
        if ((_a = message.observedMetrics) === null || _a === void 0 ? void 0 : _a.length) {
            obj.observedMetrics = message.observedMetrics.map(function (e) { return exports.ExecutePlanResponse_ObservedMetrics.toJSON(e); });
        }
        if (message.schema !== undefined) {
            obj.schema = types_1.DataType.toJSON(message.schema);
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseExecutePlanResponse();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.operationId = (_b = object.operationId) !== null && _b !== void 0 ? _b : "";
        message.responseId = (_c = object.responseId) !== null && _c !== void 0 ? _c : "";
        message.arrowBatch = (object.arrowBatch !== undefined && object.arrowBatch !== null)
            ? exports.ExecutePlanResponse_ArrowBatch.fromPartial(object.arrowBatch)
            : undefined;
        message.sqlCommandResult = (object.sqlCommandResult !== undefined && object.sqlCommandResult !== null)
            ? exports.ExecutePlanResponse_SqlCommandResult.fromPartial(object.sqlCommandResult)
            : undefined;
        message.writeStreamOperationStartResult =
            (object.writeStreamOperationStartResult !== undefined && object.writeStreamOperationStartResult !== null)
                ? commands_1.WriteStreamOperationStartResult.fromPartial(object.writeStreamOperationStartResult)
                : undefined;
        message.streamingQueryCommandResult =
            (object.streamingQueryCommandResult !== undefined && object.streamingQueryCommandResult !== null)
                ? commands_1.StreamingQueryCommandResult.fromPartial(object.streamingQueryCommandResult)
                : undefined;
        message.getResourcesCommandResult =
            (object.getResourcesCommandResult !== undefined && object.getResourcesCommandResult !== null)
                ? commands_1.GetResourcesCommandResult.fromPartial(object.getResourcesCommandResult)
                : undefined;
        message.streamingQueryManagerCommandResult =
            (object.streamingQueryManagerCommandResult !== undefined && object.streamingQueryManagerCommandResult !== null)
                ? commands_1.StreamingQueryManagerCommandResult.fromPartial(object.streamingQueryManagerCommandResult)
                : undefined;
        message.resultComplete = (object.resultComplete !== undefined && object.resultComplete !== null)
            ? exports.ExecutePlanResponse_ResultComplete.fromPartial(object.resultComplete)
            : undefined;
        message.extension = (object.extension !== undefined && object.extension !== null)
            ? any_1.Any.fromPartial(object.extension)
            : undefined;
        message.metrics = (object.metrics !== undefined && object.metrics !== null)
            ? exports.ExecutePlanResponse_Metrics.fromPartial(object.metrics)
            : undefined;
        message.observedMetrics = ((_d = object.observedMetrics) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.ExecutePlanResponse_ObservedMetrics.fromPartial(e); })) ||
            [];
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? types_1.DataType.fromPartial(object.schema)
            : undefined;
        return message;
    },
};
function createBaseExecutePlanResponse_SqlCommandResult() {
    return { relation: undefined };
}
exports.ExecutePlanResponse_SqlCommandResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.relation !== undefined) {
            relations_1.Relation.encode(message.relation, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse_SqlCommandResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.relation = relations_1.Relation.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { relation: isSet(object.relation) ? relations_1.Relation.fromJSON(object.relation) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.relation !== undefined) {
            obj.relation = relations_1.Relation.toJSON(message.relation);
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanResponse_SqlCommandResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseExecutePlanResponse_SqlCommandResult();
        message.relation = (object.relation !== undefined && object.relation !== null)
            ? relations_1.Relation.fromPartial(object.relation)
            : undefined;
        return message;
    },
};
function createBaseExecutePlanResponse_ArrowBatch() {
    return { rowCount: 0, data: new Uint8Array(0) };
}
exports.ExecutePlanResponse_ArrowBatch = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rowCount !== 0) {
            writer.uint32(8).int64(message.rowCount);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse_ArrowBatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.rowCount = longToNumber(reader.int64());
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
    fromJSON: function (object) {
        return {
            rowCount: isSet(object.rowCount) ? globalThis.Number(object.rowCount) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rowCount !== 0) {
            obj.rowCount = Math.round(message.rowCount);
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanResponse_ArrowBatch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExecutePlanResponse_ArrowBatch();
        message.rowCount = (_a = object.rowCount) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        return message;
    },
};
function createBaseExecutePlanResponse_Metrics() {
    return { metrics: [] };
}
exports.ExecutePlanResponse_Metrics = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.metrics; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ExecutePlanResponse_Metrics_MetricObject.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse_Metrics();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metrics.push(exports.ExecutePlanResponse_Metrics_MetricObject.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            metrics: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.metrics)
                ? object.metrics.map(function (e) { return exports.ExecutePlanResponse_Metrics_MetricObject.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.metrics) === null || _a === void 0 ? void 0 : _a.length) {
            obj.metrics = message.metrics.map(function (e) { return exports.ExecutePlanResponse_Metrics_MetricObject.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanResponse_Metrics.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExecutePlanResponse_Metrics();
        message.metrics = ((_a = object.metrics) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ExecutePlanResponse_Metrics_MetricObject.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseExecutePlanResponse_Metrics_MetricObject() {
    return { name: "", planId: 0, parent: 0, executionMetrics: {} };
}
exports.ExecutePlanResponse_Metrics_MetricObject = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.planId !== 0) {
            writer.uint32(16).int64(message.planId);
        }
        if (message.parent !== 0) {
            writer.uint32(24).int64(message.parent);
        }
        Object.entries(message.executionMetrics).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse_Metrics_MetricObject();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.planId = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.parent = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    var entry4 = exports.ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            planId: isSet(object.planId) ? globalThis.Number(object.planId) : 0,
            parent: isSet(object.parent) ? globalThis.Number(object.parent) : 0,
            executionMetrics: isObject(object.executionMetrics)
                ? Object.entries(object.executionMetrics).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.ExecutePlanResponse_Metrics_MetricValue.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var obj = {};
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
            var entries = Object.entries(message.executionMetrics);
            if (entries.length > 0) {
                obj.executionMetrics = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.executionMetrics[k] = exports.ExecutePlanResponse_Metrics_MetricValue.toJSON(v);
                });
            }
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanResponse_Metrics_MetricObject.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseExecutePlanResponse_Metrics_MetricObject();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.planId = (_b = object.planId) !== null && _b !== void 0 ? _b : 0;
        message.parent = (_c = object.parent) !== null && _c !== void 0 ? _c : 0;
        message.executionMetrics = Object.entries((_d = object.executionMetrics) !== null && _d !== void 0 ? _d : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.ExecutePlanResponse_Metrics_MetricValue.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry() {
    return { key: "", value: undefined };
}
exports.ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ExecutePlanResponse_Metrics_MetricValue.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.value = exports.ExecutePlanResponse_Metrics_MetricValue.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? exports.ExecutePlanResponse_Metrics_MetricValue.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.ExecutePlanResponse_Metrics_MetricValue.toJSON(message.value);
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExecutePlanResponse_Metrics_MetricObject_ExecutionMetricsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.ExecutePlanResponse_Metrics_MetricValue.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseExecutePlanResponse_Metrics_MetricValue() {
    return { name: "", value: 0, metricType: "" };
}
exports.ExecutePlanResponse_Metrics_MetricValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse_Metrics_MetricValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.value = longToNumber(reader.int64());
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
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            value: isSet(object.value) ? globalThis.Number(object.value) : 0,
            metricType: isSet(object.metricType) ? globalThis.String(object.metricType) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.ExecutePlanResponse_Metrics_MetricValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseExecutePlanResponse_Metrics_MetricValue();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        message.metricType = (_c = object.metricType) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseExecutePlanResponse_ObservedMetrics() {
    return { name: "", values: [] };
}
exports.ExecutePlanResponse_ObservedMetrics = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.values; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression_Literal.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse_ObservedMetrics();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.values.push(expressions_1.Expression_Literal.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            values: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.values)
                ? object.values.map(function (e) { return expressions_1.Expression_Literal.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.values) === null || _a === void 0 ? void 0 : _a.length) {
            obj.values = message.values.map(function (e) { return expressions_1.Expression_Literal.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanResponse_ObservedMetrics.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExecutePlanResponse_ObservedMetrics();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map(function (e) { return expressions_1.Expression_Literal.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseExecutePlanResponse_ResultComplete() {
    return {};
}
exports.ExecutePlanResponse_ResultComplete = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecutePlanResponse_ResultComplete();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.ExecutePlanResponse_ResultComplete.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseExecutePlanResponse_ResultComplete();
        return message;
    },
};
function createBaseKeyValue() {
    return { key: "", value: undefined };
}
exports.KeyValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseKeyValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? globalThis.String(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = message.value;
        }
        return obj;
    },
    create: function (base) {
        return exports.KeyValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseKeyValue();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseConfigRequest() {
    return { sessionId: "", userContext: undefined, operation: undefined, clientType: undefined };
}
exports.ConfigRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
        }
        if (message.operation !== undefined) {
            exports.ConfigRequest_Operation.encode(message.operation, writer.uint32(26).fork()).ldelim();
        }
        if (message.clientType !== undefined) {
            writer.uint32(34).string(message.clientType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.operation = exports.ConfigRequest_Operation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            operation: isSet(object.operation) ? exports.ConfigRequest_Operation.fromJSON(object.operation) : undefined,
            clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
        }
        if (message.operation !== undefined) {
            obj.operation = exports.ConfigRequest_Operation.toJSON(message.operation);
        }
        if (message.clientType !== undefined) {
            obj.clientType = message.clientType;
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseConfigRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.operation = (object.operation !== undefined && object.operation !== null)
            ? exports.ConfigRequest_Operation.fromPartial(object.operation)
            : undefined;
        message.clientType = (_b = object.clientType) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseConfigRequest_Operation() {
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
exports.ConfigRequest_Operation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.set !== undefined) {
            exports.ConfigRequest_Set.encode(message.set, writer.uint32(10).fork()).ldelim();
        }
        if (message.get !== undefined) {
            exports.ConfigRequest_Get.encode(message.get, writer.uint32(18).fork()).ldelim();
        }
        if (message.getWithDefault !== undefined) {
            exports.ConfigRequest_GetWithDefault.encode(message.getWithDefault, writer.uint32(26).fork()).ldelim();
        }
        if (message.getOption !== undefined) {
            exports.ConfigRequest_GetOption.encode(message.getOption, writer.uint32(34).fork()).ldelim();
        }
        if (message.getAll !== undefined) {
            exports.ConfigRequest_GetAll.encode(message.getAll, writer.uint32(42).fork()).ldelim();
        }
        if (message.unset !== undefined) {
            exports.ConfigRequest_Unset.encode(message.unset, writer.uint32(50).fork()).ldelim();
        }
        if (message.isModifiable !== undefined) {
            exports.ConfigRequest_IsModifiable.encode(message.isModifiable, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest_Operation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.set = exports.ConfigRequest_Set.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.get = exports.ConfigRequest_Get.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.getWithDefault = exports.ConfigRequest_GetWithDefault.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.getOption = exports.ConfigRequest_GetOption.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.getAll = exports.ConfigRequest_GetAll.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.unset = exports.ConfigRequest_Unset.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.isModifiable = exports.ConfigRequest_IsModifiable.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            set: isSet(object.set) ? exports.ConfigRequest_Set.fromJSON(object.set) : undefined,
            get: isSet(object.get) ? exports.ConfigRequest_Get.fromJSON(object.get) : undefined,
            getWithDefault: isSet(object.getWithDefault)
                ? exports.ConfigRequest_GetWithDefault.fromJSON(object.getWithDefault)
                : undefined,
            getOption: isSet(object.getOption) ? exports.ConfigRequest_GetOption.fromJSON(object.getOption) : undefined,
            getAll: isSet(object.getAll) ? exports.ConfigRequest_GetAll.fromJSON(object.getAll) : undefined,
            unset: isSet(object.unset) ? exports.ConfigRequest_Unset.fromJSON(object.unset) : undefined,
            isModifiable: isSet(object.isModifiable) ? exports.ConfigRequest_IsModifiable.fromJSON(object.isModifiable) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.set !== undefined) {
            obj.set = exports.ConfigRequest_Set.toJSON(message.set);
        }
        if (message.get !== undefined) {
            obj.get = exports.ConfigRequest_Get.toJSON(message.get);
        }
        if (message.getWithDefault !== undefined) {
            obj.getWithDefault = exports.ConfigRequest_GetWithDefault.toJSON(message.getWithDefault);
        }
        if (message.getOption !== undefined) {
            obj.getOption = exports.ConfigRequest_GetOption.toJSON(message.getOption);
        }
        if (message.getAll !== undefined) {
            obj.getAll = exports.ConfigRequest_GetAll.toJSON(message.getAll);
        }
        if (message.unset !== undefined) {
            obj.unset = exports.ConfigRequest_Unset.toJSON(message.unset);
        }
        if (message.isModifiable !== undefined) {
            obj.isModifiable = exports.ConfigRequest_IsModifiable.toJSON(message.isModifiable);
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest_Operation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseConfigRequest_Operation();
        message.set = (object.set !== undefined && object.set !== null)
            ? exports.ConfigRequest_Set.fromPartial(object.set)
            : undefined;
        message.get = (object.get !== undefined && object.get !== null)
            ? exports.ConfigRequest_Get.fromPartial(object.get)
            : undefined;
        message.getWithDefault = (object.getWithDefault !== undefined && object.getWithDefault !== null)
            ? exports.ConfigRequest_GetWithDefault.fromPartial(object.getWithDefault)
            : undefined;
        message.getOption = (object.getOption !== undefined && object.getOption !== null)
            ? exports.ConfigRequest_GetOption.fromPartial(object.getOption)
            : undefined;
        message.getAll = (object.getAll !== undefined && object.getAll !== null)
            ? exports.ConfigRequest_GetAll.fromPartial(object.getAll)
            : undefined;
        message.unset = (object.unset !== undefined && object.unset !== null)
            ? exports.ConfigRequest_Unset.fromPartial(object.unset)
            : undefined;
        message.isModifiable = (object.isModifiable !== undefined && object.isModifiable !== null)
            ? exports.ConfigRequest_IsModifiable.fromPartial(object.isModifiable)
            : undefined;
        return message;
    },
};
function createBaseConfigRequest_Set() {
    return { pairs: [] };
}
exports.ConfigRequest_Set = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.pairs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.KeyValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest_Set();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pairs.push(exports.KeyValue.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { pairs: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map(function (e) { return exports.KeyValue.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.pairs) === null || _a === void 0 ? void 0 : _a.length) {
            obj.pairs = message.pairs.map(function (e) { return exports.KeyValue.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest_Set.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfigRequest_Set();
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.KeyValue.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseConfigRequest_Get() {
    return { keys: [] };
}
exports.ConfigRequest_Get = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest_Get();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { keys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) { return globalThis.String(e); }) : [] };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.keys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.keys = message.keys;
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest_Get.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfigRequest_Get();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseConfigRequest_GetWithDefault() {
    return { pairs: [] };
}
exports.ConfigRequest_GetWithDefault = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.pairs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.KeyValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest_GetWithDefault();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pairs.push(exports.KeyValue.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { pairs: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map(function (e) { return exports.KeyValue.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.pairs) === null || _a === void 0 ? void 0 : _a.length) {
            obj.pairs = message.pairs.map(function (e) { return exports.KeyValue.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest_GetWithDefault.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfigRequest_GetWithDefault();
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.KeyValue.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseConfigRequest_GetOption() {
    return { keys: [] };
}
exports.ConfigRequest_GetOption = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest_GetOption();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { keys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) { return globalThis.String(e); }) : [] };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.keys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.keys = message.keys;
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest_GetOption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfigRequest_GetOption();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseConfigRequest_GetAll() {
    return { prefix: undefined };
}
exports.ConfigRequest_GetAll = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.prefix !== undefined) {
            writer.uint32(10).string(message.prefix);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest_GetAll();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.prefix !== undefined) {
            obj.prefix = message.prefix;
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest_GetAll.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfigRequest_GetAll();
        message.prefix = (_a = object.prefix) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseConfigRequest_Unset() {
    return { keys: [] };
}
exports.ConfigRequest_Unset = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest_Unset();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { keys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) { return globalThis.String(e); }) : [] };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.keys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.keys = message.keys;
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest_Unset.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfigRequest_Unset();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseConfigRequest_IsModifiable() {
    return { keys: [] };
}
exports.ConfigRequest_IsModifiable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest_IsModifiable();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { keys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) { return globalThis.String(e); }) : [] };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.keys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.keys = message.keys;
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigRequest_IsModifiable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfigRequest_IsModifiable();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseConfigResponse() {
    return { sessionId: "", pairs: [], warnings: [] };
}
exports.ConfigResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        for (var _i = 0, _a = message.pairs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.KeyValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.warnings; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.pairs.push(exports.KeyValue.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            pairs: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map(function (e) { return exports.KeyValue.fromJSON(e); }) : [],
            warnings: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.warnings) ? object.warnings.map(function (e) { return globalThis.String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if ((_a = message.pairs) === null || _a === void 0 ? void 0 : _a.length) {
            obj.pairs = message.pairs.map(function (e) { return exports.KeyValue.toJSON(e); });
        }
        if ((_b = message.warnings) === null || _b === void 0 ? void 0 : _b.length) {
            obj.warnings = message.warnings;
        }
        return obj;
    },
    create: function (base) {
        return exports.ConfigResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseConfigResponse();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.pairs = ((_b = object.pairs) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.KeyValue.fromPartial(e); })) || [];
        message.warnings = ((_c = object.warnings) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseAddArtifactsRequest() {
    return {
        sessionId: "",
        userContext: undefined,
        clientType: undefined,
        batch: undefined,
        beginChunk: undefined,
        chunk: undefined,
    };
}
exports.AddArtifactsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
        }
        if (message.clientType !== undefined) {
            writer.uint32(50).string(message.clientType);
        }
        if (message.batch !== undefined) {
            exports.AddArtifactsRequest_Batch.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.beginChunk !== undefined) {
            exports.AddArtifactsRequest_BeginChunkedArtifact.encode(message.beginChunk, writer.uint32(34).fork()).ldelim();
        }
        if (message.chunk !== undefined) {
            exports.AddArtifactsRequest_ArtifactChunk.encode(message.chunk, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddArtifactsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
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
                    message.batch = exports.AddArtifactsRequest_Batch.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.beginChunk = exports.AddArtifactsRequest_BeginChunkedArtifact.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.chunk = exports.AddArtifactsRequest_ArtifactChunk.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
            batch: isSet(object.batch) ? exports.AddArtifactsRequest_Batch.fromJSON(object.batch) : undefined,
            beginChunk: isSet(object.beginChunk)
                ? exports.AddArtifactsRequest_BeginChunkedArtifact.fromJSON(object.beginChunk)
                : undefined,
            chunk: isSet(object.chunk) ? exports.AddArtifactsRequest_ArtifactChunk.fromJSON(object.chunk) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
        }
        if (message.clientType !== undefined) {
            obj.clientType = message.clientType;
        }
        if (message.batch !== undefined) {
            obj.batch = exports.AddArtifactsRequest_Batch.toJSON(message.batch);
        }
        if (message.beginChunk !== undefined) {
            obj.beginChunk = exports.AddArtifactsRequest_BeginChunkedArtifact.toJSON(message.beginChunk);
        }
        if (message.chunk !== undefined) {
            obj.chunk = exports.AddArtifactsRequest_ArtifactChunk.toJSON(message.chunk);
        }
        return obj;
    },
    create: function (base) {
        return exports.AddArtifactsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAddArtifactsRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.clientType = (_b = object.clientType) !== null && _b !== void 0 ? _b : undefined;
        message.batch = (object.batch !== undefined && object.batch !== null)
            ? exports.AddArtifactsRequest_Batch.fromPartial(object.batch)
            : undefined;
        message.beginChunk = (object.beginChunk !== undefined && object.beginChunk !== null)
            ? exports.AddArtifactsRequest_BeginChunkedArtifact.fromPartial(object.beginChunk)
            : undefined;
        message.chunk = (object.chunk !== undefined && object.chunk !== null)
            ? exports.AddArtifactsRequest_ArtifactChunk.fromPartial(object.chunk)
            : undefined;
        return message;
    },
};
function createBaseAddArtifactsRequest_ArtifactChunk() {
    return { data: new Uint8Array(0), crc: 0 };
}
exports.AddArtifactsRequest_ArtifactChunk = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.crc !== 0) {
            writer.uint32(16).int64(message.crc);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddArtifactsRequest_ArtifactChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.crc = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
            crc: isSet(object.crc) ? globalThis.Number(object.crc) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        if (message.crc !== 0) {
            obj.crc = Math.round(message.crc);
        }
        return obj;
    },
    create: function (base) {
        return exports.AddArtifactsRequest_ArtifactChunk.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAddArtifactsRequest_ArtifactChunk();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.crc = (_b = object.crc) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseAddArtifactsRequest_SingleChunkArtifact() {
    return { name: "", data: undefined };
}
exports.AddArtifactsRequest_SingleChunkArtifact = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.data !== undefined) {
            exports.AddArtifactsRequest_ArtifactChunk.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddArtifactsRequest_SingleChunkArtifact();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.data = exports.AddArtifactsRequest_ArtifactChunk.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            data: isSet(object.data) ? exports.AddArtifactsRequest_ArtifactChunk.fromJSON(object.data) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.data !== undefined) {
            obj.data = exports.AddArtifactsRequest_ArtifactChunk.toJSON(message.data);
        }
        return obj;
    },
    create: function (base) {
        return exports.AddArtifactsRequest_SingleChunkArtifact.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddArtifactsRequest_SingleChunkArtifact();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.data = (object.data !== undefined && object.data !== null)
            ? exports.AddArtifactsRequest_ArtifactChunk.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseAddArtifactsRequest_Batch() {
    return { artifacts: [] };
}
exports.AddArtifactsRequest_Batch = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.artifacts; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AddArtifactsRequest_SingleChunkArtifact.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddArtifactsRequest_Batch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.artifacts.push(exports.AddArtifactsRequest_SingleChunkArtifact.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            artifacts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.artifacts)
                ? object.artifacts.map(function (e) { return exports.AddArtifactsRequest_SingleChunkArtifact.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.artifacts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.artifacts = message.artifacts.map(function (e) { return exports.AddArtifactsRequest_SingleChunkArtifact.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.AddArtifactsRequest_Batch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddArtifactsRequest_Batch();
        message.artifacts = ((_a = object.artifacts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AddArtifactsRequest_SingleChunkArtifact.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAddArtifactsRequest_BeginChunkedArtifact() {
    return { name: "", totalBytes: 0, numChunks: 0, initialChunk: undefined };
}
exports.AddArtifactsRequest_BeginChunkedArtifact = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.AddArtifactsRequest_ArtifactChunk.encode(message.initialChunk, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddArtifactsRequest_BeginChunkedArtifact();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.totalBytes = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.numChunks = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.initialChunk = exports.AddArtifactsRequest_ArtifactChunk.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            totalBytes: isSet(object.totalBytes) ? globalThis.Number(object.totalBytes) : 0,
            numChunks: isSet(object.numChunks) ? globalThis.Number(object.numChunks) : 0,
            initialChunk: isSet(object.initialChunk)
                ? exports.AddArtifactsRequest_ArtifactChunk.fromJSON(object.initialChunk)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
            obj.initialChunk = exports.AddArtifactsRequest_ArtifactChunk.toJSON(message.initialChunk);
        }
        return obj;
    },
    create: function (base) {
        return exports.AddArtifactsRequest_BeginChunkedArtifact.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAddArtifactsRequest_BeginChunkedArtifact();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.totalBytes = (_b = object.totalBytes) !== null && _b !== void 0 ? _b : 0;
        message.numChunks = (_c = object.numChunks) !== null && _c !== void 0 ? _c : 0;
        message.initialChunk = (object.initialChunk !== undefined && object.initialChunk !== null)
            ? exports.AddArtifactsRequest_ArtifactChunk.fromPartial(object.initialChunk)
            : undefined;
        return message;
    },
};
function createBaseAddArtifactsResponse() {
    return { artifacts: [] };
}
exports.AddArtifactsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.artifacts; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AddArtifactsResponse_ArtifactSummary.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddArtifactsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.artifacts.push(exports.AddArtifactsResponse_ArtifactSummary.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            artifacts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.artifacts)
                ? object.artifacts.map(function (e) { return exports.AddArtifactsResponse_ArtifactSummary.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.artifacts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.artifacts = message.artifacts.map(function (e) { return exports.AddArtifactsResponse_ArtifactSummary.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.AddArtifactsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddArtifactsResponse();
        message.artifacts = ((_a = object.artifacts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AddArtifactsResponse_ArtifactSummary.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAddArtifactsResponse_ArtifactSummary() {
    return { name: "", isCrcSuccessful: false };
}
exports.AddArtifactsResponse_ArtifactSummary = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.isCrcSuccessful === true) {
            writer.uint32(16).bool(message.isCrcSuccessful);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddArtifactsResponse_ArtifactSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            isCrcSuccessful: isSet(object.isCrcSuccessful) ? globalThis.Boolean(object.isCrcSuccessful) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.isCrcSuccessful === true) {
            obj.isCrcSuccessful = message.isCrcSuccessful;
        }
        return obj;
    },
    create: function (base) {
        return exports.AddArtifactsResponse_ArtifactSummary.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAddArtifactsResponse_ArtifactSummary();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.isCrcSuccessful = (_b = object.isCrcSuccessful) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseArtifactStatusesRequest() {
    return { sessionId: "", userContext: undefined, clientType: undefined, names: [] };
}
exports.ArtifactStatusesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
        }
        if (message.clientType !== undefined) {
            writer.uint32(26).string(message.clientType);
        }
        for (var _i = 0, _a = message.names; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseArtifactStatusesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
            names: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.names) ? object.names.map(function (e) { return globalThis.String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
        }
        if (message.clientType !== undefined) {
            obj.clientType = message.clientType;
        }
        if ((_a = message.names) === null || _a === void 0 ? void 0 : _a.length) {
            obj.names = message.names;
        }
        return obj;
    },
    create: function (base) {
        return exports.ArtifactStatusesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseArtifactStatusesRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.clientType = (_b = object.clientType) !== null && _b !== void 0 ? _b : undefined;
        message.names = ((_c = object.names) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseArtifactStatusesResponse() {
    return { statuses: {} };
}
exports.ArtifactStatusesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        Object.entries(message.statuses).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.ArtifactStatusesResponse_StatusesEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseArtifactStatusesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    var entry1 = exports.ArtifactStatusesResponse_StatusesEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            statuses: isObject(object.statuses)
                ? Object.entries(object.statuses).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.ArtifactStatusesResponse_ArtifactStatus.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.statuses) {
            var entries = Object.entries(message.statuses);
            if (entries.length > 0) {
                obj.statuses = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.statuses[k] = exports.ArtifactStatusesResponse_ArtifactStatus.toJSON(v);
                });
            }
        }
        return obj;
    },
    create: function (base) {
        return exports.ArtifactStatusesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseArtifactStatusesResponse();
        message.statuses = Object.entries((_a = object.statuses) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.ArtifactStatusesResponse_ArtifactStatus.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseArtifactStatusesResponse_ArtifactStatus() {
    return { exists: false };
}
exports.ArtifactStatusesResponse_ArtifactStatus = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.exists === true) {
            writer.uint32(8).bool(message.exists);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseArtifactStatusesResponse_ArtifactStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { exists: isSet(object.exists) ? globalThis.Boolean(object.exists) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.exists === true) {
            obj.exists = message.exists;
        }
        return obj;
    },
    create: function (base) {
        return exports.ArtifactStatusesResponse_ArtifactStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseArtifactStatusesResponse_ArtifactStatus();
        message.exists = (_a = object.exists) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseArtifactStatusesResponse_StatusesEntry() {
    return { key: "", value: undefined };
}
exports.ArtifactStatusesResponse_StatusesEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ArtifactStatusesResponse_ArtifactStatus.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseArtifactStatusesResponse_StatusesEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.value = exports.ArtifactStatusesResponse_ArtifactStatus.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? exports.ArtifactStatusesResponse_ArtifactStatus.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.ArtifactStatusesResponse_ArtifactStatus.toJSON(message.value);
        }
        return obj;
    },
    create: function (base) {
        return exports.ArtifactStatusesResponse_StatusesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseArtifactStatusesResponse_StatusesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.ArtifactStatusesResponse_ArtifactStatus.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseInterruptRequest() {
    return {
        sessionId: "",
        userContext: undefined,
        clientType: undefined,
        interruptType: 0,
        operationTag: undefined,
        operationId: undefined,
    };
}
exports.InterruptRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterruptRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
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
                    message.interruptType = reader.int32();
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
            interruptType: isSet(object.interruptType) ? interruptRequest_InterruptTypeFromJSON(object.interruptType) : 0,
            operationTag: isSet(object.operationTag) ? globalThis.String(object.operationTag) : undefined,
            operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
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
    create: function (base) {
        return exports.InterruptRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseInterruptRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.clientType = (_b = object.clientType) !== null && _b !== void 0 ? _b : undefined;
        message.interruptType = (_c = object.interruptType) !== null && _c !== void 0 ? _c : 0;
        message.operationTag = (_d = object.operationTag) !== null && _d !== void 0 ? _d : undefined;
        message.operationId = (_e = object.operationId) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseInterruptResponse() {
    return { sessionId: "", interruptedIds: [] };
}
exports.InterruptResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        for (var _i = 0, _a = message.interruptedIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterruptResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            interruptedIds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.interruptedIds)
                ? object.interruptedIds.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if ((_a = message.interruptedIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.interruptedIds = message.interruptedIds;
        }
        return obj;
    },
    create: function (base) {
        return exports.InterruptResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseInterruptResponse();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.interruptedIds = ((_b = object.interruptedIds) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseReattachOptions() {
    return { reattachable: false };
}
exports.ReattachOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.reattachable === true) {
            writer.uint32(8).bool(message.reattachable);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReattachOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { reattachable: isSet(object.reattachable) ? globalThis.Boolean(object.reattachable) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.reattachable === true) {
            obj.reattachable = message.reattachable;
        }
        return obj;
    },
    create: function (base) {
        return exports.ReattachOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseReattachOptions();
        message.reattachable = (_a = object.reattachable) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseReattachExecuteRequest() {
    return { sessionId: "", userContext: undefined, operationId: "", clientType: undefined, lastResponseId: undefined };
}
exports.ReattachExecuteRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReattachExecuteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
            clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
            lastResponseId: isSet(object.lastResponseId) ? globalThis.String(object.lastResponseId) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
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
    create: function (base) {
        return exports.ReattachExecuteRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseReattachExecuteRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.operationId = (_b = object.operationId) !== null && _b !== void 0 ? _b : "";
        message.clientType = (_c = object.clientType) !== null && _c !== void 0 ? _c : undefined;
        message.lastResponseId = (_d = object.lastResponseId) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseReleaseExecuteRequest() {
    return {
        sessionId: "",
        userContext: undefined,
        operationId: "",
        clientType: undefined,
        releaseAll: undefined,
        releaseUntil: undefined,
    };
}
exports.ReleaseExecuteRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
        }
        if (message.operationId !== "") {
            writer.uint32(26).string(message.operationId);
        }
        if (message.clientType !== undefined) {
            writer.uint32(34).string(message.clientType);
        }
        if (message.releaseAll !== undefined) {
            exports.ReleaseExecuteRequest_ReleaseAll.encode(message.releaseAll, writer.uint32(42).fork()).ldelim();
        }
        if (message.releaseUntil !== undefined) {
            exports.ReleaseExecuteRequest_ReleaseUntil.encode(message.releaseUntil, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReleaseExecuteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
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
                    message.releaseAll = exports.ReleaseExecuteRequest_ReleaseAll.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.releaseUntil = exports.ReleaseExecuteRequest_ReleaseUntil.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
            clientType: isSet(object.clientType) ? globalThis.String(object.clientType) : undefined,
            releaseAll: isSet(object.releaseAll) ? exports.ReleaseExecuteRequest_ReleaseAll.fromJSON(object.releaseAll) : undefined,
            releaseUntil: isSet(object.releaseUntil)
                ? exports.ReleaseExecuteRequest_ReleaseUntil.fromJSON(object.releaseUntil)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
        }
        if (message.operationId !== "") {
            obj.operationId = message.operationId;
        }
        if (message.clientType !== undefined) {
            obj.clientType = message.clientType;
        }
        if (message.releaseAll !== undefined) {
            obj.releaseAll = exports.ReleaseExecuteRequest_ReleaseAll.toJSON(message.releaseAll);
        }
        if (message.releaseUntil !== undefined) {
            obj.releaseUntil = exports.ReleaseExecuteRequest_ReleaseUntil.toJSON(message.releaseUntil);
        }
        return obj;
    },
    create: function (base) {
        return exports.ReleaseExecuteRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseReleaseExecuteRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.operationId = (_b = object.operationId) !== null && _b !== void 0 ? _b : "";
        message.clientType = (_c = object.clientType) !== null && _c !== void 0 ? _c : undefined;
        message.releaseAll = (object.releaseAll !== undefined && object.releaseAll !== null)
            ? exports.ReleaseExecuteRequest_ReleaseAll.fromPartial(object.releaseAll)
            : undefined;
        message.releaseUntil = (object.releaseUntil !== undefined && object.releaseUntil !== null)
            ? exports.ReleaseExecuteRequest_ReleaseUntil.fromPartial(object.releaseUntil)
            : undefined;
        return message;
    },
};
function createBaseReleaseExecuteRequest_ReleaseAll() {
    return {};
}
exports.ReleaseExecuteRequest_ReleaseAll = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReleaseExecuteRequest_ReleaseAll();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.ReleaseExecuteRequest_ReleaseAll.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseReleaseExecuteRequest_ReleaseAll();
        return message;
    },
};
function createBaseReleaseExecuteRequest_ReleaseUntil() {
    return { responseId: "" };
}
exports.ReleaseExecuteRequest_ReleaseUntil = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.responseId !== "") {
            writer.uint32(10).string(message.responseId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReleaseExecuteRequest_ReleaseUntil();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { responseId: isSet(object.responseId) ? globalThis.String(object.responseId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.responseId !== "") {
            obj.responseId = message.responseId;
        }
        return obj;
    },
    create: function (base) {
        return exports.ReleaseExecuteRequest_ReleaseUntil.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseReleaseExecuteRequest_ReleaseUntil();
        message.responseId = (_a = object.responseId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseReleaseExecuteResponse() {
    return { sessionId: "", operationId: undefined };
}
exports.ReleaseExecuteResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.operationId !== undefined) {
            writer.uint32(18).string(message.operationId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReleaseExecuteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.operationId !== undefined) {
            obj.operationId = message.operationId;
        }
        return obj;
    },
    create: function (base) {
        return exports.ReleaseExecuteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseReleaseExecuteResponse();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.operationId = (_b = object.operationId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseFetchErrorDetailsRequest() {
    return { sessionId: "", userContext: undefined, errorId: "" };
}
exports.FetchErrorDetailsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(18).fork()).ldelim();
        }
        if (message.errorId !== "") {
            writer.uint32(26).string(message.errorId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFetchErrorDetailsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            errorId: isSet(object.errorId) ? globalThis.String(object.errorId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
        }
        if (message.errorId !== "") {
            obj.errorId = message.errorId;
        }
        return obj;
    },
    create: function (base) {
        return exports.FetchErrorDetailsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFetchErrorDetailsRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.errorId = (_b = object.errorId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFetchErrorDetailsResponse() {
    return { rootErrorIdx: undefined, errors: [] };
}
exports.FetchErrorDetailsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rootErrorIdx !== undefined) {
            writer.uint32(8).int32(message.rootErrorIdx);
        }
        for (var _i = 0, _a = message.errors; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FetchErrorDetailsResponse_Error.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFetchErrorDetailsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.errors.push(exports.FetchErrorDetailsResponse_Error.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            rootErrorIdx: isSet(object.rootErrorIdx) ? globalThis.Number(object.rootErrorIdx) : undefined,
            errors: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.errors)
                ? object.errors.map(function (e) { return exports.FetchErrorDetailsResponse_Error.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.rootErrorIdx !== undefined) {
            obj.rootErrorIdx = Math.round(message.rootErrorIdx);
        }
        if ((_a = message.errors) === null || _a === void 0 ? void 0 : _a.length) {
            obj.errors = message.errors.map(function (e) { return exports.FetchErrorDetailsResponse_Error.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.FetchErrorDetailsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFetchErrorDetailsResponse();
        message.rootErrorIdx = (_a = object.rootErrorIdx) !== null && _a !== void 0 ? _a : undefined;
        message.errors = ((_b = object.errors) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.FetchErrorDetailsResponse_Error.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseFetchErrorDetailsResponse_StackTraceElement() {
    return { declaringClass: "", methodName: "", fileName: "", lineNumber: 0 };
}
exports.FetchErrorDetailsResponse_StackTraceElement = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFetchErrorDetailsResponse_StackTraceElement();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            declaringClass: isSet(object.declaringClass) ? globalThis.String(object.declaringClass) : "",
            methodName: isSet(object.methodName) ? globalThis.String(object.methodName) : "",
            fileName: isSet(object.fileName) ? globalThis.String(object.fileName) : "",
            lineNumber: isSet(object.lineNumber) ? globalThis.Number(object.lineNumber) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.FetchErrorDetailsResponse_StackTraceElement.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseFetchErrorDetailsResponse_StackTraceElement();
        message.declaringClass = (_a = object.declaringClass) !== null && _a !== void 0 ? _a : "";
        message.methodName = (_b = object.methodName) !== null && _b !== void 0 ? _b : "";
        message.fileName = (_c = object.fileName) !== null && _c !== void 0 ? _c : "";
        message.lineNumber = (_d = object.lineNumber) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseFetchErrorDetailsResponse_Error() {
    return { errorTypeHierarchy: [], message: "", stackTrace: [], causeIdx: undefined };
}
exports.FetchErrorDetailsResponse_Error = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.errorTypeHierarchy; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        for (var _b = 0, _c = message.stackTrace; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.FetchErrorDetailsResponse_StackTraceElement.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.causeIdx !== undefined) {
            writer.uint32(32).int32(message.causeIdx);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFetchErrorDetailsResponse_Error();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.stackTrace.push(exports.FetchErrorDetailsResponse_StackTraceElement.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            errorTypeHierarchy: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.errorTypeHierarchy)
                ? object.errorTypeHierarchy.map(function (e) { return globalThis.String(e); })
                : [],
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            stackTrace: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.stackTrace)
                ? object.stackTrace.map(function (e) { return exports.FetchErrorDetailsResponse_StackTraceElement.fromJSON(e); })
                : [],
            causeIdx: isSet(object.causeIdx) ? globalThis.Number(object.causeIdx) : undefined,
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if ((_a = message.errorTypeHierarchy) === null || _a === void 0 ? void 0 : _a.length) {
            obj.errorTypeHierarchy = message.errorTypeHierarchy;
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if ((_b = message.stackTrace) === null || _b === void 0 ? void 0 : _b.length) {
            obj.stackTrace = message.stackTrace.map(function (e) { return exports.FetchErrorDetailsResponse_StackTraceElement.toJSON(e); });
        }
        if (message.causeIdx !== undefined) {
            obj.causeIdx = Math.round(message.causeIdx);
        }
        return obj;
    },
    create: function (base) {
        return exports.FetchErrorDetailsResponse_Error.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseFetchErrorDetailsResponse_Error();
        message.errorTypeHierarchy = ((_a = object.errorTypeHierarchy) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.stackTrace = ((_c = object.stackTrace) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.FetchErrorDetailsResponse_StackTraceElement.fromPartial(e); })) ||
            [];
        message.causeIdx = (_d = object.causeIdx) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
exports.SparkConnectServiceServiceName = "spark.connect.SparkConnectService";
var SparkConnectServiceClientImpl = /** @class */ (function () {
    function SparkConnectServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.SparkConnectServiceServiceName;
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
    SparkConnectServiceClientImpl.prototype.ExecutePlan = function (request) {
        var data = exports.ExecutePlanRequest.encode(request).finish();
        var result = this.rpc.serverStreamingRequest(this.service, "ExecutePlan", data);
        return result.pipe((0, operators_1.map)(function (data) { return exports.ExecutePlanResponse.decode(_m0.Reader.create(data)); }));
    };
    SparkConnectServiceClientImpl.prototype.AnalyzePlan = function (request) {
        var data = exports.AnalyzePlanRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "AnalyzePlan", data);
        return promise.then(function (data) { return exports.AnalyzePlanResponse.decode(_m0.Reader.create(data)); });
    };
    SparkConnectServiceClientImpl.prototype.Config = function (request) {
        var data = exports.ConfigRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Config", data);
        return promise.then(function (data) { return exports.ConfigResponse.decode(_m0.Reader.create(data)); });
    };
    SparkConnectServiceClientImpl.prototype.AddArtifacts = function (request) {
        var data = request.pipe((0, operators_1.map)(function (request) { return exports.AddArtifactsRequest.encode(request).finish(); }));
        var promise = this.rpc.clientStreamingRequest(this.service, "AddArtifacts", data);
        return promise.then(function (data) { return exports.AddArtifactsResponse.decode(_m0.Reader.create(data)); });
    };
    SparkConnectServiceClientImpl.prototype.ArtifactStatus = function (request) {
        var data = exports.ArtifactStatusesRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ArtifactStatus", data);
        return promise.then(function (data) { return exports.ArtifactStatusesResponse.decode(_m0.Reader.create(data)); });
    };
    SparkConnectServiceClientImpl.prototype.Interrupt = function (request) {
        var data = exports.InterruptRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Interrupt", data);
        return promise.then(function (data) { return exports.InterruptResponse.decode(_m0.Reader.create(data)); });
    };
    SparkConnectServiceClientImpl.prototype.ReattachExecute = function (request) {
        var data = exports.ReattachExecuteRequest.encode(request).finish();
        var result = this.rpc.serverStreamingRequest(this.service, "ReattachExecute", data);
        return result.pipe((0, operators_1.map)(function (data) { return exports.ExecutePlanResponse.decode(_m0.Reader.create(data)); }));
    };
    SparkConnectServiceClientImpl.prototype.ReleaseExecute = function (request) {
        var data = exports.ReleaseExecuteRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ReleaseExecute", data);
        return promise.then(function (data) { return exports.ReleaseExecuteResponse.decode(_m0.Reader.create(data)); });
    };
    SparkConnectServiceClientImpl.prototype.FetchErrorDetails = function (request) {
        var data = exports.FetchErrorDetailsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "FetchErrorDetails", data);
        return promise.then(function (data) { return exports.FetchErrorDetailsResponse.decode(_m0.Reader.create(data)); });
    };
    return SparkConnectServiceClientImpl;
}());
exports.SparkConnectServiceClientImpl = SparkConnectServiceClientImpl;
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = globalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin_1.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
