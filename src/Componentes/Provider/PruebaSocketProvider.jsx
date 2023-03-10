import { createContext, useContext } from "react";
import { io } from 'socket.io-client'

const socketContext = createContext();

export const useSocketContext = () => {
    return useContext(socketContext);
}

const PruebaSocketProvider = ({ children }) => {

    return (
        < socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    );
}

export default PruebaSocketProvider;