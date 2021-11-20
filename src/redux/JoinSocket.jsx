import { useEffect } from "react";
import { useSocket } from "./SocketProvider";

export default function JoinSocket() {
  const socket = useSocket();
  console.log("socket", socket);
  useEffect(() => {
    if (socket == null) return;
    socket.on(function () {
      console.log("connected");
    });
  }, [socket]);

  return socket;
}
