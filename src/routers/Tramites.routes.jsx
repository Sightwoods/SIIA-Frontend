import { Routes, Route, Navigate } from 'react-router-dom';
import { MaintenancePage } from '../pages/MaintenancePage';

// import { CambioUnidad } from '../pages/Tramites/CambioUnidad';
// import { Certificado } from '../pages/Tramites/Certificado';
import { EstadoTramites } from '../pages/Tramites/EstadoTramites';
// import { FormatoPago } from '../pages/Tramites/FormatoPago';
// import { Pagos } from '../pages/Tramites/Pagos';
// import { Titulo } from '../pages/Tramites/Titulo';

export const TramitesRoutes = () =>{
    return (
        <Routes>
            <Route path="/solicitud/cambio-unidad" element={<MaintenancePage />} />
            <Route path="/solicitud/certificado" element={<MaintenancePage />} />
            <Route path="/movimientos/estado-tramites" element={<EstadoTramites />} />
            <Route path="/movimientos/generar-pago" element={<MaintenancePage />} />
            <Route path="/movimientos/pagar" element={<MaintenancePage />} />
            <Route path="/solicitud/titulo" element={<MaintenancePage />} />
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}
