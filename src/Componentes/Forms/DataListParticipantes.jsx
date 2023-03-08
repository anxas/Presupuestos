import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import React from 'react'
import Select from 'react-select'

const DataListParticipantes = () => {


    const { register, handleSubmit } = useForm();
    // const navigate = useNavigate();
    const [participantes, setParticipantes] = useState([])

    const [participante, setParticipante] = useState([])

    const { groupId } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:3000/users/groups/${groupId}/users`)
            .then(response => setParticipantes(response.data))
            .catch(error => console.log(error));

    }, [groupId])


    //como seleccionar usuarios de la app 
   

    const handleSelectChange = (event) => {
        event.forEach(item => {
           
            setParticipante(...participante, item.usersDebtors )
            console.log(participante)
          }, []);
      
    }
    console.log(participante)
    const data = participantes

    return (
        <DivGeneral>
            <p>Participantes</p>
            <Select
                isMulti
                options={data.map(user => ({ label: user.player.charAt(0).toUpperCase() + user.player.slice(1), value: user.userId, usersDebtors: user.userId }))}
                onChange={handleSelectChange}
            />
        </DivGeneral>
    )
}

export default DataListParticipantes


const DivGeneral = styled.div`
  margin: 1%;
  margin-bottom: 20px;
    border-radius: 4px;
p{
    margin: auto;
}

`