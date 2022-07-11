import { Request, Response, NextFunction } from "express";
// import { NotAuthorizedError } from "../errors/not-authorized-error";
import jwt from "jsonwebtoken";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-access-token");
  if (!token) {
    return res
      .status(403)
      .json({ error: true, message: "Access Denied: No token provided" });
  }

  try {
    const tokenDetails = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_PRIVATE_KEY!
    );
    // @ts-ignore
    req.user = tokenDetails;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ error: true, message: "Access Denied: Invalid token" });
  }
};
