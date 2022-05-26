import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom"
import Login from './components/login';
import Register from './components/register';
import Navbar from './components/Navbar';
import Display from './components/display';


function App() {
  return (
    <div className="Container">
      <div className='header'><Navbar /></div>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/display" element={<Display />} />
          {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
