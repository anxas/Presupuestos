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
        .then( res => console.log(res.data))
        .catch(err=>console.log(err))
    }


    useEffect(() => {
        axios.get(`http://localhost:3000/users/all`)
            .then(response => setParticipantes(response.data))
            .catch(error => console.log(error));


    }, [])


    const data = participantes
    return (
        <div >
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
        </div>
    )
}

export default DataListUsuarios
