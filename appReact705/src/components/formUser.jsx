import React, { useState } from 'react'

export const FormUser = ({ insertData }) => {

    const [nameUser, setNameUser] = useState()
    const [email, setEmail] = useState()

    const guardar = (e) => {
        e.preventDefault()
        insertData({ nameUser, email })
        setNameUser('')
        setEmail('')
    }

    return (
        <div>
            <h2>REGISTRO</h2>
            <form onSubmit={guardar} action="">
                <div className="mb-3">
                    <label className="form-label">Nombre usuario</label>
                    <input value={nameUser} onChange={(e) => setNameUser(e.target.value)}  type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"/>
                </div>
                <input className='btn btn-success col-12' type='submit' value="Guardar" />
            </form>
        </div>
    )
}


