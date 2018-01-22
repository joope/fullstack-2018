import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: 'asd'
    }
  }

  updateName = (event) => {
    this.setState({newName: event.target.value})
  }

  handleNameAdd = (event) => {
    event.preventDefault();
    const { newName } = this.state;

    const nameExists = name => {
      return this.state.persons.find(
        person => person.name === name
      ) !== undefined;
    }

    if (!newName || nameExists(newName) ) return; 

    const newPerson = { name: newName };
    this.setState(
      ({ persons }) => {
        return {
          persons: [...persons, newPerson],
          newName: ''
        }
      }
    )
  }

  render() {
    const { persons, newName } = this.state;
    console.log(this.state)
    const listPersons = persons.map(person => <li key={person.name}>{person.name}</li>);

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.handleNameAdd}>
          <div>
            nimi: <input value={newName} onChange={this.updateName}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
        { listPersons }
        </ul>
      </div>
    )
  }
}

export default App
