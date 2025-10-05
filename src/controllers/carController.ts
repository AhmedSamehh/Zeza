import { Request, Response } from "express";
import Car from "../models/Car";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const createCar = async (req: Request, res: Response) => {
  try {
    const { make, model, year, vin, plateNumber, mileage } = req.body;

    const car = await Car.create({
      make,
      model,
      year,
      vin,
      plateNumber,
      mileage,
      ownerId: req.user!.id,
    });

    return successResponse(res, 201, "Car created successfully", car);
  } catch (err: any) {
    return errorResponse(res, 500, "Internal server error", {
      error: err.message,
    });
  }
};