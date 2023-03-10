import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import React from 'react'
import Select from 'react-select'

const EliminarUsuario = (props) => {


    const { register, handleSubmit } = useForm();
    // const navigate = useNavigate();
    const [users, setUsers] = useState([])

    const [userToDelete, setUserToDelete] = useState()
    




    const { groupId } = useParams();

    const { userId } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/users/groups/${groupId}/users`)
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));

    }, [groupId])

    const handleSelectChange = (value, event) => {
        console.log(setUserToDelete(value.value))
    }

    const remove = (() => {
    
        if (window.confirm("Quieres eliminar el Usuario?")) {

            axios.delete(`http://localhost:3000/users/groups/${groupId}/deleteUser/${userToDelete}`).then(() => {
                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    )


    //como seleccionar usuarios de la app 


    const data = users

    return (
        <DivGeneral>
            <h2>Tambien puedes elimiar un usuario del grupo</h2>
            <Select
                options={data.map(user => ({ isDisabled: parseInt(user.debtAmount) !== 0, label: user.player.charAt(0).toUpperCase() + user.player.slice(1), value: user.userId }))}
                onChange={handleSelectChange}
            />
            <button onClick={remove}>❌</button>
        </DivGeneral>
    )
}

export default EliminarUsuario


const DivGeneral = styled.div`
  width: 90%;
display: flex;
align-items: center;
flex-direction: column;
background-color: #818181;
padding: 20px;
border-radius: 20px;
margin: 12px;
h2{
    font-weight: 700;
    margin: 0;
    color: white;
}
    p{
    margin: auto;
}

`