import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Jewelry Management System</h1>
        <p className="lead">
          A comprehensive platform to manage your jewelry materials, designs, and inventory.
        </p>
        <hr className="my-4" />
        <p>
          Get started by exploring your materials inventory or creating new designs.
        </p>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Materials</h5>
              <p className="card-text">Manage your materials inventory, including gems, metals, and other supplies.</p>
              <a href="/materials" className="btn btn-primary">View Materials</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Designs</h5>
              <p className="card-text">Browse, create, and modify your jewelry designs.</p>
              <a href="/designs" className="btn btn-primary">View Designs</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Inventory</h5>
              <p className="card-text">Track your finished pieces and manage your jewelry inventory.</p>
              <a href="/inventory" className="btn btn-primary">View Inventory</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;