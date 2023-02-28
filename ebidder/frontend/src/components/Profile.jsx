import React from 'react';
import "./style/profile.css";
import {useState} from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import person from '../assets/personProfile.jpg';
import FormRow from './FormRow';
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';

function Profile(){
//   const { user, logoutUser } = useGlobalContext();
const [values, setValues] = useState({
   firstName:'',
   lastName:'',
   contactNumber:'',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
   <>
    <div className="profile">
    <div className="profile-header">
    <img alt="owner-img" src={person}/>
    <h3>Johan Martin SR</h3>
    </div>
    <div className="profile-form">
        <form>
        <div className="profile-form-row">
        <div className="profile-form-col">
        <FormRow
            type='text'
            name='First Name'
            icon="null"
            value={values.firstName}
            handleChange={handleChange}
          />
        </div>
        <div className="profile-form-col">
        <FormRow
            type='text'
            name='Last Name'
            icon="null"
            value={values.lastName}
            handleChange={handleChange}
          />
          </div>
          </div>
          <div className="profile-form-row">
          <div className="profile-form-col">
          <FormRow
            type='text'
            name='Contact Number'
            icon="null"
            value={values.contactNumber}
            handleChange={handleChange}
          />
          </div>
          <div className="profile-form-col">
           <FormRow
            type='email'
            name='Email'
            icon="null"
            value={values.email}
            handleChange={handleChange}
          />
        </div>
        </div>
           <FormRow
            type='text'
            name='Address'
            icon="null"
            value={values.address}
            handleChange={handleChange}
          />
          <div className="profile-form-row">
          <div className="profile-form-col">
          <FormRow
            type='text'
            name='City'
            icon="null"
            value={values.city}
            handleChange={handleChange}
          />
           </div>
           <div className="profile-form-col">
           <FormRow
            type='text'
            name='State'
            icon="null"
            value={values.state}
            handleChange={handleChange}
          />
          </div>
          </div>
          <div className="profile-form-row">
          <div className="profile-form-col">
           <FormRow
            type='number'
            name='Zip Code'
            icon="null"
            value={values.zipCode}
            handleChange={handleChange}
          />
          </div>
          <div className="profile-form-col">
           <FormRow
            type='text'
            name='Country'
            icon="null"
            value={values.country}
            handleChange={handleChange}
          />
          </div>
          </div>
          <button className="profile-form-update-btn">Update Profile</button>
          <button className="profile-form-cancel-btn">Cancel</button>
        </form>
          </div>
    

    </div>
   </>
  );
};

export default Profile;
