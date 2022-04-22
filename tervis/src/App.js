import './App.css';
import { Home } from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from './Components/Products';
import { Cart } from './Components/Cart';


function App() {
  return (
    <div className="App">      

      <BrowserRouter>
      <Routes>   
          <Route path="/" element={<Home />} />  
          <Route path="/srng" element={<h1>Hey Srng</h1>} />   
          <Route path="/products" element={<Products />} />   
          <Route path="/cart" element={<Cart />} />         
      </Routes>
    </BrowserRouter>
     

      
      

    </div>
  );
}

export default App;
