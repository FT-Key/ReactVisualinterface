import React from 'react'

const Home = () => {
  return (
    <>
      <div className="container text-center py-5">
        <h1>Welcome to My Website</h1>
        <p className="lead">This is the home page of my website.</p>
        <p>Explore our features and services.</p>
        <a href="/aboutus" className="btn btn-primary">Learn More</a>
      </div>
      <div className="container text-center py-5">
        <h2>Featured Services</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Service 1</h3>
            <p>Description of Service 1.</p>
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