import React from "react";

function Peliculero(props) {
    return(
        <React.Fragment>
            <h1>
                <strong>{props.titulo}</strong>
            </h1>
            <p>
                {props.direccion}
            </p>
            <figure>
                <img src={props.cartel}></img>
            </figure>
            <p>
                {props.children}
            </p>
        </React.Fragment>
    );
}

export default Peliculero;