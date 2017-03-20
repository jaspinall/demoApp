import fetch from 'isomorphic-fetch';

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
    data: json.tracks.items.map(el => {
      return {
        id: el.id,
        name: el.name,
        artistId: el.artists[0].id,
        artistName: el.artists[0].name,
        url: el.external_urls.spotify
      }
    })
  }
}

export const fetchData = (song) => {
  return (dispatch) => {
    dispatch(requestData(song));

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${song}`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
      .catch((error) => {
        console.log(error)
      })
  }
}
