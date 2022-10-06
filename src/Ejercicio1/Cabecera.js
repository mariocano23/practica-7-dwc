import React from 'react';
import Menu from './Menu';
import './CSS/Cabecera.css';

function Cabezera(props){
    return(
        <React.Fragment>
        <header className='Cabezera'>
            <h1>{props.descri}</h1>
            <Menu></Menu> {/*He introducido el menú dentro de la cabecera.*/}
        </header>
        </React.Fragment>
    )
}

export default Cabezera;