import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Home from "./components/Home";
import JoinForm from "./components/JoinForm";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joinroom" element={<JoinForm socket={socket} />} />
          <Route path="/chatroom" element={<Chat socket={socket} />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
