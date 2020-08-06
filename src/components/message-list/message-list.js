import React from 'react';

import Message from '../message/message';
import './message-list.css';


const MessageList = ({ items, onDeleted, onEditMessage}) => {

  const elements = items.map((item) => {
    const { id, authorId, ...itemProps } = item;    
    const isUsersMessage = authorId === '768fghz';
    return (      
        <Message {...itemProps } isUsersMessage={isUsersMessage} 
        key={id} 
        onDeleted={()=>onDeleted(id)}
        onEditMessage={()=>onEditMessage(item.label, id)}        
        />      
    );
  });

  return (
    <ul className="list-group message-list">
      { elements }
    </ul>
  );
};

export default MessageList;
