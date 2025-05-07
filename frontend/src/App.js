import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import * as HomeModule from './pages/Home/Home';

import './App.css';
const Home = HomeModule.default || HomeModule;


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

        </footer>
      </div>
    </Router>
  );
}

export default App;