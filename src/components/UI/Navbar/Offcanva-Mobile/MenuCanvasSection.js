import React, { Children } from 'react'

export const MenuCanvasSection = ({ name, children }) => {
    return (
        <>
            <span className="canvasMenu__subtitle">{name}</span>
            {
                Children.toArray(children).map((child, idx) => (
                    <li key={idx} className="nav-item">
                        { child }
                    </li>
                ))
            }
        </>
    )
}
