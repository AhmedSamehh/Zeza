import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICar {
  ownerId: mongoose.Types.ObjectId;
  brand: string;
  model: string;
  year: number;
  plateNumber: string;
  vin: string;
  mileage: number;
  isPrimary: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ICarDocument = ICar & Document;

const CarSchema: Schema = new Schema(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    plateNumber: { type: String, required: true },
    vin: { type: String, required: true },
    mileage: { type: Number, required: true, default: 0 },
    isPrimary: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Car = mongoose.model<ICarDocument>("Car", CarSchema);
export default Car;
