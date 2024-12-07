import cors from "cors";
import morgan from "morgan";
import express, { NextFunction, Request, Response } from "express";
import { DefaultEventsMap, Server, Socket } from "socket.io";
import { sendMessage } from "./socket";
const server = express();
server.use(
  cors({
    credentials: true,
  })
);
server.use(morgan("dev"));
server.use(express.json());
let socketApp: Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  any
>;
const app = server.listen(8080, () => {
  console.log(`server running on http://localhost:${8080}`);
});
const io = new Server(app, {
  cors: { origin: "http://localhost:3000" },
});
io.on("connect", (socket) => {
  socketApp = socket;
  console.log(`Client connected: ${socket.id}`);
});

server.use("/send", (req: Request, res: Response, next: NextFunction) => {
  sendMessage(socketApp);
  res.json("success");
});