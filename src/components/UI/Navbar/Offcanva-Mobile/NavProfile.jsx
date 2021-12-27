import { Image } from 'react-bootstrap';
import { Dropdown } from '../../Dropdown/Dropdown';
import { LinkGroup } from '../../Dropdown/LinkGroup';

import { useUser } from '../../../../hooks/useUser';

export const NavProfile = ({ handleClick }) => {

    const { user, authLogout } = useUser();
    
    const changeNIP = () => alert('Cambiar NIP presionado');
    const accesibility = () => alert('Accesibilidad presionado');

    return (
        <li className="nav-item | profile-item">
            <Dropdown icon="fa fas fa-user" name="Mi perfil" profile="true">
                <LinkGroup>
                    <div className="nav-profile">
                        <div className="nav-profile__picture">
                            <div className="pic__container">
                                <Image src={ user.foto } roundedCircle />
                            </div>
                        </div>
                        <div className="nav-profile__info">
                            <button className="logout" onClick={authLogout}>Cerrar sesión</button>
                            <div className="data">
                                <span>{ user.nombre }</span>
                                <span>{ user.email }</span>
                                <span>Cuenta: { user.cuenta }</span>
                            </div>
                            <div className="options">
                                <button onClick={changeNIP} >Cambiar NIP</button>
                                <button onClick={accesibility} >Accesibilidad</button>
                            </div>
                        </div>
                    </div>
                </LinkGroup>
            </Dropdown>
        </li>
    )
}
