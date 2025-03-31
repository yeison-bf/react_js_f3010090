import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../../feature/landign/Landing'
import { Login } from '../../feature/auth/Login'
import { Page_404 } from '../../feature/404/404'
import { Services } from '../../feature/services/services'
import { Users } from '../../feature/dashboard/users/users'
import { Products } from '../../feature/dashboard/products/products'
import { ProductsHome } from '../../feature/products/products'
import { Layout } from '../../feature/dashboard/layout'
import { ViewsUsers } from '../../feature/dashboard/users/components/viewsUsers'

export const RoutesNav = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/products' element={<ProductsHome />} />
            <Route path='/services' element={<Services />} />
            <Route path='/login' element={<Login />} />


            <Route path='/dashboard' element={ <Layout/>}>
                <Route path='users' element={<Users />} />
                <Route path='view-users/:id' element={<ViewsUsers />} />
                <Route path='products' element={<Products />} />
            </Route>





            <Route path='*' element={<Page_404 />} />


        </Routes>
    )
}
