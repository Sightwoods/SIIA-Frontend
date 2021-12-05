import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomeScreen } from '../pages/HomeScreen';
import { TestScreen } from '../pages/TestScreen';

import { ConsultationRouter } from './ConsultationRouter';

export const HomeRouter = () => {
    return (
        <Routes>
            <Route path="/test" element={<TestScreen />} />
            <Route path="/" element={<HomeScreen />} />

            <Route path="/consultas/*" element={ <ConsultationRouter /> } />
        </Routes>
    )
}
