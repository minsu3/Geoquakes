import React, { Component } from 'react'

class Quake extends Component {


  render(){
    let quakeStyle = {
      fontSize: parseFloat(this.props.mag) * 10 - 33,
 
    }
    return (
      <li>
        <span style={quakeStyle}>
         {this.props.title}
        </span>
      </li>
    )
    
  }
}

export default Quake