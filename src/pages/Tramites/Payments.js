import React from 'react';
import { Layout } from '../../components/layout/Layout';

export const Payments = () =>{
    return(
        <Layout>
            <div>
                <div>
                <h5>Lista de tramites realizados</h5>
                    <table className='datatable'> 
                        <thead className='cabezera'>
                            <tr>
                                <th rowSpan="2">Folio</th>
                                <th colSpan="2">Fecha</th>
                                <th colSpan="3">Comprobante Fiscal CFDi</th>
                                <th rowSpan="2">Pago Acreditado</th>
                                <th rowSpan="2">Importe</th>
                                <th rowSpan="2"></th>
                            </tr>
                            <tr>
                                <th>Captura</th>
                                <th>Vencimiento</th>
                                <th>Solicitud</th>
                                <th>RFC</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody className='cuerpo'>
                            <tr>
                                <td>1</td>
                                <td>23/07/2021</td>
                                <td>08/12/2021</td>
                                <td>NO</td>
                                <td>N/D</td>
                                <td>N/D</td>
                                <td>Si</td>
                                <td>722.00</td>
                                <td>
                                    <i class="fas fa-search-plus"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}