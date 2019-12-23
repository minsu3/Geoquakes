import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '50%',
  height: '50%',
};

class MapContainer extends Component {

	constructor(props) {
    super(props);
    this.state = {
      stores: [{lat: 30.2682, lng: -97.74295},
               {lat: 37.78, lng: -122.44}]
    }
  }

	displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  
	render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
      	<Marker position={{ lat: 48.00, lng: -122.00 }} />
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'TOKEN HERE'
})(MapContainer);




