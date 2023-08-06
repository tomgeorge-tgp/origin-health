
import "./style/adminDashboard.css"
import { signOut } from "firebase/auth";
import { auth ,db } from "../config/firebase";
import {getDocs ,collection,addDoc} from "firebase/firestore";
import { useRef, useState, useEffect } from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
function AdminDashboard(){
    const labelCollectionRef=collection(db,"label");
    const [labels, setLabels] = useState([]);
    const location = useLocation();
    //new label
    const [newLabel ,setNewLabel]=useState("");
 
    const getLabelList = async()=>{
      try{
          const data = await getDocs(labelCollectionRef);
          const filteredData=data.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id
          }))

          console.log(filteredData);
          setLabels(filteredData);
      }
      catch(err){
          console.log(err);
      }
    }
    useEffect(() =>{
      getLabelList();
    },[]);

    return(<>
    <h1>Admin Dashboard</h1>
      <button onClick ={async()=>{
       try{
        await signOut(auth);
        <Navigate to="login"  />
        console.log("sign out")
        console.log(auth);
       }catch(err){
        console.log(err);
       }
      }}>Sign out</button>
      <br/>
      <br/>
      <h3>Labels:</h3>
      <ul>
      {labels.map((label,key) => <li className="labels" key={key}>{label.name}</li>)}  
      </ul>


     <div>
        <input placeholder="Add new Labels" type="text" id="labels" 
        onChange={(e)=>setNewLabel(e.target.value) }/>
        <button 
        onClick={async()=>{
            try{

           await addDoc(
            labelCollectionRef,
           {name:newLabel})
            
            
            console.log("Add new Labels");
            getLabelList();
            
            }
            catch(err){
               console.log(err);
            }
        } }>Add Label</button>
     </div>

    </>);
}
export default AdminDashboard;