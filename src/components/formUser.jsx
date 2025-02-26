import React, { useState } from 'react'

export const FormUser = ({insertData}) => {

    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const guardar = (e) => {
        e.preventDefault()
        insertData({email, password})
    }

    return (
        <div>formUser
            <form onSubmit={guardar} action="">
                <label>Email</label>
                <input onChange={(e) => setemail(e.target.value)} type="text" />
                <label>Password</label>
                <input onChange={(e) => setpassword(e.target.value)} type="text" />
                <input type='submit' value="Guardar" />
            </form>
        </div>
    )
}


