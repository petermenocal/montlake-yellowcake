import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved.{' '}
          <a href="https://montlakebioscience.com/">Montlake Bioscience</a>.
        </span>
      </div>
    </footer>
  </div>
)
