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
    yhteensä {osat.reduce((yht, osa) => yht + osa.tehtavia, 0)} tehtävää
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
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Opetusohjelma</h1>
      { kurssit.map(kurssi => <Kurssi kurssi={kurssi} />) }
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
