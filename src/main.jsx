import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'sweetalert2'
import 'animate.css'
import 'react-icons'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
