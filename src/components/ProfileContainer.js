import React from 'react'
import "../index.css"
import logo from "../profile/userimage.jpg"
const ProfileContainer = () => {
  return (
    <div className='ProfileContainer'>
         <img src={logo} width={200} ></img>
         <div className='myprofile'>
            <div><h2>My Profile</h2></div>
            <div><p style={{color:"gray", fontSize:"small"}}> Last Login 12 June 2024<br></br>Windows 10 New York
            </p></div>

         </div>
         <div style={{display : "flex",justifyContent:"center" , gap:"20px",width:"100%"}}>
         <input type="text" placeholder='Sami Rahman'  style={{all:'unset',borderBottom:"1px solid gray" ,width:"45%"}}/>
         <input type='number' placeholder='+91 8989898989' style={{all:'unset',borderBottom:"1px solid gray ",width:"40%"}}/>
         </div>

         <div className='email'>
            <input type='email' placeholder='example@gmail.com' style={{all:'unset',borderBottom:"1px solid gray ",width:"90%"}}/>
         </div>

         <div style={{width:"90%"}}>
         <label style={{color:"red"}}>
         SMS alert activation
         <input type="checkbox"/>
         </label>
           
         </div>

         <a href='https://www.google.com/'>
         <button className='button1'>Go to website</button>
         </a>
         
      

    </div>
  )
}

export default ProfileContainer