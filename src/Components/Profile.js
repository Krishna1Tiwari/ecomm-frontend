import React from 'react';
import pofileimg from './img/profileimg.png'

export default function Profile() {
    const auth = localStorage.getItem('user');
    
  return (
    <div className='profile'>
        
        
        
        <h1>My Profile</h1>
          <img src={pofileimg} alt="somthing went wrong" />
          <div className='profile1'>
          <li>Username : {JSON.parse(auth).name} </li>
          <li>Email Id : {JSON.parse(auth).email} </li>

          </div>
         
        
        </div>
  )
}
