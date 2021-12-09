import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';

export const BarsCross = () => {
    const {isNavOpen} = useContext(AuthContext);

    return (
        <div className="selector show">
            <div className={`bar-icon-wrapper ${(isNavOpen) ? 'active' : ''}` }>
                <span className="bar-icon"></span>
                <span className="bar-icon"></span>
                <span className="bar-icon"></span>
            </div>
        </div>
    )
}
