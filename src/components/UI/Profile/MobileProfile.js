import React from 'react';
import { Image } from 'react-bootstrap';

import { MenuCanvas } from '../Navbar/Offcanva-Mobile/MenuCanvas';
import { image } from '../../../helpers/image';

export const MobileProfile = ({name="Mi perfil", icon="fa fas fa-user", ...props}) => {
    return (
        <MenuCanvas name={name} icon={icon} user="Ruben Gomez Ulloa">
            <div className="menuCanvas__profile">
                <button className="logout" onClick={props.handleLogout}>Cerrar sesión</button>
                <div className="profile__picture">
                    <div className="pic__container">
                        <Image src={ image('./ruben.jpg').default} roundedCircle />
                    </div>
                </div>
                <div className="profile__info">
                    <div className="data">
                        <span>Ruben Gomez Ulloa</span>
                        <span>r.gomez18@info.uas.edu.mx</span>
                        <span>1542924-5</span>
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
