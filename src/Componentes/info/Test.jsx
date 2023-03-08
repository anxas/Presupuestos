import { useState } from "react"
import styled from "styled-components"

const Test = () => {


    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(true);

    const handleChange = (event) => {
        console.log(event)
    }


    return (
        <Checks>
            <label>
                <input type="checkbox" />
                Se te olvida hacer Bizum
            </label>
            <label>
                <input type="checkbox" onChange={() => handleChange("Hola")} />
                Siempre pagas tu
            </label>
            <label>
                <input type="checkbox" onChange={() => handleChange("second")} />
                Tus amigos se hacen los despistados al pagar
            </label>
            <label>
                <input type="checkbox" />
                Te gusta saber que no debes nada
            </label>
            <label>
                <input type="checkbox" />
                Llevas las cuentas al dia
            </label>
            <label>
                <input type="checkbox" />
                No te sobra el dinero
            </label>

            <p> {}</p>
        </Checks>

    )
}
export default Test

const Checks = styled.div`
display: flex;
flex-direction: column;
font-size: 1.5em;
background-color: #B7D6B7;
width: fit-content;
padding: 1em;
border-radius: 10px;
border: 2px solid #839983;

input{
    width: 1.5em;
    height: 1.5em;
}

label{
    display: flex;
    gap: 5px;
    align-items: center;
    align-content: center;
}

`

