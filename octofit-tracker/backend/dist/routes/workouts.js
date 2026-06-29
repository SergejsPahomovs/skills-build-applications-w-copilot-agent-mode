"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workout_1 = require("../models/workout");
const router = (0, express_1.Router)();
router.get('/', async (_req, res, next) => {
    try {
        const items = await workout_1.WorkoutModel.find().lean();
        res.json({
            resource: 'workouts',
            items,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
