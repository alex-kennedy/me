import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <h1>
            <strong>I am Alex Kennedy</strong> <br />
            Engineering and Physics student at the University of Auckland, New
            Zealand.{' '}
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
