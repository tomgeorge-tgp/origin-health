import "./style/message.css";
import device from "../../assets/device.png";
import search from "../../assets/search.svg";
import mallikarjun from "../../assets/Mallikarjun.jpg";
import roshan from "../../assets/Roshan.jpg";
import sahana from "../../assets/sahana.jpg";
import ComponentTitle from "../../components/ComponentTitle";
import MessagePerson from "../../components/MessagePersons";
// import TableComponent from "./components/TableTokened"
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function Message()
{
    const data = [
        {img:mallikarjun ,name:"Mallikarjun",text:"i have no other symptoms.I shall see you next Friday",lastseen:"3" ,seen:"no"},
        {img:roshan ,name:"Roshan Paul",text:"Thank you doctor",lastseen:"12" ,status:"no"},
        {img:sahana ,name:"Sahana Raikar",text:"I'm prescribing 3 medicines and a syrup,Follow the ....",lastseen:"5" ,status:"yes"},
        {img:mallikarjun ,name:"Mallikarjun",text:"i have no other symptoms.I shall see you next Friday",lastseen:"3" ,seen:"no"},
        {img:roshan ,name:"Roshan Paul",text:"Thank you doctor",lastseen:"12" ,status:"no"},
        {img:sahana ,name:"Sahana Raikar",text:"I'm prescribing 3 medicines and a syrup,Follow the ....",lastseen:"5" ,status:"yes"},
        {img:mallikarjun ,name:"Mallikarjun",text:"i have no other symptoms.I shall see you next Friday",lastseen:"3" ,seen:"no"},
        {img:roshan ,name:"Roshan Paul",text:"Thank you doctor",lastseen:"12" ,status:"no"},
        {img:sahana ,name:"Sahana Raikar",text:"I'm prescribing 3 medicines and a syrup,Follow the ....",lastseen:"5" ,status:"yes"},
       
        
      ];
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="message">
         <ComponentTitle name="Message"/>
         <div className="message-body">
         <div className="message-Left">
         <form className="search-form">
         <label htmlFor="search" className="search-label">
         <img className="search-ion" src={search} alt="serach" /> 
         <input  
            className="search-input"
			type="text" 
			id="location" 
			value={searchText} 
			placeholder="Search by name,UID No. Tests,Vitals inference,actions"
			onChange={(e)=>setSearchText(e.target.value)}
            />
         </label>
        </form>
         {data.map((s) => (
         <MessagePerson data={s}/>
          ))}
         </div>
         <div className="message-text-area">
        <div className="message-text-area-header">
        <img  src={roshan } alt="person" />
        </div>
         </div>
         <div className="message-person-details">
         <img  src={roshan } alt="person" />
         <div>
            <p>Roshan Paul</p>
         </div>
         </div>
         </div>
         {/* <div className="overview-device-img"> div>
         <p className="overview-device-name">ASUSA Spectre</p> */}
         </div>
    </>);
}
export default Message;