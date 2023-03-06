import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";


const FormGrupo = () => {


    const { registerGroup, handleSubmit } = useForm();
    const navigate = useNavigate();


    const creaGrupo = async (values) => {
        const res = await axios.post('http://localhost:3000/users/groups/new', values)
        if (res.data.fatal) {

        } else {
            navigate('')
        }
    }

    //como seleccionar usuarios de la app 


    return (
        <form onSubmit={handleSubmit(creaGrupo)}>
            <input type="text" placeholder="Concepto" />
            <input type="text" placeholder="participantes" />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default FormGrupo