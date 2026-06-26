"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leaderboard_1 = require("../models/leaderboard");
const router = (0, express_1.Router)();
router.get('/', async (_req, res, next) => {
    try {
        const items = await leaderboard_1.LeaderboardModel.find().populate('userId').lean();
        res.json({
            resource: 'leaderboard',
            items,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
