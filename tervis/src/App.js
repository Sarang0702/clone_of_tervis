import './App.css';
import { Home } from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from './Components/Products';
import { Cart } from './Components/Cart';
import { Footer } from './Components/Footer';
import { Payment } from './Components/Payment';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';



function App() {
  return (
    <div className="App">      

      <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Home />} />  
            <Route path="/srng" element={<h1>Hey Srng</h1>} />   
            <Route path="/products" element={<Products />} />   
            <Route path="/cart" element={<Cart />} />    
            <Route path="/payment" element={<Payment />} />         
            <Route path="/login" element={<Login />} />  
            <Route path="/signup" element={<Signup />} />         
        </Routes>
      </BrowserRouter>
      <br /><br /><br />
    <Footer />

    </div>
  );
}

export default App;
