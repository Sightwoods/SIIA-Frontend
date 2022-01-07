import { NavbarContent } from './NavbarContent';
import { NavProfile } from './Offcanva-Mobile/NavProfile';

export const NavbarAddOns = ({handleClick, isNavOpen}) => {
    return (
        <>
            <NavbarContent isNavOpen={isNavOpen} />
            <NavProfile />   
        </>
    )
}
