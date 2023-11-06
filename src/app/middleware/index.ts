import { HttpLoggerRequest } from "./HttpLoggerRequest";
import { HttpLoggerResponse } from "./HttpLoggerResponse";

type Middleware = typeof HttpLoggerRequest | typeof HttpLoggerResponse;

const middlewares = <Middleware[]>[HttpLoggerResponse, HttpLoggerRequest];

export { middlewares };