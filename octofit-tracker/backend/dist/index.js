"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = require("./config/database");
const runtime_1 = require("./config/runtime");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'octofit-backend',
        apiBaseUrl: runtime_1.runtime.apiBaseUrl,
        port: runtime_1.runtime.port,
        mongoUri: (0, database_1.getMongoUri)(),
    });
});
const startServer = async () => {
    await (0, database_1.connectDatabase)();
    app.listen(runtime_1.runtime.port, () => {
        console.log(`API running on ${runtime_1.runtime.apiBaseUrl}`);
        console.log(`MongoDB target: ${(0, database_1.getMongoUri)()}`);
    });
};
startServer().catch((error) => {
    console.error('Failed to start backend:', error);
    process.exit(1);
});
