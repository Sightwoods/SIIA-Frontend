import React from 'react'
import { Link } from 'react-router-dom'
import { NavButton } from '../NavButton'

export const MenuCanvasOption = (props) => {
    
    return (
        <Link
            className="canvasMenu__link"
            to={props.to}
        >
            <NavButton>{props.children}</NavButton>
        </Link>
    )
}
