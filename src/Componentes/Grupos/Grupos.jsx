import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FormGrupo from "../Forms/FormGrupo";
import CardGrupos from "./CardGrupos";
import DetalleGrupo from "./DetalleGrupo";
import styled from "styled-components";


const Grupos = () => {

    const [arrGrupos, setArrGrupos] = useState([]);

    const { groupId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/users/groups/');
            if (!res.data) {
                setArrGrupos([])
            }

            setArrGrupos(res.data);

        }
        fetchData();
    }, []);

    const remove = ((group) => {

        if (window.confirm("Quieres eliminar el grupo?")) {
            console.log(group)
            axios.delete(`http://localhost:3000/users/groups/${group}/delete`).then(() => {
                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    )


    //   await Swal.fire({
    //     title: 'Logout correcto',
    //     text: 'Esperamos verte de nuevo pronto',
    //     icon: 'success'
    //   })

    // navigate('/grupos');


    return (
        <GeneralDiv>
            <Cartas>
                {arrGrupos.length != 0 ? arrGrupos.map(group => (
                    <div key={group.groupId} className="divCard">
                        <Link key={group.groupId} to={`/grupo/${group.groupId}`}>
                            <CardGrupos {...group} />
                        </Link>
                        <button onClick={() => { remove(group.groupId) }}>❌</button>
                    </div>
                )) : <h1>No hay grupos</h1>}
            </Cartas>
            <FormGrupo></FormGrupo>

        </GeneralDiv>
    )
}
export default Grupos;


const GeneralDiv = styled.div`
    width: 100%;
`
const Cartas = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
align-content: center;
a{
  width: 90%;
  
}

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
.divCard{ 
    width: 100%;
    margin: 1em;
 justify-content: center;
    
   
    display: flex;

    }

    
    
`