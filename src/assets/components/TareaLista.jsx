import { Draggable, Droppable } from '@hello-pangea/dnd';
import Tarea from "./Tarea";

/* [&>article]:px-4 ES UN SELECTOR, a todos los articulos dentro de DIV se le aplica un PX_$ */
const Lista = ({tareas,deleteTarea,updateTarea}) => {
  

  return(

      <Droppable droppableId='tareas'>
        {
          (droppanleProveedor) => (
            <div ref={droppanleProveedor.innerRef} {...droppanleProveedor.droppableProps} className="mt-8 overflow-hidden bg-white rounded-t-md [&>article]:p-4 transition-all duration-1000  dark:bg-gray-800"> 
               {
               tareas.map((tarea,index) =>(
                <Draggable key={tarea.id} index={index} draggableId={`${tarea.id}`}>
                  {
                    (draggableProveedor)=>(
                      <Tarea  tarea={tarea} deleteTarea={deleteTarea} updateTarea={updateTarea} ref={draggableProveedor.innerRef} {...draggableProveedor.dragHandleProps} {...draggableProveedor.draggableProps} /> //Se debe hacer un reenvio de ref fowarReff
                    )
                  }
                 
                </Draggable>
               
                 ))
               }
               {droppanleProveedor.placeholder}
          </div>
          )
        }
         
     </Droppable>
      
    )
}

export default Lista;