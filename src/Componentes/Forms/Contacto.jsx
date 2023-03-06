import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Swal from 'sweetalert2'

const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_op3sf1l', 'template_c26tuix', form.current, 'SsaabHAyrOTjpFihO')
            .then((result) => {
                console.log(result.text);
                Swal.fire({ 
                    title:'Correo enviado',
                    text: 'En breves nos pondremos en contacto contigo',
                    icon: 'success'
                })
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <Formulario ref={form} onSubmit={sendEmail}>
            <label>Nombre y apellidos</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea name="mensaje" />
            <button type="submit" value="Send">Enviar</button>
        </Formulario>


    )

}

export default Contacto

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-top: 2%;
    background-color: #636262;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 3px 3px 10px -2px rgba(116, 115, 115, 0.83);
    label{
        
        margin: 0.5em 0em;
        font-size: 1.2em;
        font-weight: 800;
        color: white;
        text-shadow: 2px 2px 4px #000000;
        
    }
    textarea {
        
        width: 100%;
        height: 16em;
        padding: 0.75em 1.250em;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        background-color: white;
        resize: none;
        border-radius: 10px;

        box-shadow: 3px 3px 10px -2px rgba(116, 115, 115, 0.83);
        border-bottom: 0.3em solid #8d0d58;
    }
    input{
        
        width: 100%;
        padding: 0.75em 1.250em;
        margin: 8px 0;
        box-sizing: border-box;
        background-color: white;
        border: none;
        border-radius: 10px;
        box-shadow: 3px 3px 10px -2px rgba(116, 115, 115, 0.83);
        border-bottom: 0.3em solid #8d0d58;
    }
    button{
        background-color: #353535;
        color: white;
        margin-top: 2%;
        font-size: 1rem;
        padding: 0.6rem;
        width: 4em;
        border-radius: 10px;
        border: none;
        box-shadow: 3px 3px #4e4e4e;;
    :hover{
        background-color:#868686;
    }
    :active{
         transform: translateY(2px);
        -webkit-box-shadow: inset 2px 2px 4px #373636;
            
    }
 }
`