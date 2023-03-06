import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../../Hooks";
import CardGrupos from "./CardGrupos";

const DetalleGrupo = () => {

    const [grupo, setArrGrupos] = useState({});

    const { userId } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await 
            axios.get(`http://localhost:3000/users/groups`)
        }
        fetchData();
    }, [userId]);
    

    return (
        // <div>
        //      <h3> hola</h3>
        //     <p> </p>
        // </div>
         <div>
            {grupo ? (<CardGrupos {...grupo} /> ): <p>Recuperando cliente</p>}
        </div>
    );
}

export default DetalleGrupo;