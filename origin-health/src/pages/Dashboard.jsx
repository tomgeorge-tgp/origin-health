import { signOut } from "firebase/auth";
import { auth ,db } from "../config/firebase";
import {getDocs ,collection,addDoc} from "firebase/firestore";
import { useRef, useState, useEffect } from 'react';
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";

import dog1 from "../assets/dog1.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/dog3.jpg";
import dog4 from "../assets/dog4.jpg";
import horse1 from "../assets/horse1.jpg";
import horse2 from "../assets/horse2.jpg";
import horse3 from "../assets/horse3.jpg";
import "./style/dashboard.css"

import ImageCard from "../components/ImageCard";
import Popup from "../components/PopUp";
import { useLocation, Navigate, Outlet } from "react-router-dom";
function Dashboard(){
    const labelCollectionRef=collection(db,"label");
    const labelImageAddRef=collection(db,"imageLabels");
    const [labels, setLabels] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [imageSelected, setImageSelected] = useState("")
    const [imageData,setImageData]=useState([]);

    const [selectedOption, setSelectedOption] = useState('all');
    const handleDropdownChange = (e) => {
      setSelectedOption(e.target.value);
    };
    const location = useLocation();

    
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
    const getImageData=async()=>{
      try{
        const data = await getDocs(labelImageAddRef);
        const filteredData=data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id
        }))
        console.log(filteredData);
        setImageData(filteredData);
      }
      catch(err){
        console.log(err);
    }
  }
    useEffect(() =>{
      getLabelList();
      getImageData();
    },[popUp]);

    return(<>

    <h1>Dashboard</h1>
      <button onClick ={async()=>{
       try{
        await signOut(auth);
        console.log("sign out")
        console.log(auth);
        <Navigate to="/login"   />
       }catch(err){
        console.log(err);
       }
      }}>Sign out</button>


      <div>

      <select value={selectedOption} onChange={handleDropdownChange}>
            <option   value="all">All</option>
            {labels.map((label,key) => <option key={key}>{label.name}</option>)}  
           
            </select>
      </div>

      <Popup trigger={popUp} setTrigger={setPopUp} labels={labels} imageSelected={imageSelected}/>
      <div className="row">

      {
       imageData.filter((image)=> selectedOption!=="all" ? image.label===selectedOption : true).map((image,index) =>{

            return(
                <div className="col" key={index} onClick={()=>{
                    console.log("image",image)
                    setImageSelected(image)
                    setPopUp(true);

                }}>
                  <ImageCard image={image.imagePath} name={image.label} />      
                </div>
            )
        })
      }
      </div>

    </>);
}
export default Dashboard;