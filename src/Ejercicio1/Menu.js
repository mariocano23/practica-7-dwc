import React from 'react';
import Opcion from './Opcion';

function Menu(props){
    const opciones=[
        {id:1,opcion:"Inicio"},
        {id:2,opcion:"Contacto"},
        {id:3,opcion:"Etc"}
    ]
    return(
        <React.Fragment>
            <ol>
                {opciones.map((v) => {
                    return(
                        <Opcion opcion={v.opcion}></Opcion>
                    );
                })}
            </ol>
        </React.Fragment>
    )
}

export default Menu;