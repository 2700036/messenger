import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import MessageList from '../message-list/message-list';
import ThemesList from '../ThemesList/ThemesList';
import ItemAddForm from '../item-add-form/item-add-form';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { themesData, } from '../../data';

import './app.css';

export default class App extends Component { 
  state = {
    themes: [],    
    searchWord: '',
    isInputSearchMode: true,
    messageText: '',    
    idOfEditMessage: 0    
  }; 

  updateLocalStorage = () => {
    localStorage.themes = JSON.stringify(this.state.themes)
  }

  componentDidMount(){    
    if (!localStorage.length){
      this.setState({themes: {...themesData}});  
    }  else {
      this.setState({themes: JSON.parse( localStorage.themes )})
    }
  }

  deleteItem = (id, currentTheme) => {
    this.setState(({themes})=>{
      const ind = themes[currentTheme].findIndex(el => el.id === id);
      themes[currentTheme] = [...themes[currentTheme].slice(0, ind), ...themes[currentTheme].slice(ind+1)];
      this.updateLocalStorage();
      return {
        themes
      }
    })
  }
  addItem = (text, currentTheme) => {
    const newItem = {
      label: text, id: Math.random()*100, authorId: '768fghz', authorName: 'Саша', date: `${new Date()}`.slice(4,21)   
    }
    this.setState(({themes})=>{      
      themes[currentTheme] = [...themes[currentTheme], newItem];
      this.updateLocalStorage();
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
 
  changeMessage = (text, currentTheme) => {
    this.setState(({themes})=>{
      const newThemes = {...themes};
      const ind = newThemes[currentTheme].findIndex(el => el.id === this.state.idOfEditMessage); 
      const newMessage = newThemes[currentTheme].find(({id})=> id === this.state.idOfEditMessage);
      newMessage.label = text;
      newThemes[currentTheme] = [...themes[currentTheme].slice(0, ind), newMessage, ...themes[currentTheme].slice(ind+1)];
      this.updateLocalStorage();
      return {
        themes: newThemes
      }      
  })
}

render(){  
  const {themes, searchWord, isInputSearchMode, messageText} = this.state;  

  return (
    <>
    <Router>    
    <Route path='/' exact>
    <ThemesList themes={Object.keys(themes)} /> 
    </Route>
    <Route path='/messenger/:id' render={({match})=>{
      const currentTheme = match.params.id;
      return (
        <>
        <ThemesList themes={Object.keys(themes)} 
        currentTheme={currentTheme}    
        /> 
        <div className="messenger-app">
        <AppHeader chatHeader={currentTheme} />
        <div className="top-panel d-flex">
        <SearchPanel onSearchInput={this.onSearchInput} />
        </div>
        {this.state.themes[currentTheme] && 
        <MessageList 
        items={this.search(themes[currentTheme], searchWord)} 
        onDeleted={(id)=>this.deleteItem(id, currentTheme)}
        onEditMessage={this.onEditMessage}      
        />}
        <ItemAddForm 
        onItemAdded={(text)=>this.addItem(text, currentTheme)}
        changeInputsMode={this.changeInputsMode}
        changeMessage={(text)=>this.changeMessage(text, currentTheme)}
        isInputSearchMode={isInputSearchMode}
        messageText={messageText}      
        />
        </div>
        </>
      )
    }}/>  
    </Router>
    </>
  );
};
};

