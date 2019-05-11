import React from 'react';
import players from './seedPlayers';

function App() {
  return (
    <div>
      {players.map(player => <p>{player.fname} {player.lname}</p>)}
    </div>
  );
}

export default App;
