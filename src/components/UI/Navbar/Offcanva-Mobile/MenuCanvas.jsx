import React, { useRef } from 'react'
import { NavButton } from '../NavButton'

export const MenuCanvas = ({name, icon, children }) => {
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
                { name }
            </NavButton>
            <div className="canvasMenu | canva-uas" id="section" ref={ref}>
                <button className="canvasMenu__main" onClick={closeMenu}>
                    <span className="canvasMenu__title">{ name }</span>
                    <i className="fas fa-arrow-left"></i>
                </button>
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
