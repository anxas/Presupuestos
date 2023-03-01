import styled from 'styled-components'
import Typewriter from 'typewriter-effect';



const About = () => {


    return (
        <Contenedor>
            <div>
                <h3>Con My Slice puedes . . .</h3>
            </div>
            <Escribiendo>

                <Typewriter
                    options={{
                        strings: ['Crear Grupos', 'Ajustar cuentas', 'Chatear', 'Introducir pagos'],
                        autoStart: true,
                        loop: true,
                       
                    }}
                />
            </Escribiendo>

        </Contenedor >
    )
}

export default About;

const Contenedor = styled.div`
    margin-top: 2%;
    padding: 5em;
    padding-top: 1em;
    background: rgb(0,0,0);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background: #535353;
  
    h3{ text-align: center;
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 3em;
        font-weight: 50;
    }
`

const Escribiendo = styled.div`

    display: flex;
    justify-content: center;
    span{z-index: -1;
        color: white;
        font-size: 3em;
    }
`