import React from 'react';
import Cabezera from './Cabecera';
import Peliculero from './Peliculero';
import PiePagina from './PiePagina';
import './CSS/Contenedor.css'

function Contenedor(props){
    return(
        <React.Fragment>
            <wrapper className='Contenedor'>
                <Cabezera descri="Página de Películas"></Cabezera>
                <Peliculero titulo="Titanic" direccion="James Cameron, Pamela Easley, Jon Landou" cartel="https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F044%2F428%2Ftitanic-1.jpg&nuevoancho=620&medio=abc">
      Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido.
    </Peliculero>
    <Peliculero titulo="Titanic" direccion="James Cameron, Pamela Easley, Jon Landou" cartel="https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F044%2F428%2Ftitanic-1.jpg&nuevoancho=620&medio=abc">
      Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido.
    </Peliculero>
            </wrapper>
            <PiePagina autor="Mario Cano"></PiePagina>
        </React.Fragment>
    )
}

export default Contenedor;