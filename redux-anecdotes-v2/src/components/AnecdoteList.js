import React from 'react'
import Filter from './Filter'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {

  handleVote = (anecdote) => () => {
    this.props.voteAnecdote(anecdote)
    this.props.showNotification(`you voted '${anecdote.content}`)
    window.setTimeout(() => {
      this.props.hideNotification()
    }, 5000)
  }

  render() {
    const { anecdotes=[] } = this.props

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const filterAnecdotes = (anecdotes, filter) => {
  return anecdotes.filter((a) => a.content.toLowerCase().includes(filter))
}

const mapStateToProps = (state) => { 
  return {
    anecdotes: filterAnecdotes(state.anecdotes, state.filter),
  }
}
const mapDispatchToProps = {
    voteAnecdote, 
    showNotification,
    hideNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
