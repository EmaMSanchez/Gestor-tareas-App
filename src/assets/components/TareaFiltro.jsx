

const Filtro = ({tareasFaltantes,limpiarCompletados}) =>{
    return(
          
          <section className="py-4 px-4 flex justify-between rounded-b-md bg-white transition-all duration-1000 dark:bg-gray-800">
            <span className="text-gray-400"> {tareasFaltantes} tareas faltantes</span>
            <button className="text-gray-400" onClick={limpiarCompletados}>Limpiar Realizadas</button>
          </section>
         
     
    )
}

export default Filtro;