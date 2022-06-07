import React, { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./components/Chat";

const socket = io.connect("http://localhost:2000");
console.log(socket);

const App = () => {
  const [username, setUsername] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [showChat, setShowchat] = useState(false);

  const enterRoomNumber = (e) => {
    e.preventDefault();

    if(username !== "" && roomNumber !== "") {
      // 何をemit()させたいか＝join_room
      socket.emit("join_room", {username, roomNumber})
    }else{

    }
  };

  return (
    <div className="App">
      <form className="joinChatContainer" onSubmit={enterRoomNumber}>
        <h1>Join chat</h1>
        <input
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          value={roomNumber}
          placeholder="Enter Room Number"
          onChange={(event) => setRoomNumber(event.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
      {/* <Chat socket={socket} roomNumber={roomNumber} username={username} />} */}
    </div>
  );
};

export default App;
