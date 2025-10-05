import mongoose, { Schema, Document } from "mongoose";

export type ReminderStatus = 'PENDING' | 'COMPLETED' | 'DISMISSED';
export type ReminderRecurrence = 'NONE' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';

export interface IReminder {
  carId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  dueDate: Date;
  recurrence: ReminderRecurrence;
  status: ReminderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type IReminderDocument = IReminder & Document;

const ReminderSchema: Schema = new Schema(
  {
    carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    recurrence: { 
      type: String,
      enum: ['NONE', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'],
      default: 'NONE',
      required: true
    },
    status: { 
      type: String,
      enum: ['PENDING', 'COMPLETED', 'DISMISSED'],
      default: 'PENDING',
      required: true
    },
  },
  { timestamps: true }
);

const Reminder = mongoose.model<IReminderDocument>("Reminder", ReminderSchema);
export default Reminder;