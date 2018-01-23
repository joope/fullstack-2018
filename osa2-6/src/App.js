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
      filter: ''
    }
  }

  updateName = (event) => {
    this.setState({newName: event.target.value})
  }

  updateNumber = (event) => {
    const number = Number.parseInt(event.target.value, 10);
    if (Number.isNaN(number)) return;
    this.setState({newNumber: number})
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

  handleFilter = event => {
    this.setState({filter: event.target.value});
  }

  filterPersons = (persons, filter) => 
    persons.filter(person => 
       person.name.toLowerCase().includes(filter.toLowerCase())
    );

  listPersons = (persons) => (
    <table>
      <tbody>
      { persons.map(person => 
        <tr key={person.name}>
          <td>{person.name}</td>
          <td>{person.number}</td>
        </tr>
      )}
      </tbody>
    </table>
  )

  render() {
    const { persons, newName, newNumber, filter } = this.state;
    console.log(this.state)

    const filteredList = (filter.length > 0) ?
      this.filterPersons(persons, filter) :
      persons
    
    console.log(filteredList)
    const personList = this.listPersons(filteredList);
    
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        rajaa näytettäviä <input onChange={this.handleFilter} />

        <h3>Lisää uusi</h3>
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
        <h3>Numerot</h3>
        { personList }
      </div>
    )
  }
}

export default App
