import React, { Children } from 'react'

export const DropdownContainer = ({children}) => {
    return (
        <div className={`animate__animated animate__fadeIn animate__faster DropdownContainer`}>
            <div className="DropdownContainer__row">
                {
                    Children.toArray(children).map((child, idx) => (
                        <div key={idx} className="child">
                            { child }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
