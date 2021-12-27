import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './Private.routes';
import { PublicRoute } from './Public.routes';

import { Loading } from '../components/UI/Loading';
import { HomeRoutes } from './Home.routes';
import { LoginPage } from '../pages/LoginPage';
import { useUser } from '../hooks/useUser';

export const AppRouter = () => {

    const { user, checking, authCheck } = useUser();

    useEffect(() => {
        authCheck();
    }, [authCheck]);

    if ( checking ) {
        return <Loading />
    }
    else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/*"
                        element={
                            <PrivateRoute isAuthenticated={!!user.id}>
                                <HomeRoutes />
                            </PrivateRoute>
                        }
                    />
                    <Route 
                        path="/login"
                        element={
                            <PublicRoute isAuthenticated={!!user.id}>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        )
    }
}
