import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signupage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  })


  const collactdata = async (req, resp) => {
    let result = await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth))
    navigate('/')
  }
  return (
    <div className='resgester'>

      <h1>Register Now </h1>
      <input className='sign-input' type="text" placeholder='Enter your name ' value={name} onChange={(e) => setName(e.target.value)} />
      <input className='sign-input' type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='sign-input' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='signup-button' type='button' onClick={collactdata}>Submit</button>


    </div>
  )
}
