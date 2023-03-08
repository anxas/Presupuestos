import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";


const DataListUsuarios = () => {


    const { register, handleSubmit } = useForm();
    // const navigate = useNavigate();
    const [participantes, setParticipantes] = useState([])

    // const { groupId } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:3000/users/all`)
            .then(response => setParticipantes(response.data))
            .catch(error => console.log(error));


    }, [])

    // console.log([participantes])
    //como seleccionar usuarios de la app 

    const data = participantes
    return (
        <div >
            <input list="data"  {...register('users', {
                required: true,
            })} />
            <datalist id="data">
                
                {data.map(persona => (
                    <option key={persona.userEmail}>{persona.userEmail}</option>
                    
                ))}
            </datalist>
        </div>
    )
}

export default DataListUsuarios
