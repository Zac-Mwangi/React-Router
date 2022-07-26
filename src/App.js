import './App.css';
import AboutUs from './components/AboutUs';
// import NavBar from './components/NavBar';
import Home from './components/Home';
import Connect from './components/Connect';
import Error from './components/Error';

import {Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Home />
      <AboutUs/>
      <Connect />   */}

      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<AboutUs/>}/>
        <Route exact path='/connect' element={<Connect/>}/>
        <Route exact path='*' element={<Error/>}/>
      </Routes>   
    </div>
  );
}

export default App;













































    {/* <Routes>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/connect" element={<Connect />}/>
          <Route path="/" element={<Home />}/>
      </Routes> */}