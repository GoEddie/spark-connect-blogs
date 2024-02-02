"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = {
    sessionId: "sessionId",
    userContext: {
        userId: "userId", userName: "ed", extensions: []
    },
    requestOptions: [],
    tags: [],
    plan: {
        root: {
            common: {
                sourceInfo: ""
            },
            range: {
                start: 0,
                end: 100,
                step: 1
            }
        }
    }
};
var sendRequest = function (service, method, data) {
    // Conventionally in gRPC, the request path looks like
    //   "package.names.ServiceName/MethodName",
    // we therefore construct such a string
    var path = "/".concat(service, "/").concat(method);
    return new Promise(function (resolve, reject) {
        // makeUnaryRequest transmits the result (and error) with a callback
        // transform this into a promise!
        var resultCallback = function (err, res) {
            if (err) {
                return reject(err);
            }
            resolve(res);
        };
        function passThrough(argument) {
            return argument;
        }
        // Using passThrough as the serialize and deserialize functions
        conn.makeUnaryRequest(path, passThrough, passThrough, data, resultCallback);
    });
};
var rpc = { request: sendRequest };
