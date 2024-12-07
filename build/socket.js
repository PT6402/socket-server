"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = sendMessage;
function sendMessage(socketApp) {
    if (socketApp) {
        socketApp.emit("receive_message", "send message from server");
    }
}
