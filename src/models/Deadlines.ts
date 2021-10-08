import { Schema, model } from 'mongoose';
import { Deadline } from '../types';

const deadlineSchema = new Schema<Deadline>(
  {
    weeks: {
      type: Number,
      required: true,
    },
    normalRate: {
      type: Number,
      required: true,
    },
    punctualRate: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const DeadlineModel = model<Deadline>('Deadline', deadlineSchema);
