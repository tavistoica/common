import { Request, Response, NextFunction } from "express";

import { UserEnum } from "../types/user.types";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { Token } from "../types/request.types";
import { requireAuth } from "./require-auth";
import { decode } from "jsonwebtoken";

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  requireAuth(req, res, () => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new NotAuthorizedError();
    }
    const decodedToken = decode(req.header("authorization")!);
    if ((decodedToken as Token)?.role !== UserEnum.Customer) {
      throw new NotAuthorizedError();
    }
  });

  next();
};
