import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Dashboard from './components/Dashboard/Dashboard';
import Guestbook from './components/Guestbook/Guestbook';
import Uses from './components/Uses/Uses';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/uses" element={<Uses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;