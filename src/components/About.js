import React, {Component} from 'react';

class About extends Component {
  constructor () {
    super ();
    this.state = {

    }
  }
    render () {
      return (
        <div id="about-steph">
          <div>
            <p id="hello" className="bio">
              About
            </p>
            <p className="bio">I'm Steph, a software developer based in Boulder, CO. I take complex technical ideas and distill them into products that are both user-friendly and aesthetically pleasing. </p>
            <p className="bio">As a dedicated climber, I believe it was through climbing that I learned the value of problem solving, hard work, and seeing things through to fruition. I'm grateful that I am able to transfer this feeling over to my work of creating full stack applications. </p>
            <p className="bio">I love working with ambitious people on complex projects. If you like what I do, please don't hesitate to get in touch! </p>
            <p className="contact-title">Contact Me</p>
            <div className="contact-container">
              <p className="bio-contact">Stephanie Marvez</p>
              <p className="bio-contact">303.917.3724</p>
              <p className="bio-contact">marvez@gmail.com</p>
            </div>

          </div>
          <div className="bio-image">
            <img src={require("../images/faceshot.jpg")}/>
          </div>
        </div>
    )
  }
}

export default About;
