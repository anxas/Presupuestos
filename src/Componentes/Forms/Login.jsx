import styled from 'styled-components'
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from 'sweetalert2'

import jwtDecode from "jwt-decode";

import { useState } from 'react';
import { useLocalStorage } from '../../Hooks';
import { useSetLoggedContext, useSetRoleContext } from '../Provider/LoggedProvider';
import { useNavigate } from 'react-router-dom';


// http://localhost:3000/login/

const Login = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [error, setError] = useState('');
    const [token, setToken] = useLocalStorage('token');

    const setIsLogged = useSetLoggedContext();
    const setRole = useSetRoleContext();

    const onSubmit = async (values) => {
        const res = await axios.post('http://localhost:3000/login/', values)

        if (res.data.fatal) {
            setError(res.data.fatal)
            Swal.fire({
                title: 'Revisa los parametros introducidos!',
                icon: 'error'})
        } else {
            setError('');
            setToken(res.data.token);
            setRole(jwtDecode(res.data.token)['user_role']);
            setIsLogged(true);
            await Swal.fire({
                title: 'Sesion iniciada correctamente',
                icon: 'success'
            })
            
            navigate('/grupos')
            console.log(res.data.token)

        }

    }

    return (


            <Container>
                <h2>Inicia Sesi&oacute;n</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="email" placeholder='Email' {...register('userEmail', {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
                    })} />

                    <div>
                        <p> {(errors.userEmail?.type === 'required') &&
                            "Este campo es obligatorio"
                        }
                            {(errors.userEmail?.type === 'pattern') &&
                                "El formato es incorrecto"
                            }
                        </p>

                    </div>


                    <input type="password" placeholder='Password' {...register('password', {
                        required: true
                    })} />

                    <div>
                        <p></p>
                    </div>

                    <div>
                        <button type="submit">Enviar</button>

                    </div>

                </form>

            </Container>      
   
    );
}

const Container = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-top: 4%;
        border-radius: 5%;
        box-shadow:4px 5px 5px #bbbaba;
        background: #d4d4d4;
        width: 25em;
        padding: 1.875em;
        
    h2{
    font-size: 2em;
    text-align: center;
    margin-top: 0;
        color: transparent;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        text-shadow: 0px 3px 3px rgb(255, 255, 255);color: transparent;
        background: #2e2e2e;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        text-shadow: 0px 3px 3px rgba(136, 136, 136, 0.479);
        margin-bottom: 2%;
       
    }
 
    input{
        margin-top: 5%;
        padding: 0.625rem;
        width: 95%;
        border-radius: 4px;
        border: 1px solid  #3cb8a9;
        font-size: 1em;
    }
    button{
        background-color: #C30F79;
        color: white;
        margin-top: 5%;
        font-size: 1rem;
        padding: 0.6rem;
        border-radius: 10px;
        border: none;
        box-shadow: 3px 3px #b9b8b8;
        :hover{
            background-color: #671E4E;
            transition: 0.5s;
        }
        :active{
            transform: translateY(2px);
            -webkit-box-shadow: inset 2px 2px 4px #373636;
            
        }

    }   
    form{
    width: 100%;
    } 
    div{
        display: flex;
        justify-content: flex-start;
        margin: 0;
        p{ height: 1em;
            margin: 0;
            font-size: 0.8em;
            color: #d80533;
            font-weight: 600;
        }
    }
`

export default Login;