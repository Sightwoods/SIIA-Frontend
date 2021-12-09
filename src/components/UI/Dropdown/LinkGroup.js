import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'

export const LinkGroup = ({title, children}) => {
    if ( !title ){
        return (
            <Container className="linkgroup">
                <div className="group">
                    { children }
                </div>
            </Container>
        )
    }
    
    return (
        <Container className="linkgroup">
            <h4 className="text-uppercase d-inline-block fs-6 pt-3 subtitle">{title}</h4>
            <Dropdown.Divider />
            <div className="group__section">
                { children }
            </div>
        </Container>
    )
}
