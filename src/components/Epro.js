import React, {Component} from 'react';

class Epro extends Component {
  constructor () {
    super ();
    this.state = {

    }
  }

    render () {
      return (
        <div id="about-epro">
          <div className="epro-image">
            <img src={require("../images/epro.jpeg")}/>
          </div>
          <div className="epro-blurb">
            <p id="epro" className="bio">
              E/PRO
            </p>
            <p className="project-blurb">E/Pro tailors fitness and nutrition recommendations to a woman's individual monthly hormonal cycle.</p>
            <p className="project-blurb">The motivation behind this project came from a need within the fitness community to optimize workout and nutritional routines in accordance to estrogen and progesterone levels. By automating hormonal, exercise, and dietary tracking, this app not only helps women achieve peak physical performance but also saves time to pursue other professional or recreational endeavors. Additionally, the app is both mobile and desktop friendly so that users may access their schedule while stationary or in-transit. Finally, metadata representing the user base may aid pharmaceutical, marketing, and distributive operations for female centered fitness organizations.</p>
            <div className="contact-container">
              <p className="project-blurb">Created with React, D3, Javascript, Material UI, Python, PostgreSQL</p>
              <p className="project-blurb">
                <a href={'https://e-pro-fitness.herokuapp.com/login'} className="linkOut">Visit the live site.</a>
              </p>
            </div>

          </div>
        </div>
    )
  }
}

export default Epro;
