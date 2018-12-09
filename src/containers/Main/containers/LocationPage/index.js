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
          const reviews = [
              {
                  title: "Good quality food for the price",
                  review:
                      "Good quality food for the price. I definitely recommend their happy hour which was a good balance of veggie and proteins unlike most happy hour places that'd stuff you with fries and maybe a salad. My wife ordered a very well balanced Manhattan that was around $8. Good music and great ambiance for a date night with or without children.",
                  stars: 5,
                  author: "Mark P."
              },
              {
                  title: "good brunch place",
                  review:
                      "Yay a good brunch place! As an English pescatarian, I've been struggling to get on board with American breakfasts (biscuits and gravy...ick) and I've found it hard to get a good salmon or crab benedict in Seattle. Where are all the Eggs Royale? You have so much salmon here. Anyway I digress This is a a really cute space...lots of wood and windows. So obviously I ordered the crab benedict (19 bucks). I'm a little fussy about how my eggs are poached (don't like runny yolks...yes i know i'm weird) but my server wanted to know exactly how I liked them (ie not completely hard but still a little gelatinous) and he really delivered. I was impressed by that. The benedict was also great. Lots of crab. Hollandaise could have been a little more lemony. Breakfast potatoes delicious. Service was very attentive and apparently the server took the time to explain their menu to my mother in law when she first arrived. Only feedback...they could have a few more hot sauce options for brunch. But overall...thumbs up!",
                  stars: 4,
                  author: "Lauren S."
              },
              {
                  title: "I am a fan",
                  review:
                      "Four stars because I am a fan. Yay. I have my complaints, for sure, but this place is interesting, and different enough to pique the curiosity of those seeking a menu that wanders well outside the coloring lines, but keeps a foundational base of familiarity. Happy Hour: Don't rush here for this. Their house beer is $4, and another is a dollar off. A dollar. The sangria is $5, and is pretty darn good. Other than that, and a few other beverages, the happy hour is very limited, with no food offerings outside the normal menu. They are also a beer and wine only place, so no happy hour cocktails.  I say don't rush, because you really won't save enough to merit the stress. Just go anytime you feel like it.",
                  stars: 4,
                  author: "River S."
              },
              {
                  title: "Tooo Loud",
                  review:
                      "The bf chose this place from Yelp when we were in LA one night, so we made a reservation and headed there. We were seated right when we walked in, in the back outdoor area. There was a large party near us, maybe 15-20 people, who were fairly loud and obnoxious. It was a little bothersome at first, but they left not too long after we were seated, so it wasn't that bad.",
                  stars: 3,
                  author: "Sammy S."
              },
              ,
              {
                  title: "Nothing really stood out ",
                  review:
                      "Maybe I just didn't get the right things, but I thought this place was okay. Nothing really stood out other than how friendly the service was. We got a variety of the dumplings and tbh they all kinda tasted the same. Seems like this place is more of an americanized dim sum place. Seems like everyone else enjoys this place! They have complimentary valet available and street (metered) parking as well..",
                  stars: 3,
                  author: "Paul R. "
              }
          ];

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
                      {
                      reviews.map(el => {
                      const {title, review, stars, author} = el;
                      return <Review toggle={this.toggle} translate={this.translate} title={title} review={review} stars={stars} author={author}/>
                  })}
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