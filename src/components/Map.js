import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {

    let quakeMarkers = this.props.quakes.map( ( elem, idx ) => 
      (
        <Marker key={idx}
          title={elem.properties.place}
          name={elem.properties.place}
          position={{ 
            lat: elem.geometry.coordinates[1], 
            lng: elem.geometry.coordinates[0] 
          }}
        />
      )
    ) 

    return (
      <div className="mapContainer">
      <Map google={this.props.google}
      initialCenter={{
        lat: 37.78, 
        lng: -122.44
      }}
      style={{width: '50%', height: '80%'}}

      zoom={3}
      onClick={this.onMapClicked}>

      {quakeMarkers}

      </Map>
      </div>
    );
  }
}
const LoadingContainer = (props) => (
  <div >
    <img src={'images/throbber.gif'} alt="Loading..."/>
  </div>
)

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'),
  LoadingContainer: LoadingContainer

})(MapContainer)