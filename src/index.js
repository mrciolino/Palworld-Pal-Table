import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.css';

const reactRoot = createRoot(document.getElementById('root'));
reactRoot.render(<App />);

if (module.hot) {
    module.hot.accept();
}
