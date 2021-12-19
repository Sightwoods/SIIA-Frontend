import { Routes, Route } from 'react-router-dom';

import { CargaAcademica } from '../pages/consultas/CargaAcademica';
import { Credencial } from '../pages/consultas/Credencial';
import { DatosGenerales } from '../pages/consultas/DatosGenerales';
import { HistorialAcademico } from '../pages/consultas/HistorialAcademico';
import { HorarioClases } from '../pages/consultas/HorarioClases';
import { Kardex } from '../pages/consultas/Kardex';
import { SolicitudCorreccion } from '../pages/consultas/SolicitudCorreccion';
import { SolicitudExamen } from '../pages/consultas/SolicitudExamen';

export const ConsultasRoutes = () => {
    return (
        <Routes>
            <Route path="/estudiante/carga-academica" element={<CargaAcademica />} />
            <Route path="/estudiante/credencial" element={<Credencial />} />
            <Route path="/movimientos/correccion-calificacion" element={<SolicitudCorreccion />} />
            <Route path="/estudiante/datos-generales" element={<DatosGenerales />} />
            <Route path="/estudiante/historial-academico" element={<HistorialAcademico />} />
            <Route path="/estudiante/horario-clases" element={<HorarioClases />} />
            <Route path="/movimientos/impresion-solicitud-examen" element={<SolicitudExamen />} />
            <Route path="/movimientos/kardex" element={<Kardex />} />
        </Routes>
    )
}
