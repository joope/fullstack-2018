import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = ({kurssi}) => {
  return (
    <div>
      <Otsikko otsikko={kurssi.nimi} />
      <Sisalto sisalto={kurssi.osat} />
    </div>
  )
}

const Otsikko = ({otsikko}) => <h1>{otsikko}</h1>

const Sisalto = ({sisalto}) => 
  sisalto.map(osa => 
    <Osa 
      nimi={osa.nimi} 
      tehtavia={osa.tehtavia}
      key={osa.id}
    />
  )

const Osa = ({nimi, tehtavia}) => (
  <p>{nimi} {tehtavia}</p>
)

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
