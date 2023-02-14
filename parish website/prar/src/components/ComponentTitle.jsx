import "./style/componentTitle.css";
import device from "../assets/device.png";
import calander from "../assets/calander.svg";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function ComponentTitle(props)
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="component-title">
         <p className="component-title-name">{props.name}</p>
         <div className="component-title-right">
         <img  src={calander} alt="calander" />
         <p className="component-title-calander">3 February,2023<span className="component-title-bar"></span>Wednesday</p>
         </div>
         </div>
    </>);
}
export default ComponentTitle;