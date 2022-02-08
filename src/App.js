import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navigation, Home, Developer, Designer, Artist } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/developer" element={<Developer />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/about" element={<Home />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
