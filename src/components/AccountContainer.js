import React from 'react'
import '../index.css'; 
import { Xpay } from './Xpay';

// import Carousels from './Carousels';
import ImageSlider from './ImageSlider';
import images from './images';
const AccountContainer = () => {
  return (
    <div className='AccountContainer'>
        <Xpay/>
        <ImageSlider images={images} />
        
        
    </div>
  )
}

export default AccountContainer