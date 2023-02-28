import React from 'react';
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "./style/table.css";
// import threeDots from "../assets/ThreeDots.svg";
 function TableAppointment() {
  const data = [
    { img: "Yesterday",bid_id:"bid001",name: "carrot",bid_amt:"1222.5",highest_bid:"1444.5",status:"Approved"},
    { img: "Yesterday",bid_id:"bid002",name: "carrot2",bid_amt:"1444.5",highest_bid:"1444.5",status:"Approved"},
    { img: "Yesterday",bid_id:"bid003",name: "carrot3",bid_amt:"2222.5",highest_bid:"1444.5",status:"Approved"},
    { img: "Yesterday",bid_id:"bid004",name: "carrot2",bid_amt:"1222.5",highest_bid:"1444.5",status:"Reject"},
    { img: "Yesterday",bid_id:"bid005",name: "carrot3",bid_amt:"1222.5",highest_bid:"1444.5",status:"Approved"},
    { img: "Yesterday",bid_id:"bid006",name: "carrot2",bid_amt:"1222.5",highest_bid:"1444.5",status:"Reject"},
   
  ];





  return (
    <table className="table">
    <thead >
      <tr className="table-head">
       <th className="table-head">Image</th>
       <th className="table-head">Bid ID</th>
       <th className="table-head">Name</th>
       <th className="table-head">Bid Amount</th>
       <th className="table-head">Highest Bid</th>
       <th className="table-head">Status</th>
      
      </tr>
    </thead>
    <tbody>
    {data.map((s) => (
      <tr>
            <td data-label="Image">{s.img}</td>
            <td data-label="Bid ID">{s.bid_id}</td>
            <td data-label="Name">{s.name}</td>
            <td data-label="Bid Amount">{s.bid_amt}</td>
            <td data-label="Highest Bid">{s.highest_bid}</td>
            <td data-label="Status">{s.status}</td>
            
            {/* <td><img className="search-ion" src={threeDots} alt="threedot"/> </td> */}
            
        </tr> 
      ))}
    </tbody>
  </table>


  )}
  export default TableAppointment;