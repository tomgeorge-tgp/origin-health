import "./style/appointment.css";
import device from "../../assets/device.png";
import search from "../../assets/search.svg";
import AppointmentHeader from "./components/AppointmentHeader"
import ComponentTitle from "../../components/ComponentTitle";
import TableComponent from "./components/TableAppointment"
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function TokenedList()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="tokened-list">
         <ComponentTitle name="Appointment"/>
         <div className="appointment-body">
           <AppointmentHeader/>
         <div className="appointment-head-bar"></div>
         <TableComponent/>
         </div>
         {/* <div className="overview-device-img"> <img  src={device} alt="device" /></div>
         <p className="overview-device-name">ASUSA Spectre</p> */}
         </div>
    </>);
}
export default TokenedList;