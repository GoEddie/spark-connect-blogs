"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceInformation = exports.StorageLevel = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "spark.connect";
function createBaseStorageLevel() {
    return { useDisk: false, useMemory: false, useOffHeap: false, deserialized: false, replication: 0 };
}
exports.StorageLevel = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStorageLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            useDisk: isSet(object.useDisk) ? globalThis.Boolean(object.useDisk) : false,
            useMemory: isSet(object.useMemory) ? globalThis.Boolean(object.useMemory) : false,
            useOffHeap: isSet(object.useOffHeap) ? globalThis.Boolean(object.useOffHeap) : false,
            deserialized: isSet(object.deserialized) ? globalThis.Boolean(object.deserialized) : false,
            replication: isSet(object.replication) ? globalThis.Number(object.replication) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return exports.StorageLevel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseStorageLevel();
        message.useDisk = (_a = object.useDisk) !== null && _a !== void 0 ? _a : false;
        message.useMemory = (_b = object.useMemory) !== null && _b !== void 0 ? _b : false;
        message.useOffHeap = (_c = object.useOffHeap) !== null && _c !== void 0 ? _c : false;
        message.deserialized = (_d = object.deserialized) !== null && _d !== void 0 ? _d : false;
        message.replication = (_e = object.replication) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseResourceInformation() {
    return { name: "", addresses: [] };
}
exports.ResourceInformation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.addresses; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResourceInformation();
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
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            addresses: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.addresses)
                ? object.addresses.map(function (e) { return globalThis.String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.addresses) === null || _a === void 0 ? void 0 : _a.length) {
            obj.addresses = message.addresses;
        }
        return obj;
    },
    create: function (base) {
        return exports.ResourceInformation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseResourceInformation();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.addresses = ((_b = object.addresses) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
