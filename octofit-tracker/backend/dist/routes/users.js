"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../models/user");
const router = (0, express_1.Router)();
router.get('/', async (_req, res, next) => {
    try {
        const items = await user_1.UserModel.find().lean();
        res.json({
            resource: 'users',
            items,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
