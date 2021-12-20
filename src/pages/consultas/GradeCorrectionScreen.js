import React from 'react'
import { Layout } from '../../components/layout/Layout'

export const GradeCorrectionScreen = () => {
    return (
        <Layout>
            <div className='container'>
                <h5 id='titulo'>Coorecion de Calificacion</h5>
                <hr/>
                <div className='table-responsive'>
                    <table className='table' id='tabla'>
                        <thead id='tcabecera'> 
                            <tr >
                                <th scope='col'>Materia</th>
                                <th scope='col'>Escuela</th>
                                <th scope='col'>Carrera</th>
                                <th scope='col'>Ciclo de Ingreso</th>
                                <th scope='col'>Periodo</th>
                                <th scope='col'>Grupo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th scope='row'>Infraestructura Informatica</th>
                                <td>Facultad de Informatica Culiacan</td>
                                <td>Licenciatura en Informatica</td>
                                <td>2020-2021</td>
                                <td>7</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}