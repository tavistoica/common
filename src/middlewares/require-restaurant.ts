import { Request, Response, NextFunction } from "express";

import { UserEnum } from "../types/user.types";
import { NotAuthorizedError } from "../errors/not-authorized-error";

import { requireAuth } from "./require-auth";
import { Token } from "../types/request.types";
import { decode } from "jsonwebtoken";

export const requireRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await requireAuth(req, res, () => {
    console.log("it gets to the callback");
    const authHeader = req.headers.authorization;
    console.log("authHeader", authHeader);

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
