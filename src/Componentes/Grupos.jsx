import styled from "styled-components";

const Grupos = () => {
    return (
        <div>
            <div>
                <h3>Grupos</h3>
            </div>
            <GruposDiv>
                <div>
                    <h3>
                        Concepto
                    </h3>
                    <p> Participantes</p>
                </div>
                <a href="#">➔</a>
            </GruposDiv>
            <div>
                <input type="text" placeholder="Concepto"/>
                <input type="text" placeholder="participantes"/>
                <button type="submit">Agregar</button>
            </div>

        </div>
    )
}
export default Grupos;

const TituloDiv = styled.div`
    
`
const GruposDiv = styled.div`
    background: rgb(149,148,148);
    background: linear-gradient(180deg, rgba(149,148,148,1) 0%, rgba(59,58,58,1) 100%, rgba(255,255,255,0) 100%);
    border-radius: 10px;
    padding: 1em;
    margin: 0em 4em ;
    display: flex;
    justify-content: space-between;
    a{  text-shadow: -2px 2px black, 0 2px black, 1px 0 black, 0 -1px black;
        font-weight: bolder;
        font-size: 3em;
        display: flex;
        align-items: center;
        margin-right: 2em;
        color: white;
        :hover{ color: #f866af;
            
        }
        :active{
            text-shadow: -1px 1px black, 0 1px black, 1px 0 black, 0 -1px black;
        }
    }
    h3{
        color: white;

    }

    p{
        color: white;
    }
`