import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Hero from '../Hero.jsx'
import Core from '../Core.jsx'
import Featured from '../Featured.jsx'
import Evoryte from '../Evoryte.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Core />
    <Featured />
    <Evoryte />
  </StrictMode>,
)
