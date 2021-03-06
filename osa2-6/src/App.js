import React from 'react';
import personService from './services/persons';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notification: ''
    }
  }

  componentWillMount() {
    personService
      .getAll()
      .then(res => {
        this.setState({persons: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateName = (event) => {
    this.setState({newName: event.target.value})
  }

  updateNumber = (event) => {
    const number = event.target.value;
    if (!number) return;
    this.setState({newNumber: number})
  }

  nameExists = name => {
    return this.state.persons.find(
      person => person.name === name
    );
  }

  handleNewPerson = (event) => {
    event.preventDefault();
    const { newName, newNumber } = this.state;

    const oldPerson = this.nameExists(newName);
    if (oldPerson) {
      if (window.confirm(`${oldPerson.name} on jo luettelossa, 
korvataanko vanha numero uudella?`)) {
        personService
        .update(oldPerson.id, {...oldPerson, number: newNumber})
        .then(response => {
          this.setState({
            persons: this.state.persons.map((person) => person.id === oldPerson.id ? response.data : person),
            newName: '',
            newNumber: ''
          })
        })
        .catch(err => {
          this.displayNotification(`${oldPerson.name} on jo poistettu listasta!`);
          this.setState({
            persons: this.state.persons.filter((person) => person.id !== oldPerson.id)
          })
          return;
        })
      }
      this.displayNotification(`päivitettiin ${oldPerson.name}:n numero`);
      return;
    }

    if (!newName) return; 

    const newPerson = { name: newName, number: newNumber };
    personService
      .create(newPerson)
      .then(response => this.setState({
        persons: this.state.persons.concat(response.data),
        newName: '',
        newNumber: '',
      })
    )
    this.displayNotification(`lisättiin ${newPerson.name}`);
  }

  handleDelete = (id) => () => {
    const person = this.state.persons.find((person) => person.id === id);
    
    if (window.confirm(`poistetaanko ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(() => this.setState({
          persons: this.state.persons.filter((person) => person.id !== id)
        }))
        .catch(err => console.log(err))
      this.displayNotification(`poistettiin ${person.name}`);
    }
    
  }

  handleFilter = event => {
    this.setState({filter: event.target.value});
  }

  displayNotification = text => {
    this.setState({ notification: text});
    const cb = () => this.setState({notification: null});
    window.setTimeout(cb, 2000);
  }

  render() {
    const { persons, newName, newNumber, filter, notification } = this.state;
    console.log(this.state)
    
    return (
      <div>
        <Header name="Puhelinluettelo" />
        <Notification message={notification} />
        <Input name='rajaa näytettäviä' onChange={this.handleFilter} />
        <PersonForm 
          newName={newName}
          newNumber={newNumber}
          handleNewPerson={this.handleNewPerson}
          updateName={this.updateName}
          updateNumber={this.updateNumber}
        />
        <PersonList persons={persons} filter={filter} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

const Header = ({ name }) => (
    <h1>{name}</h1>
);

const Notification = ({ message }) => {
  return message  
    ? <div className='alert-success'>{message}</div>
    : null;
}
  

const Input = ({ name, value, onChange }) => (
  <div>
    {name}: <input value={value} onChange={onChange} />
  </div>
);

const SubmitButton = ({ name }) => (
  <button type="submit">{name}</button>
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

const PersonTable = ({ persons, handleDelete }) => (
  <table>
    <tbody>
    { persons.map(person => 
      <tr key={person.name}>
        <td>{person.name}</td>
        <td>{person.number}</td>
        <td><button onClick={handleDelete(person.id)} type="button">poista</button></td>
      </tr>
    )}
    </tbody>
  </table>
);

const PersonList = ({ persons, filter, handleDelete }) => {

  const filteredList = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h3>Numerot</h3>
      <PersonTable persons={filteredList} handleDelete={handleDelete} />
    </div>
  );
};


export default App
