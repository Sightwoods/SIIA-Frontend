import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../pages/LoginScreen';
import { HomeRouter } from './HomeRouter';
import { useContext } from 'react';
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
                            <HomeRouter />
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
