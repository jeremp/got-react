import React, { Component } from 'react';
import HousesList from './HousesList.js'

class MainComponent extends Component {
  
  constructor(){
    super();    
    this.state = {      
    };
  }
  
  render() {    
    return (
      <HousesList />
    );
  }

  _loadData(){
    
  }
}

export default MainComponent;
