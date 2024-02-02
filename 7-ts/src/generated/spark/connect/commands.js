"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResourcesCommandResult_ResourcesEntry = exports.GetResourcesCommandResult = exports.GetResourcesCommand = exports.StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult = exports.StreamingQueryManagerCommandResult_StreamingQueryListenerInstance = exports.StreamingQueryManagerCommandResult_AwaitAnyTerminationResult = exports.StreamingQueryManagerCommandResult_StreamingQueryInstance = exports.StreamingQueryManagerCommandResult_ActiveResult = exports.StreamingQueryManagerCommandResult = exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand = exports.StreamingQueryManagerCommand_AwaitAnyTerminationCommand = exports.StreamingQueryManagerCommand = exports.StreamingQueryCommandResult_AwaitTerminationResult = exports.StreamingQueryCommandResult_ExceptionResult = exports.StreamingQueryCommandResult_ExplainResult = exports.StreamingQueryCommandResult_RecentProgressResult = exports.StreamingQueryCommandResult_StatusResult = exports.StreamingQueryCommandResult = exports.StreamingQueryCommand_AwaitTerminationCommand = exports.StreamingQueryCommand_ExplainCommand = exports.StreamingQueryCommand = exports.StreamingQueryInstanceId = exports.WriteStreamOperationStartResult = exports.StreamingForeachFunction = exports.WriteStreamOperationStart_OptionsEntry = exports.WriteStreamOperationStart = exports.WriteOperationV2_TablePropertiesEntry = exports.WriteOperationV2_OptionsEntry = exports.WriteOperationV2 = exports.WriteOperation_BucketBy = exports.WriteOperation_SaveTable = exports.WriteOperation_OptionsEntry = exports.WriteOperation = exports.CreateDataFrameViewCommand = exports.SqlCommand_NamedArgumentsEntry = exports.SqlCommand_ArgsEntry = exports.SqlCommand = exports.Command = exports.writeOperationV2_ModeToJSON = exports.writeOperationV2_ModeFromJSON = exports.WriteOperationV2_Mode = exports.writeOperation_SaveTable_TableSaveMethodToJSON = exports.writeOperation_SaveTable_TableSaveMethodFromJSON = exports.WriteOperation_SaveTable_TableSaveMethod = exports.writeOperation_SaveModeToJSON = exports.writeOperation_SaveModeFromJSON = exports.WriteOperation_SaveMode = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
var any_1 = require("../../google/protobuf/any");
var common_1 = require("./common");
var expressions_1 = require("./expressions");
var relations_1 = require("./relations");
var Long = require("long");
exports.protobufPackage = "spark.connect";
var WriteOperation_SaveMode;
(function (WriteOperation_SaveMode) {
    WriteOperation_SaveMode[WriteOperation_SaveMode["SAVE_MODE_UNSPECIFIED"] = 0] = "SAVE_MODE_UNSPECIFIED";
    WriteOperation_SaveMode[WriteOperation_SaveMode["SAVE_MODE_APPEND"] = 1] = "SAVE_MODE_APPEND";
    WriteOperation_SaveMode[WriteOperation_SaveMode["SAVE_MODE_OVERWRITE"] = 2] = "SAVE_MODE_OVERWRITE";
    WriteOperation_SaveMode[WriteOperation_SaveMode["SAVE_MODE_ERROR_IF_EXISTS"] = 3] = "SAVE_MODE_ERROR_IF_EXISTS";
    WriteOperation_SaveMode[WriteOperation_SaveMode["SAVE_MODE_IGNORE"] = 4] = "SAVE_MODE_IGNORE";
    WriteOperation_SaveMode[WriteOperation_SaveMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(WriteOperation_SaveMode = exports.WriteOperation_SaveMode || (exports.WriteOperation_SaveMode = {}));
function writeOperation_SaveModeFromJSON(object) {
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
exports.writeOperation_SaveModeFromJSON = writeOperation_SaveModeFromJSON;
function writeOperation_SaveModeToJSON(object) {
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
exports.writeOperation_SaveModeToJSON = writeOperation_SaveModeToJSON;
var WriteOperation_SaveTable_TableSaveMethod;
(function (WriteOperation_SaveTable_TableSaveMethod) {
    WriteOperation_SaveTable_TableSaveMethod[WriteOperation_SaveTable_TableSaveMethod["TABLE_SAVE_METHOD_UNSPECIFIED"] = 0] = "TABLE_SAVE_METHOD_UNSPECIFIED";
    WriteOperation_SaveTable_TableSaveMethod[WriteOperation_SaveTable_TableSaveMethod["TABLE_SAVE_METHOD_SAVE_AS_TABLE"] = 1] = "TABLE_SAVE_METHOD_SAVE_AS_TABLE";
    WriteOperation_SaveTable_TableSaveMethod[WriteOperation_SaveTable_TableSaveMethod["TABLE_SAVE_METHOD_INSERT_INTO"] = 2] = "TABLE_SAVE_METHOD_INSERT_INTO";
    WriteOperation_SaveTable_TableSaveMethod[WriteOperation_SaveTable_TableSaveMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(WriteOperation_SaveTable_TableSaveMethod = exports.WriteOperation_SaveTable_TableSaveMethod || (exports.WriteOperation_SaveTable_TableSaveMethod = {}));
function writeOperation_SaveTable_TableSaveMethodFromJSON(object) {
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
exports.writeOperation_SaveTable_TableSaveMethodFromJSON = writeOperation_SaveTable_TableSaveMethodFromJSON;
function writeOperation_SaveTable_TableSaveMethodToJSON(object) {
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
exports.writeOperation_SaveTable_TableSaveMethodToJSON = writeOperation_SaveTable_TableSaveMethodToJSON;
var WriteOperationV2_Mode;
(function (WriteOperationV2_Mode) {
    WriteOperationV2_Mode[WriteOperationV2_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    WriteOperationV2_Mode[WriteOperationV2_Mode["MODE_CREATE"] = 1] = "MODE_CREATE";
    WriteOperationV2_Mode[WriteOperationV2_Mode["MODE_OVERWRITE"] = 2] = "MODE_OVERWRITE";
    WriteOperationV2_Mode[WriteOperationV2_Mode["MODE_OVERWRITE_PARTITIONS"] = 3] = "MODE_OVERWRITE_PARTITIONS";
    WriteOperationV2_Mode[WriteOperationV2_Mode["MODE_APPEND"] = 4] = "MODE_APPEND";
    WriteOperationV2_Mode[WriteOperationV2_Mode["MODE_REPLACE"] = 5] = "MODE_REPLACE";
    WriteOperationV2_Mode[WriteOperationV2_Mode["MODE_CREATE_OR_REPLACE"] = 6] = "MODE_CREATE_OR_REPLACE";
    WriteOperationV2_Mode[WriteOperationV2_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(WriteOperationV2_Mode = exports.WriteOperationV2_Mode || (exports.WriteOperationV2_Mode = {}));
function writeOperationV2_ModeFromJSON(object) {
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
exports.writeOperationV2_ModeFromJSON = writeOperationV2_ModeFromJSON;
function writeOperationV2_ModeToJSON(object) {
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
exports.writeOperationV2_ModeToJSON = writeOperationV2_ModeToJSON;
function createBaseCommand() {
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
exports.Command = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.registerFunction !== undefined) {
            expressions_1.CommonInlineUserDefinedFunction.encode(message.registerFunction, writer.uint32(10).fork()).ldelim();
        }
        if (message.writeOperation !== undefined) {
            exports.WriteOperation.encode(message.writeOperation, writer.uint32(18).fork()).ldelim();
        }
        if (message.createDataframeView !== undefined) {
            exports.CreateDataFrameViewCommand.encode(message.createDataframeView, writer.uint32(26).fork()).ldelim();
        }
        if (message.writeOperationV2 !== undefined) {
            exports.WriteOperationV2.encode(message.writeOperationV2, writer.uint32(34).fork()).ldelim();
        }
        if (message.sqlCommand !== undefined) {
            exports.SqlCommand.encode(message.sqlCommand, writer.uint32(42).fork()).ldelim();
        }
        if (message.writeStreamOperationStart !== undefined) {
            exports.WriteStreamOperationStart.encode(message.writeStreamOperationStart, writer.uint32(50).fork()).ldelim();
        }
        if (message.streamingQueryCommand !== undefined) {
            exports.StreamingQueryCommand.encode(message.streamingQueryCommand, writer.uint32(58).fork()).ldelim();
        }
        if (message.getResourcesCommand !== undefined) {
            exports.GetResourcesCommand.encode(message.getResourcesCommand, writer.uint32(66).fork()).ldelim();
        }
        if (message.streamingQueryManagerCommand !== undefined) {
            exports.StreamingQueryManagerCommand.encode(message.streamingQueryManagerCommand, writer.uint32(74).fork()).ldelim();
        }
        if (message.registerTableFunction !== undefined) {
            relations_1.CommonInlineUserDefinedTableFunction.encode(message.registerTableFunction, writer.uint32(82).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(message.extension, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.registerFunction = expressions_1.CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.writeOperation = exports.WriteOperation.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.createDataframeView = exports.CreateDataFrameViewCommand.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.writeOperationV2 = exports.WriteOperationV2.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sqlCommand = exports.SqlCommand.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.writeStreamOperationStart = exports.WriteStreamOperationStart.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.streamingQueryCommand = exports.StreamingQueryCommand.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.getResourcesCommand = exports.GetResourcesCommand.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.streamingQueryManagerCommand = exports.StreamingQueryManagerCommand.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.registerTableFunction = relations_1.CommonInlineUserDefinedTableFunction.decode(reader, reader.uint32());
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
            registerFunction: isSet(object.registerFunction)
                ? expressions_1.CommonInlineUserDefinedFunction.fromJSON(object.registerFunction)
                : undefined,
            writeOperation: isSet(object.writeOperation) ? exports.WriteOperation.fromJSON(object.writeOperation) : undefined,
            createDataframeView: isSet(object.createDataframeView)
                ? exports.CreateDataFrameViewCommand.fromJSON(object.createDataframeView)
                : undefined,
            writeOperationV2: isSet(object.writeOperationV2) ? exports.WriteOperationV2.fromJSON(object.writeOperationV2) : undefined,
            sqlCommand: isSet(object.sqlCommand) ? exports.SqlCommand.fromJSON(object.sqlCommand) : undefined,
            writeStreamOperationStart: isSet(object.writeStreamOperationStart)
                ? exports.WriteStreamOperationStart.fromJSON(object.writeStreamOperationStart)
                : undefined,
            streamingQueryCommand: isSet(object.streamingQueryCommand)
                ? exports.StreamingQueryCommand.fromJSON(object.streamingQueryCommand)
                : undefined,
            getResourcesCommand: isSet(object.getResourcesCommand)
                ? exports.GetResourcesCommand.fromJSON(object.getResourcesCommand)
                : undefined,
            streamingQueryManagerCommand: isSet(object.streamingQueryManagerCommand)
                ? exports.StreamingQueryManagerCommand.fromJSON(object.streamingQueryManagerCommand)
                : undefined,
            registerTableFunction: isSet(object.registerTableFunction)
                ? relations_1.CommonInlineUserDefinedTableFunction.fromJSON(object.registerTableFunction)
                : undefined,
            extension: isSet(object.extension) ? any_1.Any.fromJSON(object.extension) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.registerFunction !== undefined) {
            obj.registerFunction = expressions_1.CommonInlineUserDefinedFunction.toJSON(message.registerFunction);
        }
        if (message.writeOperation !== undefined) {
            obj.writeOperation = exports.WriteOperation.toJSON(message.writeOperation);
        }
        if (message.createDataframeView !== undefined) {
            obj.createDataframeView = exports.CreateDataFrameViewCommand.toJSON(message.createDataframeView);
        }
        if (message.writeOperationV2 !== undefined) {
            obj.writeOperationV2 = exports.WriteOperationV2.toJSON(message.writeOperationV2);
        }
        if (message.sqlCommand !== undefined) {
            obj.sqlCommand = exports.SqlCommand.toJSON(message.sqlCommand);
        }
        if (message.writeStreamOperationStart !== undefined) {
            obj.writeStreamOperationStart = exports.WriteStreamOperationStart.toJSON(message.writeStreamOperationStart);
        }
        if (message.streamingQueryCommand !== undefined) {
            obj.streamingQueryCommand = exports.StreamingQueryCommand.toJSON(message.streamingQueryCommand);
        }
        if (message.getResourcesCommand !== undefined) {
            obj.getResourcesCommand = exports.GetResourcesCommand.toJSON(message.getResourcesCommand);
        }
        if (message.streamingQueryManagerCommand !== undefined) {
            obj.streamingQueryManagerCommand = exports.StreamingQueryManagerCommand.toJSON(message.streamingQueryManagerCommand);
        }
        if (message.registerTableFunction !== undefined) {
            obj.registerTableFunction = relations_1.CommonInlineUserDefinedTableFunction.toJSON(message.registerTableFunction);
        }
        if (message.extension !== undefined) {
            obj.extension = any_1.Any.toJSON(message.extension);
        }
        return obj;
    },
    create: function (base) {
        return exports.Command.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseCommand();
        message.registerFunction = (object.registerFunction !== undefined && object.registerFunction !== null)
            ? expressions_1.CommonInlineUserDefinedFunction.fromPartial(object.registerFunction)
            : undefined;
        message.writeOperation = (object.writeOperation !== undefined && object.writeOperation !== null)
            ? exports.WriteOperation.fromPartial(object.writeOperation)
            : undefined;
        message.createDataframeView = (object.createDataframeView !== undefined && object.createDataframeView !== null)
            ? exports.CreateDataFrameViewCommand.fromPartial(object.createDataframeView)
            : undefined;
        message.writeOperationV2 = (object.writeOperationV2 !== undefined && object.writeOperationV2 !== null)
            ? exports.WriteOperationV2.fromPartial(object.writeOperationV2)
            : undefined;
        message.sqlCommand = (object.sqlCommand !== undefined && object.sqlCommand !== null)
            ? exports.SqlCommand.fromPartial(object.sqlCommand)
            : undefined;
        message.writeStreamOperationStart =
            (object.writeStreamOperationStart !== undefined && object.writeStreamOperationStart !== null)
                ? exports.WriteStreamOperationStart.fromPartial(object.writeStreamOperationStart)
                : undefined;
        message.streamingQueryCommand =
            (object.streamingQueryCommand !== undefined && object.streamingQueryCommand !== null)
                ? exports.StreamingQueryCommand.fromPartial(object.streamingQueryCommand)
                : undefined;
        message.getResourcesCommand = (object.getResourcesCommand !== undefined && object.getResourcesCommand !== null)
            ? exports.GetResourcesCommand.fromPartial(object.getResourcesCommand)
            : undefined;
        message.streamingQueryManagerCommand =
            (object.streamingQueryManagerCommand !== undefined && object.streamingQueryManagerCommand !== null)
                ? exports.StreamingQueryManagerCommand.fromPartial(object.streamingQueryManagerCommand)
                : undefined;
        message.registerTableFunction =
            (object.registerTableFunction !== undefined && object.registerTableFunction !== null)
                ? relations_1.CommonInlineUserDefinedTableFunction.fromPartial(object.registerTableFunction)
                : undefined;
        message.extension = (object.extension !== undefined && object.extension !== null)
            ? any_1.Any.fromPartial(object.extension)
            : undefined;
        return message;
    },
};
function createBaseSqlCommand() {
    return { sql: "", args: {}, posArgs: [], namedArguments: {}, posArguments: [] };
}
exports.SqlCommand = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sql !== "") {
            writer.uint32(10).string(message.sql);
        }
        Object.entries(message.args).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SqlCommand_ArgsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        for (var _i = 0, _a = message.posArgs; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression_Literal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.namedArguments).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SqlCommand_NamedArgumentsEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        for (var _b = 0, _c = message.posArguments; _b < _c.length; _b++) {
            var v = _c[_b];
            expressions_1.Expression.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSqlCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    var entry2 = exports.SqlCommand_ArgsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.args[entry2.key] = entry2.value;
                    }
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.posArgs.push(expressions_1.Expression_Literal.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    var entry4 = exports.SqlCommand_NamedArgumentsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.namedArguments[entry4.key] = entry4.value;
                    }
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.posArguments.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
            sql: isSet(object.sql) ? globalThis.String(object.sql) : "",
            args: isObject(object.args)
                ? Object.entries(object.args).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = expressions_1.Expression_Literal.fromJSON(value);
                    return acc;
                }, {})
                : {},
            posArgs: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.posArgs)
                ? object.posArgs.map(function (e) { return expressions_1.Expression_Literal.fromJSON(e); })
                : [],
            namedArguments: isObject(object.namedArguments)
                ? Object.entries(object.namedArguments).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = expressions_1.Expression.fromJSON(value);
                    return acc;
                }, {})
                : {},
            posArguments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.posArguments)
                ? object.posArguments.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.sql !== "") {
            obj.sql = message.sql;
        }
        if (message.args) {
            var entries = Object.entries(message.args);
            if (entries.length > 0) {
                obj.args = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.args[k] = expressions_1.Expression_Literal.toJSON(v);
                });
            }
        }
        if ((_a = message.posArgs) === null || _a === void 0 ? void 0 : _a.length) {
            obj.posArgs = message.posArgs.map(function (e) { return expressions_1.Expression_Literal.toJSON(e); });
        }
        if (message.namedArguments) {
            var entries = Object.entries(message.namedArguments);
            if (entries.length > 0) {
                obj.namedArguments = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.namedArguments[k] = expressions_1.Expression.toJSON(v);
                });
            }
        }
        if ((_b = message.posArguments) === null || _b === void 0 ? void 0 : _b.length) {
            obj.posArguments = message.posArguments.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.SqlCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSqlCommand();
        message.sql = (_a = object.sql) !== null && _a !== void 0 ? _a : "";
        message.args = Object.entries((_b = object.args) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = expressions_1.Expression_Literal.fromPartial(value);
            }
            return acc;
        }, {});
        message.posArgs = ((_c = object.posArgs) === null || _c === void 0 ? void 0 : _c.map(function (e) { return expressions_1.Expression_Literal.fromPartial(e); })) || [];
        message.namedArguments = Object.entries((_d = object.namedArguments) !== null && _d !== void 0 ? _d : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = expressions_1.Expression.fromPartial(value);
            }
            return acc;
        }, {});
        message.posArguments = ((_e = object.posArguments) === null || _e === void 0 ? void 0 : _e.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSqlCommand_ArgsEntry() {
    return { key: "", value: undefined };
}
exports.SqlCommand_ArgsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            expressions_1.Expression_Literal.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSqlCommand_ArgsEntry();
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
                    message.value = expressions_1.Expression_Literal.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? expressions_1.Expression_Literal.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = expressions_1.Expression_Literal.toJSON(message.value);
        }
        return obj;
    },
    create: function (base) {
        return exports.SqlCommand_ArgsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSqlCommand_ArgsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? expressions_1.Expression_Literal.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseSqlCommand_NamedArgumentsEntry() {
    return { key: "", value: undefined };
}
exports.SqlCommand_NamedArgumentsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            expressions_1.Expression.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSqlCommand_NamedArgumentsEntry();
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
                    message.value = expressions_1.Expression.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? expressions_1.Expression.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = expressions_1.Expression.toJSON(message.value);
        }
        return obj;
    },
    create: function (base) {
        return exports.SqlCommand_NamedArgumentsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSqlCommand_NamedArgumentsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? expressions_1.Expression.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseCreateDataFrameViewCommand() {
    return { input: undefined, name: "", isGlobal: false, replace: false };
}
exports.CreateDataFrameViewCommand = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            relations_1.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateDataFrameViewCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = relations_1.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? relations_1.Relation.fromJSON(object.input) : undefined,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            isGlobal: isSet(object.isGlobal) ? globalThis.Boolean(object.isGlobal) : false,
            replace: isSet(object.replace) ? globalThis.Boolean(object.replace) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = relations_1.Relation.toJSON(message.input);
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
    create: function (base) {
        return exports.CreateDataFrameViewCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCreateDataFrameViewCommand();
        message.input = (object.input !== undefined && object.input !== null)
            ? relations_1.Relation.fromPartial(object.input)
            : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.isGlobal = (_b = object.isGlobal) !== null && _b !== void 0 ? _b : false;
        message.replace = (_c = object.replace) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseWriteOperation() {
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
exports.WriteOperation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            relations_1.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.source !== undefined) {
            writer.uint32(18).string(message.source);
        }
        if (message.path !== undefined) {
            writer.uint32(26).string(message.path);
        }
        if (message.table !== undefined) {
            exports.WriteOperation_SaveTable.encode(message.table, writer.uint32(34).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(40).int32(message.mode);
        }
        for (var _i = 0, _a = message.sortColumnNames; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(50).string(v);
        }
        for (var _b = 0, _c = message.partitioningColumns; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(58).string(v);
        }
        if (message.bucketBy !== undefined) {
            exports.WriteOperation_BucketBy.encode(message.bucketBy, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.WriteOperation_OptionsEntry.encode({ key: key, value: value }, writer.uint32(74).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteOperation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = relations_1.Relation.decode(reader, reader.uint32());
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
                    message.table = exports.WriteOperation_SaveTable.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.mode = reader.int32();
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
                    message.bucketBy = exports.WriteOperation_BucketBy.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    var entry9 = exports.WriteOperation_OptionsEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? relations_1.Relation.fromJSON(object.input) : undefined,
            source: isSet(object.source) ? globalThis.String(object.source) : undefined,
            path: isSet(object.path) ? globalThis.String(object.path) : undefined,
            table: isSet(object.table) ? exports.WriteOperation_SaveTable.fromJSON(object.table) : undefined,
            mode: isSet(object.mode) ? writeOperation_SaveModeFromJSON(object.mode) : 0,
            sortColumnNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.sortColumnNames)
                ? object.sortColumnNames.map(function (e) { return globalThis.String(e); })
                : [],
            partitioningColumns: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.partitioningColumns)
                ? object.partitioningColumns.map(function (e) { return globalThis.String(e); })
                : [],
            bucketBy: isSet(object.bucketBy) ? exports.WriteOperation_BucketBy.fromJSON(object.bucketBy) : undefined,
            options: isObject(object.options)
                ? Object.entries(object.options).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = relations_1.Relation.toJSON(message.input);
        }
        if (message.source !== undefined) {
            obj.source = message.source;
        }
        if (message.path !== undefined) {
            obj.path = message.path;
        }
        if (message.table !== undefined) {
            obj.table = exports.WriteOperation_SaveTable.toJSON(message.table);
        }
        if (message.mode !== 0) {
            obj.mode = writeOperation_SaveModeToJSON(message.mode);
        }
        if ((_a = message.sortColumnNames) === null || _a === void 0 ? void 0 : _a.length) {
            obj.sortColumnNames = message.sortColumnNames;
        }
        if ((_b = message.partitioningColumns) === null || _b === void 0 ? void 0 : _b.length) {
            obj.partitioningColumns = message.partitioningColumns;
        }
        if (message.bucketBy !== undefined) {
            obj.bucketBy = exports.WriteOperation_BucketBy.toJSON(message.bucketBy);
        }
        if (message.options) {
            var entries = Object.entries(message.options);
            if (entries.length > 0) {
                obj.options = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.options[k] = v;
                });
            }
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteOperation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseWriteOperation();
        message.input = (object.input !== undefined && object.input !== null)
            ? relations_1.Relation.fromPartial(object.input)
            : undefined;
        message.source = (_a = object.source) !== null && _a !== void 0 ? _a : undefined;
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : undefined;
        message.table = (object.table !== undefined && object.table !== null)
            ? exports.WriteOperation_SaveTable.fromPartial(object.table)
            : undefined;
        message.mode = (_c = object.mode) !== null && _c !== void 0 ? _c : 0;
        message.sortColumnNames = ((_d = object.sortColumnNames) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.partitioningColumns = ((_e = object.partitioningColumns) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        message.bucketBy = (object.bucketBy !== undefined && object.bucketBy !== null)
            ? exports.WriteOperation_BucketBy.fromPartial(object.bucketBy)
            : undefined;
        message.options = Object.entries((_f = object.options) !== null && _f !== void 0 ? _f : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseWriteOperation_OptionsEntry() {
    return { key: "", value: "" };
}
exports.WriteOperation_OptionsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteOperation_OptionsEntry();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteOperation_OptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWriteOperation_OptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseWriteOperation_SaveTable() {
    return { tableName: "", saveMethod: 0 };
}
exports.WriteOperation_SaveTable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.saveMethod !== 0) {
            writer.uint32(16).int32(message.saveMethod);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteOperation_SaveTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.saveMethod = reader.int32();
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
            tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
            saveMethod: isSet(object.saveMethod) ? writeOperation_SaveTable_TableSaveMethodFromJSON(object.saveMethod) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        if (message.saveMethod !== 0) {
            obj.saveMethod = writeOperation_SaveTable_TableSaveMethodToJSON(message.saveMethod);
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteOperation_SaveTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWriteOperation_SaveTable();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.saveMethod = (_b = object.saveMethod) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseWriteOperation_BucketBy() {
    return { bucketColumnNames: [], numBuckets: 0 };
}
exports.WriteOperation_BucketBy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.bucketColumnNames; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.numBuckets !== 0) {
            writer.uint32(16).int32(message.numBuckets);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteOperation_BucketBy();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            bucketColumnNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.bucketColumnNames)
                ? object.bucketColumnNames.map(function (e) { return globalThis.String(e); })
                : [],
            numBuckets: isSet(object.numBuckets) ? globalThis.Number(object.numBuckets) : 0,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.bucketColumnNames) === null || _a === void 0 ? void 0 : _a.length) {
            obj.bucketColumnNames = message.bucketColumnNames;
        }
        if (message.numBuckets !== 0) {
            obj.numBuckets = Math.round(message.numBuckets);
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteOperation_BucketBy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWriteOperation_BucketBy();
        message.bucketColumnNames = ((_a = object.bucketColumnNames) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.numBuckets = (_b = object.numBuckets) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseWriteOperationV2() {
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
exports.WriteOperationV2 = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            relations_1.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.tableName !== "") {
            writer.uint32(18).string(message.tableName);
        }
        if (message.provider !== undefined) {
            writer.uint32(26).string(message.provider);
        }
        for (var _i = 0, _a = message.partitioningColumns; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.WriteOperationV2_OptionsEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        Object.entries(message.tableProperties).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.WriteOperationV2_TablePropertiesEntry.encode({ key: key, value: value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.mode !== 0) {
            writer.uint32(56).int32(message.mode);
        }
        if (message.overwriteCondition !== undefined) {
            expressions_1.Expression.encode(message.overwriteCondition, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteOperationV2();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = relations_1.Relation.decode(reader, reader.uint32());
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
                    message.partitioningColumns.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    var entry5 = exports.WriteOperationV2_OptionsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.options[entry5.key] = entry5.value;
                    }
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    var entry6 = exports.WriteOperationV2_TablePropertiesEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.tableProperties[entry6.key] = entry6.value;
                    }
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.mode = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.overwriteCondition = expressions_1.Expression.decode(reader, reader.uint32());
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
            input: isSet(object.input) ? relations_1.Relation.fromJSON(object.input) : undefined,
            tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
            provider: isSet(object.provider) ? globalThis.String(object.provider) : undefined,
            partitioningColumns: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.partitioningColumns)
                ? object.partitioningColumns.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            options: isObject(object.options)
                ? Object.entries(object.options).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            tableProperties: isObject(object.tableProperties)
                ? Object.entries(object.tableProperties).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            mode: isSet(object.mode) ? writeOperationV2_ModeFromJSON(object.mode) : 0,
            overwriteCondition: isSet(object.overwriteCondition) ? expressions_1.Expression.fromJSON(object.overwriteCondition) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = relations_1.Relation.toJSON(message.input);
        }
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        if (message.provider !== undefined) {
            obj.provider = message.provider;
        }
        if ((_a = message.partitioningColumns) === null || _a === void 0 ? void 0 : _a.length) {
            obj.partitioningColumns = message.partitioningColumns.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.options) {
            var entries = Object.entries(message.options);
            if (entries.length > 0) {
                obj.options = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.options[k] = v;
                });
            }
        }
        if (message.tableProperties) {
            var entries = Object.entries(message.tableProperties);
            if (entries.length > 0) {
                obj.tableProperties = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.tableProperties[k] = v;
                });
            }
        }
        if (message.mode !== 0) {
            obj.mode = writeOperationV2_ModeToJSON(message.mode);
        }
        if (message.overwriteCondition !== undefined) {
            obj.overwriteCondition = expressions_1.Expression.toJSON(message.overwriteCondition);
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteOperationV2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseWriteOperationV2();
        message.input = (object.input !== undefined && object.input !== null)
            ? relations_1.Relation.fromPartial(object.input)
            : undefined;
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.provider = (_b = object.provider) !== null && _b !== void 0 ? _b : undefined;
        message.partitioningColumns = ((_c = object.partitioningColumns) === null || _c === void 0 ? void 0 : _c.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.options = Object.entries((_d = object.options) !== null && _d !== void 0 ? _d : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        message.tableProperties = Object.entries((_e = object.tableProperties) !== null && _e !== void 0 ? _e : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        message.mode = (_f = object.mode) !== null && _f !== void 0 ? _f : 0;
        message.overwriteCondition = (object.overwriteCondition !== undefined && object.overwriteCondition !== null)
            ? expressions_1.Expression.fromPartial(object.overwriteCondition)
            : undefined;
        return message;
    },
};
function createBaseWriteOperationV2_OptionsEntry() {
    return { key: "", value: "" };
}
exports.WriteOperationV2_OptionsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteOperationV2_OptionsEntry();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteOperationV2_OptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWriteOperationV2_OptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseWriteOperationV2_TablePropertiesEntry() {
    return { key: "", value: "" };
}
exports.WriteOperationV2_TablePropertiesEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteOperationV2_TablePropertiesEntry();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteOperationV2_TablePropertiesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWriteOperationV2_TablePropertiesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseWriteStreamOperationStart() {
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
exports.WriteStreamOperationStart = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            relations_1.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.format !== "") {
            writer.uint32(18).string(message.format);
        }
        Object.entries(message.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.WriteStreamOperationStart_OptionsEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        for (var _i = 0, _a = message.partitioningColumnNames; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
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
            exports.StreamingForeachFunction.encode(message.foreachWriter, writer.uint32(106).fork()).ldelim();
        }
        if (message.foreachBatch !== undefined) {
            exports.StreamingForeachFunction.encode(message.foreachBatch, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteStreamOperationStart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = relations_1.Relation.decode(reader, reader.uint32());
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
                    var entry3 = exports.WriteStreamOperationStart_OptionsEntry.decode(reader, reader.uint32());
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
                    message.foreachWriter = exports.StreamingForeachFunction.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.foreachBatch = exports.StreamingForeachFunction.decode(reader, reader.uint32());
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
            input: isSet(object.input) ? relations_1.Relation.fromJSON(object.input) : undefined,
            format: isSet(object.format) ? globalThis.String(object.format) : "",
            options: isObject(object.options)
                ? Object.entries(object.options).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            partitioningColumnNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.partitioningColumnNames)
                ? object.partitioningColumnNames.map(function (e) { return globalThis.String(e); })
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
            foreachWriter: isSet(object.foreachWriter) ? exports.StreamingForeachFunction.fromJSON(object.foreachWriter) : undefined,
            foreachBatch: isSet(object.foreachBatch) ? exports.StreamingForeachFunction.fromJSON(object.foreachBatch) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = relations_1.Relation.toJSON(message.input);
        }
        if (message.format !== "") {
            obj.format = message.format;
        }
        if (message.options) {
            var entries = Object.entries(message.options);
            if (entries.length > 0) {
                obj.options = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.options[k] = v;
                });
            }
        }
        if ((_a = message.partitioningColumnNames) === null || _a === void 0 ? void 0 : _a.length) {
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
            obj.foreachWriter = exports.StreamingForeachFunction.toJSON(message.foreachWriter);
        }
        if (message.foreachBatch !== undefined) {
            obj.foreachBatch = exports.StreamingForeachFunction.toJSON(message.foreachBatch);
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteStreamOperationStart.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseWriteStreamOperationStart();
        message.input = (object.input !== undefined && object.input !== null)
            ? relations_1.Relation.fromPartial(object.input)
            : undefined;
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : "";
        message.options = Object.entries((_b = object.options) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        message.partitioningColumnNames = ((_c = object.partitioningColumnNames) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.processingTimeInterval = (_d = object.processingTimeInterval) !== null && _d !== void 0 ? _d : undefined;
        message.availableNow = (_e = object.availableNow) !== null && _e !== void 0 ? _e : undefined;
        message.once = (_f = object.once) !== null && _f !== void 0 ? _f : undefined;
        message.continuousCheckpointInterval = (_g = object.continuousCheckpointInterval) !== null && _g !== void 0 ? _g : undefined;
        message.outputMode = (_h = object.outputMode) !== null && _h !== void 0 ? _h : "";
        message.queryName = (_j = object.queryName) !== null && _j !== void 0 ? _j : "";
        message.path = (_k = object.path) !== null && _k !== void 0 ? _k : undefined;
        message.tableName = (_l = object.tableName) !== null && _l !== void 0 ? _l : undefined;
        message.foreachWriter = (object.foreachWriter !== undefined && object.foreachWriter !== null)
            ? exports.StreamingForeachFunction.fromPartial(object.foreachWriter)
            : undefined;
        message.foreachBatch = (object.foreachBatch !== undefined && object.foreachBatch !== null)
            ? exports.StreamingForeachFunction.fromPartial(object.foreachBatch)
            : undefined;
        return message;
    },
};
function createBaseWriteStreamOperationStart_OptionsEntry() {
    return { key: "", value: "" };
}
exports.WriteStreamOperationStart_OptionsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteStreamOperationStart_OptionsEntry();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteStreamOperationStart_OptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWriteStreamOperationStart_OptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStreamingForeachFunction() {
    return { pythonFunction: undefined, scalaFunction: undefined };
}
exports.StreamingForeachFunction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pythonFunction !== undefined) {
            expressions_1.PythonUDF.encode(message.pythonFunction, writer.uint32(10).fork()).ldelim();
        }
        if (message.scalaFunction !== undefined) {
            expressions_1.ScalarScalaUDF.encode(message.scalaFunction, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingForeachFunction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pythonFunction = expressions_1.PythonUDF.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.scalaFunction = expressions_1.ScalarScalaUDF.decode(reader, reader.uint32());
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
            pythonFunction: isSet(object.pythonFunction) ? expressions_1.PythonUDF.fromJSON(object.pythonFunction) : undefined,
            scalaFunction: isSet(object.scalaFunction) ? expressions_1.ScalarScalaUDF.fromJSON(object.scalaFunction) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pythonFunction !== undefined) {
            obj.pythonFunction = expressions_1.PythonUDF.toJSON(message.pythonFunction);
        }
        if (message.scalaFunction !== undefined) {
            obj.scalaFunction = expressions_1.ScalarScalaUDF.toJSON(message.scalaFunction);
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingForeachFunction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseStreamingForeachFunction();
        message.pythonFunction = (object.pythonFunction !== undefined && object.pythonFunction !== null)
            ? expressions_1.PythonUDF.fromPartial(object.pythonFunction)
            : undefined;
        message.scalaFunction = (object.scalaFunction !== undefined && object.scalaFunction !== null)
            ? expressions_1.ScalarScalaUDF.fromPartial(object.scalaFunction)
            : undefined;
        return message;
    },
};
function createBaseWriteStreamOperationStartResult() {
    return { queryId: undefined, name: "" };
}
exports.WriteStreamOperationStartResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.queryId !== undefined) {
            exports.StreamingQueryInstanceId.encode(message.queryId, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWriteStreamOperationStartResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queryId = exports.StreamingQueryInstanceId.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            queryId: isSet(object.queryId) ? exports.StreamingQueryInstanceId.fromJSON(object.queryId) : undefined,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.queryId !== undefined) {
            obj.queryId = exports.StreamingQueryInstanceId.toJSON(message.queryId);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create: function (base) {
        return exports.WriteStreamOperationStartResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseWriteStreamOperationStartResult();
        message.queryId = (object.queryId !== undefined && object.queryId !== null)
            ? exports.StreamingQueryInstanceId.fromPartial(object.queryId)
            : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStreamingQueryInstanceId() {
    return { id: "", runId: "" };
}
exports.StreamingQueryInstanceId = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.runId !== "") {
            writer.uint32(18).string(message.runId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryInstanceId();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            runId: isSet(object.runId) ? globalThis.String(object.runId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.runId !== "") {
            obj.runId = message.runId;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryInstanceId.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStreamingQueryInstanceId();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.runId = (_b = object.runId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStreamingQueryCommand() {
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
exports.StreamingQueryCommand = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.queryId !== undefined) {
            exports.StreamingQueryInstanceId.encode(message.queryId, writer.uint32(10).fork()).ldelim();
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
            exports.StreamingQueryCommand_ExplainCommand.encode(message.explain, writer.uint32(58).fork()).ldelim();
        }
        if (message.exception !== undefined) {
            writer.uint32(64).bool(message.exception);
        }
        if (message.awaitTermination !== undefined) {
            exports.StreamingQueryCommand_AwaitTerminationCommand.encode(message.awaitTermination, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queryId = exports.StreamingQueryInstanceId.decode(reader, reader.uint32());
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
                    message.explain = exports.StreamingQueryCommand_ExplainCommand.decode(reader, reader.uint32());
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
                    message.awaitTermination = exports.StreamingQueryCommand_AwaitTerminationCommand.decode(reader, reader.uint32());
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
            queryId: isSet(object.queryId) ? exports.StreamingQueryInstanceId.fromJSON(object.queryId) : undefined,
            status: isSet(object.status) ? globalThis.Boolean(object.status) : undefined,
            lastProgress: isSet(object.lastProgress) ? globalThis.Boolean(object.lastProgress) : undefined,
            recentProgress: isSet(object.recentProgress) ? globalThis.Boolean(object.recentProgress) : undefined,
            stop: isSet(object.stop) ? globalThis.Boolean(object.stop) : undefined,
            processAllAvailable: isSet(object.processAllAvailable)
                ? globalThis.Boolean(object.processAllAvailable)
                : undefined,
            explain: isSet(object.explain) ? exports.StreamingQueryCommand_ExplainCommand.fromJSON(object.explain) : undefined,
            exception: isSet(object.exception) ? globalThis.Boolean(object.exception) : undefined,
            awaitTermination: isSet(object.awaitTermination)
                ? exports.StreamingQueryCommand_AwaitTerminationCommand.fromJSON(object.awaitTermination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.queryId !== undefined) {
            obj.queryId = exports.StreamingQueryInstanceId.toJSON(message.queryId);
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
            obj.explain = exports.StreamingQueryCommand_ExplainCommand.toJSON(message.explain);
        }
        if (message.exception !== undefined) {
            obj.exception = message.exception;
        }
        if (message.awaitTermination !== undefined) {
            obj.awaitTermination = exports.StreamingQueryCommand_AwaitTerminationCommand.toJSON(message.awaitTermination);
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseStreamingQueryCommand();
        message.queryId = (object.queryId !== undefined && object.queryId !== null)
            ? exports.StreamingQueryInstanceId.fromPartial(object.queryId)
            : undefined;
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : undefined;
        message.lastProgress = (_b = object.lastProgress) !== null && _b !== void 0 ? _b : undefined;
        message.recentProgress = (_c = object.recentProgress) !== null && _c !== void 0 ? _c : undefined;
        message.stop = (_d = object.stop) !== null && _d !== void 0 ? _d : undefined;
        message.processAllAvailable = (_e = object.processAllAvailable) !== null && _e !== void 0 ? _e : undefined;
        message.explain = (object.explain !== undefined && object.explain !== null)
            ? exports.StreamingQueryCommand_ExplainCommand.fromPartial(object.explain)
            : undefined;
        message.exception = (_f = object.exception) !== null && _f !== void 0 ? _f : undefined;
        message.awaitTermination = (object.awaitTermination !== undefined && object.awaitTermination !== null)
            ? exports.StreamingQueryCommand_AwaitTerminationCommand.fromPartial(object.awaitTermination)
            : undefined;
        return message;
    },
};
function createBaseStreamingQueryCommand_ExplainCommand() {
    return { extended: false };
}
exports.StreamingQueryCommand_ExplainCommand = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.extended === true) {
            writer.uint32(8).bool(message.extended);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommand_ExplainCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { extended: isSet(object.extended) ? globalThis.Boolean(object.extended) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.extended === true) {
            obj.extended = message.extended;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryCommand_ExplainCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryCommand_ExplainCommand();
        message.extended = (_a = object.extended) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseStreamingQueryCommand_AwaitTerminationCommand() {
    return { timeoutMs: undefined };
}
exports.StreamingQueryCommand_AwaitTerminationCommand = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.timeoutMs !== undefined) {
            writer.uint32(16).int64(message.timeoutMs);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommand_AwaitTerminationCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.timeoutMs = longToNumber(reader.int64());
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
        return { timeoutMs: isSet(object.timeoutMs) ? globalThis.Number(object.timeoutMs) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.timeoutMs !== undefined) {
            obj.timeoutMs = Math.round(message.timeoutMs);
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryCommand_AwaitTerminationCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryCommand_AwaitTerminationCommand();
        message.timeoutMs = (_a = object.timeoutMs) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStreamingQueryCommandResult() {
    return {
        queryId: undefined,
        status: undefined,
        recentProgress: undefined,
        explain: undefined,
        exception: undefined,
        awaitTermination: undefined,
    };
}
exports.StreamingQueryCommandResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.queryId !== undefined) {
            exports.StreamingQueryInstanceId.encode(message.queryId, writer.uint32(10).fork()).ldelim();
        }
        if (message.status !== undefined) {
            exports.StreamingQueryCommandResult_StatusResult.encode(message.status, writer.uint32(18).fork()).ldelim();
        }
        if (message.recentProgress !== undefined) {
            exports.StreamingQueryCommandResult_RecentProgressResult.encode(message.recentProgress, writer.uint32(26).fork())
                .ldelim();
        }
        if (message.explain !== undefined) {
            exports.StreamingQueryCommandResult_ExplainResult.encode(message.explain, writer.uint32(34).fork()).ldelim();
        }
        if (message.exception !== undefined) {
            exports.StreamingQueryCommandResult_ExceptionResult.encode(message.exception, writer.uint32(42).fork()).ldelim();
        }
        if (message.awaitTermination !== undefined) {
            exports.StreamingQueryCommandResult_AwaitTerminationResult.encode(message.awaitTermination, writer.uint32(50).fork())
                .ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommandResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queryId = exports.StreamingQueryInstanceId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.status = exports.StreamingQueryCommandResult_StatusResult.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.recentProgress = exports.StreamingQueryCommandResult_RecentProgressResult.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.explain = exports.StreamingQueryCommandResult_ExplainResult.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.exception = exports.StreamingQueryCommandResult_ExceptionResult.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.awaitTermination = exports.StreamingQueryCommandResult_AwaitTerminationResult.decode(reader, reader.uint32());
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
            queryId: isSet(object.queryId) ? exports.StreamingQueryInstanceId.fromJSON(object.queryId) : undefined,
            status: isSet(object.status) ? exports.StreamingQueryCommandResult_StatusResult.fromJSON(object.status) : undefined,
            recentProgress: isSet(object.recentProgress)
                ? exports.StreamingQueryCommandResult_RecentProgressResult.fromJSON(object.recentProgress)
                : undefined,
            explain: isSet(object.explain) ? exports.StreamingQueryCommandResult_ExplainResult.fromJSON(object.explain) : undefined,
            exception: isSet(object.exception)
                ? exports.StreamingQueryCommandResult_ExceptionResult.fromJSON(object.exception)
                : undefined,
            awaitTermination: isSet(object.awaitTermination)
                ? exports.StreamingQueryCommandResult_AwaitTerminationResult.fromJSON(object.awaitTermination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.queryId !== undefined) {
            obj.queryId = exports.StreamingQueryInstanceId.toJSON(message.queryId);
        }
        if (message.status !== undefined) {
            obj.status = exports.StreamingQueryCommandResult_StatusResult.toJSON(message.status);
        }
        if (message.recentProgress !== undefined) {
            obj.recentProgress = exports.StreamingQueryCommandResult_RecentProgressResult.toJSON(message.recentProgress);
        }
        if (message.explain !== undefined) {
            obj.explain = exports.StreamingQueryCommandResult_ExplainResult.toJSON(message.explain);
        }
        if (message.exception !== undefined) {
            obj.exception = exports.StreamingQueryCommandResult_ExceptionResult.toJSON(message.exception);
        }
        if (message.awaitTermination !== undefined) {
            obj.awaitTermination = exports.StreamingQueryCommandResult_AwaitTerminationResult.toJSON(message.awaitTermination);
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryCommandResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseStreamingQueryCommandResult();
        message.queryId = (object.queryId !== undefined && object.queryId !== null)
            ? exports.StreamingQueryInstanceId.fromPartial(object.queryId)
            : undefined;
        message.status = (object.status !== undefined && object.status !== null)
            ? exports.StreamingQueryCommandResult_StatusResult.fromPartial(object.status)
            : undefined;
        message.recentProgress = (object.recentProgress !== undefined && object.recentProgress !== null)
            ? exports.StreamingQueryCommandResult_RecentProgressResult.fromPartial(object.recentProgress)
            : undefined;
        message.explain = (object.explain !== undefined && object.explain !== null)
            ? exports.StreamingQueryCommandResult_ExplainResult.fromPartial(object.explain)
            : undefined;
        message.exception = (object.exception !== undefined && object.exception !== null)
            ? exports.StreamingQueryCommandResult_ExceptionResult.fromPartial(object.exception)
            : undefined;
        message.awaitTermination = (object.awaitTermination !== undefined && object.awaitTermination !== null)
            ? exports.StreamingQueryCommandResult_AwaitTerminationResult.fromPartial(object.awaitTermination)
            : undefined;
        return message;
    },
};
function createBaseStreamingQueryCommandResult_StatusResult() {
    return { statusMessage: "", isDataAvailable: false, isTriggerActive: false, isActive: false };
}
exports.StreamingQueryCommandResult_StatusResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommandResult_StatusResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            statusMessage: isSet(object.statusMessage) ? globalThis.String(object.statusMessage) : "",
            isDataAvailable: isSet(object.isDataAvailable) ? globalThis.Boolean(object.isDataAvailable) : false,
            isTriggerActive: isSet(object.isTriggerActive) ? globalThis.Boolean(object.isTriggerActive) : false,
            isActive: isSet(object.isActive) ? globalThis.Boolean(object.isActive) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.StreamingQueryCommandResult_StatusResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStreamingQueryCommandResult_StatusResult();
        message.statusMessage = (_a = object.statusMessage) !== null && _a !== void 0 ? _a : "";
        message.isDataAvailable = (_b = object.isDataAvailable) !== null && _b !== void 0 ? _b : false;
        message.isTriggerActive = (_c = object.isTriggerActive) !== null && _c !== void 0 ? _c : false;
        message.isActive = (_d = object.isActive) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseStreamingQueryCommandResult_RecentProgressResult() {
    return { recentProgressJson: [] };
}
exports.StreamingQueryCommandResult_RecentProgressResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.recentProgressJson; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommandResult_RecentProgressResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            recentProgressJson: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.recentProgressJson)
                ? object.recentProgressJson.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.recentProgressJson) === null || _a === void 0 ? void 0 : _a.length) {
            obj.recentProgressJson = message.recentProgressJson;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryCommandResult_RecentProgressResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryCommandResult_RecentProgressResult();
        message.recentProgressJson = ((_a = object.recentProgressJson) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseStreamingQueryCommandResult_ExplainResult() {
    return { result: "" };
}
exports.StreamingQueryCommandResult_ExplainResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommandResult_ExplainResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { result: isSet(object.result) ? globalThis.String(object.result) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.result !== "") {
            obj.result = message.result;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryCommandResult_ExplainResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryCommandResult_ExplainResult();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStreamingQueryCommandResult_ExceptionResult() {
    return { exceptionMessage: undefined, errorClass: undefined, stackTrace: undefined };
}
exports.StreamingQueryCommandResult_ExceptionResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommandResult_ExceptionResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            exceptionMessage: isSet(object.exceptionMessage) ? globalThis.String(object.exceptionMessage) : undefined,
            errorClass: isSet(object.errorClass) ? globalThis.String(object.errorClass) : undefined,
            stackTrace: isSet(object.stackTrace) ? globalThis.String(object.stackTrace) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.StreamingQueryCommandResult_ExceptionResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStreamingQueryCommandResult_ExceptionResult();
        message.exceptionMessage = (_a = object.exceptionMessage) !== null && _a !== void 0 ? _a : undefined;
        message.errorClass = (_b = object.errorClass) !== null && _b !== void 0 ? _b : undefined;
        message.stackTrace = (_c = object.stackTrace) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseStreamingQueryCommandResult_AwaitTerminationResult() {
    return { terminated: false };
}
exports.StreamingQueryCommandResult_AwaitTerminationResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.terminated === true) {
            writer.uint32(8).bool(message.terminated);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryCommandResult_AwaitTerminationResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { terminated: isSet(object.terminated) ? globalThis.Boolean(object.terminated) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.terminated === true) {
            obj.terminated = message.terminated;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryCommandResult_AwaitTerminationResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryCommandResult_AwaitTerminationResult();
        message.terminated = (_a = object.terminated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseStreamingQueryManagerCommand() {
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
exports.StreamingQueryManagerCommand = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.active !== undefined) {
            writer.uint32(8).bool(message.active);
        }
        if (message.getQuery !== undefined) {
            writer.uint32(18).string(message.getQuery);
        }
        if (message.awaitAnyTermination !== undefined) {
            exports.StreamingQueryManagerCommand_AwaitAnyTerminationCommand.encode(message.awaitAnyTermination, writer.uint32(26).fork()).ldelim();
        }
        if (message.resetTerminated !== undefined) {
            writer.uint32(32).bool(message.resetTerminated);
        }
        if (message.addListener !== undefined) {
            exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.encode(message.addListener, writer.uint32(42).fork())
                .ldelim();
        }
        if (message.removeListener !== undefined) {
            exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.encode(message.removeListener, writer.uint32(50).fork()).ldelim();
        }
        if (message.listListeners !== undefined) {
            writer.uint32(56).bool(message.listListeners);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.awaitAnyTermination = exports.StreamingQueryManagerCommand_AwaitAnyTerminationCommand.decode(reader, reader.uint32());
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
                    message.addListener = exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.removeListener = exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            active: isSet(object.active) ? globalThis.Boolean(object.active) : undefined,
            getQuery: isSet(object.getQuery) ? globalThis.String(object.getQuery) : undefined,
            awaitAnyTermination: isSet(object.awaitAnyTermination)
                ? exports.StreamingQueryManagerCommand_AwaitAnyTerminationCommand.fromJSON(object.awaitAnyTermination)
                : undefined,
            resetTerminated: isSet(object.resetTerminated) ? globalThis.Boolean(object.resetTerminated) : undefined,
            addListener: isSet(object.addListener)
                ? exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromJSON(object.addListener)
                : undefined,
            removeListener: isSet(object.removeListener)
                ? exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromJSON(object.removeListener)
                : undefined,
            listListeners: isSet(object.listListeners) ? globalThis.Boolean(object.listListeners) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.active !== undefined) {
            obj.active = message.active;
        }
        if (message.getQuery !== undefined) {
            obj.getQuery = message.getQuery;
        }
        if (message.awaitAnyTermination !== undefined) {
            obj.awaitAnyTermination = exports.StreamingQueryManagerCommand_AwaitAnyTerminationCommand.toJSON(message.awaitAnyTermination);
        }
        if (message.resetTerminated !== undefined) {
            obj.resetTerminated = message.resetTerminated;
        }
        if (message.addListener !== undefined) {
            obj.addListener = exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.toJSON(message.addListener);
        }
        if (message.removeListener !== undefined) {
            obj.removeListener = exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.toJSON(message.removeListener);
        }
        if (message.listListeners !== undefined) {
            obj.listListeners = message.listListeners;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStreamingQueryManagerCommand();
        message.active = (_a = object.active) !== null && _a !== void 0 ? _a : undefined;
        message.getQuery = (_b = object.getQuery) !== null && _b !== void 0 ? _b : undefined;
        message.awaitAnyTermination = (object.awaitAnyTermination !== undefined && object.awaitAnyTermination !== null)
            ? exports.StreamingQueryManagerCommand_AwaitAnyTerminationCommand.fromPartial(object.awaitAnyTermination)
            : undefined;
        message.resetTerminated = (_c = object.resetTerminated) !== null && _c !== void 0 ? _c : undefined;
        message.addListener = (object.addListener !== undefined && object.addListener !== null)
            ? exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromPartial(object.addListener)
            : undefined;
        message.removeListener = (object.removeListener !== undefined && object.removeListener !== null)
            ? exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromPartial(object.removeListener)
            : undefined;
        message.listListeners = (_d = object.listListeners) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseStreamingQueryManagerCommand_AwaitAnyTerminationCommand() {
    return { timeoutMs: undefined };
}
exports.StreamingQueryManagerCommand_AwaitAnyTerminationCommand = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.timeoutMs !== undefined) {
            writer.uint32(8).int64(message.timeoutMs);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommand_AwaitAnyTerminationCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.timeoutMs = longToNumber(reader.int64());
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
        return { timeoutMs: isSet(object.timeoutMs) ? globalThis.Number(object.timeoutMs) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.timeoutMs !== undefined) {
            obj.timeoutMs = Math.round(message.timeoutMs);
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommand_AwaitAnyTerminationCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryManagerCommand_AwaitAnyTerminationCommand();
        message.timeoutMs = (_a = object.timeoutMs) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStreamingQueryManagerCommand_StreamingQueryListenerCommand() {
    return { listenerPayload: new Uint8Array(0), pythonListenerPayload: undefined, id: "" };
}
exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.listenerPayload.length !== 0) {
            writer.uint32(10).bytes(message.listenerPayload);
        }
        if (message.pythonListenerPayload !== undefined) {
            expressions_1.PythonUDF.encode(message.pythonListenerPayload, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommand_StreamingQueryListenerCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.pythonListenerPayload = expressions_1.PythonUDF.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            listenerPayload: isSet(object.listenerPayload) ? bytesFromBase64(object.listenerPayload) : new Uint8Array(0),
            pythonListenerPayload: isSet(object.pythonListenerPayload)
                ? expressions_1.PythonUDF.fromJSON(object.pythonListenerPayload)
                : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.listenerPayload.length !== 0) {
            obj.listenerPayload = base64FromBytes(message.listenerPayload);
        }
        if (message.pythonListenerPayload !== undefined) {
            obj.pythonListenerPayload = expressions_1.PythonUDF.toJSON(message.pythonListenerPayload);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommand_StreamingQueryListenerCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStreamingQueryManagerCommand_StreamingQueryListenerCommand();
        message.listenerPayload = (_a = object.listenerPayload) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.pythonListenerPayload =
            (object.pythonListenerPayload !== undefined && object.pythonListenerPayload !== null)
                ? expressions_1.PythonUDF.fromPartial(object.pythonListenerPayload)
                : undefined;
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStreamingQueryManagerCommandResult() {
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
exports.StreamingQueryManagerCommandResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.active !== undefined) {
            exports.StreamingQueryManagerCommandResult_ActiveResult.encode(message.active, writer.uint32(10).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.encode(message.query, writer.uint32(18).fork())
                .ldelim();
        }
        if (message.awaitAnyTermination !== undefined) {
            exports.StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.encode(message.awaitAnyTermination, writer.uint32(26).fork()).ldelim();
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
            exports.StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.encode(message.listListeners, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommandResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.active = exports.StreamingQueryManagerCommandResult_ActiveResult.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.query = exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.awaitAnyTermination = exports.StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.decode(reader, reader.uint32());
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
                    message.listListeners = exports.StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.decode(reader, reader.uint32());
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
            active: isSet(object.active)
                ? exports.StreamingQueryManagerCommandResult_ActiveResult.fromJSON(object.active)
                : undefined,
            query: isSet(object.query)
                ? exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.fromJSON(object.query)
                : undefined,
            awaitAnyTermination: isSet(object.awaitAnyTermination)
                ? exports.StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.fromJSON(object.awaitAnyTermination)
                : undefined,
            resetTerminated: isSet(object.resetTerminated) ? globalThis.Boolean(object.resetTerminated) : undefined,
            addListener: isSet(object.addListener) ? globalThis.Boolean(object.addListener) : undefined,
            removeListener: isSet(object.removeListener) ? globalThis.Boolean(object.removeListener) : undefined,
            listListeners: isSet(object.listListeners)
                ? exports.StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.fromJSON(object.listListeners)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.active !== undefined) {
            obj.active = exports.StreamingQueryManagerCommandResult_ActiveResult.toJSON(message.active);
        }
        if (message.query !== undefined) {
            obj.query = exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.toJSON(message.query);
        }
        if (message.awaitAnyTermination !== undefined) {
            obj.awaitAnyTermination = exports.StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.toJSON(message.awaitAnyTermination);
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
            obj.listListeners = exports.StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.toJSON(message.listListeners);
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommandResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStreamingQueryManagerCommandResult();
        message.active = (object.active !== undefined && object.active !== null)
            ? exports.StreamingQueryManagerCommandResult_ActiveResult.fromPartial(object.active)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.fromPartial(object.query)
            : undefined;
        message.awaitAnyTermination = (object.awaitAnyTermination !== undefined && object.awaitAnyTermination !== null)
            ? exports.StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.fromPartial(object.awaitAnyTermination)
            : undefined;
        message.resetTerminated = (_a = object.resetTerminated) !== null && _a !== void 0 ? _a : undefined;
        message.addListener = (_b = object.addListener) !== null && _b !== void 0 ? _b : undefined;
        message.removeListener = (_c = object.removeListener) !== null && _c !== void 0 ? _c : undefined;
        message.listListeners = (object.listListeners !== undefined && object.listListeners !== null)
            ? exports.StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.fromPartial(object.listListeners)
            : undefined;
        return message;
    },
};
function createBaseStreamingQueryManagerCommandResult_ActiveResult() {
    return { activeQueries: [] };
}
exports.StreamingQueryManagerCommandResult_ActiveResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.activeQueries; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommandResult_ActiveResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activeQueries.push(exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.decode(reader, reader.uint32()));
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
            activeQueries: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.activeQueries)
                ? object.activeQueries.map(function (e) { return exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.activeQueries) === null || _a === void 0 ? void 0 : _a.length) {
            obj.activeQueries = message.activeQueries.map(function (e) {
                return exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.toJSON(e);
            });
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommandResult_ActiveResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryManagerCommandResult_ActiveResult();
        message.activeQueries =
            ((_a = object.activeQueries) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseStreamingQueryManagerCommandResult_StreamingQueryInstance() {
    return { id: undefined, name: undefined };
}
exports.StreamingQueryManagerCommandResult_StreamingQueryInstance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== undefined) {
            exports.StreamingQueryInstanceId.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== undefined) {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommandResult_StreamingQueryInstance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = exports.StreamingQueryInstanceId.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? exports.StreamingQueryInstanceId.fromJSON(object.id) : undefined,
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.id !== undefined) {
            obj.id = exports.StreamingQueryInstanceId.toJSON(message.id);
        }
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommandResult_StreamingQueryInstance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryManagerCommandResult_StreamingQueryInstance();
        message.id = (object.id !== undefined && object.id !== null)
            ? exports.StreamingQueryInstanceId.fromPartial(object.id)
            : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStreamingQueryManagerCommandResult_AwaitAnyTerminationResult() {
    return { terminated: false };
}
exports.StreamingQueryManagerCommandResult_AwaitAnyTerminationResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.terminated === true) {
            writer.uint32(8).bool(message.terminated);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommandResult_AwaitAnyTerminationResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { terminated: isSet(object.terminated) ? globalThis.Boolean(object.terminated) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.terminated === true) {
            obj.terminated = message.terminated;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommandResult_AwaitAnyTerminationResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryManagerCommandResult_AwaitAnyTerminationResult();
        message.terminated = (_a = object.terminated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseStreamingQueryManagerCommandResult_StreamingQueryListenerInstance() {
    return { listenerPayload: new Uint8Array(0) };
}
exports.StreamingQueryManagerCommandResult_StreamingQueryListenerInstance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.listenerPayload.length !== 0) {
            writer.uint32(10).bytes(message.listenerPayload);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommandResult_StreamingQueryListenerInstance();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            listenerPayload: isSet(object.listenerPayload) ? bytesFromBase64(object.listenerPayload) : new Uint8Array(0),
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.listenerPayload.length !== 0) {
            obj.listenerPayload = base64FromBytes(message.listenerPayload);
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommandResult_StreamingQueryListenerInstance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryManagerCommandResult_StreamingQueryListenerInstance();
        message.listenerPayload = (_a = object.listenerPayload) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        return message;
    },
};
function createBaseStreamingQueryManagerCommandResult_ListStreamingQueryListenerResult() {
    return { listenerIds: [] };
}
exports.StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.listenerIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamingQueryManagerCommandResult_ListStreamingQueryListenerResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            listenerIds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.listenerIds)
                ? object.listenerIds.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.listenerIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.listenerIds = message.listenerIds;
        }
        return obj;
    },
    create: function (base) {
        return exports.StreamingQueryManagerCommandResult_ListStreamingQueryListenerResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStreamingQueryManagerCommandResult_ListStreamingQueryListenerResult();
        message.listenerIds = ((_a = object.listenerIds) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseGetResourcesCommand() {
    return {};
}
exports.GetResourcesCommand = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetResourcesCommand();
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
        return exports.GetResourcesCommand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseGetResourcesCommand();
        return message;
    },
};
function createBaseGetResourcesCommandResult() {
    return { resources: {} };
}
exports.GetResourcesCommandResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        Object.entries(message.resources).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetResourcesCommandResult_ResourcesEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetResourcesCommandResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    var entry1 = exports.GetResourcesCommandResult_ResourcesEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            resources: isObject(object.resources)
                ? Object.entries(object.resources).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = common_1.ResourceInformation.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.resources) {
            var entries = Object.entries(message.resources);
            if (entries.length > 0) {
                obj.resources = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.resources[k] = common_1.ResourceInformation.toJSON(v);
                });
            }
        }
        return obj;
    },
    create: function (base) {
        return exports.GetResourcesCommandResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetResourcesCommandResult();
        message.resources = Object.entries((_a = object.resources) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = common_1.ResourceInformation.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseGetResourcesCommandResult_ResourcesEntry() {
    return { key: "", value: undefined };
}
exports.GetResourcesCommandResult_ResourcesEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            common_1.ResourceInformation.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetResourcesCommandResult_ResourcesEntry();
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
                    message.value = common_1.ResourceInformation.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? common_1.ResourceInformation.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = common_1.ResourceInformation.toJSON(message.value);
        }
        return obj;
    },
    create: function (base) {
        return exports.GetResourcesCommandResult_ResourcesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetResourcesCommandResult_ResourcesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? common_1.ResourceInformation.fromPartial(object.value)
            : undefined;
        return message;
    },
};
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
