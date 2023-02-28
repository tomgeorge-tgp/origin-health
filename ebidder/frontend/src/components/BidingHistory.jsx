import React from 'react';
import "./style/bidingHistory.css";
function BidingHistory ({ image, name, price, time}){
  return (
    <div className='biding-history'>
      
      <img  className="biding-history-img" alt="image" src={image}/>
      <div>
      <h6>{name}</h6>
      <p>Bid price:{price}</p>
      </div>
      <div className="biding-history-time">
        <p>{time}</p>
      </div>
      
    </div>
  );
};

export default BidingHistory;
