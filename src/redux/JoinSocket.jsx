import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getScoketNotificationList, getPaymentStatus } from "./action/contact";
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
  }, [socket, dispatch]);

  useEffect(() => {
    if (!socket) return;
    socket &&
      socket.on("payment_confirmed", function (res) {
        dispatch(getPaymentStatus(res));
      });

    return () => socket && socket.off("online");
  }, [socket, dispatch]);

  useEffect(() => {
    if (!socket) return;
    socket &&
      socket.on("payment_failed", function (res) {
        dispatch(getPaymentStatus(res));
      });

    return () => socket && socket.off("online");
  }, [socket, dispatch]);

  useEffect(() => {
    if (!socket) return;
    socket &&
      socket.on("payment_pending", function (res) {
        dispatch(getPaymentStatus(res));
      });

    return () => socket && socket.off("online");
  }, [socket, dispatch]);
}
