
import { ExecutePlanRequest } from "./generated/spark/connect/base";

let request: ExecutePlanRequest = {
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


interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  }

  type RpcImpl = (service: string, method: string, data: Uint8Array) => Promise<Uint8Array>;


const sendRequest: RpcImpl = (service, method, data) => {
    // Conventionally in gRPC, the request path looks like
    //   "package.names.ServiceName/MethodName",
    // we therefore construct such a string
    const path = `/${service}/${method}`;
  
    return new Promise((resolve, reject) => {
      // makeUnaryRequest transmits the result (and error) with a callback
      // transform this into a promise!
      const resultCallback: UnaryCallback<any> = (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      };
  
      function passThrough(argument: any) {
        return argument;
      }
  
      // Using passThrough as the serialize and deserialize functions
      conn.makeUnaryRequest(path, passThrough, passThrough, data, resultCallback);
    });
  };
  
  const rpc: Rpc = { request: sendRequest };