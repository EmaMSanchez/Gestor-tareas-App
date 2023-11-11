const IconoCruz = () =>{ //Este componente retorna un archivo svg(Generalmente iconos) -> Los SVG DEBEN TRANSFORMARSE en componentes para ser utilizados

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
   
        //IMPORTANTE fill-rule="evenodd", fue cambiado a fillRule(notacion camell), debido a que JSX(JS) NO TOMA los - (guiones)
        )
}

export default IconoCruz;