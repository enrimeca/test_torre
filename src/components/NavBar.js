import React from 'react';

import './styles/NavBar.css';
import logo from '../assets/images/torre.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-bold">torre</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;