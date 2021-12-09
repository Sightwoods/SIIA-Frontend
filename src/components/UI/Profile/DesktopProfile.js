import { Image } from 'react-bootstrap';
import { image } from '../../../helpers/image';
import { Dropdown } from '../Dropdown/Dropdown';
import { LinkGroup } from '../Dropdown/LinkGroup';

export const DesktopProfile = ({handleLogout}) => {

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
            </LinkGroup>
        </Dropdown>
    )
}
