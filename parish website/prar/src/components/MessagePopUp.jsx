import "./style/messagePopUp.css";
import {useState} from 'react';
import pending from "../assets/pending.svg";
import phone from "../assets/phone.svg";
import meet from "../assets/meet.svg";
import search from "../assets/search.svg";
import mallikarjun from "../assets/Mallikarjun.jpg";
import roshan from "../assets/Roshan.jpg";
import sahana from "../assets/sahana.jpg";
import MessagePerson from "./MessagePersons";
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function Message(props)
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    const [selectedOption, setSelectedOption] = useState("overview");
    
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
    


    // props.handle(selectedOption);
    return((props.trigger)?(<>
        <div className="message-popup">
        
         <button className="close-btn" onClick={()=>props.setTrigger(false)}>close</button>
    <div className="message-popup-header">
    <p>Message</p>
    <div className="message-popup-header-icons">

    <img className="phone-ion" src={phone} alt="phone"/> 
    <img className="meet-ion" src={meet} alt="meet"/> 
    <img className="pending-ion" src={pending} alt="pending"/>                                                
    </div>
    </div>
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
  <div className="message-pop-end-bar"></div>
  <p className="message-pop-up-see-all">See all message</p>
         </div>

     
        </>):""
    )
    
}

export default Message;

