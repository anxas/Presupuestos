import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

const Gastos = () => {

    const [slice, setSlice] = useState([]);

    const { groupId } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/users/groups/${groupId}/slices`)
            .then(response => setSlice(response.data))
            .catch(error => console.log(error));

    }, []);

    return (
        <Deudas>
            <h3>Gastos</h3>
            {slice.map(slices => (
                <div>
                    <p> {slices.description} </p>
                    <p>{slices.amount}€ </p>
                </div>
            ))}
        </Deudas>
    )
}
export default Gastos;

const Deudas = styled.div`


`