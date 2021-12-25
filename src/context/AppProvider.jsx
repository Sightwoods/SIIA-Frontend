import { useReducer } from 'react';

import { AppContext } from './AppContext';
import { authReducer } from './reducers/authReducer';
// import { uiReducer } from './reducers/uiReducer';
import { fetchSinToken } from '../helpers/fetch';
import { types } from './types/types';

const auth = {
    user: null,
    token: localStorage.getItem('token') || false,
    status: null,
}

// const ui = { checking: false }

export const AppProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, auth);
    // const [uiState, uiDispatch] = useReducer(uiReducer, ui);

    // ? Acciones para la autenticación
    const login = async (email, password) => {
        try {
            const resp = await fetchSinToken( 'login', {email, password}, 'POST')
            const body = await resp.json();
            if ( body.token ) {
                localStorage.setItem( 'token', body.token );
                localStorage.setItem( 'token-init-date', new Date().getTime() );
                authDispatch({
                    type: types.login,
                    payload: {
                        token: body.token,
                        user: {
                            cuenta: '155456-3',
                            name: 'David Adrian Chavira Cebreros',
                            email: 'da.chavira18@info.uas.edu.mx',
                        }
                    }
                })
            }
            else {
                alert('Error en la petición'); // DEV
            }
        }
        catch(e) {
            console.log(e);
        }
    }
    const logout = () => { authDispatch({ type: types.logout }) }
    const authCheck = () => {}

    return (
        <AppContext.Provider value={{
            auth: { ...authState, login, logout, authCheck },
            // ui:   { ...uiState }
        }}>
            {children}
        </AppContext.Provider>
    )
}
