import React from 'react';
import './CSS/Opcion.css';

function Opcion(props){
    return(
        <React.Fragment>
            <li className='Opcion' ><a href='./'>{props.opcion}</a></li>
        </React.Fragment>
    )
}

export default Opcion;