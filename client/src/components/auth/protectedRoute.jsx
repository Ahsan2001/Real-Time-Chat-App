import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute = (props) => {
    const {children, user, redirect="/login"} = props

    if (!user) {
        return <Navigate to={redirect}  />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute