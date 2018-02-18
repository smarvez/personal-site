import React, {Component} from 'react';

class Cloudvu extends Component {
  constructor () {
    super ();
    this.state = {

    }
  }

    render () {
      return (
        <div id="about-epro">
          <div className="epro-image">
            <img src={require("../images/cloudvu.jpeg")}/>
          </div>
          <div className="epro-blurb">
            <p id="epro" className="bio">
              CloudVu
            </p>
            <p className="project-blurb">CloudVu is a pinpoint forecast application intended to provide more precise data for climbers, hikers, skiers, or anyone heading into the mountains.</p>
            <p className="project-blurb">Users can choose locations through geocoding, geolocation, or simply scrolling and clicking/tapping on the map itself. Favorite locations can be saved by longitude and latitude information along with a custom name set by the user. The map can be used to access weather data without logging in, but once logged in, a user can recall saved locations and view the forecast without navigating on the map. A comprehensive 48-hour forecast is visualized with a D3 stream graph so that the user can get a clear picture of upcoming upcoming weather trends.</p>
            <div className="contact-container">
              <p className="project-blurb">Created with Mapbox, D3, JavaScript, Node.js, Express.js, PostgreSQL, Knex.js, and the Dark Sky API</p>
              <p className="project-blurb">
                <a href={'http://cloudvu.herokuapp.com/'} className="linkOut">Visit the live site.</a>
              </p>

            </div>

          </div>
        </div>
    )
  }
}

export default Cloudvu;
