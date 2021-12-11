import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomeScreen } from '../pages/HomeScreen';
import { TestScreen } from '../pages/TestScreen';

import { ConsultationRouter } from './ConsultationRouter';
import { FormalitiesRouter } from './FormalitiesRouter';

export const DashboardRouter = () => {
    return (
        <Routes>
            <Route path="/test" element={<TestScreen />} />
            <Route path="/" element={<HomeScreen />} />

            <Route path="/consultas/*" element={ <ConsultationRouter /> } />
            <Route path="/tramites/*" element={ <FormalitiesRouter /> } />
        </Routes>
    )
}
