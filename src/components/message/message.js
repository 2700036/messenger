import React, {Component} from 'react';

import './message.css';

export default class Message extends Component{
 
  render(){
    const {label, date, authorName, isUsersMessage} = this.props;       
    
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
                onClick={this.props.onDeleted}>
          <i className="fa fa-trash-o" />
        </button>      
        <button type="button"
                className="btn btn-sm float-right"
                onClick={this.props.onEditMessage}
                >
          <i className="fa fa-pencil-square-o" />
        </button>
        </>
        ) : null}
      </li>
    )  
  }

}

