import { Layout } from '../../components/layout/Layout';

export const HistorialAcademico = () => {
    return (
        <Layout>
            <div className='container'>
                <div>
                    <h5 id='titulo'>Historial Academico</h5>
                    <hr/>
                    <h5 id='titulo'>Semestre 1</h5>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover table-borderless tabla-historial'>
                        <thead>
                            <tr > 
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
                                <td data-label="Materia">ARQUITECTURA DE COMPUTADORAS</td>
                                <td data-label="Calificacion">10</td>
                                <td data-label="Tipo de Examen">ORD</td>
                                <td data-label="Fecha de Examen">20/12/2018</td>
                                <td data-label="Folio de calificacion">-</td>
                                <td data-label="Ordinario">O</td>
                                <td data-label="Numero de escuela">2700</td>
                            </tr>
                            <tr>
                                <td data-label="Materia">DESARROLLO ORGANIZACIONAL</td>
                                <td data-label="Calificacion">8</td>
                                <td data-label="Tipo de Examen">ORD</td>
                                <td data-label="Fecha de Examen">20/12/2018</td>
                                <td data-label="Folio de calificacion">-</td>
                                <td data-label="Ordinario">O</td>
                                <td data-label="Numero de escuela">2700</td>
                            </tr>
                            <tr>
                                <td data-label="Materia">DESARROLLO DE HABILIDADES COGNITIVAS</td>
                                <td data-label="Calificacion">9</td>
                                <td data-label="Tipo de Examen">ORD</td>
                                <td data-label="Fecha de Examen">20/12/2018</td>
                                <td data-label="Folio de calificacion">-</td>
                                <td data-label="Ordinario">O</td>
                                <td data-label="Numero de escuela">2700</td>
                            </tr>
                            <tr>
                                <td data-label="Materia">MATEMÁTICAS DISCRETAS</td>
                                <td data-label="Calificacion">9</td>
                                <td data-label="Tipo de Examen">ORD</td>
                                <td data-label="Fecha de Examen">20/12/2018</td>
                                <td data-label="Folio de calificacion">-</td>
                                <td data-label="Ordinario">O</td>
                                <td data-label="Numero de escuela">2700</td>
                            </tr>
                            <tr>
                                <td data-label="Materia">ALGORITMIA</td>
                                <td data-label="Calificacion">8</td>
                                <td data-label="Tipo de Examen">ORD</td>
                                <td data-label="Fecha de Examen">20/12/2018</td>
                                <td data-label="Folio de calificacion">-</td>
                                <td data-label="Ordinario">O</td>
                                <td data-label="Numero de escuela">2700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}