import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ViewsUsers = () => {

  const { id } = useParams()
  
  console.log(id)
  useEffect(() => {
    const data = () => {
      axios.get('https://rickandmortyapi.com/api/character/'+id)
        .then((result) => {
          console.log(result.data)
        }).catch((err) => {
          console.log(err)
        });
    }
    data()
  }, [])


  return (
    <div>ViwsUsers</div>
  )
}
