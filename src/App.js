import React, { Component } from 'react';
import players from './seedPlayers';
import Navbar from './components/Navbar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: players
    }
  }

  
  render() {
    return (
      <div>
        <Navbar />
        {this.state.players.map(player => <p>{player.fname} {player.lname} - {player.position}</p>)}
      </div>
    );
  }
}

export default App;
