import "./style/patientListHeader.css";
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
    
         <div className="patient-list-header" >
         <form >
         <label htmlFor="search" className="patient-list-header-search">
         <img className="search-ion" src={search} alt="serach"/> 
         <input  
            className="patient-list-header-search-input"
			type="text" 
			id="location" 
			value={searchText} 
			placeholder="Search by name,UID No. Tests,Vitals inference,actions"
			onChange={(e)=>setSearchText(e.target.value)}
            />
         </label>
     </form> 
        
          <div className="patient-list-header-radio">
          <input className="patient-list-header-radio-button" type="radio" name="vital" value="All" onChange={()=>setVitalRadio("All")} />
          <span className="patient-list-header-radio-text">
          All
          </span>
          <input className="patient-list-header-radio-button" type="radio" name="vital" value="Critical Vitals" onChange={()=>setVitalRadio("Critical Vitals")}/>
          <span className="patient-list-header-radio-text">
          Critical Vitals
          </span>
          <input className="patient-list-header-radio-button" type="radio" name="vital" value="Critical Vitals" onChange={()=>setVitalRadio("Critical Vitals")}/>
          <span className="patient-list-header-radio-text">
          Critical Vitals
          </span>
          <input className="patient-list-header-radio-button" type="radio" name="vital" value="Critical Vitals" onChange={()=>setVitalRadio("Critical Vitals")}/>
          <span className="patient-list-header-radio-text">
          Critical Vitals
          </span>

          </div>
        
      <div className="patient-list-header-sort-ion">
      <img className="search-ion" src={sort} alt="sort"/>
      </div>  
     </div>
    </>);
}
export default TokenedListHeader;