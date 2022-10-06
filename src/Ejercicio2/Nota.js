import React from 'react';

function Nota(props){
    let estrellas ="" 
    for (let index = 0; index < props.nota; index++) {// Este for pone estrellas según la nota que tenga.
        estrellas+="*";
        
    }
    return(
        
        <React.Fragment>
            <p>{estrellas}</p>
        </React.Fragment>
    )
}

export default Nota;