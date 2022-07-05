import { Request, Response, NextFunction } from "express";

import { UserEnum } from "../types/user.types";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireRestaurant = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.currentUser?.role !== UserEnum.Restaurant) {
    throw new NotAuthorizedError();
  }

  next();
};
