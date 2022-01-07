import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/UI/Navbar/Navbar';

import { HomePage } from "../pages/HomePage"
import { LoginPage } from '../pages/LoginPage';

export const FrontRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <><Navbar isPrivate={false} /><HomePage /></> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="*"  element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}
