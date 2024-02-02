/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { StorageLevel } from "./common";
import { DataType } from "./types";

export const protobufPackage = "spark.connect";

/** Catalog messages are marked as unstable. */
export interface Catalog {
  currentDatabase?: CurrentDatabase | undefined;
  setCurrentDatabase?: SetCurrentDatabase | undefined;
  listDatabases?: ListDatabases | undefined;
  listTables?: ListTables | undefined;
  listFunctions?: ListFunctions | undefined;
  listColumns?: ListColumns | undefined;
  getDatabase?: GetDatabase | undefined;
  getTable?: GetTable | undefined;
  getFunction?: GetFunction | undefined;
  databaseExists?: DatabaseExists | undefined;
  tableExists?: TableExists | undefined;
  functionExists?: FunctionExists | undefined;
  createExternalTable?: CreateExternalTable | undefined;
  createTable?: CreateTable | undefined;
  dropTempView?: DropTempView | undefined;
  dropGlobalTempView?: DropGlobalTempView | undefined;
  recoverPartitions?: RecoverPartitions | undefined;
  isCached?: IsCached | undefined;
  cacheTable?: CacheTable | undefined;
  uncacheTable?: UncacheTable | undefined;
  clearCache?: ClearCache | undefined;
  refreshTable?: RefreshTable | undefined;
  refreshByPath?: RefreshByPath | undefined;
  currentCatalog?: CurrentCatalog | undefined;
  setCurrentCatalog?: SetCurrentCatalog | undefined;
  listCatalogs?: ListCatalogs | undefined;
}

/** See `spark.catalog.currentDatabase` */
export interface CurrentDatabase {
}

/** See `spark.catalog.setCurrentDatabase` */
export interface SetCurrentDatabase {
  /** (Required) */
  dbName: string;
}

/** See `spark.catalog.listDatabases` */
export interface ListDatabases {
  /** (Optional) The pattern that the database name needs to match */
  pattern?: string | undefined;
}

/** See `spark.catalog.listTables` */
export interface ListTables {
  /** (Optional) */
  dbName?:
    | string
    | undefined;
  /** (Optional) The pattern that the table name needs to match */
  pattern?: string | undefined;
}

/** See `spark.catalog.listFunctions` */
export interface ListFunctions {
  /** (Optional) */
  dbName?:
    | string
    | undefined;
  /** (Optional) The pattern that the function name needs to match */
  pattern?: string | undefined;
}

/** See `spark.catalog.listColumns` */
export interface ListColumns {
  /** (Required) */
  tableName: string;
  /** (Optional) */
  dbName?: string | undefined;
}

/** See `spark.catalog.getDatabase` */
export interface GetDatabase {
  /** (Required) */
  dbName: string;
}

/** See `spark.catalog.getTable` */
export interface GetTable {
  /** (Required) */
  tableName: string;
  /** (Optional) */
  dbName?: string | undefined;
}

/** See `spark.catalog.getFunction` */
export interface GetFunction {
  /** (Required) */
  functionName: string;
  /** (Optional) */
  dbName?: string | undefined;
}

/** See `spark.catalog.databaseExists` */
export interface DatabaseExists {
  /** (Required) */
  dbName: string;
}

/** See `spark.catalog.tableExists` */
export interface TableExists {
  /** (Required) */
  tableName: string;
  /** (Optional) */
  dbName?: string | undefined;
}

/** See `spark.catalog.functionExists` */
export interface FunctionExists {
  /** (Required) */
  functionName: string;
  /** (Optional) */
  dbName?: string | undefined;
}

/** See `spark.catalog.createExternalTable` */
export interface CreateExternalTable {
  /** (Required) */
  tableName: string;
  /** (Optional) */
  path?:
    | string
    | undefined;
  /** (Optional) */
  source?:
    | string
    | undefined;
  /** (Optional) */
  schema?:
    | DataType
    | undefined;
  /**
   * Options could be empty for valid data source format.
   * The map key is case insensitive.
   */
  options: { [key: string]: string };
}

export interface CreateExternalTable_OptionsEntry {
  key: string;
  value: string;
}

/** See `spark.catalog.createTable` */
export interface CreateTable {
  /** (Required) */
  tableName: string;
  /** (Optional) */
  path?:
    | string
    | undefined;
  /** (Optional) */
  source?:
    | string
    | undefined;
  /** (Optional) */
  description?:
    | string
    | undefined;
  /** (Optional) */
  schema?:
    | DataType
    | undefined;
  /**
   * Options could be empty for valid data source format.
   * The map key is case insensitive.
   */
  options: { [key: string]: string };
}

export interface CreateTable_OptionsEntry {
  key: string;
  value: string;
}

/** See `spark.catalog.dropTempView` */
export interface DropTempView {
  /** (Required) */
  viewName: string;
}

/** See `spark.catalog.dropGlobalTempView` */
export interface DropGlobalTempView {
  /** (Required) */
  viewName: string;
}

/** See `spark.catalog.recoverPartitions` */
export interface RecoverPartitions {
  /** (Required) */
  tableName: string;
}

/** See `spark.catalog.isCached` */
export interface IsCached {
  /** (Required) */
  tableName: string;
}

/** See `spark.catalog.cacheTable` */
export interface CacheTable {
  /** (Required) */
  tableName: string;
  /** (Optional) */
  storageLevel?: StorageLevel | undefined;
}

