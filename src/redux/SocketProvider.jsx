// import React, { useContext, useEffect, useState } from "react";
// import io from "socket.io-client";
// import { useSelector } from "react-redux";
// import { PUBLIC_URL, SERVER_URL } from "./helper";
// const SocketContext = React.createContext();

// export function useSocket() {
//   return useContext(SocketContext);
// }

// function SocketProvider({ children }) {
//   const auth = useSelector((state) => state.auth.auth);
//   const token = localStorage.getItem("stock-advisor");
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     if (!auth || !token) return;
//     const newSocket = io(
//       "https://5ba2-2409-4051-4e07-79b9-e170-83ce-fefa-5365.ngrok.io",
//       {
//         extraHeaders: token,
//       }
//     );
//     setSocket(newSocket);
//     return () => newSocket.close();
//   }, [auth, token]);

//   return (
//     <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//   );
// }
// export default SocketProvider;

import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { SERVER_URL } from "./helper";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}
function SocketProvider({ children }) {
  const [socket, setSocket] = useState();
  const auth = useSelector((state) => state.auth.auth);
  const token = localStorage.getItem("stock-advisor");

  useEffect(() => {
    const newSocket = io(SERVER_URL, {});
    setSocket(newSocket);
    console.log("socket", newSocket);
    return () => newSocket.close();
  }, [token]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
export default SocketProvider;
