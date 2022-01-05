import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TestPage } from '../pages/TestPage';

import { HomePage } from '../pages/HomePage';
import { ConsultasRoutes } from './Consultas.routes';
import { TramitesRoutes } from './Tramites.routes';
import { MaintenancePage } from '../pages/MaintenancePage';

export const HomeRoutes = () => {
    return (
        <Routes>
            <Route path="/test" element={<TestPage />} />
            <Route path="/" element={<HomePage />} />

            <Route path="/consultas/*" element={ <ConsultasRoutes /> } />
            <Route path="/tramites/*" element={ <TramitesRoutes /> } />
            <Route path="*" element={ <MaintenancePage /> } /> 
        </Routes>
    )
}
