import React from 'react';
import './CSS/Opcion.css';

function Opcion(props){
    return(
        <React.Fragment>
            <li className='Opcion' ><a href='./'>{props.opcion}</a></li> {/*Cada opción es una linea de la lista que hay en menú.*/}
        </React.Fragment>
    )
}

export default Opcion;