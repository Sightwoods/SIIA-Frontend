import { Routes, Route, Navigate } from 'react-router-dom';

import { CambioUnidad } from '../pages/Tramites/CambioUnidad';
import { Certificado } from '../pages/Tramites/Certificado';
import { EstadoTramites } from '../pages/Tramites/EstadoTramites';
import { FormatoPago } from '../pages/Tramites/FormatoPago';
import { Pagos } from '../pages/Tramites/Pagos';
import { Titulo } from '../pages/Tramites/Titulo';

export const TramitesRoutes = () =>{
    return (
        <Routes>
            <Route path="/solicitud/cambio-unidad" element={<CambioUnidad />} />
            <Route path="/solicitud/certificado" element={<Certificado />} />
            <Route path="/movimientos/estado-tramites" element={<EstadoTramites />} />
            <Route path="/movimientos/generar-pago" element={<FormatoPago />} />
            <Route path="/movimientos/pagar" element={<Pagos />} />
            <Route path="/solicitud/titulo" element={<Titulo />} />
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}
