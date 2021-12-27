import { BarsCross } from '../BarsCross';

export const NavbarToggler = ({handleClick, isNavOpen}) => {
    return (
        <button
            className="navbar-toggler | p-0 | border-0 | btn-toggle"
            type="button"
            id="navbarSideCollapse" 
            caria-label="Toggle navigation"
            onClick={handleClick} 
        >
            <BarsCross isNavOpen={isNavOpen}/>
        </button>
    )
}