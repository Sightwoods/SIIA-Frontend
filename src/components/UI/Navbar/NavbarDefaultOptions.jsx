import { Link } from 'react-router-dom';

export const NavbarDefaultOptions = () => {
    return (
        <>
            <ul className="navbar-nav | mb-lg-0">
                <li className="nav-item">
                    <button className="nav_login">
                        (<Link to="/login">Iniciar sesión</Link>)
                    </button>
                </li>
            </ul>   
        </>
    )
}
