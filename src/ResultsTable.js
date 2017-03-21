import React, { Component } from 'react';
import { connect } from 'react-redux';

let ResultsTable = ( props ) => {
  console.log(props)
  return (
    <div>
      'hello imma table'
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    songs: state.fetchSongs.songs
  }
}

ResultsTable = connect(mapStateToProps)(ResultsTable);

export default ResultsTable;
