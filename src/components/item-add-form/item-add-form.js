import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {
  state = {
    label: '',
  }
  componentDidUpdate(prevProps){
    if (this.props.messageText !== prevProps.messageText) {
      this.setState({label: this.props.messageText})
    }
  }

  onSubmit=(e)=>{
    e.preventDefault();    
    this.props.onItemAdded(this.state.label)
    this.setState({label: ''})
  }
  onEdit = (e)=>{
    e.preventDefault();
    this.onLabelChange(e);
    this.props.changeMessage(this.state.label);
    this.setState({label: ''})
    this.props.changeInputsMode();
    }
  

  onLabelChange=(e)=>{
    const value = e.target.value;    
    this.setState(({label})=>{
      return {
      label: value
      }
      debugger
    })    
  }
  
  render(){ 
    const {isInputSearchMode} = this.props;   
    return (
    <form className="item-add-form d-flex"
          >

      <input type='text'
            className='form-control'
            onChange={this.onLabelChange}
            placeholder={isInputSearchMode ? 'Введите сообщение...' : ''}
            value={this.state.label}
            required
      />
    <button type="button" 
            className="btn btn-outline-secondary"
            
            onClick={isInputSearchMode ? this.onSubmit : this.onEdit} 
            disabled={!this.state.label}
            >{isInputSearchMode ? 'Отправить' : 'Изменить'}</button>
    </form>
    );
  }
}

