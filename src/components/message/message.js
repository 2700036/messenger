import React, {Component} from 'react';

import './message.css';

export default class Message extends Component{
 
  render(){
    const {label, date, authorName, isUsersMessage} = this.props;       
    if (isUsersMessage){
    return (
      <li className='message message_users'>      
        <div className="message-list-item-label">
          <div className='message__info message__info_users'>          
          <span className='message__date'>{date}</span>
          </div>          
          <span className='message__text'>{label}</span>          
        </div>  
        <button type="button"
                className="btn btn-sm float-right"
                onClick={this.props.onToggleImportant}
                >
          <i className="fa fa-pencil-square-o" />
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={this.props.onDeleted}>
          <i className="fa fa-trash-o" />
        </button>      
      </li>
    )} else {
      return (
        <li className='message'>      
          <div className="message-list-item-label">
            <div className='message__info'>
            <span className='message__user-name'>{authorName}</span>
            <span className='message__date'>{date}</span>
            </div>          
            <span className='message__text'>{label}</span>          
          </div>          
        </li>
      )
    }

  }

}

