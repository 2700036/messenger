import React from 'react';
import './app-header.css';

const AppHeader = ({toDo}) => {
  return (
    <div className="app-header d-flex">
      <h1>{toDo}</h1>
      
    </div>
  );
};

export default AppHeader;
