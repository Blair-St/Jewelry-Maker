import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Jewelry Management System</h1>
          <p>Organize your materials, designs, inventory, and orders in one place.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Materials Management</h3>
              <p>Keep track of all your craft materials, gemstones, metals, and findings.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Design Catalog</h3>
              <p>Document your jewelry designs with images, materials, and production notes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Inventory Tracking</h3>
              <p>Manage your finished pieces and know exactly what you have available.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Order Management</h3>
              <p>Process customer orders from start to finish in one system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Jewelry Management</h2>
          <p>
            Built specifically for jewelry makers, this system helps you organize your creative
            process from raw materials to finished pieces. Track your inventory, manage custom
            orders, and keep your jewelry business running smoothly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;