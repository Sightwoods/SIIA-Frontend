import { Spinner } from 'react-bootstrap';
import { Layout } from '../../components/layout/Layout';
import { useFetch } from '../../hooks/useFetch';

export const CargaAcademica = () =>{

    const [ data, error, isLoading ] = useFetch('users/subjects');

    return (
        <Layout>
            <div className='container'>
                <div className='table-responsive'>
                <h5 className='titulo mt-4 fs-5'>Carga Académica</h5>
                <hr/>
                <h5 className='titulo fs-5'>Facultad de Informatica Culiacan</h5>
                <table className="table table-hover table-borderless tabla">
                    <thead className='tcabecera'>
                        <tr>
                            <th scope="col">Clave</th>
                            <th scope="col">Materia</th>
                            <th scope="col">Plan de Estudios</th>
                            <th scope="col">Grupo</th>
                        </tr>
                    </thead>
                    <tbody className='tcuerpo'>
                        {
                            (!isLoading)
                            ?
                                (!error)
                                ?
                                data.map((e,i) => (
                                    <tr key={i}>
                                        <td data-label="Clave" >{i + 1}</td>
                                        <td data-label="Materia">{e.subjects}</td>
                                        <td data-label="Plan de Estudios">{e.plan}</td>
                                        <td data-label="Grupo">{e.group}</td>
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