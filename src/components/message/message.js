import React from 'react';
import './message.css';

const Message = ({label, date, authorName, isUsersMessage, onDeleted, onEditMessage}) => {
  return (
    <li className={`message ${isUsersMessage ? `message_users` : ''}`}>      
    <div className="message-list-item-label">
      <div className={`message__info ${isUsersMessage ? `message__info_users` : ''}`}
      >
        {!isUsersMessage ? <span className='message__user-name'>{authorName}</span> : null}          
      <span className='message__date'>{date}</span>
      </div>          
      <span className='message__text'>{label}</span>          
    </div> 
    {isUsersMessage ? (
    <>
    <button type="button"
            className="btn btn-sm float-right "
            onClick={onDeleted}>
      <i className="fa fa-trash-o" />
    </button>      
    <button type="button"
            className="btn btn-sm float-right"
            onClick={onEditMessage}
            >
      <i className="fa fa-pencil-square-o" />
    </button>
    </>
    ) : null}
  </li>
  )
}

export default Message;

