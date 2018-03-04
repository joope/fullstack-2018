import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Statistiikka from './Statistiikka'
import counterReducer from './reducer'

const store = createStore(counterReducer)

class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({
      type: nappi
    })
  }

  render() {
    const { good, neutral, bad } = store.getState()
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('NEUTRAL')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka hyva={good} neutraali={neutral} huono={bad} clearStats={this.klik('CLEAR')}/>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)
