import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

const CardGrupos = ({ groupTitle, groupDescription, players }) => {

    console.log(players[0].player)

    return (
        <GruposDiv>
                <h3>
                    {groupTitle}
                </h3>
                {/* <p> {groupDescription}</p> */}
                <Participantes>
                    {players.map((players) => (

                        <p> {players.player} </p>
                        //.toUpperCase()
                    ))}
                </Participantes>
                {/* <p>{players.forEach(element => {
                    return(element.player)
                })}</p> */}
        </GruposDiv>



    )
}
export default CardGrupos;

const TituloDiv = styled.div`
    
`
const GruposDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: #535353;
    border-bottom: 0.3em solid #8d0d58;
    /* background: linear-gradient(180deg, rgba(149,148,148,1) 0%, rgba(59,58,58,1) 100%, rgba(255,255,255,0) 100%); */
    border-radius: 10px;
    padding: 1em;
    width: 100%;
    margin: 1em 0em;
    :hover{
        background-color: #6b6b6b;
        border-bottom: 0.3em solid #ce1581;

    }
    h3{
        color: white;
    }

    p{
        color: white;
    }
    
`

const Participantes = styled.div`
    display: flex;
    
    p{
    font-size: 1em;
    margin-right: 10px;}
`