import React from 'react';
import Opcion from './Opcion';
import './CSS/Menu.css';

function Menu(props){
    const opciones=[ //Este array guarda las opciones que apareceran en el menú.
        {id:1,opcion:"Inicio"},
        {id:2,opcion:"Contacto"},
        {id:3,opcion:"Etc"}
    ]
    return(
        <React.Fragment>
            <ul className='Menu'>
                {opciones.map((v) => {
                    return(
                        <Opcion opcion={v.opcion}></Opcion> /*He introducido el componente opcion dentro de menú.*/
                    );
                })}
            </ul>
        </React.Fragment>
    )
}

export default Menu;