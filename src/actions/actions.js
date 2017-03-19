export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

export const addSong = (song) => {
  return {
    type: ADD_SONG,
    song
  }
}

export const removeSong = (song) => {
  return {
    type: REMOVE_SONG,
    song
  }
}

export const requestData = (song) => {
  return {
    type: REQUEST_DATA,
    song
  }
}

export const receiveData = (json) => {
  return {
    type: RECEIVE_DATA,
    results: json.data.children.map(child => child.data)
  }
}
