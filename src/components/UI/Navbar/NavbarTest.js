import { useRef } from "react";
import { Link } from 'react-router-dom';

import { image } from '../../../helpers/image';
import { NavItem } from "./NavItem";

import { consultas, tramites, reinscripcion, examenes, idiomas, encuestas } from '../../../routers/routes.json';
import { NavProfile } from "../Profile/NavProfile";

export const NavigationBar = () => {
    const offcanvas = useRef(null);
    const handleClick = () => {
        offcanvas.current.classList.toggle('open');
        document.getElementById('html').style.overflow = "hidden";
        document.getElementById('backdrop').classList.toggle('non-backdrop');
    }

    return (
        <nav className="navbar | navbar-expand-lg | fixed-top | navbar-uas" aria-label="Main navigation">
            <div className="container-fluid">
                <Link className="navbar-brand | p-1" to="/">
                    <img
                        src={image('./UAS.png').default}
                        alt="UAS logo"
                        width="25"
                        height="30"
                        className="d-inline-block | align-text-top" />{' '}
                    <span className="title | d-lg-inline-block | d-none">Universidad Autonoma de Sinaloa</span>
                    <span className="title | d-inline-block | d-lg-none">UAS - Alumnos</span>
                </Link>
                <button
                    className="navbar-toggler | p-0 | border-0 | btn-toggle"
                    type="button"
                    id="navbarSideCollapse" 
                    caria-label="Toggle navigation"
                    onClick={handleClick} 
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="navbar-collapse | offcanvas-collapse | justify-content-end | canva-uas" id="navbarsExampleDefault" ref={offcanvas} data-bs-backdrop="true" >
                    <ul className="navbar-nav | mb-lg-0">
                        <NavProfile />
                        <NavItem route={ consultas }     icon="fas fa-search"/>
                        <NavItem route={ reinscripcion } icon="fas fa-user-graduate"/>
                        <NavItem route={ tramites }      icon="fas fa-file-invoice"/>
                        <NavItem route={ examenes }      icon="far fa-edit"/>
                        <NavItem route={ idiomas }       icon="fas fa-globe">Idiomas</NavItem>
                        <NavItem route={ encuestas }     icon="fas fa-poll">Encuestas</NavItem>
                    </ul>
                </div>
            </div>
        </nav>
    )
};