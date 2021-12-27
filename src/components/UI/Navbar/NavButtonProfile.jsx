import { useEffect } from 'react';
import { useUser } from '../../../hooks/useUser';

export const NavButtonProfile = (props) => {

    const { user } = useUser();
    const name = user.nombre.split(" ")[0];

    const { icon, state, ...others } = props;
    useEffect(() => {
        const isProfile = document.querySelector('.dropdown .btn-nav-uas[profile]');
        const profileIcon = document.querySelector('.btn-nav-uas i:last-child');
        if ( state && isProfile ) {
            ( profileIcon ) && profileIcon.classList.add('open-profile');
        }
        else {
            ( profileIcon ) && profileIcon.classList.remove('open-profile');
        }
    }, [state])

    return (
        <button className="nav-link | btn-nav-uas | d-flex | align-items-center" { ...others }>
            <img className="nav-profile--picture | me-2 | ms-2 | rounded-circle" 
                alt="Profile"
                width={32}
                height={32}
                src={user.foto}
            />
            <span>{ name }</span>
            <i className="ps-2 | d-lg-inline-block | d-none | fas fa-chevron-down | "></i>
        </button>
    )
}
