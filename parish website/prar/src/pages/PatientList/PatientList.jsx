import "./style/patientList.css";
// import device from "../assets/device.png";
// import search from "../assets/search.svg";
import TokenedListHeader from "./components/PatientListHeader"
import ComponentTitle from "../../components/ComponentTitle";
import TablePatient from "./components/TablePatient"
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function PatientList()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="patient-list">
         <ComponentTitle name="Patient list"/>
         <div className="patient-list-body">
           <TokenedListHeader />
         <div className="patient-list-head-bar"></div>
         <TablePatient />
         </div>
         {/* <div className="overview-device-img"> <img  src={device} alt="device" /></div>
         <p className="overview-device-name">ASUSA Spectre</p> */}
         </div>
    </>);
}
export default PatientList;