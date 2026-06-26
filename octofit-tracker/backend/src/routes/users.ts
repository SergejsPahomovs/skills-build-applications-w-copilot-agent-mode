import { Router } from 'express';
import { UserModel } from '../models/user';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const items = await UserModel.find().lean();
    res.json({
      resource: 'users',
      items,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
