import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => (
    <h1>{props.kurssi}</h1>
)

const Sisalto = (props) => (
    <div>
        <Osa osa={props.osat[0]} tehtavia={props.tehtavat[0]} />
        <Osa osa={props.osat[1]} tehtavia={props.tehtavat[1]} />
        <Osa osa={props.osat[2]} tehtavia={props.tehtavat[2]} />
    </div>
)

const Yhteensa = (props) => (
    <p>yhteensä {props.t1 + props.t2 + props.t3} tehtävää</p>
)

const Osa = (props) => (
    <p>{props.osa} {props.tehtavia}</p>
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
                tehtavat={[tehtavia1, tehtavia2, tehtavia3]} 
            />
            <Yhteensa t1={tehtavia1}  t2={tehtavia2}  t3={tehtavia3}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
