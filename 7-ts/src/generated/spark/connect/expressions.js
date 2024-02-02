"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedArgumentExpression = exports.CallFunction = exports.JavaUDF = exports.ScalarScalaUDF = exports.PythonUDF = exports.CommonInlineUserDefinedFunction = exports.Expression_UnresolvedNamedLambdaVariable = exports.Expression_LambdaFunction = exports.Expression_Alias = exports.Expression_UpdateFields = exports.Expression_UnresolvedExtractValue = exports.Expression_UnresolvedRegex = exports.Expression_UnresolvedStar = exports.Expression_ExpressionString = exports.Expression_UnresolvedFunction = exports.Expression_GetColumnByOrdinal = exports.Expression_UnresolvedAttribute = exports.Expression_Literal_Struct = exports.Expression_Literal_Map = exports.Expression_Literal_Array = exports.Expression_Literal_CalendarInterval = exports.Expression_Literal_Decimal = exports.Expression_Literal = exports.Expression_Cast = exports.Expression_SortOrder = exports.Expression_Window_WindowFrame_FrameBoundary = exports.Expression_Window_WindowFrame = exports.Expression_Window = exports.Expression = exports.expression_SortOrder_NullOrderingToJSON = exports.expression_SortOrder_NullOrderingFromJSON = exports.Expression_SortOrder_NullOrdering = exports.expression_SortOrder_SortDirectionToJSON = exports.expression_SortOrder_SortDirectionFromJSON = exports.Expression_SortOrder_SortDirection = exports.expression_Window_WindowFrame_FrameTypeToJSON = exports.expression_Window_WindowFrame_FrameTypeFromJSON = exports.Expression_Window_WindowFrame_FrameType = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
var any_1 = require("../../google/protobuf/any");
var types_1 = require("./types");
var Long = require("long");
exports.protobufPackage = "spark.connect";
var Expression_Window_WindowFrame_FrameType;
(function (Expression_Window_WindowFrame_FrameType) {
    Expression_Window_WindowFrame_FrameType[Expression_Window_WindowFrame_FrameType["FRAME_TYPE_UNDEFINED"] = 0] = "FRAME_TYPE_UNDEFINED";
    /** FRAME_TYPE_ROW - RowFrame treats rows in a partition individually. */
    Expression_Window_WindowFrame_FrameType[Expression_Window_WindowFrame_FrameType["FRAME_TYPE_ROW"] = 1] = "FRAME_TYPE_ROW";
    /**
     * FRAME_TYPE_RANGE - RangeFrame treats rows in a partition as groups of peers.
     * All rows having the same 'ORDER BY' ordering are considered as peers.
     */
    Expression_Window_WindowFrame_FrameType[Expression_Window_WindowFrame_FrameType["FRAME_TYPE_RANGE"] = 2] = "FRAME_TYPE_RANGE";
    Expression_Window_WindowFrame_FrameType[Expression_Window_WindowFrame_FrameType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Expression_Window_WindowFrame_FrameType = exports.Expression_Window_WindowFrame_FrameType || (exports.Expression_Window_WindowFrame_FrameType = {}));
function expression_Window_WindowFrame_FrameTypeFromJSON(object) {
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
exports.expression_Window_WindowFrame_FrameTypeFromJSON = expression_Window_WindowFrame_FrameTypeFromJSON;
function expression_Window_WindowFrame_FrameTypeToJSON(object) {
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
exports.expression_Window_WindowFrame_FrameTypeToJSON = expression_Window_WindowFrame_FrameTypeToJSON;
var Expression_SortOrder_SortDirection;
(function (Expression_SortOrder_SortDirection) {
    Expression_SortOrder_SortDirection[Expression_SortOrder_SortDirection["SORT_DIRECTION_UNSPECIFIED"] = 0] = "SORT_DIRECTION_UNSPECIFIED";
    Expression_SortOrder_SortDirection[Expression_SortOrder_SortDirection["SORT_DIRECTION_ASCENDING"] = 1] = "SORT_DIRECTION_ASCENDING";
    Expression_SortOrder_SortDirection[Expression_SortOrder_SortDirection["SORT_DIRECTION_DESCENDING"] = 2] = "SORT_DIRECTION_DESCENDING";
    Expression_SortOrder_SortDirection[Expression_SortOrder_SortDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Expression_SortOrder_SortDirection = exports.Expression_SortOrder_SortDirection || (exports.Expression_SortOrder_SortDirection = {}));
function expression_SortOrder_SortDirectionFromJSON(object) {
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
exports.expression_SortOrder_SortDirectionFromJSON = expression_SortOrder_SortDirectionFromJSON;
function expression_SortOrder_SortDirectionToJSON(object) {
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
exports.expression_SortOrder_SortDirectionToJSON = expression_SortOrder_SortDirectionToJSON;
var Expression_SortOrder_NullOrdering;
(function (Expression_SortOrder_NullOrdering) {
    Expression_SortOrder_NullOrdering[Expression_SortOrder_NullOrdering["SORT_NULLS_UNSPECIFIED"] = 0] = "SORT_NULLS_UNSPECIFIED";
    Expression_SortOrder_NullOrdering[Expression_SortOrder_NullOrdering["SORT_NULLS_FIRST"] = 1] = "SORT_NULLS_FIRST";
    Expression_SortOrder_NullOrdering[Expression_SortOrder_NullOrdering["SORT_NULLS_LAST"] = 2] = "SORT_NULLS_LAST";
    Expression_SortOrder_NullOrdering[Expression_SortOrder_NullOrdering["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Expression_SortOrder_NullOrdering = exports.Expression_SortOrder_NullOrdering || (exports.Expression_SortOrder_NullOrdering = {}));
function expression_SortOrder_NullOrderingFromJSON(object) {
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
exports.expression_SortOrder_NullOrderingFromJSON = expression_SortOrder_NullOrderingFromJSON;
function expression_SortOrder_NullOrderingToJSON(object) {
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
exports.expression_SortOrder_NullOrderingToJSON = expression_SortOrder_NullOrderingToJSON;
function createBaseExpression() {
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
exports.Expression = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.literal !== undefined) {
            exports.Expression_Literal.encode(message.literal, writer.uint32(10).fork()).ldelim();
        }
        if (message.unresolvedAttribute !== undefined) {
            exports.Expression_UnresolvedAttribute.encode(message.unresolvedAttribute, writer.uint32(18).fork()).ldelim();
        }
        if (message.unresolvedFunction !== undefined) {
            exports.Expression_UnresolvedFunction.encode(message.unresolvedFunction, writer.uint32(26).fork()).ldelim();
        }
        if (message.expressionString !== undefined) {
            exports.Expression_ExpressionString.encode(message.expressionString, writer.uint32(34).fork()).ldelim();
        }
        if (message.unresolvedStar !== undefined) {
            exports.Expression_UnresolvedStar.encode(message.unresolvedStar, writer.uint32(42).fork()).ldelim();
        }
        if (message.alias !== undefined) {
            exports.Expression_Alias.encode(message.alias, writer.uint32(50).fork()).ldelim();
        }
        if (message.cast !== undefined) {
            exports.Expression_Cast.encode(message.cast, writer.uint32(58).fork()).ldelim();
        }
        if (message.unresolvedRegex !== undefined) {
            exports.Expression_UnresolvedRegex.encode(message.unresolvedRegex, writer.uint32(66).fork()).ldelim();
        }
        if (message.sortOrder !== undefined) {
            exports.Expression_SortOrder.encode(message.sortOrder, writer.uint32(74).fork()).ldelim();
        }
        if (message.lambdaFunction !== undefined) {
            exports.Expression_LambdaFunction.encode(message.lambdaFunction, writer.uint32(82).fork()).ldelim();
        }
        if (message.window !== undefined) {
            exports.Expression_Window.encode(message.window, writer.uint32(90).fork()).ldelim();
        }
        if (message.unresolvedExtractValue !== undefined) {
            exports.Expression_UnresolvedExtractValue.encode(message.unresolvedExtractValue, writer.uint32(98).fork()).ldelim();
        }
        if (message.updateFields !== undefined) {
            exports.Expression_UpdateFields.encode(message.updateFields, writer.uint32(106).fork()).ldelim();
        }
        if (message.unresolvedNamedLambdaVariable !== undefined) {
            exports.Expression_UnresolvedNamedLambdaVariable.encode(message.unresolvedNamedLambdaVariable, writer.uint32(114).fork())
                .ldelim();
        }
        if (message.commonInlineUserDefinedFunction !== undefined) {
            exports.CommonInlineUserDefinedFunction.encode(message.commonInlineUserDefinedFunction, writer.uint32(122).fork())
                .ldelim();
        }
        if (message.callFunction !== undefined) {
            exports.CallFunction.encode(message.callFunction, writer.uint32(130).fork()).ldelim();
        }
        if (message.namedArgumentExpression !== undefined) {
            exports.NamedArgumentExpression.encode(message.namedArgumentExpression, writer.uint32(138).fork()).ldelim();
        }
        if (message.getColumnByOrdinal !== undefined) {
            exports.Expression_GetColumnByOrdinal.encode(message.getColumnByOrdinal, writer.uint32(146).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(message.extension, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.literal = exports.Expression_Literal.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.unresolvedAttribute = exports.Expression_UnresolvedAttribute.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.unresolvedFunction = exports.Expression_UnresolvedFunction.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.expressionString = exports.Expression_ExpressionString.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.unresolvedStar = exports.Expression_UnresolvedStar.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.alias = exports.Expression_Alias.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.cast = exports.Expression_Cast.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.unresolvedRegex = exports.Expression_UnresolvedRegex.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.sortOrder = exports.Expression_SortOrder.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.lambdaFunction = exports.Expression_LambdaFunction.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.window = exports.Expression_Window.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.unresolvedExtractValue = exports.Expression_UnresolvedExtractValue.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.updateFields = exports.Expression_UpdateFields.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.unresolvedNamedLambdaVariable = exports.Expression_UnresolvedNamedLambdaVariable.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.commonInlineUserDefinedFunction = exports.CommonInlineUserDefinedFunction.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.callFunction = exports.CallFunction.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.namedArgumentExpression = exports.NamedArgumentExpression.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.getColumnByOrdinal = exports.Expression_GetColumnByOrdinal.decode(reader, reader.uint32());
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
            literal: isSet(object.literal) ? exports.Expression_Literal.fromJSON(object.literal) : undefined,
            unresolvedAttribute: isSet(object.unresolvedAttribute)
                ? exports.Expression_UnresolvedAttribute.fromJSON(object.unresolvedAttribute)
                : undefined,
            unresolvedFunction: isSet(object.unresolvedFunction)
                ? exports.Expression_UnresolvedFunction.fromJSON(object.unresolvedFunction)
                : undefined,
            expressionString: isSet(object.expressionString)
                ? exports.Expression_ExpressionString.fromJSON(object.expressionString)
                : undefined,
            unresolvedStar: isSet(object.unresolvedStar)
                ? exports.Expression_UnresolvedStar.fromJSON(object.unresolvedStar)
                : undefined,
            alias: isSet(object.alias) ? exports.Expression_Alias.fromJSON(object.alias) : undefined,
            cast: isSet(object.cast) ? exports.Expression_Cast.fromJSON(object.cast) : undefined,
            unresolvedRegex: isSet(object.unresolvedRegex)
                ? exports.Expression_UnresolvedRegex.fromJSON(object.unresolvedRegex)
                : undefined,
            sortOrder: isSet(object.sortOrder) ? exports.Expression_SortOrder.fromJSON(object.sortOrder) : undefined,
            lambdaFunction: isSet(object.lambdaFunction)
                ? exports.Expression_LambdaFunction.fromJSON(object.lambdaFunction)
                : undefined,
            window: isSet(object.window) ? exports.Expression_Window.fromJSON(object.window) : undefined,
            unresolvedExtractValue: isSet(object.unresolvedExtractValue)
                ? exports.Expression_UnresolvedExtractValue.fromJSON(object.unresolvedExtractValue)
                : undefined,
            updateFields: isSet(object.updateFields) ? exports.Expression_UpdateFields.fromJSON(object.updateFields) : undefined,
            unresolvedNamedLambdaVariable: isSet(object.unresolvedNamedLambdaVariable)
                ? exports.Expression_UnresolvedNamedLambdaVariable.fromJSON(object.unresolvedNamedLambdaVariable)
                : undefined,
            commonInlineUserDefinedFunction: isSet(object.commonInlineUserDefinedFunction)
                ? exports.CommonInlineUserDefinedFunction.fromJSON(object.commonInlineUserDefinedFunction)
                : undefined,
            callFunction: isSet(object.callFunction) ? exports.CallFunction.fromJSON(object.callFunction) : undefined,
            namedArgumentExpression: isSet(object.namedArgumentExpression)
                ? exports.NamedArgumentExpression.fromJSON(object.namedArgumentExpression)
                : undefined,
            getColumnByOrdinal: isSet(object.getColumnByOrdinal)
                ? exports.Expression_GetColumnByOrdinal.fromJSON(object.getColumnByOrdinal)
                : undefined,
            extension: isSet(object.extension) ? any_1.Any.fromJSON(object.extension) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.literal !== undefined) {
            obj.literal = exports.Expression_Literal.toJSON(message.literal);
        }
        if (message.unresolvedAttribute !== undefined) {
            obj.unresolvedAttribute = exports.Expression_UnresolvedAttribute.toJSON(message.unresolvedAttribute);
        }
        if (message.unresolvedFunction !== undefined) {
            obj.unresolvedFunction = exports.Expression_UnresolvedFunction.toJSON(message.unresolvedFunction);
        }
        if (message.expressionString !== undefined) {
            obj.expressionString = exports.Expression_ExpressionString.toJSON(message.expressionString);
        }
        if (message.unresolvedStar !== undefined) {
            obj.unresolvedStar = exports.Expression_UnresolvedStar.toJSON(message.unresolvedStar);
        }
        if (message.alias !== undefined) {
            obj.alias = exports.Expression_Alias.toJSON(message.alias);
        }
        if (message.cast !== undefined) {
            obj.cast = exports.Expression_Cast.toJSON(message.cast);
        }
        if (message.unresolvedRegex !== undefined) {
            obj.unresolvedRegex = exports.Expression_UnresolvedRegex.toJSON(message.unresolvedRegex);
        }
        if (message.sortOrder !== undefined) {
            obj.sortOrder = exports.Expression_SortOrder.toJSON(message.sortOrder);
        }
        if (message.lambdaFunction !== undefined) {
            obj.lambdaFunction = exports.Expression_LambdaFunction.toJSON(message.lambdaFunction);
        }
        if (message.window !== undefined) {
            obj.window = exports.Expression_Window.toJSON(message.window);
        }
        if (message.unresolvedExtractValue !== undefined) {
            obj.unresolvedExtractValue = exports.Expression_UnresolvedExtractValue.toJSON(message.unresolvedExtractValue);
        }
        if (message.updateFields !== undefined) {
            obj.updateFields = exports.Expression_UpdateFields.toJSON(message.updateFields);
        }
        if (message.unresolvedNamedLambdaVariable !== undefined) {
            obj.unresolvedNamedLambdaVariable = exports.Expression_UnresolvedNamedLambdaVariable.toJSON(message.unresolvedNamedLambdaVariable);
        }
        if (message.commonInlineUserDefinedFunction !== undefined) {
            obj.commonInlineUserDefinedFunction = exports.CommonInlineUserDefinedFunction.toJSON(message.commonInlineUserDefinedFunction);
        }
        if (message.callFunction !== undefined) {
            obj.callFunction = exports.CallFunction.toJSON(message.callFunction);
        }
        if (message.namedArgumentExpression !== undefined) {
            obj.namedArgumentExpression = exports.NamedArgumentExpression.toJSON(message.namedArgumentExpression);
        }
        if (message.getColumnByOrdinal !== undefined) {
            obj.getColumnByOrdinal = exports.Expression_GetColumnByOrdinal.toJSON(message.getColumnByOrdinal);
        }
        if (message.extension !== undefined) {
            obj.extension = any_1.Any.toJSON(message.extension);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseExpression();
        message.literal = (object.literal !== undefined && object.literal !== null)
            ? exports.Expression_Literal.fromPartial(object.literal)
            : undefined;
        message.unresolvedAttribute = (object.unresolvedAttribute !== undefined && object.unresolvedAttribute !== null)
            ? exports.Expression_UnresolvedAttribute.fromPartial(object.unresolvedAttribute)
            : undefined;
        message.unresolvedFunction = (object.unresolvedFunction !== undefined && object.unresolvedFunction !== null)
            ? exports.Expression_UnresolvedFunction.fromPartial(object.unresolvedFunction)
            : undefined;
        message.expressionString = (object.expressionString !== undefined && object.expressionString !== null)
            ? exports.Expression_ExpressionString.fromPartial(object.expressionString)
            : undefined;
        message.unresolvedStar = (object.unresolvedStar !== undefined && object.unresolvedStar !== null)
            ? exports.Expression_UnresolvedStar.fromPartial(object.unresolvedStar)
            : undefined;
        message.alias = (object.alias !== undefined && object.alias !== null)
            ? exports.Expression_Alias.fromPartial(object.alias)
            : undefined;
        message.cast = (object.cast !== undefined && object.cast !== null)
            ? exports.Expression_Cast.fromPartial(object.cast)
            : undefined;
        message.unresolvedRegex = (object.unresolvedRegex !== undefined && object.unresolvedRegex !== null)
            ? exports.Expression_UnresolvedRegex.fromPartial(object.unresolvedRegex)
            : undefined;
        message.sortOrder = (object.sortOrder !== undefined && object.sortOrder !== null)
            ? exports.Expression_SortOrder.fromPartial(object.sortOrder)
            : undefined;
        message.lambdaFunction = (object.lambdaFunction !== undefined && object.lambdaFunction !== null)
            ? exports.Expression_LambdaFunction.fromPartial(object.lambdaFunction)
            : undefined;
        message.window = (object.window !== undefined && object.window !== null)
            ? exports.Expression_Window.fromPartial(object.window)
            : undefined;
        message.unresolvedExtractValue =
            (object.unresolvedExtractValue !== undefined && object.unresolvedExtractValue !== null)
                ? exports.Expression_UnresolvedExtractValue.fromPartial(object.unresolvedExtractValue)
                : undefined;
        message.updateFields = (object.updateFields !== undefined && object.updateFields !== null)
            ? exports.Expression_UpdateFields.fromPartial(object.updateFields)
            : undefined;
        message.unresolvedNamedLambdaVariable =
            (object.unresolvedNamedLambdaVariable !== undefined && object.unresolvedNamedLambdaVariable !== null)
                ? exports.Expression_UnresolvedNamedLambdaVariable.fromPartial(object.unresolvedNamedLambdaVariable)
                : undefined;
        message.commonInlineUserDefinedFunction =
            (object.commonInlineUserDefinedFunction !== undefined && object.commonInlineUserDefinedFunction !== null)
                ? exports.CommonInlineUserDefinedFunction.fromPartial(object.commonInlineUserDefinedFunction)
                : undefined;
        message.callFunction = (object.callFunction !== undefined && object.callFunction !== null)
            ? exports.CallFunction.fromPartial(object.callFunction)
            : undefined;
        message.namedArgumentExpression =
            (object.namedArgumentExpression !== undefined && object.namedArgumentExpression !== null)
                ? exports.NamedArgumentExpression.fromPartial(object.namedArgumentExpression)
                : undefined;
        message.getColumnByOrdinal = (object.getColumnByOrdinal !== undefined && object.getColumnByOrdinal !== null)
            ? exports.Expression_GetColumnByOrdinal.fromPartial(object.getColumnByOrdinal)
            : undefined;
        message.extension = (object.extension !== undefined && object.extension !== null)
            ? any_1.Any.fromPartial(object.extension)
            : undefined;
        return message;
    },
};
function createBaseExpression_Window() {
    return { windowFunction: undefined, partitionSpec: [], orderSpec: [], frameSpec: undefined };
}
exports.Expression_Window = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.windowFunction !== undefined) {
            exports.Expression.encode(message.windowFunction, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.partitionSpec; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.orderSpec; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Expression_SortOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.frameSpec !== undefined) {
            exports.Expression_Window_WindowFrame.encode(message.frameSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Window();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.windowFunction = exports.Expression.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.partitionSpec.push(exports.Expression.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orderSpec.push(exports.Expression_SortOrder.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.frameSpec = exports.Expression_Window_WindowFrame.decode(reader, reader.uint32());
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
            windowFunction: isSet(object.windowFunction) ? exports.Expression.fromJSON(object.windowFunction) : undefined,
            partitionSpec: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.partitionSpec)
                ? object.partitionSpec.map(function (e) { return exports.Expression.fromJSON(e); })
                : [],
            orderSpec: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.orderSpec)
                ? object.orderSpec.map(function (e) { return exports.Expression_SortOrder.fromJSON(e); })
                : [],
            frameSpec: isSet(object.frameSpec) ? exports.Expression_Window_WindowFrame.fromJSON(object.frameSpec) : undefined,
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.windowFunction !== undefined) {
            obj.windowFunction = exports.Expression.toJSON(message.windowFunction);
        }
        if ((_a = message.partitionSpec) === null || _a === void 0 ? void 0 : _a.length) {
            obj.partitionSpec = message.partitionSpec.map(function (e) { return exports.Expression.toJSON(e); });
        }
        if ((_b = message.orderSpec) === null || _b === void 0 ? void 0 : _b.length) {
            obj.orderSpec = message.orderSpec.map(function (e) { return exports.Expression_SortOrder.toJSON(e); });
        }
        if (message.frameSpec !== undefined) {
            obj.frameSpec = exports.Expression_Window_WindowFrame.toJSON(message.frameSpec);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Window.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExpression_Window();
        message.windowFunction = (object.windowFunction !== undefined && object.windowFunction !== null)
            ? exports.Expression.fromPartial(object.windowFunction)
            : undefined;
        message.partitionSpec = ((_a = object.partitionSpec) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Expression.fromPartial(e); })) || [];
        message.orderSpec = ((_b = object.orderSpec) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Expression_SortOrder.fromPartial(e); })) || [];
        message.frameSpec = (object.frameSpec !== undefined && object.frameSpec !== null)
            ? exports.Expression_Window_WindowFrame.fromPartial(object.frameSpec)
            : undefined;
        return message;
    },
};
function createBaseExpression_Window_WindowFrame() {
    return { frameType: 0, lower: undefined, upper: undefined };
}
exports.Expression_Window_WindowFrame = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.frameType !== 0) {
            writer.uint32(8).int32(message.frameType);
        }
        if (message.lower !== undefined) {
            exports.Expression_Window_WindowFrame_FrameBoundary.encode(message.lower, writer.uint32(18).fork()).ldelim();
        }
        if (message.upper !== undefined) {
            exports.Expression_Window_WindowFrame_FrameBoundary.encode(message.upper, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Window_WindowFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.frameType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lower = exports.Expression_Window_WindowFrame_FrameBoundary.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.upper = exports.Expression_Window_WindowFrame_FrameBoundary.decode(reader, reader.uint32());
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
            frameType: isSet(object.frameType) ? expression_Window_WindowFrame_FrameTypeFromJSON(object.frameType) : 0,
            lower: isSet(object.lower) ? exports.Expression_Window_WindowFrame_FrameBoundary.fromJSON(object.lower) : undefined,
            upper: isSet(object.upper) ? exports.Expression_Window_WindowFrame_FrameBoundary.fromJSON(object.upper) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.frameType !== 0) {
            obj.frameType = expression_Window_WindowFrame_FrameTypeToJSON(message.frameType);
        }
        if (message.lower !== undefined) {
            obj.lower = exports.Expression_Window_WindowFrame_FrameBoundary.toJSON(message.lower);
        }
        if (message.upper !== undefined) {
            obj.upper = exports.Expression_Window_WindowFrame_FrameBoundary.toJSON(message.upper);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Window_WindowFrame.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_Window_WindowFrame();
        message.frameType = (_a = object.frameType) !== null && _a !== void 0 ? _a : 0;
        message.lower = (object.lower !== undefined && object.lower !== null)
            ? exports.Expression_Window_WindowFrame_FrameBoundary.fromPartial(object.lower)
            : undefined;
        message.upper = (object.upper !== undefined && object.upper !== null)
            ? exports.Expression_Window_WindowFrame_FrameBoundary.fromPartial(object.upper)
            : undefined;
        return message;
    },
};
function createBaseExpression_Window_WindowFrame_FrameBoundary() {
    return { currentRow: undefined, unbounded: undefined, value: undefined };
}
exports.Expression_Window_WindowFrame_FrameBoundary = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.currentRow !== undefined) {
            writer.uint32(8).bool(message.currentRow);
        }
        if (message.unbounded !== undefined) {
            writer.uint32(16).bool(message.unbounded);
        }
        if (message.value !== undefined) {
            exports.Expression.encode(message.value, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Window_WindowFrame_FrameBoundary();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.value = exports.Expression.decode(reader, reader.uint32());
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
            currentRow: isSet(object.currentRow) ? globalThis.Boolean(object.currentRow) : undefined,
            unbounded: isSet(object.unbounded) ? globalThis.Boolean(object.unbounded) : undefined,
            value: isSet(object.value) ? exports.Expression.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.currentRow !== undefined) {
            obj.currentRow = message.currentRow;
        }
        if (message.unbounded !== undefined) {
            obj.unbounded = message.unbounded;
        }
        if (message.value !== undefined) {
            obj.value = exports.Expression.toJSON(message.value);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Window_WindowFrame_FrameBoundary.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExpression_Window_WindowFrame_FrameBoundary();
        message.currentRow = (_a = object.currentRow) !== null && _a !== void 0 ? _a : undefined;
        message.unbounded = (_b = object.unbounded) !== null && _b !== void 0 ? _b : undefined;
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.Expression.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseExpression_SortOrder() {
    return { child: undefined, direction: 0, nullOrdering: 0 };
}
exports.Expression_SortOrder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.child !== undefined) {
            exports.Expression.encode(message.child, writer.uint32(10).fork()).ldelim();
        }
        if (message.direction !== 0) {
            writer.uint32(16).int32(message.direction);
        }
        if (message.nullOrdering !== 0) {
            writer.uint32(24).int32(message.nullOrdering);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_SortOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.child = exports.Expression.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.direction = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.nullOrdering = reader.int32();
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
            child: isSet(object.child) ? exports.Expression.fromJSON(object.child) : undefined,
            direction: isSet(object.direction) ? expression_SortOrder_SortDirectionFromJSON(object.direction) : 0,
            nullOrdering: isSet(object.nullOrdering) ? expression_SortOrder_NullOrderingFromJSON(object.nullOrdering) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.child !== undefined) {
            obj.child = exports.Expression.toJSON(message.child);
        }
        if (message.direction !== 0) {
            obj.direction = expression_SortOrder_SortDirectionToJSON(message.direction);
        }
        if (message.nullOrdering !== 0) {
            obj.nullOrdering = expression_SortOrder_NullOrderingToJSON(message.nullOrdering);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_SortOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExpression_SortOrder();
        message.child = (object.child !== undefined && object.child !== null)
            ? exports.Expression.fromPartial(object.child)
            : undefined;
        message.direction = (_a = object.direction) !== null && _a !== void 0 ? _a : 0;
        message.nullOrdering = (_b = object.nullOrdering) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseExpression_Cast() {
    return { expr: undefined, type: undefined, typeStr: undefined };
}
exports.Expression_Cast = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.expr !== undefined) {
            exports.Expression.encode(message.expr, writer.uint32(10).fork()).ldelim();
        }
        if (message.type !== undefined) {
            types_1.DataType.encode(message.type, writer.uint32(18).fork()).ldelim();
        }
        if (message.typeStr !== undefined) {
            writer.uint32(26).string(message.typeStr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Cast();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.expr = exports.Expression.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = types_1.DataType.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            expr: isSet(object.expr) ? exports.Expression.fromJSON(object.expr) : undefined,
            type: isSet(object.type) ? types_1.DataType.fromJSON(object.type) : undefined,
            typeStr: isSet(object.typeStr) ? globalThis.String(object.typeStr) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.expr !== undefined) {
            obj.expr = exports.Expression.toJSON(message.expr);
        }
        if (message.type !== undefined) {
            obj.type = types_1.DataType.toJSON(message.type);
        }
        if (message.typeStr !== undefined) {
            obj.typeStr = message.typeStr;
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Cast.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_Cast();
        message.expr = (object.expr !== undefined && object.expr !== null)
            ? exports.Expression.fromPartial(object.expr)
            : undefined;
        message.type = (object.type !== undefined && object.type !== null) ? types_1.DataType.fromPartial(object.type) : undefined;
        message.typeStr = (_a = object.typeStr) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseExpression_Literal() {
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
exports.Expression_Literal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.null !== undefined) {
            types_1.DataType.encode(message.null, writer.uint32(10).fork()).ldelim();
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
            exports.Expression_Literal_Decimal.encode(message.decimal, writer.uint32(98).fork()).ldelim();
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
            exports.Expression_Literal_CalendarInterval.encode(message.calendarInterval, writer.uint32(154).fork()).ldelim();
        }
        if (message.yearMonthInterval !== undefined) {
            writer.uint32(160).int32(message.yearMonthInterval);
        }
        if (message.dayTimeInterval !== undefined) {
            writer.uint32(168).int64(message.dayTimeInterval);
        }
        if (message.array !== undefined) {
            exports.Expression_Literal_Array.encode(message.array, writer.uint32(178).fork()).ldelim();
        }
        if (message.map !== undefined) {
            exports.Expression_Literal_Map.encode(message.map, writer.uint32(186).fork()).ldelim();
        }
        if (message.struct !== undefined) {
            exports.Expression_Literal_Struct.encode(message.struct, writer.uint32(194).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Literal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.null = types_1.DataType.decode(reader, reader.uint32());
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
                    message.long = longToNumber(reader.int64());
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
                    message.decimal = exports.Expression_Literal_Decimal.decode(reader, reader.uint32());
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
                    message.timestamp = longToNumber(reader.int64());
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.timestampNtz = longToNumber(reader.int64());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.calendarInterval = exports.Expression_Literal_CalendarInterval.decode(reader, reader.uint32());
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
                    message.dayTimeInterval = longToNumber(reader.int64());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.array = exports.Expression_Literal_Array.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.map = exports.Expression_Literal_Map.decode(reader, reader.uint32());
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.struct = exports.Expression_Literal_Struct.decode(reader, reader.uint32());
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
            null: isSet(object.null) ? types_1.DataType.fromJSON(object.null) : undefined,
            binary: isSet(object.binary) ? bytesFromBase64(object.binary) : undefined,
            boolean: isSet(object.boolean) ? globalThis.Boolean(object.boolean) : undefined,
            byte: isSet(object.byte) ? globalThis.Number(object.byte) : undefined,
            short: isSet(object.short) ? globalThis.Number(object.short) : undefined,
            integer: isSet(object.integer) ? globalThis.Number(object.integer) : undefined,
            long: isSet(object.long) ? globalThis.Number(object.long) : undefined,
            float: isSet(object.float) ? globalThis.Number(object.float) : undefined,
            double: isSet(object.double) ? globalThis.Number(object.double) : undefined,
            decimal: isSet(object.decimal) ? exports.Expression_Literal_Decimal.fromJSON(object.decimal) : undefined,
            string: isSet(object.string) ? globalThis.String(object.string) : undefined,
            date: isSet(object.date) ? globalThis.Number(object.date) : undefined,
            timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : undefined,
            timestampNtz: isSet(object.timestampNtz) ? globalThis.Number(object.timestampNtz) : undefined,
            calendarInterval: isSet(object.calendarInterval)
                ? exports.Expression_Literal_CalendarInterval.fromJSON(object.calendarInterval)
                : undefined,
            yearMonthInterval: isSet(object.yearMonthInterval) ? globalThis.Number(object.yearMonthInterval) : undefined,
            dayTimeInterval: isSet(object.dayTimeInterval) ? globalThis.Number(object.dayTimeInterval) : undefined,
            array: isSet(object.array) ? exports.Expression_Literal_Array.fromJSON(object.array) : undefined,
            map: isSet(object.map) ? exports.Expression_Literal_Map.fromJSON(object.map) : undefined,
            struct: isSet(object.struct) ? exports.Expression_Literal_Struct.fromJSON(object.struct) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.null !== undefined) {
            obj.null = types_1.DataType.toJSON(message.null);
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
            obj.decimal = exports.Expression_Literal_Decimal.toJSON(message.decimal);
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
            obj.calendarInterval = exports.Expression_Literal_CalendarInterval.toJSON(message.calendarInterval);
        }
        if (message.yearMonthInterval !== undefined) {
            obj.yearMonthInterval = Math.round(message.yearMonthInterval);
        }
        if (message.dayTimeInterval !== undefined) {
            obj.dayTimeInterval = Math.round(message.dayTimeInterval);
        }
        if (message.array !== undefined) {
            obj.array = exports.Expression_Literal_Array.toJSON(message.array);
        }
        if (message.map !== undefined) {
            obj.map = exports.Expression_Literal_Map.toJSON(message.map);
        }
        if (message.struct !== undefined) {
            obj.struct = exports.Expression_Literal_Struct.toJSON(message.struct);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Literal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var message = createBaseExpression_Literal();
        message.null = (object.null !== undefined && object.null !== null) ? types_1.DataType.fromPartial(object.null) : undefined;
        message.binary = (_a = object.binary) !== null && _a !== void 0 ? _a : undefined;
        message.boolean = (_b = object.boolean) !== null && _b !== void 0 ? _b : undefined;
        message.byte = (_c = object.byte) !== null && _c !== void 0 ? _c : undefined;
        message.short = (_d = object.short) !== null && _d !== void 0 ? _d : undefined;
        message.integer = (_e = object.integer) !== null && _e !== void 0 ? _e : undefined;
        message.long = (_f = object.long) !== null && _f !== void 0 ? _f : undefined;
        message.float = (_g = object.float) !== null && _g !== void 0 ? _g : undefined;
        message.double = (_h = object.double) !== null && _h !== void 0 ? _h : undefined;
        message.decimal = (object.decimal !== undefined && object.decimal !== null)
            ? exports.Expression_Literal_Decimal.fromPartial(object.decimal)
            : undefined;
        message.string = (_j = object.string) !== null && _j !== void 0 ? _j : undefined;
        message.date = (_k = object.date) !== null && _k !== void 0 ? _k : undefined;
        message.timestamp = (_l = object.timestamp) !== null && _l !== void 0 ? _l : undefined;
        message.timestampNtz = (_m = object.timestampNtz) !== null && _m !== void 0 ? _m : undefined;
        message.calendarInterval = (object.calendarInterval !== undefined && object.calendarInterval !== null)
            ? exports.Expression_Literal_CalendarInterval.fromPartial(object.calendarInterval)
            : undefined;
        message.yearMonthInterval = (_o = object.yearMonthInterval) !== null && _o !== void 0 ? _o : undefined;
        message.dayTimeInterval = (_p = object.dayTimeInterval) !== null && _p !== void 0 ? _p : undefined;
        message.array = (object.array !== undefined && object.array !== null)
            ? exports.Expression_Literal_Array.fromPartial(object.array)
            : undefined;
        message.map = (object.map !== undefined && object.map !== null)
            ? exports.Expression_Literal_Map.fromPartial(object.map)
            : undefined;
        message.struct = (object.struct !== undefined && object.struct !== null)
            ? exports.Expression_Literal_Struct.fromPartial(object.struct)
            : undefined;
        return message;
    },
};
function createBaseExpression_Literal_Decimal() {
    return { value: "", precision: undefined, scale: undefined };
}
exports.Expression_Literal_Decimal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Literal_Decimal();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            value: isSet(object.value) ? globalThis.String(object.value) : "",
            precision: isSet(object.precision) ? globalThis.Number(object.precision) : undefined,
            scale: isSet(object.scale) ? globalThis.Number(object.scale) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.Expression_Literal_Decimal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseExpression_Literal_Decimal();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "";
        message.precision = (_b = object.precision) !== null && _b !== void 0 ? _b : undefined;
        message.scale = (_c = object.scale) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseExpression_Literal_CalendarInterval() {
    return { months: 0, days: 0, microseconds: 0 };
}
exports.Expression_Literal_CalendarInterval = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Literal_CalendarInterval();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.microseconds = longToNumber(reader.int64());
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
            months: isSet(object.months) ? globalThis.Number(object.months) : 0,
            days: isSet(object.days) ? globalThis.Number(object.days) : 0,
            microseconds: isSet(object.microseconds) ? globalThis.Number(object.microseconds) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.Expression_Literal_CalendarInterval.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseExpression_Literal_CalendarInterval();
        message.months = (_a = object.months) !== null && _a !== void 0 ? _a : 0;
        message.days = (_b = object.days) !== null && _b !== void 0 ? _b : 0;
        message.microseconds = (_c = object.microseconds) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseExpression_Literal_Array() {
    return { elementType: undefined, elements: [] };
}
exports.Expression_Literal_Array = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.elementType !== undefined) {
            types_1.DataType.encode(message.elementType, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.elements; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Expression_Literal.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Literal_Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.elementType = types_1.DataType.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.elements.push(exports.Expression_Literal.decode(reader, reader.uint32()));
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
            elementType: isSet(object.elementType) ? types_1.DataType.fromJSON(object.elementType) : undefined,
            elements: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.elements)
                ? object.elements.map(function (e) { return exports.Expression_Literal.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.elementType !== undefined) {
            obj.elementType = types_1.DataType.toJSON(message.elementType);
        }
        if ((_a = message.elements) === null || _a === void 0 ? void 0 : _a.length) {
            obj.elements = message.elements.map(function (e) { return exports.Expression_Literal.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Literal_Array.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_Literal_Array();
        message.elementType = (object.elementType !== undefined && object.elementType !== null)
            ? types_1.DataType.fromPartial(object.elementType)
            : undefined;
        message.elements = ((_a = object.elements) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Expression_Literal.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseExpression_Literal_Map() {
    return { keyType: undefined, valueType: undefined, keys: [], values: [] };
}
exports.Expression_Literal_Map = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.keyType !== undefined) {
            types_1.DataType.encode(message.keyType, writer.uint32(10).fork()).ldelim();
        }
        if (message.valueType !== undefined) {
            types_1.DataType.encode(message.valueType, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Expression_Literal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.values; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Expression_Literal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Literal_Map();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keyType = types_1.DataType.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.valueType = types_1.DataType.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.keys.push(exports.Expression_Literal.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.values.push(exports.Expression_Literal.decode(reader, reader.uint32()));
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
            keyType: isSet(object.keyType) ? types_1.DataType.fromJSON(object.keyType) : undefined,
            valueType: isSet(object.valueType) ? types_1.DataType.fromJSON(object.valueType) : undefined,
            keys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) { return exports.Expression_Literal.fromJSON(e); }) : [],
            values: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.values)
                ? object.values.map(function (e) { return exports.Expression_Literal.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a, _b;
        var obj = {};
        if (message.keyType !== undefined) {
            obj.keyType = types_1.DataType.toJSON(message.keyType);
        }
        if (message.valueType !== undefined) {
            obj.valueType = types_1.DataType.toJSON(message.valueType);
        }
        if ((_a = message.keys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.keys = message.keys.map(function (e) { return exports.Expression_Literal.toJSON(e); });
        }
        if ((_b = message.values) === null || _b === void 0 ? void 0 : _b.length) {
            obj.values = message.values.map(function (e) { return exports.Expression_Literal.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Literal_Map.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExpression_Literal_Map();
        message.keyType = (object.keyType !== undefined && object.keyType !== null)
            ? types_1.DataType.fromPartial(object.keyType)
            : undefined;
        message.valueType = (object.valueType !== undefined && object.valueType !== null)
            ? types_1.DataType.fromPartial(object.valueType)
            : undefined;
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Expression_Literal.fromPartial(e); })) || [];
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Expression_Literal.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseExpression_Literal_Struct() {
    return { structType: undefined, elements: [] };
}
exports.Expression_Literal_Struct = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.structType !== undefined) {
            types_1.DataType.encode(message.structType, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.elements; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Expression_Literal.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Literal_Struct();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.structType = types_1.DataType.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.elements.push(exports.Expression_Literal.decode(reader, reader.uint32()));
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
            structType: isSet(object.structType) ? types_1.DataType.fromJSON(object.structType) : undefined,
            elements: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.elements)
                ? object.elements.map(function (e) { return exports.Expression_Literal.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.structType !== undefined) {
            obj.structType = types_1.DataType.toJSON(message.structType);
        }
        if ((_a = message.elements) === null || _a === void 0 ? void 0 : _a.length) {
            obj.elements = message.elements.map(function (e) { return exports.Expression_Literal.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Literal_Struct.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_Literal_Struct();
        message.structType = (object.structType !== undefined && object.structType !== null)
            ? types_1.DataType.fromPartial(object.structType)
            : undefined;
        message.elements = ((_a = object.elements) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Expression_Literal.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseExpression_UnresolvedAttribute() {
    return { unparsedIdentifier: "", planId: undefined, isMetadataColumn: undefined };
}
exports.Expression_UnresolvedAttribute = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_UnresolvedAttribute();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.planId = longToNumber(reader.int64());
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
    fromJSON: function (object) {
        return {
            unparsedIdentifier: isSet(object.unparsedIdentifier) ? globalThis.String(object.unparsedIdentifier) : "",
            planId: isSet(object.planId) ? globalThis.Number(object.planId) : undefined,
            isMetadataColumn: isSet(object.isMetadataColumn) ? globalThis.Boolean(object.isMetadataColumn) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.Expression_UnresolvedAttribute.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseExpression_UnresolvedAttribute();
        message.unparsedIdentifier = (_a = object.unparsedIdentifier) !== null && _a !== void 0 ? _a : "";
        message.planId = (_b = object.planId) !== null && _b !== void 0 ? _b : undefined;
        message.isMetadataColumn = (_c = object.isMetadataColumn) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseExpression_GetColumnByOrdinal() {
    return { ordinal: 0, planId: undefined };
}
exports.Expression_GetColumnByOrdinal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ordinal !== 0) {
            writer.uint32(8).int32(message.ordinal);
        }
        if (message.planId !== undefined) {
            writer.uint32(16).int64(message.planId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_GetColumnByOrdinal();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            ordinal: isSet(object.ordinal) ? globalThis.Number(object.ordinal) : 0,
            planId: isSet(object.planId) ? globalThis.Number(object.planId) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.ordinal !== 0) {
            obj.ordinal = Math.round(message.ordinal);
        }
        if (message.planId !== undefined) {
            obj.planId = Math.round(message.planId);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_GetColumnByOrdinal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExpression_GetColumnByOrdinal();
        message.ordinal = (_a = object.ordinal) !== null && _a !== void 0 ? _a : 0;
        message.planId = (_b = object.planId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseExpression_UnresolvedFunction() {
    return { functionName: "", arguments: [], isDistinct: false, isUserDefinedFunction: false };
}
exports.Expression_UnresolvedFunction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.functionName !== "") {
            writer.uint32(10).string(message.functionName);
        }
        for (var _i = 0, _a = message.arguments; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.isDistinct === true) {
            writer.uint32(24).bool(message.isDistinct);
        }
        if (message.isUserDefinedFunction === true) {
            writer.uint32(32).bool(message.isUserDefinedFunction);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_UnresolvedFunction();
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
                    message.arguments.push(exports.Expression.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            functionName: isSet(object.functionName) ? globalThis.String(object.functionName) : "",
            arguments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.arguments)
                ? object.arguments.map(function (e) { return exports.Expression.fromJSON(e); })
                : [],
            isDistinct: isSet(object.isDistinct) ? globalThis.Boolean(object.isDistinct) : false,
            isUserDefinedFunction: isSet(object.isUserDefinedFunction)
                ? globalThis.Boolean(object.isUserDefinedFunction)
                : false,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.functionName !== "") {
            obj.functionName = message.functionName;
        }
        if ((_a = message.arguments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.arguments = message.arguments.map(function (e) { return exports.Expression.toJSON(e); });
        }
        if (message.isDistinct === true) {
            obj.isDistinct = message.isDistinct;
        }
        if (message.isUserDefinedFunction === true) {
            obj.isUserDefinedFunction = message.isUserDefinedFunction;
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_UnresolvedFunction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseExpression_UnresolvedFunction();
        message.functionName = (_a = object.functionName) !== null && _a !== void 0 ? _a : "";
        message.arguments = ((_b = object.arguments) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Expression.fromPartial(e); })) || [];
        message.isDistinct = (_c = object.isDistinct) !== null && _c !== void 0 ? _c : false;
        message.isUserDefinedFunction = (_d = object.isUserDefinedFunction) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseExpression_ExpressionString() {
    return { expression: "" };
}
exports.Expression_ExpressionString = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.expression !== "") {
            writer.uint32(10).string(message.expression);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_ExpressionString();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { expression: isSet(object.expression) ? globalThis.String(object.expression) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.expression !== "") {
            obj.expression = message.expression;
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_ExpressionString.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_ExpressionString();
        message.expression = (_a = object.expression) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseExpression_UnresolvedStar() {
    return { unparsedTarget: undefined };
}
exports.Expression_UnresolvedStar = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.unparsedTarget !== undefined) {
            writer.uint32(10).string(message.unparsedTarget);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_UnresolvedStar();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { unparsedTarget: isSet(object.unparsedTarget) ? globalThis.String(object.unparsedTarget) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.unparsedTarget !== undefined) {
            obj.unparsedTarget = message.unparsedTarget;
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_UnresolvedStar.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_UnresolvedStar();
        message.unparsedTarget = (_a = object.unparsedTarget) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseExpression_UnresolvedRegex() {
    return { colName: "", planId: undefined };
}
exports.Expression_UnresolvedRegex = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.colName !== "") {
            writer.uint32(10).string(message.colName);
        }
        if (message.planId !== undefined) {
            writer.uint32(16).int64(message.planId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_UnresolvedRegex();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            colName: isSet(object.colName) ? globalThis.String(object.colName) : "",
            planId: isSet(object.planId) ? globalThis.Number(object.planId) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.colName !== "") {
            obj.colName = message.colName;
        }
        if (message.planId !== undefined) {
            obj.planId = Math.round(message.planId);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_UnresolvedRegex.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExpression_UnresolvedRegex();
        message.colName = (_a = object.colName) !== null && _a !== void 0 ? _a : "";
        message.planId = (_b = object.planId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseExpression_UnresolvedExtractValue() {
    return { child: undefined, extraction: undefined };
}
exports.Expression_UnresolvedExtractValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.child !== undefined) {
            exports.Expression.encode(message.child, writer.uint32(10).fork()).ldelim();
        }
        if (message.extraction !== undefined) {
            exports.Expression.encode(message.extraction, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_UnresolvedExtractValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.child = exports.Expression.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.extraction = exports.Expression.decode(reader, reader.uint32());
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
            child: isSet(object.child) ? exports.Expression.fromJSON(object.child) : undefined,
            extraction: isSet(object.extraction) ? exports.Expression.fromJSON(object.extraction) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.child !== undefined) {
            obj.child = exports.Expression.toJSON(message.child);
        }
        if (message.extraction !== undefined) {
            obj.extraction = exports.Expression.toJSON(message.extraction);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_UnresolvedExtractValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseExpression_UnresolvedExtractValue();
        message.child = (object.child !== undefined && object.child !== null)
            ? exports.Expression.fromPartial(object.child)
            : undefined;
        message.extraction = (object.extraction !== undefined && object.extraction !== null)
            ? exports.Expression.fromPartial(object.extraction)
            : undefined;
        return message;
    },
};
function createBaseExpression_UpdateFields() {
    return { structExpression: undefined, fieldName: "", valueExpression: undefined };
}
exports.Expression_UpdateFields = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.structExpression !== undefined) {
            exports.Expression.encode(message.structExpression, writer.uint32(10).fork()).ldelim();
        }
        if (message.fieldName !== "") {
            writer.uint32(18).string(message.fieldName);
        }
        if (message.valueExpression !== undefined) {
            exports.Expression.encode(message.valueExpression, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_UpdateFields();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.structExpression = exports.Expression.decode(reader, reader.uint32());
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
                    message.valueExpression = exports.Expression.decode(reader, reader.uint32());
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
            structExpression: isSet(object.structExpression) ? exports.Expression.fromJSON(object.structExpression) : undefined,
            fieldName: isSet(object.fieldName) ? globalThis.String(object.fieldName) : "",
            valueExpression: isSet(object.valueExpression) ? exports.Expression.fromJSON(object.valueExpression) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.structExpression !== undefined) {
            obj.structExpression = exports.Expression.toJSON(message.structExpression);
        }
        if (message.fieldName !== "") {
            obj.fieldName = message.fieldName;
        }
        if (message.valueExpression !== undefined) {
            obj.valueExpression = exports.Expression.toJSON(message.valueExpression);
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_UpdateFields.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_UpdateFields();
        message.structExpression = (object.structExpression !== undefined && object.structExpression !== null)
            ? exports.Expression.fromPartial(object.structExpression)
            : undefined;
        message.fieldName = (_a = object.fieldName) !== null && _a !== void 0 ? _a : "";
        message.valueExpression = (object.valueExpression !== undefined && object.valueExpression !== null)
            ? exports.Expression.fromPartial(object.valueExpression)
            : undefined;
        return message;
    },
};
function createBaseExpression_Alias() {
    return { expr: undefined, name: [], metadata: undefined };
}
exports.Expression_Alias = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.expr !== undefined) {
            exports.Expression.encode(message.expr, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.name; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.metadata !== undefined) {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_Alias();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.expr = exports.Expression.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            expr: isSet(object.expr) ? exports.Expression.fromJSON(object.expr) : undefined,
            name: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.name) ? object.name.map(function (e) { return globalThis.String(e); }) : [],
            metadata: isSet(object.metadata) ? globalThis.String(object.metadata) : undefined,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.expr !== undefined) {
            obj.expr = exports.Expression.toJSON(message.expr);
        }
        if ((_a = message.name) === null || _a === void 0 ? void 0 : _a.length) {
            obj.name = message.name;
        }
        if (message.metadata !== undefined) {
            obj.metadata = message.metadata;
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_Alias.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExpression_Alias();
        message.expr = (object.expr !== undefined && object.expr !== null)
            ? exports.Expression.fromPartial(object.expr)
            : undefined;
        message.name = ((_a = object.name) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseExpression_LambdaFunction() {
    return { function: undefined, arguments: [] };
}
exports.Expression_LambdaFunction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.function !== undefined) {
            exports.Expression.encode(message.function, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.arguments; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Expression_UnresolvedNamedLambdaVariable.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_LambdaFunction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.function = exports.Expression.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.arguments.push(exports.Expression_UnresolvedNamedLambdaVariable.decode(reader, reader.uint32()));
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
            function: isSet(object.function) ? exports.Expression.fromJSON(object.function) : undefined,
            arguments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.arguments)
                ? object.arguments.map(function (e) { return exports.Expression_UnresolvedNamedLambdaVariable.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.function !== undefined) {
            obj.function = exports.Expression.toJSON(message.function);
        }
        if ((_a = message.arguments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.arguments = message.arguments.map(function (e) { return exports.Expression_UnresolvedNamedLambdaVariable.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_LambdaFunction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_LambdaFunction();
        message.function = (object.function !== undefined && object.function !== null)
            ? exports.Expression.fromPartial(object.function)
            : undefined;
        message.arguments = ((_a = object.arguments) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Expression_UnresolvedNamedLambdaVariable.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseExpression_UnresolvedNamedLambdaVariable() {
    return { nameParts: [] };
}
exports.Expression_UnresolvedNamedLambdaVariable = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.nameParts; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExpression_UnresolvedNamedLambdaVariable();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            nameParts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.nameParts)
                ? object.nameParts.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.nameParts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.nameParts = message.nameParts;
        }
        return obj;
    },
    create: function (base) {
        return exports.Expression_UnresolvedNamedLambdaVariable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExpression_UnresolvedNamedLambdaVariable();
        message.nameParts = ((_a = object.nameParts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseCommonInlineUserDefinedFunction() {
    return {
        functionName: "",
        deterministic: false,
        arguments: [],
        pythonUdf: undefined,
        scalarScalaUdf: undefined,
        javaUdf: undefined,
    };
}
exports.CommonInlineUserDefinedFunction = {
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
            exports.Expression.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.pythonUdf !== undefined) {
            exports.PythonUDF.encode(message.pythonUdf, writer.uint32(34).fork()).ldelim();
        }
        if (message.scalarScalaUdf !== undefined) {
            exports.ScalarScalaUDF.encode(message.scalarScalaUdf, writer.uint32(42).fork()).ldelim();
        }
        if (message.javaUdf !== undefined) {
            exports.JavaUDF.encode(message.javaUdf, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommonInlineUserDefinedFunction();
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
                    message.arguments.push(exports.Expression.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.pythonUdf = exports.PythonUDF.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.scalarScalaUdf = exports.ScalarScalaUDF.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.javaUdf = exports.JavaUDF.decode(reader, reader.uint32());
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
                ? object.arguments.map(function (e) { return exports.Expression.fromJSON(e); })
                : [],
            pythonUdf: isSet(object.pythonUdf) ? exports.PythonUDF.fromJSON(object.pythonUdf) : undefined,
            scalarScalaUdf: isSet(object.scalarScalaUdf) ? exports.ScalarScalaUDF.fromJSON(object.scalarScalaUdf) : undefined,
            javaUdf: isSet(object.javaUdf) ? exports.JavaUDF.fromJSON(object.javaUdf) : undefined,
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
            obj.arguments = message.arguments.map(function (e) { return exports.Expression.toJSON(e); });
        }
        if (message.pythonUdf !== undefined) {
            obj.pythonUdf = exports.PythonUDF.toJSON(message.pythonUdf);
        }
        if (message.scalarScalaUdf !== undefined) {
            obj.scalarScalaUdf = exports.ScalarScalaUDF.toJSON(message.scalarScalaUdf);
        }
        if (message.javaUdf !== undefined) {
            obj.javaUdf = exports.JavaUDF.toJSON(message.javaUdf);
        }
        return obj;
    },
    create: function (base) {
        return exports.CommonInlineUserDefinedFunction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCommonInlineUserDefinedFunction();
        message.functionName = (_a = object.functionName) !== null && _a !== void 0 ? _a : "";
        message.deterministic = (_b = object.deterministic) !== null && _b !== void 0 ? _b : false;
        message.arguments = ((_c = object.arguments) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.Expression.fromPartial(e); })) || [];
        message.pythonUdf = (object.pythonUdf !== undefined && object.pythonUdf !== null)
            ? exports.PythonUDF.fromPartial(object.pythonUdf)
            : undefined;
        message.scalarScalaUdf = (object.scalarScalaUdf !== undefined && object.scalarScalaUdf !== null)
            ? exports.ScalarScalaUDF.fromPartial(object.scalarScalaUdf)
            : undefined;
        message.javaUdf = (object.javaUdf !== undefined && object.javaUdf !== null)
            ? exports.JavaUDF.fromPartial(object.javaUdf)
            : undefined;
        return message;
    },
};
function createBasePythonUDF() {
    return { outputType: undefined, evalType: 0, command: new Uint8Array(0), pythonVer: "" };
}
exports.PythonUDF = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.outputType !== undefined) {
            types_1.DataType.encode(message.outputType, writer.uint32(10).fork()).ldelim();
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
        var message = createBasePythonUDF();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.outputType = types_1.DataType.decode(reader, reader.uint32());
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
            outputType: isSet(object.outputType) ? types_1.DataType.fromJSON(object.outputType) : undefined,
            evalType: isSet(object.evalType) ? globalThis.Number(object.evalType) : 0,
            command: isSet(object.command) ? bytesFromBase64(object.command) : new Uint8Array(0),
            pythonVer: isSet(object.pythonVer) ? globalThis.String(object.pythonVer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.outputType !== undefined) {
            obj.outputType = types_1.DataType.toJSON(message.outputType);
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
        return exports.PythonUDF.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePythonUDF();
        message.outputType = (object.outputType !== undefined && object.outputType !== null)
            ? types_1.DataType.fromPartial(object.outputType)
            : undefined;
        message.evalType = (_a = object.evalType) !== null && _a !== void 0 ? _a : 0;
        message.command = (_b = object.command) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.pythonVer = (_c = object.pythonVer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseScalarScalaUDF() {
    return { payload: new Uint8Array(0), inputTypes: [], outputType: undefined, nullable: false };
}
exports.ScalarScalaUDF = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        for (var _i = 0, _a = message.inputTypes; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.DataType.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.outputType !== undefined) {
            types_1.DataType.encode(message.outputType, writer.uint32(26).fork()).ldelim();
        }
        if (message.nullable === true) {
            writer.uint32(32).bool(message.nullable);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseScalarScalaUDF();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.inputTypes.push(types_1.DataType.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.outputType = types_1.DataType.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(0),
            inputTypes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.inputTypes)
                ? object.inputTypes.map(function (e) { return types_1.DataType.fromJSON(e); })
                : [],
            outputType: isSet(object.outputType) ? types_1.DataType.fromJSON(object.outputType) : undefined,
            nullable: isSet(object.nullable) ? globalThis.Boolean(object.nullable) : false,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.payload.length !== 0) {
            obj.payload = base64FromBytes(message.payload);
        }
        if ((_a = message.inputTypes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.inputTypes = message.inputTypes.map(function (e) { return types_1.DataType.toJSON(e); });
        }
        if (message.outputType !== undefined) {
            obj.outputType = types_1.DataType.toJSON(message.outputType);
        }
        if (message.nullable === true) {
            obj.nullable = message.nullable;
        }
        return obj;
    },
    create: function (base) {
        return exports.ScalarScalaUDF.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseScalarScalaUDF();
        message.payload = (_a = object.payload) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.inputTypes = ((_b = object.inputTypes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.DataType.fromPartial(e); })) || [];
        message.outputType = (object.outputType !== undefined && object.outputType !== null)
            ? types_1.DataType.fromPartial(object.outputType)
            : undefined;
        message.nullable = (_c = object.nullable) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseJavaUDF() {
    return { className: "", outputType: undefined, aggregate: false };
}
exports.JavaUDF = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.className !== "") {
            writer.uint32(10).string(message.className);
        }
        if (message.outputType !== undefined) {
            types_1.DataType.encode(message.outputType, writer.uint32(18).fork()).ldelim();
        }
        if (message.aggregate === true) {
            writer.uint32(24).bool(message.aggregate);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseJavaUDF();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.outputType = types_1.DataType.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            className: isSet(object.className) ? globalThis.String(object.className) : "",
            outputType: isSet(object.outputType) ? types_1.DataType.fromJSON(object.outputType) : undefined,
            aggregate: isSet(object.aggregate) ? globalThis.Boolean(object.aggregate) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.className !== "") {
            obj.className = message.className;
        }
        if (message.outputType !== undefined) {
            obj.outputType = types_1.DataType.toJSON(message.outputType);
        }
        if (message.aggregate === true) {
            obj.aggregate = message.aggregate;
        }
        return obj;
    },
    create: function (base) {
        return exports.JavaUDF.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseJavaUDF();
        message.className = (_a = object.className) !== null && _a !== void 0 ? _a : "";
        message.outputType = (object.outputType !== undefined && object.outputType !== null)
            ? types_1.DataType.fromPartial(object.outputType)
            : undefined;
        message.aggregate = (_b = object.aggregate) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseCallFunction() {
    return { functionName: "", arguments: [] };
}
exports.CallFunction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.functionName !== "") {
            writer.uint32(10).string(message.functionName);
        }
        for (var _i = 0, _a = message.arguments; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Expression.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCallFunction();
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
                    message.arguments.push(exports.Expression.decode(reader, reader.uint32()));
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
            arguments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.arguments)
                ? object.arguments.map(function (e) { return exports.Expression.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.functionName !== "") {
            obj.functionName = message.functionName;
        }
        if ((_a = message.arguments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.arguments = message.arguments.map(function (e) { return exports.Expression.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.CallFunction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCallFunction();
        message.functionName = (_a = object.functionName) !== null && _a !== void 0 ? _a : "";
        message.arguments = ((_b = object.arguments) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Expression.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseNamedArgumentExpression() {
    return { key: "", value: undefined };
}
exports.NamedArgumentExpression = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Expression.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNamedArgumentExpression();
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
                    message.value = exports.Expression.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.Expression.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.Expression.toJSON(message.value);
        }
        return obj;
    },
    create: function (base) {
        return exports.NamedArgumentExpression.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseNamedArgumentExpression();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.Expression.fromPartial(object.value)
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
function isSet(value) {
    return value !== null && value !== undefined;
}
