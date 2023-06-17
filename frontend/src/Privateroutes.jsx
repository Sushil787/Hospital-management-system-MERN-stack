import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const user = localStorage.getItem("jwt");
    return(
        user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes