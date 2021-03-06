// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// COMPONENTS
import GoogleMap from './components/GoogleMap';
import Search from '../../components/Search';
import Filter from '../../components/Filter';
// import LocationSummary from '../../components/LocationSummary';

// ==========

class Map extends React.Component {
  render () {
    return (
      <div id="map-container">
        <section className="hero is-fullheight is-bold is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <GoogleMap />
                  <Search />
                  <Filter />                 
                  {/* <Link to="/main/location-page" className="pointer"><LocationSummary /></Link> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Map);