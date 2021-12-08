import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { StudentInfoScreen } from '../pages/consultas/StudentInfoScreen';
import { CredentialScreen } from '../pages/consultas/CredentialScreen';
import { CourseLoadScreen } from '../pages/consultas/CourseLoadScreen';
import { ClassScheduleScreen } from '../pages/consultas/ClassScheduleScreen';
import { AcademicRecordScreen } from '../pages/consultas/AcademicRecordScreen';
import { TestRequestScreen } from '../pages/consultas/TestRequestScreen';
import { GradeCorrectionScreen } from '../pages/consultas/GradeCorrectionScreen'
import { KardexScreen } from '../pages/consultas/KardexScreen'

export const ConsultationRouter = () => {
    return (
        <Routes>
            <Route path="/estudiante/datos-generales" element={<StudentInfoScreen />} />
            <Route path="/estudiante/credencial" element={<CredentialScreen />} />
            <Route path="/estudiante/carga-academica" element={<CourseLoadScreen />} />
            <Route path="/estudiante/horario-clases" element={<ClassScheduleScreen />} />
            <Route path="/estudiante/historial-academico" element={<AcademicRecordScreen />} />
            <Route path="/movimientos/impresion-solicitud-examen" element={<TestRequestScreen />} />
            <Route path="/movimientos/correccion-calificacion" element={<GradeCorrectionScreen />} />
            <Route path="/movimientos/kardex" element={<KardexScreen />} />
        </Routes>
    )
}
