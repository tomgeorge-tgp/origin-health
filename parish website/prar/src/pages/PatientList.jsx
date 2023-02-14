import "./style/tokenedList.css";
import device from "../assets/device.png";
import search from "../assets/search.svg";
import TokenedListHeader from "../components/TokenedListHeader"
import ComponentTitle from "../components/ComponentTitle";
import TablePatient from "../components/TablePatient"
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function PatientList()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="tokened-list">
         <ComponentTitle name="Patient list"/>
         <div className="tokened-list-body">
           <TokenedListHeader />
         <div className="tokened-list-head-bar"></div>
         <TablePatient />
         </div>
         {/* <div className="overview-device-img"> <img  src={device} alt="device" /></div>
         <p className="overview-device-name">ASUSA Spectre</p> */}
         </div>
    </>);
}
export default PatientList;