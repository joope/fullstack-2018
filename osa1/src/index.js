import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({anecdote, votes}) => (
    <div>
        {anecdote} <br/>
        has {votes} votes <br/>
    </div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: new Array(props.anecdotes.length).fill(0)
    }
  }

  selectNewAnecdote = () => {
    const { anecdotes } = this.props
    const newSelection = Math.floor(Math.random() * anecdotes.length)
    this.setState({selected: newSelection})
  }

  voteAnecdote = () => {
    const { selected } = this.state;
    this.setState(prevState => {
        const newState = prevState
        newState.votes[selected] = newState.votes[selected] + 1
        return newState
    });
  }

  getMostVoted = () => {
    const { votes } = this.state;

    let mostVotes = 0

    votes.forEach((vote, index) => {
        if (vote > votes[mostVotes]) {
            mostVotes = index
        }
    })

    return mostVotes
  }

  render() {
    const { selected, votes } = this.state
    const { anecdotes } = this.props
    const mostVotes = this.getMostVoted()


    return (
      <div>
        <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
        <button onClick={this.voteAnecdote}>vote</button>
        <button onClick={this.selectNewAnecdote}>new anectdote</button>

        <h3>anecdote with most votes:</h3>
        <Anecdote anecdote={anecdotes[mostVotes]} votes={votes[mostVotes]} />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
