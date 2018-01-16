import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
    constructor () {
        super();
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    render () {
        const { hyva, neutraali, huono } = this.state;

        return (
            <div>
                <h1>anna palautetta</h1>
                <button onClick={() => this.setState({hyva: hyva + 1})}>hyvä</button>
                <button onClick={() => this.setState({neutraali: neutraali + 1})} >neutraali</button>
                <button onClick={() => this.setState({huono: hyva + 1})}>huono</button>

                <h1>statistiikka</h1>
                <p>
                    hyvä: {hyva} <br/>
                    neutraali: {neutraali} <br/>
                    huono: {huono}
                </p>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
