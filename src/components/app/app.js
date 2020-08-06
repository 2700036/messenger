import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import MessageList from '../message-list/message-list';
import ThemesList from '../ThemesList/ThemesList';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';
import { themesData, } from '../../data';


export default class App extends Component { 

  state = {
    themes: [],
    currentTheme: 'flood-flood',
    searchWord: '',
    isInputSearchMode: true,
    messageText: '',
    
    idOfEditMessage: 0    
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
  changeInputsMode = () => {
    this.setState({isInputSearchMode: !this.state.isInputSearchMode})    
  }
  onEditMessage = (text, id) => {
    this.changeInputsMode();
    this.setState({messageText: text})
    this.setState({idOfEditMessage: id})
  }
 
  changeMessage = (text) => {
    this.setState(({themes})=>{
      const newThemes = {...themes};
      const ind = newThemes[this.state.currentTheme].findIndex(el => el.id === this.state.idOfEditMessage);  
      const newMessage = newThemes[this.state.currentTheme].find(({id})=> id === this.state.idOfEditMessage);
      newMessage.label = text;
      newThemes[this.state.currentTheme] = [...themes[this.state.currentTheme].slice(0, ind), newMessage, ...themes[this.state.currentTheme].slice(ind+1)];
      
      return {
        themes: newThemes
      }
      
  })
}
  
 
  

render(){  
  const {themes, searchWord, isInputSearchMode, messageText} = this.state
  const visibleItems = this.search(themes[this.state.currentTheme], searchWord);

  return (
    <>
    <ThemesList />    
    <div className="messenger-app">
      <AppHeader  />
      <div className="top-panel d-flex">
        <SearchPanel onSearchInput={this.onSearchInput} />
      </div>
      {this.state.themes[this.state.currentTheme] && <MessageList 
      items={visibleItems} 
      onDeleted={this.deleteItem}
      onEditMessage={this.onEditMessage}      
      />}
      <ItemAddForm 
      onItemAdded={this.addItem}
      changeInputsMode={this.changeInputsMode}
      changeMessage={this.changeMessage}
      isInputSearchMode={isInputSearchMode}
      messageText={messageText}
      
      />
    </div>
    </>
  );
};
};

