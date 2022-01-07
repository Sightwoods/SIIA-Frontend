import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ConsultasRoutes } from './Consultas.routes';
import { TramitesRoutes } from './Tramites.routes';

import { Navbar } from '../components/UI/Navbar/Navbar';
import { HomePage } from '../pages/HomePage';
import { MaintenancePage } from '../pages/MaintenancePage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar isPrivate={true}/>
            <Routes>
                <Route path="/consultas/*" element={ <ConsultasRoutes /> } />
                <Route path="/tramites/*" element={ <TramitesRoutes /> } />
                <Route path="/reinscripcion/*"  element={ <MaintenancePage /> } />
                <Route path="/examenes/*"  element={ <MaintenancePage /> } />
                <Route path="/idiomas/*"  element={ <MaintenancePage /> } />
                <Route path="/encuestas/*"  element={ <MaintenancePage /> } />
                <Route path="/"  element={ <HomePage /> } />
                <Route path="/*"  element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}
