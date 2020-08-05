import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import MessageList from '../message-list/message-list';

import ItemAddForm from '../item-add-form/item-add-form';


import './app.css';


export default class App extends Component {
  maxId= 100;

  state = {
    todoData: [
      this.createNewItem('Drink Coffee'),
      this.createNewItem('Make Awesome App'),
      this.createNewItem('Have a lunch'),
    ],
    searchWord: '',
    filter: 'all' //! active all done
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
  toggleProperty(id, arr, propName){
    const ind = arr.findIndex(el => el.id === id);
      const oldItem = arr[ind];
      const newItem = {...oldItem, [propName]: !oldItem[propName]}

      return  [
          ...arr.slice(0, ind), newItem, ...arr.slice(ind+1)
        ]
      
  }
  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
      return {
        todoData: this.toggleProperty(id, todoData, 'important')
      }      
      })    
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
  filter(arr, filter){
    switch(filter){
      case 'all':
        return arr;
      case 'active':
        return arr.filter(el=>!el.done);        
      case 'done':
        return arr.filter(el=>el.done);
        default:
        return arr; 
    }
  }
  onFilterClick = (name) => {    
    this.setState({filter: name})
  }
  

render(){
  const countDone = this.state.todoData.filter(el=>el.done).length;
  const countTodo = this.state.todoData.length - countDone;
  const visibleItems = this.filter(this.search(this.state.todoData, this.state.searchWord), this.state.filter)

  return (
    <div className="messenger-app">
      <AppHeader toDo={countTodo} done={countDone} />
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
  );
};
};

