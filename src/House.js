import React, { Component } from 'react';
import Character from './Character.js'
import axios from 'axios';

class House extends Component {
  
  constructor(){
    super();    
    this.state = {
      dataLoaded: false,
      members:[]
    };
  }
  
  render() {

    let members = this.props.members ;   

    let showCharacters = <div>No Characters</div>;
    console.log("dataLoaded="+this.state.dataLoaded)
    if (this.state.dataLoaded === false && members && members.length > 0) {
      showCharacters = <button onClick={this._loadCharacters.bind(this)}>Show the {members.length} characters</button>
    }else if(this.state.dataLoaded){
      showCharacters = <div></div> ;
      if(members && members.length > 0){
        const memberList = members.map((member, index) =>
          <li key={index}>{member}</li>
        );
      }
    }

    return (
      <div className="house">
        <p>{this.props.houseName}</p>
        <div>{showCharacters}</div>           
      </div>
    );
  }

  _loadCharacters() {
    let members = this.props.members ;   
    if (members && members.length > 0) {
      let membersLoaded = 0 ;
      let allMembers = [] ;
      for(const memberUrl of members){
        axios.get(memberUrl)
        .then(res => {
            const memberName = res.name;            
            membersLoaded++ ;
            allMembers.push(memberName);
            if(membersLoaded === members.length ){              
              this.setState({ members: allMembers, dataLoaded:true});
            }
        });
      }      
    }
  }

  
}

export default House;
