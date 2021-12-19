import { Image } from 'react-bootstrap';
import { image } from '../../../helpers/image';
import { Dropdown } from '../Dropdown/Dropdown';
import { LinkGroup } from '../Dropdown/LinkGroup';

import { useUser } from '../../../hooks/useUser';

export const DesktopProfile = ({handleLogout}) => {

    const { user } = useUser();

    return (
        <Dropdown icon="fa fas fa-user" name="Mi perfil" profile="true">
            <LinkGroup>
                <div className="nav-profile">
                    <div className="nav-profile__picture">
                        <div className="pic__container">
                            <Image src={ image('./ruben.jpg').default} roundedCircle />
                        </div>
                    </div>
                    <div className="nav-profile__info">
                        <button className="logout" onClick={handleLogout}>Cerrar sesión</button>
                        <div className="data">
                            <span>{ user.name }</span>
                            <span>{ user.email }</span>
                            <span>{ user.cuenta }</span>
                        </div>
                        <div className="options">
                            <button>Cambiar NIP</button>
                            <button>Accesibilidad</button>
                        </div>
                    </div>
                </div>
            </LinkGroup>
        </Dropdown>
    )
}
