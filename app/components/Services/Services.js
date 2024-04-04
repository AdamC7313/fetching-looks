import React from 'react';
import './Services.css';
import Image from 'next/image';

const Services = () => {
  return (
    <div className='services-container'>
      <h1 className='services-title title'>Services</h1>
      <p className='info-text services-description'>At Fetching Looks, your pup is our priority. We are proud to offer the following services for your beloved pet.</p>
      <p className='note'><em>*Please note, a $6 travel fee is added to all totals to cover travel costs. <strong>Up-to-date rabies vaccine is required!</strong></em></p>
      <div className='squeaky-clean-service service-type'>
        <Image className='service-image' src='/squeaky-clean.jpg' alt='dog getting bathed' width={150} height={150} />
        <div className='service-desc-container'>
        <h2 className='service-title'>Squeaky Clean</h2>
        <p className='info-text'>This luxury bath service includes everything your pup needs to stay clean from head to tail.</p>
      </div>
      <i>Expand</i>
      </div>
      <div className='sit-stay-style-service service-type'>
        <Image className='service-image' src='/pawsome-pamering.jpg' alt='dog getting bathed' width={150} height={150} />
        <div className='service-desc-container'>
        <h2 className='service-title'>Sit, Stay, Style</h2>
        <p className='info-text'>Along with our Squeaky Clean services*, we'll tailor your pups look to paw-fection and dream up your pooch's perfec 'do.</p>
      </div>
      <i>Expand</i>
      </div>
      <div className='a-la-carte-service service-type'>
        <Image className='service-image' src='/a-la-carte.jpg' alt='dog getting bathed' width={150} height={150} />
        <div className='service-desc-container'>
        <h2 className='service-title'>A La Carte</h2>
        <p className='info-text'>Discover extra pampering for your pooch! Tailor our customizable services for a snazzy spa day.</p>
      </div>
      <i>Expand</i>
      </div>
    </div>
  )
}

export default Services;