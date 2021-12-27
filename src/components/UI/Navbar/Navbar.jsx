import { useNav } from '../../../hooks/useNav';

import { Backdrop } from '../Backdrop';
import { NavProfile } from './Offcanva-Mobile/NavProfile';
import { NavbarBrand } from "./NavbarBrand";
import { NavbarContent } from './NavbarContent';
import { NavbarToggler } from './NavbarToggler';


export const NavigationBar = () => {    
    const [ isNavOpen, toggle ] = useNav(false);
    const handleClick = () => toggle();

    return (
        <nav className="navbar | navbar-expand-lg | fixed-top | navbar-uas" aria-label="Main navigation">     
            <div className="container-fluid">
                <NavbarToggler handleClick={handleClick} isNavOpen={isNavOpen} />
                <NavbarBrand />
                <NavbarContent isNavOpen={isNavOpen} />
                <NavProfile handleClick={handleClick} />
            </div>
            <Backdrop isNavOpen={isNavOpen} onClick={toggle}/>
        </nav>
    )
};