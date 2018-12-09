// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// COMPONENTS
// import Offer from './components/Offer';
import Review from './components/Review';

// ==========

class LocationPage extends React.Component {
  render () {
    return (
      <div className="location-page">
        <section className="hero is-fullheight is-bold is-light">
           <div className="container">
            <div className="columns">
              <div className="column is-4 is-offset-4">
                 <figure className="image">
                  <img src="https://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/WXYZ/Westlake4.jpg" alt="Westlake Park" />
                </figure>
                <div className="location-info">
                  <p className="title is-3 has-text-primary">
                    Westlake Park
                    <i className="fab fa-cc-discover discover-icon is-pulled-right"></i>
                  </p>
                  <div className="has-padding-bottom">
                    <span className="tag is-dark">Attraction</span>
                    <div className="is-pulled-right">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  {/* <div className="has-padding-top has-padding-bottom">
                    <p className="location-header"><span className="lnr lnr-tag"></span>Offers</p>
                    <Offer />
                  </div> */}
                  <div className="has-padding-top has-padding-bottom">
                    <p className="location-header has-margin-bottom"><span className="lnr lnr-cash-dollar"></span>Tipping Etiquette</p>
                    <p>
                      Adasd asda sd a sd asd a d asd a sd asdad adsad fgvfvbxc aasfqweq zxvzxcz asdasd qweqweq asdad.
                    </p>
                    <p className="help is-primary has-text-right">View translation</p>
                  </div>
                  <div className="has-padding-top">
                    <p className="location-header"><span className="lnr lnr-quote-open"></span>Reviews</p>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);