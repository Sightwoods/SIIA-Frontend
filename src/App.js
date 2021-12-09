import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';

import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

import { useNav } from './hooks/useNav'

const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false }
}

export const App = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init );
    const [ isNavOpen, toggle ] = useNav(false);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{user, dispatch, isNavOpen, toggle }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
