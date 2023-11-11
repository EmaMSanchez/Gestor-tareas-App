import "./assets/utils/darkMode" //Se guarda la configuracion en el app debido a que es una configuracion global(en este caso se debe acceder al DOOM)
//DEBE IR ANTES DE APP asi comprueba antes en localStorage de que se ejecute la app si existen configuraciones previas, si no existe toma el modo por defecto de windows(dark/light)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
