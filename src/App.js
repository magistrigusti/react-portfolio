import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectPage from './pages/ProjectPage';
import Skills from './pages/Skills';
import './styles/main.css';
import ScrollToTop from './utils/scrollToTop';




function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project_page" element={<ProjectPage />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
