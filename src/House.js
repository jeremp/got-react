import React, { Component } from 'react';

class House extends Component {
  
  constructor(){
    super();    
    this.state = {
      dataLoaded: false,
      members:[]
    };
  }
  
  render() {    
    return (
      <div className="house">{this.props.houseName}</div>
    );
  }

  _loadData(){
    
  }
}

export default House;
