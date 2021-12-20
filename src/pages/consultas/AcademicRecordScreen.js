import React from 'react'
import { Layout } from '../../components/layout/Layout'

export const AcademicRecordScreen = () => {
    return (
        <Layout>
            <div className='container'>
                <div>
                    <h5 id='titulo'>Historial Academico</h5>
                    <hr/>
                    <h5 id='titulo'>Semestre 1</h5>
                </div>
                <div className='table-responsive'>
                    <table className='table' id='tabla'>
                        <thead id='tcabecera'>
                            <tr> 
                                <th scope='col'>Materia</th>
                                <th scope='col'>Calificacion</th>
                                <th scope='col'>Tipo de Examen</th>
                                <th scope='col'>Fecha de Examen</th>
                                <th scope='col'>Folio de calificacion</th>
                                <th scope='col'>Ordinario</th>
                                <th scope='col'>Numero de escuela</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>ARQUITECTURA DE COMPUTADORAS</th>
                                <td>10</td>
                                <td>ORD</td>
                                <td>20/12/2018</td>
                                <td>-</td>
                                <td>O</td>
                                <td>2700</td>
                            </tr>
                            <tr>
                                <th scope='row'>DESARROLLO ORGANIZACIONAL</th>
                                <td>8</td>
                                <td>ORD</td>
                                <td>20/12/2018</td>
                                <td>-</td>
                                <td>O</td>
                                <td>2700</td>
                            </tr>
                            <tr>
                                <th scope='row'>DESARROLLO DE HABILIDADES COGNITIVAS</th>
                                <td>9</td>
                                <td>ORD</td>
                                <td>20/12/2018</td>
                                <td>-</td>
                                <td>O</td>
                                <td>2700</td>
                            </tr>
                            <tr>
                                <th scope='row'>MATEMÁTICAS DISCRETAS</th>
                                <td>9</td>
                                <td>ORD</td>
                                <td>20/12/2018</td>
                                <td>-</td>
                                <td>O</td>
                                <td>2700</td>
                            </tr>
                            <tr>
                                <th scope='row'>ALGORITMIA</th>
                                <td>8</td>
                                <td>ORD</td>
                                <td>20/12/2018</td>
                                <td>-</td>
                                <td>O</td>
                                <td>2700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}