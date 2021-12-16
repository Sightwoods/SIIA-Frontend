import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { DashboardScreen } from '../pages/DashboardScreen';
import { TestScreen } from '../pages/TestScreen';

import { ConsultationRouter } from './ConsultationRouter';
import { FormalitiesRouter } from './FormalitiesRouter';

export const DashboardRouter = () => {
    return (
        <Routes>
            <Route path="/test" element={<TestScreen />} />
            <Route path="/" element={<DashboardScreen />} />

            <Route path="/consultas/*" element={ <ConsultationRouter /> } />
            <Route path="/tramites/*" element={ <FormalitiesRouter /> } />
        </Routes>
    )
}
