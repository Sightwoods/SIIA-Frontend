import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import { PrivateRoute } from './Private.routes';
import { PublicRoute } from './Public.routes';

import { HomeRoutes } from './Home.routes';
import { LoginPage } from '../pages/LoginPage';

export const AppRouter = () => {
    const { auth } = useContext(AppContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <PrivateRoute isAuthenticated={auth.status}>
                            <HomeRoutes />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/login"
                    element={
                        <PublicRoute isAuthenticated={auth.status}>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
