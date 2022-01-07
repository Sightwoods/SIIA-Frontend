import React from 'react'

import { ContainerWrapper } from '../UI/ContainerWrapper';
import { Main } from './Main';

export const Layout = ({children}) => {
    return (
        <ContainerWrapper>
            <Main>{children}</Main>
        </ContainerWrapper>
    )
}
