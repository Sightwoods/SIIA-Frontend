import React from 'react'
import { Layout } from '../../components/layout/Layout'

export const TestRequestScreen = () => {
    return (
        <Layout>
                <div className='container'>
                        <h5 id='titulo'>Imprimir Solicitud de Examen</h5>
                        <hr/>
                    <div className='table-responsive'>
                        <table className='table' id='tabla'>
                            <thead id='tcabecera'>
                                <tr>
                                    <th scope='col'>Clave</th>
                                    <th scope='col'>Escuela</th>
                                    <th scope='col'>Carrera</th>
                                    <th scope='col'>Plan de Estudio</th>
                                    <th scope='col'>Periodo</th>
                                    <th scope='col'>Grupo</th>
                                    <th scope='col'>Vigencia</th>
                                    <th scope='col'>Numero de Escuela</th>
                                </tr>
                            </thead>
                            <tbody id='tcuerpo'>
                                <tr>
                                   <th scope='row'>2700</th> 
                                   <td>Facultad de Informatica Culiacan</td>
                                   <td>Licenciatura en Informatica</td>
                                   <td>4</td>
                                   <td>7</td>
                                   <td>2</td>
                                   <td>Activo</td>
                                   <td>0001</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </Layout>
    );
}