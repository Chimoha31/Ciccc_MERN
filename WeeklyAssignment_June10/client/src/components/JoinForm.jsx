import React, { useState } from 'react';
import './JoinForm.css'
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

const JoinForm = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const handleJoinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room number"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={handleJoinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default JoinForm
