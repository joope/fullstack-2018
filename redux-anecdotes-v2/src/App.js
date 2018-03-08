import React from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { getAll } from './services/anecdotes'
import { anecdotesInit } from './reducers/anecdoteReducer'

class App extends React.Component {

  componentDidMount = async () => {
    const anecdotes = await getAll()
    console.log(anecdotes)
    this.props.anecdotesInit(anecdotes)
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

const mapDispatchToProps = {
  anecdotesInit
}

export default connect(null, mapDispatchToProps)(App)