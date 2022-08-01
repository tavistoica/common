import { Request, Response, NextFunction } from "express";
// import { NotAuthorizedError } from "../errors/not-authorized-error";
import jwt from "jsonwebtoken";
import { Token, CustomRequest } from "../types/request.types";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("it gets into the requireAuth");
  const authHeader = req.headers.authorization || req.headers.Authorization;
  console.log("requireAuth - authHeader: ", authHeader);

  if (authHeader && typeof authHeader === "string") {
    try {
      const decoded = jwt.verify(
        authHeader,
        process.env.ACCESS_TOKEN_PRIVATE_KEY!
      );
      (req as CustomRequest).token = decoded as Token;
      next();
    } catch (err) {
      console.log("err", err);
      return res.sendStatus(403); //invalid token
    }
  } else {
    return res.sendStatus(403); //token not provided
  }
};
