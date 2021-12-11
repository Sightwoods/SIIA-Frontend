import React from 'react';
import { Layout } from '../../components/layout/Layout';
import {Table} from '../../components/UI/Table';

const title = "Datos Generales";

const list = [
    {id:1,name:'Luis',age:25},
    {id:1,name:'Luis',age:25},
    {id:1,name:'Luis',age:25},
]
const colums=["id","name","age"]

export const StudentInfoScreen = () => {
    return (
        <Layout>
          <Table list={list} colums={colums} title={title}/>
        </Layout>
    )
}
