import React from 'react';
import { Profile } from './Profile';

export const NavProfile = () => {
    return (
        <li className="nav-item | profile-item">
            <Profile />
            <hr className="d-lg-none | d-sm-block | uas-divider"/>
        </li>
    )
}
