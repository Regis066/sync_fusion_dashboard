import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' instead of 'react-dom/client'
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
