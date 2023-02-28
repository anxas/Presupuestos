import styled from 'styled-components'
import Registro from './Forms/Registro';
import Login from './Forms/Login';
const InicioSesion = () => {


    return (
        <Formularios>
            <Registro></Registro>
            <Login></Login>
        </Formularios>

    )
}

const Formularios = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
   @media(max-width: 1000px){
    display: flex;
    flex-direction: column;
    align-items: center;
    
    /* flex-direction: column;
    justify-content: center; */
    }
`

export default InicioSesion;