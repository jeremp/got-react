import React, { Component } from 'react';
import House from './House.js';
import axios from 'axios';

class HousesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            houses: []
        };
    }

    componentDidMount() {
        this._loadHousesFromRemoteAPI();
    }

    _loadHousesFromRemoteAPI() {
        axios.get(`https://www.anapioficeandfire.com/api/houses`)
            .then(res => {
                const houses = res.data;
                this.setState({ houses });
            });
    }

    render() {
        return (
            <div>
                <h2>Here are {this.state.houses.length} the known Houses</h2>                                
                <div>
                    {this.state.houses.map((house,index) =>
                      <House houseName={house.name} houseDataUrl={house.url} key={index} />
                    )}
                </div>
            </div>
        );
    }


}

export default HousesList;
