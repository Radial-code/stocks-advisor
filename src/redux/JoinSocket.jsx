import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getScoketNotificationList } from "./action/contact";
import { useSocket } from "./SocketProvider";

export default function JoinSocket() {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) return;
    socket &&
      socket.on("notification", function (res) {
        dispatch(getScoketNotificationList(res.notification));
      });

    return () => socket && socket.off("online");
  }, [socket]);
}
