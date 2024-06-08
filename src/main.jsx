import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './jsx/DarkModeContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
