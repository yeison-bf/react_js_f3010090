import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../../feature/landign/Landing'
import { Login } from '../../feature/auth/Login'
import { Products } from '../../feature/products/products'

export const RoutesNav = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing/> } />
            <Route path='/products' element={<Products/>} />
            <Route path='/login' element={ <Login/>} />
        </Routes>
    )
}
