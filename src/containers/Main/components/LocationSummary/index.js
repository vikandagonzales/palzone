// REACT
import React from 'react';

// ==========

class LocationSummary extends React.Component {
  render () {
    return (
      <div className="location-summary">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <figure className="image">
              <img src="https://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/WXYZ/Westlake4.jpg" alt="Westlake Park" />
            </figure>
          </div>
          <div className="column location-info">
            <div>
              <p className="title is-4 has-text-primary">
                Westlake Park
                <i className="fab fa-cc-discover discover-icon is-pulled-right"></i>
              </p>
              <div>
                <span className="subtitle is-6">Attraction</span>
                <div className="is-pulled-right">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>          
            </div>        
          </div>
        </div>
      </div>
    );
  };
};

export default LocationSummary;