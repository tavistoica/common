import { Request, Response, NextFunction } from "express";

import { UserEnum } from "../types/user.types";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { CustomRequest } from "../types/request.types";
import { requireAuth } from "./require-auth";

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  requireAuth(req, res, () => {
    if ((req as CustomRequest).token.role !== UserEnum.Customer) {
      throw new NotAuthorizedError();
    }
  });

  next();
};
