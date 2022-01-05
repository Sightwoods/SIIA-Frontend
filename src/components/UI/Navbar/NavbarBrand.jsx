import { Link } from 'react-router-dom';
import { image } from '../../../helpers/image';
import { useUser } from '../../../hooks/useUser';

export const NavbarBrand = () => {

    const { authLogout } = useUser();

    return (
        <Link className="navbar-brand | p-1" to="/">
            <img
                src={image('./UAS.png')}
                alt="UAS logo"
                width="25"
                height="30"
                className="d-inline-block | align-text-top"
                onClick={authLogout}    
            />{' '}
            <span className="title | d-lg-inline-block | d-none">Universidad Autónoma de Sinaloa</span>
            <span className="title | d-inline-block | d-lg-none">UAS</span>
        </Link>
    )
}
