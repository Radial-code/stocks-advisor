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
        console.log("payment_confirmed", res);
        dispatch(getPaymentStatus(res));
      });
  }, [socket, dispatch]);

  useEffect(() => {
    if (!socket) return;
    socket &&
      socket.on("payment_failed", function (res) {
        console.log("payment_failed", res);
        dispatch(getPaymentStatus(res));
      });
  }, [socket, dispatch]);

  useEffect(() => {
    if (!socket) return;
    socket &&
      socket.on("payment_pending", function (res) {
        console.log("payment_pending", res);
        dispatch(getPaymentStatus(res));
      });
  }, [socket, dispatch]);
}
