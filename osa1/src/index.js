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

    if (hyva + neutraali + huono === 0) {
        return (<p>yhtään palautetta ei ole annettu</p>)
    }

    const yhteensa = hyva + neutraali + huono
    const keskiarvo = (hyva - huono) / yhteensa
    const positiivisia = hyva / yhteensa

    return (
        <div>
            <Statistic name="hyvä" value={hyva} />
            <Statistic name="neutraali" value={neutraali} />
            <Statistic name="huono" value={huono} />
            <Statistic name="keskiarvo" value={keskiarvo.toFixed(1)} />
            <Statistic name="positiivisia" value={(positiivisia * 100).toFixed(1) + '%'} />
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

    palaute = (tyyppi) => {
        return () => {
            console.log(tyyppi)
            this.setState((prevState) => ({
                [tyyppi]: prevState[tyyppi] + 1
            }));
        }
    }

    render () {
        const { hyva, neutraali, huono } = this.state

        return (
            <div>
                <h1>anna palautetta</h1>
                <Button onClick={this.palaute('hyva')} text="hyvä" />
                <Button onClick={this.palaute('neutraali')} text="neutraali" />
                <Button onClick={this.palaute('huono')} text="huono" />
                <h1>statistiikka</h1>
                <Statistics hyva={hyva} neutraali={neutraali} huono={huono} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
