import { Request, Response, NextFunction } from "express";
import { USER_TYPES } from "../constants/user.constants";

import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireRestaurant = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.currentUser?.role !== USER_TYPES.RESTAURANT) {
    throw new NotAuthorizedError();
  }

  next();
};
