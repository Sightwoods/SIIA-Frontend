import { useMediaQuery } from 'react-responsive';

export const Backdrop = ({isNavOpen, onClick}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 991.92px)' });

    return (isMobile && isNavOpen ) 
    && 
    <div id="backdrop" onClick={onClick}></div>
}
