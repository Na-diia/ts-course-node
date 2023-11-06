import type {NextFunction, Response, Request} from 'express';
import type {ExpressMiddlewareInterface} from 'routing-controllers';

export class HttpLoggerResponse implements 
ExpressMiddlewareInterface{
    use(request: Request, response: Response, next: NextFunction) {
        const {body, method, originalUrl} = request;
        const {statusCode} = response;

        console.log(`Received response: method: ${method}, path: ${originalUrl}, statusCode: ${statusCode}`,
        JSON.stringify(body));

        next();
    };
};