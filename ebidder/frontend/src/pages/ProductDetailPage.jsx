import React from 'react';
import {useState} from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import carrot from '../assets/carrot.jpeg';
import carrot2 from '../assets/carrot2.webp';
import carrot3 from '../assets/carrot3.webp';
import person from '../assets/personProfile.jpg';
import "./style/productDetailPage.css"
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';
import BindingHistory from '../components/BidingHistory';
function ProductDetailPage(){
 const [image,setImage]=useState(carrot);
 const [selected,setSelected]=useState("description");

  return (<>
  <div>

  
        <div className="product-detail">
            <div className="product-img-container">
            <img  className="product-image" alt="image" src={image}/>
            <div className="product-gallery">
            <div onClick={()=>{setImage(carrot)}}>
            <img  className="product-img-gallery" alt="image" src={carrot}/>
            </div>
            <div onClick={()=>{setImage(carrot2)}}>
            <img  className="product-img-gallery" alt="image" src={carrot2}/>
            </div>
            <div onClick={()=>{setImage(carrot3)}}>
            <img  className="product-img-gallery" alt="image" src={carrot3}/>  
            </div>
            </div>
            </div>
            <div className="product-detail-container">
            <h3>Carrot, Short n Sweet</h3>
            <p>Easy to grow and full of vitamins, this rich, sweet flavored carrot has 4" roots that are bright orange to the center. It was bred especially for heavy or poor soil and can also be grown in large containers. Burpee Exclusive. GARDEN HINTS: Sow seed in deep, well-worked stone-free soil after danger of heavy frost in the spring. Do not transplant because crooked roots may result.</p>
            <h4>Bidding Prize: <span>465.00</span></h4>

            <div className="product-detail-bid-container">
            <div className="product-detail-bid-title">
            <h5>Bid Now</h5>
            <p>Bid Amount : Minimum Bid:20.00</p>
             <form>
             <div className="product-detail-bid-form">

                <input type="text" placeholder=" 00.00"/>

                <button type="submit" className="product-detail-bid-submit-btn">Place Bid</button>
             </div>
             </form>
            </div>
            </div>   
        </div>
        </div>

       <div className='product-detail-body' >
       <div className='product-body-header'>
       <div className={ selected==="description" ? "product-body-header-btn-selected" :"product-body-header-btn"}
       onClick={()=>{setSelected("description")}}>
        Description
       </div>
       <div className={ selected==="biding-history" ? "product-body-header-btn-selected" :"product-body-header-btn"}
       onClick={()=>{setSelected("biding-history")}}>
         Biding History
       </div>
       <div className={ selected==="other-auction" ? "product-body-header-btn-selected" :"product-body-header-btn"}
       onClick={()=>{setSelected("other-auction")}}>
         Other Auction
       </div>
       </div>
       {selected ==="description" ?
       <div className='product-body-description'>
       <div className='product-body-description-header'>
        A detail description of the product
       </div>
       <div className='product-body-description-body'>
       Easy to grow and full of vitamins, this rich, sweet flavored carrot has 4" roots that are bright orange to the center. It was bred especially for heavy or poor soil and can also be grown in large containers. Burpee Exclusive. GARDEN HINTS: Sow seed in deep, well-worked stone-free soil after danger of heavy frost in the spring. Do not transplant because crooked roots may result
       </div>
      <ul>
      <li>
       Carrots can be sown early, after danger of heavy frost is over. Sow every two weeks thereafter for continuous harvest, or simply sow a second crop in midsummer for fall harvest. In frost free areas, sow in fall.
      </li>
      <li>
       Carrots do not like to be transplanted and are best sown directly into the garden bed. Sow carrot seeds in deep, well-worked soil in full sun. Straight roots require soil that is light, loosened deeply, and free of stones, so prepare a carrot planting thoroughly. Consider using a soil amendment such as compost if your soil is heavy. If you choose long carrot varieties, your soil will need to be worked more deeply.
      </li>
      <li>
       Sow thinly in rows 12 inches apart and cover with ½ inch of fine soil. Firm lightly and keep evenly moist.
      </li>
      <li>
       Since seedlings have fine leaves it may be beneficial to plant radish along with your carrot seed. The radishes will be harvested well before carrots form and act as a guide to the carrot row.
      </li>
      <li>
       Seedlings emerge in 14-21 days.
      </li>
      <li>
       Thin carrot plants to stand 1 inch apart when seedlings are 3 inches high.
      </li>
       </ul>
       </div>
       : <></>
       }
      
      {
        selected ==="biding-history" ?
        <div className='biding-history-container'>
        <BindingHistory
            image={person}
            name="Robart Fox"
            price="25000.00"
            time="4 Hours Ago"
        />
        <BindingHistory
            image={person}
            name="Robart Fox"
            price="25000.00"
            time="4 Hours Ago"
        />
        <BindingHistory
            image={person}
            name="Robart Fox"
            price="25000.00"
            time="4 Hours Ago"
        />
        <BindingHistory
            image={person}
            name="Robart Fox"
            price="25000.00"
            time="4 Hours Ago"
        />
        </div> 
        :<></>
      }


       </div>

        </div>  
    </>
  );
};



export default ProductDetailPage;
