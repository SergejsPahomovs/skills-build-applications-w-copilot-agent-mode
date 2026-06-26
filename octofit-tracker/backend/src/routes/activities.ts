import { Router } from 'express';
import { ActivityModel } from '../models/activity';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const items = await ActivityModel.find().populate('userId').lean();
    res.json({
      resource: 'activities',
      items,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
