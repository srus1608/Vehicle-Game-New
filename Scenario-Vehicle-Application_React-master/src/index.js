import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ActivePageProvider from './contexts/ActivePageProvider';
import 'semantic-ui-css/semantic.min.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActivePageProvider>
      <App />
    </ActivePageProvider>
  </React.StrictMode>
);

reportWebVitals();

