import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Chat from './Componentes/Chat';
import Grupos from './Componentes/Grupos';
import About from './Componentes/info/About';
import Contact from './Componentes/info/Contact';
import Login from './Componentes/InicioSesion';
import Saldos from './Componentes/Saldos';
import Navbar from './Componentes/Ui/Navbar';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Routes>
        <Route path='' element={<Navigate to={'/login'} replace />} />
          <Route path='grupos' element={<Grupos/>} />
          <Route path='saldos' element={<Saldos/>} />
          <Route path='login' element={<Login/>} />
          <Route path='chat' element={<Chat/>} />
          <Route path='About' element = {<About/>}/>
          <Route path='Contact' element = {<Contact/>}/>
        </Routes>
        

      </div>
    </BrowserRouter>
  
  );
}


export default App;
