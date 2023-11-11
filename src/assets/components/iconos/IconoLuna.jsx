const IconoLuna = ({fill,...props}) =>{ //({fill, ...props}) se puede hacer un rest operator (...props), es decir se especifica el color y el resto de las propiedades las agrega dentro de prop, luego usando un split operator {...props} dento del componente para iterarse dentro de el desestructurandolo
    return(
<svg 
// fill={fill} -> Puede usarse la propiedad dentro de la parte svg y recivir propiedades(props)
{...props} //Recive en prop classname fill-color, aplicando el color definido
xmlns="http://www.w3.org/2000/svg" 
width="26" 
height="26">
    
    <path /*fill="#FFF"*/ fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>   
        //IMPORTANTE fill-rule="evenodd", fue cambiado a fillRule(notacion camell), debido a que JSX(JS) NO TOMA los - (guiones)
       //FILL es el color del SVG (SVG es un vector)
        )
}

export default IconoLuna;