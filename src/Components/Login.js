import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login =()=>{
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate = useNavigate();


    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            
            navigate("/")
            
        }
        // eslint-disable-next-line
    }, [])
    const log = async()=>{
         let result= await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
         });
         result = await result.json();
         console.warn(result)
         if(result.auth)
         {
            localStorage.setItem('user',JSON.stringify(result.user));
            localStorage.setItem('token',JSON.stringify(result.auth));
            
            navigate("/")

         }
         else{
            alert("please enter connect details")
         }
    }
    return(
        <div className='loginpage'>
            <h1>Login
            </h1>
         <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
         <input type="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
         <button type='button' onClick={log}>Login</button>

        </div>
    )
}
export default Login