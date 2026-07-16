import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import FooterNav from './components/FooterNav';
import Home from './pages/Home';
import About from './components/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

function App() {
  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <FooterNav />
      </div>
    </Router>
  );
}

export default App;