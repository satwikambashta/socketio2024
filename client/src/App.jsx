import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:3000");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server", socket.id);
    });
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
