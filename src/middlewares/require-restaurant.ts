import { Request, Response, NextFunction } from "express";

import { UserEnum } from "../types/user.types";
import { NotAuthorizedError } from "../errors/not-authorized-error";

import { requireAuth } from "./require-auth";
import { Token } from "../types/request.types";
import { decode } from "jsonwebtoken";

export const requireRestaurant = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  requireAuth(req, res, () => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new NotAuthorizedError();
    }
    const decodedToken = decode(authHeader);
    if ((decodedToken as Token)?.role !== UserEnum.Restaurant) {
      throw new NotAuthorizedError();
    }
  });

  next();
};
