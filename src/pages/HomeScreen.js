import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { Layout } from '../components/layout/Layout';
import { types } from '../types/types';

export const HomeScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
    }
    return (
        <Layout>
            <button onClick={handleLogout}>Salir</button>
            <NavLink to="/test">Test</NavLink>
        </Layout>
    )
};
