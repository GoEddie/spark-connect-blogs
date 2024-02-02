/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "spark.connect";

/** StorageLevel for persisting Datasets/Tables. */
export interface StorageLevel {
  /** (Required) Whether the cache should use disk or not. */
  useDisk: boolean;
  /** (Required) Whether the cache should use memory or not. */
  useMemory: boolean;
  /** (Required) Whether the cache should use off-heap or not. */
  useOffHeap: boolean;
  /** (Required) Whether the cached data is deserialized or not. */
  deserialized: boolean;
  /** (Required) The number of replicas. */
  replication: number;
}

/**
 * ResourceInformation to hold information about a type of Resource.
 * The corresponding class is 'org.apache.spark.resource.ResourceInformation'
 */
export interface ResourceInformation {
  /** (Required) The name of the resource */
  name: string;
  /** (Required) An array of strings describing the addresses of the resource. */
  addresses: string[];
}

function createBaseStorageLevel(): StorageLevel {
  return { useDisk: false, useMemory: false, useOffHeap: false, deserialized: false, replication: 0 };
}

export const StorageLevel = {
  encode(message: StorageLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useDisk === true) {
      writer.uint32(8).bool(message.useDisk);
    }
    if (message.useMemory === true) {
      writer.uint32(16).bool(message.useMemory);
    }
    if (message.useOffHeap === true) {
      writer.uint32(24).bool(message.useOffHeap);
    }
    if (message.deserialized === true) {
      writer.uint32(32).bool(message.deserialized);
    }
    if (message.replication !== 0) {
      writer.uint32(40).int32(message.replication);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageLevel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.useDisk = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.useMemory = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.useOffHeap = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.deserialized = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.replication = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageLevel {
    return {
      useDisk: isSet(object.useDisk) ? globalThis.Boolean(object.useDisk) : false,
      useMemory: isSet(object.useMemory) ? globalThis.Boolean(object.useMemory) : false,
      useOffHeap: isSet(object.useOffHeap) ? globalThis.Boolean(object.useOffHeap) : false,
      deserialized: isSet(object.deserialized) ? globalThis.Boolean(object.deserialized) : false,
      replication: isSet(object.replication) ? globalThis.Number(object.replication) : 0,
    };
  },

  toJSON(message: StorageLevel): unknown {
    const obj: any = {};
    if (message.useDisk === true) {
      obj.useDisk = message.useDisk;
    }
    if (message.useMemory === true) {
      obj.useMemory = message.useMemory;
    }
    if (message.useOffHeap === true) {
      obj.useOffHeap = message.useOffHeap;
    }
    if (message.deserialized === true) {
      obj.deserialized = message.deserialized;
    }
    if (message.replication !== 0) {
      obj.replication = Math.round(message.replication);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StorageLevel>, I>>(base?: I): StorageLevel {
    return StorageLevel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StorageLevel>, I>>(object: I): StorageLevel {
    const message = createBaseStorageLevel();
    message.useDisk = object.useDisk ?? false;
    message.useMemory = object.useMemory ?? false;
    message.useOffHeap = object.useOffHeap ?? false;
    message.deserialized = object.deserialized ?? false;
    message.replication = object.replication ?? 0;
    return message;
  },
};

function createBaseResourceInformation(): ResourceInformation {
  return { name: "", addresses: [] };
}

export const ResourceInformation = {
  encode(message: ResourceInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInformation();
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

          message.addresses.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceInformation {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      addresses: globalThis.Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ResourceInformation): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.addresses?.length) {
      obj.addresses = message.addresses;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceInformation>, I>>(base?: I): ResourceInformation {
    return ResourceInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceInformation>, I>>(object: I): ResourceInformation {
    const message = createBaseResourceInformation();
    message.name = object.name ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
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
