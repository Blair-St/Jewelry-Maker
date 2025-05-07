import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes later as you develop more pages */}
            <Route path="/materials" element={<div className="container py-4"><h2>Materials Page</h2><p>This page is under development.</p></div>} />
            <Route path="/designs" element={<div className="container py-4"><h2>Designs Page</h2><p>This page is under development.</p></div>} />
            <Route path="/inventory" element={<div className="container py-4"><h2>Inventory Page</h2><p>This page is under development.</p></div>} />
            <Route path="/orders" element={<div className="container py-4"><h2>Orders Page</h2><p>This page is under development.</p></div>} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Jewelry Management System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;