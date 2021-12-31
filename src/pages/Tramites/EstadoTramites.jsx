import { Layout } from '../../components/layout/Layout';

export const EstadoTramites = () =>{
    return(
        <Layout>
            <div>
                <div className='container'>
                <h5 className='titulo'>Lista de tramites realizados</h5>
                    <table className='table table-hover table-borderless tabla'> 
                        <thead className='tcabecera'>
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
                        <tbody className='tcuerpo'>
                            <tr>
                                <td data-label="Folio">1</td>
                                <td data-label="Fecha Captura">23/07/2021</td>
                                <td data-label="Vencimiento">08/12/2021</td>
                                <td data-label="Solicitud">NO</td>
                                <td data-label="RFC">N/D</td>
                                <td data-label="Estado">N/D</td>
                                <td data-label="Pago Acreditado">Si</td>
                                <td data-label="Importe">722.00</td>
                                <td data-label="">
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