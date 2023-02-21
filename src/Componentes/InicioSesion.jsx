import styled from 'styled-components'
import { useForm } from "react-hook-form";
import Registro from './Forms/Registro';
import Login from './Forms/Login';
const InicioSesion = () => {


    return (
        <Formularios>
            <Registro></Registro>
          
                <h3>o</h3>
        
            <Login></Login>
        </Formularios>

    )
}

const Formularios = styled.div`
    display: flex;
    justify-content: center;
    h3{
        padding: 0% 5%;
    }
`

export default InicioSesion;