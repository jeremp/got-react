import React, { Component } from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class House extends Component {
  
  constructor(){
    super();    
    this.state = {
      dataLoaded: false
    };
  }
  
  render() {

    return (
      <div className="house">
        <Glyphicon glyph="glyphicon glyphicon-home" /> {this.props.houseName}
      </div>
    );
  }

  _loadCharacters() {    
  }

  
}

export default House;
