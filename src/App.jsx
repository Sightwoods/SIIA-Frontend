import React from 'react';

import { AppRouter } from './routers/AppRouter';
import { AppProvider } from './context/AppProvider';

export const App = () => {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    )
}
