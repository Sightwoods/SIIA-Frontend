import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Card } from '../../components/UI/Card';

let list={
    Materia:"INFRAESTRUCTURA INFORMÁTICA",
    Escuela:"Faculta de Informatica Culiacan",
    Carrera: "Licenciatura en Informatica",
    Plan:4,
    Periodo:7,
    Grupo: 2
}

export const TestRequestScreen = () => {
    return (
        <Layout>
            <h5 id='titulo'>Solicitud de Examen</h5>
            <hr/>
            <h5 id='titulo'>Seleccione una Materia</h5>   
            <Card
            list={list}
            />
        </Layout>
    );
}