import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home-page/home-page'
import 'bootstrap/dist/css/bootstrap.css';
import Experience from './pages/experience-page/experience-page';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Skills from './pages/skills-page/skills-page';
import Projects from './pages/projects-page/projects-page';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

