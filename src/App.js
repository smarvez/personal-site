import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import Epro from './components/Epro.js';
import Cloudvu from './components/Cloudvu.js';
import FluTracker from './components/Flutracker.js';
import Messages from './components/Messages.js';
import Footer from './components/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Container">
          <Route exact path="/" render={()=>(
              <div className="main-layout">
                <Navbar className="Navbar">
                </Navbar>
                <Portfolio className="gallery">
                </Portfolio>
                <Footer className="footer">
                </Footer>
              </div>
            )} />
            <Route path="/contact" render={()=>(
              <div className="about-container">
                <Navbar className="Navbar">
                </Navbar>
                <About>

                </About>
                <Footer className="footer">
                </Footer>
              </div>
            )} />
            <Route path="/epro" render={()=>(
              <div className="project-container">
                <Navbar className="Navbar">
                </Navbar>
                <Epro>

                </Epro>
                <Footer className="footer">
                </Footer>
              </div>
            )} />
            <Route path="/cloudvu" render={()=>(
              <div className="project-container">
                <Navbar className="Navbar">
                </Navbar>
                <Cloudvu>

                </Cloudvu>
                <Footer className="footer">
                </Footer>
              </div>
            )} />
            <Route path="/flutracker" render={()=>(
              <div className="project-container">
                <Navbar className="Navbar">
                </Navbar>
                <FluTracker>

                </FluTracker>
                <Footer className="footer">
                </Footer>
              </div>
            )} />
            <Route path="/messages" render={()=>(
              <div className="project-container">
                <Navbar className="Navbar">
                </Navbar>
                <Messages>

                </Messages>
                <Footer className="footer">
                </Footer>
              </div>
            )} />
        </div>
      </Router>
    );
  }
}

export default App;
