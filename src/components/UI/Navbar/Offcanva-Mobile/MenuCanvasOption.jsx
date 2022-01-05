import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavButton } from '../NavButton'

export const MenuCanvasOption = (props) => {
    
    return (
        <NavLink
            className={({ isActive }) => 'canvasMenu__link ' + (isActive ? 'navlink--active' : '')}
            to={props.to}
        >
            <NavButton>{props.children}</NavButton>
        </NavLink>
    )
}
