import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

import { DesktopProfile } from './DesktopProfile';
import { MobileProfile } from './MobileProfile';

export const Profile = () => {
    const { dispatch } = useContext(AuthContext);
    
    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
    }

    const changeNIP = () => alert('Cambiar NIP presionado');
    const accesibility = () => alert('Accesibilidad presionado');

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 991.92px)' })

    return (
        <>
            {
                ( isDesktopOrLaptop )
                &&
                    <DesktopProfile handleLogout={handleLogout} changeNIP={changeNIP} accesibility={accesibility}/>
            }
            {
                ( isMobile )
                &&
                    <MobileProfile handleLogout={handleLogout} changeNIP={changeNIP} accesibility={accesibility}/>
            }
        </>
    )
}
