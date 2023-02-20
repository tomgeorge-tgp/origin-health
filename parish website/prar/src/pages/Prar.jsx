
import { useEffect,useState } from 'react';
import "./prar.css";
import SideBar from "../components/SideBar";
import TitleBar from "../components/TitleBar";
import Overview from "./Overview/Overview";
import TokenedList from "./TokenedList/TokenedList";
import Appointments from "./Appointments/Appointment";
import PatientList from "./PatientList/PatientList";
import Message from './message/Message';



function Prar(){

    const [selectedOption, setSelectedOption] = useState("overview");
    return(<>
        <div className='Body_par'>
        <TitleBar/>
        {/* <br></br> */}
        <div className="body-container">
        <div className="side-bar"><SideBar handle={(e)=>{setSelectedOption(e)}} /></div>
        <div className="main-body">
            { selectedOption==="overview" ? <Overview/>: null}
            { selectedOption==="tokened-list" ? <TokenedList/> : null}
            { selectedOption==="patient's-list" ? <PatientList/>  : null}
            { selectedOption==="appointments" ?<Appointments/>  : null}
            { selectedOption==="pharmacy" ? <Message/>  : null}
            { selectedOption==="payments" ? <PatientList/>  : null}
            { selectedOption==="report" ? <PatientList/>  : null}
            {/* */}
            {/* */}
           
        </div>

       

        </div>

        </div>



      

    </>)
}

export default Prar;
