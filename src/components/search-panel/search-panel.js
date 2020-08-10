import React, { useState } from 'react';
import './search-panel.css';

const SearchPanel = ({onSearchInput}) => {
  const [searchWord, setSearchWord] = useState('');
  const handleSearchInput = ({target}) => {     
    setSearchWord(target.value);    
    onSearchInput(target.value)
  }
  return (
    <input type="text"
      className="form-control search-input"
      placeholder="Поиск по сообщениям..." 
      onChange={handleSearchInput}
      value={searchWord}
    />              
  );
}

export default SearchPanel;