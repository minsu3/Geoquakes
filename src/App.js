import React, { Component } from 'react';
import MapContainer from './MapContainer'
import { CLIENT_URL } from './constants.js';
import Quakes from './Quakes';

class App extends Component {
  state = {
    earthquakes: []
  }

  componentDidMount() {
    fetch(CLIENT_URL)
      //parse into json
      .then(response=> response.json())
      //Use arrow function with .setState method to pass in an array of objcets to this.state.title
      // before we passed in an array of name as STRING
      .then(data=> {
        // let element = document.createElement('p');
        // let text = document.createTextNode(data.features.properties.title);
        // element.appendChild(text);
        // document.getElementById("info").appendChild(element); 
        console.log(data)
        this.setState({ earthquakes: data.features })
      })
      .catch(err=> console.log(err))
  }


  render() {
    console.log(this.state.title)
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer detail = {this.state.earthquakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes data={this.state.earthquakes}/>
        </div>
      </div>
    );
  }
}

export default App;
