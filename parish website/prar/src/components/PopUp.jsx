import "./popUp.css"

function PopUp(props)
{
   return((props.trigger)?(<>
   <div className="popup">
   <div className="popup-inner">
    <button className="close-btn" onClick={()=>props.setTrigger(false)}>close</button>
     <h3> My popup</h3>
   <p>This is my button triggered popup</p>
    {props.children}
    </div>
   </div>

   </>):"") 

}
export default PopUp;