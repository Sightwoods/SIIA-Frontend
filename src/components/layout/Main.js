import React from 'react'

export const Main = (props) => {
    return (
        <main className="animate__animated | animate__fadeIn | animate__faster">
            { props.children }
        </main>
    )
}
