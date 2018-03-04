import React from 'react';


class App extends React.Component {
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
              <button 
                onClick={() => store.dispatch({
                  type: 'VOTE',
                  anecdoteId: anecdote.id
                })}>vote
              </button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input /></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App