import React from 'react'
import { Layout } from '../../components/layout/Layout'

export const GradeCorrectionScreen = () => {
    return (
        <Layout>
            <div>
                <div>
                    <h5>Coorecion de Calificacion</h5>
                    <hr/>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Escuela</th>
                                <th>Carrera</th>
                                <th>Ciclo de Ingreso</th>
                                <th>Periodo</th>
                                <th>Grupo</th>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}