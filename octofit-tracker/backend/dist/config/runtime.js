"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const host = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
exports.runtime = {
    port,
    host,
    apiBaseUrl: `${host}/api`,
};
