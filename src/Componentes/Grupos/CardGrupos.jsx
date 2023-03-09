import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

const CardGrupos = ({ groupTitle, groupDescription, players }) => {


    return (
        <GruposDiv>
            <div className="participantes">
                <h3>
                    {groupTitle}
                </h3>


                <div>
                    {players.map((players) => (

                        <p key={players.userId}> {players.player.charAt(0).toUpperCase() + players.player.slice(1) + ","} </p>

                    ))}
                </div>
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
    padding: 1em;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    :hover{
        background-color: #6b6b6b;
        border-bottom: 0.3em solid #ce1581;

    }
    
.participantes{
    display: flex;
  flex-direction: column;
    
    div{
        display: flex;
        flex-direction: row;
    }
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

