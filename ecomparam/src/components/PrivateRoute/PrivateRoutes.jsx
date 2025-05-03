import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
//   const admin = JSON.parse(sessionStorage.getItem('admin'))

    let auth = {'token': false}
    
  return (
    <div>
       { auth.token ? <Outlet/> : <Navigate to='/signin'/>}
    </div>
  )
}

export default PrivateRoutes