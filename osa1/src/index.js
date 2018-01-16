import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => (
    <tr>
        <td>{props.name}:</td> 
        <td>{props.value}</td>
    </tr>
)

const Statistics = ({ hyva, neutraali, huono }) => {

    if (hyva + neutraali + huono === 0) {
        return <p>yhtään palautetta ei ole annettu</p>
    }

    const yhteensa = hyva + neutraali + huono
    const keskiarvo = (hyva - huono) / yhteensa
    const positiivisia = hyva / yhteensa

    return (
        <table>
            <tbody>
                <Statistic name="hyvä" value={hyva} />
                <Statistic name="neutraali" value={neutraali} />
                <Statistic name="huono" value={huono} />
                <Statistic name="keskiarvo" value={keskiarvo.toFixed(1)} />
                <Statistic name="positiivisia" value={(positiivisia * 100).toFixed(1) + '%'} />
            </tbody>
        </table>
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

    palaute = (tyyppi) => () => 
        this.setState((prevState) => ({
            [tyyppi]: prevState[tyyppi] + 1
        }));

    render () {
        const { hyva, neutraali, huono } = this.state

        return (
            <div>
                <h1>anna palautetta</h1>
                <Button handleClick={this.palaute('hyva')} text="hyvä" />
                <Button handleClick={this.palaute('neutraali')} text="neutraali" />
                <Button handleClick={this.palaute('huono')} text="huono" />
                <h1>statistiikka</h1>
                <Statistics hyva={hyva} neutraali={neutraali} huono={huono} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
