import React from 'react';
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "./style/tableComponent.css";
import threeDots from "../assets/ThreeDots.svg";
 function TableAppointment() {
  const data = [
    { Day: "Yesterday",time:"00:00 A.M-00:00 A.M.",name: "Adnan Rafiq",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { Day: "Today",time:"00:00 A.M-00:00 A.M.",name: "Amjad Ali",uid:"0000 0000 0000",test:"ECG,Heart Rate",vitalInference:"Heart rate adnormally high",time:"12:30 P.M" ,status:"inprogress"},
    { Day: "Today",time:"00:00 A.M-00:00 A.M.",name: "Mallikarjun Modi",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { Day: "Today",time:"00:00 A.M-00:00 A.M.",name: "Lisa Cherian",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { Day: "07 Feb,2023",time:"00:00 A.M-00:00 A.M.",name: "Roshan Paul",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { Day: "07 Feb,2023",time:"00:00 A.M-00:00 A.M.",name: "Siri Shivakumar",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"done"},
    { Day: "07 Feb,2023",time:"00:00 A.M-00:00 A.M.",name: "Usha Savadatti",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,status:"in queue"},
  ];





  return (
    <table class="table">
    <thead>
      <tr>
       <th>Day</th>
       <th>Time</th>
       <th>Name</th>
       <th>UID No.</th>
       <th>Tests</th>
       <th>Latest Vital Inference</th>
       <th>Last Consultation</th>
      </tr>
    </thead>
    <tbody>
    {data.map((s) => (
      <tr>
            <td data-label="Day">{s.Day}</td>
            <td data-label="Time">{s.token}</td>
            <td data-label="Name">{s.name}</td>
            <td data-label="UID No.">{s.uid}</td>
            <td data-label="Tests">{s.test}</td>
            <td data-label="Latest Vital Inference">{s.vitalInference}</td>
            <td data-label="Last Consultation">12:30 P.M.<span>A tag</span></td>
            <td><img className="search-ion" src={threeDots} alt="threedot"/> </td>
            
        </tr> 
      ))}
    </tbody>
  </table>


  )}
  export default TableAppointment;