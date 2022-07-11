import { Request, Response, NextFunction } from "express";
declare const requireAuth: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<Response<any> | undefined>;
export default requireAuth;
