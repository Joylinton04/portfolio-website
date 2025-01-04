import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../main/Home'

const Approute = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

export default Approute
