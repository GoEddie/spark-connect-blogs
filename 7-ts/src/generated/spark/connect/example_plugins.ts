/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Expression } from "./expressions";
import { Relation } from "./relations";

export const protobufPackage = "spark.connect";

export interface ExamplePluginRelation {
  input: Relation | undefined;
  customField: string;
}

export interface ExamplePluginExpression {
  child: Expression | undefined;
  customField: string;
}

export interface ExamplePluginCommand {
  customField: string;
}

function createBaseExamplePluginRelation(): ExamplePluginRelation {
  return { input: undefined, customField: "" };
}

export const ExamplePluginRelation = {
  encode(message: ExamplePluginRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Relation.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.customField !== "") {
      writer.uint32(18).string(message.customField);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamplePluginRelation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamplePluginRelation();
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

          message.customField = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExamplePluginRelation {
    return {
      input: isSet(object.input) ? Relation.fromJSON(object.input) : undefined,
      customField: isSet(object.customField) ? globalThis.String(object.customField) : "",
    };
  },

  toJSON(message: ExamplePluginRelation): unknown {
    const obj: any = {};
    if (message.input !== undefined) {
      obj.input = Relation.toJSON(message.input);
    }
    if (message.customField !== "") {
      obj.customField = message.customField;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamplePluginRelation>, I>>(base?: I): ExamplePluginRelation {
    return ExamplePluginRelation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExamplePluginRelation>, I>>(object: I): ExamplePluginRelation {
    const message = createBaseExamplePluginRelation();
    message.input = (object.input !== undefined && object.input !== null)
      ? Relation.fromPartial(object.input)
      : undefined;
    message.customField = object.customField ?? "";
    return message;
  },
};

function createBaseExamplePluginExpression(): ExamplePluginExpression {
  return { child: undefined, customField: "" };
}

export const ExamplePluginExpression = {
  encode(message: ExamplePluginExpression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.child !== undefined) {
      Expression.encode(message.child, writer.uint32(10).fork()).ldelim();
    }
    if (message.customField !== "") {
      writer.uint32(18).string(message.customField);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamplePluginExpression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamplePluginExpression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.child = Expression.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customField = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExamplePluginExpression {
    return {
      child: isSet(object.child) ? Expression.fromJSON(object.child) : undefined,
      customField: isSet(object.customField) ? globalThis.String(object.customField) : "",
    };
  },

  toJSON(message: ExamplePluginExpression): unknown {
    const obj: any = {};
    if (message.child !== undefined) {
      obj.child = Expression.toJSON(message.child);
    }
    if (message.customField !== "") {
      obj.customField = message.customField;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamplePluginExpression>, I>>(base?: I): ExamplePluginExpression {
    return ExamplePluginExpression.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExamplePluginExpression>, I>>(object: I): ExamplePluginExpression {
    const message = createBaseExamplePluginExpression();
    message.child = (object.child !== undefined && object.child !== null)
      ? Expression.fromPartial(object.child)
      : undefined;
    message.customField = object.customField ?? "";
    return message;
  },
};

function createBaseExamplePluginCommand(): ExamplePluginCommand {
  return { customField: "" };
}

export const ExamplePluginCommand = {
  encode(message: ExamplePluginCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customField !== "") {
      writer.uint32(10).string(message.customField);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamplePluginCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamplePluginCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customField = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExamplePluginCommand {
    return { customField: isSet(object.customField) ? globalThis.String(object.customField) : "" };
  },

  toJSON(message: ExamplePluginCommand): unknown {
    const obj: any = {};
    if (message.customField !== "") {
      obj.customField = message.customField;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExamplePluginCommand>, I>>(base?: I): ExamplePluginCommand {
    return ExamplePluginCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExamplePluginCommand>, I>>(object: I): ExamplePluginCommand {
    const message = createBaseExamplePluginCommand();
    message.customField = object.customField ?? "";
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
