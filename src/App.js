import './App.css';
import NavHeader from './Components/Pages/Navbar.jsx';
// import Navbar from './Components/Pages/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Components/Pages/Product.jsx';
import AddPrduct from './Components/Pages/AddPrd.jsx';
import UpdateProduct from './Components/Pages/UpdateProd.jsx';
import Home from './Components/Pages/Home.jsx';
import Register from './Components/Pages/UserPage/Register.jsx';
import SignUp from './Components/Pages/UserPage/Signup.jsx';
function App() {
  return (
    <Router>


    <div className="App">

      <NavHeader/>
      {/* <Product/> */}
      <div className='' style={{ marginTop:'100px'}}>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/addProduct' element={<AddPrduct/>}/>
          <Route path='/updateProduct' element={<UpdateProduct/>}/>
          <Route path='/delete' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          
          </Routes>
      </div>
      
      
    </div>
    </Router>
  );
}

export default App;
