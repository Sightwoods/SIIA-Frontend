import React from 'react'
import { Layout } from '../../components/layout/Layout'

export const TestRequestScreen = () => {
    return (
        <Layout>
            <div>
                <div>
                    <div>
                        <h5>Imprimir Solicitud de Examen</h5>
                        <hr/>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Clave</th>
                                    <th>Escuela</th>
                                    <th>Carrera</th>
                                    <th>Plan de Estudio</th>
                                    <th>Periodo</th>
                                    <th>Grupo</th>
                                    <th>Vigencia</th>
                                    <th>Numero de Escuela</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}