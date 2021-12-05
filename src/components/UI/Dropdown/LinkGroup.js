import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'

export const LinkGroup = ({title, children}) => {
    if ( !title ){
        return (
            <Container>
                <div>
                    { children }
                </div>
            </Container>
        )
    }
    
    return (
        <Container>
            <h4 className="text-uppercase d-inline-block fs-6 fw-bold pt-3">{title}</h4>
            <Dropdown.Divider />
            <div className="linkgroup">
                { children }
            </div>
        </Container>
    )
}
