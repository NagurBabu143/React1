import React from "react";
import "./ChatList.css";

const ChatList = () => {
  const chats = [
    { id: 1, name: "User1", lastMessage: "Hello!" },
    { id: 2, name: "User2", lastMessage: "How are you?" },
  ];

  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div key={chat.id} className="chat-item">
          <p>{chat.name}</p>
          <span>{chat.lastMessage}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
