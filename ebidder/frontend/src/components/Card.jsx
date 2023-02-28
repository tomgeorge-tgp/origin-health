import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import share from '../assets/share.svg';
import carrot from '../assets/carrot.jpeg';
import person from '../assets/personProfile.jpg';
import "./style/card.css";
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';

function Card(){
//   const { user, logoutUser } = useGlobalContext();
  return (
    <>
      
       <div className="card-container">
       <div className="card-image-container">
       <img  className="card-image-product" alt="image" src={carrot}/>
       <div className="card-image-timer">
        <div className="card-image-countdown">
            <h4>
                <span >2</span>
                H:&nbsp;
                <span >52</span>
                M:&nbsp;
                <span >50</span>
                S
            </h4>
        </div>
       </div>
       <div className='owner-area'>
        <div className="owner-emo">
            <img alt="owner-img" src={person}/>
        </div>
        <div className="owner-details">
            <span className="owner-name">Owner</span>
        </div>

       </div>
       </div>
       <div className="card-content">
       <h4>
       Carrot, Short n Sweet
       </h4>
       <p className="card-content-bid-price">Bidding Price : <span> $ 520.25</span> </p>
       <p className="card-content-bid-count">No of Bids: <span>5</span></p>

       <div className='card-bottom'>
       <div className='card-bid-btn'>Place Bid</div>
       <div className='card-social-share'>
       <div className="card-share-btn" >
       <img  className="card-image-share" alt="image" src={share}/>
       </div> 
        <ul className="card-social-icons">
            <li>f</li>
            <li>i</li>
            <li>t</li>
            <li>l</li>
        </ul>

       </div>
        <div>

        </div>
       </div>
       </div>
       </div>
      
    </>
  );
};

export default Card;