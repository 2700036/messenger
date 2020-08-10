import React from 'react';
import './themes-list-item.css';
import { withRouter } from 'react-router-dom'

const ThemesListItem = ({name, isActive, history}) => {
    return <li 
    onClick={()=>{
        history.push(name)
    }}
    className={`themes-list-item ${isActive ? 'themes-list-item_active' : null}`}>
        {name}
        </li>
}

export default withRouter(ThemesListItem);


