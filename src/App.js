import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import Calender from './components/Home/Calender';
import About from './components/Home/About';
import Footer from './components/Home/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
