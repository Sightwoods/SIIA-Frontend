import { Layout } from '../../components/layout/Layout';

export const HorarioClases = () =>{
    return (
        <Layout>
            <div className='container '>
            <h5 id='titulo'>Horario de Clases</h5>
                <div className=' table-responsive'>
                    <table className="table table-hover table-borderless" id='tabla'>
                        <thead id='tcabecera'>
                            <tr>
                                <th scope='col'>Clave</th>
                                <th scope='col'>Materia</th>
                                <th scope='col'>Maestro</th>
                                <th scope='col'>Lunes</th>
                                <th scope='col'>Martes</th>
                                <th scope='col'>Miercoles</th>
                                <th scope='col'>Jueves</th>
                                <th scope='col'>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>LENGUAJES AUTÓMATAS Y COMPLEJIDAD</td>
                                <td>GASTELUM CHAVIRA DIEGO ALONSO</td>
                                <td>18:00-19:00</td>
                                <td>18:00-19:00</td>
                                <td>18:00-19:00</td>
                                <td>18:00-19:00</td>
                                <td>18:00-19:00</td>
                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>ADMINISTRACIÓN DE PROYECTOS DE SOFTWARE</td>
                                <td>MORENO CANDIL ELVA CRISTINA </td>
                                <td>16:00-17:00</td>
                                <td>16:00-17:00</td>
                                <td>16:00-17:00</td>
                                <td>16:00-17:00</td>
                                <td>16:00-17:00</td>
                            </tr>
                            <tr>
                                <th scope='row'>3</th>
                                <td>INNOVACIÓN TECNOLÓGICA</td>
                                <td>LOPEZ CERVANTES EDY</td>
                                <td>19:00-20:00</td>
                                <td>19:00-20:00</td>
                                <td>19:00-20:00</td>
                                <td>19:00-20:00</td>
                                <td>19:00-20:00</td>
                            </tr>
                            <tr>
                                <th scope='row'>4</th>
                                <td>PROGRAMACIÓN DE INTERFACES WEB</td>
                                <td>GARCIA CARLOS RODRIGO</td>
                                <td>15:00-16:00</td>
                                <td>15:00-16:00</td>
                                <td>15:00-16:00</td>
                                <td>15:00-16:00</td>
                                <td>15:00-16:00</td>
                            </tr>
                            <tr>
                                <th scope='row'>5</th>
                                <td>INFRAESTRUCTURA INFORMÁTICA</td>
                                <td>ESTRADA CASTANEDA ERIKA</td>
                                <td>17:00-18:00</td>
                                <td>17:00-18:00</td>
                                <td>17:00-18:00</td>
                                <td>17:00-18:00</td>
                                <td>17:00-18:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}