import React from 'react';
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "./style/tableComponent.css";
import threeDots from "../../../assets/ThreeDots.svg";
 function TableTokened() {
  const data = [
    { id: "01",token:"T-0001",name: "Adnan Rafiq",uid:"0000 0000 0000",test:"all",vitalInference:"normal",time:"12:30 P.M" ,btn:"join"},
    { id: "02",token:"T-0002",name: "Amjad Ali",uid:"0000 0000 0000",test:"ECG,Heart Rate",vitalInference:"Heart rate adnormally high",time:"12:30 P.M" ,btn:"reschedule"},
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
       <th>Day</th>
       <th>Time</th>
       <th>Name</th>
       <th>UID</th>
       <th>Tests</th>
       <th>Token No.</th>
       <th>Latest Vital Inference</th>
       <th>Last Consultation</th>
      </tr>
    </thead>
    <tbody>
    {data.map((s) => (
      <tr>
            <td data-label="Day">{s.id}</td>
            <td data-label="Time">00:00 A.M. - 00:00AM</td>
            <td data-label="Name"><span>Pending</span>{s.name}</td>
            <td data-label="UID">{s.uid}</td>
            <td data-label="Tests">{s.test}</td>
            <td data-label="Latest Vital Inference">{s.vitalInference}</td>
            <td data-label="Last Consultation">{s.token}</td>
            {s.btn &&   <button className={s.btn==="reschedule" ? "btn-reschedule":"btn-join"}>{s.btn}</button> }

            <td><img className="three-Dots" src={threeDots} alt="threedot"/> </td>
        </tr> 
      ))}
    </tbody>
  </table>


  )}
  export default TableTokened;