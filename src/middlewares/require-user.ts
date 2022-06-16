import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireUser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.currentUser?.role !== "User") {
    throw new NotAuthorizedError();
  }

  next();
};
