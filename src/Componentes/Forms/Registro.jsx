import styled from 'styled-components'
import { useForm } from "react-hook-form";





const Registro = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        console.log(values);
    }

    return (



        <Container>
            <h2>Registrate</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder='Nombre' {...register('nombre')} />

                <input type="text" placeholder='Apellido' {...register('apellido')} />

                <input type="email" placeholder='Email' {...register('email')} />

                <input type="number" placeholder='Telefono' {...register('telefono')} />

                <input type="password" placeholder='Password' {...register('password')} />

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
        margin-top: 3%;
        border-radius: 5%;
        box-shadow:4px 5px 5px #bbbaba;
        background: #d4d4d4 ;
        width: 25em;
        padding: 1.875em;
        
    h2{
    font-size: 1.5em;
    text-align: center;
    }
 
    input{
        margin-top: 5%;
        padding: 0.625em;
        width: 95%;
        border-radius: 4px;
        border: 1px solid  #5c95c8;
        font-size: 1em;
    }
    button{
        background-color: #5c95c8;
        color: white;
        margin-top: 5%;
        font-size: 1rem;
        padding: 0.6rem;
        border-radius: 10px;
        border: none;
        box-shadow: 3px 3px #b9b8b8;
        :hover{
            background-color:#4873aa;
        }
        :active{
            transform: translateY(2px);
            -webkit-box-shadow: inset 2px 2px 4px #373636;
            
        }

    }   
    div{
   display: flex;
   justify-content: center;
    }

`
export default Registro;