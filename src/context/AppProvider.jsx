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
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.close)
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
                return {
                    ok: true,
                }
            }
            else {
                return {
                    ok: false,
                    msg: '¡Número de cuenta o NIP incorrectos!'
                }
            }
        }
        catch(e) {
            console.log(e);
            return {
                ok: false,
                msg: 'Ha ocurrido un problema, intente más tarde'
            }
        }
    }
    const authLogout = async() => {
        try {
            authDispatch({ type: types.authLogout })
            await fetchConToken('users/logout', {}, 'POST');
            localStorage.clear();
        }
        catch(e){
            console.log(e);
        }
        finally {
            return false;
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
                    if ( body.msg === 'Token is invalid' || body.msg === 'Token revoked.' ){
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
