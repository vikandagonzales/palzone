// REACT
import React, {
  Component
} from 'react';
import {
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker
} from 'google-maps-react';
// ==========

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLocations } from '../../../../../../state/actions/main';

const mapStyles = {
  width: '100%',
  height: '100vh',
  overflow: 'visible'
};


export class GoogleMap extends Component {
  componentDidMount () {
    this.props.getLocations();
  };

  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
      console.log(this.props.locations)
    return (
      <Map
      google = {this.props.google}
      zoom = {14}
      style = {mapStyles}
      initialCenter = {{lat: 34.052235, lng: -118.243683}}>
      <Marker onClick = {this.onMarkerClick}
        name = {'Kenyatta International Convention Centre'}/>
        <InfoWindow
        marker = {
          this.state.activeMarker
        }
        visible = {
          this.state.showingInfoWindow
        }
        onClose = {
          this.onClose
        }>
        <div>
        <h4> {this.state.selectedPlace.name} </h4>
        </div>
        </InfoWindow>
        </Map>
      );
    }
  }
  const mapStateToProps = state => ({
    locations: state.main.locations
  });


  const mapDispatchToProps = dispatch => bindActionCreators({
    getLocations
  }, dispatch);


  const connectAppToRedux = connect(mapStateToProps, mapDispatchToProps)(GoogleMap);

  export default GoogleApiWrapper({
    apiKey: "AIzaSyBLOzpDqAPSq80lWCyocBjN7SX4yL2mf1I",
  })(connectAppToRedux);
