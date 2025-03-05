
import { useLocation, Navigate, Outlet} from "react-router-dom";
import { isTokenValid } from "../utils/RoleUrlRouter.js";
import { toast } from "react-toastify";


export const ProtectAdminRoute = ({children}) => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('role')
    console.log(location)

    if (!isAuthenticated || userRole === "admin" || userRole === "user"){
        return (
            <Navigate to= "/login" state={location.state && {from:location}}/>

        )

    }
    return children

}

export const IsAuthenticated = ({children}) => {
    const location = useLocation()
    let isAuthenticated;
    const localStorageValue = localStorage.getItem('signature');

     if(localStorageValue !== null && localStorageValue.length > 5){
        isAuthenticated = true;
     }else{
        isAuthenticated = false;
     }


    if(isAuthenticated){
        return (
            <Navigate to="/" state={{from:location} }/>
        )
    }
    return children
}

export const ProtectUserRoute = ({children}) => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('roles')

    if (!isAuthenticated || userRole ==="admin" || userRole === "user" ){
        return (
            <Navigate to= "/login" state={location.state && {from:location}}/>
        )

    }
    return children

}

//Preventing Renders if user is not logged in as ADMIN
export const AdminAuthRequired = () => {
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('role')
    let tokenValid = null;

    if(isAuthenticated !== ''){
        tokenValid = isTokenValid(isAuthenticated)

        if(!tokenValid) {
            localStorage.setItem("signature", "")
            localStorage.setItem("role", "")
            toast.error("Token expired!")
        }
    }else {
         toast.error("Session expired!")

    }
  
    return (
        (userRole === "admin" )  &&  tokenValid ? 
         <Outlet /> : <Navigate to="/login" state={ { message: "You must login as an admin first!" } } />
    )
  }



