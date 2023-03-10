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
                        <button onClick={() => { remove(group.groupId) }} title="Borrar Grupo">❌</button>
                    </div>
                )) : 
                <div className="notGrupo">
                    <h4>No hay grupos creados todavia 🙄</h4>
                    <h3>Puedes agregar uno nuevo debajo</h3>
                    <p>👇🏼</p>
                </div>
                }
            </Cartas>
            <h2> + Nuevo grupo</h2>
            <FormGrupo></FormGrupo>

        </GeneralDiv>
    )
}
export default Grupos;


const GeneralDiv = styled.div`
    width: 100%;

    .notGrupo{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            margin-top: 0;
            font-size: 2em;
        }
    h4{
        color: #3d3d3d;
        margin-bottom: 0;
        background-color: #FAC898;
        padding: 1em;
        border-radius: 20px;
        font-size: 1.5em;
    }
    h3{
        color: #3d3d3d;
        font-weight: 600;
        margin: 0;
        padding: 1em;
    }
}
    h2{

    display: flex;
    justify-content: center;
    font-size: 2em;
        color: transparent;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        text-shadow: 0px 3px 3px rgba(255,255,255,0.5);color: transparent;
        background: #535353;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
        margin: 0;
        margin-top: 2%;
       
}
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
            transition: 0.5s;
        }
    
    }
.divCard{ 
    width: 100%;
    margin: 1em;
 justify-content: center;
    
   
    display: flex;

    }

    
    
`