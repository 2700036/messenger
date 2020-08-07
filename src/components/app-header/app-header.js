import React from 'react';
import './app-header.css';

const AppHeader = ({chatHeader}) => {
  return (
    <div className="app-header d-flex">
      <h1>{chatHeader}</h1>
      
    </div>
  );
};

export default AppHeader;
