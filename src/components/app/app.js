import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import MessageList from '../message-list/message-list';
import ThemesList from '../ThemesList/ThemesList';
import ItemAddForm from '../item-add-form/item-add-form';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import './app.css';
import { themesData, } from '../../data';


export default class App extends Component { 

  state = {
    themes: [],
    
    searchWord: '',
    isInputSearchMode: true,
    messageText: '',
    
    idOfEditMessage: 0    
  }; 

  componentDidMount(){
    this.setState({themes: {...themesData}})   
  }
  componentDidUpdate(){
    if (document.querySelector('.message-list')) {
      document.querySelector('.message-list').scrollTop += 1000};
  }

  deleteItem = (id, currentTheme) => {
    this.setState(({themes})=>{
      const ind = themes[currentTheme].findIndex(el => el.id === id);
      themes[currentTheme] = [...themes[currentTheme].slice(0, ind), ...themes[currentTheme].slice(ind+1)];
      
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
      themes[currentTheme] = [...themes[currentTheme], newItem]
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
      debugger;
      const ind = newThemes[currentTheme].findIndex(el => el.id === this.state.idOfEditMessage);  
      debugger;
      const newMessage = newThemes[currentTheme].find(({id})=> id === this.state.idOfEditMessage);
      newMessage.label = text;
      newThemes[currentTheme] = [...themes[currentTheme].slice(0, ind), newMessage, ...themes[currentTheme].slice(ind+1)];
      
      return {
        themes: newThemes
      }
      
  })
}


render(){  
  const {themes, searchWord, isInputSearchMode, messageText} = this.state
  

  return (
    <>
    <Router>
    
    <Route path='/' exact>
      <ThemesList themes={Object.keys(themes)} /> 
    </Route>
    <Route path='/:id' render={({match})=>{
      const currentTheme = match.params.id;
      console.log(currentTheme);
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
      </>)
    }}/>
    
    
    </Router>
    </>
  );
};
};

