import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DataListUsuarios from "./DataListUsuarios";


const FormGrupo = () => {


    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    const creaGrupo = async (values) => {
        const res = await axios.post('http://localhost:3000/users/groups/new', values)
        if (res.data.fatal) {
            console.log(values)

        } else {
            window.location.reload()
            
            console.log(values)
        }
    }

    //como seleccionar usuarios de la app 


    return (
        <Formulario onSubmit={handleSubmit(creaGrupo)}>
            <input type="text" placeholder="Nuevo Grupo" {...register('groupTitle')}/>
            <input type="text" placeholder="Concepto" {...register('groupDescription')}/>
            
            <button type="submit">Agregar</button>
            
        </Formulario>
    )
}

export default FormGrupo


const Formulario = styled.form`
display: flex;
flex-direction: column;
margin: 2em 4em ;
      input{
        margin: 1%;
        padding: 0.625rem;
        border-radius: 4px;
        border: 1px solid  #c85c9b;
        font-size: 1em;
    }

    button{
        background-color: #5c95c8;
        color: white;
        margin: 1%;
        font-size: 1rem;
        padding: 0.6rem;
        border-radius: 10px;
        border: none;
        box-shadow: 3px 3px #b9b8b8;
        width: 7em;
        :hover{
            background-color: #4873aa;
        }
        :active{
            transform: translateY(2px);
           box-shadow: inset 2px 2px 4px #373636;
            
        }

    }   
`