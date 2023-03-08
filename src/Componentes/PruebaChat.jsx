import { useSocketContext } from "./Provider/PruebaSocketProvider";

const PruebaChat = () => {

    const socket = useSocketContext();

    const connectionUser = (values) => {
        socket.emit('connectedUser', {
            //sacar el username,
            socket_id: socket.id
        });
    }

    return (
        <div></div>
    )
}

export default PruebaChat;