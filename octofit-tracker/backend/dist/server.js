"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverPort = exports.getServerHost = exports.CODESPACE_NAME = void 0;
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
// Build the Codespaces host suffix when CODESPACE_NAME is available.
exports.CODESPACE_NAME = codespaceName
    ? `${codespaceName}-8000.app.github.dev`
    : '';
const getServerHost = () => {
    return exports.CODESPACE_NAME ? `https://${exports.CODESPACE_NAME}` : `http://localhost:${port}`;
};
exports.getServerHost = getServerHost;
exports.serverPort = port;
