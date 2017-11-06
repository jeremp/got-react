import React, { Component } from 'react';
import axios from 'axios';

class HousesList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            houses: []
          };
    }

    componentDidMount(){
        this._loadHousesFromRemoteAPI() ;
    }

    _loadHousesFromRemoteAPI() {
        axios.get(`https://www.anapioficeandfire.com/api/houses`)
        .then(res => {                    
          const houses = res.data ;
          this.setState({houses});          
        });
    }

    render() {
        return (
            <div>
            <h2>this is a LIST of houses</h2>            
            <p>It exists {this.state.houses.length} houses</p>
            </div>
        );
    }


}

export default HousesList;
