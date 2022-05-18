import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireSeller = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.currentUser?.role !== "Seller") {
    throw new NotAuthorizedError();
  }

  next();
};
