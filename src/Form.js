import React from 'react'
import { connect } from 'react-redux'
import { addSong } from './actions/actions'

let Form = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addSong(input.value))
        input.value = ''
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