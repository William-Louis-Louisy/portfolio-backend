import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface RequestWithUser extends Request {
  user?: Record<string, any>;
}

export function verifyToken(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.replace("Bearer ", "");

  if (!token) return res.status(401).send("Access Denied");

  const secret: Secret = process.env.JWT_SECRET as Secret;

  try {
    const verified = jwt.verify(token, secret);
    if (typeof verified === "object") {
      req.user = verified as Record<string, any>;
    } else {
      return res.status(400).send("Invalid Token");
    }
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(400).send("Token Expired");
    }

    res.status(400).send("Invalid Token");
  }
}
