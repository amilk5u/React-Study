import React from 'react';
import {  BrowserRouter,  Routes,  Route,  Link } from "react-router-dom";
import About from './page1/About';
import Ceo from './page1/Ceo';
import Home from './page1/Home';
import NotFiles from './page1/NotFiles';
import Sub1 from './page1/Sub1';

const App = () => {
  return (
    <BrowserRouter>
     <>
        <nav>
          <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/ceo">Ceo</Link></li>
             <li><Link to="/sub1">Sub1</Link></li>             
          </ul>
        </nav>


        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={ <About /> } />
          <Route path="/ceo" element={ <Ceo /> } />
          <Route path="/sub1" element={ <Sub1 /> } />
          <Route path="*" element={ <NotFiles /> } />
        </Routes>
     </>
    </BrowserRouter>
  );
};

export default App;