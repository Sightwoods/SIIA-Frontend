import { useCallback, useReducer } from 'react';
import Swal from 'sweetalert2';

import { AppContext } from './AppContext';
import { authReducer } from './reducers/authReducer';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from './types/types';

const auth = {
    user: {
        id: null,
        // id: "1",
        // cuenta: "154254-5",
        // nombre: "Felipe Ruíz Madero",
        // email: "f.ruiz92@info.uas.edu.mx",
        // foto: "https://res.cloudinary.com/dprnkj8u8/image/upload/v1640632042/uas/felipe_iatdop.jpg"
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
                            email: body.email,
                            foto: (!!body.foto) ? body.foto : "https://res.cloudinary.com/dprnkj8u8/image/upload/v1640642525/uas/user_z552ui.png"  
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
                            email: body.email,
                            foto: (!!body.foto) ? body.foto : "https://res.cloudinary.com/dprnkj8u8/image/upload/v1640642525/uas/user_z552ui.png"
                        }
                    }   
                });
            }
            else {
                authDispatch({ type: types.authCheckingFinish });
                if ( body.msg === 'Token no válido'){
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
            Toast.fire({
                icon: 'error',
                title: 'Ha ocurrido un problema, intente más tarde'
            })
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
