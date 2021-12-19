import React from 'react'

import { ContainerWrapper } from '../UI/ContainerWrapper';
import { Header } from './Header';
import { Main } from './Main';

export const Layout = ({children}) => {
    return (
        <ContainerWrapper>
            <Header />
            <Main>{children}</Main>
        </ContainerWrapper>
    )
}
