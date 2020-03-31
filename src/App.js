import React, { Component } from 'react';
import MapContainer from './MapContainer'

import Quakes from './Quakes';

class App extends Component {

  state = {
    earthquakes: []
  }

  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      .then(response=> response.json())
      .then(data=> {
        console.log(data)
        this.setState({ earthquakes: data.features })
      })
      .catch(err=> console.log(err))
  }

  render() {
    console.log(this.state.title)
    return (
      <div className="app">

        <div className="maps">
          <MapContainer detail = {this.state.earthquakes} />
        </div>

        <div className="quakes">
          <h1>Earthquakes from the past week</h1>
          <Quakes className="map" data={this.state.earthquakes}/>
        </div>

      </div>
    );
  }
}

export default App;
