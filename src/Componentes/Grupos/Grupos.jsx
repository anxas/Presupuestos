import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormGrupo from "../Forms/FormGrupo";
import CardGrupos from "./CardGrupos";
import DetalleGrupo from "./DetalleGrupo";
import styled from "styled-components";


const Grupos = () => {

    const [arrGrupos, setArrGrupos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/users/groups/');
            setArrGrupos(res.data);

        }
        fetchData();
    }, []);

    return (
        <div>
            <Cartas>
                {arrGrupos.map(group => (
                    <Link key={group.groupId} to={`/grupo/${group.groupId}`}>
                        <CardGrupos {...group} />
                    </Link>
                ))}
            </Cartas>
            <FormGrupo></FormGrupo>

        </div>
    )
}
export default Grupos;

const Cartas = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
align-content: center;

a{
        width: 90%;
    }


    
`