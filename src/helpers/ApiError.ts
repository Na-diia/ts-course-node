import {HttpError} from 'routing-controllers';
import type { ValidationError} from 'class-validator';

interface MessageInterface {
    status: number;
    message?: string;
    code?: string;
    errors?: ValidationError[];
};

export class ApiError extends HttpError {
    protected error: MessageInterface;

    constructor (status = 500,error: Omit<MessageInterface, "status">) {
        super(status);

        this.error = { ...error, status, code: error.code || "INTERNAL__ERROR"};

        this.name = "API__ERROR";

        this.message = error.message || " ";
    };

    public toJSON = ():MessageInterface => {
        return this.error;
    };
};

