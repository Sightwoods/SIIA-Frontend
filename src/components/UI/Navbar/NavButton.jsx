import { NavButtonProfile } from "./NavButtonProfile";

export const NavButton = ( props ) => {
    const { icon, state, ...others } = props;
    
    return (props.profile) 
    ?
    (
      <NavButtonProfile icon={icon} state={state} {...others} />
    )
    :
    (
        <button className="nav-link | btn-nav-uas" { ...others }>
            <i className={(icon) ? props.icon : ""}></i>
            <span>{ props.children }</span>
            {
                ( props.profile )
                &&
                    <i className="ps-2 | d-lg-inline-block | d-none | fas fa-chevron-down | "></i>
            }
        </button>
    )
}
