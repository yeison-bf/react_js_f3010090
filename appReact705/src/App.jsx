import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersList from './components/usuarios'
import { FormUser } from './components/formUser'
import { Link, Route, Routes } from 'react-router-dom'
import { Clients } from './components/clients'
import { RoutesApp } from './components/routes'

function App() {

  const [dataUsers, setDataUsers] = useState([])

  const insertData = (data) => {
    setDataUsers([...dataUsers, data])
  }


  return (
    <>
      <div className="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">SARA</a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <ul className='d-flex gap-5 fs-5'>
                  <li> <Link to="/" >Inicio</Link></li> 
                  <li> <Link to="/contacts" >Contactos</Link></li>                  
                  <li> <Link to="/services" >Servicios</Link></li>                  
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-4 p-4">
            <FormUser insertData={insertData} />
          </div>
          <div className="col-8 p-4">
          <UsersList dataUsers={dataUsers} />
          </div>
        </div>
      </div>

      <RoutesApp/>

    </>
  )
}

export default App
