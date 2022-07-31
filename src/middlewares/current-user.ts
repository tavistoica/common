import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { UserType } from "../types/user.types";

interface UserPayload {
  email: string;
  role: UserType;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader) {
    return next();
  }

  try {
    const payload = jwt.verify(
      // @ts-ignore
      authHeader,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {
    console.log(err);
  }

  next();
};
