import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../src/App.css'
import '../src/styles/global.css'
import '../src/styles/theme.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)