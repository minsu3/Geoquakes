import React, { Component } from 'react';
import Map from './components/Map'
import Quakes from './components/Quakes'
import QuakeModel from './models/Quake'

class App extends Component {

  constructor(){
    super()

    this.state = {
      quakes : []
    }
    
  }

  componentDidMount(){ 
    QuakeModel.all().then(res => 
      this.setState({
        quakes: res.data.features
      }) 
    )
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Map quakes={this.state.quakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes quakes={this.state.quakes}/>
        </div>
      </div>
    );
  }
}

export default App;
