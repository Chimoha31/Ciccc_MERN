import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Chat.css";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  // const [isLeftRoom, setIsLeftRoom] = useState("");
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        username: username,
        room: room,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  const handleLeave = () => {
    navigate("/joinroom");
    // window.location.reload();
  }
  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
    socket.on("left_chat", (data) => {
      console.log(data)
    })
    return () => socket.off("receive_message");
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat</p>
          <div>
            <p className="leave" onClick={handleLeave}>Leave 👋🏻</p>
          </div>
        </div>

        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((message, index) => (
              <div
                key={index}
                className="message"
                id={username === message.username ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{message.message}</p>
                  </div>
                  <div className="message-meta">
                    <p>{message.time}</p>
                    <p id="author">{message.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="message"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && handleSendMessage();
            }}
          />
          <button onClick={handleSendMessage}>&#9658;</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;
