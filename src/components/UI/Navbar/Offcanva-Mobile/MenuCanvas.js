import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { NavButton } from '../NavButton'

export const MenuCanvas = () => {
    const ref = useRef(null);

    const openMenu = () => {
        ref.current.classList.add('open');
    }
    
    const closeMenu = () => {
        ref.current.classList.remove('open');
    }

    return (
        <div>
            <NavButton 
                icon="fas fa-search"
                onClick={openMenu}
            >
                Consultas
            </NavButton>
            <div className="canvasMenu | canva-uas" id="section" ref={ref}>
                <div className="canvasMenu__main">
                    <span className="canvasMenu__title">Consultas</span>
                    <button className="canvasMenu__back" onClick={closeMenu}><i className="fas fa-arrow-left"></i></button>
                </div>
                <hr className="uas-divider"/>
                <ul className="navbar-nav | mb-lg-0">
                    <li className="canvasMenu__section">
                        <ul className="canvasMenu__content">
                            <span className="canvasMenu__subtitle">Estudiante</span>
                            <li className="nav-item">
                                <Link 
                                    className="menuCanvas__link"
                                    to="/consultas/datos-generales"
                                >
                                    <NavButton>Datos generales</NavButton>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="menuCanvas__link"
                                    to="/consultas/datos-generales"
                                >
                                    <NavButton>Carga académicas</NavButton>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="menuCanvas__link"
                                    to="/consultas/datos-generales"
                                >
                                    <NavButton>Horario de clases</NavButton>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="menuCanvas__link"
                                    to="/consultas/datos-generales"
                                >
                                    <NavButton>Historial academico</NavButton>
                                </Link>
                            </li>
                            <span className="canvasMenu__subtitle">Movimientos</span>
                            <li className="nav-item">
                                <Link 
                                    className="menuCanvas__link"
                                    to="/consultas/datos-generales"
                                >
                                    <NavButton>Imprimir solicitud de examen</NavButton>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="menuCanvas__link"
                                    to="/consultas/datos-generales"
                                >
                                    <NavButton>Correción de calificación</NavButton>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="menuCanvas__link"
                                    to="/consultas/datos-generales"
                                >
                                    <NavButton>Constancia de kardex</NavButton>
                                </Link>
                            </li>
                            <div className="canvasMenu__end"></div>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
