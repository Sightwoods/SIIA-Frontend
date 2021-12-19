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
                            <thead className='cabecera'>
                                <tr className='fila'>
                                    <th className='columna'>Clave</th>
                                    <th className='columna'>Escuela</th>
                                    <th className='columna'>Carrera</th>
                                    <th className='columna'>Plan de Estudio</th>
                                    <th className='columna'>Periodo</th>
                                    <th className='columna'>Grupo</th>
                                    <th className='columna'>Vigencia</th>
                                    <th className='columna'>Numero de Escuela</th>
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
                                    <td className='campo'><input type="text"></input></td>
                                    <td className='campo'><input type="text"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}