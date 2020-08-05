import React from 'react';

import Message from '../message/message';
import './message-list.css';


const MessageList = ({ todos, onDeleted, onToggleImportant}) => {

  const elements = todos.map((item) => {
    const { id, authorId, ...itemProps } = item;    
    const isUsersMessage = authorId === '768fghz';
    return (      
        <Message {...itemProps } isUsersMessage={isUsersMessage} 
        key={id} 
        onDeleted={()=>onDeleted(id)}
        onToggleImportant={()=>onToggleImportant(id)}        
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
