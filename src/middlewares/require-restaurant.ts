import { Request, Response, NextFunction } from "express";

import { UserEnum } from "../types/user.types";
import { NotAuthorizedError } from "../errors/not-authorized-error";

import { requireAuth } from "./require-auth";
import { CustomRequest } from "../types/request.types";

export const requireRestaurant = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  requireAuth(req, res, () => {
    if ((req as CustomRequest).token.role !== UserEnum.Restaurant) {
      throw new NotAuthorizedError();
    }
  });

  next();
};
