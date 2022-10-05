import React from 'react';

function PiePagina(props){
    return(
        <React.Fragment>
            <footer>Página creada por {props.autor}. 2022</footer>
        </React.Fragment>
    )
}

export default PiePagina;