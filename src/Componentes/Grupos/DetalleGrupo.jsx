import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocalStorage } from "../../Hooks";

import Gastos from "../Ui/Gastos";
import Grafica from "../Ui/Grafica";
import PruebaGrafica from "../Ui/PruebaGrafica";
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
                <PruebaGrafica />
                {/* <Grafica></Grafica> */}
                <Gastos></Gastos>
            </Estadisticas >

        </div>
    );
}

export default DetalleGrupo;

const Estadisticas = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  flex-wrap:wrap; 
 justify-content: space-around;
 @media(max-width: 768px){
    flex-direction: column-reverse;
      
}
`