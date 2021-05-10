import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <h1>
            <strong>I am Alex Kennedy</strong>
            <br />
            Software Engineer at Google
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
