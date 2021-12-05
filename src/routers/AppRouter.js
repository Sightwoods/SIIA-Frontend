import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { DashboardRouter } from './DashboardRouter';
import { LoginScreen } from '../pages/LoginScreen';

import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <PrivateRoute isAuthenticated={user.logged}>
                            <DashboardRouter />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/login"
                    element={
                        <PublicRoute isAuthenticated={user.logged}>
                            <LoginScreen />
                        </PublicRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
