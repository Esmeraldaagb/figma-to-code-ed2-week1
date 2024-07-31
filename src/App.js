import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './screen/home';
import About from './screen/about';
import Collection from './screen/collection';
import Contact from './screen/contact';

const App = () => {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route path="/" element={<Home/>} />

      </Routes>
    </Router>
  );
};

export default App;
