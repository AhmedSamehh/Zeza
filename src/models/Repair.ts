import mongoose, { Schema, Document } from "mongoose";

export interface IRepair {
  carId: mongoose.Types.ObjectId;
  serviceType: string;
  details: string;
  cost: number;
  mileageAtService: number;
  serviceDate: Date;
  receiptUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IRepairDocument = IRepair & Document;

const RepairSchema: Schema = new Schema(
  {
    carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    serviceType: { type: String, required: true },
    details: { type: String, required: true },
    cost: { type: Number, required: true },
    mileageAtService: { type: Number, required: true },
    serviceDate: { type: Date, required: true },
    receiptUrl: { type: String },
  },
  { timestamps: true }
);

const Repair = mongoose.model<IRepairDocument>("Repair", RepairSchema);
export default Repair;