import React, { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './components/Chat';

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const handleJoinRoom = () => {
    if(username !== "" && room !== "") {
      socket.emit('join_room', room)
    }
  }

  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input type="text" placeholder="Your name" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Room number" value={room} onChange={(e) => setRoom(e.target.value)} />
      <button onClick={handleJoinRoom}>Join A Room</button>

      <Chat socket={socket} username={username} room={room} />
    </div>
  )
}

export default App

