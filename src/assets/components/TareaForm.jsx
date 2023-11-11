import { useState } from "react";

const Formulario = ({crearTarea}) =>{
  const [titulo,setTitulo] = useState("");
  
  const agregarTarea = (evento) =>{
    evento.preventDefault();

    if(!titulo.trim()){ //Si es nulo titulo entra y no procesa nada, solo resetea el input
      
     return setTitulo("")
    }
      crearTarea(titulo);
      setTitulo("") //Luego de procesar el formulario se setea el valor en 0
   
    } ;
  
  
  return(
         

             <form onSubmit={agregarTarea} className="bg-white rounded-md overflow-hidden flex items-center py-4 px-4 gap-4 transition-all duration-1000 dark:bg-gray-800 "> {/*overflow-hidden HACE que el contenido no escape de su contenedor */}
             <span className="inline-block h-5 w-5 rounded-full border-2 flex-none"></span>
             <input type="text" placeholder="Crea una tarea" className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800" value={titulo} onChange={(evento)=> setTitulo(evento.target.value)} />{/*A diferencia de onClick en onChange se DEBE capturar el evento */} 
           </form>
  
    );
}

export default Formulario;