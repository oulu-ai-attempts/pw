import React from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css'; // Import the custom CSS file
import Home from './Home';
import Education from './Education';
import Project from './Project';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
