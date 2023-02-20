import "./style/titleBar.css";
import logo from '../assets/Ausa02-logo.png'; 
import profile from '../assets/Adnan.png'; 
import msg from "../assets/msg.svg";
import downArrow from "../assets/downArrow.svg";
import search from "../assets/search.svg";
import MessagePopUp from "./MessagePopUp";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function TitleBar()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    const [buttonPopUp,setButtonPopUp]=useState(false);
    return(
        <div className="title-bar">
        <MessagePopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}/>
        <a href="#default" className="logo"><img src={logo} alt="Logo" /></a>
        <div className="serach-box">
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
        </div>
        <div className="login-button-container">
        <div className="msg-icon" onClick={()=>{setButtonPopUp(true)}}><img src={msg} alt="profile" /></div>
        <div className="profile-img"><img src={profile} alt="profile" /></div>
        <p className="profile-text">Your Profile</p>
        <div className="down-arrow-icon"><img src={downArrow} alt="arrow" /></div>
          {/* <button className="login-button" onClick={(e)=>{
            //   navigate("/login");
            }}>Login</button> */}
        </div>
      </div>
      )
}

export default TitleBar;