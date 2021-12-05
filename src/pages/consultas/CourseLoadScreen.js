import React from 'react'
import { Layout } from '../../components/layout/Layout'


export const CourseLoadScreen = () =>{
    return (
        <Layout>
            <div className="">
                <div>
                    <h2>Carga Ademica</h2>
                    <hr/>
                </div>
                <div>
                    <table className="tabla">
                        <tr>
                            <th><input type="text" placeholder="Nombre del alumno"></input></th>
                        </tr>
                        <tr>
                            <th><input type="text" placeholder="Escula"></input></th>
                        </tr>
                    </table>
                </div>
                <div>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Materia</th>
                                <th>Plan de Estudio</th>
                                <th>Periodo</th>
                                <th>Grupo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}