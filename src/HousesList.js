import React, { Component } from 'react';
import House from './House.js';
import axios from 'axios';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class HousesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            houses: [],
            page: 1
        };
    }

    componentDidMount() {
        this._loadHousesFromRemoteAPI(1);
    }

    _loadHousesFromRemoteAPI(p) {
        axios.get(`https://www.anapioficeandfire.com/api/houses?page=` + p)
            .then(res => {
                const newHouses = res.data;
                this.setState({ houses: newHouses, page: p });
            });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.houses.map((house, index) =>
                        <House houseName={house.name} houseDataUrl={house.url} members={house.swornMembers} key={index} />
                    )}
                </div>
                <div>
                    {this.state.page > 1 ?
                        <Glyphicon className="navArrow" onClick={this._previousPage.bind(this)} glyph="glyphicon glyphicon-arrow-left" /> : <span />
                    }                    
                    <span className="pageNumber">Page {this.state.page} </span>
                    <Glyphicon className="navArrow" onClick={this._nextPage.bind(this)} glyph="glyphicon glyphicon-arrow-right" />
                </div>
            </div>
        );
    }

    _nextPage() {        
        this._loadHousesFromRemoteAPI(this.state.page + 1);
    }

    _previousPage() {
        this._loadHousesFromRemoteAPI(this.state.page - 1);
    }

}

export default HousesList;
