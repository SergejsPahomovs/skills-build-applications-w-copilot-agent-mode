import { Schema, model, type InferSchemaType } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    period: { type: String, required: true, trim: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  {
    timestamps: true,
  },
);

export type LeaderboardEntry = InferSchemaType<typeof leaderboardSchema>;
export const LeaderboardModel = model<LeaderboardEntry>('Leaderboard', leaderboardSchema);
