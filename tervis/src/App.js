import './App.css';
import { Home } from './Components/Home';
import { Nav } from './Components/Nav';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Nav />
      <Navbar />
      <Home />

    </div>
  );
}

export default App;
