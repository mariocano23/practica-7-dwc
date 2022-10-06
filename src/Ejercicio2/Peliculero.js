import React from "react";
import './CSS/Peliculero.css'

function Peliculero(props) {
    return(
        <React.Fragment>
            <article className='Pelicula'>
                <h1>
                    <strong>{props.titulo}</strong> {/*He usado strong para resaltar el título.*/}
                </h1>
                <figure>
                    <img src={props.cartel}></img>
                </figure>
                <p>
                    {props.direccion}
                </p>
                <p>
                    {props.clasificacion} {/*He añadido los datos que aparecen en el json.*/}
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