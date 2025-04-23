import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">About Us</h1>
        <p className="mt-4">We are a team of passionate individuals dedicated to providing the best service possible. Our mission is to deliver high-quality products and exceptional customer service.</p>
        <p>Our team consists of experienced professionals who are experts in their respective fields. We believe in continuous improvement and strive to stay ahead of the curve in our industry.</p>
        <p>Thank you for choosing us!</p>
      </div>
      <div className="container text-center py-5">
        <h2>Our Values</h2>
        <ul className="list-unstyled">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
          <li>Teamwork</li>
          <li>Excellence</li>
        </ul>
      </div>
      <div className="container text-center py-5">
        <h2>Our Team</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="col-md-4">
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="col-md-4">
            <h3>Emily Johnson</h3>
            <p>CFO</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs