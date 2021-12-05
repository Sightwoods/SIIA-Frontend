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
            <Route path="/datos-generales" element={<StudentInfoScreen />} />
            <Route path="/credencial-digital" element={<CredentialScreen />} />
            <Route path="/carga-academica" element={<CourseLoadScreen />} />
            <Route path="/horario-clases" element={<ClassScheduleScreen />} />
            <Route path="/historial-academico" element={<AcademicRecordScreen />} />
            <Route path="/impresion-solicitud-examen" element={<TestRequestScreen />} />
            <Route path="/correccion-calificacion" element={<GradeCorrectionScreen />} />
            <Route path="/kardex" element={<KardexScreen />} />
        </Routes>
    )
}
