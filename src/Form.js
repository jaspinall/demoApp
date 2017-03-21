import React from 'react'
import { connect } from 'react-redux'
import { addSong, fetchData } from './actions/actions'

let Form = ( props ) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.dispatch(fetchData(input.value))
        input.value = '';
        props.history.push('/results');
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Song
        </button>
      </form>
    </div>
  )
}

Form = connect()(Form)

export default Form
