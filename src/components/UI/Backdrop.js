import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import { AuthContext } from '../../auth/AuthContext';

export const Backdrop = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 991.92px)' });
    const { isNavOpen, toggle } = useContext(AuthContext);

    return (isMobile && isNavOpen ) 
    && 
    <div id="backdrop" onClick={ toggle }></div>
}
