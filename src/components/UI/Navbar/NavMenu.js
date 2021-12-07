import React from 'react'
import { isMobile } from '../../../helpers/device-size'
import { Dropdown } from '../Dropdown/Dropdown'
import { LinkGroup } from '../Dropdown/LinkGroup'
import { Navlink } from '../Dropdown/Navlink'
import { MenuCanvas } from './Offcanva-Mobile/MenuCanvas'

export const NavMenu = () => {
    return (
        <li className="nav-item">
            {
                ( !isMobile() )
                ?
                    <Dropdown name="Consultas" icon="fas fa-search">
                        <LinkGroup title="Estudiante">
                            <Navlink to="/consultas/datos-generales">Datos generales</Navlink>
                            <Navlink to="/consultas/credencial-digital">Credencial digital de estudios</Navlink>
                            <Navlink to="/consultas/carga-academica">Carga académica</Navlink>
                            <Navlink to="/consultas/horario-clases">Horario de clases</Navlink>
                            <Navlink to="/consultas/historial-academico">Historia académico</Navlink>
                        </LinkGroup>
                        <LinkGroup title="Movimientos">
                            <Navlink to="/consultas/impresion-solicitud-examen">Imprimir solicitud de examen</Navlink>
                            <Navlink to="/consultas/correccion-calificacion">Correción de calificación</Navlink>
                            <Navlink to="/consultas/kardex">Constancia de kardex</Navlink>
                        </LinkGroup>
                    </Dropdown>
                :
                <MenuCanvas />
            }
        </li>
    )
}
