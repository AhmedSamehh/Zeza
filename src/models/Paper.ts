import mongoose, { Schema, Document } from "mongoose";

export interface IPaper {
  carId: mongoose.Types.ObjectId;
  paperType: string;
  expiryDate: Date;
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IPaperDocument = IPaper & Document;

const PaperSchema: Schema = new Schema(
  {
    carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    paperType: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    fileUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Paper = mongoose.model<IPaperDocument>("Paper", PaperSchema);
export default Paper;