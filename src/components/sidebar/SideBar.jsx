import { useNavigate } from "react-router-dom"
import "../sidebar/sideBar.css"
const SideBar = () =>{
    const navigate = useNavigate()
    return(
        <div className="sidebar-container">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/bookmark")} >Bookmark</li>
        </div>
    )
}
export {SideBar}