import { Layout } from '../../components/layout/Layout';

export const CargaAcademica = () =>{
    return (
        <Layout>
            <div className="">
                <div>
                    <h2>Carga Ademica</h2>
                    <hr/>
                </div>
                <div>
                    <table className="tabla">
                        <tr>
                            <th><input type="text" placeholder="Nombre del alumno"></input></th>
                        </tr>
                        <tr>
                            <th><input type="text" placeholder="Escula"></input></th>
                        </tr>
                    </table>
                </div>
                <div>
                    <table className="tabla">
                        <thead className='cabecera'>
                            <tr className='fila'>
                                <th className='columna'>Clave</th>
                                <th className='columna'>Materia</th>
                                <th className='columna'>Plan de Estudio</th>
                                <th className='columna'>Periodo</th>
                                <th className='columna'>Grupo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='fila'>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                                <td className='campo'><input type="text"></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}