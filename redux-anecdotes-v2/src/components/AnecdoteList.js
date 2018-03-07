import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  handleVote = (anecdote) => () => {
    const { store } = this.props
    store.dispatch(voteAnecdote(anecdote))
    store.dispatch(showNotification(`you voted '${anecdote.content}`))
    window.setTimeout(() => {
      store.dispatch(hideNotification())
    }, 5000)
  }

  handleInput = (event) => {
    this.setState({filter: event.target.value})
  }

  render() {
    const { filter } = this.state
    const { anecdotes } = this.props.store.getState()
    const filtered = anecdotes.filter((a) => a.content.toLowerCase().includes(filter))
    return (
      <div>
        <h2>Anecdotes</h2>
        <input 
          type='text'
          placeholder='filter' 
          onChange={this.handleInput}
          value={this.state.filter}
        />
        {filtered.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handleVote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
