import React, {Component} from 'react';

class Messages extends Component {
  constructor () {
    super ();
    this.state = {

    }
  }

    render () {
      return (
        <div id="about-epro">
          <div className="epro-image">
            <img src={require("../images/messages.jpeg")}/>
          </div>
          <div className="epro-blurb">
            <p id="epro" className="bio">
              Galvanize Messages
            </p>
            <p className="project-blurb">Galvanize Messages allows a user to view, add, and delete messages from an API.</p>
            <p className="project-blurb">This project was designed to test our ability to create a full stack web application, including building API, connecting it to a React frontend, and finally styling with Bootstrap.</p>
            <div className="contact-container">
              <p className="project-blurb">Created with React, Bootstrap, Javascript, Node.js, Express.js, Knex.js PostgreSQL</p>
              <p className="project-blurb">
                <a href={'https://sm-react-messages.herokuapp.com/'} className="linkOut"> Visit the live site.</a>
              </p>

            </div>

          </div>
        </div>
    )
  }
}

export default Messages;
