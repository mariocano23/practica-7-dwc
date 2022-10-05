import React from 'react';
import Menu from './Menu';

function Cabezera(props){
    return(
        <React.Fragment>
        <header>
            <h1>{props.descri}</h1>
            <Menu></Menu>
        </header>
        </React.Fragment>
    )
}

export default Cabezera;