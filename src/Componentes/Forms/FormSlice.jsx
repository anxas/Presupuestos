import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DataList from "./DataList";


const FormSlice = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { groupId } = useParams();
   

    const creaGrupo = async (values) => {
        const res = await axios.post(`http://localhost:3000/users/groups/${groupId}/slices/add`, values)
        if (res.data.fatal) {
            console.log(values)

        } else {
            window.location.href =
                navigate(`/grupos/${groupId}`)
            console.log(values)
        }
    }

    //como seleccionar usuarios de la app 


    return (
        <Formulario onSubmit={handleSubmit(creaGrupo)}>
            <input type="text" placeholder="Concepto del gasto" {...register
                ('description', {
                    required: true
                })} />

            <div>
                <p>{(errors.description?.type === 'required') &&
                    "Este campo es obligatorio"
                }</p>
            </div>
            <input type="text" placeholder="Precio" {...register('amount', {
                required: true,
                pattern: /^[\.0-9]*$/
            })} />
            <div>
                <p> {(errors.amount?.type === 'required') &&
                    "Este campo es obligatorio"
                }
                    {(errors.amount?.type === 'pattern') &&
                        "Debes introducir numeros (ej. 21.22)"
                    }
                </p>

            </div>
            
            <DataList />
            <button type="submit">Agregar</button>
        </Formulario>
    )
}

export default FormSlice


const Formulario = styled.form`
display: flex;
flex-direction: column;
margin: 1em;
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