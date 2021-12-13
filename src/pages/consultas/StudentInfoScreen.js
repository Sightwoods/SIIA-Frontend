import React from 'react';
import { Layout } from '../../components/layout/Layout';

export const StudentInfoScreen = () => {
    return (
        <Layout>
          <div className="container table-student">
            <table>
                <thead>
                    <tr>
                          <th>No. Cuenta</th>
                          <th>Nombre</th>
                          <th>Sexo</th>
                          <th>Fecha Nacimiento</th>
                          <th>Fecha Ingreso</th>
                          <th>Calle</th>
                          <th>Colonia</th>
                          <th>Codigo Postal</th>
                          <th>Poblacion</th>
                          <th>Localidad</th>
                          <th>Telefono</th>
                          <th>CURP</th>
                          <th>Afiliacion IMSS</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>1232323232323</td>
                          <td>adrian figueroa</td>
                          <td> M </td>
                          <td>31/05/1997</td>
                          <td>31/05/1997</td>
                          <td>AVENIDA</td>
                          <td>PRADOS</td>
                          <td>SINALOA</td>
                          <td>CULIACAN, ROSALES</td>
                          <td>66719315153</td>
                          <td>121231312313</td>
                          <td>C1D2DSWED12</td>
                          <td>ASADFW11212</td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </Layout>
    )
}
