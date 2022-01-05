import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navlink = ({to, children}) => {
    return (
        <NavLink to={to} className={({ isActive }) => 'navlink ' + (isActive ? 'navlink--active' : '')}>
            <span>{children}</span>
            <div className="navlink__bar"></div>
        </NavLink>
    )
}