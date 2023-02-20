import React from 'react';
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "./style/tableComponent.css";
import threeDots from "../../../assets/ThreeDots.svg";
 function TablePatient() {
  const data = [
    { id: "01",token:"T-0001",name: "Adnan Rafiq",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { id: "02",token:"T-0002",name: "Amjad Ali",uid:"0000 0000 0000",test:"ECG,Heart Rate",vitalInference:"Heart rate adnormally high",time:"12:30 P.M" ,status:"inprogress"},
    { id: "03",token:"T-0003",name: "Mallikarjun Modi",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { id: "04",token:"T-0004",name: "Lisa Cherian",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { id: "05",token:"T-0005",name: "Roshan Paul",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { id: "06",token:"T-0006",name: "Siri Shivakumar",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { id: "07",token:"T-0007",name: "Usha Savadatti",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"in queue"},
  ];





  return (
    <table class="table">
    <thead>
      <tr>
       <th>Sr.No</th>
       <th>Name</th>
       <th>UID</th>
       <th>Tests</th>
       <th>Vital Inference</th>
       <th>Last Consultation</th>
       <th>Next Consultation</th>
      </tr>
    </thead>
    <tbody>
    {data.map((s) => (
      <tr>
            <td data-label="Sr.No">{s.id}</td>
            <td data-label="Name">{s.name}</td>
            <td data-label="UID">{s.uid}</td>
            <td data-label="Tests">{s.test}</td>
            <td data-label="Vital Inference">{s.vitalInference}</td>
            <td data-label="Last Consultation">06 Feb,2023</td>
            <td data-label="Next Consultation">06 Feb,2023 <span>A tag</span></td>
            <td><img className="search-ion" src={threeDots} alt="threedot"/> </td>

        
        </tr> 
      ))}
    </tbody>
  </table>


  )}
  export default TablePatient;