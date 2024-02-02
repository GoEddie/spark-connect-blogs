/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "spark.connect";

/**
 * This message describes the logical [[DataType]] of something. It does not carry the value
 * itself but only describes it.
 */
export interface DataType {
  null?: DataType_NULL | undefined;
  binary?: DataType_Binary | undefined;
  boolean?:
    | DataType_Boolean
    | undefined;
  /** Numeric types */
  byte?: DataType_Byte | undefined;
  short?: DataType_Short | undefined;
  integer?: DataType_Integer | undefined;
  long?: DataType_Long | undefined;
  float?: DataType_Float | undefined;
  double?: DataType_Double | undefined;
  decimal?:
    | DataType_Decimal
    | undefined;
  /** String types */
  string?: DataType_String | undefined;
  char?: DataType_Char | undefined;
  varChar?:
    | DataType_VarChar
    | undefined;
  /** Datatime types */
  date?: DataType_DateMessage | undefined;
  timestamp?: DataType_Timestamp | undefined;
  timestampNtz?:
    | DataType_TimestampNTZ
    | undefined;
  /** Interval types */
  calendarInterval?: DataType_CalendarInterval | undefined;
  yearMonthInterval?: DataType_YearMonthInterval | undefined;
  dayTimeInterval?:
    | DataType_DayTimeInterval
    | undefined;
  /** Complex types */
  array?: DataType_Array | undefined;
  struct?: DataType_Struct | undefined;
  map?:
    | DataType_Map
    | undefined;
  /** UserDefinedType */
  udt?:
    | DataType_UDT
    | undefined;
  /** UnparsedDataType */
  unparsed?: DataType_Unparsed | undefined;
}

export interface DataType_Boolean {
  typeVariationReference: number;
}

export interface DataType_Byte {
  typeVariationReference: number;
}

export interface DataType_Short {
  typeVariationReference: number;
}

export interface DataType_Integer {
  typeVariationReference: number;
}

export interface DataType_Long {
  typeVariationReference: number;
}

export interface DataType_Float {
  typeVariationReference: number;
}

export interface DataType_Double {
  typeVariationReference: number;
}

export interface DataType_String {
  typeVariationReference: number;
}

export interface DataType_Binary {
  typeVariationReference: number;
}

export interface DataType_NULL {
  typeVariationReference: number;
}

export interface DataType_Timestamp {
  typeVariationReference: number;
}

export interface DataType_DateMessage {
  typeVariationReference: number;
}

export interface DataType_TimestampNTZ {
  typeVariationReference: number;
}

export interface DataType_CalendarInterval {
  typeVariationReference: number;
}

export interface DataType_YearMonthInterval {
  startField?: number | undefined;
  endField?: number | undefined;
  typeVariationReference: number;
}

export interface DataType_DayTimeInterval {
  startField?: number | undefined;
  endField?: number | undefined;
  typeVariationReference: number;
}

/** Start compound types. */
export interface DataType_Char {
  length: number;
  typeVariationReference: number;
}

export interface DataType_VarChar {
  length: number;
  typeVariationReference: number;
}

export interface DataType_Decimal {
  scale?: number | undefined;
  precision?: number | undefined;
  typeVariationReference: number;
}

export interface DataType_StructField {
  name: string;
  dataType: DataType | undefined;
  nullable: boolean;
  metadata?: string | undefined;
}

export interface DataType_Struct {
  fields: DataType_StructField[];
  typeVariationReference: number;
}

export interface DataType_Array {
  elementType: DataType | undefined;
  containsNull: boolean;
  typeVariationReference: number;
}

export interface DataType_Map {
  keyType: DataType | undefined;
  valueType: DataType | undefined;
  valueContainsNull: boolean;
  typeVariationReference: number;
}

export interface DataType_UDT {
  type: string;
  jvmClass?: string | undefined;
  pythonClass?: string | undefined;
  serializedPythonClass?: string | undefined;
  sqlType: DataType | undefined;
}

export interface DataType_Unparsed {
  /** (Required) The unparsed data type string */
  dataTypeString: string;
}

