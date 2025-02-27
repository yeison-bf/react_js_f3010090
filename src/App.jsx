import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersList from './components/usuarios'
import { FormUser } from './components/formUser'

function App() {

  const [dataUsers, setDataUsers] = useState([])

  const insertData = (data) => {
    setDataUsers([...dataUsers, data])
  }


  return (
    <>
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
    </>
  )
}

export default App
