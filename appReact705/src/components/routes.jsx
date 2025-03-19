import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Clients } from './clients'

export const RoutesApp = () => {
    return (

        <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/" element={<Clients />} />
            <Route path="/" element={<Clients />} />
            <Route path="/" element={<Clients />} />
        </Routes>
    )
}
