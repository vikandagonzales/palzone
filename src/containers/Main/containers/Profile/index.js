// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// ==========

class Profile extends React.Component {
  logout = event => {
    this.props.logout(this.props.history);
  };

  render () {
    return (
      <div id="profile">
        <section className="hero is-fullheight is-bold is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <figure className="image has-padding-bottom">
                    <img src="https://cdn.shopify.com/s/files/1/1362/5949/articles/1-furbo-feature_1000x.jpg?v=1540217003" alt="Lisa Baker" />
                  </figure>
                  <div className="has-text-centered has-padding-bottom">
                    <p className="title">Lisa Baker</p>
                    <p className="subtitle">lisa.baker@gmail.com</p>
                  </div>                
                  <form onSubmit={this.logout}>
                    <button className="button is-large is-fullwidth">Log Out</button>
                  </form>
                </div>
              </div>
            </div>   
          </div>      
        </section>     
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  // logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);