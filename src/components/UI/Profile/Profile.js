import React, { useContext } from 'react';

import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

import { isMobile } from '../../../helpers/device-size';
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

    return (
        <>
            {
                (!isMobile())
                ?
                    <DesktopProfile handleLogout={handleLogout} changeNIP={changeNIP} accesibility={accesibility}/>
                : 
                    <MobileProfile handleLogout={handleLogout} changeNIP={changeNIP} accesibility={accesibility}/>
            }
        </>
    )
}
