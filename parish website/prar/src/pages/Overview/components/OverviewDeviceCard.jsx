import "./style/overviewDeviceCard.css";
import device from "../../../assets/device.png";
import search from "../../../assets/search.svg";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function OverviewDeviceCard()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="overview-device">
         <div className="overview-device-img"> <img  src={device} alt="device" /></div>
         <p className="overview-device-name">ASUSA Spectre</p>
         </div>
    </>);
}
export default OverviewDeviceCard;