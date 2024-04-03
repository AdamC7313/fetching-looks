import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className='info-container'>
      <h1 className='title'>Welcome to Fetching Looks Mobile Grooming</h1>
      <p className='info-text'> At Fetching Looks we serve Brandon and the Surrounding cities. We are open daily from Tuesday to Saturday. Please use the button below to snag your spot!</p>
      <button className='appt-request-btn'>Request an Appointment</button>
    </div>
  )
}

export default Info;