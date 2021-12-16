import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useNav = ( initialState = {}) => {

    const [isNavOpen, setIsNavOpen] = useState( initialState );
    const isMobile = useMediaQuery({ query: '(max-width: 991.92px)' });
    

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

    useEffect(() => {
        setIsNavOpen(false);
    }, [isMobile])

    useEffect(() => {
        setIsNavOpen(false);
    }, [])

    const toggle = () => {
        (isNavOpen)
        ? setIsNavOpen(false)
        : setIsNavOpen( true )
    }

    return [ isNavOpen, toggle ];
}