import Nave from './Components/Nave';
// import Footer from './Components/Footer';
import './App.css';
import Signup from "./Components/Signuppage";
import {BrowserRouter,Routes, Route }from 'react-router-dom';
import Privatecomp from './Components/Privatecomp';
import Login from './Components/Login';
import AddProduct from'./Components/AddProduct'
import ProductList from './Components/ProductList';
import Updatecomp from './Components/Updatecom';
import Profile from './Components/Profile';
function App() {
  return (
      <div className='App'>
     
        <BrowserRouter>
          <Nave/>
          <Routes>
            <Route element={<Privatecomp/>}>
              <Route path='/' element={<ProductList/>}/>
              <Route path="/add" element={<AddProduct/>}/>
              <Route path='/update/:id' element={<Updatecomp/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/logout' element={<h1>logout</h1>}/>
             
              </Route>
              <Route path='/Signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App;
