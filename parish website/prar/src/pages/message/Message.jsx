import "./style/message.css";
import microphone from "../../assets/microphone.svg";
import fileAdd from "../../assets/fileAdd.svg";
import search from "../../assets/search.svg";
import copy from "../../assets/copy.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import threeBar from "../../assets/ThreeBar.svg";
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
      const message=[
        {text:"Here's a dummy medical inference by Dr.Adnan on Roshan Paul health.Things look pretty neat,other than for the 5 medical issues mentioned just above",type:"reveiver",time:"12:30pm"},
        {text:"Here's a reply by Dr.Adnan",type:"sender",time:"12:30pm"},
        {text:"Here's a dummy medical inference by Dr.Adnan on Roshan Paul health.Things look pretty neat,other than for the 5 medical issues mentioned just above",type:"reveiver",time:"12:30pm"},
        {text:"Here's a dummy medical inference by Dr.Adnan on Roshan Paul health.Things look pretty neat,other than for the 5 medical issues mentioned just above",type:"reveiver",time:"12:30pm"},
        {text:"Here's a reply by Dr.Adnan",type:"sender",time:"12:30pm"},

      ]
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="message">
         <ComponentTitle name="Message"/>
         <div className="message-body">
         <div className="message-Left">
         <form className="search-form">
         <div className="message-search-form-box">

         <label htmlFor="search" className="search-label">
         <img className="search-ion" src={search} alt="serach" /> 
         <input  
            className="message-left-search-input"
			type="text" 
			id="location" 
			value={searchText} 
			placeholder="Search by name or message"
			onChange={(e)=>setSearchText(e.target.value)}
            />
         </label>
         <img className="three-bar" src={threeBar} alt="threeBar" /> 
         </div>
        </form>
        <div className="message-Left-header-bar"></div>
        <div>
         {data.map((s) => (<>
         <MessagePerson data={s}/>
         <div className="message-Left-person-bar"></div>
         </>
          ))}
        </div>
         </div>
         <div className="message-text-area">
        <div className="message-text-area-header">
         <img  src={roshan } alt="person" />
         <p>Roshan Paul</p>
        </div>
        <div className="message-text-area-body">
        {message.map((msg) => (
            <div className={msg.type==="sender" ? "message-text-area-sender" :"message-text-area-recever"}>
            <p>{msg.text}</p>
          </div>
          ))}
        </div>
        <div className="message-text-area-bottom">
        <img  src={fileAdd } alt="fileAdd" />
        
        <input  
            className="message-text-area-bottom-text"
			type="text" 
			id="location" 
			value={searchText} 
			placeholder="Type your message here..."
			onChange={(e)=>setSearchText(e.target.value)}
            /> 
        <img  src={microphone } alt="microphone" />
        </div>
         </div>


         <div className="message-person-details">
         <div className="message-person-details-header">

         <img  className="message-person-details-img" src={roshan } alt="person" />
         <div>
            <p className="message-person-details-name">Roshan Paul</p>
            <p className="message-person-details-uid">UID:<span className="message-person-details-uid-number">901813562456</span><span><img  src={copy } alt="copy" /></span></p>
         </div>
         </div>
         <div className="message-person-details-bar"></div>
         <div className="message-person-details-dec">
            <p >Blood group:<span className="message-person-details-dec-blood">AB-ve</span></p>
            <div className="message-person-details-dec-bar"></div>
            <p >Age:<span className="message-person-details-dec-age">22 yrs</span></p>
         </div>
         <div className="message-person-details-bar"></div>
         <div className="message-person-details-contact">
         <p className="message-person-details-contact-title">Contact Details</p>
         <div className="message-person-details-contact-phone">
         <img  className="message-person-details" src={phone } alt="phone" />
         <p>+91 8924 324 234</p>
         </div>
         <div className="message-person-details-contact-phone">
         <img  className="message-person-details" src={email } alt="email" />
         <p>roshan@gmail.com</p>
         </div>
         </div>
         <div className="message-person-details-bar"></div>
         <div className="message-person-details-medical">
         <p>
         Medical History
         </p>
            <ul>
                <li>Medical issue 01</li>
                <li>Medical issue 02</li>
                <li>Medical issue 03</li>
                <li>Medical issue 04</li>
                <li>Medical issue 05</li>
            </ul>
         </div>
         <div className="message-person-details-bar"></div>
         <div className="message-person-details-bottom">
         <p>
         Last Appointment
         </p>
         <div className="message-person-details-appointment" >
         <p>Date:<span className="message-person-details-dec-blood">12 Feb,2023</span></p>
            <div className="message-person-details-dec-bar"></div>
            <p>Time:<span className="message-person-details-dec-age">10:40 am</span></p>
         </div>
            <p>
         Medical History
         </p>
         <p>
         Here's a dummy medical inference by Dr.Adnan on Roshan Paul health.Things look pretty neat,other than for the 5 medical issues mentioned just above 
         </p>
         </div>
         </div>
         </div>
         {/* <div className="overview-device-img"> div>
         <p className="overview-device-name">ASUSA Spectre</p> */}
         </div>
    </>);
}
export default Message;