import React from 'react';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      anecdote: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      anecdote: event.target.value
    })
  }

  createNew = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD',
      anecdote: this.state.anecdote
    })
  }

  vote = (id) => () => {
    this.props.store.dispatch({
      type: 'VOTE',
      anecdoteId: id
    })
  }

  render() {
    const { store } = this.props
    const anecdotes = store.getState().sort((a,b) => {
      return b.votes - a.votes
    })
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote.id)}>vote
              </button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.createNew}>
          <div><input value={this.state.anecdote} onChange={this.handleInput}/></div>
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App