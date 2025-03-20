import React, { useState } from 'react'
import { Navbar } from '../landign/components/navbar'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate();

    const [dataAcces, setDataAcces] = useState({
        email: 'jennifer@gmail.com',
        password: 'Hola1234'
    })

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(dataAcces)

        if(email == dataAcces.email && password == dataAcces.password){
            navigate('/dashboard/products')
        }else{
            alert("Credenciales incorrectas");
        }
    }


    return (
        <>
        <Navbar/>
        <div className=" flex mt-6 items-center justify-center text-white">
            <div className="w-full max-w-lg p-4">
                <img src="https://img.freepik.com/vector-premium/vector-libre-hermoso-elemento-diseno-colibri-volador-pancartas-carteles-folletos-folletos_1009653-1.jpg" alt="" className='imgLogo' />
                <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 p-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Correo
                        </label>
                        <input onChange={(e)=>setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Contraseña
                        </label>
                        <input onChange={(e)=>setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                           Acceder
                        </button>
                    </div>
                </form>
            </div>

        </div>

        </>
    )
}
