import React, { useState } from 'react'
import './estilecomponents.css'
import { FormUser } from './formUser'

const UsersList = ({ dataUsers }) => {
  return (
    <>
      <h2>LISTADO DE DE USUARIOS</h2>
      <table className='table bordered'>
        <thead>
          <th>Nombre Completo</th>
          <th>Correo electrónico</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {dataUsers.map((element)=>(
            <tr>
              <td>{element.nameUser}</td>
              <td>{element.email}</td>
              <td>
                <button className='btn btn-success btn-sm'>editar</button>
                <button className='btn btn-danger btn-sm'>eliminar</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersList