import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../../components/UI/Pdf';



export const KardexScreen = () => {
    return (
        <Layout>
            <PDFViewer style={{width:"100%",height:"90vh"}}>
                <MyDocument/>
            </PDFViewer>
        </Layout>
    );
}