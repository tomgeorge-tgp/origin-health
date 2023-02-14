import "./style/sideBar.css";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function SideBar(props)
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [selectedOption, setSelectedOption] = useState("overview");
    props.handle(selectedOption);
    return(<>
    <div className="side-bar-container">

      <div className={selectedOption==="overview" ?"side-bar-option-selected":"side-bar-option"}
      onClick={() => setSelectedOption("overview") }><p>Overview</p></div>
      <div className={selectedOption==="tokened-list" ?"side-bar-option-selected":"side-bar-option"}
      onClick={() => setSelectedOption("tokened-list") }><p>Tokened list</p></div>
      <div className={selectedOption==="patient's-list" ?"side-bar-option-selected":"side-bar-option"}
      onClick={() => setSelectedOption("patient's-list") }><p>Patient's list</p></div>
      <div className={selectedOption==="appointments" ?"side-bar-option-selected":"side-bar-option"}
      onClick={() => setSelectedOption("appointments") }><p>Appointments</p></div>
      <div className={selectedOption==="pharmacy" ?"side-bar-option-selected":"side-bar-option"}
      onClick={() => setSelectedOption("pharmacy") }><p>Pharmacy</p></div>
      <div className={selectedOption==="payments" ?"side-bar-option-selected":"side-bar-option"} 
      onClick={() => setSelectedOption("payments") }><p>Payments</p></div>
      <div className="side-bar-line"></div>
      <div className={selectedOption==="report" ?"side-bar-option-selected":"side-bar-option"}
      onClick={() => setSelectedOption("report") }><p>Report</p></div>
      <div className={selectedOption==="notice" ?"side-bar-option-selected":"side-bar-option"}
      onClick={() => setSelectedOption("notice") }><p>Notice</p></div>
      <div className={selectedOption==="settings" ?"side-bar-option-selected":"side-bar-option"}
      onClick={() => setSelectedOption("settings") }><p>Settings</p></div>
    </div>
    </>)
}

export default SideBar;

