import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import MessageList from '../message-list/message-list';
import ThemesList from '../ThemesList/ThemesList';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';
import { themesData } from '../../data';


export default class App extends Component { 

  state = {
    themes: [],
    currentTheme: 'flood-flood',
    searchWord: '',    
  }; 

  componentDidMount(){
    this.setState({themes: themesData[this.state.currentTheme]})
   
    console.log(this.state);
  }
  componentWillUpdate(){
    console.log(this.state.themes);
  }

  createNewItem (label){
    return {
    label, important: false, done: false, id: this.maxId++
  }
  }
  deleteItem = (id) => {
    this.setState(({themes})=>{
      const ind = themes.findIndex(el => el.id === id);
      return {
        themes: [...themes.slice(0, ind), ...themes.slice(ind+1)]
      }
    })
  }
  addItem = (text) => {
    const newItem = {
      label: text, important: false, id: this.maxId++   
    }
    this.setState(({themes})=>{
      const newArr = [...themes, newItem];
      return {
        themes: newArr
      }
    });    
  }  

  search(arr, word){
    if(word.length === 0){
      return arr
    }
    return arr.filter(el=>el.label.toLowerCase().includes(word.toLowerCase()))
  }
  onSearchInput = (word) => {
    this.setState({searchWord: word})
  }
 
  

render(){  
  const visibleItems = this.search(this.state.themes, this.state.searchWord);

  return (
    <>
    <ThemesList />    
    <div className="messenger-app">
      <AppHeader  />
      <div className="top-panel d-flex">
        <SearchPanel onSearchInput={this.onSearchInput}/>
        
      </div>
      <MessageList todos={visibleItems} 
      onDeleted={this.deleteItem}
      onToggleImportant={this.onToggleImportant}      
      />
      <ItemAddForm 
      onItemAdded={this.addItem}
      />
    </div>
    </>
  );
};
};

