import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import FormSlice from "../Forms/FormSlice";

const Gastos = () => {

    const [slice, setSlice] = useState([]);

    const { groupId } = useParams()

    const { sliceId } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/users/groups/${groupId}/slices`)
            .then(response => setSlice(response.data))
            .catch(error => console.log(error));

    }, [groupId]);


    const remove = ((slices) => {
        console.log(slices)
        if (window.confirm("Quieres eliminar el grupo?")) {
            
            axios.delete(`http://localhost:3000/users/groups/${groupId}/slices/${slices}/delete`).then(() => {
                 window.location.reload()
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    )
    
    

    return (
        <DivGeneral>
            <div>
            <h3>Gastos</h3>
            {slice.map(slices => (

                <Deudas key={slices.sliceId}>
                    <div className="texto">
                        <h4> {slices.description.toUpperCase()} </h4>
                        <h5>Participantes</h5>
                        <p>{slices.users.map(user=> user.name).join(", ")}</p>
                    </div>
                    <div>
                    <h3>{slices.amount}€ </h3>
                    <button onClick={() => { remove(slices.sliceId) }}>❌</button>
                    </div>

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
    
    button{
        
        background-color: transparent;
        padding: 10px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        :hover{
            transform: scale(1.2);
        }
    
    }

.texto{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
    p{ color: white;
        margin: 6px 12px;
        font-size: 12px;
    
    }
    h4{ 
        color: white;
       
        margin: 0px 6px;
    }
    h3{ 
        color: white;
    
    }

    h5{ color: white;
       
       margin: 18px 0px 0px 6px;

    }
`