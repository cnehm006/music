import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SongPage from './components/SongPage';
import Navigation from './components/Navigation';
import About from './components/About';
import Blog from './components/Blog';
import Ask from './components/Ask';
import RandomButton from './components/RandomButton';

function App() {
  return (
    <Router>
      <Navigation />
      <RandomButton songCount={5} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<SongPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ask" element={<Ask />} />
      </Routes>
    </Router>
  );
}

export default App;
