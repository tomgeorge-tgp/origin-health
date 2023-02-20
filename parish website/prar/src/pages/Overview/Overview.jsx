import "./style/overview.css";
import OverviewCard from "./components/OverviewCard";
import OverviewDeviceCard from "./components/OverviewDeviceCard";
import OverviewSchedule from "./components/OverviewSchedule";
import OverviewAppointment from "./components/OverviewAppointment";
import AddDeviceCard from "./components/AddDeviceCard";
import downArrow from "../../assets/downArrow.svg";
import search from "../../assets/search.svg";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function Overview()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
           <h1 className="overview-header">Welcome Dr.Adnan</h1>
           <div className="overview-card-container">
           <div className="overview-row" >
           <div className="overview-col">
           <OverviewCard/>
           </div>
           <div className="overview-col">
           <OverviewCard/>

           </div>
           <div className="overview-col">

           <OverviewCard/>
           </div>
           <div className="overview-col">

           <OverviewCard/>
           </div>
           <div className="overview-col">

           <OverviewCard/>
           </div>

           </div>
           </div>
           <h3 className="overview-header-device">Devices assigned to you</h3>
           <div className="overview-card-container">
            <div className="overview-row" >
                <div className="overview-col">
                <OverviewDeviceCard/>
                </div>
                <div className="overview-col">
                <OverviewDeviceCard/>
                </div>
                <div className="overview-col">
                <OverviewDeviceCard/>
                </div>
                <div className="overview-col">
                <OverviewDeviceCard/>
                </div>
                <div className="overview-col">
                <AddDeviceCard/>
                </div>
            </div>
           </div>
           <h3 className="overview-header-device">Tele-consultation</h3>
          <div className="overview-bottom">
           <div>
           <OverviewSchedule/>
           </div>
           <div>
           <OverviewAppointment/>
           </div>
          </div>

    </>);
}
export default Overview;