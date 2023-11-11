import { DragDropContext } from '@hello-pangea/dnd';
import { useEffect, useState } from "react";
import Header from "./assets/components/Header";
import Computos from "./assets/components/TareaComputos";
import Drop from "./assets/components/TareaDragAndDrop";
import Filtro from "./assets/components/TareaFiltro";
import Formulario from "./assets/components/TareaForm";
import Lista from "./assets/components/TareaLista";

const estadoInicial = JSON.parse(localStorage.getItem("tareas2")) || []; //Se transforma el texto o cadena de string JSON a un objeto, obteniendo los items de la KEY a travez de localStorage.getItem, en caso de ESTAR VACIO, es decir false, lo INICIALIZA como ARREGLO VACIO

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() { 
  

  const [tareas,setTareas] = useState(estadoInicial);

  useEffect(()=>{//Debe llamarse luego del State por buenas practicas
    localStorage.setItem("tareas2", JSON.stringify(tareas)); //Llama a localStorage, para SETEAR (actualizar(similar push), el ARREGLO de OBJETOS llamado TAREAS, al METODO se le envia el NOMBRE o KEY(llave de acceso), donde se almacena el objeto en cadena de texto y JSON.stringify pasando dicho objeto a CADENA de STRING JSON, legible para localStorage

  },[tareas]) //Escucha los cambios producidos en tareas (setTareas)
  
  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setTareas((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
};

const crearTarea = (titulo) =>{
  const nuevaTarea ={
    id: Date.now(),
    titulo: titulo.trim(), //Usamos el titulo que nos llega del formulario al pasarle el metodo como propiedad y le limpiamos los espacios
    completado: false
    
  }
  localStorage.getItem("theme") === "dark"?
  Swal.fire({
    position: 'center',
 icon: 'success',
 title: 'Tarea Agregada!',
 color: '#fff',
 background:'#000',
 showConfirmButton: false,
 timer: 1500,
}) : Swal.fire({
  position: 'center',
icon: 'success',
title: 'Tarea Agregada!',
showConfirmButton: false,
timer: 1500
})
  setTareas([...tareas,nuevaTarea]);
}

const deleteTarea = (id) =>{
  setTareas(tareas.filter((tarea) => tarea.id !==id));
};

const updateTarea = (id) =>{
    setTareas(tareas.map(tarea => tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea));
}

const tareasFaltantes = tareas.filter((tarea) => !tarea.completado).length; //El filter devuelve todas las tareas NO completadas (!tarea.completada)

const limpiarCompletados = () =>{
  setTareas(tareas.filter((tarea) => !tarea.completado));
}

const [filtro,setFiltro] = useState("all"); //Por default se va a mostrar too el arreglo de tareas (filtro inicia en all, filtro siendo un estado que toma distintos valores segun donde sea llamado)

const estadoFiltro = (filtro) => setFiltro(filtro) //Nos llega el valor de filtro del formulario, seteando el nuevo valor

const filtrador = () => { //No necesita recivir parametro, el useState modifica el valor filtro proveniente del formulario
  switch (filtro) {
    case "all":
      return tareas;
    case "activas":
      return tareas.filter((tarea) => !tarea.completado ); //Devuelve las tareas que tienen como FALSE el atributo completado
    case "realizadas":
       return tareas.filter((tarea) => tarea.completado );  //Devuelve las tareas que tienen como TRUE el atributo completado
    default:
      return tareas; //En caso de que suceda un imprevisto y no caiga en ninguna opcion retorna todas las tareas
  }
};

return (
    <>
    <div className="transition-all duration-1000 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-300 min-h-screen  dark:bg-gray-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)]
    md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)] "> {/*Div que cpntiene titulo y boton para agregar Imagen de fondo, las [] permiten agregar VALORES PERSONALIZABLES(dinamicos), en este caso la url de una imagen, bg no repeat hace que la imagen no se repita */}
     
      <Header/>

        <main className="container mx-auto px-4 mt-8 md:max-w-xl">
           <Formulario crearTarea={crearTarea}  />
          
          <DragDropContext onDragEnd={handleDragEnd}>
            <Lista 
            tareas={filtrador()} 
             deleteTarea={deleteTarea} 
             updateTarea={updateTarea} 
            /> {/*Se le pasa como tareas para mostrar el retorno de tareas filtradas(sin modificar el arreglo) */}
          </DragDropContext>
           
           
           <Filtro tareasFaltantes={tareasFaltantes} limpiarCompletados={limpiarCompletados} /> {/*Pasamos la funcion ya accionada por que devuelve el numero de tareas faltantes */}
           
           <Computos estadoFiltro={estadoFiltro} filtro={filtro}/> {/*Le enviamos el texto para que reciva el valor y cambiar de manera activa las clases*/} 
          
        </main>
 

        <Drop/>
    </div>
   
    </>
  )
}

export default App;
