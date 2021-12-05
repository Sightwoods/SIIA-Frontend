import React from 'react'
import { Table } from 'react-bootstrap';
import { Layout } from '../../components/layout/Layout'
import { image } from "../../helpers/image";

export const StudentInfoScreen = () => {
    return (
        <Layout>
            <div className="titulo">
                <h2>Datos generales</h2>
                <hr/>
            </div>
            <div className="principal">
                <div>
                    <img
                    className="fotoPerfil"
                    src={ image('./UAS.png').default }
                    alt="foto de perfil"
                    ></img>
                </div>
                <div className="tablas">
                    <h5>DATOS DEL ALUMNO</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="tablas">
                    <h5>DATOS DEL PADRE O TUTOR</h5>
                    <table>
                        <tr>
                            <th>Padre</th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>No. Padre</th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>Calle</th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>Colonia</th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>Codigo Postal</th>
                            <th><input type="text"></input></th>
                        </tr><tr>
                            <th>Poblacion</th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>Telefono</th>
                            <th><input type="text"></input></th>
                        </tr>
                    </table>
                    <br/>
                    <h5>ESTUDIOS</h5>
                    <table>
                        <tr>
                            <th>Escuela</th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>Carrera</th>
                            <th><input type="text"></input></th>
                        </tr><tr>
                            <th>Plan de estudios</th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th>Periodo</th>
                            <th><input type="text"></input></th>
                        </tr><tr>
                            <th>Grupo</th>
                            <th><input type="text"></input></th>
                        </tr><tr>
                            <th>Vigencia</th>
                            <th><input type="text"></input></th>
                        </tr>
                    </table>
                </div>
                {/*<div className="tablas">
                    <h5>ESTUDIOS</h5>
                   
                </div>
                */}
            </div>
        </Layout>
    )
}
