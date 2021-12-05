import { useContext } from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown/Dropdown";
import { LinkGroup } from "./Dropdown/LinkGroup";
import { Navlink } from "./Dropdown/Navlink";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = props => {

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
    }

    return (
        <nav className="navbar d-flex justify-content-center align-items-center">
            <Link to="/"><Button className="navbutton"><i className="d-block fas fa-home"></i>Inicio</Button></Link>
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
            <Dropdown name="Tramites" icon="far fa-edit">
                <LinkGroup title="Movimientos">
                    <Navlink to="/tramites/movimientos/generar-pago">Generar formato de pago</Navlink>
                    <Navlink to="/tramites/movimientos/estado-tramites">Estado de trámite</Navlink>
                    <Navlink to="/tramites/movimientos/pagar">Pago en línea</Navlink>
                </LinkGroup>
                <LinkGroup title="Solicitudes">
                    <Navlink to="/tramites/solicitud/certificado">Solicitud de certificado</Navlink>
                    <Navlink to="/tramites/solicitud/titulo">Solicitud de título</Navlink>
                    <Navlink to="/tramites/solicitud/cambio-unidad">Solicitud de cambio de unidad académica</Navlink>
                </LinkGroup>
            </Dropdown>
            <Dropdown name="Reinscripción" icon="fas fa-user-graduate">
                <LinkGroup>
                    <Navlink to="/reinscripcion/expediente/guia">Guía</Navlink>
                    <Navlink to="/reinscripcion/expediente/formatos">Imprimir formatos</Navlink>
                    <Navlink to="/reinscripcion/expediente/carta-autorizacion">Carta autorización</Navlink>
                    <Navlink to="/reinscripcion/expediente/datos-contacto">Datos de contacto</Navlink>
                    <Navlink to="/reinscripcion/expediente/fotografia">Actualizar fotografía</Navlink>
                    <Navlink to="/reinscripcion/certificado-medico">Certificado médico</Navlink>
                </LinkGroup>
            </Dropdown>
            <Dropdown name="Examenes" icon="far fa-sticky-note">
                <LinkGroup>
                    <Navlink to="/examenes/solicitud">Solicitar examén</Navlink>
                    <Navlink to="/examenes/hoja-pago">Imprimir de hoja de pago</Navlink>
                    <Navlink to="/examenes/materias-solicitadas">Imprimir materias solicitadas</Navlink>
                    <Navlink to="/examenes/pagos">Pagos</Navlink>
                </LinkGroup>
            </Dropdown>
            <Dropdown name="Idiomas" icon="fas fa-globe">
                <LinkGroup title="Reinscripcion">
                    <Navlink to="/idiomas/reinscripcion/hoja-pago">Solicitar hoja de pago de reinscripción</Navlink>
                    <Navlink to="/idiomas/reinscripcion/asignacion">Asignar grupo y aula de clases</Navlink>
                    <Navlink to="/idiomas/reinscripcion/estado">Estado de tu reinscripción</Navlink>
                </LinkGroup>
                <LinkGroup title="Impresiones">
                    <Navlink to="/idiomas/documentos/hoja-pago">Imprimir hoja de pago</Navlink>
                    <Navlink to="/idiomas/documentos/constancia">Imprimir de constancia de reinscripción</Navlink>
                    <Navlink to="/idiomas/documentos/constancia-pago">Imprimir constancia de pago de reinscripción</Navlink>
                </LinkGroup>
            </Dropdown>
            <Dropdown name="Encuestas" icon="fas fa-poll">
                <LinkGroup>
                    <Navlink to="/encuestas/docente">Evaluación docente</Navlink>
                    <Navlink to="/encuestas/edaom">EDAOM</Navlink>
                </LinkGroup>
            </Dropdown>
            <Link to="/#"><Button onClick={handleLogout} className="navbutton"><i className="d-block fas fa-user"></i>Mi perfil</Button></Link>
        </nav>
    )
};