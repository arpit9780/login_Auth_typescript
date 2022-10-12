import React from 'react'

export const PrivRoutes = () => {
  return (
    <div>PrivRoutes</div>
  )
}

// import { Navigate } from "react-router-dom";

// export const PrivateRoute = ({ children }) => {
    
//   const auth = localStorage.getItem("type_token")     
//     if (auth ) {
//       return children
//     }
//     return <Navigate to="/" />
//   }