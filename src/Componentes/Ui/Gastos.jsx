import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import FormSlice from "../Forms/FormSlice";

const Gastos = () => {

    const [slice, setSlice] = useState([]);

    const { groupId } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/users/groups/${groupId}/slices`)
            .then(response => setSlice(response.data))
            .catch(error => console.log(error));

    }, [groupId]);



    return (
        <DivGeneral>
            <div>
            <h3>Gastos</h3>
            {slice.map(slices => (

                <Deudas key={slices.sliceId}>
                    <div>
                        <h4> {slices.description.toUpperCase()} </h4>
                        <p>{slices.users.reduce((prev, curr) => prev += '' + curr.name + ', ', "")}</p>
                    </div>
                    <h3>{slices.amount}€ </h3>
                </Deudas>

            ))}
           </div>
           <FormSlice/>
        </DivGeneral>

    )
}
export default Gastos;


const DivGeneral = styled.div`
    width: 30%;
    @media(max-width: 768px){
    
      width: 100%;
}
`

const Deudas = styled.div`

    background-color: #535353;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
    padding: 0.5em;
    border-radius: 10px;
    
div{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
    p{ color: white;
        margin: 12px 4px;
        font-size: 12px;
    
    }
    h4{ 
        color: white;
       
        margin: 0px 6px;
    }

    h3{ display:flex;
        text-align: center;
        align-items: center;
        align-content: center;
        color: white;
        margin: 0px 0px;
    }
`