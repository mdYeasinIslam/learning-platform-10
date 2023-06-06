import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './Context/UserContext.jsx'
import InsideContext from './Context/InsideContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <InsideContext>
        <App />
      </InsideContext>
    </UserContext>
  </React.StrictMode>,
)
