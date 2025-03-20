import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './styleLayout.css'

export const Layout = () => {
    const navegation  = useNavigate()
    const logout = () =>{
        navegation('/')
    }
  return (
    <div className='contenedor'>
        <nav>
            <img src="https://img.freepik.com/vector-premium/vector-libre-hermoso-elemento-diseno-colibri-volador-pancartas-carteles-folletos-folletos_1009653-1.jpg" className='logoMenu' alt="" />
            <ul>
                <li><Link to="/dashboard/users">Usuarios</Link> </li>
                <li><Link to="/dashboard/products">Productos</Link></li>
            </ul>
        </nav>
        <div className="contenido">
            <div className="navbar">
                <p>Bienvenido</p> 
                <button onClick={logout}>Salir</button>
            </div>
            <div className="contenidoIterativo">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
