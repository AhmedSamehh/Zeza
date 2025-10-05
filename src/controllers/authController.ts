import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return errorResponse(res, 400, "Email already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    return successResponse(res, 201, "User registered successfully", {
      id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (err: any) {
    return errorResponse(res, 500, "Internal server error", {
      error: err.message,
    });
  }
};
