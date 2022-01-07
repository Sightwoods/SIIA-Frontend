import { Spinner } from 'react-bootstrap';
import { Layout } from '../../components/layout/Layout';
import { useFetch } from '../../hooks/useFetch';

export const HistorialAcademico = () => {

    const [ data, error, isLoading ] = useFetch('users/academic_record');

    return (
        <Layout>
            <div className='container'>
                <div>
                    <h5 id='titulo' className='mt-4'>Historial Academico</h5>
                    <hr/>
                    <h5 id='titulo'>Semestre 7</h5>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover table-borderless tabla-historial'>
                        <thead>
                            <tr > 
                                <th scope='col'>Materia</th>
                                <th scope='col'>Calificacion</th>
                                <th scope='col'>Tipo de Examen</th>
                                <th scope='col'>Fecha de Examen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (!isLoading)
                                ?
                                    (!error)
                                    ?
                                    data.map((e, i) => (
                                        <tr key={i}>
                                            <td data-label="Materia">{e.school_subject}</td>
                                            <td data-label="Calificacion">{e.grade}</td>
                                            <td data-label="Tipo de Examen">{e.test_type}</td>
                                            <td data-label="Fecha de Examen">{e.test_date}</td>
                                        </tr>
                                    ))
                                    :
                                    <tr><td>{error.message}</td></tr>
                                :
                                <tr><td><Spinner className="request_spinner" animation="border" /></td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}