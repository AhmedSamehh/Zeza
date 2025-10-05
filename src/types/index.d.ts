import { IUser } from "../../models/User";
import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
      email?: string;
      name?: string;
      tier?: "free" | "pro";
    };
  }
}
