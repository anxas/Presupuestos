import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Test from './Test';



const About = () => {


    return (
        <BigContenedor>
            <Descripcion>
                <h2>¿Qué es MySlice?</h2>
                <p>MySlice es una app creada en 2023 por <a href='/contact'>Pedro y Andreas</a> para los amantes del orden, con la que simplificar gastos de la vida diaria.  </p>
            </Descripcion>

            <Contenedor>

                <Escribiendo>
                    <div>
                        <h3>Con My Slice puedes . . .</h3>
                    </div>
                    <Typewriter
                        options={{
                            strings: ['Crear Grupos', 'Ajustar cuentas', 'Chatear', 'Introducir pagos'],
                            autoStart: true,
                            loop: true,

                        }}
                    />
                </Escribiendo>
                <div className='descripcion'>
                <h2>Antes de empezar deberás<a title="Registrarte" href='/login'> registrarte</a>, una vez registrado podrás acceder a la parte de grupos donde podrás empezar a crear tus propios grupos. En cada grupo podrás invitar a gente !Pruebalo!</h2>
                </div>

            </Contenedor >

            <div className='test'>
                <h4>¿Quieres saber si esta app es para ti?</h4>
                <p>Si marcas más de dos, registrate sin pensarlo.</p>
                <Test></Test>
            </div>

        </BigContenedor>
    )
}



export default About;


const Descripcion = styled.div`
   
   margin-top: 1.5em;
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
        
        text-align: center;
        width: 50%;
        @media(max-width: 800px){
       width: 70%;
    }
        a{
            font-weight: 700;
            color: #AF126E ;
            :hover{
                color: #860f55;
                transition: 0.5s;
            }
        }
    }

`

const BigContenedor = styled.div`
 
        display: flex;
        flex-direction: column;
        .test{

            margin: 2em;
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
    display: flex;
    flex-direction: row;
    padding: 1em;
    justify-content: space-around;
    @media(max-width: 800px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .descripcion{
    width: 40%;
    font-size: 1em;
    padding: 2em;
    color: #535353;
    @media(max-width: 800px){
       width: 80%;
    }
    a{
        color: #2b2a2a;
        :hover{
           color: #C30F79;
            transition: 0.5s;
        }
    }
   }
    h3{ text-align: center;
        color: #000000;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 2.5em;
        font-weight: 50;
        margin-top: 0;
    }
`

const Escribiendo = styled.div`
width: 60%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media(max-width: 800px){
       width: 80%;
    }
    span{z-index: -1;
        font-size: 4em;
        color: #C30F79;
   
    }
`