import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const user = localStorage.getItem("token");
    return(
        user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes