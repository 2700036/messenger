import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import MessageList from '../message-list/message-list';
import ThemesList from '../ThemesList/ThemesList';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';
import { themesData, maxId } from '../../data';


export default class App extends Component { 

  state = {
    themes: [],
    currentTheme: 'flood-flood',
    searchWord: '',    
  }; 

  componentDidMount(){
    this.setState({themes: {...themesData}})
   
  }


  deleteItem = (id) => {
    this.setState(({themes})=>{
      const ind = themes[this.state.currentTheme].findIndex(el => el.id === id);
      themes[this.state.currentTheme] = [...themes[this.state.currentTheme].slice(0, ind), ...themes[this.state.currentTheme].slice(ind+1)];
      
      return {
        themes
      }
    })
  }
  addItem = (text) => {
    const newItem = {
      label: text, id: Math.random()*100, authorId: '768fghz', authorName: 'Саша', date: `${new Date()}`.slice(0,24)   
    }
    this.setState(({themes})=>{      
      themes[this.state.currentTheme] = [...themes[this.state.currentTheme], newItem]
      return {
        themes
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
  
  const visibleItems = this.search(this.state.themes[this.state.currentTheme], this.state.searchWord);

  return (
    <>
    <ThemesList />    
    <div className="messenger-app">
      <AppHeader  />
      <div className="top-panel d-flex">
        <SearchPanel onSearchInput={this.onSearchInput}/>
        
      </div>
      {this.state.themes[this.state.currentTheme] && <MessageList todos={visibleItems} 
      onDeleted={this.deleteItem}
      onToggleImportant={this.onToggleImportant}      
      />}
      <ItemAddForm 
      onItemAdded={this.addItem}
      />
    </div>
    </>
  );
};
};

