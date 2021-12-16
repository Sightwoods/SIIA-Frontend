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
                    <table className='tab'>
                        <thead className='cabecera'>
                            <tr className='fila'> 
                                <th className='columna'>Materia</th>
                                <th className='columna'>Calificacion</th>
                                <th className='columna'>Tipo de Examen</th>
                                <th className='columna'>Fecha de Examen</th>
                                <th className='columna'>Folio de calificacion</th>
                                <th className='columna'>Ordinario</th>
                                <th className='columna'>Numero de escuela</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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
                <div>
                <table>
                        <thead className='cabecera'>
                            <tr className='fila'>
                                <th className='columna'>Materia</th>
                                <th className='columna'>Grupo</th>
                                <th className='columna'>Periodo</th>
                                <th className='columna'>Calificacion</th>
                                <th className='columna'>Tipo de Examen</th>
                                <th className='columna'>Fecha de Examen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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