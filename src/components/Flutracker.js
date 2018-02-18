import React, {Component} from 'react';

class Flutracker extends Component {
  constructor () {
    super ();
    this.state = {}
  }

    render () {
      return (
        <div id="about-epro">
          <div className="epro-image">
            <img src={require("../images/flutracker.jpeg")}/>
          </div>
          <div className="epro-blurb">
            <p id="epro" className="bio">
              FluTracker
            </p>
            <p className="project-blurb">FluTracker monitors the worldwide spread of the flu using realtime Twitter data plotted on a map.</p>
            <p className="project-blurb">By following flu-related tweets on Twitter, FluTracker allows users to visualize the poliferation of the flu by day, up to the past week. Additionally, users can either search the map via scrolling or by geolocation to view how many people are sick within a given area.</p>
            <div className="contact-container">
              <p className="project-blurb">Created with HTML/CSS Grid, JavaScript, jQuery, jQuery UI, FluTrack and Google Maps APIs</p>
              <p className="project-blurb">
                <a href={'http://flu_tracker.surge.sh/'} className="linkOut">Visit the live site. </a>
              </p>
            </div>

          </div>
        </div>
    )
  }
}

export default Flutracker;
