import React from 'react';
export const ContainerWrapper = (props) => {
    return (
        <div className="container-wrapper animate__animated animate__fadeIn animate__faster">
            { props.children }
        </div>
    )
}
