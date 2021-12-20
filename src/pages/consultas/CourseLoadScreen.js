import React from 'react'
import { Layout } from '../../components/layout/Layout'


export const CourseLoadScreen = () =>{
    return (
        <Layout>
            <div className='container'>
                <div className='table-responsive'>
                <h5 id='titulo'>Ruben Gomez Ulloa</h5>
                <h5 id='titulo'>Facultad de Informatica Culiacan</h5>
                <table className="table table-hover table-borderless border border-dark rounded" id='tabla'>
                    <thead id='tcabecera'>
                        <tr>
                            <th scope="col">Clave</th>
                            <th scope="col">Materia</th>
                            <th scope="col">Plan de Estudios</th>
                            <th scope="col">Periodo</th>
                            <th scope="col">Grupo</th>
                        </tr>
                    </thead>
                    <tbody id='tcuerpo'>
                        <tr>
                            <th scope="row">1</th>
                            <td>LENGUAJES AUTÓMATAS Y COMPLEJIDAD</td>
                            <td>4</td>
                            <td>7</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>ADMINISTRACIÓN DE PROYECTOS DE SOFTWARE</td>
                            <td>4</td>
                            <td>7</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>INNOVACIÓN TECNOLÓGICA</td>
                            <td>4</td>
                            <td>7</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>PROGRAMACIÓN DE INTERFACES WEB</td>
                            <td>4</td>
                            <td>7</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>INFRAESTRUCTURA INFORMÁTICA</td>
                            <td>4</td>
                            <td>7</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </Layout>
    );
}