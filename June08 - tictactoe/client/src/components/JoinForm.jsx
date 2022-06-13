import React, { useState, Fragment } from "react";
import "./JoinForm.css";
import Board from "./Board";
import Header from "./Header";
import { Button, Form } from "react-bootstrap";

const JoinForm = ({ showGame, setShowGame, socket }) => {
  const [username, setUsername] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [showUsername, setShowUsername] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    if (username !== "" && roomNumber !== "") {
      socket.emit("join_room", { username, roomNumber });
      setShowGame(true);
      setShowUsername(true);

    }else if(username === "" || roomNumber === "") {
      // alert("To fill the blank is required !")
      setErr("Fill In the Blank")
    }
  };

  return (
    <Fragment>
      <Header username={username} showUsername={showUsername} />
      {!showGame ? (
        <div className="form_container">
          <Form
            className="d-flex align-items-center justify-content-center flex-column joinform"
            >
            <h1 className="title_h1 mb-4 text-center">Let's play, &nbsp; &nbsp;<strong className="title mt-2">TicTacToe</strong></h1>
            <p className="mb-4 text-center">※Set User Name and choose room number </p>
            <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
              <Form.Label>*User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="username"
              />
              {err && !username ? <p className="err_msg">{err}</p> : ""}
            </Form.Group>
            <Form.Group className="mb-4 w-75" controlId="exampleForm.ControlInput1">
              <Form.Label>*Room</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Room"
                onChange={(e) => setRoomNumber(e.target.value)}
                value={roomNumber}
                className="roomnumber"
              />
              {err && !roomNumber ? <p className="err_msg">{err}</p> : ""}
            </Form.Group>
            <div className="button w-75">
            <Button onClick={handleSubmit}>Join Room</Button>
            </div>
          </Form>
        </div>
      ) : (
        <div>
          <Board socket={socket} username={username} roomNumber={roomNumber} />
        </div>
      )}
    </Fragment>
  );
};

export default JoinForm;
