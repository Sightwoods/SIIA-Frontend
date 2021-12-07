import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'react-bootstrap';
import { image } from '../../../helpers/image';
import { NavButton } from '../Navbar/NavButton';

export const DesktopProfile = ({handleLogout}) => {
    const [isOpen, setIsOpen] = useState(false);
    const profile = useRef(null);

    const handleClick = () => setIsOpen( v => !v );

    useEffect(() => {
        if ( isOpen )
            profile.current.children[2].classList.add('open-profile');
        else
            profile.current.children[2].classList.remove('open-profile');
    }, [isOpen, profile]);

    return (
      <>
        <NavButton icon="fa fas fa-user" onClick={handleClick} ref={profile} profile={true}>Ruben Gomez</NavButton>
        {
            ( isOpen )
            &&
            <div className="profile | animate__animated | animate__fadeInDown | animate__faster">
                <div className="profile__picture">
                    <div className="pic__container">
                        <Image src={ image('./ruben.jpg').default} roundedCircle />
                    </div>
                </div>
                <div className="profile__info">
                    <button className="logout" onClick={handleLogout}>Cerrar sesión</button>
                    <div className="data">
                        <span>Ruben Gomez Ulloa</span>
                        <span>r.gomez18@info.uas.edu.mx</span>
                        <span>1542924-5</span>
                    </div>
                    <div className="options">
                        <button>Cambiar NIP</button>
                        <button>Accesibilidad</button>
                    </div>
                </div>
            </div>
        }
      </>
    )
}
