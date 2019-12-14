import React, { Component } from 'react';
import MapContainer from './MapContainer'

const SOURCE_URL= 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

class App extends Component {

  state = {
    title: []
  }

  componentDidMount() {
    fetch(SOURCE_URL)
      //parse into json
      .then(response=> response.json())
      //Use arrow function with .setState method to pass in an array of objcets to this.state.title
      // before we passed in an array of name as STRING
      .then(data=> {
        this.setState({ title: data.features })
        console.log(data)
      })
      // catach error by console.log
      .catch(err=> console.log(err))
  }

  render() {
    console.log(this.state.title)
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer detail = {this.state.title} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          ...put Quakes Component here...
        </div>
      </div>
    );
  }
}

export default App;
