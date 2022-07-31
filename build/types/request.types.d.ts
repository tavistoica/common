import { Request } from "express";
export interface CustomRequest extends Request {
    token: {
        email: string;
        role: string;
    };
}
export interface Token {
    email: string;
    role: string;
}
