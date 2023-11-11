import React from "react";
import IconoCheked from "./iconos/IconoCheked";
import IconoCruz from "./iconos/IconoCruz";

const Tarea = React.forwardRef(({tarea,deleteTarea,updateTarea, ...props}, ref) =>{

  const {id,titulo,completado} = tarea;
  
      return(
          <article {...props} ref={ref} className="flex gap-4 border-b-gray-300 border-b "> {/*La lase dark: tailwind toma la configuracion del sistema operativo y dependiendo de este aplica el estilo(especie de hoover)*/}
          {/* <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>  */}
          <button onClick={()=> updateTarea(id)} className={`h-5 w-5 flex-none rounded-full border-2 ${
            completado?
             "flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center justify-center": "inline-block"
          }`}
            
          >
            {
              completado && <IconoCheked/>
            }
          </button> {/*Bg gradient cambia el back a un color gradiant, via es el color medio, las clases repetidas (que se aplican de todas formas se dejan fuera del template string `{${}}`(no se realiza comparacion)*/}
          
          <p className={`grow dark:text-gray-400 ${
            completado?
             "text-gray-400 text font-extralight line-through dark:text-gray-600 text font-extraligh " : "text-gray-500 dark:text-gray-400"
          }`}>{titulo}</p> {/*GROWes propiedad de flex, hace que el elemento crezca lo maximo posible dentro del container */}
          <button className="flex-none" onClick={()=>deleteTarea(id)}><IconoCruz/></button> {/*AL HCAER CLICK se captura las propiedades, en este caso el ID */}
        </article>
      )
  });

export default Tarea;