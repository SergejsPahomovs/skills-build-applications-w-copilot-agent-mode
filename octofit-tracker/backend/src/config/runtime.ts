const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const host = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export const runtime = {
  port,
  host,
  apiBaseUrl: `${host}/api`,
};
