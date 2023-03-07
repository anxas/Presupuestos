import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";


const DataList = () => {


    const { register, handleSubmit } = useForm();
    // const navigate = useNavigate();
    const [participantes, setParticipantes] = useState([])

    const { groupId } = useParams();

// const [checkedValues, setValues] = useState();

//     function handleChange(event) {
//         const { value, checked } = event.target

//         if(checked){
//             setValue(value)
//         }
//     }
//onChange={handleChange}
//     console.log(checkedValues)

    useEffect(() => {
        axios.get(`http://localhost:3000/users/groups/${groupId}/users`)
            .then(response => setParticipantes(response.data))
            .catch(error => console.log(error));

    }, [groupId])


    //como seleccionar usuarios de la app 

    const data = participantes


    return (
        <div >
            <p>Participantes</p>
            {data.map(persona => (
                <label key={persona.userId}>
                    <input type="checkbox" value={persona.userId}  {...register("users")} />
                    <span>{persona.player}</span>
                </label>
            ))}


            {/* <input list="data"  {...register('users', {
                required: true,
            })} />
            <datalist id="data">
                {data.map(persona => (

                    <option key={persona.userId}>{persona.player}</option>
                ))}
            </datalist> */}
        </div>
    )
}

export default DataList
