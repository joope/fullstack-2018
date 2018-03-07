import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer';

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    const { store } = this.props 
    e.preventDefault()
    const content = e.target.anecdote.value
    store.dispatch(createAnecdote(content))
    store.dispatch(showNotification(`you added '${content}'`))
    window.setTimeout(() => {
      store.dispatch(hideNotification())
    }, 5000)
    e.target.anecdote.value = ''
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

export default AnecdoteForm
