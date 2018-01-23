import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      query: ''
    }
  }

  updateName = (event) => {
    this.setState({newName: event.target.value})
  }

  updateNumber = (event) => {
    const number = Number.parseInt(event.target.value, 10);
    if (Number.isNaN(number)) return;

    this.setState({newNumber: event.target.value})
  }

  handleNewPerson = (event) => {
    event.preventDefault();
    const { newName, newNumber } = this.state;

    const nameExists = name => {
      return this.state.persons.find(
        person => person.name === name
      ) !== undefined;
    }

    if (!newName || nameExists(newName) ) return; 

    const newPerson = { name: newName, number: newNumber };
    this.setState(
      ({ persons }) => {
        return {
          persons: persons.concat(newPerson),
          newName: '',
          newNumber: ''
        }
      }
    )
  }

  listPersons = (persons) => (
    <table>
      { persons.map(person => 
        <tr>
          <td>{person.name}</td>
          <td>{person.number}</td>
        </tr>
      )}
    </table>
  )

  render() {
    const { persons, newName, newNumber } = this.state;
    console.log(this.state)
    
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.handleNewPerson}>
          <div>
            nimi: <input value={newName} onChange={this.updateName}/>
          </div>
          <div>
            numero: <input value={newNumber} onChange={this.updateNumber}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        { this.listPersons(persons) }
      </div>
    )
  }
}

export default App
