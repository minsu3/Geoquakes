import React, { Component } from 'react'

class Quake extends Component {


  render(){

    return (
      <li>
         {this.props.title}
      </li>
    )
    
  }
}

export default Quake