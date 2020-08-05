import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import MessageList from '../message-list/message-list';
import ThemesList from '../ThemesList/ThemesList';
import ItemAddForm from '../item-add-form/item-add-form';


import './app.css';


export default class App extends Component {
  maxId= 100;

  state = {
    todoData: [
      {
        label: 'Drink Coffee', id: this.maxId++, authorId: '345tgkd', authorName: 'Алёша', date: '20 июля 2020 16:38'
      },
      {
        label: 'Make Awesome Make Awesome Make Awesome Make Awesome Make Awesome Make Awesome Make Awesome Make Awesome Make Awesome App', id: this.maxId++, authorId: '768fghz', authorName: 'Саша', date: '20 июля 2020 16:38'
      },
      {
        label: 'Have a lunch', id: this.maxId++, authorId: '345tgkd', authorName: 'Алёша', date: '20 июля 2020 16:38'
      },      
    ],
    searchWord: '',    
  }; 

  createNewItem (label){
    return {
    label, important: false, done: false, id: this.maxId++
  }
  }
  deleteItem = (id) => {
    this.setState(({todoData})=>{
      const ind = todoData.findIndex(el => el.id === id);
      return {
        todoData: [...todoData.slice(0, ind), ...todoData.slice(ind+1)]
      }
    })
  }
  addItem = (text) => {
    const newItem = {
      label: text, important: false, id: this.maxId++   
    }
    this.setState(({todoData})=>{
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
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
  const visibleItems = this.search(this.state.todoData, this.state.searchWord);

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

