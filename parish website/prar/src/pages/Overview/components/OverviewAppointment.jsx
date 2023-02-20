import "./style/overviewAppointment.css";
import laptop from "../../../assets/laptop.svg";
import meeting from "../../../assets/meeting.svg";
import schedule from "../../../assets/schedule.svg";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function OverviewAppointment()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="overview-appointment">
         <p className="overview-appointment-header">Create online appoinment</p>
         <div className="overview-appointment-body">
         <div className="overview-appointment-laptop">
         <img  className="overview-appointment-laptop-img" src={laptop} alt="laptop" />
         </div>
         <div>
         <p className="overview-appointment-text">Schedule or start an instant online appoinment for your patients.</p>
         <div className="overview-appointment-scheduler">
            <div className="overview-appointment-meeting">
            <img  src={meeting} alt="meeting" />
            <p className="overview-appointment-start-text">Start video consultation</p>
            </div>
            <div className="overview-appointment-schedule">
            <img  src={schedule} alt="schedule" />
            <p className="overview-appointment-schedule-text">Schedule for later</p>
            </div>
         </div>
         </div>
         </div>
         </div>
    </>);
}
export default OverviewAppointment;