// import styled from "styled-components";

import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import styled from "styled-components";
import PruebaUpload from "./Forms/pruebaUpload";



const Perfil = () => {



    const [usuario, setUsuario] = useState(0)


    useEffect(() => {
        async function fetchdata() {
            const response = await axios.get(`http://localhost:3000/users/home/`)
            setUsuario(response.data)
        }
        fetchdata();

    }, [])


    const [image, setImage] = useState(null)

    useEffect(() => {
        async function fetchdata() {
            try {
                const response = await axios.get(`http://localhost:3000/users/home/avatar`)
                if (response) {
                    setImage(response.data.imagePath)
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchdata();

    }, [])


    return (
        <CardPerfil>
            {usuario ?
                <div>
                    <figure>
                        {image ? <img src={`http://localhost:3000/uploads/${image}`} /> : <img src={require('./img/user.jpg')} />}
                        {/* {<img src={require('./img/user.jpg')} />} */}
                    </figure>
                    <p>👤{usuario.userName.charAt(0).toUpperCase() + usuario.userName.slice(1)} {usuario.userSurname.charAt(0).toUpperCase() + usuario.userSurname.slice(1)}</p>
                    <p>📧  {usuario.userEmail}</p>
                    <p>📞 {usuario.userPhone}</p>

                </div>
                : <p>Cargando</p>}
            <PruebaUpload />
        </CardPerfil>
    )

}

export default Perfil;

const CardPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
    padding: 1.5em;
    background-image: linear-gradient(to bottom, #8b8787, #666464, #444243, #252424, #000000);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    flex-wrap: wrap;
    width:  500px;
    margin: 2%;
    border-radius: 20px;
    border-bottom: 0.5em solid #8d0d58;
    
    box-shadow: 5px 4px 18px 1px #595959;
    @media(max-width: 768px){
        width: 80%;
      
      }
  

    p{ font-size: 1.5em;
        color: white;


    }
    figure{
        display: flex;
        width: 12.625em;
        height: 12.625em;
        overflow: hidden;
        margin: 10px;
        position: relative;
        border-radius: 50%;
        border:0.2em solid #8d0d58 ;
        :hover{
            border-radius: 30%;
            transition: transform .5s;
             transform: scale(1.2)

         }
        img{
            display: flex;
            width: 12.625em; 
            height: 12.625em; 
            -webkit-filter: grayscale(50%);
            filter: grayscale(50%);
           

            :hover{
                transition: transform .5s;
                transform: scale(1.1);
                -webkit-filter: grayscale(0%);
                filter: grayscale(10%);
            }
        }
    }
}
`