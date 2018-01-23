import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        this.setState({persons: res.data})
      })
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

  render() {
    const { persons, newName, newNumber, filter } = this.state;
    console.log(this.state)
    
    return (
      <div>
        <Header name="Puhelinluettelo" />
        <Input name='rajaa näytettäviä' onChange={this.handleFilter} />
        <PersonForm 
          newName={newName}
          newNumber={newNumber}
          handleNewPerson={this.handleNewPerson}
          updateName={this.updateName}
          updateNumber={this.updateNumber}
        />
        <PersonList persons={persons} filter={filter} />
      </div>
    )
  }
}

const Header = ({ name }) => (
    <h1>{name}</h1>
);

const Input = ({ name, value, onChange }) => (
  <div>
    {name}: <input value={value} onChange={onChange} />
  </div>
);

const SubmitButton = ({ name }) => (
  <div>
    <button type="submit">{name}</button>
  </div>
);

const PersonForm = ({ 
    newName, 
    newNumber, 
    handleNewPerson, 
    updateName, 
    updateNumber 
  }) => (
  <div>
    <h3>Lisää uusi</h3>
    <form onSubmit={handleNewPerson}>
      <Input name='nimi' value={newName} onChange={updateName} />
      <Input name='numero' value={newNumber} onChange={updateNumber} />
      <SubmitButton name='lisää' />
    </form>
  </div>
);

const PersonTable = ({ persons }) => (
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
);

const PersonList = ({ persons, filter }) => {

  const filteredList = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h3>Numerot</h3>
      <PersonTable persons={filteredList} />
    </div>
  );
};


export default App
