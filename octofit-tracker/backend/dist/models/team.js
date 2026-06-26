"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModel = void 0;
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    coachName: { type: String, required: true, trim: true },
    memberIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true }],
}, {
    timestamps: true,
});
exports.TeamModel = (0, mongoose_1.model)('Team', teamSchema);
