import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = ({kurssi}) => {
  return (
    <div>
      <Otsikko otsikko={kurssi.nimi} />
      <Sisalto sisalto={kurssi.osat} />
      <Maara osat={kurssi.osat} />
    </div>
  )
}

const Maara = ({osat}) => 
  <p>
    yhteensä {osat.reduce((yht, osa) => yht + osa.tehtavia, 0)}
  </p>


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
        tehtavia: 20,
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
