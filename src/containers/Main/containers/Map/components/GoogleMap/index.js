// REACT
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// ==========

const mapStyles = {
  width: '100%',
  height: '100vh'
};

export class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBLOzpDqAPSq80lWCyocBjN7SX4yL2mf1I"
})(GoogleMap);
