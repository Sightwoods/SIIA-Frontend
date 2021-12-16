import React from 'react';
import { Layout } from '../../components/layout/Layout';
//import {Table} from '../../components/UI/Table';



export const StudentInfoScreen = () => {
    return (
        <Layout>
          <div className="container"> 
              <div className='row d-flex justify-content-center'>
                  <div className='col-md-10 mt-1' id='contenido'> 
                      <div className='row'>
                        <div className='col-sm-4 rounded-start' id='perfil'>
                          <div className='card-block text-center text-white'>
                            <i class="fas fa-users fa-7x mt-5"></i>
                            <h2 className='font-weight-bold mt-4'>Ruben</h2>
                            <p>Facultad de Informatica Culiacan</p>
                          </div>
                        </div>
                        <div className='col-sm-8 rounded-end' id='columna'>
                            <h3 className='mt-3 text-center'>Datos Generales</h3>
                            <hr className='mt-0'/>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>No. Cuenta</p>
                                <h6 className='text-muted'>000001</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Sexo</p>
                                <h6 className='text-muted'>MASCULINO</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Fecha Nacimiento</p>
                                <h6 className='text-muted'>25-5-1998</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Fecha Ingreso</p>
                                <h6 className='text-muted'>8-8-2015</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Calle</p>
                                <h6 className='text-muted'>AVE. DEL VALLE #101</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Colonia</p>
                                <h6 className='text-muted'>PRADOS DEL SOL</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Codigo Postal</p>
                                <h6 className='text-muted'>80152</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Poblacion</p>
                                <h6 className='text-muted'>Culiacan</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Localidad</p>
                                <h6 className='text-muted'>Culiacan Rosales</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Telefono</p>
                                <h6 className='text-muted'>6678256585</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>CURP"</p>
                                <h6 className='text-muted'>GGGGGGGGGGGGGGGGGG</h6>
                              </div>
                              <div className='col-sm-6'>
                                <p className='font-weight-bold'>Afiliacion IMSS"</p>
                                <h6 className='text-muted'>000001</h6>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <h4 className='mt-3 text-center'>DATOS DEL PADRE</h4>
                              <hr/>
                              <div className='row'>
                                  <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Padre"</p>
                                    <h6 className='text-muted'>LUIS ANGEL GUERRERO</h6>
                                  </div>
                                  <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Calle</p>
                                    <h6 className='text-muted'>AVE. DEL VALLE #101</h6>
                                  </div>
                                  <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Colonia</p>
                                    <h6 className='text-muted'>PRADOS DEL SOL</h6>
                                  </div>
                                  <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Telefono</p>
                                    <h6 className='text-muted'>6678256585</h6>
                                  </div>
                            </div>
                        </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </Layout>
    )
}
