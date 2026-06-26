"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_1 = require("../models/team");
const router = (0, express_1.Router)();
router.get('/', async (_req, res, next) => {
    try {
        const items = await team_1.TeamModel.find().populate('memberIds').lean();
        res.json({
            resource: 'teams',
            items,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
