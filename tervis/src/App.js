import './App.css';
import { Home } from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from './Components/Products';


function App() {
  return (
    <div className="App">      

      <BrowserRouter>
      <Routes>   
          <Route path="/" element={<Home />} />  
          <Route path="/srng" element={<h1>Hey Srng</h1>} />   
          <Route path="/products" element={<Products />} />         
      </Routes>
    </BrowserRouter>
     

      
      

    </div>
  );
}

export default App;
