import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import 'animate.css';
import "react-widgets/styles.css";
import './styles/styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);