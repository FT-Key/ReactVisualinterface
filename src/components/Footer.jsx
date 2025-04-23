import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container text-center py-3">
          <p className="text-muted">© 2023 My Website. All rights reserved.</p>
          <p className="text-muted">Follow us on social media:
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer