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
    const authLogin = async (account_number, nip) => {
        try {
            const resp = await fetchSinToken( 'users/login', {account_number, nip}, 'POST')
            const body = await resp.json();
            if ( body.success ) {
                localStorage.setItem( 'token', body.token );
                localStorage.setItem( 'token-init-date', new Date().getTime() );
                const { _id, account_number, email, first_name, last_name, picture } = body.user;
                authDispatch({
                    type: types.authLogin,
                    payload: {
                        user: {
                            id: _id,
                            cuenta: account_number,
                            nombre: `${first_name} ${last_name}`,
                            email: email,
                            foto: (!!picture) ? picture : "https://res.cloudinary.com/dprnkj8u8/image/upload/v1640642525/uas/user_z552ui.png"  
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
    const authLogout = async() => {
        try {
            await fetchConToken('users/logout', {}, 'POST');
            localStorage.clear();
            authDispatch({ type: types.authLogout })
        }
        catch(e){
            console.log(e);
        }
    }
    const authCheck = useCallback(async () => {
        if (!!localStorage.getItem('token')) {
            try {
                const resp = await fetchConToken( 'users/auth_check' );
                const body = await resp.json();
                if ( body.success ) {
                    const { _id, account_number, email, first_name, last_name, picture } = body.user;
                    authDispatch({
                        type: types.authLogin,
                        payload: {
                            user: {
                                id: _id,
                                cuenta: account_number,
                                nombre: `${first_name} ${last_name}`,
                                email: email,
                                foto: (!!picture) ? picture : "https://res.cloudinary.com/dprnkj8u8/image/upload/v1640642525/uas/user_z552ui.png"  
                            }
                        }
                    })
                }
                else {
                    authDispatch({ type: types.authCheckingFinish });
                    if ( body.msg === 'Token is invalid' ){
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
        }
        else {
            authDispatch({ type: types.authCheckingFinish });
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
