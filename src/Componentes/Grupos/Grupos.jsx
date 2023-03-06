import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardGrupos from "./CardGrupos";
import DetalleGrupo from "./DetalleGrupo";


const Grupos = () => {

    const [arrGrupos, setArrGrupos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/users/groups');
            setArrGrupos(res.data);
            
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>
                {arrGrupos.map(group => (
                    <Link key={group.groupId} to={`/grupo/${group.groupId}`}>
                        <CardGrupos {...group} />
                    </Link>
                ))}  
            </div>

            
        </div>
    )
}
export default Grupos;