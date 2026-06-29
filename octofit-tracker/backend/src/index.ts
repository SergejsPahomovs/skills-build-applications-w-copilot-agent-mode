import express from 'express';
import apiRouter from './routes';
import { connectDatabase, getMongoUri } from './config/database';
import { runtime } from './config/runtime';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'octofit-backend',
    apiBaseUrl: runtime.apiBaseUrl,
    port: runtime.port,
    mongoUri: getMongoUri(),
  });
});

const startServer = async (): Promise<void> => {
  await connectDatabase();
  app.listen(runtime.port, () => {
    console.log(`API running on ${runtime.apiBaseUrl}`);
    console.log(`MongoDB target: ${getMongoUri()}`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start backend:', error);
  process.exit(1);
});
