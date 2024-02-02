"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatCov = exports.StatCrosstab = exports.StatDescribe = exports.StatSummary = exports.HtmlString = exports.ShowString = exports.Repartition = exports.SubqueryAlias = exports.Range = exports.Sample = exports.CachedRemoteRelation = exports.CachedLocalRelation = exports.LocalRelation = exports.Deduplicate = exports.Drop = exports.Sort = exports.Aggregate_Pivot = exports.Aggregate = exports.Tail = exports.Offset = exports.Limit = exports.SetOperation = exports.Join_JoinDataType = exports.Join = exports.Filter = exports.Project = exports.Read_DataSource_OptionsEntry = exports.Read_DataSource = exports.Read_NamedTable_OptionsEntry = exports.Read_NamedTable = exports.Read = exports.SQL_NamedArgumentsEntry = exports.SQL_ArgsEntry = exports.SQL = exports.RelationCommon = exports.Unknown = exports.Relation = exports.parse_ParseFormatToJSON = exports.parse_ParseFormatFromJSON = exports.Parse_ParseFormat = exports.aggregate_GroupTypeToJSON = exports.aggregate_GroupTypeFromJSON = exports.Aggregate_GroupType = exports.setOperation_SetOpTypeToJSON = exports.setOperation_SetOpTypeFromJSON = exports.SetOperation_SetOpType = exports.join_JoinTypeToJSON = exports.join_JoinTypeFromJSON = exports.Join_JoinType = exports.protobufPackage = void 0;
exports.Parse_OptionsEntry = exports.Parse = exports.CollectMetrics = exports.PythonUDTF = exports.CommonInlineUserDefinedTableFunction = exports.ApplyInPandasWithState = exports.CoGroupMap = exports.GroupMap = exports.MapPartitions = exports.RepartitionByExpression = exports.ToSchema = exports.Unpivot_Values = exports.Unpivot = exports.Hint = exports.WithWatermark = exports.WithColumns = exports.WithColumnsRenamed_RenameColumnsMapEntry = exports.WithColumnsRenamed = exports.ToDF = exports.NAReplace_Replacement = exports.NAReplace = exports.NADrop = exports.NAFill = exports.StatSampleBy_Fraction = exports.StatSampleBy = exports.StatFreqItems = exports.StatApproxQuantile = exports.StatCorr = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
var any_1 = require("../../google/protobuf/any");
var catalog_1 = require("./catalog");
var expressions_1 = require("./expressions");
var types_1 = require("./types");
var Long = require("long");
exports.protobufPackage = "spark.connect";
var Join_JoinType;
(function (Join_JoinType) {
    Join_JoinType[Join_JoinType["JOIN_TYPE_UNSPECIFIED"] = 0] = "JOIN_TYPE_UNSPECIFIED";
    Join_JoinType[Join_JoinType["JOIN_TYPE_INNER"] = 1] = "JOIN_TYPE_INNER";
    Join_JoinType[Join_JoinType["JOIN_TYPE_FULL_OUTER"] = 2] = "JOIN_TYPE_FULL_OUTER";
    Join_JoinType[Join_JoinType["JOIN_TYPE_LEFT_OUTER"] = 3] = "JOIN_TYPE_LEFT_OUTER";
    Join_JoinType[Join_JoinType["JOIN_TYPE_RIGHT_OUTER"] = 4] = "JOIN_TYPE_RIGHT_OUTER";
    Join_JoinType[Join_JoinType["JOIN_TYPE_LEFT_ANTI"] = 5] = "JOIN_TYPE_LEFT_ANTI";
    Join_JoinType[Join_JoinType["JOIN_TYPE_LEFT_SEMI"] = 6] = "JOIN_TYPE_LEFT_SEMI";
    Join_JoinType[Join_JoinType["JOIN_TYPE_CROSS"] = 7] = "JOIN_TYPE_CROSS";
    Join_JoinType[Join_JoinType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Join_JoinType = exports.Join_JoinType || (exports.Join_JoinType = {}));
function join_JoinTypeFromJSON(object) {
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
exports.join_JoinTypeFromJSON = join_JoinTypeFromJSON;
function join_JoinTypeToJSON(object) {
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
exports.join_JoinTypeToJSON = join_JoinTypeToJSON;
var SetOperation_SetOpType;
(function (SetOperation_SetOpType) {
    SetOperation_SetOpType[SetOperation_SetOpType["SET_OP_TYPE_UNSPECIFIED"] = 0] = "SET_OP_TYPE_UNSPECIFIED";
    SetOperation_SetOpType[SetOperation_SetOpType["SET_OP_TYPE_INTERSECT"] = 1] = "SET_OP_TYPE_INTERSECT";
    SetOperation_SetOpType[SetOperation_SetOpType["SET_OP_TYPE_UNION"] = 2] = "SET_OP_TYPE_UNION";
    SetOperation_SetOpType[SetOperation_SetOpType["SET_OP_TYPE_EXCEPT"] = 3] = "SET_OP_TYPE_EXCEPT";
    SetOperation_SetOpType[SetOperation_SetOpType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SetOperation_SetOpType = exports.SetOperation_SetOpType || (exports.SetOperation_SetOpType = {}));
function setOperation_SetOpTypeFromJSON(object) {
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
exports.setOperation_SetOpTypeFromJSON = setOperation_SetOpTypeFromJSON;
function setOperation_SetOpTypeToJSON(object) {
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
exports.setOperation_SetOpTypeToJSON = setOperation_SetOpTypeToJSON;
var Aggregate_GroupType;
(function (Aggregate_GroupType) {
    Aggregate_GroupType[Aggregate_GroupType["GROUP_TYPE_UNSPECIFIED"] = 0] = "GROUP_TYPE_UNSPECIFIED";
    Aggregate_GroupType[Aggregate_GroupType["GROUP_TYPE_GROUPBY"] = 1] = "GROUP_TYPE_GROUPBY";
    Aggregate_GroupType[Aggregate_GroupType["GROUP_TYPE_ROLLUP"] = 2] = "GROUP_TYPE_ROLLUP";
    Aggregate_GroupType[Aggregate_GroupType["GROUP_TYPE_CUBE"] = 3] = "GROUP_TYPE_CUBE";
    Aggregate_GroupType[Aggregate_GroupType["GROUP_TYPE_PIVOT"] = 4] = "GROUP_TYPE_PIVOT";
    Aggregate_GroupType[Aggregate_GroupType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Aggregate_GroupType = exports.Aggregate_GroupType || (exports.Aggregate_GroupType = {}));
function aggregate_GroupTypeFromJSON(object) {
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
exports.aggregate_GroupTypeFromJSON = aggregate_GroupTypeFromJSON;
function aggregate_GroupTypeToJSON(object) {
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
exports.aggregate_GroupTypeToJSON = aggregate_GroupTypeToJSON;
var Parse_ParseFormat;
(function (Parse_ParseFormat) {
    Parse_ParseFormat[Parse_ParseFormat["PARSE_FORMAT_UNSPECIFIED"] = 0] = "PARSE_FORMAT_UNSPECIFIED";
    Parse_ParseFormat[Parse_ParseFormat["PARSE_FORMAT_CSV"] = 1] = "PARSE_FORMAT_CSV";
    Parse_ParseFormat[Parse_ParseFormat["PARSE_FORMAT_JSON"] = 2] = "PARSE_FORMAT_JSON";
    Parse_ParseFormat[Parse_ParseFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Parse_ParseFormat = exports.Parse_ParseFormat || (exports.Parse_ParseFormat = {}));
function parse_ParseFormatFromJSON(object) {
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
exports.parse_ParseFormatFromJSON = parse_ParseFormatFromJSON;
function parse_ParseFormatToJSON(object) {
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
exports.parse_ParseFormatToJSON = parse_ParseFormatToJSON;
function createBaseRelation() {
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
exports.Relation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.common !== undefined) {
            exports.RelationCommon.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message.read !== undefined) {
            exports.Read.encode(message.read, writer.uint32(18).fork()).ldelim();
        }
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(26).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            exports.Filter.encode(message.filter, writer.uint32(34).fork()).ldelim();
        }
        if (message.join !== undefined) {
            exports.Join.encode(message.join, writer.uint32(42).fork()).ldelim();
        }
        if (message.setOp !== undefined) {
            exports.SetOperation.encode(message.setOp, writer.uint32(50).fork()).ldelim();
        }
        if (message.sort !== undefined) {
            exports.Sort.encode(message.sort, writer.uint32(58).fork()).ldelim();
        }
        if (message.limit !== undefined) {
            exports.Limit.encode(message.limit, writer.uint32(66).fork()).ldelim();
        }
        if (message.aggregate !== undefined) {
            exports.Aggregate.encode(message.aggregate, writer.uint32(74).fork()).ldelim();
        }
        if (message.sql !== undefined) {
            exports.SQL.encode(message.sql, writer.uint32(82).fork()).ldelim();
        }
        if (message.localRelation !== undefined) {
            exports.LocalRelation.encode(message.localRelation, writer.uint32(90).fork()).ldelim();
        }
        if (message.sample !== undefined) {
            exports.Sample.encode(message.sample, writer.uint32(98).fork()).ldelim();
        }
        if (message.offset !== undefined) {
            exports.Offset.encode(message.offset, writer.uint32(106).fork()).ldelim();
        }
        if (message.deduplicate !== undefined) {
            exports.Deduplicate.encode(message.deduplicate, writer.uint32(114).fork()).ldelim();
        }
        if (message.range !== undefined) {
            exports.Range.encode(message.range, writer.uint32(122).fork()).ldelim();
        }
        if (message.subqueryAlias !== undefined) {
            exports.SubqueryAlias.encode(message.subqueryAlias, writer.uint32(130).fork()).ldelim();
        }
        if (message.repartition !== undefined) {
            exports.Repartition.encode(message.repartition, writer.uint32(138).fork()).ldelim();
        }
        if (message.toDf !== undefined) {
            exports.ToDF.encode(message.toDf, writer.uint32(146).fork()).ldelim();
        }
        if (message.withColumnsRenamed !== undefined) {
            exports.WithColumnsRenamed.encode(message.withColumnsRenamed, writer.uint32(154).fork()).ldelim();
        }
        if (message.showString !== undefined) {
            exports.ShowString.encode(message.showString, writer.uint32(162).fork()).ldelim();
        }
        if (message.drop !== undefined) {
            exports.Drop.encode(message.drop, writer.uint32(170).fork()).ldelim();
        }
        if (message.tail !== undefined) {
            exports.Tail.encode(message.tail, writer.uint32(178).fork()).ldelim();
        }
        if (message.withColumns !== undefined) {
            exports.WithColumns.encode(message.withColumns, writer.uint32(186).fork()).ldelim();
        }
        if (message.hint !== undefined) {
            exports.Hint.encode(message.hint, writer.uint32(194).fork()).ldelim();
        }
        if (message.unpivot !== undefined) {
            exports.Unpivot.encode(message.unpivot, writer.uint32(202).fork()).ldelim();
        }
        if (message.toSchema !== undefined) {
            exports.ToSchema.encode(message.toSchema, writer.uint32(210).fork()).ldelim();
        }
        if (message.repartitionByExpression !== undefined) {
            exports.RepartitionByExpression.encode(message.repartitionByExpression, writer.uint32(218).fork()).ldelim();
        }
        if (message.mapPartitions !== undefined) {
            exports.MapPartitions.encode(message.mapPartitions, writer.uint32(226).fork()).ldelim();
        }
        if (message.collectMetrics !== undefined) {
            exports.CollectMetrics.encode(message.collectMetrics, writer.uint32(234).fork()).ldelim();
        }
        if (message.parse !== undefined) {
            exports.Parse.encode(message.parse, writer.uint32(242).fork()).ldelim();
        }
        if (message.groupMap !== undefined) {
            exports.GroupMap.encode(message.groupMap, writer.uint32(250).fork()).ldelim();
        }
        if (message.coGroupMap !== undefined) {
            exports.CoGroupMap.encode(message.coGroupMap, writer.uint32(258).fork()).ldelim();
        }
        if (message.withWatermark !== undefined) {
            exports.WithWatermark.encode(message.withWatermark, writer.uint32(266).fork()).ldelim();
        }
        if (message.applyInPandasWithState !== undefined) {
            exports.ApplyInPandasWithState.encode(message.applyInPandasWithState, writer.uint32(274).fork()).ldelim();
        }
        if (message.htmlString !== undefined) {
            exports.HtmlString.encode(message.htmlString, writer.uint32(282).fork()).ldelim();
        }
        if (message.cachedLocalRelation !== undefined) {
            exports.CachedLocalRelation.encode(message.cachedLocalRelation, writer.uint32(290).fork()).ldelim();
        }
        if (message.cachedRemoteRelation !== undefined) {
            exports.CachedRemoteRelation.encode(message.cachedRemoteRelation, writer.uint32(298).fork()).ldelim();
        }
        if (message.commonInlineUserDefinedTableFunction !== undefined) {
            exports.CommonInlineUserDefinedTableFunction.encode(message.commonInlineUserDefinedTableFunction, writer.uint32(306).fork()).ldelim();
        }
        if (message.fillNa !== undefined) {
            exports.NAFill.encode(message.fillNa, writer.uint32(722).fork()).ldelim();
        }
        if (message.dropNa !== undefined) {
            exports.NADrop.encode(message.dropNa, writer.uint32(730).fork()).ldelim();
        }
        if (message.replace !== undefined) {
            exports.NAReplace.encode(message.replace, writer.uint32(738).fork()).ldelim();
        }
        if (message.summary !== undefined) {
            exports.StatSummary.encode(message.summary, writer.uint32(802).fork()).ldelim();
        }
        if (message.crosstab !== undefined) {
            exports.StatCrosstab.encode(message.crosstab, writer.uint32(810).fork()).ldelim();
        }
        if (message.describe !== undefined) {
            exports.StatDescribe.encode(message.describe, writer.uint32(818).fork()).ldelim();
        }
        if (message.cov !== undefined) {
            exports.StatCov.encode(message.cov, writer.uint32(826).fork()).ldelim();
        }
        if (message.corr !== undefined) {
            exports.StatCorr.encode(message.corr, writer.uint32(834).fork()).ldelim();
        }
        if (message.approxQuantile !== undefined) {
            exports.StatApproxQuantile.encode(message.approxQuantile, writer.uint32(842).fork()).ldelim();
        }
        if (message.freqItems !== undefined) {
            exports.StatFreqItems.encode(message.freqItems, writer.uint32(850).fork()).ldelim();
        }
        if (message.sampleBy !== undefined) {
            exports.StatSampleBy.encode(message.sampleBy, writer.uint32(858).fork()).ldelim();
        }
        if (message.catalog !== undefined) {
            catalog_1.Catalog.encode(message.catalog, writer.uint32(1602).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(message.extension, writer.uint32(7986).fork()).ldelim();
        }
        if (message.unknown !== undefined) {
            exports.Unknown.encode(message.unknown, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRelation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.common = exports.RelationCommon.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.read = exports.Read.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.project = exports.Project.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.filter = exports.Filter.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.join = exports.Join.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.setOp = exports.SetOperation.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.sort = exports.Sort.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.limit = exports.Limit.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.aggregate = exports.Aggregate.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.sql = exports.SQL.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.localRelation = exports.LocalRelation.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.sample = exports.Sample.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.offset = exports.Offset.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.deduplicate = exports.Deduplicate.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.range = exports.Range.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.subqueryAlias = exports.SubqueryAlias.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.repartition = exports.Repartition.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.toDf = exports.ToDF.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.withColumnsRenamed = exports.WithColumnsRenamed.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.showString = exports.ShowString.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.drop = exports.Drop.decode(reader, reader.uint32());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.tail = exports.Tail.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.withColumns = exports.WithColumns.decode(reader, reader.uint32());
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.hint = exports.Hint.decode(reader, reader.uint32());
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.unpivot = exports.Unpivot.decode(reader, reader.uint32());
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.toSchema = exports.ToSchema.decode(reader, reader.uint32());
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.repartitionByExpression = exports.RepartitionByExpression.decode(reader, reader.uint32());
                    continue;
                case 28:
                    if (tag !== 226) {
                        break;
                    }
                    message.mapPartitions = exports.MapPartitions.decode(reader, reader.uint32());
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }
                    message.collectMetrics = exports.CollectMetrics.decode(reader, reader.uint32());
                    continue;
                case 30:
                    if (tag !== 242) {
                        break;
                    }
                    message.parse = exports.Parse.decode(reader, reader.uint32());
                    continue;
                case 31:
                    if (tag !== 250) {
                        break;
                    }
                    message.groupMap = exports.GroupMap.decode(reader, reader.uint32());
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.coGroupMap = exports.CoGroupMap.decode(reader, reader.uint32());
                    continue;
                case 33:
                    if (tag !== 266) {
                        break;
                    }
                    message.withWatermark = exports.WithWatermark.decode(reader, reader.uint32());
                    continue;
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.applyInPandasWithState = exports.ApplyInPandasWithState.decode(reader, reader.uint32());
                    continue;
                case 35:
                    if (tag !== 282) {
                        break;
                    }
                    message.htmlString = exports.HtmlString.decode(reader, reader.uint32());
                    continue;
                case 36:
                    if (tag !== 290) {
                        break;
                    }
                    message.cachedLocalRelation = exports.CachedLocalRelation.decode(reader, reader.uint32());
                    continue;
                case 37:
                    if (tag !== 298) {
                        break;
                    }
                    message.cachedRemoteRelation = exports.CachedRemoteRelation.decode(reader, reader.uint32());
                    continue;
                case 38:
                    if (tag !== 306) {
                        break;
                    }
                    message.commonInlineUserDefinedTableFunction = exports.CommonInlineUserDefinedTableFunction.decode(reader, reader.uint32());
                    continue;
                case 90:
                    if (tag !== 722) {
                        break;
                    }
                    message.fillNa = exports.NAFill.decode(reader, reader.uint32());
                    continue;
                case 91:
                    if (tag !== 730) {
                        break;
                    }
                    message.dropNa = exports.NADrop.decode(reader, reader.uint32());
                    continue;
                case 92:
                    if (tag !== 738) {
                        break;
                    }
                    message.replace = exports.NAReplace.decode(reader, reader.uint32());
                    continue;
                case 100:
                    if (tag !== 802) {
                        break;
                    }
                    message.summary = exports.StatSummary.decode(reader, reader.uint32());
                    continue;
                case 101:
                    if (tag !== 810) {
                        break;
                    }
                    message.crosstab = exports.StatCrosstab.decode(reader, reader.uint32());
                    continue;
                case 102:
                    if (tag !== 818) {
                        break;
                    }
                    message.describe = exports.StatDescribe.decode(reader, reader.uint32());
                    continue;
                case 103:
                    if (tag !== 826) {
                        break;
                    }
                    message.cov = exports.StatCov.decode(reader, reader.uint32());
                    continue;
                case 104:
                    if (tag !== 834) {
                        break;
                    }
                    message.corr = exports.StatCorr.decode(reader, reader.uint32());
                    continue;
                case 105:
                    if (tag !== 842) {
                        break;
                    }
                    message.approxQuantile = exports.StatApproxQuantile.decode(reader, reader.uint32());
                    continue;
                case 106:
                    if (tag !== 850) {
                        break;
                    }
                    message.freqItems = exports.StatFreqItems.decode(reader, reader.uint32());
                    continue;
                case 107:
                    if (tag !== 858) {
                        break;
                    }
                    message.sampleBy = exports.StatSampleBy.decode(reader, reader.uint32());
                    continue;
                case 200:
                    if (tag !== 1602) {
                        break;
                    }
                    message.catalog = catalog_1.Catalog.decode(reader, reader.uint32());
                    continue;
                case 998:
                    if (tag !== 7986) {
                        break;
                    }
                    message.extension = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.unknown = exports.Unknown.decode(reader, reader.uint32());
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
            common: isSet(object.common) ? exports.RelationCommon.fromJSON(object.common) : undefined,
            read: isSet(object.read) ? exports.Read.fromJSON(object.read) : undefined,
            project: isSet(object.project) ? exports.Project.fromJSON(object.project) : undefined,
            filter: isSet(object.filter) ? exports.Filter.fromJSON(object.filter) : undefined,
            join: isSet(object.join) ? exports.Join.fromJSON(object.join) : undefined,
            setOp: isSet(object.setOp) ? exports.SetOperation.fromJSON(object.setOp) : undefined,
            sort: isSet(object.sort) ? exports.Sort.fromJSON(object.sort) : undefined,
            limit: isSet(object.limit) ? exports.Limit.fromJSON(object.limit) : undefined,
            aggregate: isSet(object.aggregate) ? exports.Aggregate.fromJSON(object.aggregate) : undefined,
            sql: isSet(object.sql) ? exports.SQL.fromJSON(object.sql) : undefined,
            localRelation: isSet(object.localRelation) ? exports.LocalRelation.fromJSON(object.localRelation) : undefined,
            sample: isSet(object.sample) ? exports.Sample.fromJSON(object.sample) : undefined,
            offset: isSet(object.offset) ? exports.Offset.fromJSON(object.offset) : undefined,
            deduplicate: isSet(object.deduplicate) ? exports.Deduplicate.fromJSON(object.deduplicate) : undefined,
            range: isSet(object.range) ? exports.Range.fromJSON(object.range) : undefined,
            subqueryAlias: isSet(object.subqueryAlias) ? exports.SubqueryAlias.fromJSON(object.subqueryAlias) : undefined,
            repartition: isSet(object.repartition) ? exports.Repartition.fromJSON(object.repartition) : undefined,
            toDf: isSet(object.toDf) ? exports.ToDF.fromJSON(object.toDf) : undefined,
            withColumnsRenamed: isSet(object.withColumnsRenamed)
                ? exports.WithColumnsRenamed.fromJSON(object.withColumnsRenamed)
                : undefined,
            showString: isSet(object.showString) ? exports.ShowString.fromJSON(object.showString) : undefined,
            drop: isSet(object.drop) ? exports.Drop.fromJSON(object.drop) : undefined,
            tail: isSet(object.tail) ? exports.Tail.fromJSON(object.tail) : undefined,
            withColumns: isSet(object.withColumns) ? exports.WithColumns.fromJSON(object.withColumns) : undefined,
            hint: isSet(object.hint) ? exports.Hint.fromJSON(object.hint) : undefined,
            unpivot: isSet(object.unpivot) ? exports.Unpivot.fromJSON(object.unpivot) : undefined,
            toSchema: isSet(object.toSchema) ? exports.ToSchema.fromJSON(object.toSchema) : undefined,
            repartitionByExpression: isSet(object.repartitionByExpression)
                ? exports.RepartitionByExpression.fromJSON(object.repartitionByExpression)
                : undefined,
            mapPartitions: isSet(object.mapPartitions) ? exports.MapPartitions.fromJSON(object.mapPartitions) : undefined,
            collectMetrics: isSet(object.collectMetrics) ? exports.CollectMetrics.fromJSON(object.collectMetrics) : undefined,
            parse: isSet(object.parse) ? exports.Parse.fromJSON(object.parse) : undefined,
            groupMap: isSet(object.groupMap) ? exports.GroupMap.fromJSON(object.groupMap) : undefined,
            coGroupMap: isSet(object.coGroupMap) ? exports.CoGroupMap.fromJSON(object.coGroupMap) : undefined,
            withWatermark: isSet(object.withWatermark) ? exports.WithWatermark.fromJSON(object.withWatermark) : undefined,
            applyInPandasWithState: isSet(object.applyInPandasWithState)
                ? exports.ApplyInPandasWithState.fromJSON(object.applyInPandasWithState)
                : undefined,
            htmlString: isSet(object.htmlString) ? exports.HtmlString.fromJSON(object.htmlString) : undefined,
            cachedLocalRelation: isSet(object.cachedLocalRelation)
                ? exports.CachedLocalRelation.fromJSON(object.cachedLocalRelation)
                : undefined,
            cachedRemoteRelation: isSet(object.cachedRemoteRelation)
                ? exports.CachedRemoteRelation.fromJSON(object.cachedRemoteRelation)
                : undefined,
            commonInlineUserDefinedTableFunction: isSet(object.commonInlineUserDefinedTableFunction)
                ? exports.CommonInlineUserDefinedTableFunction.fromJSON(object.commonInlineUserDefinedTableFunction)
                : undefined,
            fillNa: isSet(object.fillNa) ? exports.NAFill.fromJSON(object.fillNa) : undefined,
            dropNa: isSet(object.dropNa) ? exports.NADrop.fromJSON(object.dropNa) : undefined,
            replace: isSet(object.replace) ? exports.NAReplace.fromJSON(object.replace) : undefined,
            summary: isSet(object.summary) ? exports.StatSummary.fromJSON(object.summary) : undefined,
            crosstab: isSet(object.crosstab) ? exports.StatCrosstab.fromJSON(object.crosstab) : undefined,
            describe: isSet(object.describe) ? exports.StatDescribe.fromJSON(object.describe) : undefined,
            cov: isSet(object.cov) ? exports.StatCov.fromJSON(object.cov) : undefined,
            corr: isSet(object.corr) ? exports.StatCorr.fromJSON(object.corr) : undefined,
            approxQuantile: isSet(object.approxQuantile) ? exports.StatApproxQuantile.fromJSON(object.approxQuantile) : undefined,
            freqItems: isSet(object.freqItems) ? exports.StatFreqItems.fromJSON(object.freqItems) : undefined,
            sampleBy: isSet(object.sampleBy) ? exports.StatSampleBy.fromJSON(object.sampleBy) : undefined,
            catalog: isSet(object.catalog) ? catalog_1.Catalog.fromJSON(object.catalog) : undefined,
            extension: isSet(object.extension) ? any_1.Any.fromJSON(object.extension) : undefined,
            unknown: isSet(object.unknown) ? exports.Unknown.fromJSON(object.unknown) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.common !== undefined) {
            obj.common = exports.RelationCommon.toJSON(message.common);
        }
        if (message.read !== undefined) {
            obj.read = exports.Read.toJSON(message.read);
        }
        if (message.project !== undefined) {
            obj.project = exports.Project.toJSON(message.project);
        }
        if (message.filter !== undefined) {
            obj.filter = exports.Filter.toJSON(message.filter);
        }
        if (message.join !== undefined) {
            obj.join = exports.Join.toJSON(message.join);
        }
        if (message.setOp !== undefined) {
            obj.setOp = exports.SetOperation.toJSON(message.setOp);
        }
        if (message.sort !== undefined) {
            obj.sort = exports.Sort.toJSON(message.sort);
        }
        if (message.limit !== undefined) {
            obj.limit = exports.Limit.toJSON(message.limit);
        }
        if (message.aggregate !== undefined) {
            obj.aggregate = exports.Aggregate.toJSON(message.aggregate);
        }
        if (message.sql !== undefined) {
            obj.sql = exports.SQL.toJSON(message.sql);
        }
        if (message.localRelation !== undefined) {
            obj.localRelation = exports.LocalRelation.toJSON(message.localRelation);
        }
        if (message.sample !== undefined) {
            obj.sample = exports.Sample.toJSON(message.sample);
        }
        if (message.offset !== undefined) {
            obj.offset = exports.Offset.toJSON(message.offset);
        }
        if (message.deduplicate !== undefined) {
            obj.deduplicate = exports.Deduplicate.toJSON(message.deduplicate);
        }
        if (message.range !== undefined) {
            obj.range = exports.Range.toJSON(message.range);
        }
        if (message.subqueryAlias !== undefined) {
            obj.subqueryAlias = exports.SubqueryAlias.toJSON(message.subqueryAlias);
        }
        if (message.repartition !== undefined) {
            obj.repartition = exports.Repartition.toJSON(message.repartition);
        }
        if (message.toDf !== undefined) {
            obj.toDf = exports.ToDF.toJSON(message.toDf);
        }
        if (message.withColumnsRenamed !== undefined) {
            obj.withColumnsRenamed = exports.WithColumnsRenamed.toJSON(message.withColumnsRenamed);
        }
        if (message.showString !== undefined) {
            obj.showString = exports.ShowString.toJSON(message.showString);
        }
        if (message.drop !== undefined) {
            obj.drop = exports.Drop.toJSON(message.drop);
        }
        if (message.tail !== undefined) {
            obj.tail = exports.Tail.toJSON(message.tail);
        }
        if (message.withColumns !== undefined) {
            obj.withColumns = exports.WithColumns.toJSON(message.withColumns);
        }
        if (message.hint !== undefined) {
            obj.hint = exports.Hint.toJSON(message.hint);
        }
        if (message.unpivot !== undefined) {
            obj.unpivot = exports.Unpivot.toJSON(message.unpivot);
        }
        if (message.toSchema !== undefined) {
            obj.toSchema = exports.ToSchema.toJSON(message.toSchema);
        }
        if (message.repartitionByExpression !== undefined) {
            obj.repartitionByExpression = exports.RepartitionByExpression.toJSON(message.repartitionByExpression);
        }
        if (message.mapPartitions !== undefined) {
            obj.mapPartitions = exports.MapPartitions.toJSON(message.mapPartitions);
        }
        if (message.collectMetrics !== undefined) {
            obj.collectMetrics = exports.CollectMetrics.toJSON(message.collectMetrics);
        }
        if (message.parse !== undefined) {
            obj.parse = exports.Parse.toJSON(message.parse);
        }
        if (message.groupMap !== undefined) {
            obj.groupMap = exports.GroupMap.toJSON(message.groupMap);
        }
        if (message.coGroupMap !== undefined) {
            obj.coGroupMap = exports.CoGroupMap.toJSON(message.coGroupMap);
        }
        if (message.withWatermark !== undefined) {
            obj.withWatermark = exports.WithWatermark.toJSON(message.withWatermark);
        }
        if (message.applyInPandasWithState !== undefined) {
            obj.applyInPandasWithState = exports.ApplyInPandasWithState.toJSON(message.applyInPandasWithState);
        }
        if (message.htmlString !== undefined) {
            obj.htmlString = exports.HtmlString.toJSON(message.htmlString);
        }
        if (message.cachedLocalRelation !== undefined) {
            obj.cachedLocalRelation = exports.CachedLocalRelation.toJSON(message.cachedLocalRelation);
        }
        if (message.cachedRemoteRelation !== undefined) {
            obj.cachedRemoteRelation = exports.CachedRemoteRelation.toJSON(message.cachedRemoteRelation);
        }
        if (message.commonInlineUserDefinedTableFunction !== undefined) {
            obj.commonInlineUserDefinedTableFunction = exports.CommonInlineUserDefinedTableFunction.toJSON(message.commonInlineUserDefinedTableFunction);
        }
        if (message.fillNa !== undefined) {
            obj.fillNa = exports.NAFill.toJSON(message.fillNa);
        }
        if (message.dropNa !== undefined) {
            obj.dropNa = exports.NADrop.toJSON(message.dropNa);
        }
        if (message.replace !== undefined) {
            obj.replace = exports.NAReplace.toJSON(message.replace);
        }
        if (message.summary !== undefined) {
            obj.summary = exports.StatSummary.toJSON(message.summary);
        }
        if (message.crosstab !== undefined) {
            obj.crosstab = exports.StatCrosstab.toJSON(message.crosstab);
        }
        if (message.describe !== undefined) {
            obj.describe = exports.StatDescribe.toJSON(message.describe);
        }
        if (message.cov !== undefined) {
            obj.cov = exports.StatCov.toJSON(message.cov);
        }
        if (message.corr !== undefined) {
            obj.corr = exports.StatCorr.toJSON(message.corr);
        }
        if (message.approxQuantile !== undefined) {
            obj.approxQuantile = exports.StatApproxQuantile.toJSON(message.approxQuantile);
        }
        if (message.freqItems !== undefined) {
            obj.freqItems = exports.StatFreqItems.toJSON(message.freqItems);
        }
        if (message.sampleBy !== undefined) {
            obj.sampleBy = exports.StatSampleBy.toJSON(message.sampleBy);
        }
        if (message.catalog !== undefined) {
            obj.catalog = catalog_1.Catalog.toJSON(message.catalog);
        }
        if (message.extension !== undefined) {
            obj.extension = any_1.Any.toJSON(message.extension);
        }
        if (message.unknown !== undefined) {
            obj.unknown = exports.Unknown.toJSON(message.unknown);
        }
        return obj;
    },
    create: function (base) {
        return exports.Relation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseRelation();
        message.common = (object.common !== undefined && object.common !== null)
            ? exports.RelationCommon.fromPartial(object.common)
            : undefined;
        message.read = (object.read !== undefined && object.read !== null) ? exports.Read.fromPartial(object.read) : undefined;
        message.project = (object.project !== undefined && object.project !== null)
            ? exports.Project.fromPartial(object.project)
            : undefined;
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.Filter.fromPartial(object.filter)
            : undefined;
        message.join = (object.join !== undefined && object.join !== null) ? exports.Join.fromPartial(object.join) : undefined;
        message.setOp = (object.setOp !== undefined && object.setOp !== null)
            ? exports.SetOperation.fromPartial(object.setOp)
            : undefined;
        message.sort = (object.sort !== undefined && object.sort !== null) ? exports.Sort.fromPartial(object.sort) : undefined;
        message.limit = (object.limit !== undefined && object.limit !== null) ? exports.Limit.fromPartial(object.limit) : undefined;
        message.aggregate = (object.aggregate !== undefined && object.aggregate !== null)
            ? exports.Aggregate.fromPartial(object.aggregate)
            : undefined;
        message.sql = (object.sql !== undefined && object.sql !== null) ? exports.SQL.fromPartial(object.sql) : undefined;
        message.localRelation = (object.localRelation !== undefined && object.localRelation !== null)
            ? exports.LocalRelation.fromPartial(object.localRelation)
            : undefined;
        message.sample = (object.sample !== undefined && object.sample !== null)
            ? exports.Sample.fromPartial(object.sample)
            : undefined;
        message.offset = (object.offset !== undefined && object.offset !== null)
            ? exports.Offset.fromPartial(object.offset)
            : undefined;
        message.deduplicate = (object.deduplicate !== undefined && object.deduplicate !== null)
            ? exports.Deduplicate.fromPartial(object.deduplicate)
            : undefined;
        message.range = (object.range !== undefined && object.range !== null) ? exports.Range.fromPartial(object.range) : undefined;
        message.subqueryAlias = (object.subqueryAlias !== undefined && object.subqueryAlias !== null)
            ? exports.SubqueryAlias.fromPartial(object.subqueryAlias)
            : undefined;
        message.repartition = (object.repartition !== undefined && object.repartition !== null)
            ? exports.Repartition.fromPartial(object.repartition)
            : undefined;
        message.toDf = (object.toDf !== undefined && object.toDf !== null) ? exports.ToDF.fromPartial(object.toDf) : undefined;
        message.withColumnsRenamed = (object.withColumnsRenamed !== undefined && object.withColumnsRenamed !== null)
            ? exports.WithColumnsRenamed.fromPartial(object.withColumnsRenamed)
            : undefined;
        message.showString = (object.showString !== undefined && object.showString !== null)
            ? exports.ShowString.fromPartial(object.showString)
            : undefined;
        message.drop = (object.drop !== undefined && object.drop !== null) ? exports.Drop.fromPartial(object.drop) : undefined;
        message.tail = (object.tail !== undefined && object.tail !== null) ? exports.Tail.fromPartial(object.tail) : undefined;
        message.withColumns = (object.withColumns !== undefined && object.withColumns !== null)
            ? exports.WithColumns.fromPartial(object.withColumns)
            : undefined;
        message.hint = (object.hint !== undefined && object.hint !== null) ? exports.Hint.fromPartial(object.hint) : undefined;
        message.unpivot = (object.unpivot !== undefined && object.unpivot !== null)
            ? exports.Unpivot.fromPartial(object.unpivot)
            : undefined;
        message.toSchema = (object.toSchema !== undefined && object.toSchema !== null)
            ? exports.ToSchema.fromPartial(object.toSchema)
            : undefined;
        message.repartitionByExpression =
            (object.repartitionByExpression !== undefined && object.repartitionByExpression !== null)
                ? exports.RepartitionByExpression.fromPartial(object.repartitionByExpression)
                : undefined;
        message.mapPartitions = (object.mapPartitions !== undefined && object.mapPartitions !== null)
            ? exports.MapPartitions.fromPartial(object.mapPartitions)
            : undefined;
        message.collectMetrics = (object.collectMetrics !== undefined && object.collectMetrics !== null)
            ? exports.CollectMetrics.fromPartial(object.collectMetrics)
            : undefined;
        message.parse = (object.parse !== undefined && object.parse !== null) ? exports.Parse.fromPartial(object.parse) : undefined;
        message.groupMap = (object.groupMap !== undefined && object.groupMap !== null)
            ? exports.GroupMap.fromPartial(object.groupMap)
            : undefined;
        message.coGroupMap = (object.coGroupMap !== undefined && object.coGroupMap !== null)
            ? exports.CoGroupMap.fromPartial(object.coGroupMap)
            : undefined;
        message.withWatermark = (object.withWatermark !== undefined && object.withWatermark !== null)
            ? exports.WithWatermark.fromPartial(object.withWatermark)
            : undefined;
        message.applyInPandasWithState =
            (object.applyInPandasWithState !== undefined && object.applyInPandasWithState !== null)
                ? exports.ApplyInPandasWithState.fromPartial(object.applyInPandasWithState)
                : undefined;
        message.htmlString = (object.htmlString !== undefined && object.htmlString !== null)
            ? exports.HtmlString.fromPartial(object.htmlString)
            : undefined;
        message.cachedLocalRelation = (object.cachedLocalRelation !== undefined && object.cachedLocalRelation !== null)
            ? exports.CachedLocalRelation.fromPartial(object.cachedLocalRelation)
            : undefined;
        message.cachedRemoteRelation = (object.cachedRemoteRelation !== undefined && object.cachedRemoteRelation !== null)
            ? exports.CachedRemoteRelation.fromPartial(object.cachedRemoteRelation)
            : undefined;
        message.commonInlineUserDefinedTableFunction =
            (object.commonInlineUserDefinedTableFunction !== undefined &&
                object.commonInlineUserDefinedTableFunction !== null)
                ? exports.CommonInlineUserDefinedTableFunction.fromPartial(object.commonInlineUserDefinedTableFunction)
                : undefined;
        message.fillNa = (object.fillNa !== undefined && object.fillNa !== null)
            ? exports.NAFill.fromPartial(object.fillNa)
            : undefined;
        message.dropNa = (object.dropNa !== undefined && object.dropNa !== null)
            ? exports.NADrop.fromPartial(object.dropNa)
            : undefined;
        message.replace = (object.replace !== undefined && object.replace !== null)
            ? exports.NAReplace.fromPartial(object.replace)
            : undefined;
        message.summary = (object.summary !== undefined && object.summary !== null)
            ? exports.StatSummary.fromPartial(object.summary)
            : undefined;
        message.crosstab = (object.crosstab !== undefined && object.crosstab !== null)
            ? exports.StatCrosstab.fromPartial(object.crosstab)
            : undefined;
        message.describe = (object.describe !== undefined && object.describe !== null)
            ? exports.StatDescribe.fromPartial(object.describe)
            : undefined;
        message.cov = (object.cov !== undefined && object.cov !== null) ? exports.StatCov.fromPartial(object.cov) : undefined;
        message.corr = (object.corr !== undefined && object.corr !== null) ? exports.StatCorr.fromPartial(object.corr) : undefined;
        message.approxQuantile = (object.approxQuantile !== undefined && object.approxQuantile !== null)
            ? exports.StatApproxQuantile.fromPartial(object.approxQuantile)
            : undefined;
        message.freqItems = (object.freqItems !== undefined && object.freqItems !== null)
            ? exports.StatFreqItems.fromPartial(object.freqItems)
            : undefined;
        message.sampleBy = (object.sampleBy !== undefined && object.sampleBy !== null)
            ? exports.StatSampleBy.fromPartial(object.sampleBy)
            : undefined;
        message.catalog = (object.catalog !== undefined && object.catalog !== null)
            ? catalog_1.Catalog.fromPartial(object.catalog)
            : undefined;
        message.extension = (object.extension !== undefined && object.extension !== null)
            ? any_1.Any.fromPartial(object.extension)
            : undefined;
        message.unknown = (object.unknown !== undefined && object.unknown !== null)
            ? exports.Unknown.fromPartial(object.unknown)
            : undefined;
        return message;
    },
};
function createBaseUnknown() {
    return {};
}
exports.Unknown = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnknown();
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
        return exports.Unknown.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseUnknown();
        return message;
    },
};
function createBaseRelationCommon() {
    return { sourceInfo: "", planId: undefined };
}
exports.RelationCommon = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sourceInfo !== "") {
            writer.uint32(10).string(message.sourceInfo);
        }
        if (message.planId !== undefined) {
            writer.uint32(16).int64(message.planId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRelationCommon();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.planId = longToNumber(reader.int64());
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
            sourceInfo: isSet(object.sourceInfo) ? globalThis.String(object.sourceInfo) : "",
            planId: isSet(object.planId) ? globalThis.Number(object.planId) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sourceInfo !== "") {
            obj.sourceInfo = message.sourceInfo;
        }
        if (message.planId !== undefined) {
            obj.planId = Math.round(message.planId);
        }
        return obj;
    },
    create: function (base) {
        return exports.RelationCommon.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRelationCommon();
        message.sourceInfo = (_a = object.sourceInfo) !== null && _a !== void 0 ? _a : "";
        message.planId = (_b = object.planId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSQL() {
    return { query: "", args: {}, posArgs: [], namedArguments: {}, posArguments: [] };
}
exports.SQL = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.query !== "") {
            writer.uint32(10).string(message.query);
        }
        Object.entries(message.args).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SQL_ArgsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        for (var _i = 0, _a = message.posArgs; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression_Literal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.namedArguments).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SQL_NamedArgumentsEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
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
        var message = createBaseSQL();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    var entry2 = exports.SQL_ArgsEntry.decode(reader, reader.uint32());
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
                    var entry4 = exports.SQL_NamedArgumentsEntry.decode(reader, reader.uint32());
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
            query: isSet(object.query) ? globalThis.String(object.query) : "",
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
        if (message.query !== "") {
            obj.query = message.query;
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
        return exports.SQL.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSQL();
        message.query = (_a = object.query) !== null && _a !== void 0 ? _a : "";
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
function createBaseSQL_ArgsEntry() {
    return { key: "", value: undefined };
}
exports.SQL_ArgsEntry = {
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
        var message = createBaseSQL_ArgsEntry();
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
        return exports.SQL_ArgsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSQL_ArgsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? expressions_1.Expression_Literal.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseSQL_NamedArgumentsEntry() {
    return { key: "", value: undefined };
}
exports.SQL_NamedArgumentsEntry = {
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
        var message = createBaseSQL_NamedArgumentsEntry();
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
        return exports.SQL_NamedArgumentsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSQL_NamedArgumentsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? expressions_1.Expression.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseRead() {
    return { namedTable: undefined, dataSource: undefined, isStreaming: false };
}
exports.Read = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.namedTable !== undefined) {
            exports.Read_NamedTable.encode(message.namedTable, writer.uint32(10).fork()).ldelim();
        }
        if (message.dataSource !== undefined) {
            exports.Read_DataSource.encode(message.dataSource, writer.uint32(18).fork()).ldelim();
        }
        if (message.isStreaming === true) {
            writer.uint32(24).bool(message.isStreaming);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRead();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.namedTable = exports.Read_NamedTable.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.dataSource = exports.Read_DataSource.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            namedTable: isSet(object.namedTable) ? exports.Read_NamedTable.fromJSON(object.namedTable) : undefined,
            dataSource: isSet(object.dataSource) ? exports.Read_DataSource.fromJSON(object.dataSource) : undefined,
            isStreaming: isSet(object.isStreaming) ? globalThis.Boolean(object.isStreaming) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.namedTable !== undefined) {
            obj.namedTable = exports.Read_NamedTable.toJSON(message.namedTable);
        }
        if (message.dataSource !== undefined) {
            obj.dataSource = exports.Read_DataSource.toJSON(message.dataSource);
        }
        if (message.isStreaming === true) {
            obj.isStreaming = message.isStreaming;
        }
        return obj;
    },
    create: function (base) {
        return exports.Read.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRead();
        message.namedTable = (object.namedTable !== undefined && object.namedTable !== null)
            ? exports.Read_NamedTable.fromPartial(object.namedTable)
            : undefined;
        message.dataSource = (object.dataSource !== undefined && object.dataSource !== null)
            ? exports.Read_DataSource.fromPartial(object.dataSource)
            : undefined;
        message.isStreaming = (_a = object.isStreaming) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseRead_NamedTable() {
    return { unparsedIdentifier: "", options: {} };
}
exports.Read_NamedTable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.unparsedIdentifier !== "") {
            writer.uint32(10).string(message.unparsedIdentifier);
        }
        Object.entries(message.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.Read_NamedTable_OptionsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRead_NamedTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    var entry2 = exports.Read_NamedTable_OptionsEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            unparsedIdentifier: isSet(object.unparsedIdentifier) ? globalThis.String(object.unparsedIdentifier) : "",
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
        if (message.unparsedIdentifier !== "") {
            obj.unparsedIdentifier = message.unparsedIdentifier;
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
        return exports.Read_NamedTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRead_NamedTable();
        message.unparsedIdentifier = (_a = object.unparsedIdentifier) !== null && _a !== void 0 ? _a : "";
        message.options = Object.entries((_b = object.options) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseRead_NamedTable_OptionsEntry() {
    return { key: "", value: "" };
}
exports.Read_NamedTable_OptionsEntry = {
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
        var message = createBaseRead_NamedTable_OptionsEntry();
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
        return exports.Read_NamedTable_OptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRead_NamedTable_OptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRead_DataSource() {
    return { format: undefined, schema: undefined, options: {}, paths: [], predicates: [] };
}
exports.Read_DataSource = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.format !== undefined) {
            writer.uint32(10).string(message.format);
        }
        if (message.schema !== undefined) {
            writer.uint32(18).string(message.schema);
        }
        Object.entries(message.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.Read_DataSource_OptionsEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        for (var _i = 0, _a = message.paths; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        for (var _b = 0, _c = message.predicates; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRead_DataSource();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    var entry3 = exports.Read_DataSource_OptionsEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            format: isSet(object.format) ? globalThis.String(object.format) : undefined,
            schema: isSet(object.schema) ? globalThis.String(object.schema) : undefined,
            options: isObject(object.options)
                ? Object.entries(object.options).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            paths: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map(function (e) { return globalThis.String(e); }) : [],
            predicates: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.predicates)
                ? object.predicates.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.format !== undefined) {
            obj.format = message.format;
        }
        if (message.schema !== undefined) {
            obj.schema = message.schema;
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
        if ((_a = message.paths) === null || _a === void 0 ? void 0 : _a.length) {
            obj.paths = message.paths;
        }
        if ((_b = message.predicates) === null || _b === void 0 ? void 0 : _b.length) {
            obj.predicates = message.predicates;
        }
        return obj;
    },
    create: function (base) {
        return exports.Read_DataSource.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseRead_DataSource();
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : undefined;
        message.schema = (_b = object.schema) !== null && _b !== void 0 ? _b : undefined;
        message.options = Object.entries((_c = object.options) !== null && _c !== void 0 ? _c : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        message.paths = ((_d = object.paths) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.predicates = ((_e = object.predicates) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseRead_DataSource_OptionsEntry() {
    return { key: "", value: "" };
}
exports.Read_DataSource_OptionsEntry = {
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
        var message = createBaseRead_DataSource_OptionsEntry();
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
        return exports.Read_DataSource_OptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRead_DataSource_OptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseProject() {
    return { input: undefined, expressions: [] };
}
exports.Project = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.expressions; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProject();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.expressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            expressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.expressions)
                ? object.expressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.expressions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.expressions = message.expressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.Project.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseProject();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.expressions = ((_a = object.expressions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseFilter() {
    return { input: undefined, condition: undefined };
}
exports.Filter = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.condition !== undefined) {
            expressions_1.Expression.encode(message.condition, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFilter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.condition = expressions_1.Expression.decode(reader, reader.uint32());
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            condition: isSet(object.condition) ? expressions_1.Expression.fromJSON(object.condition) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.condition !== undefined) {
            obj.condition = expressions_1.Expression.toJSON(message.condition);
        }
        return obj;
    },
    create: function (base) {
        return exports.Filter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseFilter();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.condition = (object.condition !== undefined && object.condition !== null)
            ? expressions_1.Expression.fromPartial(object.condition)
            : undefined;
        return message;
    },
};
function createBaseJoin() {
    return {
        left: undefined,
        right: undefined,
        joinCondition: undefined,
        joinType: 0,
        usingColumns: [],
        joinDataType: undefined,
    };
}
exports.Join = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.left !== undefined) {
            exports.Relation.encode(message.left, writer.uint32(10).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.Relation.encode(message.right, writer.uint32(18).fork()).ldelim();
        }
        if (message.joinCondition !== undefined) {
            expressions_1.Expression.encode(message.joinCondition, writer.uint32(26).fork()).ldelim();
        }
        if (message.joinType !== 0) {
            writer.uint32(32).int32(message.joinType);
        }
        for (var _i = 0, _a = message.usingColumns; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(42).string(v);
        }
        if (message.joinDataType !== undefined) {
            exports.Join_JoinDataType.encode(message.joinDataType, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseJoin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.left = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.right = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.joinCondition = expressions_1.Expression.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.joinType = reader.int32();
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
                    message.joinDataType = exports.Join_JoinDataType.decode(reader, reader.uint32());
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
            left: isSet(object.left) ? exports.Relation.fromJSON(object.left) : undefined,
            right: isSet(object.right) ? exports.Relation.fromJSON(object.right) : undefined,
            joinCondition: isSet(object.joinCondition) ? expressions_1.Expression.fromJSON(object.joinCondition) : undefined,
            joinType: isSet(object.joinType) ? join_JoinTypeFromJSON(object.joinType) : 0,
            usingColumns: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.usingColumns)
                ? object.usingColumns.map(function (e) { return globalThis.String(e); })
                : [],
            joinDataType: isSet(object.joinDataType) ? exports.Join_JoinDataType.fromJSON(object.joinDataType) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.left !== undefined) {
            obj.left = exports.Relation.toJSON(message.left);
        }
        if (message.right !== undefined) {
            obj.right = exports.Relation.toJSON(message.right);
        }
        if (message.joinCondition !== undefined) {
            obj.joinCondition = expressions_1.Expression.toJSON(message.joinCondition);
        }
        if (message.joinType !== 0) {
            obj.joinType = join_JoinTypeToJSON(message.joinType);
        }
        if ((_a = message.usingColumns) === null || _a === void 0 ? void 0 : _a.length) {
            obj.usingColumns = message.usingColumns;
        }
        if (message.joinDataType !== undefined) {
            obj.joinDataType = exports.Join_JoinDataType.toJSON(message.joinDataType);
        }
        return obj;
    },
    create: function (base) {
        return exports.Join.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseJoin();
        message.left = (object.left !== undefined && object.left !== null) ? exports.Relation.fromPartial(object.left) : undefined;
        message.right = (object.right !== undefined && object.right !== null)
            ? exports.Relation.fromPartial(object.right)
            : undefined;
        message.joinCondition = (object.joinCondition !== undefined && object.joinCondition !== null)
            ? expressions_1.Expression.fromPartial(object.joinCondition)
            : undefined;
        message.joinType = (_a = object.joinType) !== null && _a !== void 0 ? _a : 0;
        message.usingColumns = ((_b = object.usingColumns) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.joinDataType = (object.joinDataType !== undefined && object.joinDataType !== null)
            ? exports.Join_JoinDataType.fromPartial(object.joinDataType)
            : undefined;
        return message;
    },
};
function createBaseJoin_JoinDataType() {
    return { isLeftStruct: false, isRightStruct: false };
}
exports.Join_JoinDataType = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.isLeftStruct === true) {
            writer.uint32(8).bool(message.isLeftStruct);
        }
        if (message.isRightStruct === true) {
            writer.uint32(16).bool(message.isRightStruct);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseJoin_JoinDataType();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            isLeftStruct: isSet(object.isLeftStruct) ? globalThis.Boolean(object.isLeftStruct) : false,
            isRightStruct: isSet(object.isRightStruct) ? globalThis.Boolean(object.isRightStruct) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.isLeftStruct === true) {
            obj.isLeftStruct = message.isLeftStruct;
        }
        if (message.isRightStruct === true) {
            obj.isRightStruct = message.isRightStruct;
        }
        return obj;
    },
    create: function (base) {
        return exports.Join_JoinDataType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseJoin_JoinDataType();
        message.isLeftStruct = (_a = object.isLeftStruct) !== null && _a !== void 0 ? _a : false;
        message.isRightStruct = (_b = object.isRightStruct) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSetOperation() {
    return {
        leftInput: undefined,
        rightInput: undefined,
        setOpType: 0,
        isAll: undefined,
        byName: undefined,
        allowMissingColumns: undefined,
    };
}
exports.SetOperation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.leftInput !== undefined) {
            exports.Relation.encode(message.leftInput, writer.uint32(10).fork()).ldelim();
        }
        if (message.rightInput !== undefined) {
            exports.Relation.encode(message.rightInput, writer.uint32(18).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSetOperation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leftInput = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.rightInput = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.setOpType = reader.int32();
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
    fromJSON: function (object) {
        return {
            leftInput: isSet(object.leftInput) ? exports.Relation.fromJSON(object.leftInput) : undefined,
            rightInput: isSet(object.rightInput) ? exports.Relation.fromJSON(object.rightInput) : undefined,
            setOpType: isSet(object.setOpType) ? setOperation_SetOpTypeFromJSON(object.setOpType) : 0,
            isAll: isSet(object.isAll) ? globalThis.Boolean(object.isAll) : undefined,
            byName: isSet(object.byName) ? globalThis.Boolean(object.byName) : undefined,
            allowMissingColumns: isSet(object.allowMissingColumns)
                ? globalThis.Boolean(object.allowMissingColumns)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.leftInput !== undefined) {
            obj.leftInput = exports.Relation.toJSON(message.leftInput);
        }
        if (message.rightInput !== undefined) {
            obj.rightInput = exports.Relation.toJSON(message.rightInput);
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
    create: function (base) {
        return exports.SetOperation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSetOperation();
        message.leftInput = (object.leftInput !== undefined && object.leftInput !== null)
            ? exports.Relation.fromPartial(object.leftInput)
            : undefined;
        message.rightInput = (object.rightInput !== undefined && object.rightInput !== null)
            ? exports.Relation.fromPartial(object.rightInput)
            : undefined;
        message.setOpType = (_a = object.setOpType) !== null && _a !== void 0 ? _a : 0;
        message.isAll = (_b = object.isAll) !== null && _b !== void 0 ? _b : undefined;
        message.byName = (_c = object.byName) !== null && _c !== void 0 ? _c : undefined;
        message.allowMissingColumns = (_d = object.allowMissingColumns) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseLimit() {
    return { input: undefined, limit: 0 };
}
exports.Limit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.limit !== 0) {
            writer.uint32(16).int32(message.limit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLimit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        return obj;
    },
    create: function (base) {
        return exports.Limit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseLimit();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseOffset() {
    return { input: undefined, offset: 0 };
}
exports.Offset = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.offset !== 0) {
            writer.uint32(16).int32(message.offset);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOffset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create: function (base) {
        return exports.Offset.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOffset();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.offset = (_a = object.offset) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseTail() {
    return { input: undefined, limit: 0 };
}
exports.Tail = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.limit !== 0) {
            writer.uint32(16).int32(message.limit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTail();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        return obj;
    },
    create: function (base) {
        return exports.Tail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTail();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseAggregate() {
    return { input: undefined, groupType: 0, groupingExpressions: [], aggregateExpressions: [], pivot: undefined };
}
exports.Aggregate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.groupType !== 0) {
            writer.uint32(16).int32(message.groupType);
        }
        for (var _i = 0, _a = message.groupingExpressions; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.aggregateExpressions; _b < _c.length; _b++) {
            var v = _c[_b];
            expressions_1.Expression.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.pivot !== undefined) {
            exports.Aggregate_Pivot.encode(message.pivot, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAggregate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.groupingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.aggregateExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.pivot = exports.Aggregate_Pivot.decode(reader, reader.uint32());
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            groupType: isSet(object.groupType) ? aggregate_GroupTypeFromJSON(object.groupType) : 0,
            groupingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.groupingExpressions)
                ? object.groupingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            aggregateExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.aggregateExpressions)
                ? object.aggregateExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            pivot: isSet(object.pivot) ? exports.Aggregate_Pivot.fromJSON(object.pivot) : undefined,
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.groupType !== 0) {
            obj.groupType = aggregate_GroupTypeToJSON(message.groupType);
        }
        if ((_a = message.groupingExpressions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groupingExpressions = message.groupingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if ((_b = message.aggregateExpressions) === null || _b === void 0 ? void 0 : _b.length) {
            obj.aggregateExpressions = message.aggregateExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.pivot !== undefined) {
            obj.pivot = exports.Aggregate_Pivot.toJSON(message.pivot);
        }
        return obj;
    },
    create: function (base) {
        return exports.Aggregate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAggregate();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.groupType = (_a = object.groupType) !== null && _a !== void 0 ? _a : 0;
        message.groupingExpressions = ((_b = object.groupingExpressions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.aggregateExpressions = ((_c = object.aggregateExpressions) === null || _c === void 0 ? void 0 : _c.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.pivot = (object.pivot !== undefined && object.pivot !== null)
            ? exports.Aggregate_Pivot.fromPartial(object.pivot)
            : undefined;
        return message;
    },
};
function createBaseAggregate_Pivot() {
    return { col: undefined, values: [] };
}
exports.Aggregate_Pivot = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.col !== undefined) {
            expressions_1.Expression.encode(message.col, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseAggregate_Pivot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.col = expressions_1.Expression.decode(reader, reader.uint32());
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
            col: isSet(object.col) ? expressions_1.Expression.fromJSON(object.col) : undefined,
            values: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.values)
                ? object.values.map(function (e) { return expressions_1.Expression_Literal.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.col !== undefined) {
            obj.col = expressions_1.Expression.toJSON(message.col);
        }
        if ((_a = message.values) === null || _a === void 0 ? void 0 : _a.length) {
            obj.values = message.values.map(function (e) { return expressions_1.Expression_Literal.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.Aggregate_Pivot.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAggregate_Pivot();
        message.col = (object.col !== undefined && object.col !== null) ? expressions_1.Expression.fromPartial(object.col) : undefined;
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression_Literal.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSort() {
    return { input: undefined, order: [], isGlobal: undefined };
}
exports.Sort = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.order; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression_SortOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.isGlobal !== undefined) {
            writer.uint32(24).bool(message.isGlobal);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSort();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.order.push(expressions_1.Expression_SortOrder.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            order: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.order)
                ? object.order.map(function (e) { return expressions_1.Expression_SortOrder.fromJSON(e); })
                : [],
            isGlobal: isSet(object.isGlobal) ? globalThis.Boolean(object.isGlobal) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.order) === null || _a === void 0 ? void 0 : _a.length) {
            obj.order = message.order.map(function (e) { return expressions_1.Expression_SortOrder.toJSON(e); });
        }
        if (message.isGlobal !== undefined) {
            obj.isGlobal = message.isGlobal;
        }
        return obj;
    },
    create: function (base) {
        return exports.Sort.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSort();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.order = ((_a = object.order) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression_SortOrder.fromPartial(e); })) || [];
        message.isGlobal = (_b = object.isGlobal) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseDrop() {
    return { input: undefined, columns: [], columnNames: [] };
}
exports.Drop = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.columns; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.columnNames; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDrop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.columns.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            columns: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.columns) ? object.columns.map(function (e) { return expressions_1.Expression.fromJSON(e); }) : [],
            columnNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.columnNames)
                ? object.columnNames.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.columns) === null || _a === void 0 ? void 0 : _a.length) {
            obj.columns = message.columns.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if ((_b = message.columnNames) === null || _b === void 0 ? void 0 : _b.length) {
            obj.columnNames = message.columnNames;
        }
        return obj;
    },
    create: function (base) {
        return exports.Drop.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDrop();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.columns = ((_a = object.columns) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.columnNames = ((_b = object.columnNames) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseDeduplicate() {
    return { input: undefined, columnNames: [], allColumnsAsKeys: undefined, withinWatermark: undefined };
}
exports.Deduplicate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.columnNames; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.allColumnsAsKeys !== undefined) {
            writer.uint32(24).bool(message.allColumnsAsKeys);
        }
        if (message.withinWatermark !== undefined) {
            writer.uint32(32).bool(message.withinWatermark);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeduplicate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            columnNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.columnNames)
                ? object.columnNames.map(function (e) { return globalThis.String(e); })
                : [],
            allColumnsAsKeys: isSet(object.allColumnsAsKeys) ? globalThis.Boolean(object.allColumnsAsKeys) : undefined,
            withinWatermark: isSet(object.withinWatermark) ? globalThis.Boolean(object.withinWatermark) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.columnNames) === null || _a === void 0 ? void 0 : _a.length) {
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
    create: function (base) {
        return exports.Deduplicate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDeduplicate();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.columnNames = ((_a = object.columnNames) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.allColumnsAsKeys = (_b = object.allColumnsAsKeys) !== null && _b !== void 0 ? _b : undefined;
        message.withinWatermark = (_c = object.withinWatermark) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseLocalRelation() {
    return { data: undefined, schema: undefined };
}
exports.LocalRelation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.data !== undefined) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.schema !== undefined) {
            writer.uint32(18).string(message.schema);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLocalRelation();
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
    fromJSON: function (object) {
        return {
            data: isSet(object.data) ? bytesFromBase64(object.data) : undefined,
            schema: isSet(object.schema) ? globalThis.String(object.schema) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.data !== undefined) {
            obj.data = base64FromBytes(message.data);
        }
        if (message.schema !== undefined) {
            obj.schema = message.schema;
        }
        return obj;
    },
    create: function (base) {
        return exports.LocalRelation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLocalRelation();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : undefined;
        message.schema = (_b = object.schema) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseCachedLocalRelation() {
    return { hash: "" };
}
exports.CachedLocalRelation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCachedLocalRelation();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { hash: isSet(object.hash) ? globalThis.String(object.hash) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        return obj;
    },
    create: function (base) {
        return exports.CachedLocalRelation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCachedLocalRelation();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCachedRemoteRelation() {
    return { relationId: "" };
}
exports.CachedRemoteRelation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.relationId !== "") {
            writer.uint32(10).string(message.relationId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCachedRemoteRelation();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { relationId: isSet(object.relationId) ? globalThis.String(object.relationId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.relationId !== "") {
            obj.relationId = message.relationId;
        }
        return obj;
    },
    create: function (base) {
        return exports.CachedRemoteRelation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCachedRemoteRelation();
        message.relationId = (_a = object.relationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSample() {
    return {
        input: undefined,
        lowerBound: 0,
        upperBound: 0,
        withReplacement: undefined,
        seed: undefined,
        deterministicOrder: false,
    };
}
exports.Sample = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSample();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
                    message.seed = longToNumber(reader.int64());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            lowerBound: isSet(object.lowerBound) ? globalThis.Number(object.lowerBound) : 0,
            upperBound: isSet(object.upperBound) ? globalThis.Number(object.upperBound) : 0,
            withReplacement: isSet(object.withReplacement) ? globalThis.Boolean(object.withReplacement) : undefined,
            seed: isSet(object.seed) ? globalThis.Number(object.seed) : undefined,
            deterministicOrder: isSet(object.deterministicOrder) ? globalThis.Boolean(object.deterministicOrder) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
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
    create: function (base) {
        return exports.Sample.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSample();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.lowerBound = (_a = object.lowerBound) !== null && _a !== void 0 ? _a : 0;
        message.upperBound = (_b = object.upperBound) !== null && _b !== void 0 ? _b : 0;
        message.withReplacement = (_c = object.withReplacement) !== null && _c !== void 0 ? _c : undefined;
        message.seed = (_d = object.seed) !== null && _d !== void 0 ? _d : undefined;
        message.deterministicOrder = (_e = object.deterministicOrder) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseRange() {
    return { start: undefined, end: 0, step: 0, numPartitions: undefined };
}
exports.Range = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.step = longToNumber(reader.int64());
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
    fromJSON: function (object) {
        return {
            start: isSet(object.start) ? globalThis.Number(object.start) : undefined,
            end: isSet(object.end) ? globalThis.Number(object.end) : 0,
            step: isSet(object.step) ? globalThis.Number(object.step) : 0,
            numPartitions: isSet(object.numPartitions) ? globalThis.Number(object.numPartitions) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.Range.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : undefined;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        message.step = (_c = object.step) !== null && _c !== void 0 ? _c : 0;
        message.numPartitions = (_d = object.numPartitions) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseSubqueryAlias() {
    return { input: undefined, alias: "", qualifier: [] };
}
exports.SubqueryAlias = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.alias !== "") {
            writer.uint32(18).string(message.alias);
        }
        for (var _i = 0, _a = message.qualifier; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubqueryAlias();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
            qualifier: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.qualifier)
                ? object.qualifier.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.alias !== "") {
            obj.alias = message.alias;
        }
        if ((_a = message.qualifier) === null || _a === void 0 ? void 0 : _a.length) {
            obj.qualifier = message.qualifier;
        }
        return obj;
    },
    create: function (base) {
        return exports.SubqueryAlias.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSubqueryAlias();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.alias = (_a = object.alias) !== null && _a !== void 0 ? _a : "";
        message.qualifier = ((_b = object.qualifier) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseRepartition() {
    return { input: undefined, numPartitions: 0, shuffle: undefined };
}
exports.Repartition = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.numPartitions !== 0) {
            writer.uint32(16).int32(message.numPartitions);
        }
        if (message.shuffle !== undefined) {
            writer.uint32(24).bool(message.shuffle);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRepartition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            numPartitions: isSet(object.numPartitions) ? globalThis.Number(object.numPartitions) : 0,
            shuffle: isSet(object.shuffle) ? globalThis.Boolean(object.shuffle) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.numPartitions !== 0) {
            obj.numPartitions = Math.round(message.numPartitions);
        }
        if (message.shuffle !== undefined) {
            obj.shuffle = message.shuffle;
        }
        return obj;
    },
    create: function (base) {
        return exports.Repartition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRepartition();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.numPartitions = (_a = object.numPartitions) !== null && _a !== void 0 ? _a : 0;
        message.shuffle = (_b = object.shuffle) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseShowString() {
    return { input: undefined, numRows: 0, truncate: 0, vertical: false };
}
exports.ShowString = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseShowString();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            numRows: isSet(object.numRows) ? globalThis.Number(object.numRows) : 0,
            truncate: isSet(object.truncate) ? globalThis.Number(object.truncate) : 0,
            vertical: isSet(object.vertical) ? globalThis.Boolean(object.vertical) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
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
    create: function (base) {
        return exports.ShowString.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseShowString();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.numRows = (_a = object.numRows) !== null && _a !== void 0 ? _a : 0;
        message.truncate = (_b = object.truncate) !== null && _b !== void 0 ? _b : 0;
        message.vertical = (_c = object.vertical) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseHtmlString() {
    return { input: undefined, numRows: 0, truncate: 0 };
}
exports.HtmlString = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.numRows !== 0) {
            writer.uint32(16).int32(message.numRows);
        }
        if (message.truncate !== 0) {
            writer.uint32(24).int32(message.truncate);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHtmlString();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            numRows: isSet(object.numRows) ? globalThis.Number(object.numRows) : 0,
            truncate: isSet(object.truncate) ? globalThis.Number(object.truncate) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.numRows !== 0) {
            obj.numRows = Math.round(message.numRows);
        }
        if (message.truncate !== 0) {
            obj.truncate = Math.round(message.truncate);
        }
        return obj;
    },
    create: function (base) {
        return exports.HtmlString.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseHtmlString();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.numRows = (_a = object.numRows) !== null && _a !== void 0 ? _a : 0;
        message.truncate = (_b = object.truncate) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseStatSummary() {
    return { input: undefined, statistics: [] };
}
exports.StatSummary = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.statistics; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            statistics: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.statistics)
                ? object.statistics.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.statistics) === null || _a === void 0 ? void 0 : _a.length) {
            obj.statistics = message.statistics;
        }
        return obj;
    },
    create: function (base) {
        return exports.StatSummary.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStatSummary();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.statistics = ((_a = object.statistics) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseStatDescribe() {
    return { input: undefined, cols: [] };
}
exports.StatDescribe = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.cols; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatDescribe();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            cols: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.cols) ? object.cols.map(function (e) { return globalThis.String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.cols) === null || _a === void 0 ? void 0 : _a.length) {
            obj.cols = message.cols;
        }
        return obj;
    },
    create: function (base) {
        return exports.StatDescribe.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStatDescribe();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.cols = ((_a = object.cols) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseStatCrosstab() {
    return { input: undefined, col1: "", col2: "" };
}
exports.StatCrosstab = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.col1 !== "") {
            writer.uint32(18).string(message.col1);
        }
        if (message.col2 !== "") {
            writer.uint32(26).string(message.col2);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatCrosstab();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            col1: isSet(object.col1) ? globalThis.String(object.col1) : "",
            col2: isSet(object.col2) ? globalThis.String(object.col2) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.col1 !== "") {
            obj.col1 = message.col1;
        }
        if (message.col2 !== "") {
            obj.col2 = message.col2;
        }
        return obj;
    },
    create: function (base) {
        return exports.StatCrosstab.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStatCrosstab();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.col1 = (_a = object.col1) !== null && _a !== void 0 ? _a : "";
        message.col2 = (_b = object.col2) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStatCov() {
    return { input: undefined, col1: "", col2: "" };
}
exports.StatCov = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.col1 !== "") {
            writer.uint32(18).string(message.col1);
        }
        if (message.col2 !== "") {
            writer.uint32(26).string(message.col2);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatCov();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            col1: isSet(object.col1) ? globalThis.String(object.col1) : "",
            col2: isSet(object.col2) ? globalThis.String(object.col2) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.col1 !== "") {
            obj.col1 = message.col1;
        }
        if (message.col2 !== "") {
            obj.col2 = message.col2;
        }
        return obj;
    },
    create: function (base) {
        return exports.StatCov.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStatCov();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.col1 = (_a = object.col1) !== null && _a !== void 0 ? _a : "";
        message.col2 = (_b = object.col2) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStatCorr() {
    return { input: undefined, col1: "", col2: "", method: undefined };
}
exports.StatCorr = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatCorr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            col1: isSet(object.col1) ? globalThis.String(object.col1) : "",
            col2: isSet(object.col2) ? globalThis.String(object.col2) : "",
            method: isSet(object.method) ? globalThis.String(object.method) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
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
    create: function (base) {
        return exports.StatCorr.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStatCorr();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.col1 = (_a = object.col1) !== null && _a !== void 0 ? _a : "";
        message.col2 = (_b = object.col2) !== null && _b !== void 0 ? _b : "";
        message.method = (_c = object.method) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseStatApproxQuantile() {
    return { input: undefined, cols: [], probabilities: [], relativeError: 0 };
}
exports.StatApproxQuantile = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.cols; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        writer.uint32(26).fork();
        for (var _b = 0, _c = message.probabilities; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.double(v);
        }
        writer.ldelim();
        if (message.relativeError !== 0) {
            writer.uint32(33).double(message.relativeError);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatApproxQuantile();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
                        var end2 = reader.uint32() + reader.pos;
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            cols: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.cols) ? object.cols.map(function (e) { return globalThis.String(e); }) : [],
            probabilities: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.probabilities)
                ? object.probabilities.map(function (e) { return globalThis.Number(e); })
                : [],
            relativeError: isSet(object.relativeError) ? globalThis.Number(object.relativeError) : 0,
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.cols) === null || _a === void 0 ? void 0 : _a.length) {
            obj.cols = message.cols;
        }
        if ((_b = message.probabilities) === null || _b === void 0 ? void 0 : _b.length) {
            obj.probabilities = message.probabilities;
        }
        if (message.relativeError !== 0) {
            obj.relativeError = message.relativeError;
        }
        return obj;
    },
    create: function (base) {
        return exports.StatApproxQuantile.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStatApproxQuantile();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.cols = ((_a = object.cols) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.probabilities = ((_b = object.probabilities) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.relativeError = (_c = object.relativeError) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseStatFreqItems() {
    return { input: undefined, cols: [], support: undefined };
}
exports.StatFreqItems = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.cols; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.support !== undefined) {
            writer.uint32(25).double(message.support);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatFreqItems();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            cols: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.cols) ? object.cols.map(function (e) { return globalThis.String(e); }) : [],
            support: isSet(object.support) ? globalThis.Number(object.support) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.cols) === null || _a === void 0 ? void 0 : _a.length) {
            obj.cols = message.cols;
        }
        if (message.support !== undefined) {
            obj.support = message.support;
        }
        return obj;
    },
    create: function (base) {
        return exports.StatFreqItems.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStatFreqItems();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.cols = ((_a = object.cols) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.support = (_b = object.support) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseStatSampleBy() {
    return { input: undefined, col: undefined, fractions: [], seed: undefined };
}
exports.StatSampleBy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.col !== undefined) {
            expressions_1.Expression.encode(message.col, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.fractions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StatSampleBy_Fraction.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.seed !== undefined) {
            writer.uint32(40).int64(message.seed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatSampleBy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.col = expressions_1.Expression.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fractions.push(exports.StatSampleBy_Fraction.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.seed = longToNumber(reader.int64());
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            col: isSet(object.col) ? expressions_1.Expression.fromJSON(object.col) : undefined,
            fractions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.fractions)
                ? object.fractions.map(function (e) { return exports.StatSampleBy_Fraction.fromJSON(e); })
                : [],
            seed: isSet(object.seed) ? globalThis.Number(object.seed) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.col !== undefined) {
            obj.col = expressions_1.Expression.toJSON(message.col);
        }
        if ((_a = message.fractions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.fractions = message.fractions.map(function (e) { return exports.StatSampleBy_Fraction.toJSON(e); });
        }
        if (message.seed !== undefined) {
            obj.seed = Math.round(message.seed);
        }
        return obj;
    },
    create: function (base) {
        return exports.StatSampleBy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStatSampleBy();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.col = (object.col !== undefined && object.col !== null) ? expressions_1.Expression.fromPartial(object.col) : undefined;
        message.fractions = ((_a = object.fractions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StatSampleBy_Fraction.fromPartial(e); })) || [];
        message.seed = (_b = object.seed) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseStatSampleBy_Fraction() {
    return { stratum: undefined, fraction: 0 };
}
exports.StatSampleBy_Fraction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.stratum !== undefined) {
            expressions_1.Expression_Literal.encode(message.stratum, writer.uint32(10).fork()).ldelim();
        }
        if (message.fraction !== 0) {
            writer.uint32(17).double(message.fraction);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatSampleBy_Fraction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.stratum = expressions_1.Expression_Literal.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            stratum: isSet(object.stratum) ? expressions_1.Expression_Literal.fromJSON(object.stratum) : undefined,
            fraction: isSet(object.fraction) ? globalThis.Number(object.fraction) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.stratum !== undefined) {
            obj.stratum = expressions_1.Expression_Literal.toJSON(message.stratum);
        }
        if (message.fraction !== 0) {
            obj.fraction = message.fraction;
        }
        return obj;
    },
    create: function (base) {
        return exports.StatSampleBy_Fraction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStatSampleBy_Fraction();
        message.stratum = (object.stratum !== undefined && object.stratum !== null)
            ? expressions_1.Expression_Literal.fromPartial(object.stratum)
            : undefined;
        message.fraction = (_a = object.fraction) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseNAFill() {
    return { input: undefined, cols: [], values: [] };
}
exports.NAFill = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.cols; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        for (var _b = 0, _c = message.values; _b < _c.length; _b++) {
            var v = _c[_b];
            expressions_1.Expression_Literal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNAFill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            cols: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.cols) ? object.cols.map(function (e) { return globalThis.String(e); }) : [],
            values: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.values)
                ? object.values.map(function (e) { return expressions_1.Expression_Literal.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.cols) === null || _a === void 0 ? void 0 : _a.length) {
            obj.cols = message.cols;
        }
        if ((_b = message.values) === null || _b === void 0 ? void 0 : _b.length) {
            obj.values = message.values.map(function (e) { return expressions_1.Expression_Literal.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.NAFill.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseNAFill();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.cols = ((_a = object.cols) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map(function (e) { return expressions_1.Expression_Literal.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseNADrop() {
    return { input: undefined, cols: [], minNonNulls: undefined };
}
exports.NADrop = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.cols; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.minNonNulls !== undefined) {
            writer.uint32(24).int32(message.minNonNulls);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNADrop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            cols: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.cols) ? object.cols.map(function (e) { return globalThis.String(e); }) : [],
            minNonNulls: isSet(object.minNonNulls) ? globalThis.Number(object.minNonNulls) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.cols) === null || _a === void 0 ? void 0 : _a.length) {
            obj.cols = message.cols;
        }
        if (message.minNonNulls !== undefined) {
            obj.minNonNulls = Math.round(message.minNonNulls);
        }
        return obj;
    },
    create: function (base) {
        return exports.NADrop.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseNADrop();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.cols = ((_a = object.cols) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.minNonNulls = (_b = object.minNonNulls) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseNAReplace() {
    return { input: undefined, cols: [], replacements: [] };
}
exports.NAReplace = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.cols; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        for (var _b = 0, _c = message.replacements; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.NAReplace_Replacement.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNAReplace();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
                    message.replacements.push(exports.NAReplace_Replacement.decode(reader, reader.uint32()));
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            cols: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.cols) ? object.cols.map(function (e) { return globalThis.String(e); }) : [],
            replacements: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.replacements)
                ? object.replacements.map(function (e) { return exports.NAReplace_Replacement.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.cols) === null || _a === void 0 ? void 0 : _a.length) {
            obj.cols = message.cols;
        }
        if ((_b = message.replacements) === null || _b === void 0 ? void 0 : _b.length) {
            obj.replacements = message.replacements.map(function (e) { return exports.NAReplace_Replacement.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.NAReplace.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseNAReplace();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.cols = ((_a = object.cols) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.replacements = ((_b = object.replacements) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.NAReplace_Replacement.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseNAReplace_Replacement() {
    return { oldValue: undefined, newValue: undefined };
}
exports.NAReplace_Replacement = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.oldValue !== undefined) {
            expressions_1.Expression_Literal.encode(message.oldValue, writer.uint32(10).fork()).ldelim();
        }
        if (message.newValue !== undefined) {
            expressions_1.Expression_Literal.encode(message.newValue, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNAReplace_Replacement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.oldValue = expressions_1.Expression_Literal.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newValue = expressions_1.Expression_Literal.decode(reader, reader.uint32());
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
            oldValue: isSet(object.oldValue) ? expressions_1.Expression_Literal.fromJSON(object.oldValue) : undefined,
            newValue: isSet(object.newValue) ? expressions_1.Expression_Literal.fromJSON(object.newValue) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.oldValue !== undefined) {
            obj.oldValue = expressions_1.Expression_Literal.toJSON(message.oldValue);
        }
        if (message.newValue !== undefined) {
            obj.newValue = expressions_1.Expression_Literal.toJSON(message.newValue);
        }
        return obj;
    },
    create: function (base) {
        return exports.NAReplace_Replacement.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseNAReplace_Replacement();
        message.oldValue = (object.oldValue !== undefined && object.oldValue !== null)
            ? expressions_1.Expression_Literal.fromPartial(object.oldValue)
            : undefined;
        message.newValue = (object.newValue !== undefined && object.newValue !== null)
            ? expressions_1.Expression_Literal.fromPartial(object.newValue)
            : undefined;
        return message;
    },
};
function createBaseToDF() {
    return { input: undefined, columnNames: [] };
}
exports.ToDF = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.columnNames; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseToDF();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            columnNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.columnNames)
                ? object.columnNames.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.columnNames) === null || _a === void 0 ? void 0 : _a.length) {
            obj.columnNames = message.columnNames;
        }
        return obj;
    },
    create: function (base) {
        return exports.ToDF.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseToDF();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.columnNames = ((_a = object.columnNames) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseWithColumnsRenamed() {
    return { input: undefined, renameColumnsMap: {} };
}
exports.WithColumnsRenamed = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.renameColumnsMap).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.WithColumnsRenamed_RenameColumnsMapEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWithColumnsRenamed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    var entry2 = exports.WithColumnsRenamed_RenameColumnsMapEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            renameColumnsMap: isObject(object.renameColumnsMap)
                ? Object.entries(object.renameColumnsMap).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.renameColumnsMap) {
            var entries = Object.entries(message.renameColumnsMap);
            if (entries.length > 0) {
                obj.renameColumnsMap = {};
                entries.forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    obj.renameColumnsMap[k] = v;
                });
            }
        }
        return obj;
    },
    create: function (base) {
        return exports.WithColumnsRenamed.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseWithColumnsRenamed();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.renameColumnsMap = Object.entries((_a = object.renameColumnsMap) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseWithColumnsRenamed_RenameColumnsMapEntry() {
    return { key: "", value: "" };
}
exports.WithColumnsRenamed_RenameColumnsMapEntry = {
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
        var message = createBaseWithColumnsRenamed_RenameColumnsMapEntry();
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
        return exports.WithColumnsRenamed_RenameColumnsMapEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWithColumnsRenamed_RenameColumnsMapEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseWithColumns() {
    return { input: undefined, aliases: [] };
}
exports.WithColumns = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.aliases; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression_Alias.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWithColumns();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.aliases.push(expressions_1.Expression_Alias.decode(reader, reader.uint32()));
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            aliases: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.aliases)
                ? object.aliases.map(function (e) { return expressions_1.Expression_Alias.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.aliases) === null || _a === void 0 ? void 0 : _a.length) {
            obj.aliases = message.aliases.map(function (e) { return expressions_1.Expression_Alias.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.WithColumns.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseWithColumns();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.aliases = ((_a = object.aliases) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression_Alias.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseWithWatermark() {
    return { input: undefined, eventTime: "", delayThreshold: "" };
}
exports.WithWatermark = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.eventTime !== "") {
            writer.uint32(18).string(message.eventTime);
        }
        if (message.delayThreshold !== "") {
            writer.uint32(26).string(message.delayThreshold);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWithWatermark();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            eventTime: isSet(object.eventTime) ? globalThis.String(object.eventTime) : "",
            delayThreshold: isSet(object.delayThreshold) ? globalThis.String(object.delayThreshold) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.eventTime !== "") {
            obj.eventTime = message.eventTime;
        }
        if (message.delayThreshold !== "") {
            obj.delayThreshold = message.delayThreshold;
        }
        return obj;
    },
    create: function (base) {
        return exports.WithWatermark.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWithWatermark();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.eventTime = (_a = object.eventTime) !== null && _a !== void 0 ? _a : "";
        message.delayThreshold = (_b = object.delayThreshold) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseHint() {
    return { input: undefined, name: "", parameters: [] };
}
exports.Hint = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (var _i = 0, _a = message.parameters; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHint();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
                    message.parameters.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            parameters: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.parameters)
                ? object.parameters.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.parameters) === null || _a === void 0 ? void 0 : _a.length) {
            obj.parameters = message.parameters.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.Hint.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseHint();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.parameters = ((_b = object.parameters) === null || _b === void 0 ? void 0 : _b.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseUnpivot() {
    return { input: undefined, ids: [], values: undefined, variableColumnName: "", valueColumnName: "" };
}
exports.Unpivot = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.ids; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.values !== undefined) {
            exports.Unpivot_Values.encode(message.values, writer.uint32(26).fork()).ldelim();
        }
        if (message.variableColumnName !== "") {
            writer.uint32(34).string(message.variableColumnName);
        }
        if (message.valueColumnName !== "") {
            writer.uint32(42).string(message.valueColumnName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnpivot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ids.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.values = exports.Unpivot_Values.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            ids: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.ids) ? object.ids.map(function (e) { return expressions_1.Expression.fromJSON(e); }) : [],
            values: isSet(object.values) ? exports.Unpivot_Values.fromJSON(object.values) : undefined,
            variableColumnName: isSet(object.variableColumnName) ? globalThis.String(object.variableColumnName) : "",
            valueColumnName: isSet(object.valueColumnName) ? globalThis.String(object.valueColumnName) : "",
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.ids) === null || _a === void 0 ? void 0 : _a.length) {
            obj.ids = message.ids.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.values !== undefined) {
            obj.values = exports.Unpivot_Values.toJSON(message.values);
        }
        if (message.variableColumnName !== "") {
            obj.variableColumnName = message.variableColumnName;
        }
        if (message.valueColumnName !== "") {
            obj.valueColumnName = message.valueColumnName;
        }
        return obj;
    },
    create: function (base) {
        return exports.Unpivot.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUnpivot();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.ids = ((_a = object.ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.values = (object.values !== undefined && object.values !== null)
            ? exports.Unpivot_Values.fromPartial(object.values)
            : undefined;
        message.variableColumnName = (_b = object.variableColumnName) !== null && _b !== void 0 ? _b : "";
        message.valueColumnName = (_c = object.valueColumnName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUnpivot_Values() {
    return { values: [] };
}
exports.Unpivot_Values = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.values; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnpivot_Values();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.values.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
            values: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map(function (e) { return expressions_1.Expression.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.values) === null || _a === void 0 ? void 0 : _a.length) {
            obj.values = message.values.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.Unpivot_Values.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUnpivot_Values();
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseToSchema() {
    return { input: undefined, schema: undefined };
}
exports.ToSchema = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            types_1.DataType.encode(message.schema, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseToSchema();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            schema: isSet(object.schema) ? types_1.DataType.fromJSON(object.schema) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.schema !== undefined) {
            obj.schema = types_1.DataType.toJSON(message.schema);
        }
        return obj;
    },
    create: function (base) {
        return exports.ToSchema.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseToSchema();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? types_1.DataType.fromPartial(object.schema)
            : undefined;
        return message;
    },
};
function createBaseRepartitionByExpression() {
    return { input: undefined, partitionExprs: [], numPartitions: undefined };
}
exports.RepartitionByExpression = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.partitionExprs; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.numPartitions !== undefined) {
            writer.uint32(24).int32(message.numPartitions);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRepartitionByExpression();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.partitionExprs.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            partitionExprs: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.partitionExprs)
                ? object.partitionExprs.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            numPartitions: isSet(object.numPartitions) ? globalThis.Number(object.numPartitions) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.partitionExprs) === null || _a === void 0 ? void 0 : _a.length) {
            obj.partitionExprs = message.partitionExprs.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.numPartitions !== undefined) {
            obj.numPartitions = Math.round(message.numPartitions);
        }
        return obj;
    },
    create: function (base) {
        return exports.RepartitionByExpression.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRepartitionByExpression();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.partitionExprs = ((_a = object.partitionExprs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.numPartitions = (_b = object.numPartitions) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseMapPartitions() {
    return { input: undefined, func: undefined, isBarrier: undefined };
}
exports.MapPartitions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.func !== undefined) {
            expressions_1.CommonInlineUserDefinedFunction.encode(message.func, writer.uint32(18).fork()).ldelim();
        }
        if (message.isBarrier !== undefined) {
            writer.uint32(24).bool(message.isBarrier);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMapPartitions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.func = expressions_1.CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            func: isSet(object.func) ? expressions_1.CommonInlineUserDefinedFunction.fromJSON(object.func) : undefined,
            isBarrier: isSet(object.isBarrier) ? globalThis.Boolean(object.isBarrier) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.func !== undefined) {
            obj.func = expressions_1.CommonInlineUserDefinedFunction.toJSON(message.func);
        }
        if (message.isBarrier !== undefined) {
            obj.isBarrier = message.isBarrier;
        }
        return obj;
    },
    create: function (base) {
        return exports.MapPartitions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMapPartitions();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.func = (object.func !== undefined && object.func !== null)
            ? expressions_1.CommonInlineUserDefinedFunction.fromPartial(object.func)
            : undefined;
        message.isBarrier = (_a = object.isBarrier) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseGroupMap() {
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
exports.GroupMap = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.groupingExpressions; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.func !== undefined) {
            expressions_1.CommonInlineUserDefinedFunction.encode(message.func, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.sortingExpressions; _b < _c.length; _b++) {
            var v = _c[_b];
            expressions_1.Expression.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.initialInput !== undefined) {
            exports.Relation.encode(message.initialInput, writer.uint32(42).fork()).ldelim();
        }
        for (var _d = 0, _e = message.initialGroupingExpressions; _d < _e.length; _d++) {
            var v = _e[_d];
            expressions_1.Expression.encode(v, writer.uint32(50).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGroupMap();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.func = expressions_1.CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sortingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.initialInput = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.initialGroupingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            groupingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.groupingExpressions)
                ? object.groupingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            func: isSet(object.func) ? expressions_1.CommonInlineUserDefinedFunction.fromJSON(object.func) : undefined,
            sortingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.sortingExpressions)
                ? object.sortingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            initialInput: isSet(object.initialInput) ? exports.Relation.fromJSON(object.initialInput) : undefined,
            initialGroupingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.initialGroupingExpressions)
                ? object.initialGroupingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            isMapGroupsWithState: isSet(object.isMapGroupsWithState)
                ? globalThis.Boolean(object.isMapGroupsWithState)
                : undefined,
            outputMode: isSet(object.outputMode) ? globalThis.String(object.outputMode) : undefined,
            timeoutConf: isSet(object.timeoutConf) ? globalThis.String(object.timeoutConf) : undefined,
        };
    },
    toJSON: function (message) {
        var _a, _b, _c;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.groupingExpressions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groupingExpressions = message.groupingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.func !== undefined) {
            obj.func = expressions_1.CommonInlineUserDefinedFunction.toJSON(message.func);
        }
        if ((_b = message.sortingExpressions) === null || _b === void 0 ? void 0 : _b.length) {
            obj.sortingExpressions = message.sortingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.initialInput !== undefined) {
            obj.initialInput = exports.Relation.toJSON(message.initialInput);
        }
        if ((_c = message.initialGroupingExpressions) === null || _c === void 0 ? void 0 : _c.length) {
            obj.initialGroupingExpressions = message.initialGroupingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
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
    create: function (base) {
        return exports.GroupMap.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseGroupMap();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.groupingExpressions = ((_a = object.groupingExpressions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.func = (object.func !== undefined && object.func !== null)
            ? expressions_1.CommonInlineUserDefinedFunction.fromPartial(object.func)
            : undefined;
        message.sortingExpressions = ((_b = object.sortingExpressions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.initialInput = (object.initialInput !== undefined && object.initialInput !== null)
            ? exports.Relation.fromPartial(object.initialInput)
            : undefined;
        message.initialGroupingExpressions = ((_c = object.initialGroupingExpressions) === null || _c === void 0 ? void 0 : _c.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.isMapGroupsWithState = (_d = object.isMapGroupsWithState) !== null && _d !== void 0 ? _d : undefined;
        message.outputMode = (_e = object.outputMode) !== null && _e !== void 0 ? _e : undefined;
        message.timeoutConf = (_f = object.timeoutConf) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseCoGroupMap() {
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
exports.CoGroupMap = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.inputGroupingExpressions; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.other !== undefined) {
            exports.Relation.encode(message.other, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.otherGroupingExpressions; _b < _c.length; _b++) {
            var v = _c[_b];
            expressions_1.Expression.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.func !== undefined) {
            expressions_1.CommonInlineUserDefinedFunction.encode(message.func, writer.uint32(42).fork()).ldelim();
        }
        for (var _d = 0, _e = message.inputSortingExpressions; _d < _e.length; _d++) {
            var v = _e[_d];
            expressions_1.Expression.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _f = 0, _g = message.otherSortingExpressions; _f < _g.length; _f++) {
            var v = _g[_f];
            expressions_1.Expression.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCoGroupMap();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.inputGroupingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.other = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.otherGroupingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.func = expressions_1.CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.inputSortingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.otherSortingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            inputGroupingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.inputGroupingExpressions)
                ? object.inputGroupingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            other: isSet(object.other) ? exports.Relation.fromJSON(object.other) : undefined,
            otherGroupingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.otherGroupingExpressions)
                ? object.otherGroupingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            func: isSet(object.func) ? expressions_1.CommonInlineUserDefinedFunction.fromJSON(object.func) : undefined,
            inputSortingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.inputSortingExpressions)
                ? object.inputSortingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            otherSortingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.otherSortingExpressions)
                ? object.otherSortingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a, _b, _c, _d;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.inputGroupingExpressions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.inputGroupingExpressions = message.inputGroupingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.other !== undefined) {
            obj.other = exports.Relation.toJSON(message.other);
        }
        if ((_b = message.otherGroupingExpressions) === null || _b === void 0 ? void 0 : _b.length) {
            obj.otherGroupingExpressions = message.otherGroupingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.func !== undefined) {
            obj.func = expressions_1.CommonInlineUserDefinedFunction.toJSON(message.func);
        }
        if ((_c = message.inputSortingExpressions) === null || _c === void 0 ? void 0 : _c.length) {
            obj.inputSortingExpressions = message.inputSortingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if ((_d = message.otherSortingExpressions) === null || _d === void 0 ? void 0 : _d.length) {
            obj.otherSortingExpressions = message.otherSortingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.CoGroupMap.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCoGroupMap();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.inputGroupingExpressions = ((_a = object.inputGroupingExpressions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.other = (object.other !== undefined && object.other !== null)
            ? exports.Relation.fromPartial(object.other)
            : undefined;
        message.otherGroupingExpressions = ((_b = object.otherGroupingExpressions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.func = (object.func !== undefined && object.func !== null)
            ? expressions_1.CommonInlineUserDefinedFunction.fromPartial(object.func)
            : undefined;
        message.inputSortingExpressions = ((_c = object.inputSortingExpressions) === null || _c === void 0 ? void 0 : _c.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.otherSortingExpressions = ((_d = object.otherSortingExpressions) === null || _d === void 0 ? void 0 : _d.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseApplyInPandasWithState() {
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
exports.ApplyInPandasWithState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.groupingExpressions; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.func !== undefined) {
            expressions_1.CommonInlineUserDefinedFunction.encode(message.func, writer.uint32(26).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseApplyInPandasWithState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupingExpressions.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.func = expressions_1.CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            groupingExpressions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.groupingExpressions)
                ? object.groupingExpressions.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            func: isSet(object.func) ? expressions_1.CommonInlineUserDefinedFunction.fromJSON(object.func) : undefined,
            outputSchema: isSet(object.outputSchema) ? globalThis.String(object.outputSchema) : "",
            stateSchema: isSet(object.stateSchema) ? globalThis.String(object.stateSchema) : "",
            outputMode: isSet(object.outputMode) ? globalThis.String(object.outputMode) : "",
            timeoutConf: isSet(object.timeoutConf) ? globalThis.String(object.timeoutConf) : "",
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if ((_a = message.groupingExpressions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groupingExpressions = message.groupingExpressions.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.func !== undefined) {
            obj.func = expressions_1.CommonInlineUserDefinedFunction.toJSON(message.func);
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
    create: function (base) {
        return exports.ApplyInPandasWithState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseApplyInPandasWithState();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.groupingExpressions = ((_a = object.groupingExpressions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.func = (object.func !== undefined && object.func !== null)
            ? expressions_1.CommonInlineUserDefinedFunction.fromPartial(object.func)
            : undefined;
        message.outputSchema = (_b = object.outputSchema) !== null && _b !== void 0 ? _b : "";
        message.stateSchema = (_c = object.stateSchema) !== null && _c !== void 0 ? _c : "";
        message.outputMode = (_d = object.outputMode) !== null && _d !== void 0 ? _d : "";
        message.timeoutConf = (_e = object.timeoutConf) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseCommonInlineUserDefinedTableFunction() {
    return { functionName: "", deterministic: false, arguments: [], pythonUdtf: undefined };
}
exports.CommonInlineUserDefinedTableFunction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.functionName !== "") {
            writer.uint32(10).string(message.functionName);
        }
        if (message.deterministic === true) {
            writer.uint32(16).bool(message.deterministic);
        }
        for (var _i = 0, _a = message.arguments; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.pythonUdtf !== undefined) {
            exports.PythonUDTF.encode(message.pythonUdtf, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommonInlineUserDefinedTableFunction();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.deterministic = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.arguments.push(expressions_1.Expression.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.pythonUdtf = exports.PythonUDTF.decode(reader, reader.uint32());
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
            deterministic: isSet(object.deterministic) ? globalThis.Boolean(object.deterministic) : false,
            arguments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.arguments)
                ? object.arguments.map(function (e) { return expressions_1.Expression.fromJSON(e); })
                : [],
            pythonUdtf: isSet(object.pythonUdtf) ? exports.PythonUDTF.fromJSON(object.pythonUdtf) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.functionName !== "") {
            obj.functionName = message.functionName;
        }
        if (message.deterministic === true) {
            obj.deterministic = message.deterministic;
        }
        if ((_a = message.arguments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.arguments = message.arguments.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        if (message.pythonUdtf !== undefined) {
            obj.pythonUdtf = exports.PythonUDTF.toJSON(message.pythonUdtf);
        }
        return obj;
    },
    create: function (base) {
        return exports.CommonInlineUserDefinedTableFunction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCommonInlineUserDefinedTableFunction();
        message.functionName = (_a = object.functionName) !== null && _a !== void 0 ? _a : "";
        message.deterministic = (_b = object.deterministic) !== null && _b !== void 0 ? _b : false;
        message.arguments = ((_c = object.arguments) === null || _c === void 0 ? void 0 : _c.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        message.pythonUdtf = (object.pythonUdtf !== undefined && object.pythonUdtf !== null)
            ? exports.PythonUDTF.fromPartial(object.pythonUdtf)
            : undefined;
        return message;
    },
};
function createBasePythonUDTF() {
    return { returnType: undefined, evalType: 0, command: new Uint8Array(0), pythonVer: "" };
}
exports.PythonUDTF = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.returnType !== undefined) {
            types_1.DataType.encode(message.returnType, writer.uint32(10).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePythonUDTF();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.returnType = types_1.DataType.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            returnType: isSet(object.returnType) ? types_1.DataType.fromJSON(object.returnType) : undefined,
            evalType: isSet(object.evalType) ? globalThis.Number(object.evalType) : 0,
            command: isSet(object.command) ? bytesFromBase64(object.command) : new Uint8Array(0),
            pythonVer: isSet(object.pythonVer) ? globalThis.String(object.pythonVer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.returnType !== undefined) {
            obj.returnType = types_1.DataType.toJSON(message.returnType);
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
    create: function (base) {
        return exports.PythonUDTF.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePythonUDTF();
        message.returnType = (object.returnType !== undefined && object.returnType !== null)
            ? types_1.DataType.fromPartial(object.returnType)
            : undefined;
        message.evalType = (_a = object.evalType) !== null && _a !== void 0 ? _a : 0;
        message.command = (_b = object.command) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.pythonVer = (_c = object.pythonVer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCollectMetrics() {
    return { input: undefined, name: "", metrics: [] };
}
exports.CollectMetrics = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (var _i = 0, _a = message.metrics; _i < _a.length; _i++) {
            var v = _a[_i];
            expressions_1.Expression.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCollectMetrics();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
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
                    message.metrics.push(expressions_1.Expression.decode(reader, reader.uint32()));
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
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            metrics: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.metrics) ? object.metrics.map(function (e) { return expressions_1.Expression.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.metrics) === null || _a === void 0 ? void 0 : _a.length) {
            obj.metrics = message.metrics.map(function (e) { return expressions_1.Expression.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.CollectMetrics.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCollectMetrics();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.metrics = ((_b = object.metrics) === null || _b === void 0 ? void 0 : _b.map(function (e) { return expressions_1.Expression.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseParse() {
    return { input: undefined, format: 0, schema: undefined, options: {} };
}
exports.Parse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== undefined) {
            exports.Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
        }
        if (message.format !== 0) {
            writer.uint32(16).int32(message.format);
        }
        if (message.schema !== undefined) {
            types_1.DataType.encode(message.schema, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.Parse_OptionsEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.input = exports.Relation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.format = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.schema = types_1.DataType.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    var entry4 = exports.Parse_OptionsEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            input: isSet(object.input) ? exports.Relation.fromJSON(object.input) : undefined,
            format: isSet(object.format) ? parse_ParseFormatFromJSON(object.format) : 0,
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
        if (message.input !== undefined) {
            obj.input = exports.Relation.toJSON(message.input);
        }
        if (message.format !== 0) {
            obj.format = parse_ParseFormatToJSON(message.format);
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
        return exports.Parse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseParse();
        message.input = (object.input !== undefined && object.input !== null)
            ? exports.Relation.fromPartial(object.input)
            : undefined;
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? types_1.DataType.fromPartial(object.schema)
            : undefined;
        message.options = Object.entries((_b = object.options) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseParse_OptionsEntry() {
    return { key: "", value: "" };
}
exports.Parse_OptionsEntry = {
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
        var message = createBaseParse_OptionsEntry();
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
        return exports.Parse_OptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseParse_OptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
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
