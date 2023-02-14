import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 3em;
   
`;

const Li = styled.li`
    background-color: #86A3B8;
    color: white;
    width: 9.375em;
    padding: 0.625em 1.250em;
    border-radius: 1.250em;
    :hover{
        background-color: #0D4975;
    }
    
`;

const Menu = () => {
    return (<nav>
        <Ul>
            <Link to={'/inicio'}>
                <Li>Inicio</Li>
            </Link>
            <Link to={'/saldos'}>
                <Li>Saldos</Li>
            </Link>
            <Link to={'/login'}>
                <Li>Login</Li>
            </Link>
            <Link to={'/chat'}>
                <Li>Chat</Li>
            </Link>
        </Ul>
    </nav>)
}

export default Menu;