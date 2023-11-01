import {HttpError} from 'routing-controllers';
import type { ValidationError} from 'class-validator';

interface MessageInterface {
    status: number;
    message?: string;
    code?: string;
    errors?: ValidationError[];
};

