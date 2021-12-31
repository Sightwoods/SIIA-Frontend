import { Layout } from '../../components/layout/Layout';

export const HorarioClases = () =>{
    return (
        <Layout>
            <div className='container '>
            <h5 id='titulo'>Horario de Clases</h5>
                <div className=' table-responsive'>
                    <table className="table table-hover table-borderless tabla">
                        <thead className='tcabecera'>
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
                        <tbody className='tcuerpo'>
                            <tr>
                                <td data-label="Clave">1</td>
                                <td data-label="Materia">LENGUAJES AUTÓMATAS Y COMPLEJIDAD</td>
                                <td data-label="Mestro">GASTELUM CHAVIRA DIEGO ALONSO</td>
                                <td data-label="Lunes">18:00-19:00</td>
                                <td data-label="Martes">18:00-19:00</td>
                                <td data-label="Miercoles">18:00-19:00</td>
                                <td data-label="Jueves">18:00-19:00</td>
                                <td data-label="Viernes">18:00-19:00</td>
                            </tr>
                            <tr>
                                <td data-label="Clave" >2</td>
                                <td data-label="Materia">ADMINISTRACIÓN DE PROYECTOS DE SOFTWARE</td>
                                <td data-label="Mestro">MORENO CANDIL ELVA CRISTINA </td>
                                <td data-label="Lunes">18:00-19:00</td>
                                <td data-label="Martes">18:00-19:00</td>
                                <td data-label="Miercoles">18:00-19:00</td>
                                <td data-label="Jueves">18:00-19:00</td>
                                <td data-label="Viernes">18:00-19:00</td>
                            </tr>
                            <tr>
                                <td data-label="Clave" >3</td>
                                <td data-label="Materia">INNOVACIÓN TECNOLÓGICA</td>
                                <td data-label="Mestro">LOPEZ CERVANTES EDY</td>
                                <td data-label="Lunes">18:00-19:00</td>
                                <td data-label="Martes">18:00-19:00</td>
                                <td data-label="Miercoles">18:00-19:00</td>
                                <td data-label="Jueves">18:00-19:00</td>
                                <td data-label="Viernes">18:00-19:00</td>
                            </tr>
                            <tr>
                                <td data-label="Clave">4</td>
                                <td data-label="Materia">PROGRAMACIÓN DE INTERFACES WEB</td>
                                <td data-label="Mestro">GARCIA CARLOS RODRIGO</td>
                                <td data-label="Lunes">18:00-19:00</td>
                                <td data-label="Martes">18:00-19:00</td>
                                <td data-label="Miercoles">18:00-19:00</td>
                                <td data-label="Jueves">18:00-19:00</td>
                                <td data-label="Viernes">18:00-19:00</td>
                            </tr>
                            <tr>
                                <td data-label="Clave">5</td>
                                <td data-label="Materia">INFRAESTRUCTURA INFORMÁTICA</td>
                                <td data-label="Mestro">ESTRADA CASTANEDA ERIKA</td>
                                <td data-label="Lunes">18:00-19:00</td>
                                <td data-label="Martes">18:00-19:00</td>
                                <td data-label="Miercoles">18:00-19:00</td>
                                <td data-label="Jueves">18:00-19:00</td>
                                <td data-label="Viernes">18:00-19:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}