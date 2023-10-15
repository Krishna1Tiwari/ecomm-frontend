import React from 'react';
import { Link, useNavigate } from 'react-router-dom';





export default function Nave() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')

  }
  return (
    <div>
      {


        auth ?
           
          <ul className='Nave-ul'>
            <h3>E-comm.com</h3>
            <li><Link  to="/" className='active'>Product</Link></li>
            <li><Link to="/add">Add Products</Link></li>

            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
          </ul>
          :
          <ul className='Nave-ul'>
            <h3>E-Comm.com</h3>
            <li> <Link to="/Signup">Sign Up</Link> </li>
            <li> <Link to="/login">Login</Link>  </li>
          </ul>
      }
    </div>
  )
};
