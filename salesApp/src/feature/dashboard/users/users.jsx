import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ViewsUsers } from './components/viewsUsers'
import { useNavigate } from 'react-router-dom'

export const Users = () => {
  const navitage = useNavigate()
  const [dataUsers, setDataUsers] = useState([])

  useEffect(() => {
    const data = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
        .then((result) => {
          setDataUsers(result.data.results)
        }).catch((err) => {
          console.log(err)
        });
    }
    data()
  }, [])



  const handleDetail = (id) =>{
    navitage('/dashboard/view-users/' + id)
  }


  return (
    <>
      <div>Listado de Products</div>
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
              <td ><button className='btn btn-success btn-sm' onClick={()=>handleDetail(e.id)}>Ver</button></td>
            </tr>

          ))}

        </tbody>
      </table>

    </>
  )
}
