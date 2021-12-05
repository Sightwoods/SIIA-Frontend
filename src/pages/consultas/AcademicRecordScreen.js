import React from 'react'
import { Layout } from '../../components/layout/Layout'

export const AcademicRecordScreen = () => {
    return (
        <Layout>
            <div>
                <div>
                    <h5>Historial Academico</h5>
                    <hr/>
                </div>
                <div>
                    <h5>Periodo</h5>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Calificacion</th>
                                <th>Tipo de Examen</th>
                                <th>Fecha de Examen</th>
                                <th>Folio de calificacion</th>
                                <th>Ordinario</th>
                                <th>Numero de escuela</th>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Grupo</th>
                                <th>Periodo</th>
                                <th>Calificacion</th>
                                <th>Tipo de Examen</th>
                                <th>Fecha de Examen</th>
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