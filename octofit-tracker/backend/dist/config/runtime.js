"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const server_1 = require("../server");
const port = server_1.serverPort;
const host = (0, server_1.getServerHost)();
exports.runtime = {
    port,
    host,
    apiBaseUrl: `${host}/api`,
};
