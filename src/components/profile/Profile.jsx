import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../slices/authSlice";
import Cookies from "universal-cookie";


const Profile =() =>{
    const {authUserDetails} = useSelector(store => store.auth)
    const cookies = new Cookies();
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const logoutHandler =() =>{
        cookies.remove("auth-password")
        cookies.remove("auth-user")
        cookies.set("isAuth", JSON.stringify(false));
        dispatch(logout())
        navigate("/")
    }
    return(
        <div>
            <p>Name:{authUserDetails?.username}</p>
            <button onClick={()=> logoutHandler()}>Logout</button>
        </div>
    )
}
export {Profile}