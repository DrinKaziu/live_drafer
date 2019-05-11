import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar.js';

function App(props) {
  return (
    <div>
      <Navbar />
      {props.players.map(player => <p>{player.fname} {player.lname} - {player.position}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(App);
