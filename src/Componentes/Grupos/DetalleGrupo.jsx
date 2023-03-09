import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocalStorage } from "../../Hooks";
import DataListUsuarios from "../Forms/DataListUsuarios";

import Gastos from "../Ui/Gastos";
import Grafica from "../Ui/Grafica";
import PruebaGrafica from "../Ui/PruebaGrafica";
import CardGrupos from "./CardGrupos";

const DetalleGrupo = () => {

    const [grupo, setArrGrupos] = useState({});

    const { register, handleSubmit } = useForm();

    const { groupId } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await
                axios.get(`http://localhost:3000/users/groups/${groupId}`)
        }
        fetchData();
    }, [groupId]);


    return (
        <Grupo>
            <Estadisticas>
                <PruebaGrafica />

                <h2>Invita gente</h2>
                <DataListUsuarios {...register('userDebtors')} />
            </Estadisticas >
            <div className="gastos">
            <Gastos></Gastos>
            </div>
        </Grupo>
    );
}

export default DetalleGrupo;

const Estadisticas = styled.div`
 width: 60%;
  padding: 10px;
  display: flex;
  flex-wrap:wrap; 
  flex-direction: column;
  align-items: center;
  @media(max-width: 850px){
    width: 100%;
  }
 
`

const Grupo = styled.div`
.gastos{
    width: 38%;
}
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    @media(max-width: 850px){
    flex-direction: column-reverse;
    .gastos{ 
        width: 100%;

    }
      
}
`