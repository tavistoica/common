import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { UserType } from "../types/user.types";

interface UserPayload {
  email: string;
  role: UserType;
  id: string;
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
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];

  if (!token) {
    return next();
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_PRIVATE_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {
    console.log(err);
  }

  next();
};
