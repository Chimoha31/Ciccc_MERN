import React, { useState } from "react";
import "./JoinForm.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const JoinForm = ({ socket }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      navigate("/chatroom");
    }
  };

  return (
    <div className="container_bg">
      <div className="joinform_container">
        <div className="form">
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
          <Button onClick={handleJoinRoom} className="roomform_btn">
            Join A Room
          </Button>
        </div>

        <div className="form_gif">{/* {bg} */}</div>
      </div>
    </div>
  );
};

export default JoinForm;
