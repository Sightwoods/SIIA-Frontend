import React from 'react';
import { Layout } from '../../components/layout/Layout';
import {Table} from '../../components/UI/Table';



let list=require('../../assets/images/studentInfo.json')
const colums=Object.keys(list[0])
const title="DATOS DEL ALUMNOS"

export const StudentInfoScreen = () => {
    return (
        <Layout>
          <Table list={list} colums={colums} title={title}/>
        </Layout>
    )
}
