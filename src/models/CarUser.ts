import mongoose, { Schema, Document } from "mongoose";

export interface ICarUser extends Document {
  userId: mongoose.Types.ObjectId;
  carId: mongoose.Types.ObjectId;
  role: "Owner" | "Family";
}

const CarUserSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    carId: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    role: { type: String, enum: ["Owner", "Family"], required: true },
  },
  { timestamps: true }
);

const CarUser = mongoose.model<ICarUser>("CarUser", CarUserSchema);
export default CarUser;
