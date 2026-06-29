import { Schema, model, type InferSchemaType } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, trim: true },
    estimatedMinutes: { type: Number, required: true, min: 5 },
    recommendedForGoal: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export type Workout = InferSchemaType<typeof workoutSchema>;
export const WorkoutModel = model<Workout>('Workout', workoutSchema);
