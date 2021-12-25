import { useEffect } from 'react';

export const NavButtonProfile = (props) => {
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
        <button className="nav-link | btn-nav-uas" { ...others }>
            <i className={(icon) ? icon : ""}></i>
            <span>{ props.children }</span>
            <i className="ps-2 | d-lg-inline-block | d-none | fas fa-chevron-down | "></i>
        </button>
    )
}
