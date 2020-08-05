import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {
  state = {
    label: '',
  }

  onSubmit=(e)=>{
    e.preventDefault();    
    this.props.onItemAdded(this.state.label)
    this.setState({label: ''})
  }

  onLabelChange=(e)=>{
    const value = e.target.value;
    this.setState(({label})=>{
      return {
      label: value
      }
    })
    
  }
  
  render(){
    return (
    <form className="item-add-form d-flex"
          onSubmit={this.onSubmit}>

      <input type='text'
            className='form-control'
            onChange={this.onLabelChange}
            placeholder='Введите сообщение...'
            value={this.state.label}
            required
      />
    <button type="button" 
            className="btn btn-outline-secondary"
            onSubmit={this.onSubmit}
            onClick={this.onSubmit}
            disabled={!this.state.label}
            >Отправить</button>
    </form>
    );
  }
}