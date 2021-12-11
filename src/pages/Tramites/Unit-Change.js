import React from 'react';
import { Layout } from '../../components/layout/Layout';
import {Table} from '../../components/UI/Table';

const list=[
    {
        escuela:"Facultad de Informatica Culiacan",
        carrera:"Licenciatura en Informatica",
        plan:4,
        periodo:7,
        grupo:2,
        vigencia:"A",
        accion:"Siguiente"
    }
];
const colums=["escuela","carrera","plan","periodo","grupo","vigencia","accion"];
const title="Seleccione Unidad Acdemica de Proceso para el cambio"

export const UnitChange = () =>{
    return(
        <Layout>
            <div>
                <Table
                list={list}
                colums={colums}
                title={title}
                />
            </div>
        </Layout>
    )
}