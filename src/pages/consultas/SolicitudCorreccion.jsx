import { Layout } from '../../components/layout/Layout';

export const SolicitudCorreccion = () => {
    return (
        <Layout>
            <div className='container'>
                <h5 id='titulo'>Correcion de Calificacion</h5>
                <hr/>
                <div className='table-responsive'>
                    <table className='table table-hover table-borderless tabla'>
                        <thead className='tcabecera'> 
                            <tr >
                                <th scope='col'>Materia</th>
                                <th scope='col'>Escuela</th>
                                <th scope='col'>Carrera</th>
                                <th scope='col'>Ciclo de Ingreso</th>
                                <th scope='col'>Periodo</th>
                                <th scope='col'>Grupo</th>
                            </tr>
                        </thead>
                        <tbody className='tcuerpo'>
                            <tr >
                                <td data-label="Materia">Infraestructura Informatica</td>
                                <td data-label="Escuela">Facultad de Informatica Culiacan</td>
                                <td data-label="Carrera">Licenciatura en Informatica</td>
                                <td data-label="Ciclo de Ingreso">2020-2021</td>
                                <td data-label="Periodo">7</td>
                                <td data-label="Grupo">2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}