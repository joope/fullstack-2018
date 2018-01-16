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
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto 
                osat={[osa1, osa2, osa3]}
            />
            <Yhteensa osat={[osa1, osa2, osa3]} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