/** See `spark.catalog.uncacheTable` */
export interface UncacheTable {
  /** (Required) */
  tableName: string;
}

/** See `spark.catalog.clearCache` */
export interface ClearCache {
}

/** See `spark.catalog.refreshTable` */
export interface RefreshTable {
  /** (Required) */
  tableName: string;
}

/** See `spark.catalog.refreshByPath` */
export interface RefreshByPath {
  /** (Required) */
  path: string;
}

/** See `spark.catalog.currentCatalog` */
export interface CurrentCatalog {
}

/** See `spark.catalog.setCurrentCatalog` */
export interface SetCurrentCatalog {
  /** (Required) */
  catalogName: string;
}

/** See `spark.catalog.listCatalogs` */
export interface ListCatalogs {
  /** (Optional) The pattern that the catalog name needs to match */
  pattern?: string | undefined;
}

function createBaseCatalog(): Catalog {
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

export const Catalog = {
  encode(message: Catalog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentDatabase !== undefined) {
      CurrentDatabase.encode(message.currentDatabase, writer.uint32(10).fork()).ldelim();
    }
    if (message.setCurrentDatabase !== undefined) {
      SetCurrentDatabase.encode(message.setCurrentDatabase, writer.uint32(18).fork()).ldelim();
    }
    if (message.listDatabases !== undefined) {
      ListDatabases.encode(message.listDatabases, writer.uint32(26).fork()).ldelim();
    }
    if (message.listTables !== undefined) {
      ListTables.encode(message.listTables, writer.uint32(34).fork()).ldelim();
    }
    if (message.listFunctions !== undefined) {
      ListFunctions.encode(message.listFunctions, writer.uint32(42).fork()).ldelim();
    }
    if (message.listColumns !== undefined) {
      ListColumns.encode(message.listColumns, writer.uint32(50).fork()).ldelim();
    }
    if (message.getDatabase !== undefined) {
      GetDatabase.encode(message.getDatabase, writer.uint32(58).fork()).ldelim();
    }
    if (message.getTable !== undefined) {
      GetTable.encode(message.getTable, writer.uint32(66).fork()).ldelim();
    }
    if (message.getFunction !== undefined) {
      GetFunction.encode(message.getFunction, writer.uint32(74).fork()).ldelim();
    }
    if (message.databaseExists !== undefined) {
      DatabaseExists.encode(message.databaseExists, writer.uint32(82).fork()).ldelim();
    }
    if (message.tableExists !== undefined) {
      TableExists.encode(message.tableExists, writer.uint32(90).fork()).ldelim();
    }
    if (message.functionExists !== undefined) {
      FunctionExists.encode(message.functionExists, writer.uint32(98).fork()).ldelim();
    }
    if (message.createExternalTable !== undefined) {
      CreateExternalTable.encode(message.createExternalTable, writer.uint32(106).fork()).ldelim();
    }
    if (message.createTable !== undefined) {
      CreateTable.encode(message.createTable, writer.uint32(114).fork()).ldelim();
    }
    if (message.dropTempView !== undefined) {
      DropTempView.encode(message.dropTempView, writer.uint32(122).fork()).ldelim();
    }
    if (message.dropGlobalTempView !== undefined) {
      DropGlobalTempView.encode(message.dropGlobalTempView, writer.uint32(130).fork()).ldelim();
    }
    if (message.recoverPartitions !== undefined) {
      RecoverPartitions.encode(message.recoverPartitions, writer.uint32(138).fork()).ldelim();
    }
    if (message.isCached !== undefined) {
      IsCached.encode(message.isCached, writer.uint32(146).fork()).ldelim();
    }
    if (message.cacheTable !== undefined) {
      CacheTable.encode(message.cacheTable, writer.uint32(154).fork()).ldelim();
    }
    if (message.uncacheTable !== undefined) {
      UncacheTable.encode(message.uncacheTable, writer.uint32(162).fork()).ldelim();
    }
    if (message.clearCache !== undefined) {
      ClearCache.encode(message.clearCache, writer.uint32(170).fork()).ldelim();
    }
    if (message.refreshTable !== undefined) {
      RefreshTable.encode(message.refreshTable, writer.uint32(178).fork()).ldelim();
    }
    if (message.refreshByPath !== undefined) {
      RefreshByPath.encode(message.refreshByPath, writer.uint32(186).fork()).ldelim();
    }
    if (message.currentCatalog !== undefined) {
      CurrentCatalog.encode(message.currentCatalog, writer.uint32(194).fork()).ldelim();
    }
    if (message.setCurrentCatalog !== undefined) {
      SetCurrentCatalog.encode(message.setCurrentCatalog, writer.uint32(202).fork()).ldelim();
    }
    if (message.listCatalogs !== undefined) {
      ListCatalogs.encode(message.listCatalogs, writer.uint32(210).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Catalog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCatalog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currentDatabase = CurrentDatabase.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.setCurrentDatabase = SetCurrentDatabase.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.listDatabases = ListDatabases.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.listTables = ListTables.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.listFunctions = ListFunctions.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.listColumns = ListColumns.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.getDatabase = GetDatabase.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.getTable = GetTable.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.getFunction = GetFunction.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.databaseExists = DatabaseExists.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tableExists = TableExists.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.functionExists = FunctionExists.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.createExternalTable = CreateExternalTable.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.createTable = CreateTable.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.dropTempView = DropTempView.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.dropGlobalTempView = DropGlobalTempView.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.recoverPartitions = RecoverPartitions.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.isCached = IsCached.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.cacheTable = CacheTable.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.uncacheTable = UncacheTable.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.clearCache = ClearCache.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.refreshTable = RefreshTable.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.refreshByPath = RefreshByPath.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.currentCatalog = CurrentCatalog.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.setCurrentCatalog = SetCurrentCatalog.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.listCatalogs = ListCatalogs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Catalog {
    return {
      currentDatabase: isSet(object.currentDatabase) ? CurrentDatabase.fromJSON(object.currentDatabase) : undefined,
      setCurrentDatabase: isSet(object.setCurrentDatabase)
        ? SetCurrentDatabase.fromJSON(object.setCurrentDatabase)
        : undefined,
      listDatabases: isSet(object.listDatabases) ? ListDatabases.fromJSON(object.listDatabases) : undefined,
      listTables: isSet(object.listTables) ? ListTables.fromJSON(object.listTables) : undefined,
      listFunctions: isSet(object.listFunctions) ? ListFunctions.fromJSON(object.listFunctions) : undefined,
      listColumns: isSet(object.listColumns) ? ListColumns.fromJSON(object.listColumns) : undefined,
      getDatabase: isSet(object.getDatabase) ? GetDatabase.fromJSON(object.getDatabase) : undefined,
      getTable: isSet(object.getTable) ? GetTable.fromJSON(object.getTable) : undefined,
      getFunction: isSet(object.getFunction) ? GetFunction.fromJSON(object.getFunction) : undefined,
      databaseExists: isSet(object.databaseExists) ? DatabaseExists.fromJSON(object.databaseExists) : undefined,
      tableExists: isSet(object.tableExists) ? TableExists.fromJSON(object.tableExists) : undefined,
      functionExists: isSet(object.functionExists) ? FunctionExists.fromJSON(object.functionExists) : undefined,
      createExternalTable: isSet(object.createExternalTable)
        ? CreateExternalTable.fromJSON(object.createExternalTable)
        : undefined,
      createTable: isSet(object.createTable) ? CreateTable.fromJSON(object.createTable) : undefined,
      dropTempView: isSet(object.dropTempView) ? DropTempView.fromJSON(object.dropTempView) : undefined,
      dropGlobalTempView: isSet(object.dropGlobalTempView)
        ? DropGlobalTempView.fromJSON(object.dropGlobalTempView)
        : undefined,
      recoverPartitions: isSet(object.recoverPartitions)
        ? RecoverPartitions.fromJSON(object.recoverPartitions)
        : undefined,
      isCached: isSet(object.isCached) ? IsCached.fromJSON(object.isCached) : undefined,
      cacheTable: isSet(object.cacheTable) ? CacheTable.fromJSON(object.cacheTable) : undefined,
      uncacheTable: isSet(object.uncacheTable) ? UncacheTable.fromJSON(object.uncacheTable) : undefined,
      clearCache: isSet(object.clearCache) ? ClearCache.fromJSON(object.clearCache) : undefined,
      refreshTable: isSet(object.refreshTable) ? RefreshTable.fromJSON(object.refreshTable) : undefined,
      refreshByPath: isSet(object.refreshByPath) ? RefreshByPath.fromJSON(object.refreshByPath) : undefined,
      currentCatalog: isSet(object.currentCatalog) ? CurrentCatalog.fromJSON(object.currentCatalog) : undefined,
      setCurrentCatalog: isSet(object.setCurrentCatalog)
        ? SetCurrentCatalog.fromJSON(object.setCurrentCatalog)
        : undefined,
      listCatalogs: isSet(object.listCatalogs) ? ListCatalogs.fromJSON(object.listCatalogs) : undefined,
    };
  },

  toJSON(message: Catalog): unknown {
    const obj: any = {};
    if (message.currentDatabase !== undefined) {
      obj.currentDatabase = CurrentDatabase.toJSON(message.currentDatabase);
    }
    if (message.setCurrentDatabase !== undefined) {
      obj.setCurrentDatabase = SetCurrentDatabase.toJSON(message.setCurrentDatabase);
    }
    if (message.listDatabases !== undefined) {
      obj.listDatabases = ListDatabases.toJSON(message.listDatabases);
    }
    if (message.listTables !== undefined) {
      obj.listTables = ListTables.toJSON(message.listTables);
    }
    if (message.listFunctions !== undefined) {
      obj.listFunctions = ListFunctions.toJSON(message.listFunctions);
    }
    if (message.listColumns !== undefined) {
      obj.listColumns = ListColumns.toJSON(message.listColumns);
    }
    if (message.getDatabase !== undefined) {
      obj.getDatabase = GetDatabase.toJSON(message.getDatabase);
    }
    if (message.getTable !== undefined) {
      obj.getTable = GetTable.toJSON(message.getTable);
    }
    if (message.getFunction !== undefined) {
      obj.getFunction = GetFunction.toJSON(message.getFunction);
    }
    if (message.databaseExists !== undefined) {
      obj.databaseExists = DatabaseExists.toJSON(message.databaseExists);
    }
    if (message.tableExists !== undefined) {
      obj.tableExists = TableExists.toJSON(message.tableExists);
    }
    if (message.functionExists !== undefined) {
      obj.functionExists = FunctionExists.toJSON(message.functionExists);
    }
    if (message.createExternalTable !== undefined) {
      obj.createExternalTable = CreateExternalTable.toJSON(message.createExternalTable);
    }
    if (message.createTable !== undefined) {
      obj.createTable = CreateTable.toJSON(message.createTable);
    }
    if (message.dropTempView !== undefined) {
      obj.dropTempView = DropTempView.toJSON(message.dropTempView);
    }
    if (message.dropGlobalTempView !== undefined) {
      obj.dropGlobalTempView = DropGlobalTempView.toJSON(message.dropGlobalTempView);
    }
    if (message.recoverPartitions !== undefined) {
      obj.recoverPartitions = RecoverPartitions.toJSON(message.recoverPartitions);
    }
    if (message.isCached !== undefined) {
      obj.isCached = IsCached.toJSON(message.isCached);
    }
    if (message.cacheTable !== undefined) {
      obj.cacheTable = CacheTable.toJSON(message.cacheTable);
    }
    if (message.uncacheTable !== undefined) {
      obj.uncacheTable = UncacheTable.toJSON(message.uncacheTable);
    }
    if (message.clearCache !== undefined) {
      obj.clearCache = ClearCache.toJSON(message.clearCache);
    }
    if (message.refreshTable !== undefined) {
      obj.refreshTable = RefreshTable.toJSON(message.refreshTable);
    }
    if (message.refreshByPath !== undefined) {
      obj.refreshByPath = RefreshByPath.toJSON(message.refreshByPath);
    }
    if (message.currentCatalog !== undefined) {
      obj.currentCatalog = CurrentCatalog.toJSON(message.currentCatalog);
    }
    if (message.setCurrentCatalog !== undefined) {
      obj.setCurrentCatalog = SetCurrentCatalog.toJSON(message.setCurrentCatalog);
    }
    if (message.listCatalogs !== undefined) {
      obj.listCatalogs = ListCatalogs.toJSON(message.listCatalogs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Catalog>, I>>(base?: I): Catalog {
    return Catalog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Catalog>, I>>(object: I): Catalog {
    const message = createBaseCatalog();
    message.currentDatabase = (object.currentDatabase !== undefined && object.currentDatabase !== null)
      ? CurrentDatabase.fromPartial(object.currentDatabase)
      : undefined;
    message.setCurrentDatabase = (object.setCurrentDatabase !== undefined && object.setCurrentDatabase !== null)
      ? SetCurrentDatabase.fromPartial(object.setCurrentDatabase)
      : undefined;
    message.listDatabases = (object.listDatabases !== undefined && object.listDatabases !== null)
      ? ListDatabases.fromPartial(object.listDatabases)
      : undefined;
    message.listTables = (object.listTables !== undefined && object.listTables !== null)
      ? ListTables.fromPartial(object.listTables)
      : undefined;
    message.listFunctions = (object.listFunctions !== undefined && object.listFunctions !== null)
      ? ListFunctions.fromPartial(object.listFunctions)
      : undefined;
    message.listColumns = (object.listColumns !== undefined && object.listColumns !== null)
      ? ListColumns.fromPartial(object.listColumns)
      : undefined;
    message.getDatabase = (object.getDatabase !== undefined && object.getDatabase !== null)
      ? GetDatabase.fromPartial(object.getDatabase)
      : undefined;
    message.getTable = (object.getTable !== undefined && object.getTable !== null)
      ? GetTable.fromPartial(object.getTable)
      : undefined;
    message.getFunction = (object.getFunction !== undefined && object.getFunction !== null)
      ? GetFunction.fromPartial(object.getFunction)
      : undefined;
    message.databaseExists = (object.databaseExists !== undefined && object.databaseExists !== null)
      ? DatabaseExists.fromPartial(object.databaseExists)
      : undefined;
    message.tableExists = (object.tableExists !== undefined && object.tableExists !== null)
      ? TableExists.fromPartial(object.tableExists)
      : undefined;
    message.functionExists = (object.functionExists !== undefined && object.functionExists !== null)
      ? FunctionExists.fromPartial(object.functionExists)
      : undefined;
    message.createExternalTable = (object.createExternalTable !== undefined && object.createExternalTable !== null)
      ? CreateExternalTable.fromPartial(object.createExternalTable)
      : undefined;
    message.createTable = (object.createTable !== undefined && object.createTable !== null)
      ? CreateTable.fromPartial(object.createTable)
      : undefined;
    message.dropTempView = (object.dropTempView !== undefined && object.dropTempView !== null)
      ? DropTempView.fromPartial(object.dropTempView)
      : undefined;
    message.dropGlobalTempView = (object.dropGlobalTempView !== undefined && object.dropGlobalTempView !== null)
      ? DropGlobalTempView.fromPartial(object.dropGlobalTempView)
      : undefined;
    message.recoverPartitions = (object.recoverPartitions !== undefined && object.recoverPartitions !== null)
      ? RecoverPartitions.fromPartial(object.recoverPartitions)
      : undefined;
    message.isCached = (object.isCached !== undefined && object.isCached !== null)
      ? IsCached.fromPartial(object.isCached)
      : undefined;
    message.cacheTable = (object.cacheTable !== undefined && object.cacheTable !== null)
      ? CacheTable.fromPartial(object.cacheTable)
      : undefined;
    message.uncacheTable = (object.uncacheTable !== undefined && object.uncacheTable !== null)
      ? UncacheTable.fromPartial(object.uncacheTable)
      : undefined;
    message.clearCache = (object.clearCache !== undefined && object.clearCache !== null)
      ? ClearCache.fromPartial(object.clearCache)
      : undefined;
    message.refreshTable = (object.refreshTable !== undefined && object.refreshTable !== null)
      ? RefreshTable.fromPartial(object.refreshTable)
      : undefined;
    message.refreshByPath = (object.refreshByPath !== undefined && object.refreshByPath !== null)
      ? RefreshByPath.fromPartial(object.refreshByPath)
      : undefined;
    message.currentCatalog = (object.currentCatalog !== undefined && object.currentCatalog !== null)
      ? CurrentCatalog.fromPartial(object.currentCatalog)
      : undefined;
    message.setCurrentCatalog = (object.setCurrentCatalog !== undefined && object.setCurrentCatalog !== null)
      ? SetCurrentCatalog.fromPartial(object.setCurrentCatalog)
      : undefined;
    message.listCatalogs = (object.listCatalogs !== undefined && object.listCatalogs !== null)
      ? ListCatalogs.fromPartial(object.listCatalogs)
      : undefined;
    return message;
  },
};

function createBaseCurrentDatabase(): CurrentDatabase {
  return {};
}

export const CurrentDatabase = {
  encode(_: CurrentDatabase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentDatabase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentDatabase();
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

  fromJSON(_: any): CurrentDatabase {
    return {};
  },

  toJSON(_: CurrentDatabase): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentDatabase>, I>>(base?: I): CurrentDatabase {
    return CurrentDatabase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrentDatabase>, I>>(_: I): CurrentDatabase {
    const message = createBaseCurrentDatabase();
    return message;
  },
};

function createBaseSetCurrentDatabase(): SetCurrentDatabase {
  return { dbName: "" };
}

export const SetCurrentDatabase = {
  encode(message: SetCurrentDatabase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dbName !== "") {
      writer.uint32(10).string(message.dbName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCurrentDatabase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCurrentDatabase();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): SetCurrentDatabase {
    return { dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : "" };
  },

  toJSON(message: SetCurrentDatabase): unknown {
    const obj: any = {};
    if (message.dbName !== "") {
      obj.dbName = message.dbName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetCurrentDatabase>, I>>(base?: I): SetCurrentDatabase {
    return SetCurrentDatabase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetCurrentDatabase>, I>>(object: I): SetCurrentDatabase {
    const message = createBaseSetCurrentDatabase();
    message.dbName = object.dbName ?? "";
    return message;
  },
};

function createBaseListDatabases(): ListDatabases {
  return { pattern: undefined };
}

export const ListDatabases = {
  encode(message: ListDatabases, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pattern !== undefined) {
      writer.uint32(10).string(message.pattern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDatabases {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDatabases();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ListDatabases {
    return { pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : undefined };
  },

  toJSON(message: ListDatabases): unknown {
    const obj: any = {};
    if (message.pattern !== undefined) {
      obj.pattern = message.pattern;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDatabases>, I>>(base?: I): ListDatabases {
    return ListDatabases.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDatabases>, I>>(object: I): ListDatabases {
    const message = createBaseListDatabases();
    message.pattern = object.pattern ?? undefined;
    return message;
  },
};

function createBaseListTables(): ListTables {
  return { dbName: undefined, pattern: undefined };
}

export const ListTables = {
  encode(message: ListTables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dbName !== undefined) {
      writer.uint32(10).string(message.dbName);
    }
    if (message.pattern !== undefined) {
      writer.uint32(18).string(message.pattern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTables {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTables();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ListTables {
    return {
      dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : undefined,
    };
  },

  toJSON(message: ListTables): unknown {
    const obj: any = {};
    if (message.dbName !== undefined) {
      obj.dbName = message.dbName;
    }
    if (message.pattern !== undefined) {
      obj.pattern = message.pattern;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTables>, I>>(base?: I): ListTables {
    return ListTables.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTables>, I>>(object: I): ListTables {
    const message = createBaseListTables();
    message.dbName = object.dbName ?? undefined;
    message.pattern = object.pattern ?? undefined;
    return message;
  },
};

function createBaseListFunctions(): ListFunctions {
  return { dbName: undefined, pattern: undefined };
}

export const ListFunctions = {
  encode(message: ListFunctions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dbName !== undefined) {
      writer.uint32(10).string(message.dbName);
    }
    if (message.pattern !== undefined) {
      writer.uint32(18).string(message.pattern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctions();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ListFunctions {
    return {
      dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : undefined,
    };
  },

  toJSON(message: ListFunctions): unknown {
    const obj: any = {};
    if (message.dbName !== undefined) {
      obj.dbName = message.dbName;
    }
    if (message.pattern !== undefined) {
      obj.pattern = message.pattern;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFunctions>, I>>(base?: I): ListFunctions {
    return ListFunctions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctions>, I>>(object: I): ListFunctions {
    const message = createBaseListFunctions();
    message.dbName = object.dbName ?? undefined;
    message.pattern = object.pattern ?? undefined;
    return message;
  },
};

function createBaseListColumns(): ListColumns {
  return { tableName: "", dbName: undefined };
}

export const ListColumns = {
  encode(message: ListColumns, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.dbName !== undefined) {
      writer.uint32(18).string(message.dbName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListColumns {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListColumns();
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

  fromJSON(object: any): ListColumns {
    return {
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
    };
  },

  toJSON(message: ListColumns): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.dbName !== undefined) {
      obj.dbName = message.dbName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListColumns>, I>>(base?: I): ListColumns {
    return ListColumns.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListColumns>, I>>(object: I): ListColumns {
    const message = createBaseListColumns();
    message.tableName = object.tableName ?? "";
    message.dbName = object.dbName ?? undefined;
    return message;
  },
};

function createBaseGetDatabase(): GetDatabase {
  return { dbName: "" };
}

export const GetDatabase = {
  encode(message: GetDatabase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dbName !== "") {
      writer.uint32(10).string(message.dbName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDatabase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDatabase();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GetDatabase {
    return { dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : "" };
  },

  toJSON(message: GetDatabase): unknown {
    const obj: any = {};
    if (message.dbName !== "") {
      obj.dbName = message.dbName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDatabase>, I>>(base?: I): GetDatabase {
    return GetDatabase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDatabase>, I>>(object: I): GetDatabase {
    const message = createBaseGetDatabase();
    message.dbName = object.dbName ?? "";
    return message;
  },
};

function createBaseGetTable(): GetTable {
  return { tableName: "", dbName: undefined };
}

export const GetTable = {
  encode(message: GetTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.dbName !== undefined) {
      writer.uint32(18).string(message.dbName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTable();
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

  fromJSON(object: any): GetTable {
    return {
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
    };
  },

  toJSON(message: GetTable): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.dbName !== undefined) {
      obj.dbName = message.dbName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTable>, I>>(base?: I): GetTable {
    return GetTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTable>, I>>(object: I): GetTable {
    const message = createBaseGetTable();
    message.tableName = object.tableName ?? "";
    message.dbName = object.dbName ?? undefined;
    return message;
  },
};

function createBaseGetFunction(): GetFunction {
  return { functionName: "", dbName: undefined };
}

export const GetFunction = {
  encode(message: GetFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionName !== "") {
      writer.uint32(10).string(message.functionName);
    }
    if (message.dbName !== undefined) {
      writer.uint32(18).string(message.dbName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFunction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFunction();
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

  fromJSON(object: any): GetFunction {
    return {
      functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
      dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
    };
  },

  toJSON(message: GetFunction): unknown {
    const obj: any = {};
    if (message.functionName !== "") {
      obj.functionName = message.functionName;
    }
    if (message.dbName !== undefined) {
      obj.dbName = message.dbName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFunction>, I>>(base?: I): GetFunction {
    return GetFunction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFunction>, I>>(object: I): GetFunction {
    const message = createBaseGetFunction();
    message.functionName = object.functionName ?? "";
    message.dbName = object.dbName ?? undefined;
    return message;
  },
};

function createBaseDatabaseExists(): DatabaseExists {
  return { dbName: "" };
}

export const DatabaseExists = {
  encode(message: DatabaseExists, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dbName !== "") {
      writer.uint32(10).string(message.dbName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseExists {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabaseExists();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DatabaseExists {
    return { dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : "" };
  },

  toJSON(message: DatabaseExists): unknown {
    const obj: any = {};
    if (message.dbName !== "") {
      obj.dbName = message.dbName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DatabaseExists>, I>>(base?: I): DatabaseExists {
    return DatabaseExists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DatabaseExists>, I>>(object: I): DatabaseExists {
    const message = createBaseDatabaseExists();
    message.dbName = object.dbName ?? "";
    return message;
  },
};

function createBaseTableExists(): TableExists {
  return { tableName: "", dbName: undefined };
}

export const TableExists = {
  encode(message: TableExists, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.dbName !== undefined) {
      writer.uint32(18).string(message.dbName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableExists {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableExists();
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

  fromJSON(object: any): TableExists {
    return {
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
    };
  },

  toJSON(message: TableExists): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.dbName !== undefined) {
      obj.dbName = message.dbName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TableExists>, I>>(base?: I): TableExists {
    return TableExists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TableExists>, I>>(object: I): TableExists {
    const message = createBaseTableExists();
    message.tableName = object.tableName ?? "";
    message.dbName = object.dbName ?? undefined;
    return message;
  },
};

function createBaseFunctionExists(): FunctionExists {
  return { functionName: "", dbName: undefined };
}

export const FunctionExists = {
  encode(message: FunctionExists, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionName !== "") {
      writer.uint32(10).string(message.functionName);
    }
    if (message.dbName !== undefined) {
      writer.uint32(18).string(message.dbName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FunctionExists {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionExists();
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

  fromJSON(object: any): FunctionExists {
    return {
      functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
      dbName: isSet(object.dbName) ? globalThis.String(object.dbName) : undefined,
    };
  },

  toJSON(message: FunctionExists): unknown {
    const obj: any = {};
    if (message.functionName !== "") {
      obj.functionName = message.functionName;
    }
    if (message.dbName !== undefined) {
      obj.dbName = message.dbName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FunctionExists>, I>>(base?: I): FunctionExists {
    return FunctionExists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FunctionExists>, I>>(object: I): FunctionExists {
    const message = createBaseFunctionExists();
    message.functionName = object.functionName ?? "";
    message.dbName = object.dbName ?? undefined;
    return message;
  },
};

function createBaseCreateExternalTable(): CreateExternalTable {
  return { tableName: "", path: undefined, source: undefined, schema: undefined, options: {} };
}

export const CreateExternalTable = {
  encode(message: CreateExternalTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DataType.encode(message.schema, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.options).forEach(([key, value]) => {
      CreateExternalTable_OptionsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExternalTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExternalTable();
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

          message.schema = DataType.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = CreateExternalTable_OptionsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateExternalTable {
    return {
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : undefined,
      source: isSet(object.source) ? globalThis.String(object.source) : undefined,
      schema: isSet(object.schema) ? DataType.fromJSON(object.schema) : undefined,
      options: isObject(object.options)
        ? Object.entries(object.options).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateExternalTable): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<CreateExternalTable>, I>>(base?: I): CreateExternalTable {
    return CreateExternalTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExternalTable>, I>>(object: I): CreateExternalTable {
    const message = createBaseCreateExternalTable();
    message.tableName = object.tableName ?? "";
    message.path = object.path ?? undefined;
    message.source = object.source ?? undefined;
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

function createBaseCreateExternalTable_OptionsEntry(): CreateExternalTable_OptionsEntry {
  return { key: "", value: "" };
}

export const CreateExternalTable_OptionsEntry = {
  encode(message: CreateExternalTable_OptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExternalTable_OptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExternalTable_OptionsEntry();
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

  fromJSON(object: any): CreateExternalTable_OptionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateExternalTable_OptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateExternalTable_OptionsEntry>, I>>(
    base?: I,
  ): CreateExternalTable_OptionsEntry {
    return CreateExternalTable_OptionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExternalTable_OptionsEntry>, I>>(
    object: I,
  ): CreateExternalTable_OptionsEntry {
    const message = createBaseCreateExternalTable_OptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCreateTable(): CreateTable {
  return { tableName: "", path: undefined, source: undefined, description: undefined, schema: undefined, options: {} };
}

export const CreateTable = {
  encode(message: CreateTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DataType.encode(message.schema, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.options).forEach(([key, value]) => {
      CreateTable_OptionsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTable();
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

          message.schema = DataType.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = CreateTable_OptionsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateTable {
    return {
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : undefined,
      source: isSet(object.source) ? globalThis.String(object.source) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      schema: isSet(object.schema) ? DataType.fromJSON(object.schema) : undefined,
      options: isObject(object.options)
        ? Object.entries(object.options).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateTable): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<CreateTable>, I>>(base?: I): CreateTable {
    return CreateTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTable>, I>>(object: I): CreateTable {
    const message = createBaseCreateTable();
    message.tableName = object.tableName ?? "";
    message.path = object.path ?? undefined;
    message.source = object.source ?? undefined;
    message.description = object.description ?? undefined;
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

function createBaseCreateTable_OptionsEntry(): CreateTable_OptionsEntry {
  return { key: "", value: "" };
}

export const CreateTable_OptionsEntry = {
  encode(message: CreateTable_OptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTable_OptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTable_OptionsEntry();
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

  fromJSON(object: any): CreateTable_OptionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateTable_OptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTable_OptionsEntry>, I>>(base?: I): CreateTable_OptionsEntry {
    return CreateTable_OptionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTable_OptionsEntry>, I>>(object: I): CreateTable_OptionsEntry {
    const message = createBaseCreateTable_OptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDropTempView(): DropTempView {
  return { viewName: "" };
}

export const DropTempView = {
  encode(message: DropTempView, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.viewName !== "") {
      writer.uint32(10).string(message.viewName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropTempView {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropTempView();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DropTempView {
    return { viewName: isSet(object.viewName) ? globalThis.String(object.viewName) : "" };
  },

  toJSON(message: DropTempView): unknown {
    const obj: any = {};
    if (message.viewName !== "") {
      obj.viewName = message.viewName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropTempView>, I>>(base?: I): DropTempView {
    return DropTempView.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropTempView>, I>>(object: I): DropTempView {
    const message = createBaseDropTempView();
    message.viewName = object.viewName ?? "";
    return message;
  },
};

function createBaseDropGlobalTempView(): DropGlobalTempView {
  return { viewName: "" };
}

export const DropGlobalTempView = {
  encode(message: DropGlobalTempView, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.viewName !== "") {
      writer.uint32(10).string(message.viewName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropGlobalTempView {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropGlobalTempView();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DropGlobalTempView {
    return { viewName: isSet(object.viewName) ? globalThis.String(object.viewName) : "" };
  },

  toJSON(message: DropGlobalTempView): unknown {
    const obj: any = {};
    if (message.viewName !== "") {
      obj.viewName = message.viewName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropGlobalTempView>, I>>(base?: I): DropGlobalTempView {
    return DropGlobalTempView.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropGlobalTempView>, I>>(object: I): DropGlobalTempView {
    const message = createBaseDropGlobalTempView();
    message.viewName = object.viewName ?? "";
    return message;
  },
};

function createBaseRecoverPartitions(): RecoverPartitions {
  return { tableName: "" };
}

export const RecoverPartitions = {
  encode(message: RecoverPartitions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecoverPartitions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoverPartitions();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): RecoverPartitions {
    return { tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "" };
  },

  toJSON(message: RecoverPartitions): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecoverPartitions>, I>>(base?: I): RecoverPartitions {
    return RecoverPartitions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecoverPartitions>, I>>(object: I): RecoverPartitions {
    const message = createBaseRecoverPartitions();
    message.tableName = object.tableName ?? "";
    return message;
  },
};

function createBaseIsCached(): IsCached {
  return { tableName: "" };
}

export const IsCached = {
  encode(message: IsCached, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsCached {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsCached();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): IsCached {
    return { tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "" };
  },

  toJSON(message: IsCached): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IsCached>, I>>(base?: I): IsCached {
    return IsCached.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IsCached>, I>>(object: I): IsCached {
    const message = createBaseIsCached();
    message.tableName = object.tableName ?? "";
    return message;
  },
};

function createBaseCacheTable(): CacheTable {
  return { tableName: "", storageLevel: undefined };
}

export const CacheTable = {
  encode(message: CacheTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.storageLevel !== undefined) {
      StorageLevel.encode(message.storageLevel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CacheTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheTable();
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

  fromJSON(object: any): CacheTable {
    return {
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      storageLevel: isSet(object.storageLevel) ? StorageLevel.fromJSON(object.storageLevel) : undefined,
    };
  },

  toJSON(message: CacheTable): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.storageLevel !== undefined) {
      obj.storageLevel = StorageLevel.toJSON(message.storageLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CacheTable>, I>>(base?: I): CacheTable {
    return CacheTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CacheTable>, I>>(object: I): CacheTable {
    const message = createBaseCacheTable();
    message.tableName = object.tableName ?? "";
    message.storageLevel = (object.storageLevel !== undefined && object.storageLevel !== null)
      ? StorageLevel.fromPartial(object.storageLevel)
      : undefined;
    return message;
  },
};

function createBaseUncacheTable(): UncacheTable {
  return { tableName: "" };
}

export const UncacheTable = {
  encode(message: UncacheTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UncacheTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUncacheTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): UncacheTable {
    return { tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "" };
  },

  toJSON(message: UncacheTable): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UncacheTable>, I>>(base?: I): UncacheTable {
    return UncacheTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UncacheTable>, I>>(object: I): UncacheTable {
    const message = createBaseUncacheTable();
    message.tableName = object.tableName ?? "";
    return message;
  },
};

function createBaseClearCache(): ClearCache {
  return {};
}

export const ClearCache = {
  encode(_: ClearCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearCache();
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

  fromJSON(_: any): ClearCache {
    return {};
  },

  toJSON(_: ClearCache): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ClearCache>, I>>(base?: I): ClearCache {
    return ClearCache.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClearCache>, I>>(_: I): ClearCache {
    const message = createBaseClearCache();
    return message;
  },
};

function createBaseRefreshTable(): RefreshTable {
  return { tableName: "" };
}

export const RefreshTable = {
  encode(message: RefreshTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): RefreshTable {
    return { tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "" };
  },

  toJSON(message: RefreshTable): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshTable>, I>>(base?: I): RefreshTable {
    return RefreshTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshTable>, I>>(object: I): RefreshTable {
    const message = createBaseRefreshTable();
    message.tableName = object.tableName ?? "";
    return message;
  },
};

function createBaseRefreshByPath(): RefreshByPath {
  return { path: "" };
}

export const RefreshByPath = {
  encode(message: RefreshByPath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshByPath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshByPath();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): RefreshByPath {
    return { path: isSet(object.path) ? globalThis.String(object.path) : "" };
  },

  toJSON(message: RefreshByPath): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshByPath>, I>>(base?: I): RefreshByPath {
    return RefreshByPath.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshByPath>, I>>(object: I): RefreshByPath {
    const message = createBaseRefreshByPath();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseCurrentCatalog(): CurrentCatalog {
  return {};
}

export const CurrentCatalog = {
  encode(_: CurrentCatalog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentCatalog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentCatalog();
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

  fromJSON(_: any): CurrentCatalog {
    return {};
  },

  toJSON(_: CurrentCatalog): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentCatalog>, I>>(base?: I): CurrentCatalog {
    return CurrentCatalog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrentCatalog>, I>>(_: I): CurrentCatalog {
    const message = createBaseCurrentCatalog();
    return message;
  },
};

function createBaseSetCurrentCatalog(): SetCurrentCatalog {
  return { catalogName: "" };
}

export const SetCurrentCatalog = {
  encode(message: SetCurrentCatalog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.catalogName !== "") {
      writer.uint32(10).string(message.catalogName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCurrentCatalog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCurrentCatalog();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): SetCurrentCatalog {
    return { catalogName: isSet(object.catalogName) ? globalThis.String(object.catalogName) : "" };
  },

  toJSON(message: SetCurrentCatalog): unknown {
    const obj: any = {};
    if (message.catalogName !== "") {
      obj.catalogName = message.catalogName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetCurrentCatalog>, I>>(base?: I): SetCurrentCatalog {
    return SetCurrentCatalog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetCurrentCatalog>, I>>(object: I): SetCurrentCatalog {
    const message = createBaseSetCurrentCatalog();
    message.catalogName = object.catalogName ?? "";
    return message;
  },
};

function createBaseListCatalogs(): ListCatalogs {
  return { pattern: undefined };
}

export const ListCatalogs = {
  encode(message: ListCatalogs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pattern !== undefined) {
      writer.uint32(10).string(message.pattern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCatalogs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCatalogs();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ListCatalogs {
    return { pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : undefined };
  },

  toJSON(message: ListCatalogs): unknown {
    const obj: any = {};
    if (message.pattern !== undefined) {
      obj.pattern = message.pattern;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCatalogs>, I>>(base?: I): ListCatalogs {
    return ListCatalogs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCatalogs>, I>>(object: I): ListCatalogs {
    const message = createBaseListCatalogs();
    message.pattern = object.pattern ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
