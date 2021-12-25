import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useUser } from '../../../hooks/useUser';

import { DesktopProfile } from './DesktopProfile';
import { MobileProfile } from './MobileProfile';

export const Profile = () => {

    const { logout } = useUser();

    const changeNIP = () => alert('Cambiar NIP presionado');
    const accesibility = () => alert('Accesibilidad presionado');

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 991.92px)' })

    return (
        <>
            {
                ( isDesktopOrLaptop )
                &&
                    <DesktopProfile handleLogout={logout} changeNIP={changeNIP} accesibility={accesibility}/>
            }
            {
                ( isMobile )
                &&
                    <MobileProfile handleLogout={logout} changeNIP={changeNIP} accesibility={accesibility}/>
            }
        </>
    )
}
