import React from 'react'
import { Layout } from '../../components/layout/Layout'

export const ClassScheduleScreen = () =>{
    return (
        <Layout>
            <div>
                <div>
                    <h5>Horario de Clases</h5>
                    <hr/>
                </div>
                <div>
                    <table className="tabla">
                        <thead className='cabecera'>
                            <tr className='fila'>
                                <th className='columna'>Clave</th>
                                <th className='columna'>Materia</th>
                                <th className='columna'>Lunes</th>
                                <th className='columna'>Martes</th>
                                <th className='columna'>Miercoles</th>
                                <th className='columna'>Jueves</th>
                                <th className='columna'>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='fila'>
                                <th className='columna'>1</th>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                            </tr>
                            <tr className='fila'>
                                <th className='columna'>2</th>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                            </tr>
                            <tr className='fila'> 
                                <th className='columna'>3</th>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                            </tr>
                            <tr className='fila'>
                                <th className='columna'>4</th>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                            </tr>
                            <tr className='fila'>
                                <th className='columna'>5</th>
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