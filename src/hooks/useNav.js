import { useEffect, useState } from 'react';

export const useNav = ( initialState = {}) => {

    const [isNavOpen, setIsNavOpen] = useState( initialState );
    
    
    useEffect(() => {
        if ( isNavOpen ) 
        {
            document.querySelector('html').classList.toggle('non-scroll');
        }
        else
        {
            const isScrollable = document.querySelector('html').classList.contains('non-scroll');
            if ( window.innerWidth < 992 && isScrollable ) {
                document.querySelector('html').classList.remove('non-scroll');
            }
        }
    }, [isNavOpen])

    const toggle = () => {
        setIsNavOpen(v => !v);
    }

    return [ isNavOpen, toggle ];
}