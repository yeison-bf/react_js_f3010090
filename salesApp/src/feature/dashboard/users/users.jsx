import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ViewsUsers } from './components/viewsUsers'
import { useNavigate } from 'react-router-dom'
import { GetUsers } from './services/users.services'

export const Users = () => {
  const navitage = useNavigate()
  const [dataUsers, setDataUsers] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const data = async () => {
      const response = await GetUsers();
      console.log("datos de los usuarios : ", response)
      if (!response.success) {
        setShowAlert(true)
      }
      setDataUsers(response.data.results)
      setShowAlert(false)

    }
    data()
  }, [])


  const handleDetail = (id) => {
    navitage('/dashboard/view-users/' + id)
  }

  return (
    <>

      <div>Listado de Products</div>

      {showAlert ? (
        <div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
          <strong>Lo sentimos!</strong> No se encontraron datos en la petición.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      ) : ''}


      <table className="table">
        <thead>
          <tr>
            <th >Nombre</th>
            <th >Imagen</th>
            <th >Genero</th>
            <th >Especie</th>
            <th >Estado</th>
            <th >Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((e) => (
            <tr >
              <td >{e.name}</td>
              <td ><img src={e.image} alt="soerner" srcset="" className='fototable' /></td>
              <td >{e.gender}</td>
              <td >{e.species}</td>
              <td >{e.status}</td>
              <td ><button className='btn btn-success btn-sm' onClick={() => handleDetail(e.id)}>Ver</button></td>
            </tr>

          ))}

        </tbody>
      </table>

    </>
  )
}
