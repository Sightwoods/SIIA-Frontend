import React, { useEffect, useRef, useState } from 'react';

import { NavButton } from '../Navbar/NavButton';
import { DropdownContainer } from './DropdownContainer';


export const Dropdown = ({name, icon = "", children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpen])
    
    const toggle = () => {
        setIsOpen((e) => !e);
    }

    return (
        <div className="d-inline-block SO_MAIN" ref={ref}>
            <div>
                <NavButton icon={icon} onMouseDown={toggle}>{ name }</NavButton>
            </div>
            {
                ( isOpen )
                &&
                <div className={`${ (!isOpen) ? 'd-none' : 'SO' }`}>
                    <DropdownContainer>
                        {children}
                    </DropdownContainer>
                </div> 
            }
        </div>
    )
}
