import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => (
    <h1>{props.kurssi}</h1>
)

const Sisalto = (props) => {
    const osat = props.osat;
    return (
        <div>
            <Osa osa={osat[0]} />
            <Osa osa={osat[1]} />
            <Osa osa={osat[2]} />
        </div>
    )
    
}
const Yhteensa = (props) => {
    const osat = props.osat;
    return (
        <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>
    )
}

const Osa = (props) => (
    <p>{props.osa.nimi} {props.osa.tehtavia}</p>
)

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
