import "./style/overviewCard.css";
import rightArrow from "../../../assets/rightArrow.svg";
import search from "../../../assets/search.svg";
import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function OverviewCard()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
    
         <div className="overview-card">
         <div>
         <p className="overview-card-text">Total walk-in patient</p>
         <p className="overview-card-reading">60</p>
         </div>
         <div className="right-arrow-ion"> <img  src={rightArrow} alt="rightArrow" /></div>
         </div>
    </>);
}
export default OverviewCard;