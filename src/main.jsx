import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './contexts/ContextProvider';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
    <ContextProvider>
    <App />
    </ContextProvider>
)
