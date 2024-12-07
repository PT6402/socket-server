"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const socket_1 = require("./socket");
const server = (0, express_1.default)();
server.use((0, cors_1.default)({
    credentials: true,
}));
server.use((0, morgan_1.default)("dev"));
server.use(express_1.default.json());
let socketApp;
const app = server.listen(8080, () => {
    console.log(`server running on http://localhost:${8080}`);
});
const io = new socket_io_1.Server(app, {
    cors: { origin: "http://localhost:3000" },
});
io.on("connect", (socket) => {
    socketApp = socket;
    console.log(`Client connected: ${socket.id}`);
});
server.use("/send", (req, res, next) => {
    (0, socket_1.sendMessage)(socketApp);
    res.json("success");
});
