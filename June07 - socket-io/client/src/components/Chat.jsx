import React, { useState } from "react";

const Chat = ({username, rommNumber, socket}) => {
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if(currentMessage !== "") {
      const messageBody = {
        room: rommNumber,
        userName: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      }

      await socket.emit('send_message', messageBody)
      setMessageList((list) => [...list, messageBody]);
      console.log(messageList);
      setCurrentMessage("");
    }
  };

  return (
    <div className="chat-window">
      <h1>Live Chat</h1>
      <div className="chat-body">
        {messageList.map((msg, index) => (
          <div className="message" key={msg.index}>
            <div className="message-container">
              <div className="message-content">
                <p>{msg.message}</p>
              </div>
              <div className="meta-information">
                <p id="username">{msg.userName}</p>
                <p id="time">{msg.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form className="chat-footer" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Enter Message"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
