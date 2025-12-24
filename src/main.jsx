import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stare from './components/common/Stare.jsx'
import Navcontext from './context/Navcontext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Stare>
    <Navcontext>
        
    <App />
    </Navcontext>
  </Stare>
</BrowserRouter>
)
