import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     document.getElementById('root')
     );
registerServiceWorker();
