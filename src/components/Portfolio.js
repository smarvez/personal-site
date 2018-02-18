import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Portfolio extends Component {
  constructor () {
    super ();
    this.state = {

    }
  }

    render () {
      return (
        <div className="gallery">
          <Link to={`/epro`} className="projectLink">
            <div className="project-one">
              <img src={require("../images/epro.jpeg")} className="mainImage"/>
              <div className="project-title">E/PRO Fitness App</div>
            </div>
          </Link>
          <Link to={`/cloudvu`} className="projectLink">
            <div className="project-two">
              <img src={require("../images/cloudvu.jpeg")} className="mainImage"/>
              <div className="project-title">
              CloudVu Pinpoint Weather Forecast</div>
            </div>
          </Link>
          <Link to={`/flutracker`} className="projectLink">
            <div className="project-three">
              <img src={require("../images/flutracker.jpeg")} className="mainImage"/>
              <div className="project-title">FluTracker</div>
            </div>
          </Link>
          <Link to={`/messages`} className="projectLink">
          <div className="project-four">
            <img src={require("../images/messages.jpeg")} className="mainImage"/>
            <div className="project-title">Galvanize Messages</div>
          </div>
        </Link>
        </div>
    )
  }
}

export default Portfolio;
