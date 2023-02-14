import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Chat from './Componentes/Chat';
import Inicio from './Componentes/Inicio';
import Login from './Componentes/Login';
import Saldos from './Componentes/Saldos';
import Menu from './Componentes/Ui/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
        <Route path='' element={<Navigate to={'/inicio'} replace />} />
          <Route path='inicio' element={<Inicio/>} />
          <Route path='saldos' element={<Saldos/>} />
          <Route path='login' element={<Login/>} />
          <Route path='chat' element={<Chat/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}


export default App;
