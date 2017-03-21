import { combineReducers } from 'redux';
import {
  REQUEST_DATA, RECEIVE_DATA, ADD_SONG, REMOVE_SONG
} from '../actions/actions';

const songs = (state = [], action) => {
  switch (action.type) {
    case ADD_SONG:
      return Object.assign(
        {},
        state,
        { songs: [ ...songs, action.song ]}
      );
    case REMOVE_SONG:
      let idx = 0;
      songs.forEach((song, i) => {
        if (song.id === action.song.id) {
          idx = i;
        }
      })
      return Object.assign(
        {},
        state,
        [...songs.slice(0,idx), ...songs.slice(idx+1)]
      )
    default:
      return state;
  }
}

const fetchSongs = ( state = {
    isFetching: false,
    songs: []
  }, action ) => {
  switch(action.type) {
    case REQUEST_DATA:
      return Object.assign(
        {},
        state,
        { isFetching: true }
      )
    case RECEIVE_DATA:
      return Object.assign(
        {},
        state,
        { isFetching: false,
          songs: action.songs
        }
      )
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  songs,
  fetchSongs
})

export default rootReducer;
