"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCatalogs = exports.SetCurrentCatalog = exports.CurrentCatalog = exports.RefreshByPath = exports.RefreshTable = exports.ClearCache = exports.UncacheTable = exports.CacheTable = exports.IsCached = exports.RecoverPartitions = exports.DropGlobalTempView = exports.DropTempView = exports.CreateTable_OptionsEntry = exports.CreateTable = exports.CreateExternalTable_OptionsEntry = exports.CreateExternalTable = exports.FunctionExists = exports.TableExists = exports.DatabaseExists = exports.GetFunction = exports.GetTable = exports.GetDatabase = exports.ListColumns = exports.ListFunctions = exports.ListTables = exports.ListDatabases = exports.SetCurrentDatabase = exports.CurrentDatabase = exports.Catalog = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
var common_1 = require("./common");
var types_1 = require("./types");
exports.protobufPackage = "spark.connect";
function createBaseCatalog() {
    return {
        currentDatabase: undefined,
        setCurrentDatabase: undefined,
        listDatabases: undefined,
        listTables: undefined,
        listFunctions: undefined,
        listColumns: undefined,
        getDatabase: undefined,
        getTable: undefined,
        getFunction: undefined,
        databaseExists: undefined,
        tableExists: undefined,
        functionExists: undefined,
        createExternalTable: undefined,
        createTable: undefined,
        dropTempView: undefined,
        dropGlobalTempView: undefined,
        recoverPartitions: undefined,
        isCached: undefined,
        cacheTable: undefined,
        uncacheTable: undefined,
        clearCache: undefined,
        refreshTable: undefined,
        refreshByPath: undefined,
        currentCatalog: undefined,
        setCurrentCatalog: undefined,
        listCatalogs: undefined,
    };
}
exports.Catalog = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.currentDatabase !== undefined) {
            exports.CurrentDatabase.encode(message.currentDatabase, writer.uint32(10).fork()).ldelim();
        }
        if (message.setCurrentDatabase !== undefined) {
            exports.SetCurrentDatabase.encode(message.setCurrentDatabase, writer.uint32(18).fork()).ldelim();
        }
        if (message.listDatabases !== undefined) {
            exports.ListDatabases.encode(message.listDatabases, writer.uint32(26).fork()).ldelim();
        }
        if (message.listTables !== undefined) {
            exports.ListTables.encode(message.listTables, writer.uint32(34).fork()).ldelim();
        }
        if (message.listFunctions !== undefined) {
            exports.ListFunctions.encode(message.listFunctions, writer.uint32(42).fork()).ldelim();
        }
        if (message.listColumns !== undefined) {
            exports.ListColumns.encode(message.listColumns, writer.uint32(50).fork()).ldelim();
        }
        if (message.getDatabase !== undefined) {
            exports.GetDatabase.encode(message.getDatabase, writer.uint32(58).fork()).ldelim();
        }
        if (message.getTable !== undefined) {
            exports.GetTable.encode(message.getTable, writer.uint32(66).fork()).ldelim();
        }
        if (message.getFunction !== undefined) {
            exports.GetFunction.encode(message.getFunction, writer.uint32(74).fork()).ldelim();
        }
        if (message.databaseExists !== undefined) {
            exports.DatabaseExists.encode(message.databaseExists, writer.uint32(82).fork()).ldelim();
        }
        if (message.tableExists !== undefined) {
            exports.TableExists.encode(message.tableExists, writer.uint32(90).fork()).ldelim();
        }
        if (message.functionExists !== undefined) {
            exports.FunctionExists.encode(message.functionExists, writer.uint32(98).fork()).ldelim();
        }
        if (message.createExternalTable !== undefined) {
            exports.CreateExternalTable.encode(message.createExternalTable, writer.uint32(106).fork()).ldelim();
        }
        if (message.createTable !== undefined) {
            exports.CreateTable.encode(message.createTable, writer.uint32(114).fork()).ldelim();
        }
        if (message.dropTempView !== undefined) {
            exports.DropTempView.encode(message.dropTempView, writer.uint32(122).fork()).ldelim();
        }
        if (message.dropGlobalTempView !== undefined) {
            exports.DropGlobalTempView.encode(message.dropGlobalTempView, writer.uint32(130).fork()).ldelim();
        }
        if (message.recoverPartitions !== undefined) {
            exports.RecoverPartitions.encode(message.recoverPartitions, writer.uint32(138).fork()).ldelim();
        }
        if (message.isCached !== undefined) {
            exports.IsCached.encode(message.isCached, writer.uint32(146).fork()).ldelim();
        }
        if (message.cacheTable !== undefined) {
            exports.CacheTable.encode(message.cacheTable, writer.uint32(154).fork()).ldelim();
        }
        if (message.uncacheTable !== undefined) {
            exports.UncacheTable.encode(message.uncacheTable, writer.uint32(162).fork()).ldelim();
        }
        if (message.clearCache !== undefined) {
            exports.ClearCache.encode(message.clearCache, writer.uint32(170).fork()).ldelim();
        }
        if (message.refreshTable !== undefined) {
            exports.RefreshTable.encode(message.refreshTable, writer.uint32(178).fork()).ldelim();
        }
        if (message.refreshByPath !== undefined) {
            exports.RefreshByPath.encode(message.refreshByPath, writer.uint32(186).fork()).ldelim();
        }
        if (message.currentCatalog !== undefined) {
            exports.CurrentCatalog.encode(message.currentCatalog, writer.uint32(194).fork()).ldelim();
        }
        if (message.setCurrentCatalog !== undefined) {
            exports.SetCurrentCatalog.encode(message.setCurrentCatalog, writer.uint32(202).fork()).ldelim();
        }
        if (message.listCatalogs !== undefined) {
            exports.ListCatalogs.encode(message.listCatalogs, writer.uint32(210).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCatalog();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.currentDatabase = exports.CurrentDatabase.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.setCurrentDatabase = exports.SetCurrentDatabase.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.listDatabases = exports.ListDatabases.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.listTables = exports.ListTables.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.listFunctions = exports.ListFunctions.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.listColumns = exports.ListColumns.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.getDatabase = exports.GetDatabase.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.getTable = exports.GetTable.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.getFunction = exports.GetFunction.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.databaseExists = exports.DatabaseExists.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.tableExists = exports.TableExists.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.functionExists = exports.FunctionExists.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.createExternalTable = exports.CreateExternalTable.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.createTable = exports.CreateTable.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.dropTempView = exports.DropTempView.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.dropGlobalTempView = exports.DropGlobalTempView.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.recoverPartitions = exports.RecoverPartitions.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.isCached = exports.IsCached.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.cacheTable = exports.CacheTable.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.uncacheTable = exports.UncacheTable.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.clearCache = exports.ClearCache.decode(reader, reader.uint32());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.refreshTable = exports.RefreshTable.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.refreshByPath = exports.RefreshByPath.decode(reader, reader.uint32());
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.currentCatalog = exports.CurrentCatalog.decode(reader, reader.uint32());
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.setCurrentCatalog = exports.SetCurrentCatalog.decode(reader, reader.uint32());
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.listCatalogs = exports.ListCatalogs.decode(reader, reader.uint32());
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
            currentDatabase: isSet(object.currentDatabase) ? exports.CurrentDatabase.fromJSON(object.currentDatabase) : undefined,
            setCurrentDatabase: isSet(object.setCurrentDatabase)
                ? exports.SetCurrentDatabase.fromJSON(object.setCurrentDatabase)
                : undefined,
            listDatabases: isSet(object.listDatabases) ? exports.ListDatabases.fromJSON(object.listDatabases) : undefined,
            listTables: isSet(object.listTables) ? exports.ListTables.fromJSON(object.listTables) : undefined,
            listFunctions: isSet(object.listFunctions) ? exports.ListFunctions.fromJSON(object.listFunctions) : undefined,
            listColumns: isSet(object.listColumns) ? exports.ListColumns.fromJSON(object.listColumns) : undefined,
            getDatabase: isSet(object.getDatabase) ? exports.GetDatabase.fromJSON(object.getDatabase) : undefined,
            getTable: isSet(object.getTable) ? exports.GetTable.fromJSON(object.getTable) : undefined,
            getFunction: isSet(object.getFunction) ? exports.GetFunction.fromJSON(object.getFunction) : undefined,
            databaseExists: isSet(object.databaseExists) ? exports.DatabaseExists.fromJSON(object.databaseExists) : undefined,
            tableExists: isSet(object.tableExists) ? exports.TableExists.fromJSON(object.tableExists) : undefined,
            functionExists: isSet(object.functionExists) ? exports.FunctionExists.fromJSON(object.functionExists) : undefined,
            createExternalTable: isSet(object.createExternalTable)
                ? exports.CreateExternalTable.fromJSON(object.createExternalTable)
                : undefined,
            createTable: isSet(object.createTable) ? exports.CreateTable.fromJSON(object.createTable) : undefined,
            dropTempView: isSet(object.dropTempView) ? exports.DropTempView.fromJSON(object.dropTempView) : undefined,
            dropGlobalTempView: isSet(object.dropGlobalTempView)
                ? exports.DropGlobalTempView.fromJSON(object.dropGlobalTempView)
                : undefined,
            recoverPartitions: isSet(object.recoverPartitions)
                ? exports.RecoverPartitions.fromJSON(object.recoverPartitions)
                : undefined,
            isCached: isSet(object.isCached) ? exports.IsCached.fromJSON(object.isCached) : undefined,
            cacheTable: isSet(object.cacheTable) ? exports.CacheTable.fromJSON(object.cacheTable) : undefined,
            uncacheTable: isSet(object.uncacheTable) ? exports.UncacheTable.fromJSON(object.uncacheTable) : undefined,
            clearCache: isSet(object.clearCache) ? exports.ClearCache.fromJSON(object.clearCache) : undefined,
            refreshTable: isSet(object.refreshTable) ? exports.RefreshTable.fromJSON(object.refreshTable) : undefined,
            refreshByPath: isSet(object.refreshByPath) ? exports.RefreshByPath.fromJSON(object.refreshByPath) : undefined,
            currentCatalog: isSet(object.currentCatalog) ? exports.CurrentCatalog.fromJSON(object.currentCatalog) : undefined,
            setCurrentCatalog: isSet(object.setCurrentCatalog)
                ? exports.SetCurrentCatalog.fromJSON(object.setCurrentCatalog)
                : undefined,
            listCatalogs: isSet(object.listCatalogs) ? exports.ListCatalogs.fromJSON(object.listCatalogs) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.currentDatabase !== undefined) {
            obj.currentDatabase = exports.CurrentDatabase.toJSON(message.currentDatabase);
        }
        if (message.setCurrentDatabase !== undefined) {
            obj.setCurrentDatabase = exports.SetCurrentDatabase.toJSON(message.setCurrentDatabase);
        }
        if (message.listDatabases !== undefined) {
            obj.listDatabases = exports.ListDatabases.toJSON(message.listDatabases);
        }
        if (message.listTables !== undefined) {
            obj.listTables = exports.ListTables.toJSON(message.listTables);
        }
        if (message.listFunctions !== undefined) {
            obj.listFunctions = exports.ListFunctions.toJSON(message.listFunctions);
        }
        if (message.listColumns !== undefined) {
            obj.listColumns = exports.ListColumns.toJSON(message.listColumns);
        }
        if (message.getDatabase !== undefined) {
            obj.getDatabase = exports.GetDatabase.toJSON(message.getDatabase);
        }
        if (message.getTable !== undefined) {
            obj.getTable = exports.GetTable.toJSON(message.getTable);
        }
        if (message.getFunction !== undefined) {
            obj.getFunction = exports.GetFunction.toJSON(message.getFunction);
        }
        if (message.databaseExists !== undefined) {
            obj.databaseExists = exports.DatabaseExists.toJSON(message.databaseExists);
        }
        if (message.tableExists !== undefined) {
            obj.tableExists = exports.TableExists.toJSON(message.tableExists);
        }
        if (message.functionExists !== undefined) {
            obj.functionExists = exports.FunctionExists.toJSON(message.functionExists);
        }
        if (message.createExternalTable !== undefined) {
            obj.createExternalTable = exports.CreateExternalTable.toJSON(message.createExternalTable);
        }
        if (message.createTable !== undefined) {
            obj.createTable = exports.CreateTable.toJSON(message.createTable);
        }
        if (message.dropTempView !== undefined) {
            obj.dropTempView = exports.DropTempView.toJSON(message.dropTempView);
        }
        if (message.dropGlobalTempView !== undefined) {
            obj.dropGlobalTempView = exports.DropGlobalTempView.toJSON(message.dropGlobalTempView);
        }
        if (message.recoverPartitions !== undefined) {
            obj.recoverPartitions = exports.RecoverPartitions.toJSON(message.recoverPartitions);
        }
        if (message.isCached !== undefined) {
            obj.isCached = exports.IsCached.toJSON(message.isCached);
        }
        if (message.cacheTable !== undefined) {
            obj.cacheTable = exports.CacheTable.toJSON(message.cacheTable);
        }
        if (message.uncacheTable !== undefined) {
            obj.uncacheTable = exports.UncacheTable.toJSON(message.uncacheTable);
        }
        if (message.clearCache !== undefined) {
            obj.clearCache = exports.ClearCache.toJSON(message.clearCache);
        }
        if (message.refreshTable !== undefined) {
            obj.refreshTable = exports.RefreshTable.toJSON(message.refreshTable);
        }
        if (message.refreshByPath !== undefined) {
            obj.refreshByPath = exports.RefreshByPath.toJSON(message.refreshByPath);
        }
        if (message.currentCatalog !== undefined) {
            obj.currentCatalog = exports.CurrentCatalog.toJSON(message.currentCatalog);
        }
        if (message.setCurrentCatalog !== undefined) {
            obj.setCurrentCatalog = exports.SetCurrentCatalog.toJSON(message.setCurrentCatalog);
        }
        if (message.listCatalogs !== undefined) {
            obj.listCatalogs = exports.ListCatalogs.toJSON(message.listCatalogs);
        }
        return obj;
    },
    create: function (base) {
        return exports.Catalog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseCatalog();
        message.currentDatabase = (object.currentDatabase !== undefined && object.currentDatabase !== null)
            ? exports.CurrentDatabase.fromPartial(object.currentDatabase)
            : undefined;
        message.setCurrentDatabase = (object.setCurrentDatabase !== undefined && object.setCurrentDatabase !== null)
            ? exports.SetCurrentDatabase.fromPartial(object.setCurrentDatabase)
            : undefined;
        message.listDatabases = (object.listDatabases !== undefined && object.listDatabases !== null)
            ? exports.ListDatabases.fromPartial(object.listDatabases)
            : undefined;
        message.listTables = (object.listTables !== undefined && object.listTables !== null)
            ? exports.ListTables.fromPartial(object.listTables)
            : undefined;
        message.listFunctions = (object.listFunctions !== undefined && object.listFunctions !== null)
            ? exports.ListFunctions.fromPartial(object.listFunctions)
            : undefined;
        message.listColumns = (object.listColumns !== undefined && object.listColumns !== null)
            ? exports.ListColumns.fromPartial(object.listColumns)
            : undefined;
        message.getDatabase = (object.getDatabase !== undefined && object.getDatabase !== null)
            ? exports.GetDatabase.fromPartial(object.getDatabase)
            : undefined;
        message.getTable = (object.getTable !== undefined && object.getTable !== null)
            ? exports.GetTable.fromPartial(object.getTable)
            : undefined;
        message.getFunction = (object.getFunction !== undefined && object.getFunction !== null)
            ? exports.GetFunction.fromPartial(object.getFunction)
            : undefined;
        message.databaseExists = (object.databaseExists !== undefined && object.databaseExists !== null)
            ? exports.DatabaseExists.fromPartial(object.databaseExists)
            : undefined;
        message.tableExists = (object.tableExists !== undefined && object.tableExists !== null)
            ? exports.TableExists.fromPartial(object.tableExists)
            : undefined;
        message.functionExists = (object.functionExists !== undefined && object.functionExists !== null)
            ? exports.FunctionExists.fromPartial(object.functionExists)
            : undefined;
        message.createExternalTable = (object.createExternalTable !== undefined && object.createExternalTable !== null)
            ? exports.CreateExternalTable.fromPartial(object.createExternalTable)
            : undefined;
        message.createTable = (object.createTable !== undefined && object.createTable !== null)
            ? exports.CreateTable.fromPartial(object.createTable)
            : undefined;
        message.dropTempView = (object.dropTempView !== undefined && object.dropTempView !== null)
            ? exports.DropTempView.fromPartial(object.dropTempView)
            : undefined;
        message.dropGlobalTempView = (object.dropGlobalTempView !== undefined && object.dropGlobalTempView !== null)
            ? exports.DropGlobalTempView.fromPartial(object.dropGlobalTempView)
            : undefined;
        message.recoverPartitions = (object.recoverPartitions !== undefined && object.recoverPartitions !== null)
            ? exports.RecoverPartitions.fromPartial(object.recoverPartitions)
            : undefined;
        message.isCached = (object.isCached !== undefined && object.isCached !== null)
            ? exports.IsCached.fromPartial(object.isCached)
            : undefined;
        message.cacheTable = (object.cacheTable !== undefined && object.cacheTable !== null)
            ? exports.CacheTable.fromPartial(object.cacheTable)
            : undefined;
        message.uncacheTable = (object.uncacheTable !== undefined && object.uncacheTable !== null)
            ? exports.UncacheTable.fromPartial(object.uncacheTable)
            : undefined;
        message.clearCache = (object.clearCache !== undefined && object.clearCache !== null)
            ? exports.ClearCache.fromPartial(object.clearCache)
            : undefined;
        message.refreshTable = (object.refreshTable !== undefined && object.refreshTable !== null)
            ? exports.RefreshTable.fromPartial(object.refreshTable)
            : undefined;
        message.refreshByPath = (object.refreshByPath !== undefined && object.refreshByPath !== null)
            ? exports.RefreshByPath.fromPartial(object.refreshByPath)
            : undefined;
        message.currentCatalog = (object.currentCatalog !== undefined && object.currentCatalog !== null)
            ? exports.CurrentCatalog.fromPartial(object.currentCatalog)
            : undefined;
        message.setCurrentCatalog = (object.setCurrentCatalog !== undefined && object.setCurrentCatalog !== null)
            ? exports.SetCurrentCatalog.fromPartial(object.setCurrentCatalog)
            : undefined;
        message.listCatalogs = (object.listCatalogs !== undefined && object.listCatalogs !== null)
            ? exports.ListCatalogs.fromPartial(object.listCatalogs)
            : undefined;
        return message;
    },
};
function createBaseCurrentDatabase() {
    return {};
}
exports.CurrentDatabase = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCurrentDatabase();
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
        return exports.CurrentDatabase.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseCurrentDatabase();
        return message;
    },
};
function createBaseSetCurrentDatabase() {
    return { dbName: "" };
}
exports.SetCurrentDatabase = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.dbName !== "") {
            writer.uint32(10).string(message.dbName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSetCurrentDatabase();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.dbName = reader.string();
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
        return { dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.dbName !== "") {
            obj.dbName = message.dbName;
        }
        return obj;
    },
    create: function (base) {
        return exports.SetCurrentDatabase.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSetCurrentDatabase();
        message.dbName = (_a = object.dbName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListDatabases() {
    return { pattern: undefined };
}
exports.ListDatabases = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pattern !== undefined) {
            writer.uint32(10).string(message.pattern);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListDatabases();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pattern = reader.string();
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
        return { pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pattern !== undefined) {
            obj.pattern = message.pattern;
        }
        return obj;
    },
    create: function (base) {
        return exports.ListDatabases.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListDatabases();
        message.pattern = (_a = object.pattern) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseListTables() {
    return { dbName: undefined, pattern: undefined };
}
exports.ListTables = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.dbName !== undefined) {
            writer.uint32(10).string(message.dbName);
        }
        if (message.pattern !== undefined) {
            writer.uint32(18).string(message.pattern);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListTables();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.dbName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pattern = reader.string();
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
            dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
            pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.dbName !== undefined) {
            obj.dbName = message.dbName;
        }
        if (message.pattern !== undefined) {
            obj.pattern = message.pattern;
        }
        return obj;
    },
    create: function (base) {
        return exports.ListTables.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseListTables();
        message.dbName = (_a = object.dbName) !== null && _a !== void 0 ? _a : undefined;
        message.pattern = (_b = object.pattern) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseListFunctions() {
    return { dbName: undefined, pattern: undefined };
}
exports.ListFunctions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.dbName !== undefined) {
            writer.uint32(10).string(message.dbName);
        }
        if (message.pattern !== undefined) {
            writer.uint32(18).string(message.pattern);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListFunctions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.dbName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pattern = reader.string();
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
            dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
            pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.dbName !== undefined) {
            obj.dbName = message.dbName;
        }
        if (message.pattern !== undefined) {
            obj.pattern = message.pattern;
        }
        return obj;
    },
    create: function (base) {
        return exports.ListFunctions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseListFunctions();
        message.dbName = (_a = object.dbName) !== null && _a !== void 0 ? _a : undefined;
        message.pattern = (_b = object.pattern) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseListColumns() {
    return { tableName: "", dbName: undefined };
}
exports.ListColumns = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.dbName !== undefined) {
            writer.uint32(18).string(message.dbName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListColumns();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.dbName = reader.string();
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
            dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        if (message.dbName !== undefined) {
            obj.dbName = message.dbName;
        }
        return obj;
    },
    create: function (base) {
        return exports.ListColumns.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseListColumns();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.dbName = (_b = object.dbName) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseGetDatabase() {
    return { dbName: "" };
}
exports.GetDatabase = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.dbName !== "") {
            writer.uint32(10).string(message.dbName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetDatabase();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.dbName = reader.string();
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
        return { dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.dbName !== "") {
            obj.dbName = message.dbName;
        }
        return obj;
    },
    create: function (base) {
        return exports.GetDatabase.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetDatabase();
        message.dbName = (_a = object.dbName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTable() {
    return { tableName: "", dbName: undefined };
}
exports.GetTable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.dbName !== undefined) {
            writer.uint32(18).string(message.dbName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTable();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.dbName = reader.string();
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
            dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        if (message.dbName !== undefined) {
            obj.dbName = message.dbName;
        }
        return obj;
    },
    create: function (base) {
        return exports.GetTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetTable();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.dbName = (_b = object.dbName) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseGetFunction() {
    return { functionName: "", dbName: undefined };
}
exports.GetFunction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.functionName !== "") {
            writer.uint32(10).string(message.functionName);
        }
        if (message.dbName !== undefined) {
            writer.uint32(18).string(message.dbName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetFunction();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.dbName = reader.string();
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
            functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
            dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.functionName !== "") {
            obj.functionName = message.functionName;
        }
        if (message.dbName !== undefined) {
            obj.dbName = message.dbName;
        }
        return obj;
    },
    create: function (base) {
        return exports.GetFunction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetFunction();
        message.functionName = (_a = object.functionName) !== null && _a !== void 0 ? _a : "";
        message.dbName = (_b = object.dbName) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseDatabaseExists() {
    return { dbName: "" };
}
exports.DatabaseExists = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.dbName !== "") {
            writer.uint32(10).string(message.dbName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDatabaseExists();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.dbName = reader.string();
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
        return { dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.dbName !== "") {
            obj.dbName = message.dbName;
        }
        return obj;
    },
    create: function (base) {
        return exports.DatabaseExists.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDatabaseExists();
        message.dbName = (_a = object.dbName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseTableExists() {
    return { tableName: "", dbName: undefined };
}
exports.TableExists = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.dbName !== undefined) {
            writer.uint32(18).string(message.dbName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTableExists();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.dbName = reader.string();
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
            dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        if (message.dbName !== undefined) {
            obj.dbName = message.dbName;
        }
        return obj;
    },
    create: function (base) {
        return exports.TableExists.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTableExists();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.dbName = (_b = object.dbName) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseFunctionExists() {
    return { functionName: "", dbName: undefined };
}
exports.FunctionExists = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.functionName !== "") {
            writer.uint32(10).string(message.functionName);
        }
        if (message.dbName !== undefined) {
            writer.uint32(18).string(message.dbName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFunctionExists();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.dbName = reader.string();
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
            functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
            dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.functionName !== "") {
            obj.functionName = message.functionName;
        }
        if (message.dbName !== undefined) {
            obj.dbName = message.dbName;
        }
        return obj;
    },
    create: function (base) {
        return exports.FunctionExists.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFunctionExists();
        message.functionName = (_a = object.functionName) !== null && _a !== void 0 ? _a : "";
        message.dbName = (_b = object.dbName) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseCreateExternalTable() {
    return { tableName: "", path: undefined, source: undefined, schema: undefined, options: {} };
}
exports.CreateExternalTable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.path !== undefined) {
            writer.uint32(18).string(message.path);
        }
        if (message.source !== undefined) {
            writer.uint32(26).string(message.source);
        }
        if (message.schema !== undefined) {
            types_1.DataType.encode(message.schema, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.CreateExternalTable_OptionsEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateExternalTable();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.source = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.schema = types_1.DataType.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    var entry5 = exports.CreateExternalTable_OptionsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.options[entry5.key] = entry5.value;
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
            tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
            path: isSet(object.path) ? globalThis.String(object.path) : undefined,
            source: isSet(object.source) ? globalThis.String(object.source) : undefined,
            schema: isSet(object.schema) ? types_1.DataType.fromJSON(object.schema) : undefined,
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
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        if (message.path !== undefined) {
            obj.path = message.path;
        }
        if (message.source !== undefined) {
            obj.source = message.source;
        }
        if (message.schema !== undefined) {
            obj.schema = types_1.DataType.toJSON(message.schema);
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
        return exports.CreateExternalTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCreateExternalTable();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : undefined;
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : undefined;
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? types_1.DataType.fromPartial(object.schema)
            : undefined;
        message.options = Object.entries((_d = object.options) !== null && _d !== void 0 ? _d : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseCreateExternalTable_OptionsEntry() {
    return { key: "", value: "" };
}
exports.CreateExternalTable_OptionsEntry = {
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
        var message = createBaseCreateExternalTable_OptionsEntry();
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
        return exports.CreateExternalTable_OptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateExternalTable_OptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateTable() {
    return { tableName: "", path: undefined, source: undefined, description: undefined, schema: undefined, options: {} };
}
exports.CreateTable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.path !== undefined) {
            writer.uint32(18).string(message.path);
        }
        if (message.source !== undefined) {
            writer.uint32(26).string(message.source);
        }
        if (message.description !== undefined) {
            writer.uint32(34).string(message.description);
        }
        if (message.schema !== undefined) {
            types_1.DataType.encode(message.schema, writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.CreateTable_OptionsEntry.encode({ key: key, value: value }, writer.uint32(50).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateTable();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.source = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.schema = types_1.DataType.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    var entry6 = exports.CreateTable_OptionsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.options[entry6.key] = entry6.value;
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
            tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
            path: isSet(object.path) ? globalThis.String(object.path) : undefined,
            source: isSet(object.source) ? globalThis.String(object.source) : undefined,
            description: isSet(object.description) ? globalThis.String(object.description) : undefined,
            schema: isSet(object.schema) ? types_1.DataType.fromJSON(object.schema) : undefined,
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
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        if (message.path !== undefined) {
            obj.path = message.path;
        }
        if (message.source !== undefined) {
            obj.source = message.source;
        }
        if (message.description !== undefined) {
            obj.description = message.description;
        }
        if (message.schema !== undefined) {
            obj.schema = types_1.DataType.toJSON(message.schema);
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
        return exports.CreateTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseCreateTable();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : undefined;
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : undefined;
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : undefined;
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? types_1.DataType.fromPartial(object.schema)
            : undefined;
        message.options = Object.entries((_e = object.options) !== null && _e !== void 0 ? _e : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseCreateTable_OptionsEntry() {
    return { key: "", value: "" };
}
exports.CreateTable_OptionsEntry = {
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
        var message = createBaseCreateTable_OptionsEntry();
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
        return exports.CreateTable_OptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateTable_OptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDropTempView() {
    return { viewName: "" };
}
exports.DropTempView = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.viewName !== "") {
            writer.uint32(10).string(message.viewName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDropTempView();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.viewName = reader.string();
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
        return { viewName: isSet(object.viewName) ? globalThis.String(object.viewName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.viewName !== "") {
            obj.viewName = message.viewName;
        }
        return obj;
    },
    create: function (base) {
        return exports.DropTempView.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDropTempView();
        message.viewName = (_a = object.viewName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDropGlobalTempView() {
    return { viewName: "" };
}
exports.DropGlobalTempView = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.viewName !== "") {
            writer.uint32(10).string(message.viewName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDropGlobalTempView();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.viewName = reader.string();
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
        return { viewName: isSet(object.viewName) ? globalThis.String(object.viewName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.viewName !== "") {
            obj.viewName = message.viewName;
        }
        return obj;
    },
    create: function (base) {
        return exports.DropGlobalTempView.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDropGlobalTempView();
        message.viewName = (_a = object.viewName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRecoverPartitions() {
    return { tableName: "" };
}
exports.RecoverPartitions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecoverPartitions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tableName = reader.string();
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
        return { tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        return obj;
    },
    create: function (base) {
        return exports.RecoverPartitions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRecoverPartitions();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseIsCached() {
    return { tableName: "" };
}
exports.IsCached = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIsCached();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tableName = reader.string();
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
        return { tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        return obj;
    },
    create: function (base) {
        return exports.IsCached.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseIsCached();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCacheTable() {
    return { tableName: "", storageLevel: undefined };
}
exports.CacheTable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.storageLevel !== undefined) {
            common_1.StorageLevel.encode(message.storageLevel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCacheTable();
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
            tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
            storageLevel: isSet(object.storageLevel) ? common_1.StorageLevel.fromJSON(object.storageLevel) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        if (message.storageLevel !== undefined) {
            obj.storageLevel = common_1.StorageLevel.toJSON(message.storageLevel);
        }
        return obj;
    },
    create: function (base) {
        return exports.CacheTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCacheTable();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.storageLevel = (object.storageLevel !== undefined && object.storageLevel !== null)
            ? common_1.StorageLevel.fromPartial(object.storageLevel)
            : undefined;
        return message;
    },
};
function createBaseUncacheTable() {
    return { tableName: "" };
}
exports.UncacheTable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUncacheTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tableName = reader.string();
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
        return { tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        return obj;
    },
    create: function (base) {
        return exports.UncacheTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUncacheTable();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseClearCache() {
    return {};
}
exports.ClearCache = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClearCache();
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
        return exports.ClearCache.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseClearCache();
        return message;
    },
};
function createBaseRefreshTable() {
    return { tableName: "" };
}
exports.RefreshTable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRefreshTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tableName = reader.string();
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
        return { tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tableName !== "") {
            obj.tableName = message.tableName;
        }
        return obj;
    },
    create: function (base) {
        return exports.RefreshTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRefreshTable();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRefreshByPath() {
    return { path: "" };
}
exports.RefreshByPath = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRefreshByPath();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.path = reader.string();
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
        return { path: isSet(object.path) ? globalThis.String(object.path) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.path !== "") {
            obj.path = message.path;
        }
        return obj;
    },
    create: function (base) {
        return exports.RefreshByPath.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRefreshByPath();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCurrentCatalog() {
    return {};
}
exports.CurrentCatalog = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCurrentCatalog();
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
        return exports.CurrentCatalog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseCurrentCatalog();
        return message;
    },
};
function createBaseSetCurrentCatalog() {
    return { catalogName: "" };
}
exports.SetCurrentCatalog = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.catalogName !== "") {
            writer.uint32(10).string(message.catalogName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSetCurrentCatalog();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.catalogName = reader.string();
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
        return { catalogName: isSet(object.catalogName) ? globalThis.String(object.catalogName) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.catalogName !== "") {
            obj.catalogName = message.catalogName;
        }
        return obj;
    },
    create: function (base) {
        return exports.SetCurrentCatalog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSetCurrentCatalog();
        message.catalogName = (_a = object.catalogName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListCatalogs() {
    return { pattern: undefined };
}
exports.ListCatalogs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pattern !== undefined) {
            writer.uint32(10).string(message.pattern);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListCatalogs();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pattern = reader.string();
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
        return { pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pattern !== undefined) {
            obj.pattern = message.pattern;
        }
        return obj;
    },
    create: function (base) {
        return exports.ListCatalogs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListCatalogs();
        message.pattern = (_a = object.pattern) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
