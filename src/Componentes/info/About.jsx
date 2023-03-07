import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Test from './Test';



const About = () => {


    return (
        <BigContenedor>
            <Descripcion>
                <h2>Que es MySlice?</h2>
                <p>MySlice es una app creada en 2023 por <a href='/contact'>Pedro y Andreas</a> para los amantes del orden, con la que simplificar gastos de la vida diaria  </p>
            </Descripcion>
            <div className='info'>
          
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
            <div className='test'>
                <h4>Quieres saber si esta app es para ti?</h4>
                <p>Haz el test y obtendras el resultado</p>
                <Test></Test>
            </div>

            </div>
        </BigContenedor>
    )
}



export default About;


const Descripcion = styled.div`
   
   
   display: flex;
   align-items: center;
   flex-direction: column;
        h2{ 
            margin: 0;
            font-size: 3em;
            text-align: center;
        }
    p{
        font-size: 1.5em;
        font-weight: 400;
        margin: 0;
        text-align: center;
        width: 50%;
        a{
            color: #AF126E ;
        }
    }

`

const BigContenedor = styled.div`
   
        display: flex;
        flex-direction: column;
        .test{
            h4{
                font-size: 1.5em;
                margin: 0;
            }
            p{
                margin-top: 0;
            }
            margin-top: 1em;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    .info{
        display: flex;
       flex-direction: column;
        margin-top: 2em;
        @media screen {
            
        }
        
    }

`


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