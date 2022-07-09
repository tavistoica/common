import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user.types";
interface UserPayload {
    id: string;
    email: string;
    role: UserType;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const currentUser: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, _res: Response<any>, next: NextFunction) => void;
export {};
