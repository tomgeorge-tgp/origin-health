
import { useEffect,useState } from 'react';
import "./style/prar.css";
import SideBar from "../components/SideBar";
import TitleBar from "../components/TitleBar";
import Overview from "./Overview";
import TokenedList from "./TokenedList";
import Appointments from "./Appointments";
import PatientList from "./PatientList";

// import Cards from  "./components/Cards"
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"

// function HostelCard({hostels}){
//     const location=useLocation();
//     const navigate = useNavigate(); 
//     return hostels.map((hostel, index) =>{
//        return(
//        <div key={index} className="col-sm">
//     <div onClick={()=>{
//         console.log("click");
//         navigate("/hostel" ,{state:hostel});
//     }}>
//     <Cards data={hostel}/>
//     </div> 
//     </div>
//        )
//     });
   
// }

function Prar(){

    const [selectedOption, setSelectedOption] = useState("overview");
    return(<>
        <div className='Body_par'>
        <TitleBar/>
        {/* <br></br> */}
        <div className="body-container">
        <div className="side-bar"><SideBar handle={(e)=>{console.log(e)}} /></div>
        <div className="main-body">
            {/* <Overview/> */}
            {/* <TokenedList/> */}
            {/* <PatientList/>  */}
           <Appointments/>
        </div>

        {/* <div className="row">
        {/* {hostels.length > 0 ? <HostelCard hostels={hostels}/> : <p className="m-4 text-center w-100">No hostel data!</p>} 
        </div> 
        */}

        </div>

        </div>



      

    </>)
}

export default Prar;
