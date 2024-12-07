import { DefaultEventsMap, Socket } from "socket.io";

function sendMessage(
  socketApp: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  socketApp.emit("receive_message", "send message from server");
}
export { sendMessage };
