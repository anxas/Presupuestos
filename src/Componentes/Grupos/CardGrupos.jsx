import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import Avatar from "../Ui/Avatar";

const CardGrupos = ({ groupTitle, groupDescription, players }) => {


    return (


        <GruposDiv>
            <div className="descripciones">
                <h3>
                    {groupTitle.charAt(0).toUpperCase()}{groupTitle.slice(1)}
                </h3>
                <h4>{groupDescription}</h4>
            </div>
            <div>
                <h4>Participantes:</h4>
                
        
            <Flexbox>
                {players.map(user => <Avatar userId={user.userId} />)}
            </Flexbox>
            <p>{players.map(user => user.player.charAt(0).toUpperCase() + user.player.slice(1)).join(",ㅤ")}</p>
            </div>
        </GruposDiv>

    )
}
export default CardGrupos;

const Flexbox = styled.div`
width: 100%;
 display:flex;
 flex-direction: row;
justify-content: flex-start;`

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
  p{
    background-color: #8a8888;
    padding: 12px;
    border-radius: 20px;
  }
 .descripciones{
    display: flex;
    flex-direction: row;
    align-items: center;
    h4{
       
    color: #8a8888;
    margin: 0px 12px;
    font-style: italic;
}
 }
 h4{
    
    color: #ffffff;
    margin: 0px;
    margin-top: 12px;
    font-style: italic;

}

    :hover{
        background-color: #6b6b6b;
        border-bottom: 0.3em solid #ce1581;
        transition: 0.5s;

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
        font-size: 1.5em;
    }
   
`

