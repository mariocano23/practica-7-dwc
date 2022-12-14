import React from 'react';
import Cabezera from './Cabecera';
import Peliculero from './Peliculero';
import PiePagina from './PiePagina';
import './CSS/Contenedor.css'
import peliculas from './Ejercicio2.json';

function Contenedor(props){ //Este componente es el que almacena a todos los demas componentes.
    return(
        <React.Fragment>
            <wrapper className='Contenedor'>
                <Cabezera descri="Página de Películas"></Cabezera>
                {peliculas["peliculas"].map((v) =>{
                    return(
                        <Peliculero titulo={v.nombre}
                        direccion={v.director}
                        clasificacion={v.clasificacion}
                        cartel={v.cartelera}
                        nota={v.nota}
                        >
                            {v.resumen}
                        </Peliculero>
                    );
                })}
            </wrapper>
            <PiePagina autor="Mario Cano"></PiePagina>
        </React.Fragment>
    )
}

export default Contenedor;