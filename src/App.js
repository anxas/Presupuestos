import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Chat from './Componentes/Chat';
import DetalleGrupo from './Componentes/Grupos/DetalleGrupo';
import Grupos from './Componentes/Grupos/Grupos';

import LoginGuard from './Componentes/guards/LoginGuard';
import RoleGuard from './Componentes/guards/RoleGuard';
import About from './Componentes/info/About';
import Contact from './Componentes/info/Contact';
import InicioSesion from './Componentes/InicioSesion';
import Login from './Componentes/InicioSesion';
import Perfil from './Componentes/Perfil';
import LoggedProvider from './Componentes/Provider/LoggedProvider';

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
            <Route path='grupo/:groupId' element={<DetalleGrupo/>}></Route>
            <Route path='perfil' element={<Perfil/>} />
            <Route path='login' element={<InicioSesion />} />
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
