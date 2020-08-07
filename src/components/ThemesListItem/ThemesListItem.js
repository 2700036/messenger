import React from 'react';
import './themes-list-item.css';
import { Link } from 'react-router-dom'

const ThemesListItem = ({name, isActive, onClick}) => {

    return <li onClick={onClick} className={`themes-list-item ${isActive ? 'themes-list-item_active' : null}`}>
        <Link to={`/${name}`}>{name}</Link>
        </li>
}

export default ThemesListItem;


