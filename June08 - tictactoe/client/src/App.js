import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:2000");

const App = () => {
  const [showGame, setShowGame] = useState(false);
  return (
    <div>
      <Form showGame={showGame} setShowGame={setShowGame} socket={socket} />
    </div>
  )
}

export default App

