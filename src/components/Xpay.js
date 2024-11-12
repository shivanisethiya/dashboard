import React from 'react'
import "../css/Xpay.css";

import {CiSearch} from "react-icons/ci";
export const Xpay = () => {
  return (
    <div className='Xpay'>
        <div style={{display:"flex",justifyContent:'space-between'}}>
            <h2 >My xpay accounts</h2>
          
                <div className='edit'>
               <CiSearch className='icon'/>
                <button className='button2'>Edit</button>

                </div>
               
          
        </div>
        <hr style={{width:"100%"}}></hr>

        <div className='activateAccount'>
             <p>Activate Account <br></br><span style={{color:"gray"}}> 57940038956668</span></p>
            <button className='blockaccount'>Block Account</button>
        </div>

        <div className='activateAccount'>
             <p>Blocked Account<br></br><span style={{color:"gray"}}> 57940038956668</span></p>
            <button className='unblockaccount'>Unblock Account</button>
        </div>
        
    </div>
  )
}
