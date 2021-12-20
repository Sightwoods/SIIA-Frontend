import React from 'react'
import { Layout } from '../../components/layout/Layout'

export const TestRequestScreen = () => {
    return (
        <Layout>   
        <div className='container'>
            <h5 id='titulo'>Solicitud de Examen</h5>
            <hr/>
            <h5 id='titulo'>Seleccione una Materia</h5>
            <a href='#/' id='carta'>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">INFRAESTRUCTURA INFORMÁTICA</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Faculta de Informatica Culiacan</h6>
                    <p>Licenciatura en Informatica</p>
                    <p>Plan de Estudios: 4</p>
                    <p>Periodo: 7</p>
                    <p>Grupo: 2</p>
                </div>
            </div>
            </a>
        </div>
        </Layout>
    );
}