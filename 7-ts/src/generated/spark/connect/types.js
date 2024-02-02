"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType_Unparsed = exports.DataType_UDT = exports.DataType_Map = exports.DataType_Array = exports.DataType_Struct = exports.DataType_StructField = exports.DataType_Decimal = exports.DataType_VarChar = exports.DataType_Char = exports.DataType_DayTimeInterval = exports.DataType_YearMonthInterval = exports.DataType_CalendarInterval = exports.DataType_TimestampNTZ = exports.DataType_DateMessage = exports.DataType_Timestamp = exports.DataType_NULL = exports.DataType_Binary = exports.DataType_String = exports.DataType_Double = exports.DataType_Float = exports.DataType_Long = exports.DataType_Integer = exports.DataType_Short = exports.DataType_Byte = exports.DataType_Boolean = exports.DataType = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "spark.connect";
function createBaseDataType() {
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
        char: undefined,
        varChar: undefined,
        date: undefined,
        timestamp: undefined,
        timestampNtz: undefined,
        calendarInterval: undefined,
        yearMonthInterval: undefined,
        dayTimeInterval: undefined,
        array: undefined,
        struct: undefined,
        map: undefined,
        udt: undefined,
        unparsed: undefined,
    };
}
exports.DataType = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.null !== undefined) {
            exports.DataType_NULL.encode(message.null, writer.uint32(10).fork()).ldelim();
        }
        if (message.binary !== undefined) {
            exports.DataType_Binary.encode(message.binary, writer.uint32(18).fork()).ldelim();
        }
        if (message.boolean !== undefined) {
            exports.DataType_Boolean.encode(message.boolean, writer.uint32(26).fork()).ldelim();
        }
        if (message.byte !== undefined) {
            exports.DataType_Byte.encode(message.byte, writer.uint32(34).fork()).ldelim();
        }
        if (message.short !== undefined) {
            exports.DataType_Short.encode(message.short, writer.uint32(42).fork()).ldelim();
        }
        if (message.integer !== undefined) {
            exports.DataType_Integer.encode(message.integer, writer.uint32(50).fork()).ldelim();
        }
        if (message.long !== undefined) {
            exports.DataType_Long.encode(message.long, writer.uint32(58).fork()).ldelim();
        }
        if (message.float !== undefined) {
            exports.DataType_Float.encode(message.float, writer.uint32(66).fork()).ldelim();
        }
        if (message.double !== undefined) {
            exports.DataType_Double.encode(message.double, writer.uint32(74).fork()).ldelim();
        }
        if (message.decimal !== undefined) {
            exports.DataType_Decimal.encode(message.decimal, writer.uint32(82).fork()).ldelim();
        }
        if (message.string !== undefined) {
            exports.DataType_String.encode(message.string, writer.uint32(90).fork()).ldelim();
        }
        if (message.char !== undefined) {
            exports.DataType_Char.encode(message.char, writer.uint32(98).fork()).ldelim();
        }
        if (message.varChar !== undefined) {
            exports.DataType_VarChar.encode(message.varChar, writer.uint32(106).fork()).ldelim();
        }
        if (message.date !== undefined) {
            exports.DataType_DateMessage.encode(message.date, writer.uint32(114).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            exports.DataType_Timestamp.encode(message.timestamp, writer.uint32(122).fork()).ldelim();
        }
        if (message.timestampNtz !== undefined) {
            exports.DataType_TimestampNTZ.encode(message.timestampNtz, writer.uint32(130).fork()).ldelim();
        }
        if (message.calendarInterval !== undefined) {
            exports.DataType_CalendarInterval.encode(message.calendarInterval, writer.uint32(138).fork()).ldelim();
        }
        if (message.yearMonthInterval !== undefined) {
            exports.DataType_YearMonthInterval.encode(message.yearMonthInterval, writer.uint32(146).fork()).ldelim();
        }
        if (message.dayTimeInterval !== undefined) {
            exports.DataType_DayTimeInterval.encode(message.dayTimeInterval, writer.uint32(154).fork()).ldelim();
        }
        if (message.array !== undefined) {
            exports.DataType_Array.encode(message.array, writer.uint32(162).fork()).ldelim();
        }
        if (message.struct !== undefined) {
            exports.DataType_Struct.encode(message.struct, writer.uint32(170).fork()).ldelim();
        }
        if (message.map !== undefined) {
            exports.DataType_Map.encode(message.map, writer.uint32(178).fork()).ldelim();
        }
        if (message.udt !== undefined) {
            exports.DataType_UDT.encode(message.udt, writer.uint32(186).fork()).ldelim();
        }
        if (message.unparsed !== undefined) {
            exports.DataType_Unparsed.encode(message.unparsed, writer.uint32(194).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.null = exports.DataType_NULL.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.binary = exports.DataType_Binary.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.boolean = exports.DataType_Boolean.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.byte = exports.DataType_Byte.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.short = exports.DataType_Short.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.integer = exports.DataType_Integer.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.long = exports.DataType_Long.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.float = exports.DataType_Float.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.double = exports.DataType_Double.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.decimal = exports.DataType_Decimal.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.string = exports.DataType_String.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.char = exports.DataType_Char.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.varChar = exports.DataType_VarChar.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.date = exports.DataType_DateMessage.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.timestamp = exports.DataType_Timestamp.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.timestampNtz = exports.DataType_TimestampNTZ.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.calendarInterval = exports.DataType_CalendarInterval.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.yearMonthInterval = exports.DataType_YearMonthInterval.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.dayTimeInterval = exports.DataType_DayTimeInterval.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.array = exports.DataType_Array.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.struct = exports.DataType_Struct.decode(reader, reader.uint32());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.map = exports.DataType_Map.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.udt = exports.DataType_UDT.decode(reader, reader.uint32());
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.unparsed = exports.DataType_Unparsed.decode(reader, reader.uint32());
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
            null: isSet(object.null) ? exports.DataType_NULL.fromJSON(object.null) : undefined,
            binary: isSet(object.binary) ? exports.DataType_Binary.fromJSON(object.binary) : undefined,
            boolean: isSet(object.boolean) ? exports.DataType_Boolean.fromJSON(object.boolean) : undefined,
            byte: isSet(object.byte) ? exports.DataType_Byte.fromJSON(object.byte) : undefined,
            short: isSet(object.short) ? exports.DataType_Short.fromJSON(object.short) : undefined,
            integer: isSet(object.integer) ? exports.DataType_Integer.fromJSON(object.integer) : undefined,
            long: isSet(object.long) ? exports.DataType_Long.fromJSON(object.long) : undefined,
            float: isSet(object.float) ? exports.DataType_Float.fromJSON(object.float) : undefined,
            double: isSet(object.double) ? exports.DataType_Double.fromJSON(object.double) : undefined,
            decimal: isSet(object.decimal) ? exports.DataType_Decimal.fromJSON(object.decimal) : undefined,
            string: isSet(object.string) ? exports.DataType_String.fromJSON(object.string) : undefined,
            char: isSet(object.char) ? exports.DataType_Char.fromJSON(object.char) : undefined,
            varChar: isSet(object.varChar) ? exports.DataType_VarChar.fromJSON(object.varChar) : undefined,
            date: isSet(object.date) ? exports.DataType_DateMessage.fromJSON(object.date) : undefined,
            timestamp: isSet(object.timestamp) ? exports.DataType_Timestamp.fromJSON(object.timestamp) : undefined,
            timestampNtz: isSet(object.timestampNtz) ? exports.DataType_TimestampNTZ.fromJSON(object.timestampNtz) : undefined,
            calendarInterval: isSet(object.calendarInterval)
                ? exports.DataType_CalendarInterval.fromJSON(object.calendarInterval)
                : undefined,
            yearMonthInterval: isSet(object.yearMonthInterval)
                ? exports.DataType_YearMonthInterval.fromJSON(object.yearMonthInterval)
                : undefined,
            dayTimeInterval: isSet(object.dayTimeInterval)
                ? exports.DataType_DayTimeInterval.fromJSON(object.dayTimeInterval)
                : undefined,
            array: isSet(object.array) ? exports.DataType_Array.fromJSON(object.array) : undefined,
            struct: isSet(object.struct) ? exports.DataType_Struct.fromJSON(object.struct) : undefined,
            map: isSet(object.map) ? exports.DataType_Map.fromJSON(object.map) : undefined,
            udt: isSet(object.udt) ? exports.DataType_UDT.fromJSON(object.udt) : undefined,
            unparsed: isSet(object.unparsed) ? exports.DataType_Unparsed.fromJSON(object.unparsed) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.null !== undefined) {
            obj.null = exports.DataType_NULL.toJSON(message.null);
        }
        if (message.binary !== undefined) {
            obj.binary = exports.DataType_Binary.toJSON(message.binary);
        }
        if (message.boolean !== undefined) {
            obj.boolean = exports.DataType_Boolean.toJSON(message.boolean);
        }
        if (message.byte !== undefined) {
            obj.byte = exports.DataType_Byte.toJSON(message.byte);
        }
        if (message.short !== undefined) {
            obj.short = exports.DataType_Short.toJSON(message.short);
        }
        if (message.integer !== undefined) {
            obj.integer = exports.DataType_Integer.toJSON(message.integer);
        }
        if (message.long !== undefined) {
            obj.long = exports.DataType_Long.toJSON(message.long);
        }
        if (message.float !== undefined) {
            obj.float = exports.DataType_Float.toJSON(message.float);
        }
        if (message.double !== undefined) {
            obj.double = exports.DataType_Double.toJSON(message.double);
        }
        if (message.decimal !== undefined) {
            obj.decimal = exports.DataType_Decimal.toJSON(message.decimal);
        }
        if (message.string !== undefined) {
            obj.string = exports.DataType_String.toJSON(message.string);
        }
        if (message.char !== undefined) {
            obj.char = exports.DataType_Char.toJSON(message.char);
        }
        if (message.varChar !== undefined) {
            obj.varChar = exports.DataType_VarChar.toJSON(message.varChar);
        }
        if (message.date !== undefined) {
            obj.date = exports.DataType_DateMessage.toJSON(message.date);
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = exports.DataType_Timestamp.toJSON(message.timestamp);
        }
        if (message.timestampNtz !== undefined) {
            obj.timestampNtz = exports.DataType_TimestampNTZ.toJSON(message.timestampNtz);
        }
        if (message.calendarInterval !== undefined) {
            obj.calendarInterval = exports.DataType_CalendarInterval.toJSON(message.calendarInterval);
        }
        if (message.yearMonthInterval !== undefined) {
            obj.yearMonthInterval = exports.DataType_YearMonthInterval.toJSON(message.yearMonthInterval);
        }
        if (message.dayTimeInterval !== undefined) {
            obj.dayTimeInterval = exports.DataType_DayTimeInterval.toJSON(message.dayTimeInterval);
        }
        if (message.array !== undefined) {
            obj.array = exports.DataType_Array.toJSON(message.array);
        }
        if (message.struct !== undefined) {
            obj.struct = exports.DataType_Struct.toJSON(message.struct);
        }
        if (message.map !== undefined) {
            obj.map = exports.DataType_Map.toJSON(message.map);
        }
        if (message.udt !== undefined) {
            obj.udt = exports.DataType_UDT.toJSON(message.udt);
        }
        if (message.unparsed !== undefined) {
            obj.unparsed = exports.DataType_Unparsed.toJSON(message.unparsed);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseDataType();
        message.null = (object.null !== undefined && object.null !== null)
            ? exports.DataType_NULL.fromPartial(object.null)
            : undefined;
        message.binary = (object.binary !== undefined && object.binary !== null)
            ? exports.DataType_Binary.fromPartial(object.binary)
            : undefined;
        message.boolean = (object.boolean !== undefined && object.boolean !== null)
            ? exports.DataType_Boolean.fromPartial(object.boolean)
            : undefined;
        message.byte = (object.byte !== undefined && object.byte !== null)
            ? exports.DataType_Byte.fromPartial(object.byte)
            : undefined;
        message.short = (object.short !== undefined && object.short !== null)
            ? exports.DataType_Short.fromPartial(object.short)
            : undefined;
        message.integer = (object.integer !== undefined && object.integer !== null)
            ? exports.DataType_Integer.fromPartial(object.integer)
            : undefined;
        message.long = (object.long !== undefined && object.long !== null)
            ? exports.DataType_Long.fromPartial(object.long)
            : undefined;
        message.float = (object.float !== undefined && object.float !== null)
            ? exports.DataType_Float.fromPartial(object.float)
            : undefined;
        message.double = (object.double !== undefined && object.double !== null)
            ? exports.DataType_Double.fromPartial(object.double)
            : undefined;
        message.decimal = (object.decimal !== undefined && object.decimal !== null)
            ? exports.DataType_Decimal.fromPartial(object.decimal)
            : undefined;
        message.string = (object.string !== undefined && object.string !== null)
            ? exports.DataType_String.fromPartial(object.string)
            : undefined;
        message.char = (object.char !== undefined && object.char !== null)
            ? exports.DataType_Char.fromPartial(object.char)
            : undefined;
        message.varChar = (object.varChar !== undefined && object.varChar !== null)
            ? exports.DataType_VarChar.fromPartial(object.varChar)
            : undefined;
        message.date = (object.date !== undefined && object.date !== null)
            ? exports.DataType_DateMessage.fromPartial(object.date)
            : undefined;
        message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
            ? exports.DataType_Timestamp.fromPartial(object.timestamp)
            : undefined;
        message.timestampNtz = (object.timestampNtz !== undefined && object.timestampNtz !== null)
            ? exports.DataType_TimestampNTZ.fromPartial(object.timestampNtz)
            : undefined;
        message.calendarInterval = (object.calendarInterval !== undefined && object.calendarInterval !== null)
            ? exports.DataType_CalendarInterval.fromPartial(object.calendarInterval)
            : undefined;
        message.yearMonthInterval = (object.yearMonthInterval !== undefined && object.yearMonthInterval !== null)
            ? exports.DataType_YearMonthInterval.fromPartial(object.yearMonthInterval)
            : undefined;
        message.dayTimeInterval = (object.dayTimeInterval !== undefined && object.dayTimeInterval !== null)
            ? exports.DataType_DayTimeInterval.fromPartial(object.dayTimeInterval)
            : undefined;
        message.array = (object.array !== undefined && object.array !== null)
            ? exports.DataType_Array.fromPartial(object.array)
            : undefined;
        message.struct = (object.struct !== undefined && object.struct !== null)
            ? exports.DataType_Struct.fromPartial(object.struct)
            : undefined;
        message.map = (object.map !== undefined && object.map !== null) ? exports.DataType_Map.fromPartial(object.map) : undefined;
        message.udt = (object.udt !== undefined && object.udt !== null) ? exports.DataType_UDT.fromPartial(object.udt) : undefined;
        message.unparsed = (object.unparsed !== undefined && object.unparsed !== null)
            ? exports.DataType_Unparsed.fromPartial(object.unparsed)
            : undefined;
        return message;
    },
};
function createBaseDataType_Boolean() {
    return { typeVariationReference: 0 };
}
exports.DataType_Boolean = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Boolean();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Boolean.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Boolean();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_Byte() {
    return { typeVariationReference: 0 };
}
exports.DataType_Byte = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Byte();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Byte.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Byte();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_Short() {
    return { typeVariationReference: 0 };
}
exports.DataType_Short = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Short();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Short.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Short();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_Integer() {
    return { typeVariationReference: 0 };
}
exports.DataType_Integer = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Integer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Integer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Integer();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_Long() {
    return { typeVariationReference: 0 };
}
exports.DataType_Long = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Long();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Long.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Long();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_Float() {
    return { typeVariationReference: 0 };
}
exports.DataType_Float = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Float();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Float.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Float();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_Double() {
    return { typeVariationReference: 0 };
}
exports.DataType_Double = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Double();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Double.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Double();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_String() {
    return { typeVariationReference: 0 };
}
exports.DataType_String = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_String();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_String.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_String();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_Binary() {
    return { typeVariationReference: 0 };
}
exports.DataType_Binary = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Binary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Binary.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Binary();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_NULL() {
    return { typeVariationReference: 0 };
}
exports.DataType_NULL = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_NULL();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_NULL.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_NULL();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_Timestamp() {
    return { typeVariationReference: 0 };
}
exports.DataType_Timestamp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Timestamp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Timestamp.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Timestamp();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_DateMessage() {
    return { typeVariationReference: 0 };
}
exports.DataType_DateMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_DateMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_DateMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_DateMessage();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_TimestampNTZ() {
    return { typeVariationReference: 0 };
}
exports.DataType_TimestampNTZ = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_TimestampNTZ();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_TimestampNTZ.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_TimestampNTZ();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_CalendarInterval() {
    return { typeVariationReference: 0 };
}
exports.DataType_CalendarInterval = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.typeVariationReference !== 0) {
            writer.uint32(8).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_CalendarInterval();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_CalendarInterval.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_CalendarInterval();
        message.typeVariationReference = (_a = object.typeVariationReference) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDataType_YearMonthInterval() {
    return { startField: undefined, endField: undefined, typeVariationReference: 0 };
}
exports.DataType_YearMonthInterval = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.startField !== undefined) {
            writer.uint32(8).int32(message.startField);
        }
        if (message.endField !== undefined) {
            writer.uint32(16).int32(message.endField);
        }
        if (message.typeVariationReference !== 0) {
            writer.uint32(24).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_YearMonthInterval();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.startField = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.endField = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            startField: isSet(object.startField) ? globalThis.Number(object.startField) : undefined,
            endField: isSet(object.endField) ? globalThis.Number(object.endField) : undefined,
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.startField !== undefined) {
            obj.startField = Math.round(message.startField);
        }
        if (message.endField !== undefined) {
            obj.endField = Math.round(message.endField);
        }
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_YearMonthInterval.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDataType_YearMonthInterval();
        message.startField = (_a = object.startField) !== null && _a !== void 0 ? _a : undefined;
        message.endField = (_b = object.endField) !== null && _b !== void 0 ? _b : undefined;
        message.typeVariationReference = (_c = object.typeVariationReference) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseDataType_DayTimeInterval() {
    return { startField: undefined, endField: undefined, typeVariationReference: 0 };
}
exports.DataType_DayTimeInterval = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.startField !== undefined) {
            writer.uint32(8).int32(message.startField);
        }
        if (message.endField !== undefined) {
            writer.uint32(16).int32(message.endField);
        }
        if (message.typeVariationReference !== 0) {
            writer.uint32(24).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_DayTimeInterval();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.startField = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.endField = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            startField: isSet(object.startField) ? globalThis.Number(object.startField) : undefined,
            endField: isSet(object.endField) ? globalThis.Number(object.endField) : undefined,
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.startField !== undefined) {
            obj.startField = Math.round(message.startField);
        }
        if (message.endField !== undefined) {
            obj.endField = Math.round(message.endField);
        }
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_DayTimeInterval.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDataType_DayTimeInterval();
        message.startField = (_a = object.startField) !== null && _a !== void 0 ? _a : undefined;
        message.endField = (_b = object.endField) !== null && _b !== void 0 ? _b : undefined;
        message.typeVariationReference = (_c = object.typeVariationReference) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseDataType_Char() {
    return { length: 0, typeVariationReference: 0 };
}
exports.DataType_Char = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.length !== 0) {
            writer.uint32(8).int32(message.length);
        }
        if (message.typeVariationReference !== 0) {
            writer.uint32(16).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Char();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.length = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            length: isSet(object.length) ? globalThis.Number(object.length) : 0,
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.length !== 0) {
            obj.length = Math.round(message.length);
        }
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Char.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDataType_Char();
        message.length = (_a = object.length) !== null && _a !== void 0 ? _a : 0;
        message.typeVariationReference = (_b = object.typeVariationReference) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDataType_VarChar() {
    return { length: 0, typeVariationReference: 0 };
}
exports.DataType_VarChar = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.length !== 0) {
            writer.uint32(8).int32(message.length);
        }
        if (message.typeVariationReference !== 0) {
            writer.uint32(16).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_VarChar();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.length = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            length: isSet(object.length) ? globalThis.Number(object.length) : 0,
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.length !== 0) {
            obj.length = Math.round(message.length);
        }
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_VarChar.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDataType_VarChar();
        message.length = (_a = object.length) !== null && _a !== void 0 ? _a : 0;
        message.typeVariationReference = (_b = object.typeVariationReference) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDataType_Decimal() {
    return { scale: undefined, precision: undefined, typeVariationReference: 0 };
}
exports.DataType_Decimal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.scale !== undefined) {
            writer.uint32(8).int32(message.scale);
        }
        if (message.precision !== undefined) {
            writer.uint32(16).int32(message.precision);
        }
        if (message.typeVariationReference !== 0) {
            writer.uint32(24).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Decimal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.scale = reader.int32();
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
                    message.typeVariationReference = reader.uint32();
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
            scale: isSet(object.scale) ? globalThis.Number(object.scale) : undefined,
            precision: isSet(object.precision) ? globalThis.Number(object.precision) : undefined,
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.scale !== undefined) {
            obj.scale = Math.round(message.scale);
        }
        if (message.precision !== undefined) {
            obj.precision = Math.round(message.precision);
        }
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Decimal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDataType_Decimal();
        message.scale = (_a = object.scale) !== null && _a !== void 0 ? _a : undefined;
        message.precision = (_b = object.precision) !== null && _b !== void 0 ? _b : undefined;
        message.typeVariationReference = (_c = object.typeVariationReference) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseDataType_StructField() {
    return { name: "", dataType: undefined, nullable: false, metadata: undefined };
}
exports.DataType_StructField = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.dataType !== undefined) {
            exports.DataType.encode(message.dataType, writer.uint32(18).fork()).ldelim();
        }
        if (message.nullable === true) {
            writer.uint32(24).bool(message.nullable);
        }
        if (message.metadata !== undefined) {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_StructField();
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
                    message.dataType = exports.DataType.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.nullable = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            dataType: isSet(object.dataType) ? exports.DataType.fromJSON(object.dataType) : undefined,
            nullable: isSet(object.nullable) ? globalThis.Boolean(object.nullable) : false,
            metadata: isSet(object.metadata) ? globalThis.String(object.metadata) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.dataType !== undefined) {
            obj.dataType = exports.DataType.toJSON(message.dataType);
        }
        if (message.nullable === true) {
            obj.nullable = message.nullable;
        }
        if (message.metadata !== undefined) {
            obj.metadata = message.metadata;
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_StructField.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDataType_StructField();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.dataType = (object.dataType !== undefined && object.dataType !== null)
            ? exports.DataType.fromPartial(object.dataType)
            : undefined;
        message.nullable = (_b = object.nullable) !== null && _b !== void 0 ? _b : false;
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseDataType_Struct() {
    return { fields: [], typeVariationReference: 0 };
}
exports.DataType_Struct = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.fields; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DataType_StructField.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.typeVariationReference !== 0) {
            writer.uint32(16).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Struct();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fields.push(exports.DataType_StructField.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            fields: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.fields)
                ? object.fields.map(function (e) { return exports.DataType_StructField.fromJSON(e); })
                : [],
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.fields) === null || _a === void 0 ? void 0 : _a.length) {
            obj.fields = message.fields.map(function (e) { return exports.DataType_StructField.toJSON(e); });
        }
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Struct.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDataType_Struct();
        message.fields = ((_a = object.fields) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DataType_StructField.fromPartial(e); })) || [];
        message.typeVariationReference = (_b = object.typeVariationReference) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDataType_Array() {
    return { elementType: undefined, containsNull: false, typeVariationReference: 0 };
}
exports.DataType_Array = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.elementType !== undefined) {
            exports.DataType.encode(message.elementType, writer.uint32(10).fork()).ldelim();
        }
        if (message.containsNull === true) {
            writer.uint32(16).bool(message.containsNull);
        }
        if (message.typeVariationReference !== 0) {
            writer.uint32(24).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.elementType = exports.DataType.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.containsNull = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            elementType: isSet(object.elementType) ? exports.DataType.fromJSON(object.elementType) : undefined,
            containsNull: isSet(object.containsNull) ? globalThis.Boolean(object.containsNull) : false,
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.elementType !== undefined) {
            obj.elementType = exports.DataType.toJSON(message.elementType);
        }
        if (message.containsNull === true) {
            obj.containsNull = message.containsNull;
        }
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Array.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDataType_Array();
        message.elementType = (object.elementType !== undefined && object.elementType !== null)
            ? exports.DataType.fromPartial(object.elementType)
            : undefined;
        message.containsNull = (_a = object.containsNull) !== null && _a !== void 0 ? _a : false;
        message.typeVariationReference = (_b = object.typeVariationReference) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDataType_Map() {
    return { keyType: undefined, valueType: undefined, valueContainsNull: false, typeVariationReference: 0 };
}
exports.DataType_Map = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.keyType !== undefined) {
            exports.DataType.encode(message.keyType, writer.uint32(10).fork()).ldelim();
        }
        if (message.valueType !== undefined) {
            exports.DataType.encode(message.valueType, writer.uint32(18).fork()).ldelim();
        }
        if (message.valueContainsNull === true) {
            writer.uint32(24).bool(message.valueContainsNull);
        }
        if (message.typeVariationReference !== 0) {
            writer.uint32(32).uint32(message.typeVariationReference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Map();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keyType = exports.DataType.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.valueType = exports.DataType.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.valueContainsNull = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.typeVariationReference = reader.uint32();
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
            keyType: isSet(object.keyType) ? exports.DataType.fromJSON(object.keyType) : undefined,
            valueType: isSet(object.valueType) ? exports.DataType.fromJSON(object.valueType) : undefined,
            valueContainsNull: isSet(object.valueContainsNull) ? globalThis.Boolean(object.valueContainsNull) : false,
            typeVariationReference: isSet(object.typeVariationReference)
                ? globalThis.Number(object.typeVariationReference)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.keyType !== undefined) {
            obj.keyType = exports.DataType.toJSON(message.keyType);
        }
        if (message.valueType !== undefined) {
            obj.valueType = exports.DataType.toJSON(message.valueType);
        }
        if (message.valueContainsNull === true) {
            obj.valueContainsNull = message.valueContainsNull;
        }
        if (message.typeVariationReference !== 0) {
            obj.typeVariationReference = Math.round(message.typeVariationReference);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Map.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDataType_Map();
        message.keyType = (object.keyType !== undefined && object.keyType !== null)
            ? exports.DataType.fromPartial(object.keyType)
            : undefined;
        message.valueType = (object.valueType !== undefined && object.valueType !== null)
            ? exports.DataType.fromPartial(object.valueType)
            : undefined;
        message.valueContainsNull = (_a = object.valueContainsNull) !== null && _a !== void 0 ? _a : false;
        message.typeVariationReference = (_b = object.typeVariationReference) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDataType_UDT() {
    return {
        type: "",
        jvmClass: undefined,
        pythonClass: undefined,
        serializedPythonClass: undefined,
        sqlType: undefined,
    };
}
exports.DataType_UDT = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.jvmClass !== undefined) {
            writer.uint32(18).string(message.jvmClass);
        }
        if (message.pythonClass !== undefined) {
            writer.uint32(26).string(message.pythonClass);
        }
        if (message.serializedPythonClass !== undefined) {
            writer.uint32(34).string(message.serializedPythonClass);
        }
        if (message.sqlType !== undefined) {
            exports.DataType.encode(message.sqlType, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_UDT();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.jvmClass = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.pythonClass = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.serializedPythonClass = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sqlType = exports.DataType.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            jvmClass: isSet(object.jvmClass) ? globalThis.String(object.jvmClass) : undefined,
            pythonClass: isSet(object.pythonClass) ? globalThis.String(object.pythonClass) : undefined,
            serializedPythonClass: isSet(object.serializedPythonClass)
                ? globalThis.String(object.serializedPythonClass)
                : undefined,
            sqlType: isSet(object.sqlType) ? exports.DataType.fromJSON(object.sqlType) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.jvmClass !== undefined) {
            obj.jvmClass = message.jvmClass;
        }
        if (message.pythonClass !== undefined) {
            obj.pythonClass = message.pythonClass;
        }
        if (message.serializedPythonClass !== undefined) {
            obj.serializedPythonClass = message.serializedPythonClass;
        }
        if (message.sqlType !== undefined) {
            obj.sqlType = exports.DataType.toJSON(message.sqlType);
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_UDT.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseDataType_UDT();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.jvmClass = (_b = object.jvmClass) !== null && _b !== void 0 ? _b : undefined;
        message.pythonClass = (_c = object.pythonClass) !== null && _c !== void 0 ? _c : undefined;
        message.serializedPythonClass = (_d = object.serializedPythonClass) !== null && _d !== void 0 ? _d : undefined;
        message.sqlType = (object.sqlType !== undefined && object.sqlType !== null)
            ? exports.DataType.fromPartial(object.sqlType)
            : undefined;
        return message;
    },
};
function createBaseDataType_Unparsed() {
    return { dataTypeString: "" };
}
exports.DataType_Unparsed = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.dataTypeString !== "") {
            writer.uint32(10).string(message.dataTypeString);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataType_Unparsed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.dataTypeString = reader.string();
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
        return { dataTypeString: isSet(object.dataTypeString) ? globalThis.String(object.dataTypeString) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.dataTypeString !== "") {
            obj.dataTypeString = message.dataTypeString;
        }
        return obj;
    },
    create: function (base) {
        return exports.DataType_Unparsed.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDataType_Unparsed();
        message.dataTypeString = (_a = object.dataTypeString) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
