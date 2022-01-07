import { useCallback, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Layout } from '../../components/layout/Layout';
import { useFetch } from '../../hooks/useFetch';

export const HorarioClases = () =>{
    const [ data, error, isLoading ] = useFetch('users/schedule');
    const [ state, setState ] = useState([]);

    const getDay = (day) => {
        switch (day) {
            case '1':
                return 'Lunes';
            case '2':
                return 'Martes';
            case '3':
                return 'Miércoles';
            case '4':
                return 'Jueves';
            case '5':
                return 'Viernes';
            default:
                return '';
        }
    }

    const filterData = useCallback(() => {
        const reduce = data.reduce((p, c) => {
            return {
                ...p,
                [c.subject]: {
                    subject: c.subject,
                    teacher: c.teacher
                }
            }
        }, [])
        data.forEach((e, i) => {
            if (e.subject === reduce[e.subject].subject){
                reduce[e.subject].days = {
                    ...reduce[e.subject].days,
                    [e.days.day]: e.days,
                }
            } 
        });
        return reduce;
    }, [data]);

    useEffect(() => {
        if ( !isLoading && !error ) {
            setState(Object.values(filterData()));
        }
    }, [filterData, isLoading, error])

    return (
        <Layout>
            <div className='container mt-4'>
            <h5 id='titulo'>Horario de Clases</h5>
                <div className='table-responsive'>
                    <table className="table table-hover table-borderless tabla mt-3">
                        <thead className='tcabecera'>
                            <tr>
                                <th scope='col'>Clave</th>
                                <th scope='col'>Materia</th>
                                <th scope='col'>Maestro</th>
                                <th scope='col'>Lunes</th>
                                <th scope='col'>Martes</th>
                                <th scope='col'>Miércoles</th>
                                <th scope='col'>Jueves</th>
                                <th scope='col'>Viernes</th>
                            </tr>
                        </thead>
                        <tbody className='tcuerpo'>
                            {
                                (!isLoading)
                                ?
                                    (!error)
                                    ?
                                    state.map((e, i) => (
                                        <tr key={i}>
                                            <td data-label="Clave">---</td>
                                            <td data-label="Materia">{e.subject}</td>
                                            <td data-label="Profesor">{e.teacher}</td>
                                            {
                                                Object.values(e.days).map((day, i) => (
                                                    <td data-label={getDay(day.day)} key={i}>{day.schedule}</td>
                                                ))
                                            }
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