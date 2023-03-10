import styled from "styled-components";
import Contacto from "../Forms/Contacto";


const Contact = () => {
    return (
        <TresColumnas>
            <ColumnaPerfiles>
                <CardPerfil>
                    <figure>
                        <a href="https://www.instagram.com/_anft_/" target={"_blank"}> {<img src={require('../img/andreas.PNG')} />}</a>
                    </figure>
                    <h4>Andreas Freixas</h4>
                    <p>Frontend Developer</p>
                    <Iconos>
                        <a href="https://github.com/anxas" target={"_blank"}>{<img src={require('../img/github.png')} />}</a>
                        <a href="https://discord.gg/fUt4NNM3GK" target={"_blank"}>{<img src={require('../img/discord.jpg')} />}</a>
                    </Iconos>
                </CardPerfil>
                <CardPerfil>
                    <figure>
                        <a href="#" target={"_blank"}> {<img src={require('../img/pedro.jpeg')} />}</a>
                    </figure>
                    <h4>Pedro Ortega</h4>
                    <p>BackEnd Developer</p>
                    <Iconos>
                        <a href="#" target={"_blank"}>{<img src={require('../img/github.png')} />}</a>
                        <a href="#" target={"_blank"}>{<img src={require('../img/discord.jpg')} />}</a>
                    </Iconos>
                </CardPerfil>
            </ColumnaPerfiles>

            <ColumnaCorreo>
            <h3>Contáctanos</h3>
                 <Contacto />
            </ColumnaCorreo>

        </TresColumnas>
    )
}

export default Contact;

const TresColumnas = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width: 767px){
        flex-direction: column;
    }

`

const ColumnaCorreo = styled.div`
    width: 75%;
    height: 100%;
    @media(max-width: 1300px){
        width: 66%;
    }
    @media(max-width: 767px){
       width: 100%;
       align-items: center;
       margin: 0% 3% 3% 0%;
    }
    margin: 1%;
    display: grid;
    align-items: center;
    align-items: center;
    margin-bottom: 3%;
    justify-items: center;
    grid-template-rows: auto 8fr;
    h3{
       
        font-size: 3em;
        color: transparent;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        text-shadow: 0px 3px 3px rgba(255,255,255,0.5);color: transparent;
        background: #535353;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
        margin-bottom: 2%;
        margin-top:1.5%;
    }
`

const ColumnaPerfiles = styled.div`
    width: 25%;
    height: 100%;
    @media(max-width: 1300px){
        width: 33%;
    }
    @media(max-width: 767px){
       width: 100%;
    }
figure{
    :hover{
       box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
       transition: 0.5s;
    }
}
    margin:1%;
    display: grid;
    align-items: center;
    margin-bottom: 2%;
    justify-items: center;
    h4{
        color: white;
        text-align: center;
        font-size: 1.5em;
        margin: 2%;
    }
    p{
        color: white ;
        margin-top: 0%;
        text-align: center;
    }
    figure{
       display: flex;

        width: 12.625em;
        height: 12.625em;
        overflow: hidden;
        margin: 10px;
        position: relative;
        border-radius: 50%;
        img{
            display: flex;
            width: 12.625em; 
            height: 12.625em; 
           
        }
    }
`

const Iconos = styled.div`
      display: flex;
     flex-direction: row;
    justify-content: space-around;
    width: 50%;
     img{
        display: flex;
        width: 2em;
        height: 2em;
        
     }
`
const CardPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-radius: 10px;
    background: rgb(239,239,239);
background: linear-gradient(180deg, rgba(239,239,239,1) 35%, #b1b1b1 35% , rgba(0,0,0,1) 100%);
`