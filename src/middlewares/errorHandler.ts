import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/apiResponse";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err.stack || err.message);
  return errorResponse(res, err.statusCode || 500, err.message || "Server Error");
};
