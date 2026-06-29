const port = 8000;

const codespaceName = process.env.CODESPACE_NAME;

// Build the Codespaces host suffix when CODESPACE_NAME is available.
export const CODESPACE_NAME = codespaceName
  ? `${codespaceName}-8000.app.github.dev`
  : '';

export const getServerHost = (): string => {
  return CODESPACE_NAME ? `https://${CODESPACE_NAME}` : `http://localhost:${port}`;
};

export const serverPort = port;