import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardGrupos from "./CardGrupos";


const Grupos = () => {

    const [arrGrupos, setArrGrupos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/users/groups');
            setArrGrupos(res.data);
            console.log(res.data)
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>
                 {arrGrupos.map(group => (
                    <Link key={group.id} to={`/grupo/${group.id}`}>
                        <CardGrupos {...group} />
                    </Link>
                ))} 
                <CardGrupos></CardGrupos>
            </div>

            <div>
                <input type="text" placeholder="Concepto" />
                <input type="text" placeholder="participantes" />
                <button type="submit">Agregar</button>
            </div>
        </div>
    )
}
export default Grupos;