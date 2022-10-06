import React from "react";
import './CSS/Peliculero.css'

function Peliculero(props) {
    return(
        <React.Fragment>
            <article className='Pelicula'>
                <h1>
                    <strong>{props.titulo}</strong>
                </h1>
                <figure>
                    <img src={props.cartel}></img>
                </figure>
                <p>
                    {props.direccion}
                </p>
                <p>
                    {props.clasificacion}
                </p>
                <p>
                    {props.nota}
                </p>
                <p>
                    {props.children}
                </p>
            </article>
        </React.Fragment>
    );
}

export default Peliculero;