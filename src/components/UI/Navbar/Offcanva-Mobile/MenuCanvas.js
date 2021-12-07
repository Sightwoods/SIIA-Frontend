import React, { useRef } from 'react'
import { NavButton } from '../NavButton'

export const MenuCanvas = ({name, icon, user, children }) => {
    const ref = useRef(null);

    const openMenu = () => {
        ref.current.classList.add('open');
    }
    
    const closeMenu = () => {
        ref.current.classList.remove('open');
    }

    return (
        <div>
            <NavButton 
                icon={ icon }
                onClick={openMenu}
            >
                { (user) ? user : name }
            </NavButton>
            <div className="canvasMenu | canva-uas" id="section" ref={ref}>
                <div className="canvasMenu__main">
                    <span className="canvasMenu__title">{ name }</span>
                    <button className="canvasMenu__back" onClick={closeMenu}><i className="fas fa-arrow-left"></i></button>
                </div>
                <hr className="uas-divider"/>
                <ul className="navbar-nav | mb-lg-0">
                    <li className="canvasMenu__section">
                        <ul className="canvasMenu__content">
                            {
                                children
                            }
                            <div className="canvasMenu__end"></div>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
