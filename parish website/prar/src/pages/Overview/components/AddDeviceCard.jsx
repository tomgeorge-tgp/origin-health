import "./style/addDeviceCard.css";
import device from "../../../assets/device.png";
import search from "../../../assets/search.svg";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function AddDeviceCard()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="add-device">
         <p className="add-device-text">Add a device +</p>
         </div>
    </>);
}
export default AddDeviceCard;