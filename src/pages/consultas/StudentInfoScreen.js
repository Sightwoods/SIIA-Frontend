import React from 'react';
import { Layout } from '../../components/layout/Layout';
import {Table} from '../../components/UI/Table';



let list=require('../../assets/images/studentInfo.json')
let list2=require('../../assets/images/padre.json')
let list3=require('../../assets/images/carrera.json')
let colums=Object.keys(list[0])
let colums2=Object.keys(list2[0])
let colums3=Object.keys(list3[0])
let title="DATOS DEL ALUMNOS"
let title2="DATOS DEL PADRE"
let title3="CARRERA"

export const StudentInfoScreen = () => {
    return (
        <Layout>
          <Table list={list} colums={colums} title={title}/>
          <Table list={list2} colums={colums2} title={title2}/>
          <Table list={list3} colums={colums3} title={title3}/>
        </Layout>
    )
}
