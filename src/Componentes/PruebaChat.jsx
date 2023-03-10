import { useEffect } from "react";
import { io } from "socket.io-client";
import { useLocalStorage } from "../Hooks";
import { useSocketContext } from "./Provider/PruebaSocketProvider";

const socket = io('http://localhost:3000/users/social/chat')

const PruebaChat = () => {

    // const socket = useSocketContext();

    const [token] = useLocalStorage('token')

    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        socket.on('mensaje_chat', (data) => {
            setMensajes([
                ...mensajes, data
            ]);
        });

        return () => {
            socket.off('mensaje_chat')
        }
    }, [mensajes]);

    const enviarMensaje = ({ mensaje }) => {
        socket.emit('mensaje_chat', {
            mensaje, user
        });
    }


    // const connectionUser = (values) => {
    //     socket.emit('connectedUser', {
    //         //sacar el username,
    //         socket_id: socket.id
    //     });
    // }

    return (
        <div>
            <h2>Chat</h2>
            <div>
                <form onSubmit={handleSubmit(enviarMensaje)}>
                    <textarea {...register('mensaje')} />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
            <ul>
                {mensajes.map(item => (
                    <li>{item.user}: {item.mensaje}</li>
                ))}
            </ul>
        </div>
    )
}

export default PruebaChat;