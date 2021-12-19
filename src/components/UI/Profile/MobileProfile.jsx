import React from 'react';
import { Image } from 'react-bootstrap';

import { MenuCanvas } from '../Navbar/Offcanva-Mobile/MenuCanvas';
import { image } from '../../../helpers/image';
import { useUser } from '../../../hooks/useUser';

export const MobileProfile = ({name="Mi perfil", icon="fa fas fa-user", ...props}) => {
    const { user } = useUser();

    return (
        <MenuCanvas name={name} icon={icon} user={ user.name }>
            <div className="canvasMenu__profile">
                <button className="logout" onClick={props.handleLogout}>Cerrar sesión</button>
                <div className="profile__picture">
                    <div className="pic__container">
                        <Image src={ image('./ruben.jpg').default} roundedCircle />
                    </div>
                </div>
                <div className="profile__info">
                    <div className="data">
                        <span>{ user.name }</span>
                        <span>{ user.email }</span>
                        <span>{ user.cuenta }</span>
                    </div>
                    <div className="options">
                        <button onClick={props.changeNIP}>Cambiar NIP</button>
                        <button onClick={props.accesibility}>Accesibilidad</button>
                    </div>
                </div>
            </div>
        </MenuCanvas>
    )
}
