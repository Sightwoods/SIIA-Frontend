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
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='col'>Clave</th>
                                <th className='col'>Materia/Maestro</th>
                                <th className='col'>Lunes</th>
                                <th className='col'>Martes</th>
                                <th className='col'>Miercoles</th>
                                <th className='col'>Jueves</th>
                                <th className='col'>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='row'>1</th>
                                <td>
                                    LENGUAJES AUTÓMATAS Y COMPLEJIDAD
                                    GASTELUM CHAVIRA DIEGO ALONSO
                                </td>
                                <td>18-19</td>
                                <td>18-19</td>
                                <td>18-19</td>
                                <td>18-19</td>
                                <td>18-19</td>
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