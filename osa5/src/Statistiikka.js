import React from 'react'

const Statistiikka = ({hyva=0, neutraali=0, huono=0, clearStats}) => {
  
  const yhteensa = hyva + neutraali + huono
  const keskiarvo = (hyva - huono) / yhteensa

  if (yhteensa === 0) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{hyva}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{neutraali}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{huono}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{keskiarvo}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{hyva / yhteensa}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={clearStats}>nollaa tilasto</button>
    </div >
  )
}



export default Statistiikka