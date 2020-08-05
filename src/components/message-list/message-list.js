import React from 'react';

import Message from '../message/message';
import './message-list.css';


const MessageList = ({ todos, onDeleted, onToggleImportant}) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (      
        <Message {...itemProps } 
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
