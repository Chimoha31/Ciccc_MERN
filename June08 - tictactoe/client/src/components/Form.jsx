import React, { useState } from "react";
import { Fragment } from "react";
import Board from "./Board";
import "./Form.css";

const Form = ({ showGame, setShowGame, socket }) => {
  const [username, setUsername] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username !== "" && roomNumber !== "") {
      socket.emit("join_room", {username, roomNumber})
      setShowGame(true);
    }
  };
  return (
    <Fragment>
      {!showGame ? <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} value={username} />
        <input type="text" placeholder="Enter Room" onChange={(e) => setRoomNumber(e.target.value)} value={roomNumber} />
        <button>Join Room</button>
      </form> : <Board socket={socket} username={username} roomNumber={roomNumber} />}
    </Fragment>
  );
};

export default Form;
