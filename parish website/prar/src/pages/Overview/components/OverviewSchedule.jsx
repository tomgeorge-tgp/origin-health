import "./style/overviewSchedule.css";
import device from "../../../assets/device.png";
import rightArrowBlue from "../../../assets/rightArrowBlue.svg";
import OverviewScheduleRow from "./OverviewScheduleRow";

import  OverviewSchedulePerson from "./OverviewSchedulePerson";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function OverviewSchedule()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="overview-scheduler">
         <div className="overview-scheduler-header">
         <div className="overview-upcoming">

         <p className="overview-upcoming-text">Upcoming Schedule</p> 
         </div>
        
         <div className="overview-schedule">
         <p className="overview-schedule-text">View all schedule</p>
         <img className="overview-schedule-arrow" src={rightArrowBlue} alt="rightArrow blue" /> 
         </div>

         </div>

         <div className="overview-header-bottomline"></div>
         <div className="overview-header-column">
         <div className="overview-header-column-name">
         <p className="overview-header-column-text">Name</p>
         </div>
         <div className="overview-header-column-date">
         <p className="overview-header-column-text">Date</p>
         </div>
         <div className="overview-header-column-time">
         <p className="overview-header-column-text">Time</p>
         </div>
         <div className="overview-header-column-action">
         <p className="overview-header-column-text">Action</p>
         </div>
         </div>
         </div>
         {/* <OverviewScheduleRow/> */}
         <OverviewSchedulePerson/>
    </>);
}
export default OverviewSchedule;