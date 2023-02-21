import styled from 'styled-components'
import { useForm } from "react-hook-form";





const Login = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        console.log(values);
    }

    return (

        <div>

            <Container>
                <h2>Inicia Sesion</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="email" placeholder='Email' {...register('email')} />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' {...register('password')} />
                    </div>
                    <input type="submit" value="Enviar" />
                </form>
            </Container>

        </div>

    );
}

const Container = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-top: 5%;
        border-radius: 5%;
        box-shadow:4px 5px 27px #bbbaba;
        background: lightblue ;
        width: 25em;
        padding: 1.875em;
        
    h2{
    font-size: 1.5em;
    text-align: center;
    }
 
    input{
        margin-top: 5%;
        padding: 0.625em;
        width: 100%;
        border-radius: 4px;
        border: 1px solid lightpink;
        font-size: 1em;
    }
    div{

    }

`
export default Login;