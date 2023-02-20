import "./style/overviewSchedule.css";
import "./style/overviewSchedulePerson.css";
import edit from "../../../assets/edit.svg";
import msg from "../../../assets/msg.svg";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function OverviewSchedulePerson()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
    <div className="overview-header-column">
         <div className="overview-header-column-name">
         <p className="overview-header-column-text">Usha Savadatti</p>
         </div>
         <div className="overview-header-column-date">
         <p className="overview-header-column-text">03 Feb,2023</p>
         </div>
         <div className="overview-header-column-time">
         <p className="overview-header-column-text">12:30 P.M. <span className="overview-header-column-inner-time">in 10 mins</span> </p>
        
         </div>
         <div className="overview-header-column-action">
        <button className="overview-header-column-action-button">Join</button>
        <img  src={edit} alt="edit" />
        <div className="overview-header-column-action-bar"></div>
        <img  src={msg} alt="msg" />
         </div>
         </div>
         
    </>);
}
export default OverviewSchedulePerson;