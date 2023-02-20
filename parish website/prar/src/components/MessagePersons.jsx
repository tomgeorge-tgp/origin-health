import "./style/messagePerson.css";
import {useState} from 'react';
import pending from "../assets/pending.svg";
import phone from "../assets/phone.svg";
import meet from "../assets/meet.svg";
import search from "../assets/search.svg";
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function MessagePerson(props)
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    const [selectedOption, setSelectedOption] = useState("overview");
    // props.handle(selectedOption);
    return(<>
        <div className="message-person">
        <img className="message-person-img" src={props.data.img} alt="pending"/>                                                
        <div>
            <p className="message-person-name">{props.data.name}</p>
            <p className="message-person-text">{props.data.text}</p>
        </div>
          <div className="message-person-right">
            <p className="message-person-last-seen">{props.data.lastseen}<span>h ago</span></p>
            <div className="message-person-seen"></div>
            
        </div>
        
     </div>
       
    </>)
    
}

export default MessagePerson;

