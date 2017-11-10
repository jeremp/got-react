import React, { Component } from 'react';

import HousesList from './HousesList.js'
import HouseData from './HouseData.js'

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class MainComponent extends Component {
  
  constructor(){
    super();    
    this.state = {      
    };
  }
  
  render() {    
    return (
        <div>
            <Grid>
                <Row className="show-grid">                    
                    <Col xs={6} md={4}>
                        <HousesList />
                    </Col>
                    <Col xs={12} md={8}>
                        <HouseData />
                    </Col>
                </Row>
            </Grid>            
        </div>
    );
  }

  _loadData(){}
}

export default MainComponent;
