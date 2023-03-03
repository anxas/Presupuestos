import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Chat from './Componentes/Chat';
import Grupos from './Componentes/Grupos/Grupos';

import LoginGuard from './Componentes/guards/LoginGuard';
import RoleGuard from './Componentes/guards/RoleGuard';
import About from './Componentes/info/About';
import Contact from './Componentes/info/Contact';
import Login from './Componentes/InicioSesion';
import LoggedProvider from './Componentes/Provider/LoggedProvider';
import Saldos from './Componentes/Saldos';
import Navbar from './Componentes/Ui/Navbar';


function App() {
  return (
    <LoggedProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='' element={<Navigate to={'/login'} replace />} />
              <Route path='grupos' element={<LoginGuard>
                <Grupos></Grupos>
               </LoginGuard>
                } />
            <Route path='saldos' element={<Saldos />} />
            <Route path='login' element={<Login />} />
            <Route path='chat' element={<Chat />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
          </Routes>


        </div>
      </BrowserRouter>
    </LoggedProvider>
  );
}


export default App;
