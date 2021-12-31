import { Layout } from '../../components/layout/Layout';

export const CargaAcademica = () =>{
    return (
        <Layout>
            <div className='container'>
                <div className='table-responsive'>
                <h5 className='titulo'>Carga Académica</h5>
                <hr/>
                <h5 className='titulo'>Facultad de Informatica Culiacan</h5>
                <table className="table table-hover table-borderless tabla">
                    <thead className='tcabecera'>
                        <tr>
                            <th scope="col">Clave</th>
                            <th scope="col">Materia</th>
                            <th scope="col">Plan de Estudios</th>
                            <th scope="col">Periodo</th>
                            <th scope="col">Grupo</th>
                        </tr>
                    </thead>
                    <tbody className='tcuerpo'>
                        <tr>
                            <td data-label="Clave" >1</td>
                            <td data-label="Materia">LENGUAJES AUTÓMATAS Y COMPLEJIDAD</td>
                            <td data-label="Plan de Estudios">4</td>
                            <td data-label="Periodo">7</td>
                            <td data-label="Grupo">2</td>
                        </tr>
                        <tr>
                            <td data-label="Clave" >2</td>
                            <td data-label="Materia">ADMINISTRACIÓN DE PROYECTOS DE SOFTWARE</td>
                            <td data-label="Plan de Estudios">4</td>
                            <td data-label="Periodo">7</td>
                            <td data-label="Grupo">2</td>
                        </tr>
                        <tr>
                            <td data-label="Clave" >3</td>
                            <td data-label="Materia">INNOVACIÓN TECNOLÓGICA</td>
                            <td data-label="Plan de Estudios">4</td>
                            <td data-label="Periodo">7</td>
                            <td data-label="Grupo">2</td>
                        </tr>
                        <tr>
                            <td data-label="Clave">4</td>
                            <td data-label="Materia">PROGRAMACIÓN DE INTERFACES WEB</td>
                            <td data-label="Plan de Estudios">4</td>
                            <td data-label="Periodo">7</td>
                            <td data-label="Grupo">2</td>
                        </tr>
                        <tr>
                            <td data-label="Clave">5</td>
                            <td data-label="Materia">INFRAESTRUCTURA INFORMÁTICA</td>
                            <td data-label="Plan de Estudios">4</td>
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