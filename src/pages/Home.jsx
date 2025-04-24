import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <>
      <div className="container text-center py-5">
        <h1>Welcome to My Website</h1>
        <i className="bi bi-heart-fill text-danger"></i>
        <p className="lead">This is the home page of my website.</p>
        <p>Explore our features and services.</p>
        <Link to="/aboutus" className="btn btn-primary">Learn More</Link>
      </div>
      <div className="container text-center py-5">
        <h2>Featured Services</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Servicio 1</h3>
            <p>Generacion de app para extraccion de petróleo.</p>
            <Link to="/oilextractor" className='btn btn-primary'>Oil Extractor</Link>
          </div>
          <div className="col-md-4">
            <h3>Service 2</h3>
            <p>Description of Service 2.</p>
          </div>
          <div className="col-md-4">
            <h3>Service 3</h3>
            <p>Description of Service 3.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home