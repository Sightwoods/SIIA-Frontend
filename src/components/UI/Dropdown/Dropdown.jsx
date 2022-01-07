import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { DropdownMenu } from './DropdownMenu';
import { NavButton } from '../Navbar/NavButton';

export const Dropdown = ({name, icon = "", profile, children}) => {

    let {pathname} = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdown = useRef(null);

    useEffect(() => {
        const checkBlur = e => {
            if (isOpen && dropdown.current && !dropdown.current.contains(e.target))
                setIsOpen(false)
        }
        document.addEventListener("click", checkBlur);

        if ( isOpen ) {
            dropdown.current.classList.add('active');
        }
        else {
            dropdown.current.classList.remove('active');
        }

        return () => document.removeEventListener("click", checkBlur);
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false);
    }, [pathname])

    const toggleDropDown = (e) => {
        if (e.currentTarget.closest('[data-dropdown]') == null) return;
        setIsOpen(v => !v);

        document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
            if ( dropdown === dropdown.current ) return;
            dropdown.classList.remove('active');
        })
    }

    return (
        <div className="dropdown" data-dropdown ref={dropdown}>
            <NavButton icon={icon} profile={profile} state={isOpen} onClick={ toggleDropDown } data-dropdown-button>{ name }</NavButton>
            <DropdownMenu>
                {children}
            </DropdownMenu>
        </div>
    )
}
