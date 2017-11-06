import React, { Component } from 'react';

class House extends Component {
  render() {
    return (
      <div className="house">this is house <b>{this.props.houseName}</b></div>
    );
  }
}

export default House;
