import React, { useState } from 'react';
import "./popUp.css";
//import firebase from 'firebase/app';
import { auth ,db } from "../config/firebase";
import {getDocs ,collection,addDoc,updateDoc,doc} from "firebase/firestore";
function Popup(props) {
    const [selectedOption, setSelectedOption] = useState('');
    const labelImageAddRef=collection(db,"imageLabels");

    // const [updateImageLabel,setUpdateImageLabel] = useState('');
    const handleDropdownChange = (e) => {
      setSelectedOption(e.target.value);
    };
    const updateImageLabel= async () => {
       const imageDoc=doc(db,"imageLabels",props.imageSelected.id);
       await updateDoc(imageDoc,{label:selectedOption})
       props.setTrigger(false)
    }
    const deleteImageLabel= async () => {
      const imageDoc=doc(db,"imageLabels",props.imageSelected.id);
      await updateDoc(imageDoc,{label:""})
      props.setTrigger(false)
   }

 console.log("imageselected",props.imageSelected.id)
  return ((props.trigger)?(
    <>
        <div className="popup">
          <div className="popup-inner">
            <button  className="close-btn" onClick={()=>props.setTrigger(false)}>Close</button>
            <h2>ADD Label to the Image</h2>
            
           <br />
            <h3>Label:{props.imageSelected.label}</h3>
            <br />
             
            <select className="selector"value={selectedOption} onChange={handleDropdownChange}>
            <option className='selector-option'  value="">Select an option</option>
            {props.labels.map((label,key) => <option key={key}>{label.name}</option>)}  
           
            </select>
     
            <button className="submit-btn" 
            onClick={async()=>{
                updateImageLabel();
            }}>Add</button>
            <button className="submit-btn" 
            onClick={async()=>{
                deleteImageLabel();
            }}>Delete</button>
          </div>
        </div>
    </>
  ):"");
}

export default Popup;


