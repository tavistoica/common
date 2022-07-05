import { Request, Response, NextFunction } from "express";

import { UserEnum } from "../types/user.types";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireUser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.currentUser?.role !== UserEnum.Customer) {
    throw new NotAuthorizedError();
  }

  next();
};
