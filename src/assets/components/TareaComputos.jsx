const Computos = ({estadoFiltro, filtro}) =>{
    return(
     <section className="container mx-auto px-4 mt-8">
        <div className=" transition-all duration-1000 bg-white p-4 rounded-md flex justify-center gap-4  dark:bg-gray-800"> {/*Flex permite meter GAP (separacion entre elementos dentro del elemento que los contiene), sin necesidad de modificar cada elemento para separarlos */}
         <button className={`${filtro === "all" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"}`} onClick={()=>estadoFiltro("all")}>Todas</button> {/*Se puede aplicar hover: dentro de classname */}
          <button className={`${filtro === "activas" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"}`} onClick={()=>estadoFiltro("activas")}>Activas</button>
          <button className={`${filtro === "realizadas" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"}`} onClick={()=>estadoFiltro("realizadas")} >Realizadas</button>
        </div>
      </section>
    )
}

export default Computos;