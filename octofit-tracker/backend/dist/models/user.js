"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    gradeLevel: { type: Number, required: true, min: 6, max: 12 },
    fitnessGoal: { type: String, required: true, trim: true },
    weeklyTargetMinutes: { type: Number, required: true, min: 30 },
}, {
    timestamps: true,
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
