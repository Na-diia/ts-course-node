import type {NextFunction, Request, Response} from 'express';
import type {ExpressMiddlewareInterface} from 'routing-controllers';
import {Middleware} from 'routing-controllers';

@Middleware({type: 'before'})
export class HttpLoggerRequest implements
ExpressMiddlewareInterface {
  use(request: Request , response: Response , next: NextFunction) {
    const {body, originalUrl, method} = request;
    const { statusCode} = response;

    console.log(`Received request: method: ${method}, path: ${originalUrl}, status: ${statusCode}`,
    JSON.stringify(body));

    next();
  }
};