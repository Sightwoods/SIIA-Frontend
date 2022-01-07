import { Routes, Route, Navigate } from 'react-router-dom';

import { CargaAcademica } from '../pages/consultas/CargaAcademica';
import { DatosGenerales } from '../pages/consultas/DatosGenerales';
import { HistorialAcademico } from '../pages/consultas/HistorialAcademico';
import { HorarioClases } from '../pages/consultas/HorarioClases';
// import { Credencial } from '../pages/consultas/Credencial';
// import { Kardex } from '../pages/consultas/Kardex';
// import { SolicitudCorreccion } from '../pages/consultas/SolicitudCorreccion';
// import { SolicitudExamen } from '../pages/consultas/SolicitudExamen';

import { MaintenancePage } from '../pages/MaintenancePage';

export const ConsultasRoutes = () => {
    return (
        <Routes>
            <Route path="/estudiante/datos-generales" element={<DatosGenerales />} />
            <Route path="/estudiante/carga-academica" element={<CargaAcademica />} />
            <Route path="/estudiante/historial-academico" element={<HistorialAcademico />} />
            <Route path="/estudiante/horario-clases" element={<HorarioClases />} />
            <Route path="/estudiante/credencial" element={<MaintenancePage />} />
            <Route path="/movimientos/correccion-calificacion" element={<MaintenancePage />} />
            <Route path="/movimientos/impresion-solicitud-examen" element={<MaintenancePage />} />
            <Route path="/movimientos/kardex" element={<MaintenancePage />} />
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}
