import React from 'react'
import { Layout } from '../../components/layout/Layout'
// import { image } from "../../helpers/image";

export const CredentialScreen = () =>{
    return (
        <Layout>
            <div >
                 <div className="titulo">
                        <h2>Credencial Digital Estudiantil</h2>
                        <hr/>
                </div>
                <div className="principal">
                    <img
                    className="credencial"
                    src=""
                    alt="credencial"
                    ></img>
                </div>
                <div>
                    <h3>Descargar credencial</h3>
                    <i class="fas fa-download"></i>
                </div>
                <div>
                    <i class="fas fa-print"></i>
                    <h3>Imprimir credencial</h3>
                </div>
            </div>
        </Layout>
    );
}