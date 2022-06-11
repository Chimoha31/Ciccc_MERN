import React, { useState } from 'react';
import './App.css';
import JoinForm from './components/JoinForm';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:5000");

const App = () => {
  const [showGame, setShowGame] = useState(false);
  return (
    <div>
      <JoinForm showGame={showGame} setShowGame={setShowGame} socket={socket} />
    </div>
  )
}

export default App

