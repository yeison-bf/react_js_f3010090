import React, { useState } from 'react'
import './estilecomponents.css'
import { FormUser } from './formUser'

const Bienvenida = () => {

  const [dataUses, setDataUsers] = useState([])
  const insertData = (data) => {
    console.log(data)
    setDataUsers([...data, data])
  }

  return (
    <>
      <FormUser insertData={insertData} />

      <table>
        <thead>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody>
          {dataUses && (
            <tr>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Bienvenida