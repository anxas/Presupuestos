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

    }, [groupId]);


    
    return (
        <Deudas>
            <h3>Gastos</h3>
            {slice.map(slices => (
                
                <div key={slices.sliceId}>
                    <h4> {slices.description} </h4>
                    <p>{slices.amount}€ </p>
                    <p>{slices.users.reduce((prev,curr)=> prev += curr.name + ' ', "")}</p>
                </div>
                
            ))}
        </Deudas>
    )
}
export default Gastos;

const Deudas = styled.div`

div{
    background-color: #535353;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
    padding: 0.5em;
    border-radius: 10px;

    p{ color: white;
        margin: 0;
    }
    h4{
        color: white;
        margin: 0rem;
    }
}
`