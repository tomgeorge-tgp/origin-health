import PopUp from "./PopUp";
import "./popUpParent.css"
import {useState} from 'react';


function PopUpParent()
{
   const [buttonPopUp,setButtonPopUp]=useState(false);
   return(<>
   <main>
   <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}/>
    <h1>React PopUp</h1>
    <br/><br/>
    <button onClick={()=> setButtonPopUp(true)}>Open PopUp</button>
   </main>
<h2>hello</h2>
   </>) 

}
export default PopUpParent;