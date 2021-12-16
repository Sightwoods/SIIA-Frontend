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
                        <thead className='cabecera'> 
                            <tr className='fila'>
                                <th className='columna'>Materia</th>
                                <th className='columna'>Escuela</th>
                                <th className='columna'>Carrera</th>
                                <th className='columna'>Ciclo de Ingreso</th>
                                <th className='columna'>Periodo</th>
                                <th className='columna'>Grupo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='fila'>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}