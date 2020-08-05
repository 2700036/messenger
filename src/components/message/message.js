import React, {Component} from 'react';

import './message.css';

export default class Message extends Component{
 
  render(){
    const {label} = this.props;    

    return (
      <li className='list-group-item message '>
      
        <span className="message-list-item-label">
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={this.props.onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.props.onToggleImportant}
                >
          <i className="fa fa-pencil-square-o" />
        </button>
  
      
      </li>
    );

  }

}

