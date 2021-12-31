import { Layout } from '../../components/layout/Layout';
import {Table} from '../../components/UI/Table';

const list=[{
    codigo:"2401",
    conceptoPago:"Certificado Medico",
    pago: "pago realizado"
}
];
const colums =["codigo","concaptoPago","pago"];
const title="Conceptos disponibles";

export const FormatoPago = ()=>{
    return(
        <Layout>
              <div className="formato-pago">
                <form action="#" name="myForm">
                    <fieldset className="blue">
                        <legend>Historial Académico</legend>
                        <div className="formBox">
                        <select>
                            <option value="">Seleccione una escuela</option>
                            <option value="2700">Facultad de Informatica</option>
                            <option value="9010">Escuela de Idiomas Culiacan</option>
                        </select>
                        </div>
                    </fieldset>
                    <fieldset className="green">
                        <legend>Programa</legend>
                        <div className="formBox">
                        <select>
                                <option value="">Seleccione un programa</option>
                                <option value="1">LICENCIATURA EN INFORMATICA</option>
                                <option value="2">ESPECIALIDAD EN INFORMATICA APLICADA</option>
                                <option value="3">MAESTRIA EN INFORMATICA APLICADA</option>
                                <option value="4">TECNICO SUPERIOR UNIVERSITARIO EN DESARROLLO WEB</option>
                                <option value="5">LICENCIATURA EN TELECOMINICACIONES, SISTEMAS Y ELECTRONICA</option>
                                <option value="6">MAESTRIA EN CIANCIAS DE LA COMPUTACION</option>
                                <option value="7">DOCTORADO EN CIENCIAS DE LA COMUNICACION</option>
                                <option value="8">LICENCIATURA EN INFORMATICA (MODALIDAD VIRTUAL)</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="gold">
                        <legend>Tramite</legend>
                        <div className="formBox">
                        <select>
                            <option value="">Seleccione un tipo de tramite</option>
                            <option value="1">EXAMENES</option>
                            <option value="2">CERTIFICADOS</option>
                            <option value="3">CERTIFICACIONES</option>
                            <option value="4">CREDENCIALES</option>
                            <option value="5">CERTIFICADO MEDICO</option>
                            <option value="6">CONSTANCIAS</option>
                            <option value="7">VALIDACION Y EQUIVALENCIA DE ESTUDIOS</option>
                            <option value="8">TITULO Y CEDULA PROFESIONAL</option>
                            <option value="9">MOVIMIENTOS ESCOLARES</option>
                        </select>
                        </div>
                    </fieldset>
                </form>
                <div className='contenedorTramites'>
                    <div className='table-scroll'>
                        <Table list={list} colums={colums} title={title} />
                    </div>
                </div>
              </div>
        </Layout>
    )
} 