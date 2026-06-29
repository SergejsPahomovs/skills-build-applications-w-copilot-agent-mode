import { Router } from 'express';
import { LeaderboardModel } from '../models/leaderboard';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const items = await LeaderboardModel.find().populate('userId').lean();
    res.json({
      resource: 'leaderboard',
      items,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
