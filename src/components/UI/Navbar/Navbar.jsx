import { useNav } from '../../../hooks/useNav';

import { Backdrop } from '../Backdrop';
import { NavbarBrand } from './NavbarBrand';
import { NavbarToggler } from './NavbarToggler';
import { NavbarAddOns } from './NavbarAddOns';
import { NavbarDefaultOptions } from './NavbarDefaultOptions';

export const Navbar = ({isPrivate}) => {    
    const [ isNavOpen, toggle ] = useNav(false);
    const handleClick = () => toggle();
    
    return (
        <nav className="navbar | navbar-expand-lg | fixed-top | navbar-uas" aria-label="Main navigation">     
            <div className="container-fluid">
                {
                    (isPrivate)
                    &&
                    <NavbarToggler handleClick={handleClick} isNavOpen={isNavOpen} />
                }
                <NavbarBrand />
                {
                    (isPrivate)
                    ?
                    <NavbarAddOns handleClick={handleClick} isNavOpen={isNavOpen} />
                    :
                    <NavbarDefaultOptions />
                }
            </div>
            <Backdrop isNavOpen={isNavOpen} onClick={toggle}/>
        </nav>
    )
};