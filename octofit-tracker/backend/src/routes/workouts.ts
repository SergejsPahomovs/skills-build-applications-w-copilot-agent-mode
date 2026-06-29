import { Router } from 'express';
import { WorkoutModel } from '../models/workout';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const items = await WorkoutModel.find().lean();
    res.json({
      resource: 'workouts',
      items,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
