"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_1 = require("../models/activity");
const router = (0, express_1.Router)();
router.get('/', async (_req, res, next) => {
    try {
        const items = await activity_1.ActivityModel.find().populate('userId').lean();
        res.json({
            resource: 'activities',
            items,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
