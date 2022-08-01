import { Request } from "express";
export interface CustomRequest extends Request {
    token: {
        id: string;
        email: string;
        role: string;
    };
}
export interface Token {
    id: string;
    email: string;
    role: string;
}
