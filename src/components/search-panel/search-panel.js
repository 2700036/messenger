import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  state = {
    searchWord: ''
  }
  onSearchInput = (e) => {     
    this.setState({searchWord: e.target.value});    
    this.props.onSearchInput(e.target.value)
  }
  render() {
    return (
      <input type="text"
              className="form-control search-input"
              placeholder="Поиск по сообщениям..." 
              onChange={this.onSearchInput}
              value={this.state.searchWord}
              />
              
    );
  }
}

export default SearchPanel;