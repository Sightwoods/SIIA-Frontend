import React from 'react';

import { Navbar } from '../UI/Navbar';
import { image } from '../../helpers/image';

export const Header = () => {
    return (
        <header className="header n">
            <div className="h-25 w-100">
                <div className="d-flex justify-content-around align-items-center">
                    <img alt="Logo" src={image('./UAS.png').default} className="logo"/>
                    <h2 className="fw-bold text-center">Universidad Autónoma <br/>de Sinaloa</h2>
                    <img alt="Logo" src={image('./VISION_2.png').default} className="logo"/>
                </div>
            </div>
            <div>
                <Navbar />
            </div>  
        </header>
    )
}
