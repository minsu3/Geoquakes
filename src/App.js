import React, { Component } from 'react';
import Maps from './Maps'
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
        console.log(data)
        this.setState({ earthquakes: data.features })
      })
      // catch error by console.log
      .catch(err=> console.log(err))
  }

  render() {
    console.log(this.state.title)
    return (
      <div className="app">
        <div className="maps">
          <Maps detail = {this.state.earthquakes} />
        </div>
        <div className="quakes">
          <h1>Earthquakes from the past week: </h1>
          <Quakes data={this.state.earthquakes}/>
        </div>
      </div>
    );
  }
}

export default App;
