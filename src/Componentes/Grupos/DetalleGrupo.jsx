import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardGrupos from "./CardGrupos";

const DetalleGrupo = () => {

    const [grupo, setArrGrupos] = useState({});

    const { userId } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(` http://localhost:3000/users/home/`);
            // /${userId}
            setUser(response.data);
            console.log(response.data)
        }
        fetchData();
    }, [userId]);

    return (
        <div>
            {user ? (<CardGrupos {...grupo} /> ):<p>Recuperando cliente</p>}
        </div>
    );
}

export default DetalleGrupo;