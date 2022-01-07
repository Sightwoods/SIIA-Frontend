import React from 'react';

import { AppProvider } from './context/AppProvider';
import { MainRouter } from './routers/MainRouter';

export const App = () => {
    return (
        <AppProvider>
            <MainRouter />
        </AppProvider>
    )
}
