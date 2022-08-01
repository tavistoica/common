import { Request, Response, NextFunction } from "express";

import { UserEnum } from "../types/user.types";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { Token } from "../types/request.types";
import { requireAuth } from "./require-auth";
import { decode } from "jsonwebtoken";

export const requireUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await requireAuth(req, res, () => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
    const token = authHeader.split(" ")[1];

    if (!authHeader) {
      throw new NotAuthorizedError();
    }
    const decodedToken = decode(token!);
    if ((decodedToken as Token)?.role !== UserEnum.Customer) {
      throw new NotAuthorizedError();
    }
  });

  next();
};
