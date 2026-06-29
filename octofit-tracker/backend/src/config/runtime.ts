import { getServerHost, serverPort } from '../server';

const port = serverPort;
const host = getServerHost();

export const runtime = {
  port,
  host,
  apiBaseUrl: `${host}/api`,
};
