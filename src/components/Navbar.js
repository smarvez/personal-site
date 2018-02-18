import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Navbar extends Component {
  constructor () {
    super ();
    this.state = {

    }
  }
    render () {
      return (
        <div className="Navbar">
          <div className="name">
            <div>Stephanie Marvez</div>
            <div id="subtitle">Full Stack Web Developer</div>
          </div>
          <div className="links">
            <ul>
              <Link to={`/`}>
                <li>Portfolio</li>
              </Link>
              <Link to={`/contact`}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
    )
  }
}

export default Navbar;
