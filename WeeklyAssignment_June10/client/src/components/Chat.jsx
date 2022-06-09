import React, { useState } from 'react';

const Chat = ({socket, username, room}) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = async () => {
    if(currentMessage !== "") {
      const messageData = {
        username: username,
        room: room,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + "" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit('send_message', messageData)
    }
  }

  return (
    <div>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input type="text" placeholder="message" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
        <button onClick={handleSendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat
