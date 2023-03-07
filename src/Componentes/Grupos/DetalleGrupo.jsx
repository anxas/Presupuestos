import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocalStorage } from "../../Hooks";
import FormSlice from "../Forms/FormSlice";
import Gastos from "../Ui/Gastos";
import Grafica from "../Ui/Grafica";
import CardGrupos from "./CardGrupos";

const DetalleGrupo = () => {

    const [grupo, setArrGrupos] = useState({});

    const { groupId } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await
                axios.get(`http://localhost:3000/users/groups/${groupId}`)
        }
        fetchData();
    }, [groupId]);


    return (
        <div>
            <Estadisticas>
                <Grafica></Grafica>
                <Gastos></Gastos>
            </Estadisticas>
            <FormSlice></FormSlice>
            
        </div>
    );
}

export default DetalleGrupo;

const Estadisticas = styled.div`
 background: #f8c8c0;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-wrap:wrap; 
  div{
    width: 50%;
  }
`