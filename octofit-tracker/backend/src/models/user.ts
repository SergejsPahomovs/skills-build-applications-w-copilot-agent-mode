import { Schema, model, type InferSchemaType } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    gradeLevel: { type: Number, required: true, min: 6, max: 12 },
    fitnessGoal: { type: String, required: true, trim: true },
    weeklyTargetMinutes: { type: Number, required: true, min: 30 },
  },
  {
    timestamps: true,
  },
);

export type User = InferSchemaType<typeof userSchema>;
export const UserModel = model<User>('User', userSchema);
