import "../../styles.css"
import {CgProfile} from "react-icons/cg"
import { useNavigate } from "react-router-dom"
const Header =() =>{
    const navigate=  useNavigate()
    return(
        <div className="header-container">
            <h2>Loop kitchen</h2>
            <div>
                <span onClick={() => navigate("/profile")}><CgProfile/></span>
            </div>
        </div>
    )
}
export {Header}