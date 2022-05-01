import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from './page6/Main'
import './css/reset.css'
import './page6/style.css'


const App = () => {
   return (
      <BrowserRouter>
         <>
            <Routes>
               <Route path="/" element={<Main />} />
            </Routes>
         </>
      </BrowserRouter>
   );
};

export default App;