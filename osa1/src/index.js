import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Button = (props) => (
    <button onClick={props.onClick}>
        {props.text}
    </button>
)

const Statistic = (props) => (
    <div>
        <span>{props.name}: {props.value}</span>
    </div>
)

const Statistics = (props) => {
    const { hyva, neutraali, huono } = props
    const yhteensa = hyva + neutraali + huono
    const keskiarvo = (hyva - huono) / yhteensa
    const positiivisia = hyva / yhteensa

    return (
        <div>
            <h1>statistiikka</h1>
            <div>
                <Statistic name="hyvä" value={hyva} />
                <Statistic name="neutraali" value={neutraali} />
                <Statistic name="huono" value={huono} />
                <Statistic name="keskiarvo" value={keskiarvo.toFixed(1)} />
                <Statistic name="positiivisia" value={(positiivisia * 100).toFixed(1) + '%'} />
            </div>
        </div>
    )
}

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
        const { hyva, neutraali, huono } = this.state

        return (
            <div>
                <h1>anna palautetta</h1>
                <Button onClick={() => this.setState({hyva: hyva + 1})} text="hyvä" />
                <Button onClick={() => this.setState({neutraali: neutraali + 1})} text="neutraali" />
                <Button onClick={() => this.setState({huono: huono + 1})} text="huono" />
                <Statistics hyva={hyva} neutraali={neutraali} huono={huono} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
