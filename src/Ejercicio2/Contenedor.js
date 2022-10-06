import React from 'react';
import Cabezera from './Cabecera';
import Peliculero from './Peliculero';
import PiePagina from './PiePagina';
import './CSS/Contenedor.css'

function Contenedor(props){
    const peliculas= [
        {
          id: 1,
          nombre: "El sexto sentido",
          director: "M. Night Shyamalan",
          clasificacion: "Drama",
          cartelera: "https://www.ecartelera.com/carteles/5400/5409/001.jpg",
          nota: 8,
          resumen:"El Dr. Malcom Crowe es un conocido psicólogo infantil obsesionado con el doloroso recuerdo de un joven paciente desequilibrado al que fue incapaz de ayudar. Cole Sear es un aterrorizado y confuso niño de ocho años que necesita tratamiento, El Dr. Crowe ve la oportunidad de redimirse haciendo todo lo posible por ayudarle. Al principio Cole es muy reticente a la ayuda del psicólogo, pero poco a poco, va confiando en el doctor, quien sólo intenta ayudarle. Sin embargo, Malcom no está preparado para conocer la terrible verdad acerca del don sobrenatural de su paciente. Recibe visitas no deseadas de espíritus atormentados. Una de las películas más aclamadas del director indio M. Night Shyamalan."
        },
        {
          id: 2,
          nombre: "Pulp Fiction",
          director: "Tarantino",
          clasificacion: "Acción",
          cartelera: "https://www.ecartelera.com/carteles/200/286/001.jpg",
          nota: 9,
          resumen:"Narrada de una forma no lineal, la historia principal cuenta la historia de Vincent Vega (John Travolta) y Jules Winnfield (Samuel L. Jackson), son dos asesinos a sueldo que tienen como misión recuperar un misterioso maletín. Vincent le confiesa a Jules que Marsellus Wallace (Ving Rhames), su jefe, le ha pedido que cuide de su mujer Mia (Uma Thurman) mientras él está fuera de la ciudad, pero deberá tener cuidado ya que se rumorea que Marsellus mató a un hombre por tocarle los pies a Mia. Por otro lado, Butch Coolidge (Bruce Willis), boxeador, es pagado por Marsellus para perder a propósito en su próxima pelea, pero termina matando sin querer a su contrincante. Lo que provoca que él y sus secuaces le persigan, haciendo que trate de huir de la ciudad. Y por último, la situación del restaurante en la que una mujer y su marido tratan de atracarlo. La película está escrita y dirigida por Quentin Tarantino, y es considerada una de las obras cumbre del cine moderno. Ganó la Palma de Oro en el prestigioso festival de Cannes en 1994 y un Óscar por mejor guion original."
        },
        {
          id: 3,
          nombre: "300",
          director: "Zack Snyder",
          clasificacion: "Acción",
          cartelera: "https://www.ecartelera.com/carteles/1300/1370/001.jpg",
          nota: 7,
          resumen:"Basada en la épica novela gráfica de Frank Miller, 300 narra una vez más de manera atroz la antigua Batalla de Termópilas, en la que el rey Leónidas (Gerard Butler), junto con 300 espartanos, luchó a muerte contra el Emperador Jerjes y su gran ejército persa. Haciendo frente a insuperables adversidades, el valor y sacrificio de estos hombres inspiró a toda Grecia para unirse contra el enemigo persa, y así decir basta a esa situación en favor de la democracia. La película hace cobrar vida a la aclamada novela gráfica de Miller (Sin City) al combinar la acción real con fondos digitales que reproducen su marcada visión de este antiguo cuento histórico."
        },
        {
          id: 4,
          nombre: "El silencio de los corderos",
          director: "Jonathan Demme",
          clasificacion: "Drama",
          cartelera: "https://www.ecartelera.com/carteles/2500/2508/001.jpg",
          nota: 8,
          resumen:"El FBI busca a un asesino en serie, le llaman Buffalo Bill, todas las víctimas a las que mata este asesino son chicas adolescentes, pero sólo las mata después de prepararlas minuciosamente y arrancarles la piel. Para poder atraparlo contactan con Clarice Starling, una brillante licenciada universitaria, experta en conductas psicópatas, que aspira a formar parte del FBI. Siguiendo las instrucciones de su jefe, Jack Crawford, Clarice visita la cárcel de alta seguridad donde el gobierno mantiene encerrado a Hanibal Lecter, antiguo psicoanalista y asesino, dotado de una inteligencia superior a la normal. Su misión será intentar sacarle información sobre los patrones de conducta de Buffalo Bill."
        },
        {
          id: 5,
          nombre: "Forrest Gump",
          director: "Robert Zemeckis",
          clasificacion: "Comedia",
          cartelera: "https://www.ecartelera.com/carteles/3400/3475/001.jpg",
          nota: 9,
          resumen:"Forrest Gump es un tipo con discapacidades mentales no muy profundas y algunas alteraciones motoras, pero a pesar de todo, la persistencia y la bondad le llevará a conseguir una gran fortuna, estar sujeto al clamor popular y codearse con las más altas esferas sociales y políticas del país . Forrest se sienta en un banco y habla de sus experiencias con los extranjeros que se sientan con él. Y es que Forrest ha vivido gran parte de la historia reciente de los Estados Unidos de América. Y además de todo eso tiene una gran historia que contar acerca de su mejor amigo, Bubba, a quien conoce en la guerra de Vietnam. Y el amor de su vida que conoce desde que eran niños, Jenny. Forrest Gump no es un tipo inteligente, pero ya que es un buen tipo."
        },
        {
          id: 6,
          nombre: "Concursante",
          director: "Rodrigo Cortés",
          clasificacion: "Drama",
          cartelera: "https://www.ecartelera.com/carteles/1300/1364/001.jpg",
          nota: 10,
          resumen:"Martín Circo Martín es el afortunado ganador del mayor concurso de la historia de la televisión: un premio valorado en tres millones de euros. En esta ácida sátira de la sociedad actual, el golpe de suerte de Martín dará un vuelco a su vida convirtiéndola en una auténtica pesadilla."
        }
      ]
    
    return(
        <React.Fragment>
            <wrapper className='Contenedor'>
                <Cabezera descri="Página de Películas"></Cabezera>
                {peliculas.map((v) =>{
                    let estrellas =""
                    for (let index = 0; index < v.nota; index++) {
                        estrellas+="*";
                        
                    }
                    return(
                        <Peliculero titulo={v.nombre}
                        direccion={v.director}
                        clasificacion={v.clasificacion}
                        cartel={v.cartelera}
                        nota={estrellas}
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