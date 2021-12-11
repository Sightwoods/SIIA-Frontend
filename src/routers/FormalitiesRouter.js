import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GeneratePaymentFormat } from '../pages/Tramites/GeneratePaymentFormat ';
import {StatusProcedures} from '../pages/Tramites/StatusProcedures'
import {Payments} from '../pages/Tramites/Payments'
import {Certificate} from '../pages/Tramites/Certificate'
import {Title} from '../pages/Tramites/Title'
import {UnitChange} from '../pages/Tramites/Unit-Change'


export const FormalitiesRouter = () =>{
    return (
        <Routes>
            <Route path="/movimientos/generar-pago" element={<GeneratePaymentFormat />} />
            <Route path="/movimientos/estado-tramites" element={<StatusProcedures />} />
            <Route path="/movimientos/pagar" element={<Payments />} />
            <Route path="/solicitud/certificado" element={<Certificate />} />
            <Route path="/solicitud/titulo" element={<Title/>} />
            <Route path="/solicitud/cambio-unidad" element={<UnitChange/>} />
        </Routes>
    )
}
