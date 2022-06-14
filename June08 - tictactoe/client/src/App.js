import React, { useState } from 'react';
import './App.css';
import JoinForm from './components/JoinForm';
import io from 'socket.io-client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const socket = io.connect("http://localhost:8000");

const App = () => {
  const [showGame, setShowGame] = useState(false);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<JoinForm showGame={showGame} setShowGame={setShowGame} socket={socket} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

