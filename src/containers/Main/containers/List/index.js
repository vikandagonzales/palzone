// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLocations } from '../../../../state/actions/main';

// COMPONENTS
import Search from '../../components/Search';
import Filter from '../../components/Filter';
import LocationSummary from '../../components/LocationSummary';

// ==========

class List extends React.Component {
  componentDidMount () {
    this.props.getLocations();
  };

  render () {
    console.log(this.props.locations)
    return (
      <div id="list">
        <section className="hero is-fullheight is-bold is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <Search />
                  <Filter />
                  <ul>
                    {
                      this.props.locations.map((location, i) => {
                        return (
                          <li key={i}>
                            <Link to="/main/location-page" className="pointer"><LocationSummary location={location}/></Link>
                          </li>
                        );
                      })
                    }
                  </ul>
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
  locations: state.main.locations
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLocations
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);