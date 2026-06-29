import { Router } from 'express';
import { TeamModel } from '../models/team';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const items = await TeamModel.find().populate('memberIds').lean();
    res.json({
      resource: 'teams',
      items,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
