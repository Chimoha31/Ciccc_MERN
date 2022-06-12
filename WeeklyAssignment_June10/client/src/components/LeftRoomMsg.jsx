import React from "react";
import "./LeftRoomMsg.css";

const leftRoomMsg = ({leftPerson}) => {
  return (
    <div className="left_container">
      <div className="left_person">{leftPerson} has left the room</div>
    </div>
  );
};

export default leftRoomMsg;
