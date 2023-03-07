import React, { useState } from 'react'
import styled from 'styled-components'
import Hamburguesa from './Hamburguesa'
import { Link, useNavigate } from "react-router-dom";
import { useSetLoggedContext } from '../Provider/LoggedProvider';
import Swal from 'sweetalert2'
import LoginGuard from '../guards/LoginGuard';


function Navbar() {

  const setIsLogged = useSetLoggedContext();

  const navigate = useNavigate()

  const onLogout = async () => {

    localStorage.removeItem('token');
    console.log('te has deslogueado')
    setIsLogged(false);
    navigate('/login');
    await Swal.fire({
      title: 'Logout correcto',
      text: 'Esperamos verte de nuevo pronto',
      icon: 'success'
    })
  }

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {

    setClicked(!clicked)
  }
  return (
    <>
      <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      <NavContainer>
        <LogoTitulo>
          {<img src={require('../img/logo.png')} />}
          <h2>My <span> Slice</span></h2>
        </LogoTitulo>

        <div className={`links ${clicked ? 'active' : ''}`}>

          {(() => {
            if (clicked) {
              return (
                // <LoginGuard>
                <div>

                  <Link onClick={handleClick} to={'/login'}>
                    Login
                  </Link>
                  <LoginGuard>
                  <Link onClick={handleClick} to={'/grupos'}>
                    Grupos
                  </Link>

                 
                    <Link onClick={handleClick} to={'/chat'}>
                      Chat
                    </Link>
                  </LoginGuard>

                </div>
                // </LoginGuard>
              );
            } else {
              return (
                // <LoginGuard>
                <HomeTitulo>
                  {<img onClick={handleClick} src={require('../img/home.png')} />}
                </HomeTitulo>
                /* </LoginGuard> */
              );
            }
          })()}
          {/* {(clicked) ? (
            <div>
              <Link onClick={handleClick} to={'/grupos'}>
                Grupos
              </Link>
              <Link onClick={handleClick} to={'/saldos'}>
                Saldos
              </Link>
              <Link onClick={handleClick} to={'/login'}>
                Login
              </Link>
              <Link onClick={handleClick} to={'/chat'}>
                Chat
              </Link>
            </div>
          ) : (<HomeTitulo>
            {<img clicked={clicked} onClick={handleClick} src={require('../img/home.png')} />}
          </HomeTitulo>)} */}

        </div>
        <div className='links2'>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
          <button onClick={onLogout}>Logout</button>
        </div>

        <div className='burguer'>
          <Hamburguesa clicked={clicked} handleClick={handleClick} />
        </div>

      </NavContainer>
    </>
  )
}

export default Navbar




const LogoTitulo = styled.div`
  display: flex;
  justify-content: flex-start;
  img{
    width: 80px;
  }
`

const NavContainer = styled.nav`

  h2{
    color: #ffffff;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  z-index: 2;
  position: relative;
  padding: .4rem;
  background-color: #535353;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
 .links2{
  
    button{
    color: white;
    border-radius: 10px;
    border:  black 0.5px;
    padding: 5px;
    background-color: #C30F79;
    :hover{
      background-color: #af126e;
      }
    }

 }
  .links{
   
    position: absolute;
    top: -200px;
    left: 0%;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease-out;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
        
      }
      
      display: block;
      a.info{
    display: inline;
  }
    }
    
  }
  .links.active{
    div{
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -0.5em;
  a{
    font-size: 2.5em;
  
  }
}
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 175%;

    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
    
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
      
    }
  }
  
`

const BgDiv = styled.div`
  background-color: #636262;
  position: absolute;
  top: -1000px;
  /* left: -1000px; */
  width: 100%;
  height: 100%;
  z-index: -1;

  
  &.active{
    border-radius: 0 0 40% 40% ;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 2;
    transition: all .5s ease-out;
  }
`

const HomeTitulo = styled.div`
cursor: pointer;
  img{
    width: 60px;
  }
  @media(max-width: 768px){
    position: absolute;
    margin-top: -32em;
  }`
