import { useEffect, useState } from "react"
import IconoLuna from "./iconos/IconoLuna"
import IconoSol from "./iconos/IconoSol";

const inicialSetDarkMode = localStorage.getItem("theme") === "dark"; //Se consulta a la BD del buscador el valor del theme(con localStorage.getItem("theme") ) , si es dark devuelve true, si no devuelve falso

const Header = () => {

  const [darkMode,setDarkMode] = useState(inicialSetDarkMode); //Se necesita un estado para poder renderizar en cada cambio, reciviendo true o false
  
  useEffect(() =>{
    if(darkMode){ //Si es VERDADERO el estado cambia el HTML del DOOM(agregandole la clase dark)
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); //Guarda en el localStorage(BD del buscador), en la llave theme(tema) el estado dark
    }else{
      document.documentElement.classList.remove('dark'); //Si es FALSO el estado cambia el HTML del DOOM(quita el dark)
      localStorage.setItem('theme', 'light'); //Guarda en el localStorage(BD del buscador), en la llave theme(tema) el estado light
    }
  },[darkMode]) //useEfect esta pendiente del cambio de estado de darkMode, RENDERIZANDO LA PAGINA y EJECUTANDO CODIGO cada vez que cambie el ESTADO
    
  
  return(
        <header className="container mx-auto px-4 pt-8 max-w-xl" /*mx es el margen a los costados px pading a los costados*/>
         <div className="flex justify-between">
             <h1 className="text-2xl font-semibold uppercase tracking-[0.4em] text-white ">Tarea</h1> {/*Md hace un punto de quiebre en pantallas medianas viendo el texto al centro  npm install -D prettier prettier-plugin-tailwindcss AUTOMATICAMENTE ORDENA LAS CLASES UTILITARIAS(hacen 1 sola operacion), tracking(separacion de letras)*/}
             <button onClick={()=> setDarkMode(!darkMode)}>
               {
                darkMode? <IconoSol/> : <IconoLuna fill="#000" className="fill-white"/>
               }
            </button>
         </div>
        
        
      </header>
    )
    
}

export default Header;