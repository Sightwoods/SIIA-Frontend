import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useUser = () => {
    const { auth } = useContext( AppContext );
    // const { user, token, status, logout } = auth;

    return {
        ...auth
    }
}
