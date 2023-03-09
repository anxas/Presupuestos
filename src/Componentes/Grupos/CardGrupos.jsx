import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

const CardGrupos = ({ groupTitle, groupDescription, players }) => {


    return (
        <GruposDiv>
                <h3>
                    {groupTitle}
                </h3>
                <div>
                    <p>{players.map(user=> user.player.charAt(0).toUpperCase() + user.player.slice(1)).join(", ")}</p>
                </div>
        </GruposDiv>
    )
}
export default CardGrupos;

const TituloDiv = styled.div`
    
`
const GruposDiv = styled.div`
  background: #535353;
    border-bottom: 0.3em solid #8d0d58;
    background-color: #535353;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
    border-radius: 10px;
 

    :hover{
        background-color: #6b6b6b;
        border-bottom: 0.3em solid #ce1581;

    }
    
    p{ color: white;
        margin: 12px 0px;
        font-size: 12px;

    }

    h3{ display:flex;
        text-align: center;
        align-items: center;
        align-content: center;
        color: white;
        margin: 12px 0px;
    }
   
`

