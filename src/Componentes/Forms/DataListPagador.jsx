import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import React from 'react'
import Select from 'react-select'

const DataListPagador = (props) => {
   

    const { register, handleSubmit } = useForm();
    // const navigate = useNavigate();
    const [pagador, setPagador] = useState([])

    

    const { groupId } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:3000/users/groups/${groupId}/users`)
            .then(response => setPagador(response.data))
            .catch(error => console.log(error));

    }, [groupId])


    //como seleccionar usuarios de la app 

    const handleSelectChange = (value, event) => {
        props.setPagadorSeleccionado(value.value)
    }

    const data = pagador

    return (
        <DivGeneral>
        <p>Quien ha pagado?</p>
            <Select
                options={data.map(user => ({ label: user.player.charAt(0).toUpperCase() + user.player.slice(1), value: user.userId}))}
                onChange={handleSelectChange}
            />
        </DivGeneral>
    )
}

export default DataListPagador


const DivGeneral = styled.div`
  margin: 1%;
  margin-bottom: 20px;
    border-radius: 4px;
    p{
    margin: auto;
}

`