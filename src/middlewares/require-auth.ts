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
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  console.log("token encoded: ", token);

  if (token && typeof token === "string") {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY!);
      console.log("token decoded: ", decoded);
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
