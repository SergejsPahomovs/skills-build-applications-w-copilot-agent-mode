import { Router } from 'express';
import usersRouter from './users';
import teamsRouter from './teams';
import activitiesRouter from './activities';
import leaderboardRouter from './leaderboard';
import workoutsRouter from './workouts';

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/teams', teamsRouter);
apiRouter.use('/activities', activitiesRouter);
apiRouter.use('/leaderboard', leaderboardRouter);
apiRouter.use('/workouts', workoutsRouter);

export default apiRouter;
