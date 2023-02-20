import "./style/appointmentHeader.css";
import sort from "../../../assets/sort.svg";
import search from "../../../assets/search.svg";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function TokenedListHeader()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    const [vitalRadio, setVitalRadio] = useState("");

    return(<>
    
         <div className="appointment-header" >
         <form >
         <label htmlFor="search" className="appointment-header-search">
         <img className="search-ion" src={search} alt="serach"/> 
         <input  
            className="appointment-header-search-input"
			type="text" 
			id="location" 
			value={searchText} 
			placeholder="Search by name,UID No. Tests,Vitals inference,actions"
			onChange={(e)=>setSearchText(e.target.value)}
            />
         </label>
     </form> 
     <select className="appointment-header-selector" name="pets" id="pet-select">
            <option value="Done"><p className="appointment-header-selector-option" >Done</p></option>
            <option className="appointment-header-selector-option" value="in-progress">In progress</option>
            <option className="appointment-header-selector-option" value="in-queue">In queue</option>
    </select>
    <label className="switch">
    <input type="checkbox"/>
    <span className="slider round"></span>
    </label>
     <p className="appointment-calander-text">Calander View</p>  
      <button className="appointment-create-btn"><span>+</span>Create new appointment</button>
     </div>
    </>);
}
export default TokenedListHeader;