import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SongPage from './components/SongPage';
import Navigation from './components/Navigation';
import About from './components/About';
import Blog from './components/Blog';
import Ask from './components/Ask';
import SongsLibrary from './components/SongsLibrary';

function App() {
  return (
    <Router basename="/music">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<SongPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/songs" element={<SongsLibrary />} />
      </Routes>
    </Router>
  );
}

export default App;