function createBaseDataType(): DataType {
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

export const DataType = {
  encode(message: DataType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.null !== undefined) {
      DataType_NULL.encode(message.null, writer.uint32(10).fork()).ldelim();
    }
    if (message.binary !== undefined) {
      DataType_Binary.encode(message.binary, writer.uint32(18).fork()).ldelim();
    }
    if (message.boolean !== undefined) {
      DataType_Boolean.encode(message.boolean, writer.uint32(26).fork()).ldelim();
    }
    if (message.byte !== undefined) {
      DataType_Byte.encode(message.byte, writer.uint32(34).fork()).ldelim();
    }
    if (message.short !== undefined) {
      DataType_Short.encode(message.short, writer.uint32(42).fork()).ldelim();
    }
    if (message.integer !== undefined) {
      DataType_Integer.encode(message.integer, writer.uint32(50).fork()).ldelim();
    }
    if (message.long !== undefined) {
      DataType_Long.encode(message.long, writer.uint32(58).fork()).ldelim();
    }
    if (message.float !== undefined) {
      DataType_Float.encode(message.float, writer.uint32(66).fork()).ldelim();
    }
    if (message.double !== undefined) {
      DataType_Double.encode(message.double, writer.uint32(74).fork()).ldelim();
    }
    if (message.decimal !== undefined) {
      DataType_Decimal.encode(message.decimal, writer.uint32(82).fork()).ldelim();
    }
    if (message.string !== undefined) {
      DataType_String.encode(message.string, writer.uint32(90).fork()).ldelim();
    }
    if (message.char !== undefined) {
      DataType_Char.encode(message.char, writer.uint32(98).fork()).ldelim();
    }
    if (message.varChar !== undefined) {
      DataType_VarChar.encode(message.varChar, writer.uint32(106).fork()).ldelim();
    }
    if (message.date !== undefined) {
      DataType_DateMessage.encode(message.date, writer.uint32(114).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      DataType_Timestamp.encode(message.timestamp, writer.uint32(122).fork()).ldelim();
    }
    if (message.timestampNtz !== undefined) {
      DataType_TimestampNTZ.encode(message.timestampNtz, writer.uint32(130).fork()).ldelim();
    }
    if (message.calendarInterval !== undefined) {
      DataType_CalendarInterval.encode(message.calendarInterval, writer.uint32(138).fork()).ldelim();
    }
    if (message.yearMonthInterval !== undefined) {
      DataType_YearMonthInterval.encode(message.yearMonthInterval, writer.uint32(146).fork()).ldelim();
    }
    if (message.dayTimeInterval !== undefined) {
      DataType_DayTimeInterval.encode(message.dayTimeInterval, writer.uint32(154).fork()).ldelim();
    }
    if (message.array !== undefined) {
      DataType_Array.encode(message.array, writer.uint32(162).fork()).ldelim();
    }
    if (message.struct !== undefined) {
      DataType_Struct.encode(message.struct, writer.uint32(170).fork()).ldelim();
    }
    if (message.map !== undefined) {
      DataType_Map.encode(message.map, writer.uint32(178).fork()).ldelim();
    }
    if (message.udt !== undefined) {
      DataType_UDT.encode(message.udt, writer.uint32(186).fork()).ldelim();
    }
    if (message.unparsed !== undefined) {
      DataType_Unparsed.encode(message.unparsed, writer.uint32(194).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.null = DataType_NULL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.binary = DataType_Binary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.boolean = DataType_Boolean.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.byte = DataType_Byte.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.short = DataType_Short.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.integer = DataType_Integer.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.long = DataType_Long.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.float = DataType_Float.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.double = DataType_Double.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.decimal = DataType_Decimal.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.string = DataType_String.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.char = DataType_Char.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.varChar = DataType_VarChar.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.date = DataType_DateMessage.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.timestamp = DataType_Timestamp.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.timestampNtz = DataType_TimestampNTZ.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.calendarInterval = DataType_CalendarInterval.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.yearMonthInterval = DataType_YearMonthInterval.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.dayTimeInterval = DataType_DayTimeInterval.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.array = DataType_Array.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.struct = DataType_Struct.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.map = DataType_Map.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.udt = DataType_UDT.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.unparsed = DataType_Unparsed.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataType {
    return {
      null: isSet(object.null) ? DataType_NULL.fromJSON(object.null) : undefined,
      binary: isSet(object.binary) ? DataType_Binary.fromJSON(object.binary) : undefined,
      boolean: isSet(object.boolean) ? DataType_Boolean.fromJSON(object.boolean) : undefined,
      byte: isSet(object.byte) ? DataType_Byte.fromJSON(object.byte) : undefined,
      short: isSet(object.short) ? DataType_Short.fromJSON(object.short) : undefined,
      integer: isSet(object.integer) ? DataType_Integer.fromJSON(object.integer) : undefined,
      long: isSet(object.long) ? DataType_Long.fromJSON(object.long) : undefined,
      float: isSet(object.float) ? DataType_Float.fromJSON(object.float) : undefined,
      double: isSet(object.double) ? DataType_Double.fromJSON(object.double) : undefined,
      decimal: isSet(object.decimal) ? DataType_Decimal.fromJSON(object.decimal) : undefined,
      string: isSet(object.string) ? DataType_String.fromJSON(object.string) : undefined,
      char: isSet(object.char) ? DataType_Char.fromJSON(object.char) : undefined,
      varChar: isSet(object.varChar) ? DataType_VarChar.fromJSON(object.varChar) : undefined,
      date: isSet(object.date) ? DataType_DateMessage.fromJSON(object.date) : undefined,
      timestamp: isSet(object.timestamp) ? DataType_Timestamp.fromJSON(object.timestamp) : undefined,
      timestampNtz: isSet(object.timestampNtz) ? DataType_TimestampNTZ.fromJSON(object.timestampNtz) : undefined,
      calendarInterval: isSet(object.calendarInterval)
        ? DataType_CalendarInterval.fromJSON(object.calendarInterval)
        : undefined,
      yearMonthInterval: isSet(object.yearMonthInterval)
        ? DataType_YearMonthInterval.fromJSON(object.yearMonthInterval)
        : undefined,
      dayTimeInterval: isSet(object.dayTimeInterval)
        ? DataType_DayTimeInterval.fromJSON(object.dayTimeInterval)
        : undefined,
      array: isSet(object.array) ? DataType_Array.fromJSON(object.array) : undefined,
      struct: isSet(object.struct) ? DataType_Struct.fromJSON(object.struct) : undefined,
      map: isSet(object.map) ? DataType_Map.fromJSON(object.map) : undefined,
      udt: isSet(object.udt) ? DataType_UDT.fromJSON(object.udt) : undefined,
      unparsed: isSet(object.unparsed) ? DataType_Unparsed.fromJSON(object.unparsed) : undefined,
    };
  },

  toJSON(message: DataType): unknown {
    const obj: any = {};
    if (message.null !== undefined) {
      obj.null = DataType_NULL.toJSON(message.null);
    }
    if (message.binary !== undefined) {
      obj.binary = DataType_Binary.toJSON(message.binary);
    }
    if (message.boolean !== undefined) {
      obj.boolean = DataType_Boolean.toJSON(message.boolean);
    }
    if (message.byte !== undefined) {
      obj.byte = DataType_Byte.toJSON(message.byte);
    }
    if (message.short !== undefined) {
      obj.short = DataType_Short.toJSON(message.short);
    }
    if (message.integer !== undefined) {
      obj.integer = DataType_Integer.toJSON(message.integer);
    }
    if (message.long !== undefined) {
      obj.long = DataType_Long.toJSON(message.long);
    }
    if (message.float !== undefined) {
      obj.float = DataType_Float.toJSON(message.float);
    }
    if (message.double !== undefined) {
      obj.double = DataType_Double.toJSON(message.double);
    }
    if (message.decimal !== undefined) {
      obj.decimal = DataType_Decimal.toJSON(message.decimal);
    }
    if (message.string !== undefined) {
      obj.string = DataType_String.toJSON(message.string);
    }
    if (message.char !== undefined) {
      obj.char = DataType_Char.toJSON(message.char);
    }
    if (message.varChar !== undefined) {
      obj.varChar = DataType_VarChar.toJSON(message.varChar);
    }
    if (message.date !== undefined) {
      obj.date = DataType_DateMessage.toJSON(message.date);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = DataType_Timestamp.toJSON(message.timestamp);
    }
    if (message.timestampNtz !== undefined) {
      obj.timestampNtz = DataType_TimestampNTZ.toJSON(message.timestampNtz);
    }
    if (message.calendarInterval !== undefined) {
      obj.calendarInterval = DataType_CalendarInterval.toJSON(message.calendarInterval);
    }
    if (message.yearMonthInterval !== undefined) {
      obj.yearMonthInterval = DataType_YearMonthInterval.toJSON(message.yearMonthInterval);
    }
    if (message.dayTimeInterval !== undefined) {
      obj.dayTimeInterval = DataType_DayTimeInterval.toJSON(message.dayTimeInterval);
    }
    if (message.array !== undefined) {
      obj.array = DataType_Array.toJSON(message.array);
    }
    if (message.struct !== undefined) {
      obj.struct = DataType_Struct.toJSON(message.struct);
    }
    if (message.map !== undefined) {
      obj.map = DataType_Map.toJSON(message.map);
    }
    if (message.udt !== undefined) {
      obj.udt = DataType_UDT.toJSON(message.udt);
    }
    if (message.unparsed !== undefined) {
      obj.unparsed = DataType_Unparsed.toJSON(message.unparsed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType>, I>>(base?: I): DataType {
    return DataType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType>, I>>(object: I): DataType {
    const message = createBaseDataType();
    message.null = (object.null !== undefined && object.null !== null)
      ? DataType_NULL.fromPartial(object.null)
      : undefined;
    message.binary = (object.binary !== undefined && object.binary !== null)
      ? DataType_Binary.fromPartial(object.binary)
      : undefined;
    message.boolean = (object.boolean !== undefined && object.boolean !== null)
      ? DataType_Boolean.fromPartial(object.boolean)
      : undefined;
    message.byte = (object.byte !== undefined && object.byte !== null)
      ? DataType_Byte.fromPartial(object.byte)
      : undefined;
    message.short = (object.short !== undefined && object.short !== null)
      ? DataType_Short.fromPartial(object.short)
      : undefined;
    message.integer = (object.integer !== undefined && object.integer !== null)
      ? DataType_Integer.fromPartial(object.integer)
      : undefined;
    message.long = (object.long !== undefined && object.long !== null)
      ? DataType_Long.fromPartial(object.long)
      : undefined;
    message.float = (object.float !== undefined && object.float !== null)
      ? DataType_Float.fromPartial(object.float)
      : undefined;
    message.double = (object.double !== undefined && object.double !== null)
      ? DataType_Double.fromPartial(object.double)
      : undefined;
    message.decimal = (object.decimal !== undefined && object.decimal !== null)
      ? DataType_Decimal.fromPartial(object.decimal)
      : undefined;
    message.string = (object.string !== undefined && object.string !== null)
      ? DataType_String.fromPartial(object.string)
      : undefined;
    message.char = (object.char !== undefined && object.char !== null)
      ? DataType_Char.fromPartial(object.char)
      : undefined;
    message.varChar = (object.varChar !== undefined && object.varChar !== null)
      ? DataType_VarChar.fromPartial(object.varChar)
      : undefined;
    message.date = (object.date !== undefined && object.date !== null)
      ? DataType_DateMessage.fromPartial(object.date)
      : undefined;
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? DataType_Timestamp.fromPartial(object.timestamp)
      : undefined;
    message.timestampNtz = (object.timestampNtz !== undefined && object.timestampNtz !== null)
      ? DataType_TimestampNTZ.fromPartial(object.timestampNtz)
      : undefined;
    message.calendarInterval = (object.calendarInterval !== undefined && object.calendarInterval !== null)
      ? DataType_CalendarInterval.fromPartial(object.calendarInterval)
      : undefined;
    message.yearMonthInterval = (object.yearMonthInterval !== undefined && object.yearMonthInterval !== null)
      ? DataType_YearMonthInterval.fromPartial(object.yearMonthInterval)
      : undefined;
    message.dayTimeInterval = (object.dayTimeInterval !== undefined && object.dayTimeInterval !== null)
      ? DataType_DayTimeInterval.fromPartial(object.dayTimeInterval)
      : undefined;
    message.array = (object.array !== undefined && object.array !== null)
      ? DataType_Array.fromPartial(object.array)
      : undefined;
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? DataType_Struct.fromPartial(object.struct)
      : undefined;
    message.map = (object.map !== undefined && object.map !== null) ? DataType_Map.fromPartial(object.map) : undefined;
    message.udt = (object.udt !== undefined && object.udt !== null) ? DataType_UDT.fromPartial(object.udt) : undefined;
    message.unparsed = (object.unparsed !== undefined && object.unparsed !== null)
      ? DataType_Unparsed.fromPartial(object.unparsed)
      : undefined;
    return message;
  },
};

function createBaseDataType_Boolean(): DataType_Boolean {
  return { typeVariationReference: 0 };
}

export const DataType_Boolean = {
  encode(message: DataType_Boolean, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Boolean {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Boolean();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Boolean {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Boolean): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Boolean>, I>>(base?: I): DataType_Boolean {
    return DataType_Boolean.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Boolean>, I>>(object: I): DataType_Boolean {
    const message = createBaseDataType_Boolean();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Byte(): DataType_Byte {
  return { typeVariationReference: 0 };
}

export const DataType_Byte = {
  encode(message: DataType_Byte, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Byte {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Byte();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Byte {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Byte): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Byte>, I>>(base?: I): DataType_Byte {
    return DataType_Byte.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Byte>, I>>(object: I): DataType_Byte {
    const message = createBaseDataType_Byte();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Short(): DataType_Short {
  return { typeVariationReference: 0 };
}

export const DataType_Short = {
  encode(message: DataType_Short, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Short {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Short();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Short {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Short): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Short>, I>>(base?: I): DataType_Short {
    return DataType_Short.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Short>, I>>(object: I): DataType_Short {
    const message = createBaseDataType_Short();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Integer(): DataType_Integer {
  return { typeVariationReference: 0 };
}

export const DataType_Integer = {
  encode(message: DataType_Integer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Integer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Integer();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Integer {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Integer): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Integer>, I>>(base?: I): DataType_Integer {
    return DataType_Integer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Integer>, I>>(object: I): DataType_Integer {
    const message = createBaseDataType_Integer();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Long(): DataType_Long {
  return { typeVariationReference: 0 };
}

export const DataType_Long = {
  encode(message: DataType_Long, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Long {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Long();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Long {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Long): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Long>, I>>(base?: I): DataType_Long {
    return DataType_Long.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Long>, I>>(object: I): DataType_Long {
    const message = createBaseDataType_Long();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Float(): DataType_Float {
  return { typeVariationReference: 0 };
}

export const DataType_Float = {
  encode(message: DataType_Float, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Float {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Float();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Float {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Float): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Float>, I>>(base?: I): DataType_Float {
    return DataType_Float.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Float>, I>>(object: I): DataType_Float {
    const message = createBaseDataType_Float();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Double(): DataType_Double {
  return { typeVariationReference: 0 };
}

export const DataType_Double = {
  encode(message: DataType_Double, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Double {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Double();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Double {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Double): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Double>, I>>(base?: I): DataType_Double {
    return DataType_Double.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Double>, I>>(object: I): DataType_Double {
    const message = createBaseDataType_Double();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_String(): DataType_String {
  return { typeVariationReference: 0 };
}

export const DataType_String = {
  encode(message: DataType_String, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_String {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_String();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_String {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_String): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_String>, I>>(base?: I): DataType_String {
    return DataType_String.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_String>, I>>(object: I): DataType_String {
    const message = createBaseDataType_String();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Binary(): DataType_Binary {
  return { typeVariationReference: 0 };
}

export const DataType_Binary = {
  encode(message: DataType_Binary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Binary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Binary();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Binary {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Binary): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Binary>, I>>(base?: I): DataType_Binary {
    return DataType_Binary.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Binary>, I>>(object: I): DataType_Binary {
    const message = createBaseDataType_Binary();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_NULL(): DataType_NULL {
  return { typeVariationReference: 0 };
}

export const DataType_NULL = {
  encode(message: DataType_NULL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_NULL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_NULL();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_NULL {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_NULL): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_NULL>, I>>(base?: I): DataType_NULL {
    return DataType_NULL.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_NULL>, I>>(object: I): DataType_NULL {
    const message = createBaseDataType_NULL();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Timestamp(): DataType_Timestamp {
  return { typeVariationReference: 0 };
}

export const DataType_Timestamp = {
  encode(message: DataType_Timestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Timestamp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Timestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Timestamp {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Timestamp): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Timestamp>, I>>(base?: I): DataType_Timestamp {
    return DataType_Timestamp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Timestamp>, I>>(object: I): DataType_Timestamp {
    const message = createBaseDataType_Timestamp();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_DateMessage(): DataType_DateMessage {
  return { typeVariationReference: 0 };
}

export const DataType_DateMessage = {
  encode(message: DataType_DateMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_DateMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_DateMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_DateMessage {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_DateMessage): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_DateMessage>, I>>(base?: I): DataType_DateMessage {
    return DataType_DateMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_DateMessage>, I>>(object: I): DataType_DateMessage {
    const message = createBaseDataType_DateMessage();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_TimestampNTZ(): DataType_TimestampNTZ {
  return { typeVariationReference: 0 };
}

export const DataType_TimestampNTZ = {
  encode(message: DataType_TimestampNTZ, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_TimestampNTZ {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_TimestampNTZ();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_TimestampNTZ {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_TimestampNTZ): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_TimestampNTZ>, I>>(base?: I): DataType_TimestampNTZ {
    return DataType_TimestampNTZ.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_TimestampNTZ>, I>>(object: I): DataType_TimestampNTZ {
    const message = createBaseDataType_TimestampNTZ();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_CalendarInterval(): DataType_CalendarInterval {
  return { typeVariationReference: 0 };
}

export const DataType_CalendarInterval = {
  encode(message: DataType_CalendarInterval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeVariationReference !== 0) {
      writer.uint32(8).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_CalendarInterval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_CalendarInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_CalendarInterval {
    return {
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_CalendarInterval): unknown {
    const obj: any = {};
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_CalendarInterval>, I>>(base?: I): DataType_CalendarInterval {
    return DataType_CalendarInterval.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_CalendarInterval>, I>>(object: I): DataType_CalendarInterval {
    const message = createBaseDataType_CalendarInterval();
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_YearMonthInterval(): DataType_YearMonthInterval {
  return { startField: undefined, endField: undefined, typeVariationReference: 0 };
}

export const DataType_YearMonthInterval = {
  encode(message: DataType_YearMonthInterval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_YearMonthInterval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_YearMonthInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_YearMonthInterval {
    return {
      startField: isSet(object.startField) ? globalThis.Number(object.startField) : undefined,
      endField: isSet(object.endField) ? globalThis.Number(object.endField) : undefined,
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_YearMonthInterval): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<DataType_YearMonthInterval>, I>>(base?: I): DataType_YearMonthInterval {
    return DataType_YearMonthInterval.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_YearMonthInterval>, I>>(object: I): DataType_YearMonthInterval {
    const message = createBaseDataType_YearMonthInterval();
    message.startField = object.startField ?? undefined;
    message.endField = object.endField ?? undefined;
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_DayTimeInterval(): DataType_DayTimeInterval {
  return { startField: undefined, endField: undefined, typeVariationReference: 0 };
}

export const DataType_DayTimeInterval = {
  encode(message: DataType_DayTimeInterval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_DayTimeInterval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_DayTimeInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_DayTimeInterval {
    return {
      startField: isSet(object.startField) ? globalThis.Number(object.startField) : undefined,
      endField: isSet(object.endField) ? globalThis.Number(object.endField) : undefined,
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_DayTimeInterval): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<DataType_DayTimeInterval>, I>>(base?: I): DataType_DayTimeInterval {
    return DataType_DayTimeInterval.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_DayTimeInterval>, I>>(object: I): DataType_DayTimeInterval {
    const message = createBaseDataType_DayTimeInterval();
    message.startField = object.startField ?? undefined;
    message.endField = object.endField ?? undefined;
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Char(): DataType_Char {
  return { length: 0, typeVariationReference: 0 };
}

export const DataType_Char = {
  encode(message: DataType_Char, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.length !== 0) {
      writer.uint32(8).int32(message.length);
    }
    if (message.typeVariationReference !== 0) {
      writer.uint32(16).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Char {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Char();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Char {
    return {
      length: isSet(object.length) ? globalThis.Number(object.length) : 0,
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Char): unknown {
    const obj: any = {};
    if (message.length !== 0) {
      obj.length = Math.round(message.length);
    }
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Char>, I>>(base?: I): DataType_Char {
    return DataType_Char.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Char>, I>>(object: I): DataType_Char {
    const message = createBaseDataType_Char();
    message.length = object.length ?? 0;
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_VarChar(): DataType_VarChar {
  return { length: 0, typeVariationReference: 0 };
}

export const DataType_VarChar = {
  encode(message: DataType_VarChar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.length !== 0) {
      writer.uint32(8).int32(message.length);
    }
    if (message.typeVariationReference !== 0) {
      writer.uint32(16).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_VarChar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_VarChar();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_VarChar {
    return {
      length: isSet(object.length) ? globalThis.Number(object.length) : 0,
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_VarChar): unknown {
    const obj: any = {};
    if (message.length !== 0) {
      obj.length = Math.round(message.length);
    }
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_VarChar>, I>>(base?: I): DataType_VarChar {
    return DataType_VarChar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_VarChar>, I>>(object: I): DataType_VarChar {
    const message = createBaseDataType_VarChar();
    message.length = object.length ?? 0;
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Decimal(): DataType_Decimal {
  return { scale: undefined, precision: undefined, typeVariationReference: 0 };
}

export const DataType_Decimal = {
  encode(message: DataType_Decimal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Decimal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Decimal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Decimal {
    return {
      scale: isSet(object.scale) ? globalThis.Number(object.scale) : undefined,
      precision: isSet(object.precision) ? globalThis.Number(object.precision) : undefined,
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Decimal): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<DataType_Decimal>, I>>(base?: I): DataType_Decimal {
    return DataType_Decimal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Decimal>, I>>(object: I): DataType_Decimal {
    const message = createBaseDataType_Decimal();
    message.scale = object.scale ?? undefined;
    message.precision = object.precision ?? undefined;
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_StructField(): DataType_StructField {
  return { name: "", dataType: undefined, nullable: false, metadata: undefined };
}

export const DataType_StructField = {
  encode(message: DataType_StructField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dataType !== undefined) {
      DataType.encode(message.dataType, writer.uint32(18).fork()).ldelim();
    }
    if (message.nullable === true) {
      writer.uint32(24).bool(message.nullable);
    }
    if (message.metadata !== undefined) {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_StructField {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_StructField();
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

          message.dataType = DataType.decode(reader, reader.uint32());
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

  fromJSON(object: any): DataType_StructField {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
      nullable: isSet(object.nullable) ? globalThis.Boolean(object.nullable) : false,
      metadata: isSet(object.metadata) ? globalThis.String(object.metadata) : undefined,
    };
  },

  toJSON(message: DataType_StructField): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.dataType !== undefined) {
      obj.dataType = DataType.toJSON(message.dataType);
    }
    if (message.nullable === true) {
      obj.nullable = message.nullable;
    }
    if (message.metadata !== undefined) {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_StructField>, I>>(base?: I): DataType_StructField {
    return DataType_StructField.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_StructField>, I>>(object: I): DataType_StructField {
    const message = createBaseDataType_StructField();
    message.name = object.name ?? "";
    message.dataType = (object.dataType !== undefined && object.dataType !== null)
      ? DataType.fromPartial(object.dataType)
      : undefined;
    message.nullable = object.nullable ?? false;
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseDataType_Struct(): DataType_Struct {
  return { fields: [], typeVariationReference: 0 };
}

export const DataType_Struct = {
  encode(message: DataType_Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      DataType_StructField.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.typeVariationReference !== 0) {
      writer.uint32(16).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Struct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Struct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fields.push(DataType_StructField.decode(reader, reader.uint32()));
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

  fromJSON(object: any): DataType_Struct {
    return {
      fields: globalThis.Array.isArray(object?.fields)
        ? object.fields.map((e: any) => DataType_StructField.fromJSON(e))
        : [],
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Struct): unknown {
    const obj: any = {};
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => DataType_StructField.toJSON(e));
    }
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Struct>, I>>(base?: I): DataType_Struct {
    return DataType_Struct.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Struct>, I>>(object: I): DataType_Struct {
    const message = createBaseDataType_Struct();
    message.fields = object.fields?.map((e) => DataType_StructField.fromPartial(e)) || [];
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Array(): DataType_Array {
  return { elementType: undefined, containsNull: false, typeVariationReference: 0 };
}

export const DataType_Array = {
  encode(message: DataType_Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementType !== undefined) {
      DataType.encode(message.elementType, writer.uint32(10).fork()).ldelim();
    }
    if (message.containsNull === true) {
      writer.uint32(16).bool(message.containsNull);
    }
    if (message.typeVariationReference !== 0) {
      writer.uint32(24).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.elementType = DataType.decode(reader, reader.uint32());
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

  fromJSON(object: any): DataType_Array {
    return {
      elementType: isSet(object.elementType) ? DataType.fromJSON(object.elementType) : undefined,
      containsNull: isSet(object.containsNull) ? globalThis.Boolean(object.containsNull) : false,
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Array): unknown {
    const obj: any = {};
    if (message.elementType !== undefined) {
      obj.elementType = DataType.toJSON(message.elementType);
    }
    if (message.containsNull === true) {
      obj.containsNull = message.containsNull;
    }
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Array>, I>>(base?: I): DataType_Array {
    return DataType_Array.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Array>, I>>(object: I): DataType_Array {
    const message = createBaseDataType_Array();
    message.elementType = (object.elementType !== undefined && object.elementType !== null)
      ? DataType.fromPartial(object.elementType)
      : undefined;
    message.containsNull = object.containsNull ?? false;
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_Map(): DataType_Map {
  return { keyType: undefined, valueType: undefined, valueContainsNull: false, typeVariationReference: 0 };
}

export const DataType_Map = {
  encode(message: DataType_Map, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyType !== undefined) {
      DataType.encode(message.keyType, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueType !== undefined) {
      DataType.encode(message.valueType, writer.uint32(18).fork()).ldelim();
    }
    if (message.valueContainsNull === true) {
      writer.uint32(24).bool(message.valueContainsNull);
    }
    if (message.typeVariationReference !== 0) {
      writer.uint32(32).uint32(message.typeVariationReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Map {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Map();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyType = DataType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.valueType = DataType.decode(reader, reader.uint32());
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

  fromJSON(object: any): DataType_Map {
    return {
      keyType: isSet(object.keyType) ? DataType.fromJSON(object.keyType) : undefined,
      valueType: isSet(object.valueType) ? DataType.fromJSON(object.valueType) : undefined,
      valueContainsNull: isSet(object.valueContainsNull) ? globalThis.Boolean(object.valueContainsNull) : false,
      typeVariationReference: isSet(object.typeVariationReference)
        ? globalThis.Number(object.typeVariationReference)
        : 0,
    };
  },

  toJSON(message: DataType_Map): unknown {
    const obj: any = {};
    if (message.keyType !== undefined) {
      obj.keyType = DataType.toJSON(message.keyType);
    }
    if (message.valueType !== undefined) {
      obj.valueType = DataType.toJSON(message.valueType);
    }
    if (message.valueContainsNull === true) {
      obj.valueContainsNull = message.valueContainsNull;
    }
    if (message.typeVariationReference !== 0) {
      obj.typeVariationReference = Math.round(message.typeVariationReference);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Map>, I>>(base?: I): DataType_Map {
    return DataType_Map.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Map>, I>>(object: I): DataType_Map {
    const message = createBaseDataType_Map();
    message.keyType = (object.keyType !== undefined && object.keyType !== null)
      ? DataType.fromPartial(object.keyType)
      : undefined;
    message.valueType = (object.valueType !== undefined && object.valueType !== null)
      ? DataType.fromPartial(object.valueType)
      : undefined;
    message.valueContainsNull = object.valueContainsNull ?? false;
    message.typeVariationReference = object.typeVariationReference ?? 0;
    return message;
  },
};

function createBaseDataType_UDT(): DataType_UDT {
  return {
    type: "",
    jvmClass: undefined,
    pythonClass: undefined,
    serializedPythonClass: undefined,
    sqlType: undefined,
  };
}

export const DataType_UDT = {
  encode(message: DataType_UDT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DataType.encode(message.sqlType, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_UDT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_UDT();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

          message.sqlType = DataType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataType_UDT {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      jvmClass: isSet(object.jvmClass) ? globalThis.String(object.jvmClass) : undefined,
      pythonClass: isSet(object.pythonClass) ? globalThis.String(object.pythonClass) : undefined,
      serializedPythonClass: isSet(object.serializedPythonClass)
        ? globalThis.String(object.serializedPythonClass)
        : undefined,
      sqlType: isSet(object.sqlType) ? DataType.fromJSON(object.sqlType) : undefined,
    };
  },

  toJSON(message: DataType_UDT): unknown {
    const obj: any = {};
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
      obj.sqlType = DataType.toJSON(message.sqlType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_UDT>, I>>(base?: I): DataType_UDT {
    return DataType_UDT.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_UDT>, I>>(object: I): DataType_UDT {
    const message = createBaseDataType_UDT();
    message.type = object.type ?? "";
    message.jvmClass = object.jvmClass ?? undefined;
    message.pythonClass = object.pythonClass ?? undefined;
    message.serializedPythonClass = object.serializedPythonClass ?? undefined;
    message.sqlType = (object.sqlType !== undefined && object.sqlType !== null)
      ? DataType.fromPartial(object.sqlType)
      : undefined;
    return message;
  },
};

function createBaseDataType_Unparsed(): DataType_Unparsed {
  return { dataTypeString: "" };
}

export const DataType_Unparsed = {
  encode(message: DataType_Unparsed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataTypeString !== "") {
      writer.uint32(10).string(message.dataTypeString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType_Unparsed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType_Unparsed();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DataType_Unparsed {
    return { dataTypeString: isSet(object.dataTypeString) ? globalThis.String(object.dataTypeString) : "" };
  },

  toJSON(message: DataType_Unparsed): unknown {
    const obj: any = {};
    if (message.dataTypeString !== "") {
      obj.dataTypeString = message.dataTypeString;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataType_Unparsed>, I>>(base?: I): DataType_Unparsed {
    return DataType_Unparsed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataType_Unparsed>, I>>(object: I): DataType_Unparsed {
    const message = createBaseDataType_Unparsed();
    message.dataTypeString = object.dataTypeString ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
