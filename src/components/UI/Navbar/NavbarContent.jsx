// import { NavProfile } from '../Profile/NavProfile';
import { NavItem } from './NavItem';

import * as routes from '../../../routers/routes.json';

const { 
    consultas,
    tramites,
    reinscripcion,
    examenes,
    idiomas,
    encuestas
} = routes;

export const NavbarContent = ({isNavOpen}) => {
    return (
        <div
            className={`navbar-collapse | offcanvas-collapse | justify-content-end | canva-uas | animate__animated animate__fadeIn animate__faster | ${ (isNavOpen) ? 'open' : ''}`}
            id="navbar"
        >
            <div className='canvasMenu_main_title'>
                <span>Menú</span>
                <hr className='uas-divider' />
            </div>
            <ul className="navbar-nav | mb-lg-0">
                <NavItem route={ consultas }     icon="fas fa-search"/>
                <NavItem route={ reinscripcion } icon="fas fa-user-graduate"/>
                <NavItem route={ tramites }      icon="fas fa-file-invoice"/>
                <NavItem route={ examenes }      icon="far fa-edit"/>
                <NavItem route={ idiomas }       icon="fas fa-globe"/>
                <NavItem route={ encuestas }     icon="fas fa-poll"/>
            </ul>
        </div>
    )
}
