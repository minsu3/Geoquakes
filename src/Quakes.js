import React, { Component } from "react";

let Quakes = props => {
    return (
        <div>
            <ul>
                {props.data.map((item, i) => {
                    console.log(this.props)
                    return <li key={i}> {item.properties.title}</li>;
                })}
            </ul>
        </div>
        
    );
};

export default Quakes;