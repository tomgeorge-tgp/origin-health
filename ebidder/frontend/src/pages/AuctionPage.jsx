import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import "./style/auctionPage.css";
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';
import Card from '../components/Card';
function AuctionPage(){
//   const { user, logoutUser } = useGlobalContext();
  return (
    <>
    <div className='auction-row'>
      <Card/>
      <Card/>
      <Card/>

    </div>
     
    </>
  );
};

export default AuctionPage;