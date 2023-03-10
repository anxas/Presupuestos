import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";


const DataListUsuarios = () => {


    const { register, handleSubmit } = useForm();
    // const navigate = useNavigate();
    const [participantes, setParticipantes] = useState([])

    // const [agregaUser, setAgregaUser] = useState();

    // const { userId } = useParams()
    const { groupId } = useParams();

    const agregaUser = (values)=>{
        axios.post(`http://localhost:3000/users/groups/${groupId}/addUser`, values)
        .then( res =>  window.location.reload())
        .catch(err=>console.log(err))
    }


    useEffect(() => {
        axios.get(`http://localhost:3000/users/all`)
            .then(response => setParticipantes(response.data))
            .catch(error => console.log(error));


    }, [])


    const data = participantes
    return (
        <Formulario>
            <h2>Invita a tus amigos</h2>
            <form onSubmit={handleSubmit(agregaUser)}> 

                <input list="data"  {...register('userId', {
                    required: true,
                })} />

                <datalist id="data">
                    {/* key={persona.userEmail}  */}
                    {data.map(persona => (
                        <option value={persona.userId} >{persona.userEmail}</option>

                    ))}

                </datalist>
                <button type="submit">Agregar</button>
            </form>

            <h3>No encuentras a tus amigos? 😱</h3>
            <h4>Debes buscarlos por su correo, o quizas todavia no sean usuarios, invitalos!</h4>
            <div>
                <p>MySlice.com/Login</p>
                <button>
                🚀
                </button>
            </div>
        </Formulario>
    )
}

export default DataListUsuarios

const Formulario = styled.div`
width: 90%;
display: flex;
align-items: center;
flex-direction: column;
background-color: #818181;
padding: 20px;
border-radius: 20px;
@media(max-width: 768px){
    
    width: 85%;
}
h2{
    font-weight: 900;
    margin: 0;
    color: white;
}
form{
    margin: 12px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    input{
        border-radius: 10px;
        height: 2em;
        width: 50%;
    }
    button{
        background-color: #af166f;
        color: white;
 
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 10px;
        border: none;
        /* box-shadow: 3px 3px #b9b8b8; */
        width: 6em;
        :hover{
            background-color: #881156;
        }
        :active{
            transform: translateY(2px);
           box-shadow: inset 2px 2px 4px #373636;
            
        }

    }  
}
h3{ margin: 0;
    margin-top:1.5em;

    color: #dbdada;
    
}

h4{
    margin: 0;
    color: #c7c4c4;
  
}
div{
    margin-top:1.5em;
    display: flex;
    justify-content: center;
    p{margin: 0;
        background-color: #c7c4c4;
        padding: 5px;
        cursor: pointer;
    }
    button{
    background-color: #c7c4c4;
    border: solid 2px #a8a8a8;
    cursor: pointer;
    }
}
`