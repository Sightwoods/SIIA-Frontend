import { useCallback, useReducer } from 'react';
import Swal from 'sweetalert2';

import { AppContext } from './AppContext';
import { authReducer } from './reducers/authReducer';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from './types/types';

const auth = {
    user: {
        id: null,
    },
    checking: true,
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const AppProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, auth);

    // ? Acciones para la autenticación
    const authLogin = async (email, password) => {
        try {
            const resp = await fetchSinToken( 'login', {email, password}, 'GET')
            const body = await resp.json();

            if ( body.ok ) {
                localStorage.setItem( 'token', body.token );
                localStorage.setItem( 'token-init-date', new Date().getTime() );
                authDispatch({
                    type: types.authLogin,
                    payload: {
                        user: {
                            id: body.id,
                            cuenta: body.cuenta,
                            nombre: body.nombre,
                            email: body.email
                        }
                    }
                })
            }
            else {
                Toast.fire({
                    icon: 'error',
                    title: '¡Número de cuenta o NIP incorrectos!'
                })
            }
        }
        catch(e) {
            Toast.fire({
                icon: 'error',
                title: 'Ha ocurrido un problema, intente más tarde'
            })
            console.log(e);
        }
    }
    const authLogout = () => {
        localStorage.clear();
        authDispatch({ type: types.authLogout })
    }
    const authCheck = useCallback(async () => {
        try {
            const resp = await fetchConToken( 'renew' );
            const body = await resp.json();
            
            if ( body.ok ) {
                localStorage.setItem( 'token', body.token );
                localStorage.setItem( 'token-init-date', new Date().getTime() );
                authDispatch({
                    type: types.authLogin,
                    payload: {
                        user: {
                            id: body.id,
                            cuenta: body.cuenta,
                            nombre: body.nombre,
                            email: body.email
                        }
                    }   
                });
            }
            else {
                authDispatch({ type: types.authCheckingFinish });
                if ( body.msg === 'Token no válido'){
                    // Swal.fire({
                    //     icon: 'error',
                    //     title: '¡La sesión ha expirado!',
                    //     text: 'Vuelva a iniciar sesión',
                    // })
                    Toast.fire({
                        icon: 'error',
                        title: '¡La sesión ha expirado!'
                    })
                }
            }
        }
        catch(e) {
            authDispatch({ type: types.authCheckingFinish });
            console.log(e);
        }
    }, []);

    return (
        <AppContext.Provider value={{
            auth: { ...authState, authLogin, authLogout, authCheck }
        }}>
            {children}
        </AppContext.Provider>
    )
}
