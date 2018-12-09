// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postTranslation } from '../../../../state/actions/main';

// COMPONENTS
// import Offer from './components/Offer';
import TippingEtiquette from './components/TippingEtiquette';
import Review from './components/Review';
import Translation from './components/Translation';

// ==========

class LocationPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = event => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  translate = event => {
    event.preventDefault();
    // this.props.postTranslation(text, language);
  }

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
                    <TippingEtiquette toggle={this.toggle} translate={this.translate} />
                  </div>
                  <div className="has-padding-top">
                    <p className="location-header"><span className="lnr lnr-quote-open"></span>Reviews</p>
                    <Review toggle={this.toggle} translate={this.translate} />
                    <Review toggle={this.toggle} translate={this.translate} />
                    <Review toggle={this.toggle} translate={this.translate} />
                    <Review toggle={this.toggle} translate={this.translate} />
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </section>   
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-card">
            <Translation />
          </div>
          <button className="modal-close is-large" onClick={this.toggle}></button>
        </div>  
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