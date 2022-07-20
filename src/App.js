import './App.css';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Connect from './components/Connect';

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home />
      <AboutUs/>
      <Connect /> */}

      <Routes>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/connect" element={<Connect />}/>
          <Route path="/" element={<Home />}/>
      </Routes>
      
    </div>
  );
}

export default App;
