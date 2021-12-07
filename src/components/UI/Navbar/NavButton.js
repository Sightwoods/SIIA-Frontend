import React from "react";

export const NavButton = React.forwardRef(( props, ref ) => {
    return (
        <button className="nav-link | btn-nav-uas" ref={ref} onClick={props.onClick} onMouseDown={props.onMouseDown}>
            <i className={(props.icon) ? props.icon : ""}></i>
            <span>{ props.children }</span>
            {
                ( props.profile )
                &&
                    <i className="ps-2 | d-lg-inline-block | d-none | fas fa-chevron-down | "></i>
            }
        </button>
    )
})
