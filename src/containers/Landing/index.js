// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom'

// ==========

class Landing extends React.Component {
  render () {
    return (
      <div id="landing">
        <section className="hero is-fullheight is-bold is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <figure className="image has-padding-bottom">
                    <img src="./assets/logo-white.svg" alt="Palzone" />
                  </figure>
                  <Link to="/login" className="button is-large is-fullwidth has-margin-top">Log In</Link>
                  <Link to="/signup" className="button is-large is-fullwidth has-margin-top">Sign Up</Link>
                </div>
              </div>
            </div>   
          </div>      
        </section>     
      </div>
    );
  };
};

export default Landing;