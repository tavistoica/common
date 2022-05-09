import { CustomError } from "./custom-error";
export declare class NotEnoughStock extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
