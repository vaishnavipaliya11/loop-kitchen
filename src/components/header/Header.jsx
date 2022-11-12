import "../../styles.css"
import {CgProfile} from "react-icons/cg"
const Header =() =>{
    return(
        <div className="header-container">
            <h2>Loop kitchen</h2>
            <div>
                <span><CgProfile/></span>
            </div>
        </div>
    )
}
export {Header}