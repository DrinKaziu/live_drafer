import players from '../seedPlayers';

const initialState = {
  players: players,
  leagues: [],
  teams: [],
  picks: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_PLAYERS':
      return {...state, players: action.players}
    default: 
      return state
  }
}