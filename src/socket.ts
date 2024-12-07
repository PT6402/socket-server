import { DefaultEventsMap, Socket } from "socket.io";

function sendMessage(
  socketApp: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  if (socketApp) {
    socketApp.emit("receive_message", "send message from server");
  }
}
export { sendMessage };
