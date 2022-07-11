import { Request, Response, NextFunction } from "express";
// import { NotAuthorizedError } from "../errors/not-authorized-error";
import jwt from "jsonwebtoken";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.header("AccessToken");
  const refreshToken = req.header("RefreshToken");

  if (!accessToken || !refreshToken) {
    return res
      .status(403)
      .json({ error: true, message: "Access Denied: No tokens provided" });
  }

  try {
    const accessTokenDetails = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_PRIVATE_KEY!
    );

    // @ts-ignore
    req.user = accessTokenDetails;
    next();
  } catch (err) {
    try {
      const refreshTokenDetails = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_PRIVATE_KEY!
      );

      // @ts-ignore
      req.user = refreshTokenDetails;
      next();
    } catch (err) {
      return res
        .status(403)
        .json({ error: true, message: "Access Denied: Invalid token" });
    }
  }
};
